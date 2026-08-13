import React from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

interface HeroStoryContentProps {
  scrollProgress: number;
  reducedMotion?: boolean;
}

export const HeroStoryContent: React.FC<HeroStoryContentProps> = ({
  scrollProgress,
  reducedMotion = false,
}) => {
  // Phase 1 (Intro): 0.0 - 0.30
  // Phase 2 (Clean focus): 0.30 - 0.70 (clean screen so video is 100% visible)
  // Phase 3 (Payoff): 0.70 - 1.00

  let introOpacity = 1;
  let introTranslateY = 0;
  let payoffOpacity = 0;
  let payoffTranslateY = 20;

  if (!reducedMotion) {
    // Intro text fades out smoothly between 0.15 and 0.30 scroll
    if (scrollProgress <= 0.15) {
      introOpacity = 1;
      introTranslateY = 0;
    } else if (scrollProgress <= 0.30) {
      const progress = (scrollProgress - 0.15) / 0.15;
      introOpacity = Math.max(0, 1 - progress);
      introTranslateY = -20 * progress;
    } else {
      introOpacity = 0;
      introTranslateY = -20;
    }

    // Payoff text enters smoothly between 0.70 and 0.85 scroll
    if (scrollProgress > 0.70 && scrollProgress <= 0.85) {
      const progress = (scrollProgress - 0.70) / 0.15;
      payoffOpacity = Math.min(1, progress);
      payoffTranslateY = 20 * (1 - progress);
    } else if (scrollProgress > 0.85) {
      payoffOpacity = 1;
      payoffTranslateY = 0;
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 sm:p-10 lg:p-16">
      {/* Light gradient overlay on the left side only for text legibility */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-linear-to-r from-black/65 via-black/30 to-transparent pointer-events-none transition-opacity duration-500" />

      {/* Spacer / Top margin */}
      <div className="relative z-20 w-full pt-12 sm:pt-16" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex-1 flex items-center justify-start">
        {/* ================= PHASE 1: INTRO (Clean & Editorial) ================= */}
        <div
          className="max-w-xl text-left transition-all duration-300 pointer-events-auto"
          style={{
            opacity: introOpacity,
            transform: `translateY(${introTranslateY}px)`,
            display: introOpacity <= 0.01 && !reducedMotion ? 'none' : 'block',
          }}
        >
          {/* Eyebrow */}
          <div className="text-amber-300/90 font-semibold tracking-widest text-xs uppercase mb-3 drop-shadow-sm">
            TIA RITA PETS • CANIL EM FORTALEZA
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight drop-shadow-md mb-4">
            <span className="text-amber-200 block italic font-normal text-3xl sm:text-4xl lg:text-5xl">
              Puro amor...
            </span>
            O amor começa pequeno.
          </h1>

          {/* Clean Subtitle */}
          <p className="text-base sm:text-lg text-amber-50/90 leading-relaxed mb-8 max-w-md drop-shadow-sm">
            Encontre um companheiro de raça pequena para compartilhar os melhores momentos da sua vida.
          </p>

          {/* Clean CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#racas"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 font-semibold px-6 py-3.5 rounded-full text-base transition-all duration-200"
            >
              <span>Nossos Filhotes</span>
              <ChevronDown className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 font-semibold px-6 py-3.5 rounded-full text-base transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* ================= PHASE 3: PAYOFF (Final Embrace) ================= */}
        {!reducedMotion && (
          <div
            className="max-w-xl text-left transition-all duration-300 pointer-events-auto"
            style={{
              opacity: payoffOpacity,
              transform: `translateY(${payoffTranslateY}px)`,
              display: payoffOpacity <= 0.01 ? 'none' : 'block',
            }}
          >
            <div className="text-amber-300/90 font-semibold tracking-widest text-xs uppercase mb-3 drop-shadow-sm">
              MOMENTO MAIS ESPERADO
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight drop-shadow-md mb-4">
              Seu novo melhor amigo está aqui.
            </h2>

            <p className="text-base sm:text-lg text-amber-50/90 leading-relaxed mb-8 max-w-md drop-shadow-sm">
              Criados com amor e carinho no coração de Fortaleza. Venha conhecer nossos filhotes.
            </p>
          </div>
        )}
      </div>

      {/* Subtle Scroll Hint */}
      {!reducedMotion && introOpacity > 0.5 && (
        <div className="relative z-20 w-full pb-2 flex justify-center items-center pointer-events-auto">
          <a
            href="#racas"
            className="flex items-center gap-2 text-xs text-amber-200/80 hover:text-white transition-colors duration-200"
          >
            <span>Role para interagir</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-amber-300" />
          </a>
        </div>
      )}
    </div>
  );
};
