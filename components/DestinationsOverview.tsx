import React from 'react';

interface DestinationsOverviewProps {
  onViewAll: () => void;
}

export const DestinationsOverview: React.FC<DestinationsOverviewProps> = ({ onViewAll }) => {
  const compositeImageUrl = "https://i.postimg.cc/0bBpzxCQ/unnamed2.jpg";

  return (
    <section className="destinations-overview" aria-labelledby="destinations-overview-title">
      <div className="overview-background">
        <img
          src={compositeImageUrl}
          alt="Uganda tourism destinations including national parks and wildlife"
          className="background-image"
          loading="lazy"
          decoding="async"
        />
        <div className="overlay" />
      </div>
      
      <div className="container mx-auto px-6 content-overlay reveal-trigger">
        <h2 id="destinations-overview-title" className="text-4xl md:text-7xl font-serif mb-8 leading-tight tracking-tight text-white">
          Discover the <span className="italic font-light">Treasures</span> of the Pearl
        </h2>
        <p className="subtitle text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 tracking-wide text-white/80">
          From misty mountain gorillas to the thundering source of the Nile, 
          every destination in Uganda authors a unique story of wonder.
        </p>
        
        <div className="stats-grid max-w-4xl mx-auto mb-16">
          <div className="stat">
            <span className="number">10</span>
            <span className="label text-white">National Parks</span>
          </div>
          <div className="stat">
            <span className="number">1k+</span>
            <span className="label text-white">Bird Species</span>
          </div>
          <div className="stat">
            <span className="number">13</span>
            <span className="label text-white">Primate Species</span>
          </div>
          <div className="stat">
            <span className="number">∞</span>
            <span className="label text-white">Endless Awe</span>
          </div>
        </div>
        
        <button 
          onClick={onViewAll} 
          className="px-14 py-6 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[13px] uppercase tracking-[0.5em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-8 focus:ring-offset-[#1A1A1A]"
        >
          Explore All Territories
        </button>
      </div>
    </section>
  );
};