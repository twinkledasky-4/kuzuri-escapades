
import React from 'react';
import { PhoneLink } from './PhoneLink.tsx';

interface FooterProps {
  onEnquire?: () => void;
  onAdminAccess?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onEnquire, onAdminAccess }) => {
  return (
    <footer className="bg-white pt-48 pb-24 px-8 md:px-16 border-t border-gray-100">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid md:grid-cols-4 gap-24 mb-48">
          {/* Brand */}
          <div className="md:col-span-1 space-y-12">
            <h3 className="font-serif font-black text-4xl tracking-tighter text-[#1A1A1A]">
              KUZURI <span className="italic font-light text-[#8B5A2B]">Escapades</span>
            </h3>
            <p className="text-[#1A1A1A]/70 text-xl font-light leading-relaxed">
              Native curators of silence, elegance, and deep wilderness immersion across the Pearl of Africa.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 space-y-10">
            <p className="text-xs uppercase tracking-[0.6em] font-black text-[#8B5A2B]">The Manifest Desk</p>
            <div className="space-y-6">
              <a href="mailto:info@kuzuri-escapades.com" className="block text-2xl font-serif font-bold hover:text-[#8B5A2B] transition-all underline underline-offset-8 decoration-gray-200">
                info@kuzuri-escapades.com
              </a>
              <PhoneLink 
                number="+256 708 012030" 
                label="Primary Line"
                className="text-2xl font-serif font-bold hover:text-[#8B5A2B] block"
                showIcon={false}
              />
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-1 space-y-10">
            <p className="text-xs uppercase tracking-[0.6em] font-black text-[#8B5A2B]">Connections</p>
            <div className="flex gap-12 text-3xl">
              <a href="#" className="hover:scale-110 transition-transform">📸</a>
              <a href="#" className="hover:scale-110 transition-transform">📘</a>
              <a href="#" className="hover:scale-110 transition-transform">🦉</a>
            </div>
          </div>

          {/* CTA */}
          <div className="md:col-span-1 space-y-10">
            <button 
              onClick={onEnquire}
              className="w-full py-7 bg-[#1A1A1A] text-[#D4AF37] text-xs uppercase tracking-[0.6em] font-black hover:bg-[#8B5A2B] hover:text-white transition-all duration-700 shadow-2xl"
            >
              Request Manifest
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-gray-100 pt-20">
          <p className="text-xs uppercase tracking-[0.4em] font-black text-[#1A1A1A]/40">
            © 2024 Kuzuri Escapades. Native Stewardship since 2014.
          </p>
          <div className="flex gap-12">
            {onAdminAccess && (
              <button onClick={onAdminAccess} className="text-xs uppercase tracking-[0.4em] font-black text-[#1A1A1A]/30 hover:text-[#1A1A1A]/60 transition-colors">Portal</button>
            )}
            <span className="text-xs uppercase tracking-[0.4em] font-black text-[#1A1A1A]/10">Uganda License #KE-2024-001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
