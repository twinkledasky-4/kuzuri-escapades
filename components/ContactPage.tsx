
import React, { useState } from 'react';
import { PhoneLink } from './PhoneLink.tsx';

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation of form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const message = "Hi Kuzuri Escapades! I'm interested in booking a tour.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <div className="bg-[#F5F5DC] min-h-screen selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Refined Contact Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#1A1A1A] border-b-2 border-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1600" 
          alt="Luxury safari vehicle on the Ugandan savannah" 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[12px] font-bold mb-8">CO-AUTHOR YOUR VISION</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#F5F5DC] tracking-tighter leading-none">
            Get in <span className="italic font-light">Touch</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Column 1: Contact Information Card */}
          <div className="space-y-16 reveal-trigger">
            <div className="border-l-2 border-[#1A1A1A] pl-10">
              <h2 className="text-4xl font-serif font-bold text-[#1A1A1A] mb-4">The Experience Desk</h2>
              <p className="text-[#8B5A2B] text-[10px] uppercase tracking-[0.5em] font-bold">Native Stewardship & Private Care</p>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-10">
              <h3 className="font-bold text-xl uppercase tracking-widest text-[#8B5A2B] flex items-center gap-3">
                <span role="img" aria-label="Phone">📞</span> Phone Numbers
              </h3>
              
              <div className="space-y-8">
                {/* Primary */}
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#654321] opacity-75 mb-3 font-bold">
                    Primary Curator Line (Preferred)
                  </p>
                  <PhoneLink 
                    number="+256 708 012030" 
                    label="Primary Line"
                    className="text-2xl font-bold tracking-widest text-[#D4AF37]"
                    showIcon={false}
                    isButton={true}
                  />
                  <p className="text-xs mt-3 text-[#1A1A1A] opacity-60 italic">Available 24/7 for discerning inquiries</p>
                </div>

                {/* Secondary */}
                <div className="group opacity-80 hover:opacity-100 transition-opacity">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#654321] opacity-75 mb-3 font-bold">
                    Alternative Support Line
                  </p>
                  <PhoneLink 
                    number="+256 760 419271" 
                    label="Secondary Line"
                    className="text-xl font-bold tracking-widest text-[#8B5A2B]"
                    showIcon={false}
                    isButton={true}
                  />
                  <p className="text-xs mt-2 text-[#1A1A1A] opacity-60 italic">Secondary operational contact</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl uppercase tracking-widest text-[#8B5A2B] flex items-center gap-3">
                <span role="img" aria-label="Email">📧</span> Official Email
              </h3>
              <a 
                href="mailto:info@kuzuri-escapades.com"
                className="text-xl font-bold tracking-widest text-[#D4AF37] hover:underline underline-offset-8 transition-all"
              >
                info@kuzuri-escapades.com
              </a>
              <p className="text-xs text-[#1A1A1A] opacity-60 italic">We aim to respond to all visions within 24 hours.</p>
            </div>

            {/* WhatsApp */}
            <div className="space-y-8">
              <h3 className="font-bold text-xl uppercase tracking-widest text-[#8B5A2B] flex items-center gap-3">
                <span role="img" aria-label="WhatsApp">💬</span> WhatsApp
              </h3>
              <a 
                href={`https://wa.me/256708012030?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 rounded-sm border-2 border-black transition-all hover:scale-105 active:scale-95 shadow-2xl group"
                style={{ backgroundColor: '#25D366', color: 'white' }}
              >
                <span className="text-2xl group-hover:animate-bounce">💬</span>
                <span className="font-black uppercase tracking-[0.4em] text-[11px]">Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="bg-white p-10 md:p-16 border-2 border-black shadow-2xl reveal-trigger">
            <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-12">Send us a <span className="italic font-light">Message</span></h2>

            {!isSubmitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-10">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-bold">Your Name</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-stone-50 border-b-2 border-black p-4 text-base focus:border-[#D4AF37] outline-none transition-all placeholder:opacity-30"
                    placeholder="e.g. Julianne Moore"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-bold">Your Email</label>
                  <input 
                    type="email"
                    required
                    className="w-full bg-stone-50 border-b-2 border-black p-4 text-base focus:border-[#D4AF37] outline-none transition-all placeholder:opacity-30"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-bold">The Vision</label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full bg-stone-50 border-b-2 border-black p-4 text-base focus:border-[#D4AF37] outline-none transition-all resize-none placeholder:opacity-30"
                    placeholder="Share the rhythm of your desired journey..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-8 border-2 border-black bg-[#8B5A2B] text-[#F5F5DC] text-[11px] uppercase tracking-[1em] font-black hover:bg-black hover:text-[#D4AF37] transition-all duration-700 shadow-2xl disabled:bg-stone-300"
                >
                  {isLoading ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                </button>
              </form>
            ) : (
              <div className="py-24 text-center animate-fade-in">
                <h3 className="text-4xl font-serif text-[#1A1A1A] mb-8 italic">Experience Received.</h3>
                <p className="text-[#1A1A1A] font-light leading-relaxed mb-12 max-w-xs mx-auto">
                  Our Lead Curator has been alerted. We will reach out to co-author your narrative shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-10 py-4 border-2 border-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-black hover:text-white transition-all"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Response Time Banner */}
        <div 
          className="mt-24 p-10 border-2 border-black text-center shadow-xl reveal-trigger"
          style={{ backgroundColor: '#D4AF37', color: '#1A1A1A' }}
        >
          <p className="font-bold text-lg md:text-xl uppercase tracking-[0.2em] leading-relaxed">
            ⚡ Call us for instant assistance | 📧 Email responses within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};
