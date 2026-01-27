
import React from 'react';
import { LODGES } from '../constants.tsx';

interface LodgeGalleryProps {
  onViewAll?: () => void;
}

export const LodgeGallery: React.FC<LodgeGalleryProps> = ({ onViewAll }) => {
  // Only show the first 4 for the homepage grid
  const featuredLodges = LODGES.slice(0, 4);

  return (
    <section className="py-24 md:py-48 bg-[#3B1E14] px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1700px]">
        {/* Heading Section: Centered title and curated paragraph */}
        <div className="text-center mb-24 reveal-trigger">
          <h2 className="text-3xl md:text-5xl font-sans font-semibold text-white uppercase tracking-[0.2em] leading-tight mb-10">
            EXCEPTIONAL STAYS: OUR HAND-PICKED LODGES & HOTELS
          </h2>
          
          <p className="max-w-[800px] mx-auto text-white/80 text-lg md:text-xl font-light leading-relaxed text-center">
            From intimate, eco-conscious tents nestled in the heart of the wilderness to opulent lodges overlooking pristine white sands, we find your perfect sanctuary. At Kuzuri Escapades, we believe your accommodation is a vital part of the journey. <span className="font-semibold text-[#D4AF37]">Expert Tip:</span> We highly recommend blending different stay styles for a truly diverse Ugandan experience.
          </p>

          <div className="w-24 h-[1px] bg-white/20 mx-auto mt-12" />
        </div>

        {/* The Accommodation Grid: Horizontal row of 4 interactive cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {featuredLodges.map((lodge) => (
            <article 
              key={lodge.id} 
              className="group relative flex flex-col h-full bg-[#4A291F] border border-white/5 shadow-2xl overflow-hidden reveal-trigger transition-all duration-700 hover:-translate-y-2 cursor-pointer"
            >
              {/* High-quality interior/exterior photo */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={lodge.imageUrl} 
                  alt={lodge.name}
                  className="w-full h-full object-cover grayscale brightness-90 transition-all duration-[2000ms] group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B1E14] via-transparent to-transparent opacity-40" />
                
                {/* Gold 'Accommodation in Uganda' badge in the top-left */}
                <div className="absolute top-6 left-6 bg-[#D4AF37] px-4 py-2 shadow-xl z-20">
                  <p className="text-[9px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]">
                    Accommodation in Uganda
                  </p>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow text-white relative">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37]/80 mb-4">
                  {lodge.location}
                </p>
                
                {/* Lodge Name in bold white text (all-caps) */}
                <h3 className="text-2xl font-sans font-black mb-6 tracking-tight leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {lodge.name.toUpperCase()}
                </h3>
                
                <p className="text-white/60 text-base font-normal leading-relaxed mb-12 flex-grow italic">
                  "{lodge.description}"
                </p>
                
                {/* Bottom navigation line */}
                <div className="pt-8 border-t border-white/10 mt-auto flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.4em] font-black text-white/40">Discover sanctuary</p>
                  </div>
                  
                  {/* Small white arrow icon in the bottom-right corner */}
                  <div className="transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#D4AF37]">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Action Button: Centered, burnt-orange button */}
        <div className="mt-28 text-center reveal-trigger">
          <button 
            onClick={onViewAll}
            className="px-12 py-6 bg-[#8B5A2B] text-[#F5F5DC] text-[11px] uppercase tracking-[0.8em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95"
          >
            DISCOVER ALL ACCOMMODATIONS
          </button>
        </div>
      </div>
    </section>
  );
};
