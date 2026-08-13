import React from 'react';
import { Star, HeartHandshake, Sparkles, Home, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/content';

export const BadgesSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#2D2422] text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C85A70]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FFFDF9]">
            Por que tutores de todo o Ceará confiam no Tia Rita Pets?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Google 4.9 Rating */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-amber-400/20 text-amber-300 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2 flex items-center gap-2">
                4.9 de 5 Estrelas
              </h3>
              <p className="text-xs text-[#D8C8B8] leading-relaxed">
                Mais de 115 avaliações reais de clientes no Google Maps comprovando nossa seriedade e amor.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-semibold">
              <span>★★★★★ no Google</span>
              <span>115+ reviews</span>
            </div>
          </div>

          {/* Card 2: LGBTQ+ Friendly */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-rose-400/20 text-rose-300 rounded-xl flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">
                Empresa LGBTQ+ Friendly
              </h3>
              <p className="text-xs text-[#D8C8B8] leading-relaxed">
                Selo oficial de empresa inclusiva que acolhe e respeita todas as pessoas e formatos de família.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-rose-300 font-semibold">
              <span>Acolhimento & Respeito</span>
            </div>
          </div>

          {/* Card 3: Women-led */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-400/20 text-purple-300 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">
                Liderada por Mulheres
              </h3>
              <p className="text-xs text-[#D8C8B8] leading-relaxed">
                Empreendedorismo feminino conduzido pela Luana com extrema responsabilidade e paixão pelos cães.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-purple-300 font-semibold">
              <span>Empreendedorismo Feminino</span>
            </div>
          </div>

          {/* Card 4: Hygiene & Safety */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-emerald-400/20 text-emerald-300 rounded-xl flex items-center justify-center mb-4">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">
                Ambiente 100% Higiênico
              </h3>
              <p className="text-xs text-[#D8C8B8] leading-relaxed">
                Canil em ambiente residencial limpo, com rotinas de desinfecção diárias e zelo absoluto.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-300 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Saúde & Segurança</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
