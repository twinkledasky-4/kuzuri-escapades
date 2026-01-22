
import React, { useEffect, useState } from 'react';

interface HeroProps {
  onStartPlanning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanning }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Using the specific high-fidelity black and white landscape URL for the hero section
  const heroImageUrl = "https://i.postimg.cc/dVLtYNBN/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg";

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <picture>
        <source
          type="image/webp"
          srcSet={`
            ${heroImageUrl}?w=800&fm=webp 800w,
            ${heroImageUrl}?w=1200&fm=webp 1200w,
            ${heroImageUrl}?w=1600&fm=webp 1600w,
            ${heroImageUrl}?w=2400&fm=webp 2400w
          `}
          sizes="100vw"
        />
        <img
          src={`${heroImageUrl}?w=1600`}
          srcSet={`
            ${heroImageUrl}?w=800 800w,
            ${heroImageUrl}?w=1200 1200w,
            ${heroImageUrl}?w=1600 1600w,
            ${heroImageUrl}?w=2400 2400w
          `}
          sizes="100vw"
          alt="Breathtaking Uganda landscape - Luxury safari destination in East Africa"
          className={`hero-image ${isLoaded ? 'scale-110 opacity-100' : 'scale-100 opacity-0'}`}
          loading="eager"
          decoding="async"
          // @ts-ignore
          fetchpriority="high"
        />
      </picture>
      
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 id="hero-title" className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
            Journey Beyond <br /> <span className="italic font-light">the Ordinary.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 tracking-wide">
            Bespoke Ugandan Escapades Crafted for the Discerning Traveler
          </p>
          <button 
            onClick={onStartPlanning}
            className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-8 focus:ring-offset-[#002d04]"
          >
            <span className="absolute inset-0 border border-white/40 group-hover:border-[#d4af37] transition-colors duration-500"></span>
            <span className="relative text-white uppercase tracking-[0.8em] text-[10px] group-hover:text-[#d4af37] transition-colors duration-500 font-bold">
              Explore Our Escapades
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
