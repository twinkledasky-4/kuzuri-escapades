
import React from 'react';

export const Ticker: React.FC = () => {
  const promoText = "KICK-START YOUR YEAR WITH OUR EXCITING JINJA STAYCATION HAPPENING ON 10TH — 12TH APRIL 2026!";
  
  // Create a looped string for a seamless infinite marquee effect
  const content = Array(8).fill(promoText).join(" • ");

  return (
    <div className="bg-[#FAF8F3] py-1.5 border-y border-[#D4AF37]/20 overflow-hidden select-none relative z-30 m-0 block">
      <div className="whitespace-nowrap flex animate-ticker-scroll">
        <span className="text-[#D4AF37] text-[12px] md:text-[14px] font-bold tracking-[0.5em] uppercase px-4 flex items-center">
          {content}
        </span>
        <span className="text-[#D4AF37] text-[12px] md:text-[14px] font-bold tracking-[0.5em] uppercase px-4 flex items-center">
          {content}
        </span>
      </div>
      <style>{`
        @keyframes tickerScroll {
          /* Infinite crawl from Right to Left */
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-50%); 
          }
        }
        .animate-ticker-scroll {
          /* 120s for a slow, majestic, infinite crawl */
          animation: tickerScroll 120s linear infinite;
        }
        /* Allow interaction to pause if needed */
        .animate-ticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
