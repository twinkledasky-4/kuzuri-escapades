
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-kuzuri" className="pt-0 pb-12 md:pb-16 bg-[#1A1412] px-6 scroll-mt-24 border-b border-white/5 overflow-hidden m-0 block">
      <div className="container mx-auto max-w-[1700px] p-0">
        <div className="flex flex-col items-center">
          
          {/* Narrative Column: Centered Editorial Header - pt-0 for flush alignment with Ticker */}
          <div className="reveal-trigger w-full text-center pt-0 mb-12">
            <div className="max-w-5xl mx-auto">
              <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-bold mb-6">OUR LEGACY</p>
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-[#D4AF37] leading-[1.05] tracking-tighter mb-8">
                NATIVE CURATORS. <br />
                <span className="italic font-light block mt-2 text-white opacity-90">UNRIVALED PERSPECTIVES.</span>
              </h2>
              
              {/* Signature Story Text - Centered and Styled as Hero Paragraph */}
              <p className="text-[#FFFFFF] text-lg md:text-xl font-normal leading-[1.8] tracking-wide opacity-95 font-sans max-w-3xl mx-auto mb-8">
                Welcome to Kuzuri Escapades, your gateway to unforgettable adventures across Uganda and beyond! We are passionate about creating immersive travel experiences that connect you with the Pearl of Africa—its breathtaking landscapes, vibrant cultures, and extraordinary wildlife. Whether you're exploring our curated trips, planning a private safari, or seeking a relaxing getaway, we are committed to providing safe, authentic, and inspiring journeys.
              </p>

              <div className="w-24 h-[1px] bg-[#D4AF37] opacity-60 mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
            {/* Visual Column */}
            <div className="reveal-trigger relative group">
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[#D4AF37]/30 shadow-3xl">
                <img 
                  src="https://i.postimg.cc/bYRVDkb8/ugandans.jpg" 
                  alt="Native stewards of the Pearl of Africa"
                  className="w-full h-full object-cover transition-all duration-[5000ms] scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-transparent to-transparent opacity-70" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] p-10 hidden xl:block shadow-2xl">
                <p className="text-[#1A1212] text-[10px] uppercase tracking-[0.5em] font-black mb-1">ESTABLISHED</p>
                <p className="text-[#1A1212] font-serif text-3xl font-bold">2018</p>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="reveal-trigger space-y-10 text-left">
              <div className="space-y-6">
                <p className="text-[#FFFFFF] text-lg font-light leading-relaxed tracking-wide opacity-100 font-sans italic border-l-2 border-[#D4AF37] pl-8 mb-8">
                  "True luxury is found in the moments where time stands still, and the heart finds its rhythm in the wild."
                </p>

                <p className="text-[#FFFFFF] text-base font-normal leading-relaxed tracking-wide opacity-90 font-sans">
                  Kuzuri Escapades was born from a singular vision: to bridge the gap between raw, untamed wilderness and refined, soulful elegance. We do not just show you the Pearl of Africa; we invite you to breathe it.
                </p>
                
                <p className="text-[#FFFFFF] text-base font-normal leading-relaxed tracking-wide opacity-90 font-sans">
                  From our headquarters at Ham Towers Wandegeya, Room Number H:12, P.O. BOX 202305, Kampala, we craft journeys that are as profound as the roar of a lion and as silent as the mist over Bwindi. We are not just guides; we are the guardians of your Ugandan legacy.
                </p>
              </div>

              {/* High-Impact Stat Grid */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] font-serif text-4xl font-bold mb-1">7+</span>
                  <span className="text-[#FFFFFF] text-[10px] uppercase tracking-[0.4em] font-black opacity-100">Years of Stewardship</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] font-serif text-4xl font-bold mb-1">100%</span>
                  <span className="text-[#FFFFFF] text-[10px] uppercase tracking-[0.4em] font-black opacity-100">Native Owned</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] font-serif text-4xl font-bold mb-1">∞</span>
                  <span className="text-[#FFFFFF] text-[10px] uppercase tracking-[0.4em] font-black opacity-100">Exclusive Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
