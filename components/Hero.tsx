
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
      subheadline: 'Bespoke Ugandan Escapades Crafted for the Discerning Traveler',
      cta: 'Begin Your Adventure'
    },
    {
      id: 'uganda-landscape',
      url: 'https://i.postimg.cc/dVLtYNBN/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg',
      alt: 'Breathtaking Uganda landscape - Luxury travel destinations',
      headline: "Discover Uganda's Hidden Treasures",
      subheadline: 'Where Every Path Leads to Wonder',
      cta: 'Explore Our Destinations'
    },
    {
      id: 'nile-power',
      url: 'https://i.postimg.cc/przVFwg6/2-Days-Murchison-Falls-Safari-Uganda-Wildlife-Safari-in-Uganda-Tour-Murchison-Falls-National-Park-75.jpg',
      alt: 'The thundering Murchison Falls on the Victoria Nile - Dramatic natural beauty',
      headline: 'The Rhythm of the Wild',
      subheadline: 'Experience the Untamed Power and Beauty of the Nile',
      cta: 'Request a Manifest'
    }
  ];

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const currentImage = heroImages[currentHero];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Image layers with crossfade */}
      {heroImages.map((hero, index) => (
        <picture 
          key={hero.id}
          className={`hero-image-layer ${index === currentHero ? 'active' : ''}`}
        >
          <source
            type="image/webp"
            srcSet={`
              ${hero.url}?w=800&fm=webp 800w,
              ${hero.url}?w=1200&fm=webp 1200w,
              ${hero.url}?w=1600&fm=webp 1600w,
              ${hero.url}?w=2400&fm=webp 2400w
            `}
            sizes="100vw"
          />
          <img
            src={`${hero.url}?w=1600`}
            srcSet={`
              ${hero.url}?w=800 800w,
              ${hero.url}?w=1200 1200w,
              ${hero.url}?w=1600 1600w,
              ${hero.url}?w=2400 2400w
            `}
            sizes="100vw"
            alt={hero.alt}
            className="hero-image"
            loading={index === 0 ? "eager" : "lazy"}
            // @ts-ignore
            fetchpriority={index === 0 ? "high" : "low"}
            decoding="async"
          />
        </picture>
      ))}
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content overlay */}
      <div className="hero-content">
        <div className="animate-fade-in-up">
          <h1 className="hero-headline" key={`h1-${currentHero}`}>
            {currentImage.headline}
          </h1>
          <p className="hero-subheadline" key={`p-${currentHero}`}>
            {currentImage.subheadline}
          </p>
          <button 
            onClick={onStartPlanning}
            className="cta-primary group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-8 focus:ring-offset-[#002d04] px-14 py-6 text-[13px]"
            key={`cta-${currentHero}`}
          >
            <span className="relative z-10">{currentImage.cta}</span>
          </button>
        </div>
      </div>

      {/* Navigation dots */}
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
