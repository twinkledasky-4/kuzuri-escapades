
import React, { useEffect, useState } from 'react';
import { Destination } from '../types.ts';

interface DestinationDetailProps {
  destination: Destination;
  onBack: () => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, onBack }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, [destination.id]);

  const heroImage = destination.images[0];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <div className="fixed top-24 left-6 md:left-12 z-50">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-bold text-white hover:text-[#d4af37] transition-all focus:outline-none bg-black/20 backdrop-blur-sm px-6 py-3 rounded-sm border border-white/10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Territories
        </button>
      </div>

      {/* Hero Section */}
      <section className="destination-hero relative h-[75vh] md:h-[90vh] overflow-hidden flex items-center justify-center bg-[#002d04]">
        <picture>
          <source
            type="image/webp"
            srcSet={`
              ${heroImage}?w=800&fm=webp 800w,
              ${heroImage}?w=1200&fm=webp 1200w,
              ${heroImage}?w=1600&fm=webp 1600w,
              ${heroImage}?w=2400&fm=webp 2400w
            `}
          />
          <img
            src={`${heroImage}?w=1600`}
            srcSet={`
              ${heroImage}?w=800 800w,
              ${heroImage}?w=1200 1200w,
              ${heroImage}?w=1600 1600w,
              ${heroImage}?w=2400 2400w
            `}
            sizes="100vw"
            alt={`${destination.name} - ${destination.tagline}`}
            className={`destination-hero-image absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[12s] ease-out ${isRevealed ? 'scale-110' : 'scale-100'}`}
            loading="eager"
            // @ts-ignore
            fetchpriority="high"
          />
        </picture>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#002d04]/40 via-transparent to-[#002d04]/80 z-1" />

        <div className={`destination-hero-content relative z-10 text-center px-6 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif leading-none tracking-tighter text-white mb-6 md:mb-10">
            {destination.name}
          </h1>
          <p className="subtitle text-[#d4af37] text-xs md:text-lg uppercase tracking-[0.5em] font-bold">
            {destination.tagline}
          </p>
        </div>
      </section>
      
      {/* Narrative Section */}
      <section className="py-24 md:py-48 bg-white" aria-labelledby="essence-title">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 id="essence-title" className="text-4xl md:text-6xl font-serif text-[#002d04] mb-12 tracking-tight">
              {destination.description.includes(':') 
                ? <>{destination.description.split(':')[0]}: <span className="italic font-light text-stone-300">{destination.description.split(':')[1]}</span></>
                : destination.description
              }
            </h2>
            <div className="h-[1px] w-full bg-stone-100 mb-20" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {destination.highlights.map((highlight, idx) => {
                const [title, body] = highlight.includes(':') ? highlight.split(':') : [highlight, ''];
                return (
                  <div key={idx} className="group reveal-trigger border-l border-stone-100 pl-10 py-4 hover:border-[#d4af37] transition-all duration-700">
                    <span className="block text-[10px] text-stone-300 font-bold mb-6 tracking-widest">0{idx + 1}</span>
                    <h3 className="text-2xl font-serif text-[#002d04] mb-6 group-hover:italic transition-all duration-500">
                      {title}
                    </h3>
                    {body && (
                      <p className="text-stone-400 font-light text-base leading-relaxed tracking-wide">
                        {body.trim()}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-24 md:py-48 bg-[#fafaf9]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-between items-end mb-24">
            <div>
              <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[9px] font-bold mb-6">VISUAL ARCHIVE</p>
              <h3 className="text-4xl md:text-6xl font-serif text-[#002d04] tracking-tight">Immersive <span className="italic">Fragments.</span></h3>
            </div>
            <div className="hidden md:block">
              <span className="text-[9px] uppercase tracking-[0.4em] text-stone-300 font-bold">Curated by Lucky .K</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destination.images.map((img, idx) => (
              <div key={idx} className="overflow-hidden aspect-[4/5] bg-stone-200 shadow-[0_40px_80px_-20px_rgba(0,45,4,0.08)] reveal-trigger group">
                <img 
                  src={img} 
                  alt={`${destination.name} narrative detail ${idx + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[3000ms] group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Call to Action */}
      <section className="py-32 md:py-64 bg-[#002d04] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif mb-16 md:mb-24 leading-tight tracking-tight">
            Co-author your <br /><span className="italic font-light text-[#d4af37]">{destination.name.split(' ')[0]} Odyssey.</span>
          </h2>
          <button 
            className="px-16 py-8 border border-white/20 text-[10px] uppercase tracking-[1em] font-bold hover:bg-white hover:text-[#002d04] hover:border-transparent transition-all duration-700 shadow-2xl"
            onClick={() => {
              onBack();
              setTimeout(() => {
                const planner = document.getElementById('planner-section');
                planner?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          >
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
