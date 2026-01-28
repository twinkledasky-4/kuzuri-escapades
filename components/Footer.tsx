import React from 'react';
import { PhoneLink } from './PhoneLink.tsx';
import { Instagram, Facebook, Globe } from 'lucide-react';

interface FooterProps {
  onEnquire?: () => void;
  onAdminAccess?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onEnquire, onAdminAccess }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1412] pt-32 pb-16 px-8 md:px-16 selection:bg-[#D4AF37] selection:text-[#1A1412]">
      <div className="max-w-[1700px] mx-auto">
        {/* Main Footer Architecture: 3-Column Vertical Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-12 items-start mb-32 border-b border-white/5 pb-24">
          
          {/* Column 1: Branding Lockup */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-serif font-bold text-4xl md:text-5xl tracking-tighter text-[#D4AF37]">
              KUZURI <br />
              <span className="italic font-light">Escapades</span>
            </h3>
            <p className="text-[#FFFFFF] text-[13px] md:text-sm font-light tracking-[0.1em] leading-relaxed max-w-[280px] opacity-90 font-sans italic">
              Native curators of silence, cultural heritage, and deep wilderness immersion.
            </p>
          </div>

          {/* Column 2: THE MANIFEST DESK (Center) */}
          <div className="flex flex-col items-center text-center">
            <div className="space-y-10 w-full max-w-sm">
              <h4 className="text-[#D4AF37] font-serif text-2xl md:text-3xl font-bold tracking-tight uppercase">
                THE MANIFEST DESK
              </h4>
              <div className="flex flex-col items-center space-y-5">
                <a 
                  href="mailto:info@kuzuriescapades.com" 
                  className="text-[#FFFFFF] hover:text-[#D4AF37] text-lg md:text-xl font-sans font-medium transition-all duration-500 tracking-tight"
                >
                  info@kuzuriescapades.com
                </a>
                <div className="space-y-3">
                  <PhoneLink 
                    number="+256 708 012030" 
                    label="Primary Line"
                    className="text-[#FFFFFF] hover:text-[#D4AF37] text-lg md:text-xl font-sans font-medium transition-all duration-500 tracking-tight block"
                    showIcon={false}
                  />
                  <PhoneLink 
                    number="+256 760 419271" 
                    label="Support Line"
                    className="text-[#FFFFFF] hover:text-[#D4AF37] text-lg md:text-xl font-sans font-medium transition-all duration-500 tracking-tight block"
                    showIcon={false}
                  />
                </div>
                <p className="text-[#FFFFFF] text-[11px] uppercase tracking-[0.4em] font-bold pt-4 leading-loose opacity-80">
                  Wamvamuno Road,<br />
                  Kampala, Uganda
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: CONNECTIONS (Right) */}
          <div className="flex flex-col items-center lg:items-end space-y-12">
            <div className="space-y-8 text-center lg:text-right">
              <h4 className="text-[#D4AF37] font-serif text-2xl md:text-3xl font-bold tracking-tight uppercase">
                CONNECTIONS
              </h4>
              <div className="flex items-center justify-center lg:justify-end gap-10">
                <a href="#" className="text-[#D4AF37] hover:text-white transition-all duration-500" aria-label="Instagram">
                  <Instagram size={28} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-[#D4AF37] hover:text-white transition-all duration-500" aria-label="TripAdvisor">
                  <Globe size={28} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-[#D4AF37] hover:text-white transition-all duration-500" aria-label="Facebook">
                  <Facebook size={28} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <button 
              onClick={onEnquire}
              className="px-14 py-6 bg-[#D4AF37] text-[#1A1412] text-[10px] uppercase tracking-[0.8em] font-black hover:bg-white transition-all duration-700 shadow-xl"
            >
              Start Your Manifest
            </button>
          </div>
        </div>

        {/* Bottom Bar: Legal & License */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">
              © {currentYear} KUZURI ESCAPADES.
            </p>
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/10 hover:text-[#D4AF37] transition-colors">Privacy Manifest</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/10 hover:text-[#D4AF37] transition-colors">Terms of Stewardship</a>
          </div>

          <div className="flex items-center gap-10 text-center md:text-right">
            {onAdminAccess && (
              <button 
                onClick={onAdminAccess} 
                className="text-[9px] uppercase tracking-[0.4em] font-black text-white/5 hover:text-[#D4AF37] transition-colors"
              >
                CURATOR PORTAL
              </button>
            )}
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/20 relative">
                 <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-20" />
               </div>
               <span className="text-[9px] uppercase tracking-[0.4em] font-black text-white/10">UTB/KE/2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};