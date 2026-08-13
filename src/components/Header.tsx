import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { businessInfo, getWhatsAppLink } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const racasElement = document.getElementById('racas');
      if (racasElement) {
        const rect = racasElement.getBoundingClientRect();
        if (rect.top <= 100) {
          setIsScrolled(true);
          return;
        }
      } else {
        const heroElement = document.getElementById('hero');
        if (heroElement) {
          const rect = heroElement.getBoundingClientRect();
          if (rect.bottom <= 100) {
            setIsScrolled(true);
            return;
          }
        }
      }
      setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
      {/* Main Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D9]/80 shadow-sm pt-2.5'
            : 'bg-linear-to-b from-black/60 via-black/30 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-2 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/logo-tia-rita-pets.png"
              alt="Tia Rita Pets Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span
                className={`font-display font-bold text-lg sm:text-2xl tracking-tight block leading-none transition-colors ${
                  isScrolled ? 'text-[#2D2422]' : 'text-white'
                }`}
              >
                Tia Rita Pets
              </span>
              <span
                className={`text-[9px] sm:text-xs uppercase tracking-wider font-semibold block mt-0.5 transition-colors ${
                  isScrolled ? 'text-[#8B6B5D]' : 'text-amber-200/90'
                }`}
              >
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
                className={`font-medium text-sm transition-colors duration-200 ${
                  isScrolled
                    ? 'text-[#2D2422] hover:text-[#C85A70]'
                    : 'text-white hover:text-amber-300 drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 cursor-pointer ${
              isScrolled
                ? 'text-[#2D2422] hover:bg-[#E8E2D9]'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Drawer with Smooth Slide & Fade Transition */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-b px-4 ${
            mobileMenuOpen
              ? 'max-h-96 opacity-100 translate-y-0 py-2 mt-2 shadow-xl pointer-events-auto'
              : 'max-h-0 opacity-0 -translate-y-4 pt-0 pb-0 mt-0 pointer-events-none border-transparent shadow-none'
          } ${
            isScrolled
              ? 'bg-[#FAF7F2] border-[#E8E2D9]'
              : 'bg-[#1A1412]/95 backdrop-blur-lg border-white/10'
          }`}
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium py-2 text-base border-b transition-colors ${
                  isScrolled
                    ? 'text-[#2D2422] hover:text-[#C85A70] border-[#E8E2D9]/50'
                    : 'text-white hover:text-amber-300 border-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
