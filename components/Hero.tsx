import React, { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES } from '../constants.tsx';

interface HeroProps {
  onStartPlanning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanning }) => {
  const [currentHero, setCurrentHero] = useState(0);
  
  const handleNext = useCallback(() => {
    setCurrentHero((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const currentSlide = HERO_SLIDES[currentHero];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* 3-Image Rotation Layer */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`hero-image-layer ${index === currentHero ? 'active' : ''}`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="hero-image"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>
      
      {/* Brand Overlay */}
      <div className="hero-overlay" />
      
      {/* Dynamic Content */}
      <div className="hero-content relative z-10 px-6 max-w-5xl mx-auto">
        <div key={currentHero} className="animate-fade-in flex flex-col items-center">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-base font-medium mb-8">
            {currentSlide.subtitle}
          </p>
          <h1 
            id="hero-title"
            className="hero-headline"
            dangerouslySetInnerHTML={{ __html: currentSlide.title }}
          />
          <p className="hero-subheadline mb-12">
            {currentSlide.description}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={onStartPlanning}
              className="cta-primary"
            >
              {currentSlide.cta || 'Explore territories'}
            </button>
            <button 
              onClick={onStartPlanning}
              className="cta-secondary"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>

      {/* 3-Dot Navigation */}
      <div className="hero-navigation">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentHero ? 'active' : ''}`}
            onClick={() => setCurrentHero(index)}
            aria-label={`View hero slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Refined Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-white mb-2 opacity-50">Explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};