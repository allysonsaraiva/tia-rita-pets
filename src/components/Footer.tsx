import React from 'react';
import { businessInfo, getWhatsAppLink } from '../data/content';
import { Heart, Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1817] text-[#D8C8B8] pt-16 pb-8 border-t border-[#3A2F2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-tia-rita-pets.png"
                alt="Tia Rita Pets"
                className="h-12 w-auto bg-white p-1 rounded-xl"
              />
              <div>
                <span className="font-display font-bold text-2xl text-white block leading-none">
                  Tia Rita Pets
                </span>
                <span className="text-xs text-rose-300 font-medium block mt-0.5">
                  Canil de Pequeno Porte em Fortaleza
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89888] leading-relaxed">
              Criação ética, responsável e amorosa de Spitz Alemão, Chihuahua, Maltês e Yorkshire. Atendimento diário no bairro Meireles, Fortaleza/CE.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C85A70] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Tia Rita Pets"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4267B2] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Tia Rita Pets"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Tia Rita Pets"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-rose-300 transition-colors">Início</a>
              </li>
              <li>
                <a href="#racas" className="hover:text-rose-300 transition-colors">Filhotes Disponíveis</a>
              </li>
              <li>
                <a href="#historia" className="hover:text-rose-300 transition-colors">Nossa História & Valores</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-rose-300 transition-colors">Avaliações no Google (4.9★)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-300 transition-colors">Perguntas Frequentes (FAQ)</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-rose-300 transition-colors">Localização no Meireles</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Breeds (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Nossas Raças
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-[#A89888]">Spitz Alemão</li>
              <li className="text-[#A89888]">Chihuahua</li>
              <li className="text-[#A89888]">Maltês</li>
              <li className="text-[#A89888]">Yorkshire Terrier</li>
            </ul>
          </div>

          {/* Col 4: Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Contato & Localização
            </h4>
            <div className="space-y-2 text-xs text-[#A89888]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{businessInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-white transition-colors">
                  {businessInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#8A7868]">
                🕒 {businessInfo.hours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7868]">
          <p>© {currentYear} Tia Rita Pets. Todos os direitos reservados. Canil em Fortaleza - CE.</p>
          <div className="flex items-center gap-1 text-rose-300 font-medium">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
            <span>para amantes de cães</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
