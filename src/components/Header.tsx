import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { businessInfo, getWhatsAppLink } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Filhotes', href: '#racas' },
    { name: 'Nossa História', href: '#historia' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Localização & Contato', href: '#localizacao' },
  ];

  return (
    <>
      {/* Top Banner with Quick Info */}
      <div className="bg-[#2D2422] text-[#E8DCCF] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C85A70]" />
              Meireles, Fortaleza/CE
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C85A70]" />
              Atendimento todos os dias: 8h às 22h
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-amber-300 font-semibold">
              ★ 4.9 (115 avaliações no Google)
            </span>
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="hidden md:flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3'
            : 'bg-[#FAF7F2]/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/logo-tia-rita-pets.png"
              alt="Tia Rita Pets Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span className="font-display font-bold text-xl sm:text-2xl text-[#2D2422] tracking-tight block leading-none">
                Tia Rita Pets
              </span>
              <span className="text-[10px] sm:text-xs text-[#8B6B5D] uppercase tracking-wider font-semibold block mt-0.5">
                Canil em Fortaleza/CE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#2D2422] hover:text-[#C85A70] font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2D2422] hover:bg-[#E8E2D9] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E2D9] px-4 pt-4 pb-6 mt-2 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#2D2422] hover:text-[#C85A70] font-medium py-2 text-base border-b border-[#E8E2D9]/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-full text-base shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
