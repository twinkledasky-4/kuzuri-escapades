import React, { useEffect, useState } from 'react';
import { Destination } from '../types.ts';
import QueenElizabethCarousel from './QueenElizabethCarousel.tsx';

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
    <div className="bg-[#F5F5DC] min-h-screen selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Navigation */}
      <div className="fixed top-24 left-6 md:left-12 z-50">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-extrabold text-[#F5F5DC] bg-[#8B5A2B] hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 border-2 border-[#1A1A1A] px-8 py-4 rounded-sm shadow-xl"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Territories
        </button>
      </div>

      <section className="destination-hero relative h-[75vh] md:h-[90vh] overflow-hidden flex items-center justify-center bg-[#1A1A1A] border-b-2 border-[#1A1A1A]">
        <img
          src={heroImage}
          alt={isQE ? 'Elephant herd bathing in Kazinga Channel, Queen Elizabeth National Park, Uganda' : `${destination.name} - ${destination.tagline}`}
          className={`destination-hero-image absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[12s] ease-out ${isRevealed ? 'scale-110' : 'scale-100'}`}
          loading="eager"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-transparent to-[#1A1A1A]/80 z-1" />

        <div className={`destination-hero-content relative z-10 text-center px-6 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-bold leading-none tracking-[0.1em] text-white mb-6 md:mb-10">
            {destination.name}
          </h1>
          <p className="subtitle text-[#D4AF37] text-xs md:text-lg uppercase tracking-[1em] font-bold">
            {destination.tagline}
          </p>
        </div>
      </section>
      
      <section className="destination-details py-24 md:py-48 bg-[#F5F5DC] border-b-2 border-[#1A1A1A] px-4" aria-labelledby="details-title">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 id="details-title" className="text-4xl md:text-7xl font-serif font-bold text-[#1A1A1A] mb-12 tracking-[0.05em]">
              The Medley of Wonders
            </h2>
            <p className="text-[#1A1A1A] font-normal text-xl md:text-2xl leading-relaxed mb-20 tracking-wide opacity-90">
              {isQE 
                ? 'Witness elephant herds bathing in the Kazinga Channel, track tree-climbing lions in Ishasha, and cruise past hippos and crocodiles on Africa\'s highest concentration of waterbirds.'
                : destination.description}
            </p>
            
            <div className="h-[2px] w-full bg-[#1A1A1A] mb-20 opacity-20" />

            <div className="experience-cards grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {isQE ? (
                <>
                  <div className="card group border-l-2 border-[#8B5A2B] pl-10 py-4 hover:border-[#D4AF37] transition-all duration-700">
                    <span className="block text-[10px] text-[#654321] font-bold mb-6 tracking-widest">HIGHLIGHT 01</span>
                    <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-6 group-hover:italic transition-all duration-700">
                      Kazinga Channel Cruise
                    </h3>
                    <p className="text-[#1A1A1A] font-normal text-base leading-relaxed tracking-wide opacity-80">
                      Glide past hippos, elephants, and buffalo along this 32km 
                      natural channel connecting Lake Edward and Lake George.
                    </p>
                  </div>
                  <div className="card group border-l-2 border-[#8B5A2B] pl-10 py-4 hover:border-[#D4AF37] transition-all duration-700">
                    <span className="block text-[10px] text-[#654321] font-bold mb-6 tracking-widest">HIGHLIGHT 02</span>
                    <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-6 group-hover:italic transition-all duration-700">
                      Tree-Climbing Lions
                    </h3>
                    <p className="text-[#1A1A1A] font-normal text-base leading-relaxed tracking-wide opacity-80">
                      The rare sight of lions lounging in fig trees is unique to 
                      the Ishasha sector of this remarkable park.
                    </p>
                  </div>
                </>
              ) : (
                destination.highlights.map((highlight, idx) => (
                  <div key={idx} className="card group border-l-2 border-[#8B5A2B] pl-10 py-4 hover:border-[#D4AF37] transition-all duration-700">
                    <span className="block text-[10px] text-[#654321] font-bold mb-6 tracking-widest">HIGHLIGHT 0{idx + 1}</span>
                    <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-6 group-hover:italic transition-all duration-700">
                      {highlight.includes(':') ? highlight.split(':')[0] : highlight}
                    </h3>
                    <p className="text-[#1A1A1A] font-normal text-base leading-relaxed tracking-wide opacity-80">
                      {highlight.includes(':') ? highlight.split(':')[1] : ''}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-48 bg-white border-b-2 border-[#1A1A1A] px-4">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="mb-24">
            <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-6">VISUAL ARCHIVE</p>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] tracking-tight">Immersive Fragments.</h3>
          </div>
          
          {isQE ? (
            <div className="max-w-6xl mx-auto">
              <QueenElizabethCarousel />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {destination.images.map((img, idx) => (
                <div key={idx} className="overflow-hidden aspect-[4/5] bg-[#F5F5DC] shadow-2xl reveal-trigger group border-2 border-[#1A1A1A]">
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
          )}
        </div>
      </section>

      <section className="py-32 md:py-64 bg-[#1A1A1A] text-white text-center relative overflow-hidden border-t-2 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-8xl font-serif font-bold mb-16 md:mb-24 leading-tight tracking-[0.1em] text-[#D4AF37] italic">
            Co-author your {destination.name.split(' ')[0]} Odyssey.
          </h2>
          <button 
            className="px-16 py-8 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[12px] uppercase tracking-[1em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 shadow-xl"
            onClick={onBack}
          >
            Return to Exploration
          </button>
        </div>
      </section>
    </div>
  );
};
