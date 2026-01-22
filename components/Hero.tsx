import React, { useState, useEffect } from 'react';

interface HeroProps {
  onStartPlanning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanning }) => {
  const [currentHero, setCurrentHero] = useState(0);
  
  const heroImages = [
    {
      id: 'safari-crossroad',
      url: 'https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg',
      alt: 'Safari vehicle at crossroads in Uganda wilderness - Luxury adventure travel',
      headline: 'Journey Beyond the Ordinary',
      subheadline: 'Bespoke Ugandan escapades crafted for the discerning traveler, where every path authors a unique story.',
      cta: 'Begin Your Odyssey'
    },
    {
      id: 'gorilla-bwindi',
      url: 'https://i.postimg.cc/qzRsBgyD/images.jpg',
      alt: 'Mountain gorilla in the mists of Bwindi - Primate tourism Uganda',
      headline: 'The Primate Odyssey',
      subheadline: 'An intimate encounter with the monarchs of Bwindi, curated with profound silence and native wisdom.',
      cta: 'Meet the Monarchs'
    },
    {
      id: 'nile-falls',
      url: 'https://i.postimg.cc/przVFwg6/2-Days-Murchison-Falls-Safari-Uganda-Wildlife-Safari-in-Uganda-Tour-Murchison-Falls-National-Park-75.jpg',
      alt: 'Murchison Falls landscape - Victoria Nile power',
      headline: 'The Rhythm of the Nile',
      subheadline: 'Witness the untamed power of the world\'s most powerful waterfall amidst golden savannah horizons.',
      cta: 'Explore the Delta'
    },
    {
      id: 'savannah-wildlife',
      url: 'https://i.postimg.cc/XpJfNXdx/10-Must-Visit-Tourist-Attractions-in-Uganda-in-2025.webp',
      alt: 'Golden savannah wildlife Uganda - Safari excellence',
      headline: 'Savannah Sovereignty',
      subheadline: 'Horizons without borders in the heart of the Albertine Rift. Where the wild moves with quiet dignity.',
      cta: 'Discover the Wild'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const currentImage = heroImages[currentHero];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {heroImages.map((hero, index) => (
        <picture 
          key={hero.id}
          className={`hero-image-layer ${index === currentHero ? 'active' : ''}`}
        >
          <img
            src={hero.url}
            alt={hero.alt}
            className="hero-image"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </picture>
      ))}
      
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <div className="animate-fade-in-up flex flex-col items-center">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[12px] font-bold mb-8">
            Est. 2014 • Native Curation
          </p>
          <h1 className="hero-headline" key={`h1-${currentHero}`}>
            {currentImage.headline}
          </h1>
          <p className="hero-subheadline" key={`p-${currentHero}`}>
            {currentImage.subheadline}
          </p>
          <button 
            onClick={onStartPlanning}
            className="cta-primary group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-8 focus:ring-offset-[#1A1A1A] px-16 py-7 text-[12px] bg-[#8B5A2B] text-[#F5F5DC] border-2 border-[#1A1A1A] hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 font-extrabold uppercase shadow-2xl"
            key={`cta-${currentHero}`}
          >
            <span className="relative z-10">{currentImage.cta}</span>
          </button>
        </div>
      </div>

      <div className="hero-navigation">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentHero ? 'active' : ''}`}
            onClick={() => setCurrentHero(index)}
            aria-label={`View hero slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};