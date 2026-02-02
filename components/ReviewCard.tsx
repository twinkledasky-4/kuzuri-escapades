import React from 'react';
import { Review } from '../types.ts';
import { StarRating } from './StarRating.tsx';
import { ShieldCheck } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-8 md:p-10 flex flex-col h-full shadow-2xl transition-all duration-700 group hover:-translate-y-2 border border-white/5 relative rounded-[15px]">
      {/* 1. Profile Section: Avatar, Name, Date, Verified Badge */}
      <div className="flex items-center gap-5 mb-8 pb-6 border-b border-black/5">
        <div className="w-16 h-16 rounded-[15px] overflow-hidden border-2 border-[#D4AF37] shrink-0 bg-stone-50 shadow-inner">
          {review.avatarUrl ? (
            <img 
              src={review.avatarUrl} 
              alt={review.clientName} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-[15px]" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#1A1A1A] text-[#D4AF37] font-black text-xl uppercase rounded-[15px]">
              {review.clientName.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-base font-sans font-black text-[#1A1A1A] uppercase tracking-tight">
              {review.clientName}
            </h3>
            {review.verified && (
              <div title="Verified Traveller" className="flex items-center text-[#2D5A27]">
                <ShieldCheck size={16} fill="currentColor" className="text-white" />
              </div>
            )}
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B5A2B] opacity-60">
            {new Date(review.date).toLocaleDateString('en-GB', { 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* 2. Rating & Bold Title */}
      <div className="space-y-6 mb-8">
        <div className="flex">
          <StarRating 
            rating={review.rating} 
            size={16} 
            interactive={false} 
            showText={false} 
            color="#2D5A27" 
          />
        </div>
        
        {review.title && (
          <h4 className="text-xl md:text-2xl font-serif font-black text-[#1A1A1A] leading-tight italic">
            "{review.title}"
          </h4>
        )}
      </div>

      {/* 3. Testimonial Narrative */}
      <div className="flex-grow mb-10">
        <p className="text-[#1A1A1A]/90 text-lg font-serif italic leading-relaxed">
          {review.comment}
        </p>
      </div>

      {/* 4. Trip Metadata Footer */}
      <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-[1px] bg-[#D4AF37]" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#8B5A2B]">
            {review.tripTaken}
          </span>
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest text-black/20">
          {review.countryCode}
        </span>
      </div>
    </div>
  );
};