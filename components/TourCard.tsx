
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
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isPaused, showDetails, handleNext]);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: tour.currency,
    maximumFractionDigits: 0
  }).format(tour.price_from);

  const durationString = `${tour.duration_days} Days / ${tour.duration_nights} Nights`;

  return (
    <article 
      className="group flex flex-col bg-white overflow-hidden transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(0,45,4,0.12)] border border-stone-50 h-full relative rounded-[8px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Featured image with gradient overlay */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {tour.imageUrls.map((url, idx) => (
          <div 
            key={url}
            className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-out ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={url} 
              srcSet={`
                ${url}?w=400 400w,
                ${url}?w=800 800w,
                ${url}?w=1200 1200w,
                ${url}?w=1600 1600w,
                ${url}?w=2400 2400w
              `}
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                33vw
              "
              alt={`${tour.name} perspective ${idx + 1}`}
              loading="lazy"
              decoding="async"
              className={`package-card-image transition-transform duration-[6000ms] ease-out ${
                idx === currentIndex ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#002d04]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {tour.imageUrls.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              className={`h-[2px] transition-all duration-500 rounded-full ${
                idx === currentIndex ? 'w-8 bg-[#d4af37]' : 'w-3 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrows on Hover */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#002d04] transition-all pointer-events-auto"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-[#002d04] transition-all pointer-events-auto"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
          </button>
        </div>

        {/* Duration Badge (Top-Left) */}
        <div className="absolute top-6 left-0 z-10">
          <span className="inline-block bg-[#002d04] text-[#d4af37] text-[8px] uppercase tracking-[0.5em] font-bold py-2 px-5 translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-500 shadow-xl">
            {durationString}
          </span>
        </div>

        {/* Price Tag (Top-Right, Savanna Gold) */}
        <div className="absolute top-6 right-6 z-10">
          <div className="bg-[#d4af37] text-[#002d04] px-4 py-2 shadow-lg flex flex-col items-center">
            <span className="text-[7px] uppercase tracking-[0.2em] font-bold opacity-60">From</span>
            <span className="text-[14px] font-serif font-bold tracking-tight">{formattedPrice}</span>
          </div>
        </div>
      </div>

      {/* Card Content Section */}
      <div className="pt-8 pb-10 px-8 flex flex-col items-start flex-grow bg-white">
        {tour.category && (
          <p className="text-[#d4af37] text-[8px] uppercase tracking-[0.4em] font-bold mb-3">{tour.category}</p>
        )}
        <h3 className="text-[24px] font-serif text-[#002d04] mb-4 leading-tight tracking-tight group-hover:italic transition-all duration-500">
          {tour.name}
        </h3>
        
        <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 tracking-wide line-clamp-2">
          {tour.description}
        </p>

        {/* Key Highlights (Bullet Points) */}
        <div className="mb-8 flex flex-col gap-2">
          {tour.highlights.slice(0, 4).map((feature, fIdx) => (
            <div key={fIdx} className="flex items-center gap-3">
              <span className="w-1 h-1 bg-[#d4af37] rounded-full" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto w-full flex flex-col gap-4 pt-6 border-t border-stone-100">
          <button 
            onClick={() => setShowDetails(true)}
            className="w-full py-4 text-[9px] uppercase tracking-[0.4em] font-bold text-[#002d04] border border-[#002d04]/10 hover:bg-[#002d04] hover:text-white transition-all duration-500"
          >
            View Full Itinerary
          </button>
          
          <button 
            onClick={() => onRequestBooking(tour)}
            className="w-full py-4 bg-[#002d04] text-white text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-[#d4af37] transition-all duration-500 shadow-lg"
          >
            Request Booking
          </button>
        </div>
      </div>

      {/* Expanded Detail View Overlay */}
      {showDetails && (
        <div className="absolute inset-0 z-[30] bg-white animate-modal-reveal flex flex-col p-8 overflow-y-auto">
          <button 
            onClick={() => setShowDetails(false)}
            className="absolute top-6 right-6 text-stone-300 hover:text-[#002d04] p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          
          <p className="text-[#d4af37] uppercase tracking-[0.5em] text-[9px] font-bold mb-4">{tour.category || 'Itinerary'}</p>
          <h4 className="text-3xl font-serif text-[#002d04] mb-8 italic">{tour.name}</h4>
          
          <div className="space-y-12 pb-20">
            {tour.itinerary && (
              <div>
                <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-8 border-b border-stone-100 pb-2">The Narrative Arc</h5>
                <div className="space-y-8">
                  {tour.itinerary.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-[#d4af37] whitespace-nowrap">Day {item.day}</span>
                        <div className="w-[1px] h-full bg-stone-100 mt-2" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-serif italic text-[#002d04] mb-1">{item.title}</span>
                        <span className="text-xs text-stone-400 font-light leading-relaxed">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-stone-50 pt-10">
              {tour.inclusions && tour.inclusions.length > 0 && (
                <div>
                  <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#002d04] mb-6">Inclusions</h5>
                  <ul className="space-y-3">
                    {tour.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex gap-3 text-xs text-stone-500 font-light">
                        <span className="text-[#d4af37] font-bold">✓</span> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tour.exclusions && tour.exclusions.length > 0 && (
                <div>
                  <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-300 mb-6">Exclusions</h5>
                  <ul className="space-y-3">
                    {tour.exclusions.map((exc, idx) => (
                      <li key={idx} className="flex gap-3 text-xs text-stone-400 font-light italic">
                        <span className="text-stone-300">✗</span> {exc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="sticky bottom-0 left-0 right-0 pt-6 pb-2 bg-white border-t border-stone-100">
            <button 
              className="w-full py-6 bg-[#002d04] text-white text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-[#d4af37] transition-all shadow-2xl"
              onClick={() => {
                setShowDetails(false);
                onRequestBooking(tour);
              }}
            >
              Consult for Booking
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes modalReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); } }
        .animate-modal-reveal { animation: modalReveal 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
      `}</style>
    </article>
  );
};
