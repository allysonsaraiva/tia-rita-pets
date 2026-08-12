import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip text on hover/always visible on desktop */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-[#2D2422] text-xs font-bold px-4 py-2.5 rounded-full shadow-lg border border-[#E8E2D9] hover:bg-[#FAF7F2] transition-all duration-200"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Falar no WhatsApp (8h-22h)</span>
      </a>

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 flex items-center justify-center animate-pulse-ring"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
