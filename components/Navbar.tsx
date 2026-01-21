
import React, { useState, useEffect } from 'react';
import { AppSection } from '../types.ts';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  onEnquire: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: AppSection.HOME, label: 'Home' },
    { id: AppSection.DESTINATIONS, label: 'Destinations' },
    { id: AppSection.PLANNER, label: 'Packages' },
    { id: AppSection.SERVICES, label: 'Services' },
    { id: AppSection.ABOUT, label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string | AppSection) => {
    if (id === 'contact') {
      onEnquire();
    } else {
      onNavigate(id as AppSection);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-700 ease-in-out ${
          isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6 md:py-8'
        }`}
        aria-label="Main Site Navigation"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <button 
            className="group focus:outline-none z-[60] flex items-center"
            onClick={() => handleNavClick(AppSection.HOME)}
            aria-label="Kuzuri Escapades Home"
          >
            <img 
              src="https://i.postimg.cc/bwx08cbS/Gemini-Generated-Image-6on0rk6on0rk6on0-(1).png" 
              alt="Kuzuri Escapades Logo" 
              className={`transition-all duration-500 object-contain ${
                isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
              }`}
            />
          </button>

          {/* Desktop Nav */}
          <div className={`hidden lg:flex items-center space-x-12 text-[9px] uppercase tracking-[0.4em] font-bold transition-colors duration-500 ${
            isScrolled ? 'text-stone-500' : 'text-stone-300'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`hover:text-[#d4af37] transition-all relative group py-2`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-[#d4af37] transition-all duration-500 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            <button 
              onClick={onEnquire}
              className={`hidden md:block px-8 py-3 text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-500 ease-out z-[60] ${
                isScrolled
                  ? 'bg-[#002d04] text-white hover:bg-[#d4af37]' 
                  : 'border border-white/30 text-white hover:bg-white hover:text-[#002d04]'
              }`}
            >
              Enquire
            </button>

            {/* Mobile Menu Toggle (Right Aligned) */}
            <button 
              className="lg:hidden z-[60] p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 block w-full h-[1px] transition-all duration-500 ${
                  isMobileMenuOpen ? 'top-2 rotate-45 bg-white' : `top-0 ${isScrolled ? 'bg-[#002d04]' : 'bg-white'}`
                }`} />
                <span className={`absolute left-0 block w-full h-[1px] top-2 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : `opacity-100 ${isScrolled ? 'bg-[#002d04]' : 'bg-white'}`
                }`} />
                <span className={`absolute left-0 block w-full h-[1px] transition-all duration-500 ${
                  isMobileMenuOpen ? 'top-2 -rotate-45 bg-white' : `top-4 ${isScrolled ? 'bg-[#002d04]' : 'bg-white'}`
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Right Slide, Deep Jungle Green */}
      <div className={`fixed inset-0 z-[45] bg-[#002d04] transition-all duration-700 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full justify-center px-12 space-y-10">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left transition-all duration-700 group`}
            >
              <span className="block text-[10px] uppercase tracking-[0.8em] text-[#d4af37] font-bold mb-2">0{idx + 1}</span>
              <span className={`text-4xl font-serif transition-all ${
                activeSection === item.id 
                  ? 'text-[#d4af37] italic' 
                  : 'text-white hover:text-[#d4af37] hover:italic'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
          <div className={`pt-12 border-t border-white/10 transition-all duration-700 delay-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onEnquire(); }}
              className="w-full py-6 bg-[#d4af37] text-[#002d04] text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-white transition-colors"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
