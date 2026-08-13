import React, { useEffect, useRef, useState, useCallback } from 'react';
import { HeroScrollCanvas } from './HeroScrollCanvas';
import { HeroStoryContent } from './HeroStoryContent';

const TOTAL_FRAMES = 80;
const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const paddedIndex = String(i).padStart(3, '0');
  return `/content-hero/Dog_running_to_man_embracing_202608131159_${paddedIndex}.jpg`;
});

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [loadingRatio, setLoadingRatio] = useState<number>(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Check prefers-reduced-motion accessibility preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Calculate scroll progress relative to hero container
  const handleScroll = useCallback(() => {
    if (!heroRef.current || reducedMotion) return;

    const rect = heroRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollableDistance = rect.height - windowHeight;

    if (totalScrollableDistance <= 0) {
      setScrollProgress(0);
      return;
    }

    const currentScroll = -rect.top;
    const rawProgress = currentScroll / totalScrollableDistance;
    const clampedProgress = Math.min(1, Math.max(0, rawProgress));
    setScrollProgress(clampedProgress);
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

  const handleLoadingStatusChange = useCallback((ratio: number, fullyLoaded: boolean) => {
    setLoadingRatio(ratio);
    setIsFullyLoaded(fullyLoaded);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className={`relative w-full bg-[#1E1715] ${reducedMotion ? 'h-screen' : 'h-[350vh]'}`}
    >
      {/* Sticky Canvas & Overlay Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Render Component */}
        <HeroScrollCanvas
          scrollProgress={scrollProgress}
          totalFrames={TOTAL_FRAMES}
          framePaths={FRAME_PATHS}
          reducedMotion={reducedMotion}
          onLoadingStatusChange={handleLoadingStatusChange}
        />

        {/* Text Storytelling & Motion Overlay */}
        <HeroStoryContent scrollProgress={scrollProgress} reducedMotion={reducedMotion} />

        {/* Subtle Discrete Loading Indicator */}
        {!isFullyLoaded && (
          <div className="absolute bottom-6 right-6 z-30 bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2.5 text-[11px] font-medium text-amber-200 shadow-xl transition-opacity duration-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Carregando experiência ({Math.round(loadingRatio * 100)}%)</span>
          </div>
        )}

        {/* Smooth Bottom Mask Gradient Transition into #racas */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-linear-to-t from-[#FAF7F2] via-[#FAF7F2]/60 to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
};

export default Hero;
