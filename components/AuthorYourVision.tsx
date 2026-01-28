import React from 'react';

interface AuthorYourVisionProps {
  onShareVision: () => void;
}

export const AuthorYourVision: React.FC<AuthorYourVisionProps> = ({ onShareVision }) => {
  return (
    <section className="bg-[#F5F5DC] py-24 md:py-48 px-6 overflow-hidden" aria-labelledby="author-title">
      <div className="container mx-auto">
        <div className="reveal-trigger flex justify-center">
          {/* Centered Editorial Box with Thin Safari Gold Frame */}
          <div 
            className="w-full max-w-[900px] h-auto border border-[#D4AF37] bg-white shadow-2xl transition-all duration-700 hover:shadow-3xl relative"
            style={{ padding: '32px' }}
          >
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold">THE FINAL CHAPTER</p>
                {/* Heading: High-contrast serif in Dark Espresso (#3B1E14) */}
                <h2 id="author-title" className="text-4xl md:text-6xl font-serif font-bold text-[#3B1E14] tracking-tighter uppercase leading-tight">
                  AUTHOR YOUR <span className="italic font-light">VISION</span>
                </h2>
              </div>

              <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto" />

              {/* Body Text: Rich Charcoal (#1A1A1A) for maximum sharpness on white background */}
              <p className="text-[#1A1A1A] text-lg md:text-2xl font-normal leading-[1.6] tracking-wide max-w-2xl mx-auto opacity-100 font-sans">
                Your journey is not just a holiday; it is a <span className="text-[#8B5A2B] font-bold">masterpiece</span> waiting to be written. At Kuzuri Escapades, we don’t just provide tours—we provide the ink and the parchment for your greatest adventure. Every trail, every sunset, and every heartbeat in the wild is a sentence in your personal story. Tell us the vision you see, and we will <span className="text-[#8B5A2B] font-bold">manifest</span> the reality you deserve. The <span className="text-[#8B5A2B] font-bold">Pearl of Africa</span> is calling. How will your chapter begin?
              </p>

              <div className="pt-8">
                {/* Button: Wide, Dark Brown (#3B1E14) background, White text (#FFFFFF) */}
                <button 
                  onClick={onShareVision}
                  className="w-full md:w-auto px-16 py-7 bg-[#3B1E14] text-[#FFFFFF] text-[11px] uppercase tracking-[0.8em] font-black hover:bg-[#8B5A2B] transition-all duration-500 shadow-xl hover:scale-105 active:scale-95 border-none"
                >
                  REQUEST A MANIFESTO
                </button>
              </div>
              
              <p className="text-[9px] text-[#1A1A1A]/40 font-bold uppercase tracking-[0.4em] mt-12">
                Curated by Native Stewards since 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};