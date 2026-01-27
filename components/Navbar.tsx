
import React, { useState, useEffect } from 'react';
import { AppSection } from '../types.ts';
import { PhoneLink } from './PhoneLink.tsx';

interface NavbarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  onEnquire: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: AppSection.HOME, label: 'About' },
    { id: AppSection.PLANNER, label: 'Tours' },
    { id: AppSection.ACCOMMODATIONS, label: 'Stays' },
    { id: AppSection.SERVICES, label: 'Services' },
    { id: AppSection.CONTACT, label: 'Contact' }
  ];

  const handleNavClick = (id: AppSection) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-8 md:px-16 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick(AppSection.HOME)}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className={`h-10 w-10 flex items-center justify-center border transition-all duration-500 ${isScrolled ? 'border-[#1A1A1A] bg-[#1A1A1A]' : 'border-white bg-transparent'}`}>
               <span className={`font-serif text-xl font-bold transition-colors ${isScrolled ? 'text-[#D4AF37]' : 'text-white'}`}>K</span>
            </div>
            <span className={`hidden lg:inline font-sans text-lg tracking-tight font-medium transition-colors ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>Kuzuri Escapades</span>
          </div>
          
          {/* Nav Items */}
          <div className="flex items-center gap-12 xl:gap-20">
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-base font-sans font-normal transition-all hover:text-[#8B5A2B] ${
                    isScrolled 
                      ? (activeSection === item.id ? 'text-[#8B5A2B] font-semibold' : 'text-[#1A1A1A]') 
                      : (activeSection === item.id ? 'text-[#D4AF37] font-semibold' : 'text-white')
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-10">
              <PhoneLink 
                number="+256 708 012030" 
                label="Curator"
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-[#1A1A1A]' : 'text-white/90'}`}
                showIcon={false}
              />
              <button 
                onClick={onEnquire}
                className={`px-8 py-3 text-sm font-sans font-medium transition-all border ${
                  isScrolled 
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                    : 'bg-white text-[#1A1A1A] border-white'
                } hover:bg-[#8B5A2B] hover:text-white hover:border-[#8B5A2B] shadow-sm`}
              >
                Inquire
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <div className={`w-8 h-[2px] mb-1.5 transition-all ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`} />
              <div className={`w-8 h-[2px] transition-all ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[110] bg-white transition-transform duration-700 ease-[cubic-bezier(0.19, 1, 0.22, 1)] transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setMenuOpen(false)}
          className="absolute top-10 right-10 text-[#1A1A1A] p-4"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-4xl font-sans font-light tracking-tight hover:text-[#8B5A2B] transition-all ${
                activeSection === item.id ? 'text-[#8B5A2B] font-medium' : 'text-[#1A1A1A]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
