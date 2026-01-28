
import React from 'react';

export const Expertise: React.FC = () => {
  return (
    <section className="py-32 md:py-56 bg-[#F5F5DC] px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center">
          {/* Left Column: Text Content on solid Beige background */}
          <div className="reveal-trigger">
            <h2 className="text-3xl md:text-5xl font-sans font-semibold text-[#4A3728] uppercase tracking-[0.15em] leading-tight mb-12 text-left" style={{ opacity: 1 }}>
              CURATED LOCAL EXPERTISE FOR YOUR UGANDAN ADVENTURE
            </h2>
            
            <div className="space-y-10 text-left">
              <p className="text-[#1A1A1A] text-lg md:text-xl font-normal leading-relaxed" style={{ opacity: 1 }}>
                Uganda is a tapestry of untamed landscapes—from mist-covered rainforests and volcanic peaks to the endless golden savannahs. It is a land so biologically diverse it captivates even the most seasoned global travelers.
              </p>
              
              <p className="text-[#1A1A1A] text-lg md:text-xl font-normal leading-relaxed" style={{ opacity: 1 }}>
                Here, you will meet Africa’s legends: the Big Five, majestic mountain gorillas, and over 1,000 vibrant bird species. Our primate treks bring you face-to-face with 24 species of monkeys, while night drives reveal the hidden world of bushbabies and elusive nocturnal hunters.
              </p>
              
              <div className="pt-10 border-t border-black/10">
                <p className="text-[#1A1A1A] text-xl md:text-2xl font-normal leading-relaxed tracking-tight mb-12" style={{ opacity: 1 }}>
                  Whether you are a photography enthusiast, a trekking fan, or a nature lover, we design journeys for everyone. Connect with our local specialists today to begin drafting your bespoke Ugandan chapter.
                </p>
                <button 
                  className="group relative inline-flex items-center gap-4 text-xs font-sans font-black uppercase tracking-[0.5em] text-[#8B5A2B] transition-all hover:text-[#4A3728]"
                  style={{ opacity: 1 }}
                >
                  <span className="border-b-2 border-[#8B5A2B] pb-2 group-hover:border-[#4A3728] transition-all font-black">Connect with Specialists</span>
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Sharp Rectangular Layout */}
          <div className="reveal-trigger hidden md:flex justify-center items-center relative">
            <div className="relative w-full max-w-[550px] aspect-[4/5] border-2 border-[#1A1A1A] shadow-2xl overflow-hidden group">
                <img 
                    src="https://i.postimg.cc/MKKwZ78b/group-zebras-africa.jpg" 
                    alt="Group of zebras in Africa - The living geometry of the wild"
                    className="w-full h-full object-cover opacity-100 transition-all duration-[8000ms] group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                />
                
                {/* Floating Info Tag - Solid White Background */}
                <div className="absolute bottom-8 left-8 bg-white p-8 shadow-2xl border border-black/5 z-20">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#8B5A2B] mb-2" style={{ opacity: 1 }}>Native Patterns</p>
                    <p className="text-sm font-serif italic text-[#1A1A1A]" style={{ opacity: 1 }}>The living geometry of Lake Mburo</p>
                </div>
                
                {/* Clean, Grounded Linear Darkening for Depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
