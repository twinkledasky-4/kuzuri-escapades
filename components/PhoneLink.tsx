import React from 'react';

interface PhoneLinkProps {
  number: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  showIcon?: boolean;
  isButton?: boolean;
}

export const PhoneLink: React.FC<PhoneLinkProps> = ({ 
  number, 
  label, 
  className = "", 
  style = {}, 
  showIcon = true,
  isButton = false
}) => {
  const handleClick = () => {
    // Standardized logging for interaction tracking
    console.log(`[Interaction] Call initiated to ${label}: ${number}`);
  };

  // Remove spaces and non-numeric characters for tel: protocol while keeping '+'
  const cleanNumber = number.replace(/[^\d+]/g, '');

  return (
    <a 
      href={`tel:${cleanNumber}`}
      className={`inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 group/phone ${isButton ? 'phone-button' : ''} ${className}`}
      style={style}
      title={`Call ${label}: ${number}`}
      onClick={handleClick}
      aria-label={`Call ${label} at ${number}`}
      rel="nofollow"
    >
      {showIcon && <span className="group-hover/phone:animate-bounce" role="img" aria-hidden="true">📞</span>}
      <span className="whitespace-nowrap">{number}</span>
    </a>
  );
};