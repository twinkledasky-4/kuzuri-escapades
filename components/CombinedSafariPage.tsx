
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, MapPin, CheckCircle2, Calendar, Users, ShieldCheck, Hotel, Utensils, Car, Compass } from 'lucide-react';
import { Tour } from '../types.ts';
import { crmService } from '../services/crmService.ts';

interface CombinedSafariPageProps {
  tour: Tour;
  onBack: () => void;
  onBook: (tourName: string) => void;
}

export const CombinedSafariPage: React.FC<CombinedSafariPageProps> = ({ tour, onBack, onBook }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteData, setQuoteData] = useState({
    fullName: '',
    email: '',
    travelDates: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuickQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await crmService.captureLead({
        source: 'tour_booking',
        packageViewing: tour.name,
        data: {
          fullName: quoteData.fullName,
          email: quoteData.email,
          travelDate: quoteData.travelDates,
          message: `Quick Quote Request for ${tour.name}`
        }
      });

      setIsSubmitted(true);
      setQuoteData({ fullName: '', email: '', travelDates: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Hero Header - Shrunken design */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tour.imageUrls[0]} 
            alt={tour.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <button 
              onClick={onBack}
              className="mb-4 flex items-center gap-2 text-white/70 hover:text-[#D4AF37] transition-colors uppercase text-[10px] tracking-[0.3em] font-bold group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Exploration
            </button>

            {/* Breadcrumbs */}
            <div className="mb-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
              <span className="hover:text-white cursor-pointer transition-colors" onClick={onBack}>Home</span>
              <span className="text-[#D4AF37]">/</span>
              <span className="hover:text-white cursor-pointer transition-colors" onClick={onBack}>Combined Safaris</span>
              <span className="text-[#D4AF37]">/</span>
              <span className="text-white">{tour.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white uppercase tracking-tight leading-tight max-w-5xl mx-auto drop-shadow-2xl">
              {tour.name}
            </h1>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-3 text-white/90">
                <Clock size={18} className="text-[#D4AF37]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{tour.duration_days} Days / {tour.duration_nights} Nights</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <MapPin size={18} className="text-[#D4AF37]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{tour.countries || 'East Africa'}</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content Body */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left Column: The Journey */}
            <div className="lg:col-span-2 space-y-20">
              {/* Narrative */}
              <div className="reveal-trigger">
                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block font-sans">The Narrative</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mb-8 leading-tight">
                  A Journey Through the <span className="italic text-[#D4AF37]">Soul of East Africa.</span>
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg font-sans">
                  {tour.description}
                </p>
              </div>

              {/* Day by Day Itinerary */}
              <div className="reveal-trigger">
                <h3 className="text-xl font-serif font-bold text-[#D4AF37] mb-12 uppercase tracking-widest">The Daily Rhythm</h3>
                <div className="space-y-0">
                  {tour.itinerary?.map((day, idx) => (
                    <React.Fragment key={idx}>
                      <div className="relative pl-12 md:pl-20 pb-16 border-l border-stone-100 last:border-0 last:pb-0">
                        <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 bg-white border border-stone-200 rounded-full flex items-center justify-center z-10 shadow-sm">
                          <span className="text-[10px] md:text-[12px] font-black text-[#D4AF37] font-sans">{day.day}</span>
                        </div>
                        
                        <div className="space-y-6">
                          <h4 className="text-lg md:text-xl font-serif font-bold text-[#1A1A1A] uppercase tracking-tight">
                            {day.title}
                          </h4>
                          <div className="space-y-4">
                            {day.detail.split('\n\n').map((para, pIdx) => (
                              <p key={pIdx} className="text-stone-600 leading-relaxed text-base font-sans">
                                {para}
                              </p>
                            ))}
                          </div>

                          {/* Daily Iconography */}
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4">
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm border border-stone-100">
                              <Hotel size={16} className="text-[#D4AF37]" />
                              <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Accommodation</span>
                                <span className="text-[11px] font-bold text-[#1A1A1A]">{day.accommodation || 'Luxury Safari Lodge'}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm border border-stone-100">
                              <Utensils size={16} className="text-[#D4AF37]" />
                              <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Meals</span>
                                <span className="text-[11px] font-bold text-[#1A1A1A]">{day.meals || 'Breakfast, Lunch, Dinner'}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm border border-stone-100">
                              <Car size={16} className="text-[#D4AF37]" />
                              <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Transport</span>
                                <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-tighter">4x4 Land Cruiser</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm border border-stone-100">
                              <Compass size={16} className="text-[#D4AF37]" />
                              <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Activities</span>
                                <span className="text-[11px] font-bold text-[#1A1A1A]">{day.activities || 'Guided Safari Experience'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image Break between Day 5 and 6 */}
                      {Number(day.day) === 5 && tour.duration_days > 5 && (
                        <div className="relative w-full h-[400px] my-12 -ml-12 md:-ml-20 overflow-hidden rounded-sm">
                          <img 
                            src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=85&w=1600" 
                            alt="Wildlife Transition"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="text-center">
                              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">The Transition</span>
                              <h3 className="text-3xl font-serif font-bold text-white uppercase tracking-widest">Crossing Horizons</h3>
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-t border-stone-100 reveal-trigger">
                <div>
                  <h4 className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-[0.3em] mb-8 flex items-center gap-2 font-sans">
                    <span className="w-8 h-[1px] bg-[#D4AF37]" />
                    What is Included
                  </h4>
                  <ul className="space-y-4 font-sans">
                    {tour.inclusions?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[12px] text-stone-700 font-medium leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-[#1A1A1A] uppercase tracking-[0.3em] mb-8 flex items-center gap-2 font-sans">
                    <span className="w-8 h-[1px] bg-stone-300" />
                    What is Excluded
                  </h4>
                  <ul className="space-y-4 font-sans">
                    {tour.exclusions?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[12px] text-stone-500 font-medium leading-relaxed">
                        <span className="text-stone-300 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trust Footer */}
              <div className="pt-20 border-t border-stone-100 reveal-trigger">
                <div className="flex flex-col items-center justify-center text-center space-y-12">
                  <div className="space-y-4">
                    <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] block">Our Credentials</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A]">Travel with <span className="italic text-[#D4AF37]">Absolute Confidence.</span></h3>
                  </div>
                  
                  <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
                    <img src="https://i.postimg.cc/85mR6vY7/utb-logo.png" alt="UTB" className="h-20 md:h-28 object-contain" referrerPolicy="no-referrer" />
                    <img src="https://i.postimg.cc/m2fX9X7P/tripadvisor.png" alt="TripAdvisor" className="h-16 md:h-24 object-contain" referrerPolicy="no-referrer" />
                    <a 
                      href="https://www.safaribookings.com/p5995" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                    >
                      <img src="https://i.postimg.cc/vH6X6X6X/safaribookings.png" alt="SafariBookings" className="h-14 md:h-20 object-contain" referrerPolicy="no-referrer" />
                    </a>
                  </div>
                  
                  <p className="text-stone-400 text-[11px] uppercase tracking-[0.3em] font-bold max-w-xl leading-loose">
                    Licensed by the Uganda Tourism Board & Highly Rated across Global Safari Platforms. Your journey is protected by our commitment to excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Trip Overview Box - Pamoja Style */}
                <div className="bg-stone-50 p-8 rounded-sm border border-stone-200 reveal-trigger">
                  <h3 className="text-sm font-serif font-bold text-[#D4AF37] mb-8 uppercase tracking-widest border-b border-stone-200 pb-4">Trip Overview</h3>
                  <div className="space-y-6 font-sans">
                    <div className="flex justify-between items-center py-2 border-b border-stone-100">
                      <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Start City</span>
                      <span className="text-[11px] font-bold text-[#1A1A1A] uppercase">{tour.startCity || 'Entebbe'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-100">
                      <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">End City</span>
                      <span className="text-[11px] font-bold text-[#1A1A1A] uppercase">{tour.endCity || 'Arusha / Nairobi'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-100">
                      <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Transport</span>
                      <span className="text-[11px] font-bold text-[#1A1A1A] uppercase">{tour.transportMode || '4x4 Land Cruiser'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-100">
                      <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Primary Focus</span>
                      <span className="text-[11px] font-bold text-[#1A1A1A] uppercase">{tour.primaryFocus || 'Wildlife & Primates'}</span>
                    </div>
                  </div>
                </div>

                {/* Investment Card */}
                <div className="bg-[#1A1A1A] text-white p-10 rounded-sm shadow-2xl reveal-trigger">
                  <span className="text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block font-sans">{tour.category}</span>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-[8px] font-black text-[#D4AF37] uppercase tracking-[0.4em] font-sans">STARTING FROM</span>
                    <span className="text-5xl font-serif font-bold">{tour.currency}{tour.price_from.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                    <span className="text-xs text-white/40 uppercase tracking-widest ml-2 font-sans">Per Person</span>
                  </div>
                  
                  <div className="space-y-6 mb-10 font-sans">
                    <div className="flex items-center gap-4 text-white/70">
                      <Calendar size={18} className="text-[#D4AF37]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Flexible Departures</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70">
                      <Users size={18} className="text-[#D4AF37]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Private & Tailored</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70">
                      <ShieldCheck size={18} className="text-[#D4AF37]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Silverback Certified Guiding</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onBook(tour.name)}
                    className="w-full py-5 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-lg font-sans"
                  >
                    Author Your Journey
                  </button>
                </div>

                {/* Quick Quote Form */}
                <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 reveal-trigger">
                  <span className="text-[#D4AF37] text-[9px] font-black uppercase tracking-[0.4em] mb-4 block font-sans">Quick Quote</span>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6">Request a <span className="italic text-[#D4AF37]">Signature Price.</span></h3>
                  
                  {isSubmitted ? (
                    <div className="p-6 bg-white border border-[#D4AF37] text-center animate-fade-in">
                      <p className="text-[#1A1A1A] font-bold text-sm uppercase tracking-widest">Vision Received</p>
                      <p className="text-xs text-stone-500 mt-2">Our architects will contact you shortly.</p>
                    </div>
                  ) : (
                    <form 
                      className="space-y-4 font-sans" 
                      onSubmit={handleQuickQuote}
                    >
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-white border border-stone-200 p-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors" 
                          placeholder="John Doe" 
                          required 
                          value={quoteData.fullName}
                          onChange={(e) => setQuoteData({...quoteData, fullName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full bg-white border border-stone-200 p-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors" 
                          placeholder="john@example.com" 
                          required 
                          value={quoteData.email}
                          onChange={(e) => setQuoteData({...quoteData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Travel Dates</label>
                        <input 
                          type="text" 
                          className="w-full bg-white border border-stone-200 p-3 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors" 
                          placeholder="e.g. July 2024" 
                          value={quoteData.travelDates}
                          onChange={(e) => setQuoteData({...quoteData, travelDates: e.target.value})}
                        />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#D4AF37] text-black text-[9px] font-black uppercase tracking-[0.4em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 shadow-md disabled:opacity-50"
                      >
                        {isSubmitting ? 'Transmitting...' : 'Submit Request'}
                      </button>
                    </form>
                  )}
                </div>

                {/* Tour Highlights */}
                <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 reveal-trigger">
                  <h3 className="text-sm font-serif font-bold text-[#D4AF37] mb-6 uppercase tracking-widest">Expedition Highlights</h3>
                  <div className="space-y-4 font-sans">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
