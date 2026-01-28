import React, { useState, useEffect, useRef } from 'react';
import { AppSection } from '../types.ts';
import { UI_DICTIONARY } from '../services/translationService.ts';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  onEnquire: () => void;
  currentLang: string;
  onLangChange: (langCode: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onEnquire, currentLang, onLangChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
    { id: AppSection.HOME, label: ui.about },
    { id: AppSection.PLANNER, label: ui.tours },
    { id: AppSection.ACCOMMODATIONS, label: ui.accommodations },
    { id: AppSection.SERVICES, label: ui.services },
    { id: AppSection.CONTACT, label: ui.contact }
  ];

  const handleNavClick = (id: AppSection) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  const languages = [
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'DA', label: 'Dansk', flag: '🇩🇰' },
    { code: 'NL', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'NO', label: 'Norsk', flag: '🇳🇴' },
    { code: 'ES', label: 'Español', flag: '🇪🇸' },
    { code: 'SV', label: 'Svenska', flag: '🇸🇪' }
  ];

  const activeLangObj = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 transition-all duration-500 select-none z-[9999] ${
          isScrolled ? 'bg-white py-4 shadow-2xl border-b border-black/5' : 'bg-[#1A1A1A]/40 py-8 backdrop-blur-sm'
        }`}
        style={{ position: 'fixed', zIndex: 9999 }}
      >
        <div className="max-w-[1700px] mx-auto px-8 md:px-16 flex justify-between items-center">
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick(AppSection.HOME)}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className={`h-11 w-11 flex items-center justify-center border-2 transition-all duration-500 ${isScrolled ? 'border-[#1A1A1A] bg-[#1A1A1A]' : 'border-[#D4AF37] bg-white'}`}>
               <span className="font-serif text-2xl font-black text-[#D4AF37]">K</span>
            </div>
            <span className={`hidden lg:inline font-sans text-xl tracking-tight font-black uppercase transition-colors ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#D4AF37]'}`}>
              Kuzuri Escapades
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-12 xl:gap-20">
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm uppercase tracking-[0.25em] font-black transition-all hover:text-[#D4AF37] ${
                    isScrolled 
                      ? (activeSection === item.id ? 'text-[#8B5A2B]' : 'text-[#1A1A1A]') 
                      : (activeSection === item.id ? 'text-white' : 'text-[#D4AF37]')
                  }`}
                  style={{ opacity: 1 }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Controls Section */}
            <div className="flex items-center gap-6 md:gap-10">
              {/* Language Switcher */}
              <div className="relative" ref={langRef}>
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  onMouseEnter={() => setLangOpen(true)}
                  className={`flex items-center gap-2 md:gap-3 text-sm font-black tracking-widest uppercase transition-colors hover:text-white ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#D4AF37]'}`}
                  style={{ opacity: 1 }}
                >
                  <span className="text-lg">{activeLangObj.flag}</span>
                  <span className="hidden sm:inline">{activeLangObj.code}</span>
                  <svg className={`w-3 h-3 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {langOpen && (
                  <div 
                    className="absolute top-full right-0 mt-4 w-60 bg-white border-2 border-[#1A1A1A] py-3 shadow-2xl animate-fade-in-up"
                    onMouseLeave={() => setLangOpen(false)}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLangChange(lang.code);
                          setLangOpen(false);
                        }}
                        className="w-full flex items-center gap-5 px-6 py-4 text-left hover:bg-[#FAF8F3] transition-colors group"
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${currentLang === lang.code ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'}`}>
                          {lang.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Inquiry Button */}
              <button 
                onClick={onEnquire}
                className={`hidden md:block px-10 py-4 text-[11px] uppercase tracking-[0.4em] font-black transition-all border-2 ${
                  isScrolled 
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                    : 'bg-[#D4AF37] text-[#1A1A1A] border-[#D4AF37]'
                } hover:bg-white hover:text-[#1A1A1A] hover:border-white shadow-lg`}
                style={{ opacity: 1 }}
              >
                {ui.inquire}
              </button>

              {/* Mobile Burger Menu */}
              <button 
                className="lg:hidden flex flex-col gap-2 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className={`w-8 h-1 ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-[#D4AF37]'}`} />
                <div className={`w-8 h-1 ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-[#D4AF37]'}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[10000] bg-white transition-transform duration-700 ease-[cubic-bezier(0.19, 1, 0.22, 1)] transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setMenuOpen(false)}
          className="absolute top-10 right-10 text-[#1A1A1A] p-4"
        >
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-12 px-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase hover:text-[#D4AF37] transition-all ${
                activeSection === item.id ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-16 w-full max-w-sm">
            <button 
              onClick={() => { onEnquire(); setMenuOpen(false); }}
              className="w-full py-8 bg-[#1A1A1A] text-white text-xs uppercase tracking-[1em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl"
            >
              {ui.inquire}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};