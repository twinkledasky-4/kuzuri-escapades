
import React, { useState } from 'react';
import { PhoneLink } from './PhoneLink.tsx';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

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

  return (
    <section className="bg-[#F5F5DC] py-24 md:py-48 px-6 overflow-hidden" aria-labelledby="author-title">
      <div className="container mx-auto max-w-[1200px]">
        {/* Editorial Heading Section */}
        <div className="text-center mb-16 md:mb-24 reveal-trigger">
          <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-6">THE FINAL CHAPTER</p>
          <h2 id="author-title" className="text-4xl md:text-7xl font-serif font-bold text-[#3B1E14] tracking-tighter uppercase leading-tight">
            COMMENCE YOUR <span className="italic font-light">ADVENTURE.</span>
          </h2>
          <p className="text-[#1A1A1A] text-lg md:text-xl font-normal leading-[1.8] tracking-wide opacity-90 font-sans max-w-2xl mx-auto mt-10">
            Whether you are seeking the mist-covered peaks of Bwindi or the golden horizons of Murchison Falls, our safari architects are ready to curate your vision.
          </p>
        </div>

        {/* 2-Column Luxury Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1A1A1A] border-2 border-[#D4AF37] shadow-3xl overflow-hidden reveal-trigger">
          
          {/* Left Column: The Bespoke Briefing Form */}
          <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-[#D4AF37]/20">
            <h3 className="text-[#D4AF37] font-serif text-2xl mb-12 uppercase tracking-widest font-bold">The Brief</h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="group relative">
                <label htmlFor="form-name" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3 font-black">Full Name</label>
                <input 
                  id="form-name"
                  type="text" 
                  required
                  placeholder="e.g. Julianne Moore"
                  className="w-full bg-[#1A1412] border border-[#D4AF37]/30 py-4 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="group relative">
                <label htmlFor="form-dest" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3 font-black">Desired Destination</label>
                <input 
                  id="form-dest"
                  type="text" 
                  required
                  placeholder="e.g. Bwindi Impenetrable Forest"
                  className="w-full bg-[#1A1412] border border-[#D4AF37]/30 py-4 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>

              <div className="group relative">
                <label htmlFor="form-phone" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3 font-black">Phone Number</label>
                <input 
                  id="form-phone"
                  type="tel" 
                  required
                  placeholder="+44 ..."
                  className="w-full bg-[#1A1412] border border-[#D4AF37]/30 py-4 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="pt-10">
                <button 
                  type="submit"
                  className="w-full py-6 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[0.8em] font-black hover:bg-white transition-all duration-500 shadow-xl"
                >
                  REQUEST A MANIFESTO
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Concierge Details */}
          <div className="bg-[#1A1412] p-10 md:p-16 flex flex-col justify-center">
            <h3 className="text-[#D4AF37] font-serif text-2xl mb-12 uppercase tracking-widest font-bold">Concierge Details</h3>
            
            <div className="space-y-12">
              {/* Official Correspondence */}
              <div className="flex items-start gap-6 group">
                <div className="mt-1 p-3 bg-[#1A1A1A] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <Mail size={20} className="text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-2">OFFICIAL CORRESPONDENCE</p>
                  <a href="mailto:info@kuzuriescapades.com" className="text-white hover:text-[#D4AF37] text-xl font-sans font-medium tracking-tight block transition-colors">
                    info@kuzuriescapades.com
                  </a>
                </div>
              </div>

              {/* Direct Lines */}
              <div className="flex items-start gap-6 group">
                <div className="mt-1 p-3 bg-[#1A1A1A] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <Phone size={20} className="text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-2">PRIMARY LINE</p>
                    <PhoneLink 
                      number="+256 708 012030" 
                      label="Nasif - Lead Curator"
                      className="text-white hover:text-[#D4AF37] text-xl font-sans font-medium tracking-tight block transition-colors"
                      showIcon={false}
                    />
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mt-1 block">Nasif - Lead Curator</span>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-2">SECONDARY LINE</p>
                    <PhoneLink 
                      number="+256 760 419271" 
                      label="Support Line"
                      className="text-white hover:text-[#D4AF37] text-xl font-sans font-medium tracking-tight block transition-colors"
                      showIcon={false}
                    />
                  </div>
                </div>
              </div>

              {/* The Studio */}
              <div className="flex items-start gap-6 group">
                <div className="mt-1 p-3 bg-[#1A1A1A] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <MapPin size={20} className="text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-2">THE STUDIO</p>
                  <p className="text-white text-base uppercase tracking-[0.2em] font-bold leading-loose opacity-90">
                    Plot Wavamunno Road,<br />
                    Munyonyo, Kampala, Uganda
                  </p>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.15em] mt-3">
                    Located within the prestigious Munyonyo neighborhood, adjacent to Speke Resort.
                  </p>
                </div>
              </div>

              {/* Instant Consultation */}
              <div className="flex items-start gap-6 group">
                <div className="mt-1 p-3 bg-[#1A1A1A] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
                  <MessageSquare size={20} className="text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/60 font-black mb-2">INSTANT CONSULTATION</p>
                  <p className="text-white/60 text-sm font-light italic">
                    Reach out for a private consultation at our headquarters.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-[#D4AF37]/10 text-right">
              <p className="text-[9px] text-[#D4AF37]/40 font-bold uppercase tracking-[0.4em]">
                Native Stewards since 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
