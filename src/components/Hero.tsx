import React, { useEffect, useRef, useState, useCallback } from 'react';
import { HeroScrollCanvas } from './HeroScrollCanvas';
import { HeroStoryContent } from './HeroStoryContent';

const TOTAL_FRAMES = 80;
const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const paddedIndex = String(i).padStart(3, '0');
  return `/content-hero/Dog_running_to_man_embracing_202608131159_${paddedIndex}.jpg`;
});

interface HeroProps {
  onLoadingStatusChange?: (ratio: number, fullyLoaded: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({ onLoadingStatusChange }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const scrollProgressRef = useRef<number>(0);
  const [scrollProgressState, setScrollProgressState] = useState<number>(0);
  const [loadingRatio, setLoadingRatio] = useState<number>(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Accessibility reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Calculate scroll progress with fast throttle for UI text and ref for Canvas
  const handleScroll = useCallback(() => {
    if (!heroRef.current || reducedMotion) return;

    const rect = heroRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollableDistance = rect.height - windowHeight;

    if (totalScrollableDistance <= 0) {
      scrollProgressRef.current = 0;
      setScrollProgressState(0);
      return;
    }

    const currentScroll = -rect.top;
    const rawProgress = currentScroll / totalScrollableDistance;
    const clampedProgress = Math.min(1, Math.max(0, rawProgress));

    scrollProgressRef.current = clampedProgress;

    // Throttle React state updates so we don't trigger React renders on every pixel
    setScrollProgressState((prev) => {
      if (Math.abs(prev - clampedProgress) > 0.015) {
        return clampedProgress;
      }
      return prev;
    });
  }, [reducedMotion]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  const handleCanvasLoadingStatusChange = useCallback(
    (ratio: number, fullyLoaded: boolean) => {
      setLoadingRatio(ratio);
      setIsFullyLoaded(fullyLoaded);
      onLoadingStatusChange?.(ratio, fullyLoaded);
    },
    [onLoadingStatusChange]
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative w-full bg-[#1A1412] ${reducedMotion ? 'h-screen' : 'h-[280vh]'}`}
    >
      {/* Sticky Canvas & Story Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Optimized Canvas Engine */}
        <HeroScrollCanvas
          scrollProgressRef={scrollProgressRef}
          totalFrames={TOTAL_FRAMES}
          framePaths={FRAME_PATHS}
          reducedMotion={reducedMotion}
          onLoadingStatusChange={handleCanvasLoadingStatusChange}
        />

        {/* Minimalist Editorial Story Content */}
        <HeroStoryContent scrollProgress={scrollProgressState} reducedMotion={reducedMotion} />

        {/* Preload Status Indicator */}
        {!isFullyLoaded && (
          <div className="absolute bottom-6 right-6 z-30 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2 text-[10px] text-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>Carregando ({Math.round(loadingRatio * 100)}%)</span>
          </div>
        )}

        {/* Soft Bottom Transition Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#FAF7F2] to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
};

export default Hero;
