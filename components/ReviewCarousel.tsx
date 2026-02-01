import React, { useState, useEffect } from 'react';
import { Review } from '../types.ts';
import { ReviewCard } from './ReviewCard.tsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewCarouselProps {
  reviews: Review[];
}

export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width >= 1280) setItemsToShow(3);
      else if (width >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSteps = Math.max(1, reviews.length - itemsToShow + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSteps);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  // Stack vertically on mobile as requested for easy reading
  if (isMobile) {
    return (
      <div className="flex flex-col gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="w-full">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full group/carousel px-4">
      {/* Navigation Arrows - Abs positioned for high contrast on blurred background */}
      <div className="absolute top-1/2 -left-4 md:-left-16 lg:-left-24 -translate-y-1/2 z-30">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:border-[#D4AF37] transition-all duration-500 rounded-full group/btn"
          aria-label="Previous reviews"
        >
          <ChevronLeft size={28} strokeWidth={2} className="group-hover/btn:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute top-1/2 -right-4 md:-right-16 lg:-right-24 -translate-y-1/2 z-30">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:border-[#D4AF37] transition-all duration-500 rounded-full group/btn"
          aria-label="Next reviews"
        >
          <ChevronRight size={28} strokeWidth={2} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slider Viewport */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-shrink-0 px-4 h-full"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-4 mt-16">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 transition-all duration-700 rounded-full ${
              i === currentIndex ? 'w-16 bg-[#D4AF37]' : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};