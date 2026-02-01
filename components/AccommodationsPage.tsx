import React, { useState, useMemo } from 'react';
import { LODGES } from '../constants.tsx';
import { Lodge } from '../types.ts';
import { ShieldCheck } from 'lucide-react';

const REGIONS = [
  'Entebbe', 'Bwindi', 'Jinja', 'Kabale', 'Kampala', 'Kibale', 
  'Kidepo Valley', 'Lake Mburo', 'Masindi', 'Mbarara', 'Moroto', 
  'Mount Elgon', 'Murchison Falls', 'Mgahinga', 'Queen Elizabeth'
];

interface AccommodationsPageProps {
  onEnquire?: () => void;
}

export const AccommodationsPage: React.FC<AccommodationsPageProps> = ({ onEnquire }) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

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

  return (
    <div className="bg-[#FAF8F3] min-h-screen pt-0 pb-24 selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Hero Header: Full-Screen Landing with Center-Aligned Background and 50% Dark Overlay */}
      <section className="relative h-screen flex items-center px-8 border-b-2 border-black overflow-hidden bg-[#1A1A1A]">
        {/* Background Image Layer: Filling viewport with Cover/Center properties */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/xC8tsQZN/beautiful-scenery-mangal-das-garcas-park-city-belem-brazil.jpg" 
            alt="Breathtaking Ugandan scenery background"
            className="w-full h-full object-cover object-center transition-transform duration-[25000ms] scale-110 animate-slow-zoom"
          />
          {/* REQUESTED: Dark Overlay (Opacity: 50%) for perfect readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-[1700px] mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-8 reveal-trigger">THE SANCTUARIES</p>
            
            {/* Headline: Strictly White */}
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tighter leading-none mb-10 reveal-trigger">
              EXCEPTIONAL <span className="italic font-light">ACCOMMODATIONS.</span>
            </h1>
            
            {/* SIGNATURE WIDE-FORMAT IMAGE CARD: Editorial visual anchor */}
            <div className="my-[30px] w-full aspect-[21/9] md:aspect-[16/6] rounded-[15px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative group bg-[#000] reveal-trigger">
               <img 
                 src="https://i.postimg.cc/5NvrVjHW/bed_with_canopy.jpg" 
                 alt="Luxury canopy bed in a boutique sanctuary - Silent Luxury"
                 className="w-full h-full object-cover transition-transform duration-[12000ms] group-hover:scale-105 opacity-90"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               <div className="absolute bottom-8 left-10 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#D4AF37]">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#D4AF37] mb-1">CURATED ACCESS</p>
                    <p className="text-lg font-serif italic text-white/90">The Interior Landscape of Silence</p>
                  </div>
               </div>
            </div>

            {/* Sub-header / Body: Strictly White */}
            <p className="max-w-3xl text-white text-lg md:text-xl font-normal leading-relaxed tracking-wide reveal-trigger">
              Our curators have hand-selected these boutique sanctuaries for their commitment to authenticity, silent luxury, and impeccable native hospitality. Every stay is a chapter in your Ugandan narrative.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1700px] mx-auto px-8 md:px-16 pt-24" id="accommodations-list">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
          
          {/* Left Column (25%): Sticky Sidebar for Filters */}
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
                    <span className="text-[13px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] group-hover:text-[#8B5A2B] transition-colors">
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

          {/* Right Column (75%): Vertical list of lodge cards */}
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
                  {/* Photo Section */}
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

                  {/* Content Section - Background #EFEBE4 */}
                  <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center bg-[#EFEBE4]">
                    <p className="text-[#8B5A2B] uppercase tracking-[0.4em] text-[10px] font-black mb-4">
                      {lodge.location}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-sans font-semibold text-[#3B1E14] uppercase mb-8 transition-all duration-700 tracking-tight">
                      {lodge.name}
                    </h3>
                    <p className="text-[#1A1A1A]/80 text-lg font-normal leading-relaxed mb-12 italic">
                      "{lodge.description}"
                    </p>
                    
                    <div className="flex justify-between items-center pt-8 border-t border-black/10">
                      <button className="px-8 py-4 bg-[#3B1E14] text-white text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#8B5A2B] transition-all shadow-md">
                        VIEW THIS ACCOMMODATION
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

            {/* Final Call to Action Line */}
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