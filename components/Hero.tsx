
import React, { useState, useEffect, useCallback } from 'react';

interface Slide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  cta?: string;
}

interface HeroProps {
  onStartPlanning: () => void;
  minimal?: boolean;
  slides: Slide[];
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanning, minimal = false, slides }) => {
  const [currentHero, setCurrentHero] = useState(0);
  
  const handleNext = useCallback(() => {
    setCurrentHero((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!minimal) {
      const interval = setInterval(handleNext, 8000);
      return () => clearInterval(interval);
    }
  }, [handleNext, minimal]);

  const currentSlide = slides[currentHero];

  return (
    <section className="hero-section h-screen relative overflow-hidden bg-[#1A1A1A]" aria-labelledby="hero-title">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="hero-image-layer active">
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.title.replace(/<[^>]*>?/gm, '')}
            className="hero-image w-full h-full object-cover opacity-100 block"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
      
      {/* Brand Overlay - strictly linear, grounded at the bottom */}
      <div className="hero-overlay" />
      
      {/* Text Positioning: Bottom Left */}
      <div className="absolute bottom-16 left-8 md:left-16 z-10 max-w-[650px] text-left animate-fade-in-up">
        <h1 
          id="hero-title"
          className="text-3xl md:text-5xl font-sans font-semibold text-[#FFFFFF] uppercase tracking-[0.3em] leading-tight mb-8"
          style={{ opacity: 1 }}
          dangerouslySetInnerHTML={{ __html: currentSlide.title }}
        />
        <p className="text-[#FFFFFF] text-lg md:text-xl font-normal leading-relaxed tracking-wide mb-10" style={{ opacity: 1 }}>
          {currentSlide.description}
        </p>
        
        {!minimal && (
          <div className="mt-4">
            <button 
              onClick={onStartPlanning}
              className="cta-primary"
            >
              {currentSlide.cta || 'Begin Your Odyssey'}
            </button>
          </div>
        )}
      </div>

      {/* Navigation Indicators */}
      {!minimal && slides.length > 1 && (
        <div className="hero-navigation absolute bottom-16 right-16 flex flex-col gap-5">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border border-[#FFFFFF] transition-all ${index === currentHero ? 'bg-[#FFFFFF] scale-125' : 'bg-transparent'}`}
              onClick={() => setCurrentHero(index)}
              aria-label={`View hero slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};