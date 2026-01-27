
import React, { useState, useMemo } from 'react';
import { LODGES } from '../constants.tsx';
import { Lodge } from '../types.ts';

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
    <div className="bg-[#FAF8F3] min-h-screen pt-32 pb-24 selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Hero Header */}
      <section className="bg-[#1A1A1A] py-32 md:py-48 px-8 border-b-2 border-black">
        <div className="max-w-[1700px] mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-bold mb-8">THE SANCTUARIES</p>
          <h1 className="text-5xl md:text-9xl font-serif font-bold text-white tracking-tighter leading-none mb-12">
            Exceptional <span className="italic font-light">Accommodations.</span>
          </h1>
          <p className="max-w-3xl text-white/60 text-xl font-light leading-relaxed">
            Our curators have hand-selected these boutique lodges and luxury campsites for their commitment to authenticity, silent luxury, and impeccable native hospitality.
          </p>
        </div>
      </section>

      <div className="max-w-[1700px] mx-auto px-8 md:px-16 pt-20">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
          
          {/* Left Column (25%): Sticky Sidebar for Filters */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-40">
            <div className="border-2 border-black p-10 bg-white shadow-xl">
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
            <div className="flex justify-between items-end mb-12 border-b-2 border-black pb-8">
              <p className="text-[11px] uppercase tracking-[0.4em] font-black text-[#654321]">
                Showing {filteredLodges.length} Result{filteredLodges.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="space-y-16">
              {filteredLodges.map((lodge) => (
                <article 
                  key={lodge.id}
                  className="group flex flex-col md:flex-row bg-white border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden"
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
                    {/* Title: Dark Brown, All-Caps, Semi-Bold */}
                    <h3 className="text-3xl md:text-4xl font-sans font-semibold text-[#3B1E14] uppercase mb-8 transition-all duration-700 tracking-tight">
                      {lodge.name}
                    </h3>
                    {/* Description: Clean, normal-weight, leading-relaxed */}
                    <p className="text-[#1A1A1A]/80 text-lg font-normal leading-relaxed mb-12 italic">
                      "{lodge.description}"
                    </p>
                    
                    <div className="flex justify-between items-center pt-8 border-t border-black/10">
                      {/* Button: Rectangular, dark brown background, white text */}
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
                <div className="py-40 text-center">
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
    </div>
  );
};
