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
      className="relative py-16 md:py-24 overflow-hidden scroll-mt-[120px] bg-[#1A1A1A] flex flex-col justify-center min-h-[600px]" 
    >
      {/* Background Layer: Fixed Parallax, Cover, Centered, with 60% Black Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-100 transition-opacity duration-700"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center center' }}
      >
        {/* Solid 60% Black Overlay to push image back and make text pop */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>

      <div className="relative z-10 w-full max-w-[1750px] mx-auto px-6 md:px-20 lg:px-32 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 reveal-trigger">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[9px] font-black mb-2">
            VOICES OF THE WILD
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-[0.2em] mb-4 leading-tight">
            TRAVELLERS' REVIEWS
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-8" />
          
          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-col items-center gap-2">
              <img 
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
                alt="TripAdvisor" 
                className="h-6 md:h-8 invert brightness-200"
                referrerPolicy="no-referrer"
              />
              <span className="text-[8px] font-black text-[#D4AF37] tracking-[0.3em] uppercase">Verified Reviews</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <a 
              href="https://www.safaribookings.com/p5995" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-2 group transition-all duration-300"
            >
              <img 
                src="https://www.safaribookings.com/img/logo-safaribookings.png" 
                alt="SafariBookings" 
                className="h-6 md:h-8 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="text-[8px] font-black text-[#D4AF37] tracking-[0.3em] uppercase group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all">Top Rated</span>
            </a>
          </div>
        </div>

        {/* Review Carousel Container */}
        <div className="w-full reveal-trigger scale-90 md:scale-95 lg:scale-100 origin-center">
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