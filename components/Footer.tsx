import React from 'react';
import { PhoneLink } from './PhoneLink.tsx';
import { Instagram, Facebook, Globe, ShieldCheck, Landmark, Smartphone, Phone } from 'lucide-react';

interface FooterProps {
  onEnquire?: () => void;
  onAdminAccess?: () => void;
}

const TikTokIcon = ({ size = 28, strokeWidth = 1.5 }: { size?: number, strokeWidth?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onEnquire, onAdminAccess }) => {
  const currentYear = new Date().getFullYear();
  // Protocol: Strict raw mailto link. Target Logic: _self.
  const mailtoLink = "mailto:hello@kuzuri-escapedes.com";

  return (
    <footer id="contact-us" className="bg-[#1A1412] pt-32 pb-16 px-8 md:px-16 selection:bg-[#D4AF37] selection:text-[#1A1412] scroll-mt-[120px]">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-12 items-start mb-32 border-b border-white/5 pb-24">
          
          <div className="flex flex-col space-y-6">
            <h3 className="font-serif font-bold text-4xl md:text-5xl tracking-tighter text-[#D4AF37]">
              KUZURI <br />
              <span className="italic font-light">Escapades</span>
            </h3>
            <p className="text-[#FFFFFF] text-[13px] md:text-sm font-light tracking-[0.1em] leading-relaxed max-w-[280px] opacity-90 font-sans italic">
              Native curators of silence, cultural heritage, and deep wilderness immersion.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="space-y-10 w-full max-w-md">
              <h4 className="text-[#D4AF37] font-serif text-2xl md:text-3xl font-bold tracking-tight uppercase">
                THE EXPERIENCE DESK
              </h4>
              <div className="flex flex-col items-center space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-black mb-2">OFFICIAL CORRESPONDENCE</p>
                  <a 
                    href={mailtoLink} 
                    target="_self"
                    className="text-[#FFFFFF] hover:text-[#D4AF37] text-lg md:text-xl font-sans font-medium transition-all duration-500 tracking-tight block no-underline cursor-pointer"
                  >
                    hello@kuzuri-escapedes.com
                  </a>
                </div>

                <div className="space-y-4 w-full">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Phone size={12} className="text-[#D4AF37]/60" />
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-black">OFFICIAL OFFICE LINE (LANDLINE)</p>
                    </div>
                    <PhoneLink 
                      number="0200910729" 
                      label="Landline"
                      className="text-[#FFFFFF] hover:text-[#D4AF37] text-lg md:text-xl font-sans font-medium transition-all duration-500 tracking-tight block"
                      showIcon={false}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Smartphone size={12} className="text-[#D4AF37]/60" />
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-black">PRIMARY MOBILE / WHATSAPP</p>
                    </div>
                    <PhoneLink 
                      number="+256 708 012030" 
                      label="Nasif - Lead Curator"
                      className="text-[#FFFFFF] hover:text-[#D4AF37] text-lg md:text-xl font-sans font-medium transition-all duration-500 tracking-tight block"
                      showIcon={false}
                    />
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Nasif - Lead Curator</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Smartphone size={12} className="text-[#D4AF37]/60" />
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-black">SECONDARY MOBILE</p>
                    </div>
                    <PhoneLink 
                      number="+256 760 419271" 
                      label="Support Line"
                      className="text-[#FFFFFF] hover:text-[#D4AF37] text-lg md:text-xl font-sans font-medium transition-all duration-500 tracking-tight block"
                      showIcon={false}
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/60 font-black">THE STUDIO</p>
                  <p className="text-[#FFFFFF] text-[11px] uppercase tracking-[0.4em] font-bold leading-loose opacity-80">
                    Ham Towers Wandegeya, Room Number H:12,<br />
                    P.O. BOX 202305, Kampala
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end space-y-12">
            <div className="space-y-8 text-center lg:text-right">
              <h4 className="text-[#D4AF37] font-serif text-2xl md:text-3xl font-bold tracking-tight uppercase">
                SOCIALS
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
                <a href="#" className="text-[#D4AF37] hover:text-white transition-all duration-500" aria-label="TikTok">
                  <TikTokIcon size={28} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <a 
              href={mailtoLink}
              target="_self"
              className="px-14 py-6 bg-[#D4AF37] text-[#1A1412] text-[10px] uppercase tracking-[0.8em] font-black hover:bg-white transition-all duration-700 shadow-xl no-underline text-center cursor-pointer border-2 border-transparent"
            >
              Start Your Experience
            </a>
          </div>
        </div>

        <div className="mb-24 py-16 border-b border-white/5 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck size={14} className="text-[#D4AF37]" />
            <h4 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] font-black">
              TRUSTED GLOBAL SETTLEMENTS
            </h4>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 opacity-60 hover:opacity-100 transition-opacity duration-1000 mb-10">
            <svg className="h-5 w-auto text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.9 11h-1.4l-.9 4.3h1.4l.9-4.3zm5.7 0c-.3-.1-.8-.2-1.4-.2-1.3 0-2.3.7-2.3 1.7 0 .8.7 1.2 1.2 1.5.5.3.7.4.7.7 0 .4-.5.6-1 .6-.6 0-1.1-.1-1.6-.4l-.2 1.3c.4.2 1.2.3 1.9.3 1.4 0 2.4-.7 2.4-1.8 0-.6-.4-1.1-1.1-1.4-.4-.2-.7-.4-.7-.6 0-.3.3-.5.9-.5.5 0 .9.1 1.2.2l.2-1.2h-.2zm2.4 0h-1.1c-.3 0-.6.2-.7.5l-2.4 5.4h1.5l.3-.8h1.8l.2.8h1.3l-1.1-5.9h.2zm-1.8 3.5l.6-1.7.4 1.7h-1zm-13-3.5l-1.4 5.9h1.5l1.4-5.9h-1.5zM2 11l-.1.4 1.1 4h1.5l2.1-5.9h-1.5l-1 3.2L3.4 11H2z"/>
            </svg>
            <div className="flex items-center -space-x-3">
              <div className="w-7 h-7 rounded-full border border-[#D4AF37] bg-transparent" />
              <div className="w-7 h-7 rounded-full border border-[#D4AF37] bg-[#D4AF37]/40" />
            </div>
            <div className="px-2 py-1 border border-[#D4AF37] flex items-center justify-center">
              <span className="text-[10px] font-black text-[#D4AF37] tracking-tighter">AMEX</span>
            </div>
            <div className="flex items-center gap-3">
              <Landmark size={20} className="text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-[9px] font-black text-[#D4AF37] tracking-widest uppercase">Bank Wire</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone size={20} className="text-[#D4AF37]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-[#D4AF37] leading-none tracking-tighter uppercase">Mobile Money</span>
                <span className="text-[7px] font-bold text-[#D4AF37]/60 leading-none tracking-tight">MTN | AIRTEL</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] text-[#D4AF37]/70 uppercase tracking-[0.25em] font-black text-center">
              Encrypted & Secure Transactions via Flutterwave & Direct Wire.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">
              © {currentYear} KUZURI ESCAPADES.
            </p>
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/10 hover:text-[#D4AF37] transition-colors">Privacy EXPERIENCE</a>
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