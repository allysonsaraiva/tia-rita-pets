import React from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Breed } from '../types';
import { getWhatsAppLink } from '../data/content';

interface BreedCardProps {
  breed: Breed;
}

export const BreedCard: React.FC<BreedCardProps> = ({ breed }) => {
  const whatsappMsg = `Olá! Vi no site do Tia Rita Pets e gostaria de saber sobre filhotes disponíveis de ${breed.name}.`;
  const whatsappUrl = getWhatsAppLink(whatsappMsg);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D9] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-[#FAF7F2]">
        <img
          src={breed.image}
          alt={`Filhote de ${breed.name} no Tia Rita Pets`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge if available */}
        {breed.badge && (
          <div className="absolute top-4 left-4 bg-[#C85A70] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
            <Heart className="w-3 h-3 fill-current" />
            <span>{breed.badge}</span>
          </div>
        )}

        {/* Size Badge */}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {breed.size}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title & Popular Name */}
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="font-display font-bold text-2xl text-[#2D2422] group-hover:text-[#C85A70] transition-colors">
              {breed.name}
            </h3>
          </div>
          {breed.popularName && (
            <p className="text-xs font-bold text-[#8B6B5D] uppercase tracking-wider mb-3">
              {breed.popularName}
            </p>
          )}

          {/* Description */}
          <p className="text-sm text-[#5A4D4A] leading-relaxed mb-4">
            {breed.description}
          </p>

          {/* Temperament Tags */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-[#8B6B5D] uppercase tracking-wider block">
              Temperamento:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {breed.temperament.map((trait) => (
                <span
                  key={trait}
                  className="bg-[#FAF7F2] text-[#2D2422] border border-[#E8E2D9] text-xs px-2.5 py-0.5 rounded-md font-medium flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#C85A70]" />
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-[#F0EADF]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 text-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Consultar Disponibilidade</span>
          </a>
        </div>
      </div>
    </div>
  );
};
