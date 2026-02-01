import React, { useState, useEffect, useRef } from 'react';
import { AppSection } from '../types.ts';
import { UI_DICTIONARY } from '../services/translationService.ts';
import { Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  onEnquire: () => void;
  currentLang: string;
  onLangChange: (langCode: string) => void;
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

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onEnquire, currentLang, onLangChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const ui = UI_DICTIONARY[currentLang] || UI_DICTIONARY.EN;

  const navItems = [
    { id: AppSection.ABOUT, label: ui.about, href: '#about-kuzuri' },
    { id: AppSection.PLANNER, label: ui.tours, href: '#kuzuri-tours' },
    { id: AppSection.SERVICES, label: ui.services, href: '#services-section' },
    { id: AppSection.CONTACT, label: ui.contact, href: '#contact-us' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: AppSection) => {
    e.preventDefault();
    onNavigate(id);
  };

  const languages = [
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ES', label: 'Español', flag: '🇪🇸' }
  ];

  const activeLangObj = languages.find(l => l.code === currentLang) || languages[0];

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

              <div className="relative" ref={langRef}>
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center px-4 py-2 border transition-all duration-300 ${isScrolled ? 'border-black/10 text-black hover:bg-black/5' : 'border-[#D4AF37]/30 text-white hover:bg-white/10'}`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[3px]">{activeLangObj.code}</span>
                </button>

                {langOpen && (
                  <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-black/10 shadow-3xl animate-fade-in py-3 z-[10000]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLangChange(lang.code);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-8 py-4 text-xs font-bold uppercase tracking-[2px] transition-colors hover:bg-[#FAF8F3] ${currentLang === lang.code ? 'text-[#8B5A2B] bg-[#FAF8F3]' : 'text-[#1A1A1A]'}`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-lg">{lang.flag}</span> 
                          {lang.label}
                        </span>
                        {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={onEnquire}
                className={`hidden md:block px-8 py-2.5 text-[10px] uppercase tracking-[5px] font-black transition-all duration-700 shadow-2xl active:scale-95 border-none whitespace-nowrap ${
                  isScrolled ? 'bg-[#1A1A1A] text-white hover:bg-[#8B5A2B]' : 'bg-[#D4AF37] text-[#1A1A1A] hover:bg-white'
                }`}
              >
                {ui.inquire}
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