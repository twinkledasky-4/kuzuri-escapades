
import React from 'react';

export const Expertise: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F5F5DC] px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1700px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column: Heading (Span 5) */}
          <div className="lg:col-span-5 reveal-trigger text-left">
            <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-black mb-6" style={{ opacity: 1 }}>OUR PHILOSOPHY</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-[#3B1E14] uppercase tracking-[0.05em] leading-[1.1] mb-8" style={{ opacity: 1 }}>
              CURATED LOCAL EXPERTISE FOR YOUR <span className="italic font-light">UGANDAN ADVENTURE.</span>
            </h2>
          </div>

          {/* Right Column: Image and Pushed Paragraphs (Span 7) */}
          <div className="lg:col-span-7 reveal-trigger flex flex-col">
            {/* The Safari Jeep Image Container */}
            <div className="relative w-full aspect-[16/10] border-2 border-[#1A1A1A] shadow-3xl overflow-hidden group bg-[#1A1A1A]">
                <img 
                    src="https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg" 
                    alt="Kuzuri Safari Jeep - The vessel for your odyssey"
                    className="w-full h-full object-cover opacity-100 transition-all duration-[12000ms] group-hover:scale-110"
                    style={{ objectPosition: 'center' }}
                />
                
                {/* Floating Info Tag - Solid White Background */}
                <div className="absolute bottom-8 left-8 bg-white p-6 shadow-2xl border border-black/5 z-20">
                    <p className="text-[10px] uppercase tracking-[0.6em] font-black text-[#8B5A2B] mb-1" style={{ opacity: 1 }}>EXPEDITION VESSEL</p>
                    <p className="text-sm font-serif italic text-[#1A1A1A]" style={{ opacity: 1 }}>Custom 4x4 Luxury Land Cruiser</p>
                </div>
                
                {/* Clean, Grounded Linear Darkening */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Paragraph Content - Compressed Margin */}
            <div className="mt-8 space-y-10 max-w-3xl bg-[#1A1412] p-10 md:p-12 border-l-4 border-[#D4AF37] shadow-2xl text-left">
              <div className="space-y-6">
                <p className="text-white text-base font-normal leading-relaxed tracking-wide" style={{ opacity: 1 }}>
                  Uganda is a tapestry of untamed landscapes—from mist-covered rainforests and volcanic peaks to the endless golden savannahs. It is a land so biologically diverse it captivates even the most seasoned global travelers.
                </p>
                
                <p className="text-white text-base font-normal leading-relaxed tracking-wide" style={{ opacity: 1 }}>
                  Here, you will meet Africa’s legends: the Big Five, majestic mountain gorillas, and over 1,000 vibrant bird species. Our primate treks bring you face-to-face with 24 species of monkeys, while night drives reveal the hidden world of bushbabies and elusive nocturnal hunters.
                </p>
              </div>
              
              <div className="pt-10 border-t border-white/10">
                <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed tracking-tight mb-8" style={{ opacity: 1 }}>
                  Whether you are a photography enthusiast, a trekking fan, or a nature lover, we design journeys for everyone.
                </p>
                <button 
                  className="group relative inline-flex items-center gap-6 text-[10px] font-sans font-black uppercase tracking-[0.8em] text-[#D4AF37] transition-all hover:text-white"
                  style={{ opacity: 1 }}
                >
                  <span className="border-b-2 border-[#D4AF37] pb-2 group-hover:border-white transition-all">Begin the Consultation</span>
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#1A1A12] transition-all duration-500 text-xl font-light leading-none pt-1">
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
