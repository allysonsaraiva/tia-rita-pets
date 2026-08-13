import React from 'react';
import { Heart, MessageCircle, ChevronDown, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { businessInfo, getWhatsAppLink } from '../data/content';

interface HeroStoryContentProps {
  scrollProgress: number;
  reducedMotion?: boolean;
}

export const HeroStoryContent: React.FC<HeroStoryContentProps> = ({
  scrollProgress,
  reducedMotion = false,
}) => {
  // Calculate phase opacities and transformations based on scroll progress
  // Phase 1: 0.0 - 0.22 (Intro)
  // Phase 2: 0.30 - 0.65 (Narrative)
  // Phase 3: 0.72 - 1.00 (Payoff)

  let introOpacity = 1;
  let introTranslateY = 0;
  let narrativeOpacity = 0;
  let narrativeTranslateY = 20;
  let payoffOpacity = 0;
  let payoffTranslateY = 20;

  if (!reducedMotion) {
    // Phase 1 Fade Out
    if (scrollProgress <= 0.15) {
      introOpacity = 1;
      introTranslateY = 0;
    } else if (scrollProgress <= 0.28) {
      const progress = (scrollProgress - 0.15) / 0.13;
      introOpacity = Math.max(0, 1 - progress);
      introTranslateY = -24 * progress;
    } else {
      introOpacity = 0;
      introTranslateY = -24;
    }

    // Phase 2 Fade In & Out
    if (scrollProgress > 0.28 && scrollProgress <= 0.40) {
      const progress = (scrollProgress - 0.28) / 0.12;
      narrativeOpacity = Math.min(1, progress);
      narrativeTranslateY = 20 * (1 - progress);
    } else if (scrollProgress > 0.40 && scrollProgress <= 0.60) {
      narrativeOpacity = 1;
      narrativeTranslateY = 0;
    } else if (scrollProgress > 0.60 && scrollProgress <= 0.72) {
      const progress = (scrollProgress - 0.60) / 0.12;
      narrativeOpacity = Math.max(0, 1 - progress);
      narrativeTranslateY = -20 * progress;
    } else {
      narrativeOpacity = 0;
    }

    // Phase 3 Fade In
    if (scrollProgress > 0.72 && scrollProgress <= 0.85) {
      const progress = (scrollProgress - 0.72) / 0.13;
      payoffOpacity = Math.min(1, progress);
      payoffTranslateY = 20 * (1 - progress);
    } else if (scrollProgress > 0.85) {
      payoffOpacity = 1;
      payoffTranslateY = 0;
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 sm:p-6 lg:p-12">
      {/* Background Gradient Overlays for High Text Contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/25 to-black/70 pointer-events-none" />

      {/* Top Bar / Brand Badge */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-16 sm:pt-20 lg:pt-24 flex justify-between items-start">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-lg">
          <Heart className="w-3.5 h-3.5 fill-[#C85A70] text-[#C85A70]" />
          <span>Canil Especializado em Raças de Pequeno Porte</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex-1 flex items-center justify-center lg:justify-start">
        {/* ================= PHASE 1: INTRO ================= */}
        <div
          className="max-w-2xl text-center lg:text-left transition-all duration-300 pointer-events-auto"
          style={{
            opacity: introOpacity,
            transform: `translateY(${introTranslateY}px)`,
            display: introOpacity <= 0.01 && !reducedMotion ? 'none' : 'block',
          }}
        >
          {/* Eyebrow */}
          <div className="text-amber-300 font-semibold tracking-widest text-xs sm:text-sm uppercase mb-3 drop-shadow-md">
            TIA RITA PETS • FORTALEZA - CE
          </div>

          {/* Main Headline H1 for SEO & Impact */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.12] tracking-tight drop-shadow-xl mb-4">
            <span className="text-amber-200 block italic font-normal text-3xl sm:text-4xl lg:text-5xl">
              Puro amor...
            </span>
            O amor começa pequeno.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-amber-50/90 leading-relaxed mb-6 max-w-xl drop-shadow-md">
            Encontre um companheiro de raça pequena para compartilhar os melhores momentos da sua vida. Criados com afeto e responsabilidade.
          </p>

          {/* Raças Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
            <span className="text-xs font-semibold text-amber-200/90 uppercase tracking-wider">
              Raças:
            </span>
            {['Spitz Alemão', 'Chihuahua', 'Maltês', 'Yorkshire'].map((raca) => (
              <span
                key={raca}
                className="bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-medium text-white shadow-xs"
              >
                🐾 {raca}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#racas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C85A70] hover:bg-[#b04a5f] text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-[#C85A70]/30 hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Conheça Nossos Filhotes</span>
              <ChevronDown className="w-5 h-5" />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-full text-base shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Trust Markers */}
          <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
            <div className="flex items-center gap-2.5">
              <div className="bg-amber-400/20 p-2 rounded-full text-amber-300">
                <Star className="w-4 h-4 fill-amber-300" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-white">4.9 de 5 ★</div>
                <div className="text-[11px] text-amber-100/80">115+ avaliações Google</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-400/20 p-2 rounded-full text-emerald-300">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-white">Criação Ética</div>
                <div className="text-[11px] text-amber-100/80">Ambiente Residencial</div>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
              <div className="bg-rose-400/20 p-2 rounded-full text-rose-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-white">Suporte Total</div>
                <div className="text-[11px] text-amber-100/80">Pré e Pós-Venda</div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PHASE 2: NARRATIVE ================= */}
        {!reducedMotion && (
          <div
            className="absolute max-w-xl text-center px-4 transition-all duration-300 pointer-events-auto"
            style={{
              opacity: narrativeOpacity,
              transform: `translateY(${narrativeTranslateY}px)`,
              display: narrativeOpacity <= 0.01 ? 'none' : 'block',
            }}
          >
            <div className="inline-block bg-black/40 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl">
              <div className="text-amber-300 text-xs uppercase tracking-widest font-semibold mb-2">
                UMA HISTÓRIA DE AMOR
              </div>
              <p className="text-xl sm:text-2xl font-display italic text-white leading-relaxed font-normal drop-shadow-lg">
                "Cada passo em direção a você é o início de uma vida repleta de carinho, alegria e lealdade."
              </p>
              <div className="mt-4 text-xs text-amber-100/70 font-medium">
                Tia Rita Pets • Meireles, Fortaleza - CE
              </div>
            </div>
          </div>
        )}

        {/* ================= PHASE 3: PAYOFF ================= */}
        {!reducedMotion && (
          <div
            className="max-w-2xl text-center lg:text-left transition-all duration-300 pointer-events-auto"
            style={{
              opacity: payoffOpacity,
              transform: `translateY(${payoffTranslateY}px)`,
              display: payoffOpacity <= 0.01 ? 'none' : 'block',
            }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-md text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>O Momento Mais Esperado</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.12] tracking-tight drop-shadow-2xl mb-4">
              Seu novo melhor amigo está aqui.
            </h2>

            <p className="text-base sm:text-lg text-amber-50/90 leading-relaxed mb-8 max-w-lg drop-shadow-md">
              Pronto para transformar sua casa com momentos inesquecíveis? Fale conosco e venha conhecer nossos filhotes em Fortaleza.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#racas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C85A70] hover:bg-[#b04a5f] text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-[#C85A70]/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Ver Filhotes Disponíveis</span>
                <ChevronDown className="w-5 h-5" />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-full text-base shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Scroll Indicator Hint */}
      {!reducedMotion && introOpacity > 0.5 && (
        <div className="relative z-20 max-w-7xl mx-auto w-full pb-4 flex justify-center items-center pointer-events-auto">
          <a
            href="#racas"
            className="flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200 group"
          >
            <span className="text-[11px] font-medium tracking-wider uppercase text-amber-200/90 group-hover:text-amber-200">
              Role para interagir com a história
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce text-amber-300" />
          </a>
        </div>
      )}
    </div>
  );
};
