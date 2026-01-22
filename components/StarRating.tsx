import React, { useState } from 'react';

interface StarRatingProps {
  rating?: number;
  onRate?: (rating: number) => void;
  size?: number;
  interactive?: boolean;
  showText?: boolean;
  ariaLabel?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  onRate = () => {},
  size = 24,
  interactive = false,
  showText = true,
  ariaLabel
}) => {
  const [hovered, setHovered] = useState(0);

  // Brand color constants from technical brief
  const COLORS = {
    filled: '#D4AF37',
    empty: '#E0E0E0'
  };

  const StarSVG = ({ filled }: { filled: boolean }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="presentation"
      className="transition-colors duration-200"
      style={{
        fill: filled ? COLORS.filled : COLORS.empty,
        color: filled ? COLORS.filled : COLORS.empty
      }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const defaultAriaLabel = interactive 
    ? `Rating selection. Current value is ${rating} out of 5.` 
    : `${rating} out of 5 stars`;

  return (
    <div 
      className="flex flex-col items-start"
      role={interactive ? "radiogroup" : "img"}
      aria-label={ariaLabel || defaultAriaLabel}
    >
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onRate(star)}
            onMouseEnter={() => interactive && setHovered(star)}
            onMouseLeave={() => interactive && setHovered(0)}
            className={`p-0 bg-transparent border-none focus:outline-none transition-transform ${
              interactive 
                ? 'star-interactive hover:scale-110 active:scale-95 cursor-pointer' 
                : 'cursor-default'
            }`}
            role={interactive ? "radio" : undefined}
            aria-checked={interactive ? rating === star : undefined}
            aria-label={interactive ? `Rate ${star} stars` : undefined}
            aria-hidden={!interactive}
            tabIndex={interactive ? (rating === star || (rating === 0 && star === 1) ? 0 : -1) : -1}
          >
            <StarSVG filled={star <= (hovered || rating)} />
          </button>
        ))}
      </div>
      {showText && (
        <p className="text-[10px] uppercase tracking-[0.3em] font-black mt-3 text-[#8B5A2B]" aria-hidden="true">
          {rating} out of 5 stars
        </p>
      )}
    </div>
  );
};