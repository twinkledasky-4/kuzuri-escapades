import React, { useState, useEffect } from 'react';
import { AppSection } from '../types.ts';
import { Instagram, Facebook, Menu, X, ArrowRight } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: AppSection.HOME, label: "Home", href: '#home' },
    { id: AppSection.PLANNER, label: "Signature Itineraries", href: '#kuzuri-tours' },
    { id: AppSection.ABOUT, label: "Expedition Intel", href: '#discover-uganda' },
    { id: AppSection.CONTACT, label: "Contact Us", href: '#contact-us' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: AppSection) => {
    e.preventDefault();
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const handleJinjaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onEnquire(); // Using enquiry as the trigger for the high-priority staycation interest
    setIsMobileMenuOpen(false);
  };

  const logoUrl = 'https://i.postimg.cc/nrcnnVL1/unnamed-(1).jpg';
  const mailtoLink = "mailto:hello@kuzuri-escapedes.com";

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
          
          {/* Logo return home */}
          <div 
            onClick={(e) => handleNavClick(e, AppSection.HOME)}
            className="cursor-pointer group shrink-0"
            aria-label="Return to Home"
          >
            <div className="relative w-[65px] md:w-[95px] aspect-square transition-all duration-700 group-hover:scale-105 rounded-[12px] md:rounded-[15px] overflow-hidden border-2 border-white/20 shadow-2xl bg-white">
               <img 
                src={logoUrl} 
                alt="Kuzuri Escapades Official Logo" 
                className="w-full h-full object-cover transition-all duration-500 rounded-[12px] md:rounded-[15px]"
                style={{ 
                  filter: isScrolled 
                    ? 'contrast(1.1)' 
                    : 'drop-shadow(0 0 15px rgba(255,255,255,0.4))'
                }}
               />
            </div>
          </div>
          
          <div className="flex items-center gap-6 md:gap-10 xl:gap-14">
            {/* Desktop Navigation */}
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

            <div className="flex items-center gap-4 md:gap-8">
              {/* Desktop Socials */}
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

              {/* Desktop Inquire Button */}
              <a 
                href={mailtoLink} 
                target="_self"
                className={`hidden md:block px-8 py-2.5 text-[10px] text-center uppercase tracking-[5px] font-black transition-all duration-700 shadow-2xl active:scale-95 border-none whitespace-nowrap no-underline cursor-pointer ${
                  isScrolled ? 'bg-[#1A1A1A] text-white hover:bg-[#8B5A2B]' : 'bg-[#D4AF37] text-[#1A1A1A] hover:bg-white'
                }`}
              >
                Inquire
              </a>

              {/* Mobile Menu Toggle Button: Clean Hamburger Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-3 rounded-full transition-all duration-500 hover:scale-110 active:scale-95 border border-white/10 ${
                  isScrolled ? 'bg-[#1A1A1A] text-white shadow-xl' : 'bg-white/10 text-white backdrop-blur-md'
                }`}
                aria-label="Open Mobile Navigation"
              >
                <Menu size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation Menu */}
      <div 
        className={`fixed inset-0 z-[10000] lg:hidden transition-all duration-700 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div 
          className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sidebar Container: Slides in from the right */}
        <div 
          className={`absolute inset-y-0 right-0 w-[310px] md:w-[420px] bg-[#1A1412] shadow-[-20px_0_60px_rgba(0,0,0,0.8)] border-l border-[#D4AF37]/20 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-8 flex justify-between items-center border-b border-white/5 bg-black/40">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center p-1 shadow-xl">
                  <img src={logoUrl} alt="Kuzuri Logo" className="w-full h-full object-contain" />
               </div>
               <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-black leading-none mb-1">Kuzuri</p>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold leading-none">Escapades</p>
               </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 bg-white/5 text-[#D4AF37] hover:text-white transition-all rounded-full border border-white/10"
              aria-label="Close Mobile Navigation"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>

          {/* Navigation Links: Staggered Entry */}
          <div className="flex-grow overflow-y-auto py-12 px-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed opacity-[0.98]">
            <div className="flex flex-col space-y-10">
              {/* Individual menu items with delay */}
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${(idx + 1) * 100}ms` : '0ms' 
                  }}
                  className={`group flex items-center gap-6 transition-all duration-700 transform ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  }`}
                >
                  <span className="text-[#D4AF37] font-serif italic text-lg opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <span className="text-lg md:text-xl font-serif font-bold text-white uppercase tracking-[0.2em] group-hover:text-[#D4AF37] transition-all">
                    {item.label}
                  </span>
                </a>
              ))}

              {/* High Priority: Jinja Staycation */}
              <div 
                 style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}
                 className={`transition-all duration-700 transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
              >
                <a
                  href="#jinja-staycation"
                  onClick={handleJinjaClick}
                  className="group relative inline-flex flex-col p-6 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-sm overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 bg-[#D4AF37] text-black">
                    <p className="text-[7px] font-black uppercase tracking-widest">High Priority</p>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 font-black">Seasonal Exclusive</span>
                  <span className="text-xl font-serif font-bold text-white uppercase tracking-tight group-hover:text-[#D4AF37] transition-colors">
                    Jinja Staycation
                  </span>
                  <div className="mt-4 flex items-center gap-2 text-[9px] text-white/40 uppercase tracking-widest font-bold">
                    Learn more <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile CTA */}
            <div 
              style={{ transitionDelay: isMobileMenuOpen ? '700ms' : '0ms' }}
              className={`mt-16 transition-all duration-1000 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
               <button 
                onClick={(e) => { e.preventDefault(); onEnquire(); setIsMobileMenuOpen(false); }}
                className="w-full py-6 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[0.6em] font-black hover:bg-white transition-all duration-500 shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
               >
                 Author Your Vision
               </button>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-10 border-t border-white/5 bg-black/60 backdrop-blur-lg">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-8">Consult our Curators</p>
            
            <div className="flex flex-col space-y-5 mb-12">
              <a href={mailtoLink} className="text-white hover:text-[#D4AF37] text-sm font-medium transition-colors tracking-tight">
                hello@kuzuri-escapedes.com
              </a>
              <a href="tel:+256708012030" className="text-white hover:text-[#D4AF37] text-sm font-medium transition-colors tracking-widest">
                +256 708 012030
              </a>
            </div>

            <div className="flex items-center gap-10">
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-all"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-all"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-all"><TikTokIcon size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};