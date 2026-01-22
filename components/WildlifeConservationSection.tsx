import React from 'react';

interface WildlifeConservationSectionProps {
  onEnquire: (subject: string) => void;
}

export const WildlifeConservationSection: React.FC<WildlifeConservationSectionProps> = ({ onEnquire }) => {
  const imageUrl = "https://i.postimg.cc/Mpd6Vbrs/CTC-Conservation-center-lion-cubs-scaled.jpg";

  return (
    <section className="conservation-experience bg-[#FAF8F3] border-y-2 border-[#1A1A1A]" aria-labelledby="conservation-title">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="content-grid">
          {/* Image on left per brief */}
          <div className="image-column reveal-image rounded-sm border-2 border-[#1A1A1A]">
            <picture>
              <source
                type="image/webp"
                srcSet={`
                  ${imageUrl}?w=800&fm=webp 800w,
                  ${imageUrl}?w=1200&fm=webp 1200w,
                  ${imageUrl}?w=1600&fm=webp 1600w
                `}
              />
              <img
                src={`${imageUrl}?w=1200`}
                srcSet={`
                  ${imageUrl}?w=800 800w,
                  ${imageUrl}?w=1200 1200w,
                  ${imageUrl}?w=1600 1600w
                `}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Lion cubs at Uganda Wildlife Conservation Center - Educational wildlife encounter"
                className="conservation-image"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          
          {/* Content on right per brief */}
          <div className="text-column reveal-trigger">
            <h2 id="conservation-title" className="font-serif text-[#1A1A1A]">Conservation Encounters</h2>
            <p className="lead font-serif italic text-[#8B5A2B]">
              Experience Uganda's commitment to wildlife preservation through 
              intimate educational encounters.
            </p>
            
            <p className="text-stone-700 font-light leading-relaxed mb-10 tracking-wide text-lg">
              Visit the Uganda Wildlife Education Centre, where rescued animals 
              receive world-class care and serve as ambassadors for their wild 
              counterparts. Perfect for families and conservation-minded travelers.
            </p>
            
            <ul className="benefits-list">
              <li className="font-semibold text-[#1A1A1A]">Meet rescued lions, chimpanzees, and rare birds</li>
              <li className="font-semibold text-[#1A1A1A]">Learn from expert wildlife veterinarians</li>
              <li className="font-semibold text-[#1A1A1A]">Support critical conservation programs</li>
              <li className="font-semibold text-[#1A1A1A]">Safe, educational experiences for all ages</li>
            </ul>
            
            <button 
              onClick={() => onEnquire('Conservation Tours')}
              className="px-10 py-5 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[11px] uppercase tracking-[0.5em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 shadow-xl"
            >
              Inquire About Conservation Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};