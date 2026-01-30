
import React, { useEffect, useState } from 'react';
import { Tour } from '../types.ts';
import { UI_DICTIONARY } from '../services/translationService.ts';
import { Check, X, Clock, MapPin, Calendar, Tag } from 'lucide-react';

interface TourDetailProps {
  tour: Tour;
  onBack: () => void;
  onBook: (tour: Tour) => void;
  currentLang?: string;
}

export const TourDetail: React.FC<TourDetailProps> = ({ tour, onBack, onBook, currentLang = 'EN' }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ui = UI_DICTIONARY[currentLang] || UI_DICTIONARY.EN;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, [tour.id]);

  return (
    <div className="bg-[#FAF8F3] min-h-screen selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Navigation - Strategic Placement to clear Navbar (120px offset safe) */}
      <div className="fixed top-24 left-6 md:left-12 z-50">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-black text-white bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 border border-white/10 px-8 py-4 shadow-2xl"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
          {currentLang === 'EN' ? 'BACK TO COLLECTION' : 'RETOUR'}
        </button>
      </div>

      {/* Hero Header - Section 1: THE VISION (Strictly scroll-mt-120px to avoid obstruction) */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden flex items-end bg-[#1A1A1A] border-b-2 border-[#1A1A1A] scroll-mt-[120px]">
        <img
          src={tour.imageUrls[0]}
          alt={tour.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] ease-out opacity-100 ${isRevealed ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

        <div className={`relative z-20 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-24 pb-16 md:pb-24 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-6 md:mb-10">THE VISION</p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-sans font-black text-white uppercase tracking-tight leading-[0.9] max-w-6xl mb-12">
            {tour.name}
          </h1>
          
          <div className="flex flex-wrap gap-10 border-t border-white/20 pt-10">
            <div className="flex items-center gap-4">
              <Clock className="text-[#D4AF37]" size={20} />
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-black">DURATION</p>
                <p className="text-white text-sm font-bold">{tour.duration_days} Days / {tour.duration_nights} Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Tag className="text-[#D4AF37]" size={20} />
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-black">STARTING FROM</p>
                <p className="text-white text-sm font-bold">{ui.currency}{tour.price_from.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Details */}
      <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Narrative - The Vision Statement */}
          <div className="lg:col-span-8 space-y-24">
            <div className="reveal-trigger">
              <div className="max-w-4xl mb-24 relative">
                <div className="absolute -top-12 -left-8 text-8xl text-[#D4AF37]/20 font-serif leading-none">"</div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] leading-relaxed mb-8 italic relative z-10">
                  {tour.description}
                </h2>
                <div className="w-20 h-[2px] bg-[#D4AF37] mt-12" />
              </div>

              <h2 className="text-3xl md:text-5xl font-sans font-black text-[#1A1A1A] uppercase tracking-tight mb-12 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-[#D4AF37]" />
                REGIONAL HIGHLIGHTS
              </h2>
              
              <div className="space-y-16 border-l border-black/5 pl-8 md:pl-16 ml-4">
                {tour.itinerary?.map((day, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[41px] md:-left-[73px] top-0 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-white shadow-xl group-hover:scale-150 transition-transform" />
                    <p className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black mb-4">
                      {typeof day.day === 'number' ? `DAY ${day.day}` : day.day.toUpperCase()}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#1A1A1A] mb-6 uppercase tracking-tight">{day.title}</h3>
                    <p className="text-[#1A1A1A]/70 text-lg leading-relaxed font-normal max-w-3xl">
                      {day.detail}
                    </p>
                  </div>
                ))}

                {!tour.itinerary && (
                   <p className="text-[#1A1A1A]/70 text-lg leading-relaxed font-normal max-w-3xl">
                     A bespoke itinerary is currently being authored for this specific odyssey. Connect with our curators to receive a personalized blueprint.
                   </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar: Excursions & Booking */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-40 bg-white border border-black/5 p-10 shadow-2xl space-y-12">
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.6em] font-black text-[#8B5A2B] mb-8 border-b border-black/5 pb-4">EXCURSION LEDGER</h4>
                <div className="space-y-6">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-[#D4AF37]" strokeWidth={3} />
                      </div>
                      <p className="text-[13px] font-bold text-[#1A1A1A] uppercase tracking-wide leading-tight">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-black/5">
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <p className="text-[10px] text-black/40 uppercase tracking-widest font-black mb-1">TOTAL VALUATION</p>
                    <p className="text-3xl font-sans font-black text-[#1A1A1A]">{ui.currency}{tour.price_from.toLocaleString()}</p>
                  </div>
                  <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest">PER PERSON</p>
                </div>
                
                <button 
                  onClick={() => onBook(tour)}
                  className="w-full py-6 bg-[#1A1A1A] text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl"
                >
                  REQUEST BOOKING
                </button>
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="p-10 bg-[#FAF8F3] border border-black/5 space-y-10">
              <div>
                <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#1A1A1A] mb-6">INCLUSIONS</h5>
                <ul className="space-y-3">
                  {tour.inclusions?.map((inc, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-medium text-black/60">
                      <Check size={14} className="text-green-600" /> {inc}
                    </li>
                  )) || <li className="text-xs italic text-black/40">Included: Private ground logistics, regional expertise & signature stays.</li>}
                </ul>
              </div>
            </div>
          </aside>

        </div>
      </div>
      
      {/* Visual Gallery */}
      <section className="py-32 bg-[#1A1A1A] overflow-hidden">
        <div className="container mx-auto max-w-[1700px] px-6">
          <div className="text-center mb-20">
             <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-6">VISUAL FRAGMENTS</p>
             <h2 className="text-4xl md:text-7xl font-sans font-black text-white uppercase tracking-tight">Immersive Archive</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tour.imageUrls.map((url, i) => (
              <div key={i} className={`overflow-hidden border border-white/10 ${i === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}>
                <img src={url} alt={`${tour.name} view ${i}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Bridge */}
      <section className="py-24 md:py-48 bg-[#FAF8F3] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-sans font-black text-[#1A1A1A] uppercase tracking-tight mb-16 leading-[1.1]">
            Experience the <span className="text-[#D4AF37] italic font-light">Unseen</span> Pearl.
          </h2>
          <button 
            onClick={() => onBook(tour)}
            className="px-16 py-7 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[1em] font-black hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all duration-500 shadow-2xl"
          >
            CONSULT OUR CURATORS
          </button>
        </div>
      </section>
    </div>
  );
};
