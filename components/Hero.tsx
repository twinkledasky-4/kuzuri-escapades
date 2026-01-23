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
      alt: 'Safari vehicle at crossroads in Uganda wilderness',
      headline: 'Journey Beyond the Ordinary',
      subheadline: 'Bespoke Ugandan escapades crafted for the discerning traveler, where every path authors a unique story.',
      cta: 'Begin Your Odyssey'
    },
    {
      id: 'gorilla-bwindi',
      url: 'https://i.postimg.cc/qzRsBgyD/images.jpg',
      alt: 'Mountain gorilla in the mists of Bwindi',
      headline: 'The Primate Odyssey',
      subheadline: 'An intimate encounter with the monarchs of Bwindi, curated with profound silence and native wisdom.',
      cta: 'Meet the Monarchs'
    },
    {
      id: 'nile-falls',
      url: 'https://i.postimg.cc/przVFwg6/2-Days-Murchison-Falls-Safari-Uganda-Wildlife-Safari-in-Uganda-Tour-Murchison-Falls-National-Park-75.jpg',
      alt: 'Murchison Falls landscape in Uganda',
      headline: 'The Rhythm of the Nile',
      subheadline: 'Witness the thundering power of the world\'s strongest waterfall, a spectacle of untamed grace.',
      cta: 'Feel the Power'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const currentImage = heroImages[currentHero];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-image-wrapper">
        {heroImages.map((hero, index) => (
          <div 
            key={hero.id}
            className={`hero-image-layer ${index === currentHero ? 'active' : ''}`}
          >
            <img
              src={hero.url}
              alt={hero.alt}
              className="hero-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      
      <div className="hero-overlay" />
      
      <div className="hero-content text-center relative z-10 px-6 max-w-5xl mx-auto">
        <div className="reveal-trigger is-visible flex flex-col items-center">
          <p className="text-base font-medium text-[#D4AF37] uppercase tracking-[0.8em] mb-6">
            Hello, Traveler!
          </p>
          <h1 
            id="hero-title"
            className="hero-headline text-white mb-10"
          >
            {currentImage.headline}
          </h1>
          <p className="hero-subheadline text-white/80 mx-auto mb-12">
            {currentImage.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onStartPlanning}
              className="cta-primary"
            >
              {currentImage.cta}
            </button>
            <button 
              onClick={onStartPlanning}
              className="cta-secondary"
            >
              Explore Territories
            </button>
          </div>
        </div>
      </div>

      <div className="hero-navigation absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentHero ? 'active' : ''}`}
            onClick={() => setCurrentHero(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};