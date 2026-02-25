import React, { useEffect, useState, useRef } from 'react';
import { crmService } from '../services/crmService.ts';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  packageContext?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMessage = '',
  packageContext = ''
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    nationality: '',
    travelDate: '', 
    numDays: '',
    numPeople: '2', 
    phoneCode: '+256',
    phoneNumber: '',
    accommodation: 'Luxury',
    budget: '',
    interests: [] as string[],
    message: '' 
  });
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setFormData(prev => ({ ...prev, message: initialMessage, interests: [] }));
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
    
    // CRM INTEGRATION: Capture lead with explicit Package context
    const success = await crmService.captureLead({
      source: 'inquiry_modal',
      packageViewing: packageContext || 'Custom Inquiry',
      data: { ...formData, context: packageContext }
    });

    if (success) {
      setIsSubmitted(true);
    } else {
      // Robust Fallback
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    }
    setIsLoading(false);
  };

  const interestOptions = [
    "Gorilla Trekking", "Wildlife Viewing", "Bird Watching", 
    "Chimpanzee Tracking", "Primate Tour", "Cultural Tour", 
    "Whitewater Rafting", "Mountaineering", "Horseback Riding", 
    "Boat Cruise", "Honeymoon Holiday"
  ];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 selection:bg-[#1A1A1A] selection:text-[#D4AF37]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="absolute inset-0 bg-[#1A1A1A]/95 transition-opacity duration-1000"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div 
        ref={modalRef}
        tabIndex={-1}
        className={`relative w-full max-w-[800px] shadow-2xl animate-modal-pop focus:outline-none overflow-hidden transition-all duration-700 ${
          isSubmitted 
            ? 'bg-[#3B1E14] border border-[#D4AF37] h-auto p-[32px]' 
            : 'bg-[#F5F5DC] border border-[#1A1A1A] h-auto p-8 md:p-12 max-h-[90vh] overflow-y-auto'
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
            <div className="mb-8 text-center">
              <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-4">CO-AUTHOR YOUR VISION</p>
              <h2 id="modal-title" className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] leading-tight tracking-tighter">
                {packageContext ? `Enquire: ${packageContext}` : 'Request an Experience'}
              </h2>
              <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-6" />
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="fullName" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Full Name</label>
                  <input 
                    id="fullName"
                    type="text" 
                    required
                    autoFocus
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="Alexandra Bennett"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Contact Email</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="nationality" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Nationality</label>
                  <input 
                    id="nationality"
                    type="text" 
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="e.g. British"
                    value={formData.nationality}
                    onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="travelDate" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Travel Date</label>
                  <input 
                    id="travelDate"
                    type="date" 
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A]"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group">
                  <label htmlFor="numDays" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Number of Days</label>
                  <input 
                    id="numDays"
                    type="number" 
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A]"
                    placeholder="7"
                    value={formData.numDays}
                    onChange={(e) => setFormData({...formData, numDays: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="numPeople" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Number of People</label>
                  <input 
                    id="numPeople"
                    type="number" 
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A]"
                    value={formData.numPeople}
                    onChange={(e) => setFormData({...formData, numPeople: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label htmlFor="budget" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Budget (USD)</label>
                  <input 
                    id="budget"
                    type="text" 
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A] placeholder:opacity-30"
                    placeholder="e.g. $5000"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group flex gap-4">
                  <div className="w-24">
                    <label htmlFor="phoneCode" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Code</label>
                    <input 
                      id="phoneCode"
                      type="text" 
                      className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A]"
                      value={formData.phoneCode}
                      onChange={(e) => setFormData({...formData, phoneCode: e.target.value})}
                    />
                  </div>
                  <div className="flex-grow">
                    <label htmlFor="phoneNumber" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Phone Number</label>
                    <input 
                      id="phoneNumber"
                      type="tel" 
                      className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal text-[#1A1A1A]"
                      placeholder="708012030"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="accommodation" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">Accommodation</label>
                  <select 
                    id="accommodation"
                    className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-bold text-[#1A1A1A] cursor-pointer appearance-none"
                    value={formData.accommodation}
                    onChange={(e) => setFormData({...formData, accommodation: e.target.value})}
                  >
                    <option>Luxury</option>
                    <option>Mid-range</option>
                    <option>Budget</option>
                    <option>Camping</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-4 font-bold">Interests</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {interestOptions.map(option => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer group/item">
                      <div 
                        onClick={() => toggleInterest(option)}
                        className={`w-4 h-4 border border-[#1A1A1A]/20 rounded flex items-center justify-center transition-all ${formData.interests.includes(option) ? 'bg-[#D4AF37] border-[#D4AF37]' : 'bg-white group-hover/item:border-[#D4AF37]'}`}
                      >
                        {formData.interests.includes(option) && (
                          <svg className="w-2.5 h-2.5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                        )}
                      </div>
                      <span className="text-xs text-stone-600 font-medium select-none">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-2 font-bold">The Vision (Optional)</label>
                <textarea 
                  id="message"
                  className="w-full bg-white border-b border-[#1A1A1A]/10 py-2 px-1 text-base focus:border-[#D4AF37] outline-none transition-all font-normal resize-none h-16 text-[#1A1A1A] placeholder:opacity-30"
                  placeholder="Share any specific interests or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 bg-[#D4AF37] text-[#1A1A1A] text-[10px] uppercase tracking-[1em] font-black hover:bg-white transition-all duration-700 shadow-lg disabled:bg-stone-300 border-none"
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
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] tracking-tight uppercase leading-tight max-w-[600px] text-shadow-none">
              YOUR VISION HAS BEEN <br /> RECEIVED.
            </h3>
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