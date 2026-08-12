import React from 'react';
import { businessInfo } from '../data/content';
import { MapPin, Clock, Navigation, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#F3E8E0] text-[#C85A70] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
            📍 Onde Estamos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#2D2422]">
            Venha nos conhecer no coração do Meireles
          </h2>
          <p className="text-base sm:text-lg text-[#5A4D4A]">
            Atendimento presencial em ambiente familiar e acolhedor em Fortaleza. Agende sua visita com antecedência!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours, Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D9] shadow-md space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="bg-[#C85A70] text-white p-3 rounded-2xl shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2D2422] mb-1">
                    Endereço Completo
                  </h3>
                  <p className="text-sm text-[#5A4D4A] leading-relaxed">
                    {businessInfo.address.street} <br />
                    <span className="font-semibold text-[#2D2422]">
                      {businessInfo.address.neighborhood} — {businessInfo.address.cityState}
                    </span> <br />
                    CEP: {businessInfo.address.cep}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EADF] flex items-start gap-4">
                <div className="bg-[#D97757] text-white p-3 rounded-2xl shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2D2422] mb-1">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-sm text-[#5A4D4A] leading-relaxed">
                    {businessInfo.hours}
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    ✓ Aberto inclusive sábados, domingos e feriados
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EADF] space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#5A4D4A]">
                  <Phone className="w-4 h-4 text-[#C85A70]" />
                  <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-[#C85A70] transition-colors font-medium">
                    {businessInfo.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#5A4D4A]">
                  <Mail className="w-4 h-4 text-[#C85A70]" />
                  <a href={`mailto:${businessInfo.email}`} className="hover:text-[#C85A70] transition-colors font-medium">
                    {businessInfo.email}
                  </a>
                </div>
              </div>

              {/* Action Button: Google Maps Directions */}
              <div className="pt-2">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2D2422] hover:bg-[#1a1514] text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all text-sm"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Como Chegar (Google Maps)</span>
                </a>
              </div>

            </div>

            {/* Visit Guidelines */}
            <div className="bg-[#FFF8F0] border border-[#E8D6C9] p-5 rounded-2xl text-xs text-[#8B6B5D] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C85A70] shrink-0" />
              <span>
                Para garantir a segurança sanitária e atenção dedicada, agende seu horário previamente pelo WhatsApp!
              </span>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 bg-white p-3 rounded-3xl border border-[#E8E2D9] shadow-md min-h-95 lg:min-h-115 flex">
            <iframe
              title="Mapa de localização do Tia Rita Pets no Meireles, Fortaleza/CE"
              src={businessInfo.googleMapsEmbedUrl}
              className="w-full h-full min-h-90 rounded-2xl border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
