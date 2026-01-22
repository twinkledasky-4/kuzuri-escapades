
import React from 'react';

interface WildlifeConservationSectionProps {
  onEnquire: (subject: string) => void;
}

export const WildlifeConservationSection: React.FC<WildlifeConservationSectionProps> = ({ onEnquire }) => {
  const imageUrl = "https://i.postimg.cc/Mpd6Vbrs/CTC-Conservation-center-lion-cubs-scaled.jpg";

  return (
    <section className="py-24 md:py-48 bg-white overflow-hidden" aria-labelledby="conservation-title">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Image Column - Left */}
          <div className="w-full lg:w-1/2 reveal-image aspect-[4/5] shadow-[0_40px_80px_-20px_rgba(0,45,4,0.1)] bg-stone-50 overflow-hidden">
            <div className="image-container-standard h-full">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`
                    ${imageUrl}?w=800&fm=webp 800w,
                    ${imageUrl}?w=1200&fm=webp 1200w,
                    ${imageUrl}?w=1600&fm=webp 1600w
                  `}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <img
                  src={`${imageUrl}?w=1200`}
                  srcSet={`
                    ${imageUrl}?w=800 800w,
                    ${imageUrl}?w=1200 1200w,
                    ${imageUrl}?w=1600 1600w
                  `}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt="Majestic lion cubs at the Uganda Wildlife Conservation Education Centre, showcasing native preservation efforts."
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-[4000ms] will-change-transform"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
          
          {/* Content Column - Right */}
          <div className="w-full lg:w-1/2 reveal-trigger">
            <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[10px] mb-8 font-bold">STEWARDSHIP</p>
            <h2 id="conservation-title" className="text-5xl md:text-7xl font-serif text-[#002d04] mb-12 leading-[0.9] tracking-tighter">
              Conservation <br /><span className="italic font-light text-stone-300">Encounters.</span>
            </h2>
            
            <p className="text-stone-500 font-light text-xl md:text-2xl leading-relaxed mb-10 tracking-wide">
              Experience Uganda's commitment to wildlife preservation through intimate educational encounters that resonate long after the journey ends.
            </p>
            
            <p className="text-stone-400 font-light text-base leading-relaxed mb-12 tracking-wide max-w-xl">
              Visit the Uganda Wildlife Education Centre, where rescued animals receive world-class care and serve as ambassadors for their wild counterparts. This is a journey into the heart of rehabilitation, perfect for families and conservation-minded travelers who value the "Sur Mesure" touch in every encounter.
            </p>
            
            <ul className="space-y-6 mb-16" role="list">
              {[
                "Meet rescued lions, chimpanzees, and rare birds",
                "Learn from expert wildlife veterinarians",
                "Support critical conservation programs",
                "Safe, educational experiences for all ages"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-[11px] uppercase tracking-[0.4em] text-stone-300 font-bold group-hover:text-[#002d04] transition-colors duration-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => onEnquire('Conservation Tours')}
              className="px-12 py-5 border border-[#002d04]/10 text-[10px] uppercase tracking-[0.8em] font-bold text-[#002d04] hover:bg-[#d4af37] hover:text-white hover:border-transparent transition-all duration-700 shadow-sm hover:shadow-xl active:scale-95"
              aria-label="Inquire about our private conservation-focused journeys"
            >
              Inquire About Conservation Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
