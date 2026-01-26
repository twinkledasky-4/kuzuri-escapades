import React from 'react';

interface WildlifeConservationSectionProps {
  onEnquire: (subject: string) => void;
}

export const WildlifeConservationSection: React.FC<WildlifeConservationSectionProps> = ({ onEnquire }) => {
  const imageUrl = "https://images.unsplash.com/photo-1481142889578-df45d4f9080e?auto=format&fit=crop&q=80&w=1200";

  return (
    <section className="py-32 md:py-64 bg-[#FAF8F3] border-y-2 border-[#1A1A1A]" aria-labelledby="conservation-title">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image on left per brief */}
          <div className="reveal-image rounded-sm border-2 border-[#1A1A1A] overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt="Majestic lion in the savannah - Educational wildlife encounter"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] scale-105 hover:scale-100"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Content on right per brief */}
          <div className="reveal-trigger space-y-10">
            <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold">GUARDIANSHIP</p>
            <h2 id="conservation-title" className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] leading-tight tracking-tighter">Conservation Encounters.</h2>
            <p className="text-[#8B5A2B] font-serif italic text-2xl leading-relaxed">
              Experience Uganda's commitment to wildlife preservation through 
              intimate educational encounters.
            </p>
            
            <p className="text-stone-700 font-light leading-relaxed tracking-wide text-lg">
              Visit the Uganda Wildlife Education Centre, where rescued animals 
              receive world-class care and serve as ambassadors for their wild 
              counterparts. Perfect for families and conservation-minded travelers seeking native stewardship.
            </p>
            
            <div className="space-y-4 pt-6">
              {[
                "Meet rescued lions, chimpanzees, and rare birds",
                "Learn from expert wildlife veterinarians",
                "Support critical conservation programs",
                "Safe, educational experiences for all ages"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <p className="font-bold text-[#1A1A1A] text-[11px] uppercase tracking-widest">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-10">
              <button 
                onClick={() => onEnquire('Conservation Tours')}
                className="cta-primary shadow-xl"
              >
                Inquire About Conservation Tours
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
