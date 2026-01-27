
import React, { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES } from '../constants.tsx';

interface HeroProps {
  onStartPlanning: () => void;
  minimal?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanning, minimal = false }) => {
  const [currentHero, setCurrentHero] = useState(0);
  
  const handleNext = useCallback(() => {
    setCurrentHero((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!minimal) {
      const interval = setInterval(handleNext, 8000);
      return () => clearInterval(interval);
    }
  }, [handleNext, minimal]);

  const currentSlide = HERO_SLIDES[currentHero];

  return (
    <section className="hero-section h-screen relative overflow-hidden" aria-labelledby="hero-title">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="hero-image-layer active">
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.title.replace(/<[^>]*>?/gm, '')}
            className="hero-image"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
      
      {/* Brand Overlay */}
      <div className="hero-overlay bg-black/40" />
      
      {/* Text Positioning: Bottom Left absolute div */}
      <div className="absolute bottom-16 left-8 md:left-16 z-10 max-w-[650px] text-left animate-fade-in-up">
        <h1 
          id="hero-title"
          className="text-3xl md:text-5xl font-sans font-semibold text-white uppercase tracking-[0.3em] leading-tight mb-8"
          dangerouslySetInnerHTML={{ __html: currentSlide.title }}
        />
        <p className="text-white text-lg md:text-xl font-normal leading-relaxed tracking-wide opacity-90 mb-10">
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
      {!minimal && HERO_SLIDES.length > 1 && (
        <div className="hero-navigation absolute bottom-16 right-16 flex flex-col gap-5">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border border-white transition-all ${index === currentHero ? 'bg-white scale-125' : 'bg-transparent'}`}
              onClick={() => setCurrentHero(index)}
              aria-label={`View hero slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
