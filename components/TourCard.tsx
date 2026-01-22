import React, { useState, useEffect, useCallback } from 'react';
import { Tour } from '../types.ts';

interface TourCardProps {
  tour: Tour;
  onRequestBooking: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onRequestBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % tour.imageUrls.length);
  }, [tour.imageUrls.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + tour.imageUrls.length) % tour.imageUrls.length);
  }, [tour.imageUrls.length]);

  useEffect(() => {
    if (isPaused || showDetails) return;
    const interval = setInterval(handleNext, 4500);
    return () => clearInterval(interval);
  }, [isPaused, showDetails, handleNext]);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: tour.currency,
    maximumFractionDigits: 0
  }).format(tour.price_from);

  return (
    <article 
      className="group flex flex-col bg-[#F5F5DC] overflow-hidden transition-all duration-1000 ease-out hover:-translate-y-2 hover:shadow-xl border-2 border-[#1A1A1A] h-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Featured image carousel */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF8F3] border-b-2 border-[#1A1A1A]">
        {tour.imageUrls.map((url, idx) => (
          <div 
            key={url}
            className={`carousel-slide absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              idx === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <img 
              src={url} 
              alt={`${tour.name} view ${idx + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[8000ms] ease-linear"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end z-20">
          <div className="flex gap-2">
            {tour.imageUrls.map((_, idx) => (
              <div 
                key={idx}
                className={`h-[2px] transition-all duration-1000 ${
                  idx === currentIndex ? 'w-8 bg-[#D4AF37]' : 'w-3 bg-white/30'
                }`}
              />
            ))}
          </div>
          <div className="text-white text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
            0{currentIndex + 1} / 0{tour.imageUrls.length}
          </div>
        </div>

        <div className="absolute top-6 left-0 z-10">
          <span className="inline-block bg-[#1A1A1A] text-[#F5F5DC] text-[9px] uppercase tracking-[0.4em] font-bold py-3 px-6 shadow-2xl">
            {tour.duration_days} Days / {tour.duration_nights} Nights
          </span>
        </div>

        <div className="absolute top-6 right-6 z-10">
          <div className="bg-[#FAF8F3] text-[#1A1A1A] px-5 py-3 shadow-2xl text-center border-2 border-[#1A1A1A]">
            <span className="block text-[8px] uppercase tracking-[0.1em] text-[#654321] opacity-80 mb-1 font-bold">From</span>
            <span className="text-[18px] font-serif font-bold text-[#D4AF37] tracking-tight">{formattedPrice}</span>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-12 px-8 flex flex-col items-start flex-grow">
        {tour.category && (
          <p className="text-[#8B5A2B] text-[10px] uppercase tracking-[0.6em] font-bold mb-4">{tour.category}</p>
        )}
        <h3 className="text-[26px] font-serif font-bold text-[#1A1A1A] mb-6 leading-[1.2] tracking-[0.05em] group-hover:italic transition-all duration-1000">
          {tour.name}
        </h3>
        
        <p className="text-[#1A1A1A] text-base font-normal leading-relaxed mb-8 tracking-wide line-clamp-3 opacity-90">
          {tour.description}
        </p>

        <div className="mb-10 space-y-4">
          {tour.highlights.slice(0, 3).map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full mt-1.5 shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A] font-bold leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto w-full flex flex-col gap-4 pt-8 border-t-2 border-[#1A1A1A]">
          <button 
            onClick={() => setShowDetails(true)}
            className="w-full py-4 text-[10px] uppercase tracking-[0.5em] font-bold border-2 border-[#1A1A1A] bg-[#FAF8F3] text-[#1A1A1A] hover:bg-[#8B5A2B] hover:text-[#F5F5DC] transition-all duration-500"
          >
            View Full Itinerary
          </button>
          
          <button 
            onClick={() => onRequestBooking(tour)}
            className="w-full py-4 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[10px] uppercase tracking-[0.5em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500"
          >
            Request Manifest
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="absolute inset-0 z-[30] bg-[#F5F5DC] animate-modal-reveal flex flex-col p-8 md:p-12 overflow-y-auto border-2 border-[#1A1A1A]">
          <button 
            onClick={() => setShowDetails(false)}
            className="absolute top-8 right-8 text-[#1A1A1A] hover:text-red-600 p-2 transition-colors z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          
          <p className="text-[#8B5A2B] uppercase tracking-[0.8em] text-[10px] font-bold mb-4">{tour.category || 'Odyssey'}</p>
          <h4 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-10 italic tracking-[0.05em]">{tour.name}</h4>
          
          <div className="space-y-12 pb-24">
            {tour.itinerary && (
              <div>
                <h5 className="text-[11px] uppercase tracking-[0.5em] font-bold text-[#654321] mb-8 border-b-2 border-[#1A1A1A] pb-4">The Narrative Arc</h5>
                <div className="space-y-8">
                  {tour.itinerary.map((item, idx) => (
                    <div key={idx} className="flex gap-8 items-start">
                      <div className="flex flex-col items-center pt-2">
                        <span className="text-[10px] font-bold text-[#8B5A2B] uppercase tracking-widest whitespace-nowrap">Day {item.day}</span>
                        <div className="w-[2px] h-full bg-[#8B5A2B] mt-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-serif font-bold text-[#1A1A1A] mb-2">{item.title}</span>
                        <span className="text-sm text-[#1A1A1A] font-normal leading-relaxed tracking-wide opacity-80">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="sticky bottom-0 left-0 right-0 pt-8 pb-4 bg-[#F5F5DC] border-t-2 border-[#1A1A1A] z-40">
            <button 
              className="w-full py-6 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[11px] uppercase tracking-[0.6em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 shadow-2xl"
              onClick={() => { setShowDetails(false); onRequestBooking(tour); }}
            >
              Consult Our Curators
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes modalReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-modal-reveal { animation: modalReveal 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
      `}</style>
    </article>
  );
};