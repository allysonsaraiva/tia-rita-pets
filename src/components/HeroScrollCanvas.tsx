import React, { useEffect, useRef, useState, useCallback } from 'react';

interface HeroScrollCanvasProps {
  scrollProgress: number;
  totalFrames: number;
  framePaths: string[];
  reducedMotion?: boolean;
  onLoadingStatusChange?: (loadedRatio: number, isFullyLoaded: boolean) => void;
}

export const HeroScrollCanvas: React.FC<HeroScrollCanvasProps> = ({
  scrollProgress,
  totalFrames,
  framePaths,
  reducedMotion = false,
  onLoadingStatusChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedCountRef = useRef<number>(0);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const lastDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  // Initialize images array ref
  useEffect(() => {
    imagesRef.current = new Array(totalFrames).fill(null);
  }, [totalFrames]);

  // Canvas drawing function with cover math
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested image or fallback to nearest loaded frame
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Fallback: search closest loaded frame
      let fallbackImg: HTMLImageElement | null = null;
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = frameIndex - offset;
        const next = frameIndex + offset;
        if (prev >= 0 && imagesRef.current[prev]?.complete) {
          fallbackImg = imagesRef.current[prev];
          break;
        }
        if (next < totalFrames && imagesRef.current[next]?.complete) {
          fallbackImg = imagesRef.current[next];
          break;
        }
      }
      img = fallbackImg;
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

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    lastDrawnFrameRef.current = frameIndex;
  }, [totalFrames]);

  // Handle canvas sizing and high-DPI scaling
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = parent.getBoundingClientRect();

    const displayWidth = Math.floor(rect.width);
    const displayHeight = Math.floor(rect.height);

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    // Force redraw on resize
    const targetIndex = reducedMotion
      ? 0
      : Math.min(totalFrames - 1, Math.max(0, Math.floor(scrollProgress * (totalFrames - 1))));
    drawFrame(targetIndex);
  }, [scrollProgress, totalFrames, reducedMotion, drawFrame]);

  // Preload strategy: Load frame 0 first for instant display, then chunk load the rest
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
        img.onerror = (err) => {
          reject(err);
        };
      });
    };

    // Step 1: Load frame 0 immediately
    loadSingleImage(0)
      .then(() => {
        if (isCancelled) return;
        setFirstFrameLoaded(true);
        resizeCanvas();

        // Step 2: Load remaining frames in sequence/chunks
        const remainingIndices = Array.from({ length: totalFrames - 1 }, (_, i) => i + 1);
        
        // Priority chunk loading: every 4th frame first for rapid scroll coverage, then fill remaining
        const priorityIndices = remainingIndices.filter((idx) => idx % 4 === 0);
        const restIndices = remainingIndices.filter((idx) => idx % 4 !== 0);
        const orderedIndices = [...priorityIndices, ...restIndices];

        const loadNextChunk = async () => {
          const CHUNK_SIZE = 6;
          for (let i = 0; i < orderedIndices.length; i += CHUNK_SIZE) {
            if (isCancelled) break;
            const chunk = orderedIndices.slice(i, i + CHUNK_SIZE);
            await Promise.allSettled(chunk.map((idx) => loadSingleImage(idx)));
          }
        };

        loadNextChunk();
      })
      .catch((error) => {
        console.error('Failed to load initial hero frame', error);
      });

    return () => {
      isCancelled = true;
    };
  }, [framePaths, totalFrames, onLoadingStatusChange, resizeCanvas]);

  // Window resize observer
  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resizeCanvas]);

  // Sync scroll progress to canvas rendering via requestAnimationFrame
  useEffect(() => {
    if (!firstFrameLoaded) return;

    const targetFrameIndex = reducedMotion
      ? 0
      : Math.min(totalFrames - 1, Math.max(0, Math.floor(scrollProgress * (totalFrames - 1))));

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      drawFrame(targetFrameIndex);
    });

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [scrollProgress, totalFrames, reducedMotion, firstFrameLoaded, drawFrame]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#1E1715]">
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover transition-opacity duration-500 pointer-events-none"
        style={{ opacity: firstFrameLoaded ? 1 : 0 }}
      />
    </div>
  );
};
