import React, { useState, useEffect } from 'react';
import { PhoneLink } from './PhoneLink.tsx';
import { Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import { crmService } from '../services/crmService.ts';

interface AuthorYourVisionProps {
  onShareVision: () => void;
  initialDestination?: string;
}

export const AuthorYourVision: React.FC<AuthorYourVisionProps> = ({ onShareVision, initialDestination = '' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    destination: initialDestination
  });

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, boolean> = {};
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.nationality) newErrors.nationality = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    
    // CRM INTEGRATION: Capture lead from the footer form
    await crmService.captureLead({
      source: 'consultation_btn',
      packageViewing: formData.destination || 'Bespoke Consultation',
      data: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        nationality: formData.nationality,
        destination: formData.destination,
        message: `Inquiry from footer form for destination: ${formData.destination}`
      }
    });

    setIsLoading(false);
    setIsSubmitted(true);
    
    // Delay the onShareVision (which opens the modal) to let user see success message if desired,
    // but the request says "user should see a neat white box stating...".
    // Usually this replaces the form.
  };

  // Protocol: Strict raw mailto link as per manual override instructions.
  const mailtoLink = "mailto:info@kuzuri-escapedes.com?subject=Consultation%20Inquiry";

  return (
    <section id="contact-us" className="bg-[#F5F5DC] py-12 md:py-16 px-6 overflow-hidden scroll-mt-[120px]" aria-labelledby="author-title">
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
            
            {isSubmitted ? (
              <div className="bg-white p-10 border-2 border-[#D4AF37] text-center animate-fade-in my-10">
                <p className="text-[#1A1A1A] font-serif text-xl leading-relaxed">
                  Thank you for your inquiry. A Kuzuri Escapades specialist will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    onShareVision();
                  }}
                  className="mt-8 text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4AF37] hover:text-black transition-colors"
                >
                  Continue to Detailed Planner →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <label htmlFor="form-name" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 font-black">Full Name</label>
                    <input 
                      id="form-name"
                      type="text" 
                      required
                      placeholder="Julianne Moore"
                      className="w-full bg-[#1A1412] border border-[#D4AF37]/30 py-3 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="group relative">
                    <label htmlFor="form-email" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 font-black">Email Address</label>
                    <input 
                      id="form-email"
                      type="email" 
                      required
                      placeholder="julianne@example.com"
                      className={`w-full bg-[#1A1412] border ${errors.email ? 'border-red-500' : 'border-[#D4AF37]/30'} py-3 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans`}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({...formData, email: e.target.value});
                        if (errors.email) setErrors({...errors, email: false});
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <label htmlFor="form-phone" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 font-black">Phone Number</label>
                    <input 
                      id="form-phone"
                      type="tel" 
                      required
                      placeholder="+44 ..."
                      className={`w-full bg-[#1A1412] border ${errors.phone ? 'border-red-500' : 'border-[#D4AF37]/30'} py-3 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans`}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({...formData, phone: e.target.value});
                        if (errors.phone) setErrors({...errors, phone: false});
                      }}
                    />
                  </div>
                  <div className="group relative">
                    <label htmlFor="form-nat" className="block text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2 font-black">Nationality</label>
                    <input 
                      id="form-nat"
                      type="text" 
                      required
                      placeholder="British"
                      className={`w-full bg-[#1A1412] border ${errors.nationality ? 'border-red-500' : 'border-[#D4AF37]/30'} py-3 px-6 text-white placeholder:text-white/10 outline-none focus:border-[#D4AF37] transition-all font-sans`}
                      value={formData.nationality}
                      onChange={(e) => {
                        setFormData({...formData, nationality: e.target.value});
                        if (errors.nationality) setErrors({...errors, nationality: false});
                      }}
                    />
                  </div>
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
                <div className="pt-6">
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-5 bg-[#D4AF37] text-white text-[11px] uppercase tracking-[0.8em] font-black hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 shadow-md border-none disabled:opacity-50"
                  >
                    {isLoading ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            )}
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
                    info@kuzuri-escapedes.com
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