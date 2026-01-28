
import React from 'react';

interface DestinationsOverviewProps {
  onViewAll: () => void;
}

export const DestinationsOverview: React.FC<DestinationsOverviewProps> = ({ onViewAll }) => {
  const compositeImageUrl = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1600";

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#1A1A1A] overflow-hidden" aria-labelledby="destinations-overview-title">
      <div className="absolute inset-0 z-0">
        <img
          src={compositeImageUrl}
          alt="Uganda tourism destinations including national parks and wildlife"
          className="w-full h-full object-cover opacity-100 contrast-125"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center reveal-trigger">
        <h2 id="destinations-overview-title" className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight text-white">
          Discover the Treasures of the Pearl
        </h2>
        <p className="subtitle text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 tracking-wide text-white/80">
          From misty mountain gorillas to the thundering source of the Nile, 
          every destination in Uganda authors a unique story of wonder.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-2">10</span>
            <span className="text-[10px] uppercase tracking-widest font-black text-white/60">National Parks</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-2">1k+</span>
            <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Bird Species</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-2">13</span>
            <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Primate Species</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-serif font-bold text-[#D4AF37] mb-2">∞</span>
            <span className="text-[10px] uppercase tracking-widest font-black text-white/60">Endless Awe</span>
          </div>
        </div>
        
        <button 
          onClick={onViewAll} 
          className="px-14 py-6 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[13px] uppercase tracking-[0.5em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 shadow-2xl focus:outline-none"
        >
          Explore All Territories
        </button>
      </div>
    </section>
  );
};
