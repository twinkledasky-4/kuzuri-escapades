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
    { id: AppSection.TESTIMONIALS, label: '⭐ Testimonials' },
    { id: AppSection.ABOUT, label: 'About' },
    { id: AppSection.CONTACT, label: 'Contact' }
  ];

  const handleNavClick = (id: AppSection) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] border-b-2 border-black transition-all duration-500 ${
          isScrolled ? 'bg-[#F5F5DC] py-2 shadow-md' : 'bg-[#F5F5DC]/90 backdrop-blur-md py-4'
        }`}
        style={{ backgroundColor: '#F5F5DC' }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo - Left Side */}
          <div 
            onClick={() => handleNavClick(AppSection.HOME)}
            className="text-2xl font-bold cursor-pointer tracking-wider flex items-center gap-2"
            style={{ color: '#1A1A1A' }}
          >
            <img 
              src="https://i.postimg.cc/bwx08cbS/Gemini-Generated-Image-6on0rk6on0rk6on0-(1).png" 
              alt="Logo" 
              className="h-10 w-auto brightness-0"
            />
            <span className="hidden sm:inline font-serif uppercase text-lg">Kuzuri Escapades</span>
          </div>
          
          {/* Right Side: Navigation + Phone Number + Menu */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-[#8B5A2B] whitespace-nowrap ${
                    activeSection === item.id ? 'text-[#8B5A2B] border-b border-[#8B5A2B]' : 'text-[#1A1A1A]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Phone Link */}
            <div className="hidden md:block">
              <PhoneLink 
                number="+256 708 012030" 
                label="Curator Line"
                className="px-6 py-3 rounded border-2 border-black font-bold text-sm tracking-widest shadow-sm"
                style={{ backgroundColor: '#D4AF37', color: '#1A1A1A' }}
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: '#1A1A1A' }}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Header Phone Number Bar */}
        <div className="md:hidden border-t-2 border-black" style={{ backgroundColor: '#FAF8F3' }}>
          <PhoneLink 
            number="+256 708 012030" 
            label="Curator Support"
            className="flex justify-center py-5 w-full font-black uppercase tracking-[0.2em] text-sm"
            style={{ backgroundColor: '#D4AF37', color: '#1A1A1A' }}
            showIcon={true}
          />
        </div>
      </nav>

      {/* Mobile Navigation Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#F5F5DC] transition-transform duration-500 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-serif font-bold tracking-widest text-center ${
                activeSection === item.id ? 'text-[#8B5A2B] italic underline' : 'text-[#1A1A1A]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setMenuOpen(false); onEnquire(); }}
            className="mt-8 px-12 py-5 bg-[#8B5A2B] text-[#F5F5DC] font-bold uppercase tracking-[0.4em] text-xs border-2 border-black"
          >
            Enquire Now
          </button>
        </div>
      </div>
      
      {/* Spacer */}
      <div className="h-[104px] md:h-[84px]"></div>
    </>
  );
};