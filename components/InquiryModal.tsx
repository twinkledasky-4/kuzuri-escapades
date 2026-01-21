import React, { useEffect, useState, useRef } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialMessage = '' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', contact: '', message: '' });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contact) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => onClose(), 6000);
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="absolute inset-0 bg-[#002d04]/95 backdrop-blur-md transition-opacity duration-700"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-white w-full max-w-[540px] p-10 md:p-16 lg:p-20 shadow-2xl animate-modal-reveal focus:outline-none max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-stone-300 hover:text-[#002d04] transition-colors p-2 focus:outline-none focus:text-[#d4af37]"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-14 text-center">
              <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[9px] font-bold mb-4">THE ATELIER</p>
              <h2 id="modal-title" className="text-4xl md:text-5xl font-serif text-[#002d04] leading-tight tracking-tight">Request a <br /><span className="italic font-light">Consultation</span></h2>
              <div className="w-12 h-[1px] bg-stone-100 mx-auto mt-10" />
            </div>

            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="group">
                <label htmlFor="fullName" className="block text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-4 font-bold">Your Full Name</label>
                <input 
                  id="fullName"
                  type="text" 
                  required
                  autoFocus
                  className="w-full bg-transparent border-b border-stone-100 py-3 text-sm focus:border-[#d4af37] outline-none transition-all font-light placeholder:text-stone-200"
                  placeholder="e.g. Julianne Moore"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div className="group">
                <label htmlFor="whatsapp" className="block text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-4 font-bold">Preferred Contact (WhatsApp / Email)</label>
                <input 
                  id="whatsapp"
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-stone-100 py-3 text-sm focus:border-[#d4af37] outline-none transition-all font-light placeholder:text-stone-200"
                  placeholder="+256 XXX XXX XXX"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-4 font-bold">Share Your Vision</label>
                <textarea 
                  id="message"
                  className="w-full bg-transparent border-b border-stone-100 py-3 text-sm focus:border-[#d4af37] outline-none transition-all font-light resize-none h-24 placeholder:text-stone-200"
                  placeholder="Describe the rhythm of your ideal journey..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-6 bg-[#002d04] text-white text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-[#d4af37] transition-all shadow-xl disabled:bg-stone-100 disabled:text-stone-300 transform active:scale-[0.98]"
              >
                {isLoading ? 'PROCESSING MANIFEST...' : 'REQUEST CONSULTATION'}
              </button>
              
              <p className="text-[8px] text-stone-300 text-center tracking-[0.4em] font-medium italic">
                A private dialogue will commence within 24 hours.
              </p>
            </form>
          </>
        ) : (
          <div className="py-24 text-center animate-fade-in" aria-live="polite">
            <div className="w-20 h-20 border border-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-10">
               <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
               </svg>
            </div>
            <h3 className="text-4xl font-serif text-[#002d04] mb-8 italic">Manifest Received.</h3>
            <p className="text-stone-500 font-light leading-relaxed mb-12 max-w-[340px] mx-auto text-lg tracking-wide">
              {formData.fullName.split(' ')[0]}, our lead curators have received your vision. We will reach out shortly to begin co-authoring your narrative.
            </p>
            <button 
              onClick={onClose}
              className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#002d04] border-b border-stone-200 hover:border-[#d4af37] transition-all pb-1"
            >
              Return to Gallery
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalReveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-modal-reveal { animation: modalReveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};
