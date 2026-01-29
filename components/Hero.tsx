
import React from 'react';

interface HeroProps {
  onStartPlanning: () => void;
  minimal?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanning, minimal = false }) => {
  const staticContent = {
    subtitle: 'Signature Private Experiences',
    title: 'Safari in <span class="italic text-[#D4AF37]">Uganda</span>',
    description: 'From fascinating wildlife to vibrant urban centers, from tranquil lake shores to lush rainforests, Uganda is a land of incredible diversity that will inspire you to explore it all! Its breathtaking landscapes and rich cultural heritage have inspired countless tales of adventure and discovery.',
    imageUrl: 'https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg'
  };

  return (
    <section className="hero-section h-screen relative overflow-hidden bg-[#1A1A1A]" aria-labelledby="hero-title">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={staticContent.imageUrl}
          alt="Safari Jeep and elephants in the Ugandan wilderness"
          className="w-full h-full object-cover opacity-100 block"
          loading="eager"
        />
      </div>
      
      {/* Brand Overlay - Heavy grounding for left-aligned content area */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent z-[1]" />
      
      {/* Content Layout - Strictly constrained to the Left Third (Cols 1-4 of 12) */}
      <div className="relative z-10 h-full w-full max-w-[1700px] mx-auto grid grid-cols-12 px-6 md:px-20 lg:px-24">
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-start text-left py-20 animate-fade-in-up">
          {/* Tagline */}
          <p className="text-[#D4AF37] uppercase tracking-[0.8em] text-[10px] md:text-[11px] font-black mb-6">
            {staticContent.subtitle}
          </p>

          {/* Main Heading: Constrained to the left third (col-span-4) */}
          <h1 
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white uppercase tracking-[0.02em] leading-[1.1] mb-8"
            dangerouslySetInnerHTML={{ __html: staticContent.title }}
          />
          
          {/* Description: Constrained width for optimal legibility within the left third */}
          <p className="text-white text-base md:text-lg font-normal leading-relaxed tracking-wide mb-10 opacity-95 max-w-md">
            {staticContent.description}
          </p>

          {/* CTA Button */}
          {!minimal && (
            <button 
              onClick={onStartPlanning}
              className="bg-[#D4AF37] text-[#000000] px-12 py-5 text-[11px] font-bold tracking-[0.6em] uppercase shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:bg-white hover:text-black transition-all duration-500 transform active:scale-95 rounded-[5px]"
            >
              BOOK NOW
            </button>
          )}
        </div>
        
        {/* Remaining 8/12 columns left empty to maintain focus on the Left Third and avoid obscuring key background elements */}
      </div>
    </section>
  );
};
