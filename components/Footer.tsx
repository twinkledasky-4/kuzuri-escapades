import React from 'react';

interface FooterProps {
  onEnquire?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onEnquire }) => {
  return (
    <footer className="bg-[#002d04] text-white pt-32 pb-16" aria-label="Global Footer">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif tracking-[0.2em] mb-10 uppercase font-light">
              KUZURI <span className="italic font-light text-[#d4af37]">Escapades</span>
            </h2>
            <p className="text-stone-400 max-w-sm leading-relaxed mb-12 font-light text-lg tracking-wide">
              Architects of silence and profound wilderness. We author bespoke narratives through East Africa for the world's most discerning explorers.
            </p>
            <div className="space-y-6 pt-4 border-t border-white/5 max-w-xs">
              <p className="text-[9px] uppercase tracking-[0.6em] text-[#d4af37] font-bold">The Office</p>
              <p className="text-stone-300 text-sm font-light">Plot 42, Safari Circuit, Entebbe, Uganda</p>
              <p className="text-[#d4af37] font-bold tracking-widest">+256 708 012030</p>
            </div>
          </div>

          <nav className="lg:col-span-3" aria-label="Quick Links">
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-stone-500 mb-10 font-bold">The Collection</h4>
            <ul className="space-y-6 text-stone-300 text-[10px] uppercase tracking-[0.4em] font-bold">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors focus:outline-none">Bwindi Forest</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors focus:outline-none">Queen Elizabeth</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors focus:outline-none">Kidepo Valley</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors focus:outline-none">Murchison Falls</a></li>
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-stone-500 mb-10 font-bold">Narrative Social</h4>
            <div className="space-y-8">
              <a href="#" className="flex items-center gap-6 group focus:outline-none" aria-label="Follow us on Instagram">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors duration-500">
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.4em] font-bold group-hover:text-[#d4af37] transition-colors">Instagram</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium italic mt-1">@kuzuri_escapades</span>
                </div>
              </a>
              <button 
                onClick={onEnquire}
                className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.5em] font-bold text-white hover:text-[#d4af37] transition-all pt-8 focus:outline-none"
              >
                Request Consultation
                <span className="w-12 h-[1px] bg-white/10 group-hover:bg-[#d4af37] group-hover:w-20 transition-all duration-700" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-stone-500 text-[9px] uppercase tracking-[0.4em] font-bold">
          <p>© 2024 Kuzuri Escapades. All rights reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="text-stone-700 italic">Curated by Lucky .K</span>
          </div>
        </div>
      </div>
    </footer>
  );
};