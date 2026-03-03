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

  // Horizontal slider on all devices
  return (
    <div className="relative w-full group/carousel px-4">
      {/* Navigation Arrows - Small Gold Arrows */}
      <div className="absolute top-1/2 -left-2 md:-left-12 lg:-left-16 -translate-y-1/2 z-30">
        <button 
          onClick={prevSlide}
          className="w-8 h-8 md:w-12 md:h-12 bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 rounded-full group/btn"
          aria-label="Previous reviews"
        >
          <ChevronLeft size={isMobile ? 16 : 24} strokeWidth={2.5} className="group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute top-1/2 -right-2 md:-right-12 lg:-right-16 -translate-y-1/2 z-30">
        <button 
          onClick={nextSlide}
          className="w-8 h-8 md:w-12 md:h-12 bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 rounded-full group/btn"
          aria-label="Next reviews"
        >
          <ChevronRight size={isMobile ? 16 : 24} strokeWidth={2.5} className="group-hover/btn:translate-x-0.5 transition-transform" />
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
              className="flex-shrink-0 px-2 md:px-4 h-full"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators - Gold Dots */}
      <div className="flex justify-center gap-3 mt-8 md:mt-12">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentIndex 
                ? 'w-8 h-1.5 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]' 
                : 'w-1.5 h-1.5 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};