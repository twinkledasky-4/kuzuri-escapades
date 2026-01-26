import React from 'react';
import { Destination } from '../types.ts';

interface ExperienceCardProps {
  destination: Destination;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ destination, index }) => {
  return (
    <article 
      className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden group border-b border-[#1A1A1A]/20" 
      aria-labelledby={`dest-title-${destination.id}`}
    >
      {/* Immersive Background */}
      <div className="absolute inset-0">
        <img 
          src={destination.images[0]} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-[15000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Floating Content */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-24">
        <div className="max-w-4xl space-y-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">
          <p className="text-[#D4AF37] uppercase tracking-[1.2em] text-[10px] md:text-xs font-black">
            TERRITORY 0{index + 1}
          </p>
          <h3 
            id={`dest-title-${destination.id}`} 
            className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tighter leading-none"
          >
            {destination.name}
          </h3>
          <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed max-w-2xl tracking-wide">
            {destination.description}
          </p>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-10">
            {destination.highlights.map((h, i) => (
              <span key={i} className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#D4AF37] font-black border-b border-[#D4AF37]/30 pb-2">
                {h}
              </span>
            ))}
          </div>
          
          <div className="pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
             <button className="text-white text-xs uppercase tracking-[0.8em] font-black flex items-center gap-6 border-b border-white/40 pb-4 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
               BEGIN THE NARRATIVE
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </button>
          </div>
        </div>
      </div>
    </article>
  );
};
