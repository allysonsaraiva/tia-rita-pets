import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { breedsData, businessInfo, getWhatsAppLink } from '../data/content';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('Spitz Alemão');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `Olá! Meu nome é *${name || 'Visitante'}*.\n📱 Telefone: ${phone || 'Não informado'}\n🐾 Tenho interesse na raça: *${selectedBreed}*\n\n💬 Mensagem:\n${message || 'Gostaria de saber mais informações sobre filhotes disponíveis.'}`;

    const url = getWhatsAppLink(formattedText);
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-linear-to-br from-[#2D2422] via-[#3A2F2D] to-[#2D2422] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C85A70]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Left Box: Contact Copy & Fast Actions */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#C85A70]/20 text-rose-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#C85A70]/30">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Atendimento Direto & Rápido</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
                Pronto para encontrar seu filhote de pequeno porte?
              </h2>

              <p className="text-sm sm:text-base text-[#D8C8B8] leading-relaxed">
                Preencha os dados ao lado para ser direcionado ao WhatsApp da Luana com sua mensagem pronta, ou fale diretamente conosco pelo botão abaixo.
              </p>

              {/* Direct Quick WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Conversar no WhatsApp Agora</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#B8A898] space-y-1">
                <p>📍 Meireles, Fortaleza - CE</p>
                <p>🕒 Atendimento: Todos os dias, 8h às 22h</p>
                <p>📧 Email: {businessInfo.email}</p>
              </div>

            </div>

            {/* Right Box: Interactive Form */}
            <div className="lg:col-span-7 bg-white text-[#2D2422] p-6 sm:p-8 rounded-2xl shadow-xl border border-[#E8E2D9]">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <h3 className="font-display font-bold text-xl text-[#2D2422] mb-4">
                  Envie uma mensagem direta
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8B6B5D] mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A70] transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8B6B5D] mb-1">
                      Seu Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (85) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A70] transition-all"
                    />
                  </div>
                </div>

                {/* Breed Select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8B6B5D] mb-1">
                    Raça de Interesse
                  </label>
                  <select
                    value={selectedBreed}
                    onChange={(e) => setSelectedBreed(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A70] transition-all"
                  >
                    {breedsData.map((breed) => (
                      <option key={breed.id} value={breed.name}>
                        {breed.name} ({breed.popularName || breed.size})
                      </option>
                    ))}
                    <option value="Dúvidas Gerais">Dúvidas gerais / Outro assunto</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8B6B5D] mb-1">
                    Sua Mensagem / Dúvida
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Olá, gostaria de saber se há filhotes machos disponíveis e os valores."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A70] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C85A70] hover:bg-[#b04a5f] text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-base cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem pelo WhatsApp</span>
                </button>

                <p className="text-[11px] text-[#8B6B5D] text-center pt-1">
                  🔒 Você será redirecionado para o WhatsApp oficial do Tia Rita Pets sem complicação.
                </p>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
