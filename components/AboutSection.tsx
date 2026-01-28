
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-kuzuri" className="py-40 md:py-80 bg-[#1A1412] px-6 scroll-mt-24 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-[1700px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Visual Column: The Curator's View */}
          <div className="reveal-trigger relative group">
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-[#D4AF37]/30 shadow-3xl">
              <img 
                src="https://i.postimg.cc/bYRVDkb8/ugandans.jpg" 
                alt="Native stewards of the Pearl of Africa"
                className="w-full h-full object-cover transition-all duration-[5000ms] scale-100 group-hover:scale-110"
              />
              {/* Grounded Linear Overlay for Contrast - No Haze */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-transparent to-transparent opacity-70" />
            </div>
            
            {/* Absolute Decorative Tag: Established Year */}
            <div className="absolute -bottom-10 -right-10 bg-[#D4AF37] p-12 hidden xl:block shadow-2xl">
              <p className="text-[#1A1412] text-[10px] uppercase tracking-[0.5em] font-black mb-2">ESTABLISHED</p>
              <p className="text-[#1A1412] font-serif text-4xl font-bold">2014</p>
            </div>
          </div>

          {/* Narrative Column: Brand Story */}
          <div className="reveal-trigger space-y-12">
            <div>
              <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-bold mb-8">OUR LEGACY</p>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#D4AF37] leading-[1.1] tracking-tighter mb-10">
                NATIVE CURATORS. <br /><span className="italic font-light">UNRIVALED PERSPECTIVES.</span>
              </h2>
              <div className="w-24 h-[1px] bg-[#D4AF37] opacity-60" />
            </div>

            <div className="space-y-10">
              {/* Pure White Body Text - Opacity 1 (No Fog) */}
              <p className="text-[#FFFFFF] text-xl md:text-3xl font-normal leading-relaxed tracking-wide opacity-100 font-sans">
                Kuzuri Escapades was born from a singular vision: to bridge the gap between raw, untamed wilderness and refined, soulful elegance. We do not just show you the Pearl of Africa; we invite you to breathe it.
              </p>
              
              <p className="text-[#FFFFFF] text-lg md:text-xl font-normal leading-[1.8] tracking-wide opacity-100 font-sans">
                From our headquarters on the prestigious Wavamunno Road, we craft journeys that are as profound as the roar of a lion and as silent as the mist over Bwindi. We are not just guides; we are the guardians of your Ugandan legacy.
              </p>

              <div className="pt-6">
                <p className="text-[#FFFFFF] text-lg md:text-xl font-light italic leading-relaxed tracking-wide opacity-100 font-serif border-l-2 border-[#D4AF37] pl-8">
                  "True luxury is found in the moments where time stands still, and the heart finds its rhythm in the wild."
                </p>
              </div>
            </div>

            {/* High-Impact Stat Grid: Credibility */}
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[#D4AF37] font-serif text-5xl font-bold mb-2">10+</span>
                <span className="text-[#FFFFFF] text-[10px] uppercase tracking-[0.4em] font-black opacity-100">Years of Stewardship</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#D4AF37] font-serif text-5xl font-bold mb-2">100%</span>
                <span className="text-[#FFFFFF] text-[10px] uppercase tracking-[0.4em] font-black opacity-100">Native Owned</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#D4AF37] font-serif text-5xl font-bold mb-2">∞</span>
                <span className="text-[#FFFFFF] text-[10px] uppercase tracking-[0.4em] font-black opacity-100">Exclusive Access</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
