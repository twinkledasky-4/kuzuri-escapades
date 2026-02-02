import React, { useState } from 'react';
import { PhoneLink } from './PhoneLink.tsx';
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react';

interface AuthorYourVisionProps {
  onShareVision: () => void;
}

export const AuthorYourVision: React.FC<AuthorYourVisionProps> = ({ onShareVision }) => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShareVision();
  };

  // Protocol: Strict raw mailto link as per manual override instructions.
  const mailtoLink = "mailto:hello@kuzuri-escapedes.com?subject=Consultation%20Inquiry";

  return (
    <section className="bg-[#F5F5DC] py-12 md:py-16 px-6 overflow-hidden" aria-labelledby="author-title">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center mb-12 md:mb-16 reveal-trigger">
          <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-5">THE FINAL CHAPTER</p>
          <h2 id="author-title" className="text-4xl md:text-7xl font-serif font-bold text-[#3B1E14] tracking-tighter uppercase leading-tight">
            COMMENCE YOUR <span className="italic font-light">ADVENTURE.</span>
          </h2>
          <p className="text-[#1A1A1A] text-lg md:text-xl font-normal leading-[1.8] tracking-wide opacity-90 font-sans max-w-2xl mx-auto mt-8">
            Whether you are seeking the mist-covered peaks of Bwindi or the golden horizons of Murchison Falls, our safari architects are ready to curate your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1A1A1A] border-2 border-[#D4AF37] shadow-3xl overflow-hidden reveal-trigger">
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#D4AF37]/20">
            <h3 className="text-[#D4AF37] font-serif text-2xl mb-10 uppercase tracking-widest font-bold">The Brief</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group relative">
                <label htmlFor="form-name" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 font-black">Full Name</label>
                <input 
                  id="form-name"
                  type="text" 
                  required
                  placeholder="e.g. Julianne Moore"
                  className="w-full bg-[#1A1412] border border-[#D4AF37]/30 py-3 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="group relative">
                <label htmlFor="form-dest" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 font-black">Desired Destination</label>
                <input 
                  id="form-dest"
                  type="text" 
                  required
                  placeholder="e.g. Bwindi Impenetrable Forest"
                  className="w-full bg-[#1A1412] border border-[#D4AF37]/30 py-3 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>
              <div className="group relative">
                <label htmlFor="form-phone" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 font-black">Phone Number</label>
                <input 
                  id="form-phone"
                  type="tel" 
                  required
                  placeholder="+44 ..."
                  className="w-full bg-[#1A1412] border border-[#D4AF37]/30 py-3 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[0.8em] font-black hover:bg-white transition-all duration-500 shadow-xl"
                >
                  REQUEST AN EXPERIENCE
                </button>
              </div>
            </form>
          </div>

          <div className="bg-[#1A1412] p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-[#D4AF37] font-serif text-2xl mb-10 uppercase tracking-widest font-bold">Concierge Details</h3>
            <div className="space-y-10">
              <div className="flex items-start gap-5 group">
                <div className="mt-1 p-2 bg-[#1A1A1A] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <span role="img" aria-label="Mail" className="text-[#D4AF37]"><Mail size={18} strokeWidth={1.5} /></span>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-1">OFFICIAL CORRESPONDENCE</p>
                  <a href={mailtoLink} className="text-white hover:text-[#D4AF37] text-lg font-sans font-medium tracking-tight block transition-colors no-underline cursor-pointer">
                    hello@kuzuri-escapedes.com
                  </a>
                </div>
              </div>

              {/* Landline */}
              <div className="flex items-start gap-5 group">
                <div className="mt-1 p-2 bg-[#1A1A1A] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <span role="img" aria-label="Landline" className="text-[#D4AF37]"><Phone size={18} strokeWidth={1.5} /></span>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-1">OFFICE LINE (LANDLINE)</p>
                  <PhoneLink 
                    number="0200910729" 
                    label="Landline"
                    className="text-white hover:text-[#D4AF37] text-lg font-sans font-medium tracking-tight block transition-colors"
                    showIcon={false}
                  />
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-start gap-5 group">
                <div className="mt-1 p-2 bg-[#1A1A1A] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <span role="img" aria-label="Mobile" className="text-[#D4AF37]"><Smartphone size={18} strokeWidth={1.5} /></span>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-1">PRIMARY MOBILE / WHATSAPP</p>
                  <PhoneLink 
                    number="+256 708 012030" 
                    label="Nasif - Lead Curator"
                    className="text-white hover:text-[#D4AF37] text-lg font-sans font-medium tracking-tight block transition-colors"
                    showIcon={false}
                  />
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mt-1 block">Nasif - Lead Curator</span>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="mt-1 p-2 bg-[#1A1A1A] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <span role="img" aria-label="Location" className="text-[#D4AF37]"><MapPin size={18} strokeWidth={1.5} /></span>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-1">THE STUDIO</p>
                  <p className="text-white text-base uppercase tracking-[0.2em] font-bold leading-loose opacity-90">
                    Ham Towers Wandegeya, Room Number H:12,<br />
                    P.O. BOX 202305, Kampala
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-[#D4AF37]/10 text-right">
              <p className="text-[9px] text-[#D4AF37]/40 font-bold uppercase tracking-[0.4em]">
                Native Stewards since 2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};