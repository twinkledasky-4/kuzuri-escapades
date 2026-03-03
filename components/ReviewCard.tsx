import React, { useState } from 'react';
import { Review } from '../types.ts';
import { StarRating } from './StarRating.tsx';
import { ShieldCheck } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;
  const isLong = review.comment.length > maxLength;
  const displayComment = isExpanded ? review.comment : `${review.comment.substring(0, maxLength)}${isLong ? '...' : ''}`;

  return (
    <div className="bg-white p-6 flex flex-col h-[320px] shadow-md transition-all duration-700 group hover:-translate-y-1 border border-black/5 relative rounded-xl overflow-hidden">
      {/* 1. Rating at the Top */}
      <div className="mb-4">
        <div className="flex">
          <StarRating 
            rating={review.rating} 
            size={14} 
            interactive={false} 
            showText={false} 
            color="#D4AF37" 
          />
        </div>
      </div>

      {/* 2. The Quote: Shrunken snippet in Sans-Serif */}
      <div className="flex-grow overflow-hidden relative">
        {review.title && (
          <h4 className="text-[14px] font-sans font-black text-[#1A1A1A] leading-tight mb-2 line-clamp-1 uppercase tracking-tight">
            {review.title}
          </h4>
        )}
        <p className="text-[#1A1A1A]/70 text-[13px] font-sans leading-relaxed">
          "{displayComment}"
        </p>
        {isLong && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-[#D4AF37] text-[9px] font-black uppercase tracking-widest mt-2 hover:underline"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* 3. The Client: Circular icon and name/country at the bottom */}
      <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/30 shrink-0 bg-stone-50">
          {review.avatarUrl ? (
            <img 
              src={review.avatarUrl} 
              alt={review.clientName} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#1A1A1A] text-[#D4AF37] font-black text-xs uppercase">
              {review.clientName.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-[11px] font-sans font-black text-[#1A1A1A] uppercase tracking-tight truncate">
              {review.clientName}
            </h3>
            {review.verified && (
              <ShieldCheck size={10} fill="#2D5A27" className="text-white shrink-0" />
            )}
          </div>
          <p className="text-[9px] uppercase tracking-widest font-bold text-[#8B5A2B] opacity-60 truncate">
            {review.countryCode} • {new Date(review.date).getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};
