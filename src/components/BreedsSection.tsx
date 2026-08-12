import React from 'react';
import { breedsData } from '../data/content';
import { BreedCard } from './BreedCard';
import { Info, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const BreedsSection: React.FC = () => {
  return (
    <section id="racas" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#F3E8E0] text-[#C85A70] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            🐾 Nossos Amiguinhos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#2D2422]">
            Raças Especializadas de Pequeno Porte
          </h2>
          <p className="text-base sm:text-lg text-[#5A4D4A] leading-relaxed">
            Criamos com amor e dedicação cães saudáveis, sociais e com temperamento equilibrado para alegrar a sua casa.
          </p>
        </div>

        {/* Availability Dynamic Banner */}
        <div className="bg-linear-to-r from-[#FFF8F0] via-[#FFF3EB] to-[#FFF8F0] border border-[#E8D6C9] rounded-2xl p-4 sm:p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="bg-[#C85A70]/10 p-3 rounded-full text-[#C85A70] shrink-0 hidden sm:block">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#2D2422] text-sm sm:text-base">
                Disponibilidade de Filhotes em Tempo Real
              </h3>
              <p className="text-xs sm:text-sm text-[#8B6B5D]">
                Nossa criação é seletiva e os filhotes mudam frequentemente. Fale conosco para fotos e vídeos da ninhada atual!
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink('Olá! Gostaria de consultar as ninhadas e filhotes disponíveis no momento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar Ninhada Atual</span>
          </a>
        </div>

        {/* Breed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {breedsData.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>

      </div>
    </section>
  );
};
