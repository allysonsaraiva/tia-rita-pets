import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BreedsSection } from './components/BreedsSection';
import { AboutSection } from './components/AboutSection';
import { BadgesSection } from './components/BadgesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2422] flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <BreedsSection />
        <AboutSection />
        <BadgesSection />
        <TestimonialsSection />
        <FAQSection />
        <LocationSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
