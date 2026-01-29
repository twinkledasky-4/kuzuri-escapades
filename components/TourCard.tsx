
import React from 'react';
import { Tour } from '../types.ts';
import { UI_DICTIONARY } from '../services/translationService.ts';

interface TourCardProps {
  tour: Tour;
  onRequestBooking: (tour: Tour) => void;
  currentLang?: string;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onRequestBooking, currentLang = 'EN' }) => {
  const ui = UI_DICTIONARY[currentLang] || UI_DICTIONARY.EN;

  return (
    <article 
      className="relative group overflow-hidden bg-white border border-[#1A1A1A]/10 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full"
      aria-labelledby={`tour-title-${tour.id}`}
    >
      {/* Background Image Panel - Sharp Treatment, Object-Fit Cover, No Blur */}
      <div className="aspect-[16/10] overflow-hidden relative border-b border-[#1A1A1A]/10 bg-stone-100">
        <img 
          src={tour.imageUrls[0]} 
          alt={tour.name}
          className="w-full h-full object-cover opacity-100 transition-transform duration-[12s] group-hover:scale-105 filter-none"
          style={{ objectPosition: 'center' }}
        />
        
        {/* Price Tag Overlay - Sharp Dark Box in Corner */}
        <div className="absolute top-0 right-0 bg-[#1A1A1A] py-5 px-7 border-l border-b border-[#D4AF37]/40 shadow-2xl z-20 text-right">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.4em] font-black mb-1.5 leading-none">
            {ui.startingFrom}
          </p>
          {tour.price_was && (
            <p className="text-xs font-sans text-white/40 line-through mb-1 tracking-tight">
              {ui.currency}{tour.price_was.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          )}
          <p className="text-2xl font-sans font-black text-white tracking-tighter leading-none">
            {ui.currency}{tour.price_from.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Content Area - Clean & Solid */}
      <div className="p-8 md:p-12 flex flex-col flex-grow bg-white">
        <div className="flex items-center gap-3 mb-5">
           <div className="w-10 h-[2px] bg-[#D4AF37]" />
           <p className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black">
             {tour.category}
           </p>
        </div>
        
        <h3 
          id={`tour-title-${tour.id}`} 
          className="text-2xl md:text-3xl font-sans font-semibold text-[#1A1A1A] mb-8 leading-tight group-hover:text-[#8B5A2B] transition-colors tracking-tight uppercase"
        >
          {tour.name}
        </h3>
        
        <p className="text-[#1A1A1A] text-lg font-normal leading-relaxed mb-12 flex-grow opacity-90">
          {tour.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 border-t border-[#F3F4F6] pt-10 mt-auto">
          <div className="flex items-center gap-5">
            <span className="text-[11px] text-[#1A1A1A] uppercase tracking-[0.3em] font-black bg-[#FAF8F3] px-5 py-3 border border-[#1A1A1A]/10">
              {tour.duration_days} {ui.days}
            </span>
            <span className="text-[11px] text-[#1A1A1A] uppercase tracking-[0.3em] font-black bg-[#FAF8F3] px-5 py-3 border border-[#1A1A1A]/10">
              {tour.duration_nights} {ui.nights}
            </span>
          </div>
          
          <button 
            onClick={() => onRequestBooking(tour)}
            className="text-[#1A1A1A] text-[12px] uppercase tracking-[0.6em] font-black border-b-2 border-[#1A1A1A] pb-2 hover:text-[#8B5A2B] hover:border-[#8B5A2B] transition-all"
          >
            READ MORE
          </button>
        </div>
      </div>
    </article>
  );
};
