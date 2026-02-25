import React, { useState, useEffect } from 'react';
import { AppSection } from '../types.ts';
import { Menu, X, ArrowRight, Clock, Phone, Mail, MapPin } from 'lucide-react';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  onEnquire: () => void;
}

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
    { id: AppSection.HOME, label: "HOME", href: '#home' },
    { id: AppSection.ABOUT, label: "ABOUT US", href: '#about-kuzuri' },
    { id: AppSection.DESTINATIONS, label: "DESTINATIONS", href: '#discover-uganda' },
    { id: AppSection.GORILLA_SAFARIS, label: "GORILLA SAFARIS", href: '#gorilla-safaris' },
    { id: AppSection.COMBINED_SAFARIS, label: "COMBINED SAFARIS", href: '#combined-safaris' },
    { id: AppSection.FILMING, label: "FILMING", href: '#filming' },
    { id: AppSection.BIRDING, label: "BIRDING", href: '#birding' },
    { id: AppSection.ACCOMMODATIONS, label: "ACCOMMODATION", href: '#accommodations' },
    { id: AppSection.CONTACT, label: "CONTACT US", href: '#contact-us' }
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
  const mailtoLink = "mailto:info@kuzuri-escapedes.com";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 transition-all duration-700 select-none z-[9999] ${
          isScrolled 
            ? 'bg-white shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        {/* Top Bar */}
        <div className={`bg-[#004d00] text-white transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-auto py-2 opacity-100'} hidden md:block`}>
          <div className="w-full px-6 md:px-12 flex justify-between items-center max-w-[1750px] mx-auto text-[10px] font-bold tracking-[0.15em]">
            <div className="flex items-center gap-8 uppercase">
              <div className="flex items-center gap-2.5">
                <Clock size={13} className="text-[#D4AF37]" />
                <span>Mon - Sat 8.00 - 18.00</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={13} className="text-[#D4AF37]" />
                <span>Ham Towers Wandegeya</span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <a href="tel:+256708012030" className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors uppercase">
                <Phone size={13} className="text-[#D4AF37]" />
                <span>+256 708012030</span>
              </a>
              <a href="mailto:info@kuzuri-escapedes.com" className="flex items-center gap-2.5 hover:text-[#D4AF37] transition-colors lowercase">
                <Mail size={13} className="text-[#D4AF37]" />
                <span>info@kuzuri-escapedes.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Area */}
        <div className="w-full transition-all duration-700">
          <div className={`w-full px-6 md:px-12 flex items-center max-w-[1750px] mx-auto transition-all duration-700 ${isScrolled ? 'py-2' : 'py-6'}`}>
            
            {/* Logo return home - Left Aligned */}
            <div 
              onClick={(e) => handleNavClick(e, AppSection.HOME)}
              className="cursor-pointer group shrink-0 z-10"
              aria-label="Return to Home"
            >
              <div className="relative w-[50px] md:w-[70px] transition-all duration-700 group-hover:scale-105 overflow-hidden">
                 <img 
                  src={logoUrl} 
                  alt="Kuzuri Escapades Official Logo" 
                  className="w-full h-auto object-contain transition-all duration-500"
                  style={{ 
                    filter: isScrolled 
                      ? 'contrast(1.1)' 
                      : 'drop-shadow(0 0 10px rgba(255,255,255,0.2))'
                  }}
                 />
              </div>
            </div>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex flex-grow justify-center items-center px-4">
              <div className="flex items-center space-x-2 xl:space-x-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative text-[9px] xl:text-[10px] uppercase tracking-[1px] font-bold transition-all hover:text-[#D4AF37] whitespace-nowrap py-1 px-1 ${
                      isScrolled 
                        ? (activeSection === item.id ? 'text-[#8B5A2B]' : 'text-[#1A1A1A]') 
                        : 'text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4 md:gap-6 shrink-0 z-10">
              {/* Desktop Inquire Button */}
              <a 
                href={mailtoLink} 
                target="_self"
                className={`hidden md:block px-6 py-2 text-[9px] text-center uppercase tracking-[3px] font-black transition-all duration-700 shadow-md active:scale-95 border-none whitespace-nowrap no-underline cursor-pointer ${
                  isScrolled ? 'bg-[#1A1A1A] text-white hover:bg-[#8B5A2B]' : 'bg-[#D4AF37] text-[#1A1A1A] hover:bg-white'
                }`}
              >
                Inquire
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-3 rounded-full transition-all duration-500 hover:scale-110 active:scale-95 ${
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
          className={`absolute inset-y-0 right-0 w-[310px] md:w-[420px] bg-[#1A1412] shadow-[-20px_0_60px_rgba(0,0,0,0.8)] flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-8 flex justify-between items-center bg-black/40">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 flex items-center justify-center">
                  <img src={logoUrl} alt="Kuzuri Logo" className="w-full h-full object-contain" />
               </div>
               <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-black leading-none mb-1">Kuzuri</p>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold leading-none">Escapades</p>
               </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 bg-white/5 text-[#D4AF37] hover:text-white transition-all rounded-full"
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
                 style={{ transitionDelay: isMobileMenuOpen ? `${(navItems.length + 1) * 100}ms` : '0ms' }}
                 className={`transition-all duration-700 transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
              >
                <a
                  href="#jinja-staycation"
                  onClick={handleJinjaClick}
                  className="group relative inline-flex flex-col p-6 bg-[#D4AF37]/5 rounded-sm overflow-hidden"
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
          <div className="p-10 bg-black/60 backdrop-blur-lg">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-8">Consult our Curators</p>
            
            <div className="flex flex-col space-y-5 mb-12">
              <a href={mailtoLink} className="text-white hover:text-[#D4AF37] text-sm font-medium transition-colors tracking-tight">
                info@kuzuri-escapedes.com
              </a>
              <a href="tel:+256708012030" className="text-white hover:text-[#D4AF37] text-sm font-medium transition-colors tracking-widest">
                +256 708 012030
              </a>
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