import React, { useState } from 'react';
import { faqData } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppLink } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#FFFDF9] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2D2422]">
            Tudo o que você precisa saber antes de <p className="text-[#C85A70]">buscar seu filhote</p>
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D4A]">
            Esclarecemos as dúvidas mais comuns sobre visita, vacinas, suporte e entrega dos nossos cães de pequeno porte.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#FAF7F2] border border-[#E8E2D9] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full cursor-pointer p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#2D2422] hover:text-[#C85A70] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C85A70] shrink-0" />
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-[#E8E2D9] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C85A70] text-white border-transparent' : 'text-[#2D2422]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5A4D4A] leading-relaxed border-t border-[#E8E2D9]/60 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside FAQ */}
        <div className="mt-12 text-center p-6 bg-[#FAF7F2] rounded-3xl border border-[#E8E2D9] space-y-3">
          <p className="font-bold text-[#2D2422] text-sm sm:text-base">
            Ficou com alguma outra dúvida específica?
          </p>
          <a
            href={getWhatsAppLink('Olá! Tenho uma dúvida sobre os filhotes que gostaria de tirar com a Luana.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Tirar dúvidas pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
