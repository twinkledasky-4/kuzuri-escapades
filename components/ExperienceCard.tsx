import React from 'react';
import { Destination } from '../types.ts';

interface ExperienceCardProps {
  destination: Destination;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ destination, index }) => {
  const isEven = index % 2 === 0;

  const getAltText = () => {
    if (destination.id === 'murchison') return "Murchison Falls National Park safari - Wildlife viewing in Uganda's largest park";
    if (destination.id === 'bwindi') return "Bwindi Impenetrable Forest mountain gorilla trekking experience";
    if (destination.id === 'queen-elizabeth') return "Elephant herd bathing in Kazinga Channel, Queen Elizabeth National Park, Uganda";
    return `Breathtaking view of ${destination.name} - ${destination.tagline}.`;
  };
  
  return (
    <article className={`flex flex-col mb-32 md:mb-64 reveal-trigger ${isEven ? 'md:pr-20' : 'md:pl-20 md:mt-48'}`} aria-labelledby={`exp-title-${destination.id}`}>
      <div className="relative mb-14 overflow-hidden group shadow-2xl shadow-stone-300/40 transition-shadow duration-[300ms] hover:shadow-stone-400/60 border-2 border-[#1A1A1A]">
        <div className="reveal-image aspect-[16/9] overflow-hidden bg-stone-50">
          <img 
            src={destination.images[0]} 
            alt={getAltText()}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
          />
        </div>
        <div className="absolute top-8 right-8 mix-blend-difference text-white/70 text-[9px] uppercase tracking-[0.4em] font-bold" aria-hidden="true">
          00{index + 1} / Territory
        </div>
      </div>
      
      <div className="max-w-md px-2">
        {destination.tagline && (
          <p className="text-[#8B5A2B] uppercase tracking-[0.5em] text-[10px] font-bold mb-6">
            {destination.tagline}
          </p>
        )}
        <h3 id={`exp-title-${destination.id}`} className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-8 leading-tight tracking-[0.05em] group-hover:italic transition-all duration-700">
          {destination.name}
        </h3>
        <p className="text-[#1A1A1A] text-base font-normal leading-relaxed mb-10 tracking-wide">
          {destination.description}
        </p>
        <div className="flex flex-col gap-4 border-l-2 border-[#1A1A1A] pl-8 transition-colors duration-[3000ms] group-hover:border-[#D4AF37]">
          <p className="sr-only">Key Highlights:</p>
          {destination.highlights.map((high, idx) => (
            <span key={idx} className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A] font-bold">
              {high.split(':')[0]}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};