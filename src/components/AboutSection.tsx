import React from 'react';
import { aboutStory } from '../data/content';
import { Heart, ShieldCheck, Home, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="historia" className="py-20 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with badges */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Accent Frame */}
              <div className="absolute -inset-4 bg-[#D97757]/10 rounded-3xl transform rotate-2" />
              
              <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-[#E8E2D9]">
                <img
                  src="/images/about.png"
                  alt="Carinho e cuidado no Tia Rita Pets"
                  className="w-full h-105 sm:h-120 object-cover rounded-2xl"
                />

                {/* Floating Stat Card 1 */}
                <div className="absolute -bottom-6 -right-4 sm:right-4 bg-[#2D2422] text-white p-4 rounded-2xl shadow-xl max-w-55 border border-white/10">
                  <div className="flex items-center gap-2 text-rose-300 font-bold text-sm mb-1">
                    <Heart className="w-4 h-4 fill-rose-300" />
                    <span>Amor incondicional</span>
                  </div>
                  <p className="text-xs text-[#E8DCCF] leading-tight">
                    Nosso dia a dia é repleto de emoção, cuidado e respeito a cada filhote.
                  </p>
                </div>

                {/* Floating Stat Card 2 */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#E8E2D9] flex items-center gap-3">
                  <div className="bg-[#C85A70]/10 p-2.5 rounded-xl text-[#C85A70]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#2D2422] text-sm">Criadores Responsáveis</span>
                    <span className="text-xs text-[#8B6B5D]">Fortaleza / Ceará</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Institutional Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-1.5 bg-[#F3E8E0] text-[#C85A70] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              ❤️ {aboutStory.title}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#2D2422] leading-tight">
              Uma história que nasceu da paixão e do carinho verdadeiro.
            </h2>

            <div className="space-y-4 text-base text-[#5A4D4A] leading-relaxed">
              {aboutStory.paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? 'font-medium text-[#2D2422] text-lg' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 border-t border-[#E8E2D9] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8E2D9]">
                <div className="text-[#C85A70] mb-2">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <h4 className="font-bold text-sm text-[#2D2422] mb-1">Criação Com Amor</h4>
                <p className="text-xs text-[#8B6B5D] leading-snug">
                  Nossos cães fazem parte da família desde o primeiro dia.
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8E2D9]">
                <div className="text-[#D97757] mb-2">
                  <Home className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2D2422] mb-1">Lar Limpo & Seguro</h4>
                <p className="text-xs text-[#8B6B5D] leading-snug">
                  Espaço com higienização rigorosa e cuidados contínuos.
                </p>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8E2D9]">
                <div className="text-[#8B6B5D] mb-2">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#2D2422] mb-1">Formação de Tutores</h4>
                <p className="text-xs text-[#8B6B5D] leading-snug">
                  Orientações antes e pós-venda para uma transição perfeita.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
