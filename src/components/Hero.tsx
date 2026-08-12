import React from 'react';
import { MessageCircle, Heart, Star, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { businessInfo, getWhatsAppLink } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-8 sm:pt-12 lg:pt-16 pb-20 md:pb-28 overflow-hidden bg-linear-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFE6]">
      {/* Background Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C85A70]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D97757]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F3E8E0] text-[#C85A70] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-[#E5D2C5]">
              <Heart className="w-4 h-4 fill-[#C85A70]" />
              <span>Canil Especializado em Raças de Pequeno Porte</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#2D2422] leading-[1.15] tracking-tight">
              <span className="text-[#C85A70] block italic font-normal">Puro amor...</span>
              Encontre o novo integrante da sua família em Fortaleza.
            </h1>

            {/* Subtitle / Mission */}
            <p className="text-base sm:text-lg text-[#5A4D4A] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {businessInfo.subTagline}
            </p>

            {/* Raças em destaque pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="text-xs font-semibold text-[#8B6B5D] uppercase tracking-wider">Raças:</span>
              {['Spitz Alemão', 'Chihuahua', 'Maltês', 'Yorkshire'].map((raca) => (
                <span key={raca} className="bg-white/80 border border-[#E8E2D9] px-3 py-1 rounded-full text-xs font-medium text-[#2D2422] shadow-xs">
                  🐾 {raca}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#racas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C85A70] hover:bg-[#b04a5f] text-white font-bold px-8 py-4 rounded-full text-base shadow-lg shadow-[#C85A70]/25 hover:shadow-xl hover:shadow-[#C85A70]/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Ver Filhotes Disponíveis</span>
                <ChevronDown className="w-5 h-5" />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-full text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-[#E8E2D9] grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#2D2422]">4.9 de 5 ★</div>
                  <div className="text-xs text-[#8B6B5D]">115+ avaliações Google</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#2D2422]">Criação Ética</div>
                  <div className="text-xs text-[#8B6B5D]">Ambiente Residencial</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="bg-rose-100 p-2 rounded-full text-[#C85A70]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#2D2422]">Suporte Total</div>
                  <div className="text-xs text-[#8B6B5D]">Pré e Pós-Venda</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card Framing */}
              <div className="absolute -inset-4 bg-linear-to-tr from-[#C85A70]/20 to-[#D97757]/20 rounded-3xl blur-lg opacity-70 transform -rotate-1" />
              
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-[#E8E2D9]/80 overflow-hidden">
                <img
                  src="/images/hero.png"
                  alt="Filhote de pequeno porte amado no Tia Rita Pets"
                  className="w-full h-95 sm:h-115 object-cover rounded-2xl shadow-inner transform transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Overlay Badge 1: Location */}
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#E8E2D9] flex items-center gap-2 text-xs font-bold text-[#2D2422]">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Fortaleza, Meireles</span>
                </div>

                {/* Floating Overlay Badge 2: Loving Guarantee */}
                <div className="absolute bottom-8 left-8 bg-[#2D2422]/90 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl max-w-60 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-1">
                    <Heart className="w-4 h-4 fill-amber-300" />
                    <span>Cuidado & Carinho</span>
                  </div>
                  <p className="text-[11px] text-[#E8DCCF] leading-tight">
                    Transição simples e tranquila do nosso lar para a sua família.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
