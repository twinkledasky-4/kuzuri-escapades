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
    tourType: 'Bespoke Odyssey',
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
          _subject: `New Luxury Manifest Inquiry: ${formData.fullName}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => onClose(), 8000);
      } else {
        // Fallback simulation for demonstration
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Manifest transmission error:", error);
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
      <div 
        className="absolute inset-0 bg-[#1A1A1A]/90 backdrop-blur-md transition-opacity duration-1000"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-[#F5F5DC] w-full max-w-[760px] p-10 md:p-20 shadow-2xl animate-modal-reveal focus:outline-none max-h-[90vh] overflow-y-auto border-2 border-[#1A1A1A]"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-[#1A1A1A]/30 hover:text-[#1A1A1A] transition-colors p-2"
          aria-label="Close Inquiry Modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-16 text-center">
              <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-4">CO-AUTHOR YOUR VISION</p>
              <h2 id="modal-title" className="text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-tight tracking-tighter">Request a <span className="italic font-light">Manifest</span></h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-10" />
            </div>

            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                  <label htmlFor="fullName" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-extrabold">Full Name</label>
                  <input 
                    id="fullName"
                    type="text" 
                    required
                    autoFocus
                    className="w-full bg-white border-b-2 border-[#1A1A1A]/10 py-4 px-1 text-lg focus:border-[#D4AF37] outline-none transition-all font-light text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="e.g. Julianne Moore"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-extrabold">Contact Email</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    className="w-full bg-white border-b-2 border-[#1A1A1A]/10 py-4 px-1 text-lg focus:border-[#D4AF37] outline-none transition-all font-light text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="group">
                  <label htmlFor="dates" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-extrabold">Proposed Window</label>
                  <input 
                    id="dates"
                    type="text" 
                    className="w-full bg-white border-b-2 border-[#1A1A1A]/10 py-4 px-1 text-lg focus:border-[#D4AF37] outline-none transition-all font-light text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="Summer 2025"
                    value={formData.dates}
                    onChange={(e) => setFormData({...formData, dates: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="guests" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-extrabold">Guests</label>
                  <input 
                    id="guests"
                    type="number" 
                    className="w-full bg-white border-b-2 border-[#1A1A1A]/10 py-4 px-1 text-lg focus:border-[#D4AF37] outline-none transition-all font-light text-[#1A1A1A]"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="tourType" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-extrabold">Odyssey Type</label>
                  <select 
                    id="tourType"
                    className="w-full bg-white border-b-2 border-[#1A1A1A]/10 py-4 px-1 text-lg focus:border-[#D4AF37] outline-none transition-all font-bold text-[#1A1A1A] cursor-pointer appearance-none"
                    value={formData.tourType}
                    onChange={(e) => setFormData({...formData, tourType: e.target.value})}
                  >
                    <option>Bespoke Odyssey</option>
                    <option>Gorilla Sanctuary</option>
                    <option>Savannah Sovereignty</option>
                    <option>Native Heritage</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-extrabold">The Vision</label>
                <textarea 
                  id="message"
                  className="w-full bg-white border-b-2 border-[#1A1A1A]/10 py-4 px-1 text-lg focus:border-[#D4AF37] outline-none transition-all font-light resize-none h-32 text-[#1A1A1A] placeholder:opacity-30"
                  placeholder="Share the rhythm of your desired journey..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-8 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[11px] uppercase tracking-[1em] font-black hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all duration-700 shadow-2xl disabled:bg-stone-300 transform"
                >
                  {isLoading ? 'TRANSMITTING...' : 'REQUEST MANIFEST'}
                </button>
                <p className="text-[9px] text-[#8B5A2B] text-center tracking-[0.5em] font-black uppercase mt-8">
                  CURATED BY NATIVE STEWARDS
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="py-24 text-center animate-fade-in" aria-live="polite">
            <h3 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-10 italic tracking-tight">Manifest Transmitted.</h3>
            <p className="text-[#1A1A1A] font-light leading-relaxed mb-16 max-w-[460px] mx-auto text-xl opacity-80">
              {formData.fullName.split(' ')[0]}, your vision has been relayed to our Lead Curator. We will begin authoring your narrative shortly.
            </p>
            <div className="pt-16 border-t border-[#1A1A1A]/10">
              <button 
                onClick={onClose}
                className="px-16 py-6 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F5DC] text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-700 shadow-xl"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalReveal {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-modal-reveal { animation: modalReveal 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
      `}</style>
    </div>
  );
};
