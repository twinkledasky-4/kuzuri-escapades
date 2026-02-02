import React, { useState, useMemo, useEffect } from 'react';
import { cmsDatabase } from '../services/cmsService.ts';
import { Lodge } from '../types.ts';
import { ChevronLeft, X, MapPin, Info, Maximize } from 'lucide-react';

interface AccommodationsPageProps {
  onBack: () => void;
  onEnquire: (context?: string) => void;
}

const REGIONS = [
  'Entebbe', 'Bwindi', 'Jinja', 'Kabale', 'Kampala', 'Kibale', 
  'Kidepo Valley', 'Lake Mburo', 'Masindi', 'Mbarara', 'Moroto', 
  'Mount Elgon', 'Murchison Falls', 'Mgahinga', 'Queen Elizabeth'
];

export const AccommodationsPage: React.FC<AccommodationsPageProps> = ({ onBack, onEnquire }) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [viewedLodge, setViewedLodge] = useState<Lodge | null>(null);
  const [sanctuaries, setSanctuaries] = useState<Lodge[]>([]);

  useEffect(() => {
    // Initial fetch from CMS Service
    setSanctuaries(cmsDatabase.getAll());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredLodges = useMemo(() => {
    if (!selectedRegion) return sanctuaries;
    return sanctuaries.filter(l => l.region === selectedRegion || l.location.includes(selectedRegion));
  }, [selectedRegion, sanctuaries]);

  return (
    <div className="bg-[#FAF8F3] min-h-screen pt-24 selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Navigation - Strategic Placement to clear Navbar */}
      <div className="fixed top-24 left-6 md:left-12 z-[100]">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-black text-white bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 border border-white/10 px-8 py-4 shadow-2xl active:scale-95"
        >
          <ChevronLeft size={16} />
          Back to Home
        </button>
      </div>

      <header className="relative h-[60vh] flex items-center justify-center bg-[#1A1A1A] overflow-hidden border-b-2 border-black">
        <div className="signature-overlay">BOUTIQUE COLLECTION</div>
        <img 
          src="https://i.postimg.cc/Jn163QxT/thatch-roof-house.jpg" 
          alt="Luxury safari lodge overlooking the river" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#D4AF37] uppercase tracking-[1.2em] text-[10px] font-bold mb-8">CURATED SANCTUARIES</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#F5F5DC] tracking-tighter leading-none">
            Boutique <span className="italic font-light">Lodging.</span>
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Regions Filter Bar */}
        <div className="flex flex-col items-center mb-24">
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#8B5A2B] mb-8">Explore by Region</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedRegion(null)}
              className={`px-6 py-3 text-[10px] uppercase tracking-widest font-black border-2 transition-all ${
                !selectedRegion 
                  ? 'bg-[#1A1A1A] text-[#D4AF37] border-black shadow-xl' 
                  : 'bg-transparent text-[#1A1A1A] border-black/10 hover:border-black'
              }`}
            >
              All Sanctuaries
            </button>
            {REGIONS.map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 py-3 text-[10px] uppercase tracking-widest font-black border-2 transition-all ${
                  selectedRegion === region 
                    ? 'bg-[#1A1A1A] text-[#D4AF37] border-black shadow-xl' 
                    : 'bg-transparent text-[#1A1A1A] border-black/10 hover:border-black'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredLodges.map((lodge) => (
            <article 
              key={lodge.id}
              className="bg-white border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col group relative"
            >
              <div className="aspect-[4/3] overflow-hidden relative border-b border-black/5">
                <div className="signature-overlay">{lodge.name}</div>
                <img 
                  src={lodge.imageUrl} 
                  alt={lodge.name} 
                  className="w-full h-full object-cover transition-transform duration-[12s] group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/90 text-[#D4AF37] py-2 px-4 border border-[#D4AF37]/30">
                  <p className="text-[8px] uppercase tracking-[0.4em] font-black">{lodge.region || 'Uganda'}</p>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-[1px] bg-[#D4AF37]" />
                   <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-black">{lodge.location}</p>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-6 tracking-tight group-hover:text-[#8B5A2B] transition-colors leading-tight">
                  {lodge.name}
                </h3>
                
                <p className="text-[#1A1A1A]/70 text-base font-normal leading-relaxed mb-10 flex-grow italic">
                  "{lodge.description}"
                </p>
                
                <div className="flex justify-between items-center border-t border-black/5 pt-8 mt-auto">
                  <button 
                    onClick={() => setViewedLodge(lodge)}
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-black border-b-2 border-[#D4AF37] pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all"
                  >
                    <Maximize size={12} />
                    View Details
                  </button>
                  <button 
                    onClick={() => onEnquire(`Sanctuary Inquiry: ${lodge.name}`)}
                    className="text-[10px] uppercase tracking-[0.4em] font-black border-b-2 border-[#1A1A1A] pb-1 hover:text-[#8B5A2B] hover:border-[#8B5A2B] transition-all"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Lodge Detail View Overlay */}
      {viewedLodge && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-sm" 
            onClick={() => setViewedLodge(null)}
          />
          <div className="relative w-full max-w-6xl bg-[#FAF8F3] shadow-2xl overflow-hidden animate-fade-in border border-white/10 flex flex-col md:flex-row max-h-[90vh]">
            <button 
              onClick={() => setViewedLodge(null)}
              className="absolute top-6 right-6 z-40 p-4 bg-black text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-xl"
            >
              <X size={24} strokeWidth={3} />
            </button>
            
            <div className="w-full md:w-1/2 relative bg-[#1A1A1A] shrink-0">
              <div className="signature-overlay">IMMERSIVE VIEW</div>
              <img src={viewedLodge.imageUrl} alt={viewedLodge.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="w-full md:w-1/2 p-10 md:p-20 overflow-y-auto flex flex-col relative bg-[#FAF8F3]">
              {/* TORN PAPER TRANSITION */}
              <div className="hidden md:block absolute top-0 left-0 bottom-0 w-12 -ml-12 z-30 pointer-events-none">
                 <svg className="h-full w-full" viewBox="0 0 40 1000" preserveAspectRatio="none" fill="#FAF8F3">
                    <path d="M40 0 L35 20 L38 45 L32 70 L39 95 L34 120 L37 150 L31 180 L39 210 L35 240 L38 275 L33 305 L40 330 L36 360 L39 390 L34 425 L37 455 L32 490 L39 520 L34 550 L38 580 L33 615 L39 645 L35 675 L38 710 L32 740 L40 770 L35 800 L38 835 L33 865 L40 895 L36 925 L39 960 L34 1000 H40 Z" />
                 </svg>
              </div>

              {/* Header Block */}
              <div className="space-y-4 mb-2 text-left relative z-10">
                <p className="text-[#8B5A2B] uppercase tracking-[0.8em] text-[10px] font-black">SANCTUARY PROFILE</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight uppercase tracking-tighter">
                  {viewedLodge.name}
                </h2>
              </div>

              <div className="mb-16 mt-[140px] bg-white p-10 shadow-xl border border-black/5 relative z-10 text-left">
                <p className="text-[#1A1A1A] text-base font-normal leading-relaxed font-sans">
                  {viewedLodge.description}
                </p>
              </div>

              <div className="space-y-6 border-l-2 border-[#D4AF37] pl-8 mb-16 text-left relative z-10">
                <div className="flex items-center gap-4">
                  <MapPin size={18} className="text-[#D4AF37]" />
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]">{viewedLodge.location}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Info size={18} className="text-[#D4AF37]" />
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]">Region: {viewedLodge.region || 'Protected Wilderness'}</p>
                </div>
              </div>

              {viewedLodge.gallery && viewedLodge.gallery.length > 0 && (
                <div className="pt-10 space-y-8 border-t border-black/5 mb-16 text-left relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#8B5A2B]">Native Fragments</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {viewedLodge.gallery.map((img, i) => (
                      <div key={i} className="space-y-3">
                        <div className="aspect-[3/2] overflow-hidden border border-black/5 shadow-md">
                          <img src={img.url} alt={img.label} className="w-full h-full object-cover transition-transform hover:scale-105 duration-1000" />
                        </div>
                        <p className="text-[9px] uppercase tracking-widest font-black text-center opacity-60">{img.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-10 relative z-10">
                <button 
                  onClick={() => onEnquire(`Detailed Consultation: ${viewedLodge.name}`)}
                  className="block w-full py-6 bg-[#1A1A1A] text-[#D4AF37] text-center text-[10px] uppercase tracking-[1em] font-black hover:bg-[#8B5A2B] hover:text-white transition-all duration-700 shadow-3xl border border-[#D4AF37]/20"
                >
                  START THE CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};