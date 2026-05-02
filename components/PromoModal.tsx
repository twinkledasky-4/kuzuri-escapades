import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export const PromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a small delay for better impact
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container (.flyer-modal-container) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] max-h-[70vh] flex flex-col z-[1000]"
          >
            {/* Close Button (.close-flyer-x) */}
            <button
              onClick={closeModal}
              className="absolute -top-[15px] -right-[15px] z-[1010] bg-black text-white rounded-full w-[30px] h-[30px] cursor-pointer border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors"
              aria-label="Close promotion"
            >
              <X size={16} strokeWidth={3} />
            </button>

            {/* Flyer Image Container */}
            <div className="w-full h-full relative overflow-hidden flex flex-col">
              <img
                src="https://i.postimg.cc/3ryt4rLd/savanna-escape-flyer.jpg"
                alt="Savanna Escape Promotion Flyer"
                className="w-full h-auto max-h-[65vh] object-contain border-2 border-[#D4AF37] shadow-[0_15px_50px_rgba(0,0,0,0.6)] block"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Context Footer */}
            <div className="mt-4 text-center">
              <button 
                onClick={() => {
                  closeModal();
                  const contactBlock = document.getElementById('contact-us');
                  if (contactBlock) contactBlock.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-black hover:text-white transition-colors"
              >
                — Click outside or 'X' to close —
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
