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
  const mailtoLink = "mailto:info@kuzuri-escapedes.com";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start mb-20 border-b border-white/10 pb-20">
          
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
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors" aria-label="TikTok">
                <TikTokIcon size={20} strokeWidth={1.5} />
              </a>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col gap-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Find us on</p>
              <SignatureCard className="w-full max-w-[240px] flex flex-col gap-6 p-6">
                <a href="#" className="block group/item">
                  <img 
                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
                    alt="TripAdvisor" 
                    className="h-6 w-auto group-hover/item:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </a>
                <div className="h-px bg-black/5 w-full" />
                <a href="#" className="block group/item">
                  <div className="flex items-center gap-2 group-hover/item:scale-105 transition-transform">
                    <img 
                      src="https://www.safaribookings.com/img/logo/lion-logo.png" 
                      alt="SafariBookings" 
                      className="h-8 w-auto"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[#1A1A1A] font-bold text-sm tracking-tight">SafariBookings.com</span>
                  </div>
                </a>
              </SignatureCard>
            </div>
          </div>

          {/* Column 2: Our Partners */}
          <div className="flex flex-col space-y-8">
            <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase">
              OUR PARTNERS
            </h4>
            <SignatureCard className="w-full max-w-[280px] p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-4 group/item opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img 
                      src="https://utb.go.ug/sites/default/files/utb-logo.png" 
                      alt="Uganda Tourism Board" 
                      className="w-full h-full object-contain group-hover/item:scale-110 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[#1A1A1A]/60 text-[10px] font-bold tracking-widest uppercase">UTB</span>
                </div>
                
                <div className="h-px bg-black/5 w-full" />
                
                {/* UWA - Center Focus */}
                <div className="flex flex-col gap-3 group/item">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-[#F8F9FA] rounded-lg p-2 shadow-inner">
                      <img 
                        src="https://www.ugandawildlife.org/images/uwa-logo.png" 
                        alt="Uganda Wildlife Authority" 
                        className="w-full h-full object-contain group-hover/item:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#1A1A1A] text-[12px] font-black tracking-widest uppercase">UWA</span>
                      <span className="text-[#D4AF37] text-[8px] font-black tracking-[0.2em] uppercase">Primary Partner</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-[#1A1A1A]/40 font-medium leading-tight">
                    Official Conservation & Wildlife Guardian of the Pearl.
                  </p>
                </div>
                
                <div className="h-px bg-black/5 w-full" />
                
                <div className="flex items-center gap-4 group/item opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img 
                      src="https://ugandatouroperators.org/wp-content/uploads/2021/05/AUTO-Logo.png" 
                      alt="Association of Uganda Tour Operators" 
                      className="w-full h-full object-contain group-hover/item:scale-110 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[#1A1A1A]/60 text-[10px] font-bold tracking-widest uppercase">AUTO</span>
                </div>
              </div>
            </SignatureCard>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-8">
            <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase">
              CONTACT US
            </h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Email</p>
                <a href={mailtoLink} className="text-white/80 hover:text-[#D4AF37] text-[14px] transition-colors block">
                  info@kuzuri-escapedes.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Phone</p>
                <PhoneLink 
                  number="+256 708 012030" 
                  label="Nasif - Lead Curator"
                  className="text-white/80 hover:text-[#D4AF37] text-[14px] transition-colors block"
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

          {/* Column 4: Online Payment */}
          <div className="flex flex-col space-y-8">
            <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase">
              ONLINE PAYMENT
            </h4>
            <div className="space-y-6">
              <p className="text-white/50 text-[12px] leading-relaxed">
                We accept major global payment methods for secure and seamless bookings.
              </p>
              <SignatureCard className="p-6">
                <div className="grid grid-cols-2 gap-6 items-center">
                  {/* Visa */}
                  <div className="h-8 flex items-center justify-center group/item">
                    <svg className="w-full h-full text-[#1A1F71] group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.9 11h-1.4l-.9 4.3h1.4l.9-4.3zm5.7 0c-.3-.1-.8-.2-1.4-.2-1.3 0-2.3.7-2.3 1.7 0 .8.7 1.2 1.2 1.5.5.3.7.4.7.7 0 .4-.5.6-1 .6-.6 0-1.1-.1-1.6-.4l-.2 1.3c.4.2 1.2.3 1.9.3 1.4 0 2.4-.7 2.4-1.8 0-.6-.4-1.1-1.1-1.4-.4-.2-.7-.4-.7-.6 0-.3.3-.5.9-.5.5 0 .9.1 1.2.2l.2-1.2h-.2zm2.4 0h-1.1c-.3 0-.6.2-.7.5l-2.4 5.4h1.5l.3-.8h1.8l.2.8h1.3l-1.1-5.9h.2zm-1.8 3.5l.6-1.7.4 1.7h-1zm-13-3.5l-1.4 5.9h1.5l1.4-5.9h-1.5zM2 11l-.1.4 1.1 4h1.5l2.1-5.9h-1.5l-1 3.2L3.4 11H2z"/>
                    </svg>
                  </div>
                  {/* Mastercard */}
                  <div className="h-8 flex items-center justify-center group/item">
                    <div className="flex items-center -space-x-3 group-hover/item:scale-110 transition-transform">
                      <div className="w-6 h-6 rounded-full bg-[#EB001B] opacity-90" />
                      <div className="w-6 h-6 rounded-full bg-[#F79E1B] opacity-90" />
                    </div>
                  </div>
                  {/* Amex */}
                  <div className="h-8 flex items-center justify-center group/item">
                    <span className="text-[10px] font-black tracking-tighter text-[#016FD0] group-hover/item:scale-110 transition-transform">AMEX</span>
                  </div>
                  {/* Discover */}
                  <div className="h-8 flex items-center justify-center group/item">
                    <span className="text-[9px] font-bold tracking-widest text-[#F47216] group-hover/item:scale-110 transition-transform">DISCOVER</span>
                  </div>
                </div>
              </SignatureCard>
              <div className="flex items-center gap-3 pt-2">
                <ShieldCheck size={14} className="text-[#D4AF37]" />
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Secure SSL Encryption</span>
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
            {onAdminAccess && (
              <button 
                onClick={onAdminAccess} 
                className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10 hover:text-[#D4AF37] transition-colors"
              >
                PORTAL
              </button>
            )}
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