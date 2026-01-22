
import React from 'react';
import { Destination } from '../types.ts';

interface ExperienceCardProps {
  destination: Destination;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ destination, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <article className={`flex flex-col mb-32 md:mb-64 reveal-trigger ${isEven ? 'md:pr-20' : 'md:pl-20 md:mt-48'}`} aria-labelledby={`exp-title-${destination.id}`}>
      <div className="relative mb-14 overflow-hidden group shadow-2xl shadow-stone-200/40 transition-shadow duration-[300ms] hover:shadow-stone-300/60">
        <div className="reveal-image aspect-[16/9] overflow-hidden bg-stone-50">
          <img 
            src={destination.images[0]} 
            srcSet={`
              ${destination.images[0]}?w=400 400w,
              ${destination.images[0]}?w=800 800w,
              ${destination.images[0]}?w=1200 1200w,
              ${destination.images[0]}?w=1600 1600w,
              ${destination.images[0]}?w=2400 2400w
            `}
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            "
            alt={`Breathtaking view of ${destination.name} - ${destination.tagline}.`}
            loading="lazy"
            decoding="async"
            className="destination-card-image"
          />
        </div>
        <div className="absolute top-8 right-8 mix-blend-difference text-white/50 text-[9px] uppercase tracking-[0.4em] font-light" aria-hidden="true">
          00{index + 1} / Territory
        </div>
      </div>
      
      <div className="max-w-md px-2">
        {destination.tagline && (
          <p className="text-[#d4af37] uppercase tracking-[0.5em] text-[9px] font-semibold mb-6">
            {destination.tagline}
          </p>
        )}
        <h3 id={`exp-title-${destination.id}`} className="text-4xl md:text-5xl font-serif text-[#002d04] mb-8 leading-tight tracking-tight">
          {destination.name}
        </h3>
        <p className="text-stone-500 text-base font-light leading-relaxed mb-10 tracking-wide">
          {destination.description}
        </p>
        <div className="flex flex-col gap-4 border-l-2 border-stone-100 pl-8 transition-colors duration-[300ms] group-hover:border-[#d4af37]/20">
          <p className="sr-only">Key Highlights:</p>
          {destination.highlights.map((high, idx) => (
            <span key={idx} className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium">
              {high}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
