import React, { useState, useCallback } from 'react';
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
import { PageLoader } from './components/PageLoader';

export const App: React.FC = () => {
  const [loadingRatio, setLoadingRatio] = useState(0);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  const handleHeroLoadingChange = useCallback((ratio: number, fullyLoaded: boolean) => {
    setLoadingRatio(ratio);
    if (fullyLoaded) {
      setIsHeroLoaded(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2422] flex flex-col font-sans">
      {/* Initial Full Screen Loader */}
      <PageLoader progress={loadingRatio} isLoaded={isHeroLoaded} />

      <Header />
      <main className="flex-1">
        <Hero onLoadingStatusChange={handleHeroLoadingChange} />
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
