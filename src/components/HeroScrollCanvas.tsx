import React, { useEffect, useRef, useState, useCallback } from 'react';

interface HeroScrollCanvasProps {
  scrollProgressRef: React.RefObject<number>;
  totalFrames: number;
  framePaths: string[];
  reducedMotion?: boolean;
  onLoadingStatusChange?: (loadedRatio: number, isFullyLoaded: boolean) => void;
}

export const HeroScrollCanvas: React.FC<HeroScrollCanvasProps> = ({
  scrollProgressRef,
  totalFrames,
  framePaths,
  reducedMotion = false,
  onLoadingStatusChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedCountRef = useRef<number>(0);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  
  // Smooth LERP animation state refs
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  // Initialize images array
  useEffect(() => {
    imagesRef.current = new Array(totalFrames).fill(null);
  }, [totalFrames]);

  // Core canvas draw function with cover math
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Find target image or closest loaded fallback
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = frameIndex - offset;
        const next = frameIndex + offset;
        if (prev >= 0 && imagesRef.current[prev]?.complete) {
          fallbackSearch: {
            img = imagesRef.current[prev];
            break fallbackSearch;
          }
        } else if (next < totalFrames && imagesRef.current[next]?.complete) {
          fallbackSearch2: {
            img = imagesRef.current[next];
            break fallbackSearch2;
          }
        }
      }
    }

    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;
    const imgAspect = imgWidth / imgHeight;
    const canvasAspect = canvasWidth / canvasHeight;

    let renderWidth = canvasWidth;
    let renderHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      renderHeight = canvasWidth / imgAspect;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      renderWidth = canvasHeight * imgAspect;
      offsetX = (canvasWidth - renderWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    lastDrawnFrameRef.current = frameIndex;
  }, [totalFrames]);

  // Canvas resize with performance cap on devicePixelRatio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    // Cap DPR at 1.5 max for high fps rendering without GPU overhead
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const rect = parent.getBoundingClientRect();

    const displayWidth = Math.floor(rect.width);
    const displayHeight = Math.floor(rect.height);

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    const currentProgress = scrollProgressRef.current || 0;
    const targetIndex = reducedMotion
      ? 0
      : Math.min(totalFrames - 1, Math.max(0, Math.floor(currentProgress * (totalFrames - 1))));
    drawFrame(targetIndex);
  }, [scrollProgressRef, totalFrames, reducedMotion, drawFrame]);

  // Preloading images: Load frame 0 first for instant visual, then rest in parallel
  useEffect(() => {
    let isCancelled = false;

    const loadSingleImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        if (imagesRef.current[index]) {
          resolve(imagesRef.current[index]!);
          return;
        }
        const img = new Image();
        img.src = framePaths[index];
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[index] = img;
            loadedCountRef.current += 1;
            const ratio = loadedCountRef.current / totalFrames;
            onLoadingStatusChange?.(ratio, loadedCountRef.current === totalFrames);
          }
          resolve(img);
        };
        img.onerror = (err) => reject(err);
      });
    };

    // Load frame 0 immediately
    loadSingleImage(0)
      .then(() => {
        if (isCancelled) return;
        setFirstFrameLoaded(true);
        resizeCanvas();

        // Load all other frames in fast parallel batches
        const remainingIndices = Array.from({ length: totalFrames - 1 }, (_, i) => i + 1);
        const batchSize = 10;
        const loadBatches = async () => {
          for (let i = 0; i < remainingIndices.length; i += batchSize) {
            if (isCancelled) break;
            const batch = remainingIndices.slice(i, i + batchSize);
            await Promise.allSettled(batch.map((idx) => loadSingleImage(idx)));
          }
        };
        loadBatches();
      })
      .catch((err) => console.error('Hero frame load error', err));

    return () => {
      isCancelled = true;
    };
  }, [framePaths, totalFrames, onLoadingStatusChange, resizeCanvas]);

  // Window Resize
  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Continuous smooth LERP RAF Loop
  useEffect(() => {
    if (!firstFrameLoaded) return;

    let isActive = true;

    const animLoop = () => {
      if (!isActive) return;

      const progress = scrollProgressRef.current || 0;
      const targetFrame = reducedMotion ? 0 : progress * (totalFrames - 1);

      // LERP (Linear Interpolation) factor for buttery 60fps smoothing
      // 0.15 gives a smooth, fluid, cinematic pace
      currentFrameRef.current += (targetFrame - currentFrameRef.current) * 0.15;

      const roundedFrame = Math.min(
        totalFrames - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      if (roundedFrame !== lastDrawnFrameRef.current) {
        drawFrame(roundedFrame);
      }

      rafIdRef.current = requestAnimationFrame(animLoop);
    };

    rafIdRef.current = requestAnimationFrame(animLoop);

    return () => {
      isActive = false;
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [firstFrameLoaded, totalFrames, reducedMotion, scrollProgressRef, drawFrame]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1A1412]">
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover transition-opacity duration-300 pointer-events-none"
        style={{ opacity: firstFrameLoaded ? 1 : 0 }}
      />
    </div>
  );
};
