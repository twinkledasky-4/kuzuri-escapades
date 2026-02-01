import React, { useState, useEffect } from 'react';
import { AppSection } from '../types.ts';
import { Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  onEnquire: () => void;
}

const TikTokIcon = ({ size = 18, strokeWidth = 1.5 }: { size?: number, strokeWidth?: number }) => (
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

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: AppSection.ABOUT, label: "About", href: '#about-kuzuri' },
    { id: AppSection.PLANNER, label: "Itineraries", href: '#kuzuri-tours' },
    { id: AppSection.SERVICES, label: "Services", href: '#services-section' },
    { id: AppSection.CONTACT, label: "Contact", href: '#contact-us' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: AppSection) => {
    e.preventDefault();
    onNavigate(id);
  };

  const logoUrl = 'https://i.postimg.cc/nrcnnVL1/unnamed-(1).jpg';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 transition-all duration-700 select-none z-[9999] ${
          isScrolled 
            ? 'bg-white shadow-2xl border-b border-black/5 py-2' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="w-full px-6 md:px-12 flex justify-between items-center max-w-[1750px] mx-auto">
          
          <div 
            onClick={(e) => handleNavClick(e, AppSection.HOME)}
            className="cursor-pointer group shrink-0"
          >
            <div className="relative w-[75px] md:w-[95px] aspect-square transition-all duration-700 group-hover:scale-105 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-white">
               <img 
                src={logoUrl} 
                alt="Kuzuri Escapades Official Logo" 
                className="w-full h-full object-cover transition-all duration-500"
                style={{ 
                  filter: isScrolled 
                    ? 'contrast(1.1)' 
                    : 'drop-shadow(0 0 15px rgba(255,255,255,0.4))'
                }}
               />
            </div>
          </div>
          
          <div className="flex items-center gap-10 xl:gap-14">
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-[11px] uppercase tracking-[3px] font-bold transition-all hover:text-[#D4AF37] whitespace-nowrap ${
                    isScrolled 
                      ? (activeSection === item.id ? 'text-[#8B5A2B]' : 'text-[#1A1A1A]') 
                      : (activeSection === item.id ? 'text-white' : 'text-[#D4AF37]')
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden sm:flex items-center gap-6">
                <a href="#" className={`transition-colors ${isScrolled ? 'text-black/40 hover:text-[#D4AF37]' : 'text-white/40 hover:text-[#D4AF37]'}`} aria-label="Instagram">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className={`transition-colors ${isScrolled ? 'text-black/40 hover:text-[#D4AF37]' : 'text-white/40 hover:text-[#D4AF37]'}`} aria-label="Facebook">
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className={`transition-colors ${isScrolled ? 'text-black/40 hover:text-[#D4AF37]' : 'text-white/40 hover:text-[#D4AF37]'}`} aria-label="TikTok">
                  <TikTokIcon size={18} strokeWidth={1.5} />
                </a>
              </div>

              <button 
                onClick={onEnquire}
                className={`hidden md:block px-8 py-2.5 text-[10px] uppercase tracking-[5px] font-black transition-all duration-700 shadow-2xl active:scale-95 border-none whitespace-nowrap ${
                  isScrolled ? 'bg-[#1A1A1A] text-white hover:bg-[#8B5A2B]' : 'bg-[#D4AF37] text-[#1A1A1A] hover:bg-white'
                }`}
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};