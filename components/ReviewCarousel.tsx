import React, { useState, useEffect } from 'react';
import { Review } from '../types.ts';
import { ReviewCard } from './ReviewCard.tsx';

interface ReviewCarouselProps {
  reviews: Review[];
  onHelpfulClick?: (id: string | number) => void;
}

export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews, onHelpfulClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Responsive card display
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      (prev + cardsPerView) >= reviews.length ? 0 : prev + cardsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      (prev - cardsPerView) < 0 ? (Math.floor((reviews.length - 1) / cardsPerView) * cardsPerView) : prev - cardsPerView
    );
  };

  // Get visible reviews
  const visibleReviews = [];
  for (let i = 0; i < cardsPerView; i++) {
    const index = (currentIndex + i) % reviews.length;
    visibleReviews.push(reviews[index]);
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="review-carousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 transition-all duration-700 animate-fade-in">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} onHelpfulClick={onHelpfulClick} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="carousel-nav flex justify-center items-center gap-6 mt-12">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full border-2 border-black transition transform hover:scale-110 active:scale-90 shadow-lg"
          style={{ backgroundColor: '#8B5A2B', color: '#F5F5DC' }}
          aria-label="Previous reviews"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-3">
          {[...Array(Math.ceil(reviews.length / cardsPerView))].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * cardsPerView)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: 
                  i === Math.floor(currentIndex / cardsPerView) 
                    ? '#D4AF37' 
                    : '#D4D4D4',
                transform: i === Math.floor(currentIndex / cardsPerView) ? 'scale(1.2)' : 'scale(1)'
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-4 rounded-full border-2 border-black transition transform hover:scale-110 active:scale-90 shadow-lg"
          style={{ backgroundColor: '#8B5A2B', color: '#F5F5DC' }}
          aria-label="Next reviews"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Review Count */}
      <div className="text-center mt-8 text-sm font-bold uppercase tracking-widest opacity-60" style={{ color: '#654321' }}>
        Showing {visibleReviews.length} of {reviews.length} reviews
      </div>
    </div>
  );
};