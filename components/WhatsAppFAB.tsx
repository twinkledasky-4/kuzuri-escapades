import React from 'react';
import { Phone } from 'lucide-react';

export const WhatsAppFAB: React.FC = () => {
  return (
    <a 
      href="tel:+256708012030"
      className="whatsapp-float-button-refined group"
      title="Call our Curators"
      aria-label="Call our Curators"
    >
      <Phone 
        className="w-[28px] h-[28px] text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
      />
    </a>
  );
};