import React from 'react';
import { PhoneLink } from './PhoneLink.tsx';

interface FooterProps {
  onEnquire?: () => void;
  onAdminAccess?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onEnquire, onAdminAccess }) => {
  const message = "Hi Kuzuri Escapades! I'm interested in booking a tour.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <footer 
      className="border-t-2 border-black py-16 selection:bg-[#D4AF37] selection:text-[#1A1A1A]" 
      style={{ backgroundColor: '#654321', color: '#F5F5DC' }}
      aria-label="Kuzuri Site Footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          
          {/* Column 1: Company Branding */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-2xl tracking-[0.2em] uppercase" style={{ color: '#D4AF37' }}>
              KUZURI <span className="italic font-light text-white/90">ESCAPADES</span>
            </h3>
            <p className="text-base font-medium leading-relaxed opacity-95">
              Uganda's Premier Luxury Travel Specialist. <br />
              Native curators of silence, elegance, and deep wilderness immersion.
            </p>
            <div className="pt-6 border-t border-[#F5F5DC]/10">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-bold mb-2">Native Stewardship</p>
              <p className="text-sm font-bold opacity-80 italic">Crafting extraordinary safari experiences since 2014.</p>
            </div>
          </div>

          {/* Column 2: Refined Contact Information */}
          <div className="space-y-8">
            <h3 className="font-bold text-xl tracking-widest uppercase flex items-center gap-3" style={{ color: '#D4AF37' }}>
              <span>📧</span> CONTACT US
            </h3>
            
            {/* Email Contact */}
            <div className="group">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-75 mb-2 font-bold">Official Manifest Desk</p>
              <a 
                href="mailto:info@kuzuri-escapades.com"
                className="text-base hover:text-[#D4AF37] transition-all underline underline-offset-8 decoration-white/20 hover:decoration-[#D4AF37]"
              >
                info@kuzuri-escapades.com
              </a>
            </div>

            {/* Prominent Primary Phone */}
            <div className="group">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-75 mb-3 font-bold">Primary Curator Line</p>
              <PhoneLink 
                number="+256 708 012030" 
                label="Primary Line"
                className="text-2xl font-bold tracking-widest hover:text-[#D4AF37]"
                showIcon={true}
              />
            </div>

            {/* Alternative Secondary Phone */}
            <div className="group opacity-80 hover:opacity-100 transition-opacity">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-75 mb-2 font-bold">Alternative Support</p>
              <PhoneLink 
                number="+256 760 419271" 
                label="Secondary Line"
                className="text-sm font-medium hover:text-[#D4AF37]"
                showIcon={true}
              />
            </div>
          </div>

          {/* Column 3: Connections & Call to Action */}
          <div className="space-y-8">
            <h3 className="font-bold text-xl tracking-widest uppercase" style={{ color: '#D4AF37' }}>
              CONNECT
            </h3>
            
            <div className="space-y-4">
              {/* WhatsApp CTA - High Visibility Official Brand Colors */}
              <a 
                href={`https://wa.me/256708012030?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 px-8 py-5 rounded-sm border-2 border-black transition-all hover:scale-[1.03] active:scale-95 shadow-xl group"
                style={{ backgroundColor: '#25D366', color: 'white' }}
                title="Message our curators on WhatsApp"
              >
                <span className="text-2xl group-hover:animate-bounce" role="img" aria-label="WhatsApp">💬</span>
                <span className="text-[11px] uppercase tracking-[0.5em] font-black">WhatsApp Chat</span>
              </a>

              {/* Manifest Inquiry Button */}
              <button 
                onClick={onEnquire}
                className="w-full py-5 border-2 border-[#F5F5DC]/20 bg-transparent text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-[#F5F5DC]/10 hover:border-[#F5F5DC] transition-all duration-500"
              >
                Request Manifest
              </button>

              {/* Social Icons */}
              <div className="flex gap-10 mt-10 justify-center md:justify-start opacity-80">
                <a href="#" className="text-3xl hover:text-[#D4AF37] transition-all transform hover:-translate-y-1" title="Instagram">📸</a>
                <a href="#" className="text-3xl hover:text-[#D4AF37] transition-all transform hover:-translate-y-1" title="Facebook">📘</a>
                <a href="#" className="text-3xl hover:text-[#D4AF37] transition-all transform hover:-translate-y-1" title="TripAdvisor">🦉</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Base Bar */}
        <div 
          className="border-t pt-10 flex flex-col md:flex-row justify-between items-center gap-8" 
          style={{ borderColor: 'rgba(212, 175, 55, 0.25)' }}
        >
          <div className="text-center md:text-left text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
            <p>© 2024 Kuzuri Escapades. All Rights Reserved. | Uganda Tourism License #KE-2024-001</p>
          </div>
          
          <div className="flex gap-8 items-center">
            {onAdminAccess && (
              <button 
                onClick={onAdminAccess}
                className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 hover:opacity-100 transition-opacity"
              >
                Curator Portal
              </button>
            )}
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-20 italic">
              Native Stewardship
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};