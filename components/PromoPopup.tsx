import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface PromoPopupProps {
  onClose: () => void;
  onEnquire: () => void;
}

export const PromoPopup: React.FC<PromoPopupProps> = ({ onClose, onEnquire }) => {
  const [isVisible, setIsVisible] = useState(false);
  const promoImageUrl = 'https://i.postimg.cc/9M0hrD4J/unnamed-(2).jpg';

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    onClose();
    onEnquire();
  };

  return (
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Elegantly Dimmed Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Container: Very small, elegant 280px width */}
      <div className={`relative w-full max-w-[280px] overflow-hidden flex flex-col shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] border border-white/10 transition-all duration-1000 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'}`}>
        
        {/* Close Button: Discreet and High Contrast */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-[120] flex items-center justify-center w-8 h-8 bg-black/40 text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-full border border-white/10 backdrop-blur-md"
          aria-label="Close Promotion"
        >
          <X size={16} strokeWidth={2.5} />
        </button>

        {/* High-Resolution Gateway */}
        <div 
          className="cursor-pointer group relative bg-white"
          onClick={handleImageClick}
        >
          <img 
            src={promoImageUrl} 
            alt="Kuzuri Escapades Exclusive Offer"
            className="w-full h-auto block transition-transform duration-[4s] group-hover:scale-105"
          />
          
          {/* Signature Gold Border Accent on Hover */}
          <div className="absolute inset-0 border-0 group-hover:border-[6px] border-[#D4AF37]/20 transition-all duration-700 pointer-events-none" />
          
          {/* Subtle Action Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          
          <div className="absolute bottom-0 left-0 right-0 py-3 bg-[#1A1A1A]/80 backdrop-blur-md flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
             <p className="text-[8px] uppercase tracking-[0.6em] font-black text-[#D4AF37]">Explore the Rhythm</p>
          </div>
        </div>

        {/* Minimalist Branding Bar */}
        <div className="bg-[#1A1A1A] py-2 flex justify-center">
          <p className="text-[6px] uppercase tracking-[0.4em] font-bold text-white/30">
            Native Curation • Kuzuri Escapades
          </p>
        </div>
      </div>
    </div>
  );
};