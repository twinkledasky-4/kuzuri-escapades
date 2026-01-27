
import React from 'react';

export const Expertise: React.FC = () => {
  return (
    <section className="py-32 md:py-56 bg-[#F5F5DC] px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center">
          {/* Left Column: Text Content */}
          <div className="reveal-trigger">
            {/* Headline: font-semibold, dark brown (#4A3728), all-caps */}
            <h2 className="text-3xl md:text-5xl font-sans font-semibold text-[#4A3728] uppercase tracking-[0.15em] leading-tight mb-12 text-left">
              CURATED LOCAL EXPERTISE FOR YOUR UGANDAN ADVENTURE
            </h2>
            
            <div className="space-y-10 text-left">
              {/* Body Text: font-normal, leading-relaxed */}
              <p className="text-[#1A1A1A] text-lg md:text-xl font-normal leading-relaxed opacity-90">
                Uganda is a tapestry of untamed landscapes—from mist-covered rainforests and volcanic peaks to the endless golden savannahs. It is a land so biologically diverse it captivates even the most seasoned global travelers.
              </p>
              
              <p className="text-[#1A1A1A] text-lg md:text-xl font-normal leading-relaxed opacity-90">
                Here, you will meet Africa’s legends: the Big Five, majestic mountain gorillas, and over 1,000 vibrant bird species. Our primate treks bring you face-to-face with 24 species of monkeys, while night drives reveal the hidden world of bushbabies and elusive nocturnal hunters.
              </p>
              
              <div className="pt-10 border-t border-black/10">
                {/* Final Call: font-normal, leading-relaxed */}
                <p className="text-[#1A1A1A] text-xl md:text-2xl font-normal leading-relaxed tracking-tight mb-12">
                  Whether you are a photography enthusiast, a trekking fan, or a nature lover, we design journeys for everyone. Connect with our local specialists today to begin drafting your bespoke Ugandan chapter.
                </p>
                <button 
                  className="group relative inline-flex items-center gap-4 text-xs font-sans font-black uppercase tracking-[0.5em] text-[#8B5A2B] transition-all hover:text-[#4A3728]"
                >
                  <span className="border-b-2 border-[#8B5A2B] pb-2 group-hover:border-[#4A3728] transition-all font-black">Connect with Specialists</span>
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Balance with Organic Shape Mask */}
          <div className="reveal-trigger hidden md:flex justify-center items-center relative">
            <div className="relative w-full max-w-[550px] aspect-square">
                {/* Decorative background shape */}
                <div className="absolute inset-4 bg-[#8B5A2B]/10 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] rotate-6 scale-110" />
                
                {/* Organic Mask Container */}
                <div 
                    className="relative w-full h-full overflow-hidden shadow-2xl transition-all duration-[2500ms] hover:rotate-1 group bg-white"
                    style={{
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        clipPath: 'path("M452,295.5C433.5,356,380,412.5,316,439.5C252,466.5,177.5,464,117.5,428.5C57.5,393,12,324.5,4.5,257C-3,189.5,27.5,123,80.5,77C133.5,31,209,5.5,279.5,2.5C350,-0.5,415.5,19,451,75.5C486.5,132,492,225.5,452,295.5Z")'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5A2B]/20 to-transparent z-10 pointer-events-none" />
                    <img 
                        src="https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&q=85&w=1200" 
                        alt="Zebra close-up detailing the patterns of the wild"
                        className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[4000ms]"
                    />
                </div>
                
                {/* Caption Floating with refined typography */}
                <div className="absolute -bottom-8 left-0 bg-white p-8 shadow-2xl border border-black/5 reveal-trigger z-20">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#8B5A2B] mb-2">Native Patterns</p>
                    <p className="text-sm font-serif italic text-[#1A1A1A] opacity-70">The living geometry of Lake Mburo</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
