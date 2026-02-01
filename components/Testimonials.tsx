import React from 'react';
import { Review } from '../types.ts';
import { ReviewCarousel } from './ReviewCarousel.tsx';

interface TestimonialsProps {
  onNavigateToAll?: () => void;
  reviews: Review[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onNavigateToAll, reviews }) => {
  const publishedReviews = reviews.filter(r => r.published);
  const backgroundImage = "https://i.postimg.cc/9FkNBVfQ/Queen_Elizabeth_National_Park.jpg";

  return (
    <section 
      id="travellers-reviews"
      className="relative py-10 md:py-12 overflow-hidden scroll-mt-[120px] bg-[#1A1A1A] max-h-[500px] flex flex-col justify-center" 
    >
      {/* Background Layer: Fixed Parallax, Cover, Centered, with 60% Black Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Solid 60% Black Overlay to push image back and make text pop */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>

      <div className="relative z-10 w-full max-w-[1750px] mx-auto px-6 md:px-20 lg:px-32 flex flex-col items-center">
        {/* Section Header: Tightened margins for 500px constraint */}
        <div className="text-center mb-6 md:mb-8 reveal-trigger">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[9px] font-black mb-3">
            VOICES OF THE WILD
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-[0.2em] mb-4 leading-tight">
            TRAVELLERS' REVIEWS
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
        </div>

        {/* Review Carousel Container */}
        <div className="w-full reveal-trigger scale-95 md:scale-100 origin-center">
          <ReviewCarousel reviews={publishedReviews} />
        </div>

        {/* Explore More CTA: Compact version to respect height limit */}
        {onNavigateToAll && (
          <div className="text-center mt-6 md:mt-8 reveal-trigger">
            <button
              onClick={onNavigateToAll}
              className="group inline-flex items-center gap-4 text-[9px] font-sans font-black uppercase tracking-[0.6em] text-white transition-all hover:text-[#D4AF37]"
            >
              <span className="border-b border-white/20 pb-1 group-hover:border-[#D4AF37] transition-all">All Narratives</span>
              <div className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#1A1A12] transition-all duration-500 text-lg">
                &gt;
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};