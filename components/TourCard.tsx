
import React from 'react';
import { Tour } from '../types.ts';

interface TourCardProps {
  tour: Tour;
  onRequestBooking: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onRequestBooking }) => {
  return (
    <article 
      className="relative group overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full"
      aria-labelledby={`tour-title-${tour.id}`}
    >
      {/* Background Image Panel */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={tour.imageUrls[0]} 
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-[12s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        
        {/* Price Tag Overlay */}
        <div className="absolute top-6 right-6 bg-white py-2 px-4 shadow-xl border border-black/5">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-1">Starting from</p>
          <p className="text-xl font-sans font-bold text-[#1A1A1A]">
            {tour.currency}{tour.price_from.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 md:p-12 flex flex-col flex-grow">
        <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-black mb-4">
          {tour.category}
        </p>
        <h3 
          id={`tour-title-${tour.id}`} 
          className="text-2xl md:text-3xl font-sans font-semibold text-[#4A3728] mb-6 leading-tight group-hover:text-[#8B5A2B] transition-colors"
        >
          {tour.name}
        </h3>
        <p className="text-[#1A1A1A]/70 text-lg font-normal leading-relaxed mb-10 flex-grow">
          {tour.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-gray-100 pt-8 mt-auto">
          <span className="text-xs text-[#1A1A1A] uppercase tracking-widest font-black bg-gray-50 px-4 py-2">
            {tour.duration_days} Days / {tour.duration_nights} Nights
          </span>
          <button 
            onClick={() => onRequestBooking(tour)}
            className="text-[#1A1A1A] text-sm uppercase tracking-[0.4em] font-black border-b-2 border-[#1A1A1A] pb-1 hover:text-[#8B5A2B] hover:border-[#8B5A2B] transition-all"
          >
            Request Manifest
          </button>
        </div>
      </div>
    </article>
  );
};
