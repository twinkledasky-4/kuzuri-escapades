import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface ExpertiseProps {
  onEnquire?: (context?: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onEnquire }) => {
  return (
    <section id="combined-safaris" className="py-16 md:py-24 bg-[#F5F5DC] px-6 overflow-hidden scroll-mt-[120px]">
      <div className="container mx-auto max-w-[1700px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 items-start">
          
          {/* Left Column: Narrative (Span 5) */}
          <div className="lg:col-span-5 reveal-trigger text-left flex flex-col">
            <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-black mb-8" style={{ opacity: 1 }}>OUR PHILOSOPHY</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-[#3B1E14] uppercase tracking-[0.05em] leading-[1.1] mb-12" style={{ opacity: 1 }}>
              CURATED LOCAL EXPERTISE FOR YOUR <span className="italic font-light">UGANDAN ADVENTURE.</span>
            </h2>

            {/* NATIVE STEWARDSHIP GUARANTEE BLOCK */}
            <div className="my-[40px] w-full bg-[#FAF8F3] border-l-2 border-[#D4AF37] p-8 md:p-10 shadow-sm reveal-trigger">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck size={16} />
                </div>
                <p className="text-[9px] uppercase tracking-[0.4em] font-black text-[#8B5A2B]">THE NATIVE GUARANTEE</p>
              </div>
              <p className="text-[15px] font-serif italic text-[#1A1A1A] leading-relaxed">
                "We don't just guide; we protect the rhythm of your journey. Every expedition is 100% native-led, ensuring the deepest connections to the land and its secrets."
              </p>
              <div className="mt-8 pt-8 border-t border-black/5 flex items-center gap-8">
                 <div className="flex flex-col">
                   <span className="text-[12px] font-black uppercase text-[#1A1A1A] tracking-widest">100%</span>
                   <span className="text-[8px] uppercase text-[#8B5A2B] font-bold">Native Owned</span>
                 </div>
                 <div className="w-[1px] h-10 bg-black/10" />
                 <div className="flex flex-col">
                   <span className="text-[12px] font-black uppercase text-[#1A1A1A] tracking-widest">10Y+</span>
                   <span className="text-[8px] uppercase text-[#8B5A2B] font-bold">Field Mastery</span>
                 </div>
              </div>
            </div>

            {/* SIGNATURE WIDE-FORMAT IMAGE CARD */}
            <div className="my-[40px] w-full aspect-[21/9] md:aspect-[16/7] rounded-[15px] overflow-hidden border border-[#1A1A1A]/5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] relative group bg-[#1A1A1A] reveal-trigger">
               <div className="signature-overlay">WILDLIFE CONNECTION</div>
               <img 
                 src="https://i.postimg.cc/dtR4By1q/Lake_Mburo_National_Park_750x450_1_750x450.jpg" 
                 alt="Expert native guide facilitating a close wildlife encounter in Lake Mburo"
                 className="w-full h-full object-cover transition-transform duration-[15000ms] group-hover:scale-105 opacity-100"
                 style={{ objectPosition: 'left' }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
               <div className="absolute bottom-6 left-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#D4AF37]">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.4em] font-black text-[#D4AF37] mb-0.5">FIELD MASTERY</p>
                    <p className="text-sm font-serif italic text-white/90">The Unspoken Native Connection</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 reveal-trigger flex flex-col">
            <div className="relative w-full aspect-[16/10] border-2 border-[#D4AF37] shadow-3xl overflow-hidden group bg-[#1A1A1A]">
                <div className="signature-overlay">EXPERT STEWARDSHIP</div>
                <img 
                    src="https://i.postimg.cc/FsbDZLR0/Top_8_Safari_Activities_in_Uganda_750x450.jpg" 
                    alt="Expertly Guided Safari Experience - Native Stewardship"
                    className="w-full h-full object-cover opacity-100 transition-all duration-[12000ms] group-hover:scale-110"
                    style={{ objectPosition: 'center' }}
                />
                <div className="absolute bottom-8 left-8 bg-white p-6 shadow-2xl border border-black/5 z-20">
                    <p className="text-[10px] uppercase tracking-[0.6em] font-black text-[#8B5A2B] mb-1">EXPERTLY GUIDED</p>
                    <p className="text-sm font-serif italic text-[#1A1A1A] uppercase tracking-widest font-bold">SIGNATURE Professional Stewardship</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            <div className="mt-16 space-y-12 max-w-3xl bg-[#1A1412] p-10 md:p-16 border-l-4 border-[#D4AF37] shadow-2xl text-left relative z-10">
              <div className="space-y-8">
                <p className="text-white text-lg font-normal leading-relaxed tracking-wide">
                  Uganda is a tapestry of untamed landscapes—from mist-covered rainforests and volcanic peaks to the endless golden savannahs. It is a land so biologically diverse it captivates even the most seasoned global travelers.
                </p>
                <p className="text-white text-lg font-normal leading-relaxed tracking-wide">
                  Here, you will meet Africa’s legends: the Big Five, majestic mountain gorillas, and over 1,000 vibrant bird species. Our primate treks bring you face-to-face with 24 species of monkeys, while night drives reveal the hidden world of bushbabies and elusive nocturnal hunters.
                </p>
              </div>
              
              <div className="pt-12 border-t border-white/10">
                <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed tracking-tight mb-10">
                  Whether you are a photography enthusiast, a trekking fan, or a nature lover, we design journeys for everyone.
                </p>
                
                <button 
                  onClick={() => onEnquire?.('Philosophy Consultation')}
                  className="group relative inline-flex items-center gap-6 px-12 py-6 border-2 border-[#D4AF37] bg-transparent text-[11px] font-sans font-black uppercase tracking-[0.8em] text-[#D4AF37] transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#1A1A12] focus:outline-none no-underline shadow-2xl cursor-pointer"
                  aria-label="Begin Consultation via CRM Gateway"
                >
                  <span>Begin the Consultation</span>
                  <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center group-hover:border-[#1A1A12] transition-all duration-500 text-xl font-light leading-none pt-1">
                    &gt;
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};