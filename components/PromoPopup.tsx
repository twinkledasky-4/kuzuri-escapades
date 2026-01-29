
import React, { useEffect, useState } from 'react';
import { X, Waves } from 'lucide-react';

interface PromoPopupProps {
  onClose: () => void;
  onEnquire: () => void;
}

export const PromoPopup: React.FC<PromoPopupProps> = ({ onClose, onEnquire }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger the entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleReserveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    onEnquire();
  };

  return (
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center px-6 md:px-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop: Deep Dark Overlay */}
      <div 
        className="absolute inset-0 bg-[#1A1A1A]/95" 
        onClick={onClose}
      />
      
      {/* Modal Container: Editorial Card with Visual Header */}
      <div className={`relative w-full max-w-xl bg-white overflow-hidden flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-1000 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'}`}>
        
        {/* Close Button: High Visibility Circular Design */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[120] flex items-center justify-center w-10 h-10 bg-[#1A1A1A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl rounded-full border border-[#D4AF37]/20"
          aria-label="Dismiss Promotion"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* 1. VISUAL TOP SECTION: Nile Sunset with Darkened Overlay & Gold Title */}
        <div className="relative w-full h-[320px] overflow-hidden shrink-0 flex flex-col items-center justify-center text-center">
          <img 
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=1200" 
            alt="Sunset over the River Nile, Jinja"
            className="absolute inset-0 w-full h-full object-cover brightness-90 scale-105"
          />
          
          {/* Light Darkened Overlay: Ensures gold text is razor-sharp */}
          <div className="absolute inset-0 bg-black/45 z-[1]" />
          
          {/* Content Overlaid on Image */}
          <div className="relative z-10 px-10 flex flex-col items-center">
            {/* Tag: Strictly 30px from top of card (relative to container) */}
            <p className="absolute -top-[90px] text-[#D4AF37] uppercase tracking-[0.3em] text-[9px] font-black drop-shadow-md">
              LIMITED SEASONAL OFFER
            </p>

            {/* Location with elegant 'River Nile' icon */}
            <div className="flex items-center gap-3 mb-4 drop-shadow-lg">
              <Waves size={16} className="text-[#D4AF37]" strokeWidth={2} />
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-[#D4AF37]">
                Jinja, Uganda
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#D4AF37] tracking-[0.02em] leading-[1.1] mb-4 uppercase drop-shadow-2xl">
              Staycation
            </h2>
            <p className="italic font-light text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/90 drop-shadow-lg">
              10th — 12th April 2026
            </p>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: Details and Features (Centered in white space) */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-[50px] py-10 bg-white relative">
          <p className="text-[#1A1A1A] text-base font-normal leading-relaxed tracking-wide mb-10 opacity-90 max-w-lg">
            A refreshing three-day retreat at the Source of the Nile. Experience a weekend of absolute silence, native luxury, and the thundering rhythm of the mighty river.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-md">
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]">
              <div className="w-4 h-[1px] bg-[#D4AF37]" /> Private Suite
            </div>
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]">
              <div className="w-4 h-[1px] bg-[#D4AF37]" /> Sunset Cruise
            </div>
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]">
              <div className="w-4 h-[1px] bg-[#D4AF37]" /> Forest Walk
            </div>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: Primary CTA and Footer Metadata */}
        <div className="pb-[40px] px-[50px] flex flex-col items-center gap-6 w-full shrink-0">
          <a 
            href="#contact-us"
            onClick={handleReserveClick}
            className="w-full max-w-xs py-6 bg-[#1A1A1A] text-[#D4AF37] text-center text-[10px] uppercase tracking-[0.6em] font-black hover:bg-[#8B5A2B] hover:text-white transition-all duration-700 shadow-xl active:scale-95 border border-transparent"
          >
            RESERVE YOUR BLISS
          </a>
          
          <p className="text-[8px] text-[#1A1A1A]/40 uppercase tracking-[0.4em] font-bold text-center">
            Direct Booking Open • Secured Reservations Only
          </p>
        </div>
      </div>
    </div>
  );
};
