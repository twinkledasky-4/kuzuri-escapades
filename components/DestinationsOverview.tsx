
import React from 'react';

interface DestinationsOverviewProps {
  onViewAll: () => void;
}

export const DestinationsOverview: React.FC<DestinationsOverviewProps> = ({ onViewAll }) => {
  // Using a high-fidelity composite landscape for the background
  const compositeImageUrl = "https://i.postimg.cc/0bBpzxCQ/unnamed2.jpg";

  const stats = [
    { number: "10+", label: "National Parks" },
    { number: "1,000+", label: "Bird Species" },
    { number: "13", label: "Primate Species" },
    { number: "∞", label: "Unforgettable Moments" }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-32 bg-[#002d04]" aria-labelledby="overview-title">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet={`
              ${compositeImageUrl}?w=400&fm=webp 400w,
              ${compositeImageUrl}?w=800&fm=webp 800w,
              ${compositeImageUrl}?w=1200&fm=webp 1200w,
              ${compositeImageUrl}?w=1600&fm=webp 1600w,
              ${compositeImageUrl}?w=2400&fm=webp 2400w
            `}
            sizes="100vw"
          />
          <img
            src={`${compositeImageUrl}?w=1200`}
            srcSet={`
              ${compositeImageUrl}?w=400 400w,
              ${compositeImageUrl}?w=800 800w,
              ${compositeImageUrl}?w=1200 1200w,
              ${compositeImageUrl}?w=1600 1600w,
              ${compositeImageUrl}?w=2400 2400w
            `}
            sizes="100vw"
            alt="Immersive composite overview of Uganda's diverse tourism destinations."
            className="w-full h-full object-cover brightness-[0.4] scale-105 transition-transform duration-[20s] ease-linear"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#002d04]/60 via-transparent to-[#002d04]/80" />
      </div>
      
      {/* Content Overlay */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto reveal-trigger">
          <p className="text-[#d4af37] uppercase tracking-[1em] text-[10px] md:text-[12px] font-bold mb-8">THE GRAND REVEAL</p>
          <h2 id="overview-title" className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-white mb-10 leading-[0.9] tracking-tighter">
            Discover Uganda's <br /> <span className="italic font-light">Hidden Treasures.</span>
          </h2>
          <p className="text-white/70 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-20 tracking-wide leading-relaxed">
            From misty mountain gorillas to the source of the Nile, every destination tells a narrative of profound beauty.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 border-y border-white/10 py-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-serif text-[#d4af37] mb-4 tracking-tighter">{stat.number}</span>
                <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-white/40 font-bold whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={onViewAll}
            className="group relative inline-flex items-center justify-center px-16 py-8 overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 focus:outline-none bg-white text-[#002d04]"
          >
            <span className="relative uppercase tracking-[0.8em] text-[10px] font-bold">
              View All Destinations
            </span>
          </button>
        </div>
      </div>

      {/* Aesthetic Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
