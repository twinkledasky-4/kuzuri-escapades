
import React, { useEffect, useState, useCallback } from 'react';
import { HERO_SLIDES } from '../constants.tsx';

interface HeroProps {
  onStartPlanning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanning }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      setIsTransitioning(false);
    }, 800);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const interval = setInterval(handleNext, 8000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [handleNext]);

  return (
    <section 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#002d04]"
      aria-labelledby="hero-title"
    >
      {/* Dynamic Backgrounds */}
      {HERO_SLIDES.map((slide, idx) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1500 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.imageUrl} 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-cover brightness-[0.6] scale-105"
            style={{ 
              transform: `translateY(${scrollY * 0.15}px) scale(1.05)`,
              transition: 'transform 0.1s linear'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002d04] via-transparent to-[#002d04]/40" />
        </div>
      ))}

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div 
            className={`transition-all duration-1000 ease-out transform ${
              isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-[#d4af37] uppercase tracking-[1em] text-[10px] md:text-[12px] font-bold mb-10 block">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
            
            <h1 
              id="hero-title"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] text-white font-serif leading-[1] md:leading-[0.85] mb-14 tracking-tighter"
              dangerouslySetInnerHTML={{ __html: HERO_SLIDES[currentSlide].title }}
            />
            
            <p className="text-stone-200 text-sm md:text-2xl font-light max-w-xl mx-auto leading-relaxed tracking-wide mb-20">
              {HERO_SLIDES[currentSlide].description}
            </p>

            <button 
              onClick={onStartPlanning}
              className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-8 focus:ring-offset-[#002d04]"
              aria-label="Begin co-creating your bespoke travel manifest"
            >
              <span className="absolute inset-0 border border-white/40 group-hover:border-[#d4af37] transition-colors duration-500"></span>
              <span className="relative text-white uppercase tracking-[0.8em] text-[10px] group-hover:text-[#d4af37] transition-colors duration-500 font-bold">
                Begin Your Story
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Progress */}
      <div className="absolute bottom-16 left-0 right-0 z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentSlide(idx);
                    setIsTransitioning(false);
                  }, 500);
                }}
                className="group flex flex-col items-start gap-4 focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className={`text-[9px] font-bold tracking-widest transition-colors duration-500 ${
                  idx === currentSlide ? 'text-[#d4af37]' : 'text-white/40'
                }`}>
                  0{idx + 1}
                </span>
                <div className="w-12 md:w-20 h-[1px] bg-white/10 relative overflow-hidden">
                  <div 
                    className={`absolute inset-0 bg-[#d4af37] transition-transform duration-[8000ms] linear origin-left ${
                      idx === currentSlide ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="hidden md:flex flex-col items-end gap-2 text-right">
             <span className="text-white/20 uppercase tracking-[0.6em] text-[9px] font-bold">Volume 01</span>
             <span className="text-white/60 uppercase tracking-[0.4em] text-[9px] font-bold italic">The Albertine Series</span>
          </div>
        </div>
      </div>

      {/* Visual Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-40" aria-hidden="true">
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#d4af37] to-transparent animate-pulse" />
      </div>

      <style>{`
        .duration-1500 { transition-duration: 1500ms; }
      `}</style>
    </section>
  );
};
