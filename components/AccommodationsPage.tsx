import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LODGES } from '../constants.tsx';
import { Lodge } from '../types.ts';
import { ChevronRight, ChevronLeft, Maximize, Minimize } from 'lucide-react';

const REGIONS = [
  'Entebbe', 'Bwindi', 'Jinja', 'Kabale', 'Kampala', 'Kibale', 
  'Kidepo Valley', 'Lake Mburo', 'Masindi', 'Mbarara', 'Moroto', 
  'Mount Elgon', 'Murchison Falls', 'Mgahinga', 'Queen Elizabeth'
];

const ISHASHA_GALLERY = [
  { 
    url: 'https://i.postimg.cc/d3wH8fC0/IM-SA-QE-Ishasha-Jungle-Lodge-Exterior.webp', 
    label: 'Exterior',
    caption: 'Authentic Thatched Architecture & Native Craftsmanship' 
  },
  { 
    url: 'https://i.postimg.cc/66f199sQ/IM-SA-QE-Ishasha-Jungle-Lodge-Seating-area.webp', 
    label: 'Terrace',
    caption: 'Bespoke Seating Areas Curated with Local Materials' 
  },
  { 
    url: 'https://i.postimg.cc/LXfwkf0g/IM-SA-QE-Ishasha-Jungle-Lodge-Double-bed-room.webp', 
    label: 'Bedroom',
    caption: 'Refined Double Suites with Natural Textures' 
  },
  { 
    url: 'https://i.postimg.cc/Qx64T0x6/IM-SA-QE-Ishasha-Jungle-Lodge-Bathroom.webp', 
    label: 'Bathroom',
    caption: 'Organic En-Suite Bathrooms using Sustainable Elements' 
  },
  { 
    url: 'https://i.postimg.cc/bwWm6rng/IM-SA-QE-Ishasha-Jungle-Lodge-Twin-beds-room.webp', 
    label: 'River View',
    caption: 'Comfortable Twin-Bed Accommodations with Riverside Vistas' 
  }
];

interface AccommodationsPageProps {
  onEnquire?: () => void;
  onBack?: () => void;
}

export const AccommodationsPage: React.FC<AccommodationsPageProps> = ({ onEnquire, onBack }) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const mailtoLink = "mailto:hello@kuzuri-escapades.com?subject=New Consultation Inquiry - Kuzuri Escapades";

  const handleRegionToggle = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region) 
        : [...prev, region]
    );
  };

  const filteredLodges = useMemo(() => {
    if (selectedRegions.length === 0) return LODGES;
    return LODGES.filter(lodge => selectedRegions.includes(lodge.region || ''));
  }, [selectedRegions]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auto-play logic for the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ISHASHA_GALLERY.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % ISHASHA_GALLERY.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + ISHASHA_GALLERY.length) % ISHASHA_GALLERY.length);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      sliderRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="bg-[#FAF8F3] min-h-screen pt-0 pb-24 selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Hero Header: Full-Screen Landing with Ishasha Jungle Lodge Exterior */}
      <section className="relative h-screen flex items-center px-8 overflow-hidden bg-[#1A1A1A]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/d3wH8fC0/IM-SA-QE-Ishasha-Jungle-Lodge-Exterior.webp" 
            alt="Ishasha Jungle Lodge Professional Exterior Shot"
            className="w-full h-full object-cover object-center transition-transform duration-[25000ms] scale-110 animate-slow-zoom brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/45 z-[1]" />
        </div>

        {/* VISUAL EFFECT: 'Torn Paper' white border transition at the bottom */}
        <div className="absolute bottom-[-1px] left-0 w-full z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-auto drop-shadow-[0_-5px_15px_rgba(0,0,0,0.1)]"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 120H1440V45.5L1411 51L1377.5 37.5L1345.5 51L1311 41.5L1277 56L1245.5 45.5L1211.5 51L1177 37.5L1145 51L1111 41.5L1077 56L1045.5 45.5L1011.5 51L977 37.5L945 51L911 41.5L877 56L845.5 45.5L811.5 51L777 37.5L745 51L711 41.5L677 56L645.5 45.5L611.5 51L577 37.5L545 51L511 41.5L477 56L445.5 45.5L411.5 51L377 37.5L345 51L311 41.5L277 56L245.5 45.5L211.5 51L177 37.5L145 51L111 41.5L77 56L45.5 45.5L11.5 51L0 41.5V120Z" 
              fill="#FAF8F3"
            />
          </svg>
        </div>

        {/* TITLE OVERLAY: Center-Right - White, Bold, All-Caps Sans-Serif Watermark */}
        <div className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 z-50 hidden lg:block pointer-events-none text-right">
          <div className="flex flex-col items-end">
            <h2 className="text-white font-sans font-black uppercase text-4xl md:text-6xl lg:text-[6.5rem] tracking-[0.4em] leading-none select-none drop-shadow-2xl opacity-60">
              ISHASHA
            </h2>
            <h2 className="text-white font-sans font-black uppercase text-4xl md:text-6xl lg:text-[6.5rem] tracking-[0.4em] mt-4 leading-none select-none drop-shadow-2xl opacity-60">
              JUNGLE LODGE
            </h2>
            <div className="w-64 h-2 bg-[#D4AF37] mt-12 drop-shadow-lg opacity-60" />
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-[1700px] mx-auto relative z-50 w-full">
          <div className="max-w-4xl">
            {/* SIGNATURE GHOST BUTTON: Positioned directly above the headline with professional mailto link */}
            <a 
              href={mailtoLink}
              className="mb-10 inline-flex items-center gap-6 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 group cursor-pointer reveal-trigger bg-transparent shadow-2xl backdrop-blur-sm active:scale-95 no-underline"
            >
              <span>← BACK TO MAIN PAGE</span>
              <div className="w-6 h-6 border border-[#D4AF37] flex items-center justify-center group-hover:border-[#1A1A12] transition-all duration-500 text-sm font-light pt-0.5">
                &gt;
              </div>
            </a>

            {/* BREADCRUMB TRAIL */}
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-12 text-[10px] uppercase tracking-[0.3em] font-black text-white/70 reveal-trigger" aria-label="Breadcrumb">
              <button onClick={onBack} className="hover:text-[#D4AF37] transition-colors">Home</button>
              <ChevronRight size={10} className="opacity-40" />
              <button onClick={onBack} className="hover:text-[#D4AF37] transition-colors">Safari in Uganda</button>
              <ChevronRight size={10} className="opacity-40" />
              <button onClick={scrollToTop} className="hover:text-[#D4AF37] transition-colors">Accommodation in Uganda</button>
              <ChevronRight size={10} className="opacity-40" />
              <span className="text-[#D4AF37]">Ishasha Jungle Lodge</span>
            </nav>

            <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-8 reveal-trigger">THE SANCTUARIES</p>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tighter leading-none mb-12 reveal-trigger uppercase drop-shadow-2xl">
              EXCEPTIONAL <span className="italic font-light">STAYS.</span>
            </h1>
            
            <div className="max-w-4xl text-white text-lg md:text-xl font-serif font-light leading-relaxed tracking-wide reveal-trigger opacity-100 drop-shadow-lg space-y-8">
              <p>
                <span className="font-bold text-[#D4AF37]">Ishasha Jungle Lodge</span> is an intimate ecolodge located in the southern part of Queen Elizabeth National Park, 2 kilometers from the Katokye entrance. Surrounded by lush forests and acacia trees, and bordered by the beautiful Ishasha River, this lodge offers four comfortable and spacious platform cottages, each with a private terrace and en-suite bathroom, providing a complete immersion in nature.
              </p>
              <p>
                The restaurant serves delicious Ugandan and international cuisine, while the bar and campfire area invite relaxation after a day of safari. Built using natural, locally sourced materials, the lodge runs entirely on solar power and is actively committed to recycling and reducing its carbon footprint.
              </p>

              <div className="pt-6">
                <button 
                  onClick={onEnquire}
                  className="bg-[#D4AF37] text-[#1A1A1A] px-14 py-6 text-[11px] font-black tracking-[0.7em] uppercase shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:bg-white hover:text-black transition-all duration-700 transform hover:scale-105 active:scale-95 border-none cursor-pointer"
                >
                  BOOK THIS STAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SLIDER SECTION */}
      <section ref={sliderRef} className="w-full h-[60vh] md:h-[85vh] relative overflow-hidden bg-white group/slider mt-0">
        <div className="w-full h-full relative">
          {ISHASHA_GALLERY.map((image, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-[2s] ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <img 
                src={image.url} 
                alt={`Gallery detail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className={`absolute bottom-28 left-12 md:left-24 transition-all duration-1000 delay-500 ${idx === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-black mb-2 drop-shadow-md">FRAGMENT 0{idx + 1}</p>
                <h3 className="text-white font-serif italic text-2xl md:text-4xl font-light drop-shadow-xl">
                  {image.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D4AF37]/90 text-[#1A1A1A] flex items-center justify-center backdrop-blur-md shadow-2xl z-30 transition-all duration-500 hover:bg-white hover:scale-110 active:scale-95 border-none cursor-pointer"
          aria-label="Previous view"
        >
          <ChevronLeft size={32} strokeWidth={2} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D4AF37]/90 text-[#1A1A1A] flex items-center justify-center backdrop-blur-md shadow-2xl z-30 transition-all duration-500 hover:bg-white hover:scale-110 active:scale-95 border-none cursor-pointer"
          aria-label="Next view"
        >
          <ChevronRight size={32} strokeWidth={2} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40 bg-white/95 backdrop-blur-xl px-10 py-4 rounded-full border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-700">
          {ISHASHA_GALLERY.map((view, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="flex flex-col items-center group/dot focus:outline-none relative"
              aria-label={`Switch to ${view.label}`}
            >
              <span className={`absolute -top-10 text-[9px] uppercase tracking-[0.2em] font-black transition-all duration-500 whitespace-nowrap bg-black text-white px-3 py-1 rounded-sm shadow-xl ${idx === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none group-hover/dot:opacity-100 group-hover/dot:translate-y-0'}`}>
                {view.label}
              </span>
              <div className={`w-3 h-3 rounded-full transition-all duration-500 border-2 ${idx === currentSlide ? 'bg-[#D4AF37] border-[#D4AF37] scale-125 shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-transparent border-[#1A1A1A]/20 hover:border-[#D4AF37]'}`} />
            </button>
          ))}
        </div>

        <button 
          onClick={toggleFullscreen}
          className="absolute bottom-8 left-8 md:left-12 z-40 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-black/5 text-[#1A1A1A] flex items-center justify-center shadow-xl hover:bg-[#D4AF37] hover:text-white transition-all duration-500"
          aria-label={isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
        >
          {isFullscreen ? <Minimize size={18} strokeWidth={2.5} /> : <Maximize size={18} strokeWidth={2.5} />}
        </button>
      </section>

      <div className="max-w-[1700px] mx-auto px-8 md:px-16 pt-24" id="accommodations-list">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-40">
            <div className="border-2 border-black p-10 bg-white shadow-xl reveal-trigger">
              <h2 className="text-[12px] uppercase tracking-[0.5em] font-black text-[#1A1A1A] mb-10 border-b-2 border-black pb-6">
                Location / region
              </h2>
              
              <div className="space-y-6">
                {REGIONS.map((region) => (
                  <label key={region} className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox"
                        checked={selectedRegions.includes(region)}
                        onChange={() => handleRegionToggle(region)}
                        className="peer appearance-none w-6 h-6 border-2 border-black bg-white checked:bg-[#8B5A2B] transition-all cursor-pointer"
                      />
                      <svg 
                        className={`absolute w-4 h-4 text-white pointer-events-none transition-opacity ${selectedRegions.includes(region) ? 'opacity-100' : 'opacity-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[13px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] group-hover:text-[#8B5A2B] transition-colors font-serif">
                      {region}
                    </span>
                  </label>
                ))}
              </div>

              {selectedRegions.length > 0 && (
                <button 
                  onClick={() => setSelectedRegions([])}
                  className="mt-12 text-[10px] uppercase tracking-widest font-black text-[#8B5A2B] border-b border-[#8B5A2B] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-end mb-12 border-b-2 border-black pb-8 reveal-trigger">
              <p className="text-[11px] uppercase tracking-[0.4em] font-black text-[#654321]">
                Showing {filteredLodges.length} Result{filteredLodges.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="space-y-16">
              {filteredLodges.map((lodge) => (
                <article 
                  key={lodge.id}
                  className="group flex flex-col md:flex-row bg-white border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden reveal-trigger"
                >
                  <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden relative">
                    <img 
                      src={lodge.imageUrl} 
                      alt={lodge.name}
                      className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 bg-[#D4AF37] px-4 py-2 shadow-xl z-10">
                      <p className="text-[9px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]">
                        {lodge.region || 'Premium Stay'}
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center bg-[#EFEBE4]">
                    <p className="text-[#8B5A2B] uppercase tracking-[0.4em] text-[10px] font-black mb-4">
                      {lodge.location}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-sans font-black text-[#3B1E14] uppercase mb-8 transition-all duration-700 tracking-tight">
                      {lodge.name}
                    </h3>
                    <p className="text-[#1A1A1A]/90 text-lg font-serif italic leading-relaxed mb-12">
                      "{lodge.description}"
                    </p>
                    
                    <div className="flex justify-between items-center pt-8 border-t border-black/10">
                      <button 
                        onClick={onEnquire}
                        className="px-8 py-4 bg-[#3B1E14] text-white text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#8B5A2B] transition-all shadow-md"
                      >
                        EXPLORE SANCTUARY
                      </button>
                      <div className="w-10 h-10 border-2 border-[#3B1E14] flex items-center justify-center transition-all group-hover:bg-[#8B5A2B] group-hover:border-[#8B5A2B] group-hover:text-white text-[#3B1E14]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              
              {filteredLodges.length === 0 && (
                <div className="py-40 text-center reveal-trigger">
                  <h3 className="text-4xl font-serif text-stone-300 italic mb-8">No sanctuaries found in this region.</h3>
                  <button 
                    onClick={() => setSelectedRegions([])}
                    className="text-[11px] uppercase tracking-[0.6em] font-black text-[#8B5A2B] border-b-2 border-[#8B5A2B] pb-2"
                  >
                    View All Accommodations
                  </button>
                </div>
              )}
            </div>

            <div className="mt-32 pt-24 border-t-2 border-black/5 text-center reveal-trigger">
              <p className="text-2xl md:text-3xl font-serif italic text-[#3B1E14] leading-relaxed">
                Can't find what you're looking for? Our experts can book any lodge in Uganda for you.{" "}
                <button 
                  onClick={onEnquire}
                  className="font-bold text-[#8B5A2B] hover:text-[#1A1A1A] transition-colors underline underline-offset-8 decoration-[#8B5A2B]/30 hover:decoration-[#1A1A1A] cursor-pointer"
                >
                  Contact us today.
                </button>
              </p>
            </div>
          </main>
        </div>
      </div>
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.0); }
        }
        .animate-slow-zoom {
          animation: slowZoom 25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};