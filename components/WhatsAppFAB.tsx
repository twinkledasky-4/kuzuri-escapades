import React from 'react';

export const WhatsAppFAB: React.FC = () => {
  const message = encodeURIComponent(
    "Hello Kuzuri Escapades, I am interested in authoring my Ugandan vision."
  );
  
  return (
    <a 
      href={`https://wa.me/256708012030?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-button-refined"
      title="Consult our Curators on WhatsApp"
      aria-label="Consult our Curators on WhatsApp"
    >
      <img 
        src="icons/whatsapp.svg" 
        alt="WhatsApp" 
        className="w-[28px] h-[28px] brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
        width={28}
        height={28}
        loading="lazy"
      />
    </a>
  );
};