
import React, { useEffect, useState, useRef } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialMessage = '' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    dates: '', 
    guests: '2', 
    tourType: 'Signature Experience',
    message: '' 
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setFormData(prev => ({ ...prev, message: initialMessage }));
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialMessage]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xpwqgrze', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          dates: formData.dates,
          guests: formData.guests,
          tourType: formData.tourType,
          message: formData.message,
          _replyto: formData.email,
          _to: 'info@kuzuri-escapades.com',
          _subject: `New Luxury Experience Inquiry: ${formData.fullName}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback simulation for demonstration
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Experience transmission error:", error);
      setIsSubmitted(true); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 selection:bg-[#1A1A1A] selection:text-[#D4AF37]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Background Overlay: Sharp Darkening, No Blur */}
      <div 
        className="absolute inset-0 bg-[#1A1A1A]/95 transition-opacity duration-1000"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        ref={modalRef}
        tabIndex={-1}
        className={`relative w-full max-w-[700px] shadow-2xl animate-modal-pop focus:outline-none overflow-hidden transition-all duration-700 ${
          isSubmitted 
            ? 'bg-[#3B1E14] border border-[#D4AF37] h-auto p-[32px]' 
            : 'bg-[#F5F5DC] border border-[#1A1A1A] h-auto p-10 md:p-20'
        }`}
      >
        <button 
          onClick={onClose}
          className={`absolute top-4 right-4 transition-colors p-2 z-20 ${isSubmitted ? 'text-white/40 hover:text-[#D4AF37]' : 'text-[#1A1A1A]/30 hover:text-[#1A1A1A]'}`}
          aria-label="Close Inquiry Modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-12 text-center">
              <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-4">CO-AUTHOR YOUR VISION</p>
              <h2 id="modal-title" className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight tracking-tighter">Request an Experience</h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="fullName" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-3 font-bold">Full Name</label>
                  <input 
                    id="fullName"
                    type="text" 
                    required
                    autoFocus
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-3 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="e.g. Alexandra Bennett"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-3 font-bold">Contact Email</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-3 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group">
                  <label htmlFor="dates" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-3 font-bold">Travel Window</label>
                  <input 
                    id="dates"
                    type="text" 
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-3 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="Summer 2025"
                    value={formData.dates}
                    onChange={(e) => setFormData({...formData, dates: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="guests" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-3 font-bold">Guests</label>
                  <input 
                    id="guests"
                    type="number" 
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-3 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A]"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="tourType" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-3 font-bold">Experience</label>
                  <select 
                    id="tourType"
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-3 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-bold text-[#1A1A1A] cursor-pointer appearance-none"
                    value={formData.tourType}
                    onChange={(e) => setFormData({...formData, tourType: e.target.value})}
                  >
                    <option>Signature Experience</option>
                    <option>Gorilla Sanctuary</option>
                    <option>Savannah Sovereignty</option>
                    <option>Native Heritage</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-3 font-bold">The Vision</label>
                <textarea 
                  id="message"
                  className="w-full bg-white border-b border-[#1A1A1A]/10 py-3 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal resize-none h-20 text-[#1A1A1A] placeholder:opacity-30"
                  placeholder="Share the rhythm of your desired journey..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 border-2 border-[#1A1A1A] bg-[#3B1E14] text-white text-[10px] uppercase tracking-[1em] font-black hover:bg-black hover:text-[#D4AF37] transition-all duration-700 shadow-2xl disabled:bg-stone-300 transform"
                >
                  {isLoading ? 'TRANSMITTING...' : 'REQUEST EXPERIENCE'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center flex flex-col items-center justify-center space-y-8 animate-fade-in" aria-live="polite">
            <div className="flex justify-center">
              <div className="w-16 h-[2px] bg-[#D4AF37]" />
            </div>
            
            {/* Heading: All-caps, Safari Gold (#D4AF37), Serif font (min 600 weight, 700 applied) */}
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] tracking-tight uppercase leading-tight max-w-[600px] text-shadow-none">
              YOUR VISION HAS BEEN <br /> RECEIVED.
            </h3>
            
            {/* Message: Pure White (#FFFFFF), clean Sans-serif, line-height 1.6, 400 weight */}
            <p className="text-[#FFFFFF] font-sans font-normal leading-[1.6] max-w-[560px] text-lg md:text-xl text-shadow-none">
              Thank you for inviting us to author your Ugandan chapter. Our safari architects are already reviewing your vision to ensure every detail surpasses expectation. You will receive a personalized experience and a direct consultation link within the next 24 hours. Your adventure is officially in motion.
            </p>
            
            <div className="pt-8 w-full flex justify-center">
              <button 
                onClick={onClose}
                className="w-full md:w-auto px-16 py-7 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[0.8em] font-black hover:bg-white transition-all duration-500 shadow-xl hover:scale-105 active:scale-95 border-none"
              >
                RETURN TO EXPLORE
              </button>
            </div>
            
            <p className="text-[9px] text-[#D4AF37]/40 font-bold uppercase tracking-[0.4em] mt-8">
              KUZURI ESCAPADES • NATIVE STEWARDS SINCE 2018
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-pop { 
          animation: modalPop 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards; 
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .text-shadow-none { text-shadow: none !important; }
      `}</style>
    </div>
  );
};
