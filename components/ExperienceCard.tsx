
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
        <div className="reveal-image aspect-[4/5] overflow-hidden">
          <img 
            src={destination.images[0]} 
            alt={`A breathtaking view of ${destination.name}, captured in authentic natural lighting to showcase its biodiversity.`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 grayscale brightness-90 hover:grayscale-0 hover:brightness-100"
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
