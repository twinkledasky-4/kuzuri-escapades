import React from 'react';
import { PhoneLink } from './PhoneLink.tsx';
import { Instagram, Facebook, Globe, ShieldCheck, Landmark, Smartphone, Phone } from 'lucide-react';

interface FooterProps {
  onEnquire?: () => void;
  onAdminAccess?: () => void;
  onPaymentPortal?: () => void;
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

export const Footer: React.FC<FooterProps> = ({ onEnquire, onAdminAccess, onPaymentPortal }) => {
  const currentYear = new Date().getFullYear();
  const mailtoLink = "mailto:info@kuzuri-escapades.com";

  const SignatureCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`relative bg-white rounded-xl shadow-sm overflow-hidden group ${className}`}>
      {/* Subtle Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
        {children}
      </div>
    </div>
  );

  return (
    <footer id="contact-us" className="bg-[#333a3d] pt-24 pb-12 px-8 md:px-16 selection:bg-[#D4AF37] selection:text-[#333a3d] scroll-mt-[120px] text-white">
      <div className="max-w-[1700px] mx-auto">
        {/* Row of 4 Shrunken White Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Box 1: ONLINE PAYMENT */}
          <div className="bg-white rounded-[12px] flex items-center justify-center h-[140px] shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden group">
            <img 
              src="https://i.postimg.cc/yd59GFFR/payment_(1).png" 
              alt="Visa, Mastercard, Amex, Discover" 
              className="w-[90%] h-[90%] object-contain transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Box 2: OUR PARTNERS */}
          <div className="bg-white rounded-[12px] flex items-center justify-center h-[140px] shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden group">
            <img 
              src="https://i.postimg.cc/7PG34BYw/utb_(1).png" 
              alt="UTB, UWA, AUTO" 
              className="w-[90%] h-[90%] object-contain transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Box 3: TRIPADVISOR */}
          <div className="bg-white rounded-[12px] flex items-center justify-center h-[140px] shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden group">
            <img 
              src="https://i.postimg.cc/zfvLjByZ/tripa_(1).png" 
              alt="TripAdvisor" 
              className="w-[90%] h-[90%] object-contain transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Box 4: SAFARIBOOKINGS */}
          <a 
            href="https://www.safaribookings.com/p7981" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-[12px] flex items-center justify-center h-[140px] shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-[#D4AF37]/50 overflow-hidden group"
          >
            <img 
              src="https://i.postimg.cc/vmCmtvRD/safari_(1).png" 
              alt="SafariBookings" 
              className="w-[90%] h-[90%] object-contain transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-start mb-20 border-b border-white/10 pb-20">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-8">
            <h3 className="font-serif font-bold text-3xl tracking-tighter text-white uppercase">
              KUZURI <br />
              <span className="italic font-light lowercase">Escapades</span>
            </h3>
            <p className="text-white/60 text-[13px] font-light tracking-wide leading-relaxed max-w-[280px]">
              Native curators of silence, cultural heritage, and deep wilderness immersion. We craft journeys that are as profound as the roar of a lion and as silent as the mist over Bwindi.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.tiktok.com/@kuzuriescapades?_r=1&_t=ZS-94SeJIdyLdh" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-300" aria-label="TikTok">
                <TikTokIcon size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col space-y-8">
            <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase">
              CONTACT US
            </h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Email</p>
                <a href={mailtoLink} className="text-white/80 hover:text-[#D4AF37] text-[14px] transition-colors block">
                  info@kuzuri-escapades.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">WhatsApp / Phone</p>
                <a 
                  href="tel:+256708012030" 
                  className="text-white/80 hover:text-[#D4AF37] text-[14px] transition-colors block mb-1"
                >
                  +256 708 012030
                </a>
                <PhoneLink 
                  number="+256 708 012030" 
                  label="Nasif - Lead Curator"
                  className="text-white/40 hover:text-[#D4AF37] text-[11px] transition-colors block"
                  showIcon={false}
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">The Studio</p>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  Ham Towers Wandegeya, Room H:12,<br />
                  Kampala, Uganda
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Security & Trust */}
          <div className="flex flex-col space-y-8">
            <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase">
              SECURE BOOKING
            </h4>
            <div className="space-y-6">
              <p className="text-white/50 text-[12px] leading-relaxed">
                Your data is protected by industry-standard SSL encryption. We ensure every transaction is safe and your personal information remains confidential.
              </p>
              <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                <ShieldCheck size={32} className="text-[#D4AF37] shrink-0" />
                <div>
                  <p className="text-white text-[10px] font-black uppercase tracking-widest">SSL SECURED</p>
                  <p className="text-white/40 text-[8px] uppercase tracking-widest">256-bit Encryption</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
             <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
              © {currentYear} KUZURI ESCAPADES.
            </p>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 hover:text-[#D4AF37] transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="/pay"
              onClick={(e) => { e.preventDefault(); onPaymentPortal?.(); }} 
              className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10 hover:text-[#D4AF37] transition-colors no-underline cursor-pointer"
            >
              PAYMENT PORTAL
            </a>
            <div className="flex items-center gap-3">
               <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
               <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/20">UTB/KE/2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};