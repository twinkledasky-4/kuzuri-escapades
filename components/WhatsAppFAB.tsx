import React from 'react';

export const WhatsAppFAB: React.FC = () => {
  const message = encodeURIComponent(
    "Hello Kuzuri Escapades! I'm interested in planning a bespoke Ugandan journey. Could we discuss available options?"
  );
  
  return (
    <a 
      href={`https://wa.me/256708012030?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-button group"
      title="Chat with our Curators on WhatsApp"
      aria-label="Chat with our Curators on WhatsApp"
    >
      <img 
        src="icons/whatsapp.svg" 
        alt="WhatsApp" 
        className="w-[34px] h-[34px] brightness-0 invert transition-transform duration-500 group-hover:scale-110"
        width={34}
        height={34}
        loading="lazy"
      />
      <span className="absolute inset-0 rounded-full bg-white/40 animate-ping-slow pointer-events-none" />
    </a>
  );
};