
import React from 'react';

interface DestinationsOverviewProps {
  onViewAll: () => void;
}

export const DestinationsOverview: React.FC<DestinationsOverviewProps> = ({ onViewAll }) => {
  // Use high-fidelity composite image
  const compositeImageUrl = "https://i.postimg.cc/0bBpzxCQ/unnamed2.jpg";

  return (
    <section className="destinations-overview" aria-labelledby="destinations-overview-title">
      {/* Background image per brief */}
      <div className="overview-background">
        <picture>
          <source
            type="image/webp"
            srcSet={`
              ${compositeImageUrl}?w=400&fm=webp 400w,
              ${compositeImageUrl}?w=800&fm=webp 800w,
              ${compositeImageUrl}?w=1200&fm=webp 1200w
            `}
          />
          <img
            src={`${compositeImageUrl}?w=800`}
            srcSet={`
              ${compositeImageUrl}?w=400 400w,
              ${compositeImageUrl}?w=800 800w,
              ${compositeImageUrl}?w=1200 1200w
            `}
            sizes="100vw"
            alt="Uganda tourism destinations including national parks, wildlife, and cultural sites"
            className="background-image"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="overlay" />
      </div>
      
      {/* Content overlay per brief */}
      <div className="container mx-auto px-6 content-overlay reveal-trigger">
        <h2 id="destinations-overview-title" className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
          Discover Uganda's Hidden Treasures
        </h2>
        <p className="subtitle text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 tracking-wide">
          From misty mountain gorillas to the source of the Nile, 
          every destination tells a story
        </p>
        
        <div className="stats-grid max-w-4xl mx-auto">
          <div className="stat">
            <span className="number">10+</span>
            <span className="label">National Parks</span>
          </div>
          <div className="stat">
            <span className="number">1,000+</span>
            <span className="label">Bird Species</span>
          </div>
          <div className="stat">
            <span className="number">13</span>
            <span className="label">Primate Species</span>
          </div>
          <div className="stat">
            <span className="number">∞</span>
            <span className="label">Unforgettable Moments</span>
          </div>
        </div>
        
        <button 
          onClick={onViewAll} 
          className="cta-primary focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-8 focus:ring-offset-[#002d04]"
        >
          View All Destinations
        </button>
      </div>
    </section>
  );
};
