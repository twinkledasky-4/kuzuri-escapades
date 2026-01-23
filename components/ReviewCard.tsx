import React, { useState } from 'react';
import { Review } from '../types.ts';
import { StarRating } from './StarRating.tsx';

interface ReviewCardProps {
  review: Review;
  onHelpfulClick?: (id: string | number) => void;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, onHelpfulClick }) => {
  const [hasVoted, setHasVoted] = useState(false);

  // Flag emoji map for native display
  const flagMap: Record<string, string> = {
    'GB': '🇬🇧',
    'SG': '🇸🇬',
    'ES': '🇪🇸',
    'AU': '🇦🇺',
    'IN': '🇮🇳',
    'US': '🇺🇸',
    'CA': '🇨🇦',
    'FR': '🇫🇷',
    'DE': '🇩🇪',
    'JP': '🇯🇵',
    'ZA': '🇿🇦',
    'KE': '🇰🇪',
    'CH': '🇨🇭',
    'MC': '🇲🇨'
  };

  const handleHelpful = () => {
    if (hasVoted) return;
    setHasVoted(true);
    onHelpfulClick?.(review.id);
  };

  return (
    <div 
      className="card review-card relative p-10 rounded-sm border-2 border-black shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full overflow-hidden"
      style={{ backgroundColor: '#F5F5DC', minHeight: '440px' }}
    >
      {/* Editorial Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />

      {/* Header with Client Info */}
      <div className="relative z-10 flex items-start justify-between mb-8 pb-6 border-b border-black/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold font-serif text-[#1A1A1A]">
              {review.clientName}
            </h3>
            {review.verified && (
              <span 
                title="Verified Manifest" 
                className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-sm" 
                style={{ backgroundColor: '#D4AF37', color: '#1A1A1A' }}
              >
                ✓ Verified
              </span>
            )}
          </div>
          <p className="text-xs uppercase tracking-widest font-bold text-[#654321] opacity-70">
            {review.country} {flagMap[review.countryCode] || '🌍'}
          </p>
        </div>

        {/* Static Star Rating with gold branding */}
        <StarRating 
          rating={review.rating as number} 
          size={18} 
          interactive={false} 
          showText={false} 
          ariaLabel={`${review.clientName}'s experience rating: ${review.rating} out of 5 stars`}
        />
      </div>

      {/* Trip Information */}
      <div className="relative z-10 mb-8">
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-black text-[#654321] mb-2">
          Expedition Narrative
        </p>
        <p className="text-sm font-bold tracking-wide text-[#8B5A2B]">
          {review.tripTaken}
        </p>
      </div>

      {/* Comment */}
      <div className="relative z-10 flex-grow mb-8">
        <p className="text-[#1A1A1A] text-lg leading-relaxed italic font-light opacity-90">
          "{review.comment}"
        </p>
      </div>

      {/* Admin Responses - Editorial Box */}
      {review.responses && review.responses.length > 0 && (
        <div className="relative z-10 mb-10 p-6 bg-white/40 border-l-4 border-[#D4AF37] animate-fade-in shadow-inner">
          <p className="text-[10px] uppercase tracking-[0.4em] font-black text-[#8B5A2B] mb-3">
            Curator Response
          </p>
          {review.responses.map((resp, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-sm font-serif font-bold text-[#1A1A1A] italic">
                {resp.author}
              </p>
              <p className="text-sm text-[#1A1A1A] font-medium leading-relaxed opacity-80">
                {resp.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Footer with Helpful & Date */}
      <div className="relative z-10 flex justify-between items-center border-t border-black/10 pt-6">
        <div className="text-[10px] uppercase tracking-widest opacity-40 font-bold text-[#654321]">
          {new Date(review.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        
        <button 
          onClick={handleHelpful}
          disabled={hasVoted}
          className={`flex items-center gap-2 px-4 py-2 border-2 text-[9px] uppercase tracking-widest font-black transition-all ${
            hasVoted 
              ? 'bg-[#1A1A1A] text-[#D4AF37] border-black cursor-default scale-100' 
              : 'bg-transparent text-[#654321] border-black/20 hover:border-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 active:scale-95'
          }`}
          aria-label={hasVoted ? "Marked as helpful" : "Mark review as helpful"}
        >
          <span>{hasVoted ? '✓ Helpful' : 'Helpful'}</span>
          <span>({review.helpful})</span>
        </button>
      </div>
    </div>
  );
};