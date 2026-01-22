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
  const isQE = destination.id === 'queen-elizabeth';

  return (
    <div className="bg-white min-h-screen selection:bg-[#002d04] selection:text-[#d4af37]">
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

      {/* Hero Section per Technical Brief picture standards */}
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
            src={`${heroImage}?w=1200`}
            srcSet={`
              ${heroImage}?w=800 800w,
              ${heroImage}?w=1200 1200w,
              ${heroImage}?w=1600 1600w,
              ${heroImage}?w=2400 2400w
            `}
            sizes="100vw"
            alt={isQE ? 'Elephant herd bathing in Kazinga Channel, Queen Elizabeth National Park, Uganda' : `${destination.name} - ${destination.tagline}`}
            className={`destination-hero-image absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[12s] ease-out ${isRevealed ? 'scale-110' : 'scale-100'}`}
            loading="eager"
            // @ts-ignore
            fetchpriority="high"
          />
        </picture>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#002d04]/40 via-transparent to-[#002d04]/80 z-1" />

        <div className={`destination-hero-content relative z-10 text-center px-6 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter text-white mb-6 md:mb-10">
            {destination.name}
          </h1>
          <p className="subtitle text-[#d4af37] text-xs md:text-lg uppercase tracking-[0.5em] font-bold">
            {destination.tagline}
          </p>
        </div>
      </section>
      
      {/* Narrative Section - Medley of Wonders per brief */}
      <section className="destination-details py-24 md:py-48 bg-white" aria-labelledby="details-title">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 id="details-title" className="text-4xl md:text-6xl font-serif text-[#002d04] mb-12 tracking-tight">
              {isQE ? 'The Medley of Wonders' : 'The Essence of Sanctuary'}
            </h2>
            <p className="text-stone-500 font-light text-xl md:text-2xl leading-relaxed mb-20 tracking-wide">
              {isQE 
                ? 'Witness elephant herds bathing in the Kazinga Channel, track tree-climbing lions in Ishasha, and cruise past hippos and crocodiles on Africa\'s highest concentration of waterbirds.'
                : destination.description}
            </p>
            
            <div className="h-[1px] w-full bg-stone-100 mb-20" />

            {/* Experience Cards per brief */}
            <div className="experience-cards grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {isQE ? (
                <>
                  <div className="card group border-l border-stone-100 pl-10 py-4 hover:border-[#d4af37] transition-all duration-700">
                    <span className="block text-[10px] text-stone-300 font-bold mb-6 tracking-widest">HIGHLIGHT 01</span>
                    <h3 className="text-2xl font-serif text-[#002d04] mb-6 group-hover:italic transition-all duration-500">
                      Kazinga Channel Cruise
                    </h3>
                    <p className="text-stone-400 font-light text-base leading-relaxed tracking-wide">
                      Glide past hippos, elephants, and buffalo along this 32km 
                      natural channel connecting Lake Edward and Lake George.
                    </p>
                  </div>
                  <div className="card group border-l border-stone-100 pl-10 py-4 hover:border-[#d4af37] transition-all duration-700">
                    <span className="block text-[10px] text-stone-300 font-bold mb-6 tracking-widest">HIGHLIGHT 02</span>
                    <h3 className="text-2xl font-serif text-[#002d04] mb-6 group-hover:italic transition-all duration-500">
                      Tree-Climbing Lions
                    </h3>
                    <p className="text-stone-400 font-light text-base leading-relaxed tracking-wide">
                      The rare sight of lions lounging in fig trees is unique to 
                      the Ishasha sector of this remarkable park.
                    </p>
                  </div>
                </>
              ) : (
                destination.highlights.map((highlight, idx) => (
                  <div key={idx} className="card group border-l border-stone-100 pl-10 py-4 hover:border-[#d4af37] transition-all duration-700">
                    <span className="block text-[10px] text-stone-300 font-bold mb-6 tracking-widest">HIGHLIGHT 0{idx + 1}</span>
                    <h3 className="text-2xl font-serif text-[#002d04] mb-6 group-hover:italic transition-all duration-500">
                      {highlight.includes(':') ? highlight.split(':')[0] : highlight}
                    </h3>
                    <p className="text-stone-400 font-light text-base leading-relaxed tracking-wide">
                      {highlight.includes(':') ? highlight.split(':')[1] : ''}
                    </p>
                  </div>
                ))
              )}
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destination.images.map((img, idx) => (
              <div key={idx} className="overflow-hidden aspect-[4/5] bg-stone-200 shadow-xl reveal-trigger group">
                <img 
                  src={img} 
                  alt={`${destination.name} landscape detail ${idx + 1}`}
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
            onClick={onBack}
          >
            Return to Exploration
          </button>
        </div>
      </section>
    </div>
  );
};