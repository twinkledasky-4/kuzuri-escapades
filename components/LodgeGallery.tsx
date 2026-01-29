
import React from 'react';
import { Lodge } from '../types.ts';

interface LodgeGalleryProps {
  onViewAll?: () => void;
  lodges: Lodge[];
}

export const LodgeGallery: React.FC<LodgeGalleryProps> = ({ onViewAll, lodges }) => {
  const featuredLodges = lodges.slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-[#3B1E14] px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1700px]">
        {/* Header - Updated to Left Alignment */}
        <div className="text-left mb-16 reveal-trigger">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-bold mb-6">CURATED SANCTUARIES</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-semibold text-white uppercase tracking-[0.2em] leading-tight mb-8 max-w-4xl">
            EXCEPTIONAL STAYS: OUR HAND-PICKED LODGES & HOTELS.
          </h2>
          
          <div className="w-24 h-[1px] bg-[#D4AF37] mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredLodges.map((lodge) => (
            <article 
              key={lodge.id} 
              className="group relative flex flex-col h-full bg-[#4A291F] border border-white/5 shadow-2xl overflow-hidden reveal-trigger transition-all duration-700 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={lodge.imageUrl} 
                  alt={lodge.name}
                  className="w-full h-full object-cover opacity-100 transition-all duration-[2000ms] group-hover:scale-110"
                />
                {/* Clean linear darkening at the bottom for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow text-white relative text-left">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37]/80 mb-3">
                  {lodge.location}
                </p>
                
                <h3 className="text-2xl font-sans font-black mb-4 tracking-tight leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {lodge.name.toUpperCase()}
                </h3>
                
                <p className="text-white/60 text-base font-normal leading-relaxed mb-8 flex-grow italic">
                  "{lodge.description}"
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-left reveal-trigger">
          <button 
            onClick={onViewAll}
            className="px-10 py-5 bg-[#8B5A2B] text-[#F5F5DC] text-[11px] uppercase tracking-[0.8em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl"
          >
            DISCOVER ALL ACCOMMODATIONS
          </button>
        </div>
      </div>
    </section>
  );
};
