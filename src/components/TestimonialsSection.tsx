import React, { useState } from 'react';
import { testimonialsData, googleHighlights, businessInfo } from '../data/content';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="avaliacoes" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#2D2422]">
            O que dizem os tutores dos <p className="text-[#C85A70]">nossos filhotes</p>
          </h2>
          <p className="text-base sm:text-lg text-[#5A4D4A]">
            Confira depoimentos reais publicados no nosso perfil do Google Maps.
          </p>
        </div>

        {/* Short Highlights Quotes Carousel / Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {googleHighlights.map((quote, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] border border-[#E8E2D9] p-4 rounded-2xl shadow-xs flex items-start gap-3"
            >
              <div className="text-[#C85A70] shrink-0 mt-0.5">
                <Quote className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#2D2422] italic font-medium">
                "{quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#E8E2D9] shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow relative"
            >
              <div className="space-y-4">
                {/* Stars & Google badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    Avaliação Google
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-[#4A3E3B] leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-[#F0EADF] flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-xs shrink-0`}>
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#2D2422]">
                    {item.author}
                  </h3>
                  <p className="text-xs text-[#8B6B5D]">
                    Tutor Verificado no Google
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF7F2] text-[#2D2422] font-bold px-6 py-3 rounded-full border border-[#E8E2D9] shadow-sm hover:shadow transition-all text-sm"
          >
            <span>Ver todas as 115+ avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-[#C85A70]" />
          </a>
        </div>

      </div>
    </section>
  );
};
