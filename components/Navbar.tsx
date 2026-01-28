
import React, { useState, useEffect, useRef } from 'react';
import { AppSection } from '../types.ts';
import { UI_DICTIONARY } from '../services/translationService.ts';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

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
    { id: AppSection.ABOUT, label: ui.about, href: '#about-kuzuri' },
    { id: AppSection.PLANNER, label: ui.tours, href: '#kuzuri-tours' },
    { id: AppSection.ACCOMMODATIONS, label: ui.accommodations, href: '#' },
    { id: AppSection.SERVICES, label: ui.services, href: '#services-section' },
    { id: AppSection.CONTACT, label: ui.contact, href: '#contact-us' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: AppSection) => {
    e.preventDefault();
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
      >
        <div className="max-w-[1700px] mx-auto px-8 md:px-16 flex justify-between items-center">
          {/* Logo Section */}
          <div 
            onClick={(e) => handleNavClick(e, AppSection.HOME)}
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
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm uppercase tracking-[0.25em] font-black transition-all hover:text-[#D4AF37] ${
                    isScrolled 
                      ? (activeSection === item.id ? 'text-[#8B5A2B]' : 'text-[#1A1A1A]') 
                      : (activeSection === item.id ? 'text-white' : 'text-[#D4AF37]')
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {/* Language Selector */}
              <div className="relative" ref={langRef}>
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-2 px-4 py-2 border transition-all duration-300 ${isScrolled ? 'border-black/10 text-black hover:bg-black/5' : 'border-white/20 text-white hover:bg-white/10'}`}
                >
                  <Globe size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{activeLangObj.code}</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </button>

                {langOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-black/10 shadow-2xl animate-fade-in py-2 overflow-hidden z-[10000]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLangChange(lang.code);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-[#FAF8F3] ${currentLang === lang.code ? 'text-[#8B5A2B] bg-[#FAF8F3]' : 'text-[#1A1A1A]'}`}
                      >
                        <span>{lang.flag} {lang.label}</span>
                        {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-[#8B5A2B]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Inquire Button */}
              <button 
                onClick={onEnquire}
                className={`hidden md:block px-8 py-3 text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-500 shadow-xl active:scale-95 ${
                  isScrolled ? 'bg-[#1A1A1A] text-white hover:bg-[#8B5A2B]' : 'bg-[#D4AF37] text-[#1A1A1A] hover:bg-white'
                }`}
              >
                {ui.inquire}
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#1A1A1A] transition-all duration-700 z-[9998] lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-2xl uppercase tracking-[0.5em] font-black transition-all ${activeSection === item.id ? 'text-[#D4AF37]' : 'text-white'}`}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => {
                onEnquire();
                setMenuOpen(false);
              }}
              className="px-12 py-6 bg-[#D4AF37] text-[#1A1A1A] text-[12px] uppercase tracking-[0.8em] font-black"
            >
              {ui.inquire}
            </button>
          </div>
        </div>
      </nav>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};
