import React from 'react';
import { Tour } from '../types.ts';

interface TourCardProps {
  tour: Tour;
  onRequestBooking: (tour: Tour) => void;
  onExplore: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onRequestBooking, onExplore }) => {
  return (
    <article 
      id={`tour-card-${tour.id}`}
      className="relative group overflow-hidden bg-white border border-[#1A1A1A]/10 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full w-full"
      aria-labelledby={`tour-title-${tour.id}`}
    >
      <div className="aspect-[16/10] overflow-hidden relative border-b border-[#1A1A1A]/10 bg-stone-100 shrink-0">
        <img 
          src={tour.imageUrls[0]} 
          alt={tour.name}
          className="w-full h-full object-cover opacity-100 transition-transform duration-[12s] group-hover:scale-105 filter-none"
          style={{ objectPosition: 'center' }}
        />
        
        <div className="absolute top-0 right-0 bg-[#1A1A1A] py-5 px-7 border-l border-b border-[#D4AF37]/40 shadow-2xl z-20 text-right">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.4em] font-black mb-1.5 leading-none">
            STARTING FROM
          </p>
          {tour.price_was && (
            <p className="text-xs font-sans text-white/40 line-through mb-1 tracking-tight">
              ${tour.price_was.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          )}
          <p className="text-2xl font-sans font-black text-white tracking-tighter leading-none">
            ${tour.price_from.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="p-8 md:p-10 flex flex-col flex-grow bg-white">
        <div className="flex items-center gap-3 mb-6 shrink-0">
           <div className="w-8 h-[2px] bg-[#D4AF37]" />
           <p className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black">
             {tour.category}
           </p>
        </div>
        
        <h3 
          id={`tour-title-${tour.id}`} 
          className="text-xl md:text-2xl font-sans font-semibold text-[#1A1A1A] mb-6 leading-tight group-hover:text-[#8B5A2B] transition-colors tracking-tight uppercase line-clamp-3 min-h-[3.3em]"
        >
          {tour.name}
        </h3>
        
        <p className="text-[#1A1A1A]/80 text-base font-normal leading-relaxed mb-10 flex-grow">
          {tour.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-[#F3F4F6] pt-8 mt-auto shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#1A1A1A] uppercase tracking-[0.2em] font-black bg-[#FAF8F3] px-3 py-2 border border-[#1A1A1A]/10">
              {tour.duration_days}D
            </span>
            <span className="text-[10px] text-[#1A1A1A] uppercase tracking-[0.2em] font-black bg-[#FAF8F3] px-3 py-2 border border-[#1A1A1A]/10">
              {tour.duration_nights}N
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onExplore(tour)}
              className="text-[#D4AF37] text-[11px] uppercase tracking-[0.5em] font-black border-b-2 border-[#D4AF37] pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all"
            >
              EXPLORE
            </button>
            <button 
              onClick={() => onRequestBooking(tour)}
              className="text-[#1A1A1A] text-[11px] uppercase tracking-[0.5em] font-black border-b-2 border-[#1A1A1A] pb-1 hover:text-[#8B5A2B] hover:border-[#8B5A2B] transition-all"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};