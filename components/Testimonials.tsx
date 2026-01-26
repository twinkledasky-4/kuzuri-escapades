import React from 'react';
import { Review } from '../types.ts';
import { ReviewCarousel } from './ReviewCarousel.tsx';
import { StarRating } from './StarRating.tsx';

interface TestimonialsProps {
  onNavigateToAll?: () => void;
  reviews: Review[];
  onHelpfulClick?: (id: string | number) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onNavigateToAll, reviews, onHelpfulClick }) => {
  const publishedReviews = reviews.filter(r => r.published);

  return (
    <section 
      className="py-24 md:py-32 border-t-2 border-b-2 border-black selection:bg-[#1A1A1A] selection:text-[#D4AF37]" 
      style={{ backgroundColor: '#FAF8F3' }}
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-trigger">
          <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-6">THE FEEDBACK</p>
          <h2 id="testimonial-heading" className="text-4xl md:text-6xl font-serif font-bold mb-6" style={{ color: '#1A1A1A' }}>
            Trusted by Global Adventurers
          </h2>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-80" style={{ color: '#654321' }}>
            Hear what our clients have to say about their transformative Kuzuri experiences.
          </p>
          
          {/* Reusable Star Rating Summary */}
          <div className="flex flex-col items-center gap-4">
            <StarRating rating={5} size={24} interactive={false} showText={false} />
            <p className="text-[11px] uppercase tracking-[0.4em] font-black" style={{ color: '#8B5A2B' }}>
              4.9/5 Stars • 150+ Verified Reviews
            </p>
          </div>
        </div>

        {/* Review Carousel */}
        <div className="reveal-trigger">
          <ReviewCarousel reviews={publishedReviews} onHelpfulClick={onHelpfulClick} />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20 reveal-trigger">
          <button
            onClick={onNavigateToAll}
            className="px-12 py-5 border-2 border-black font-black uppercase tracking-[0.5em] text-[11px] transition-all duration-700 hover:bg-[#1A1A1A] hover:text-[#D4AF37] hover:scale-105 shadow-xl"
            style={{ backgroundColor: '#D4AF37', color: '#1A1A1A' }}
          >
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};
