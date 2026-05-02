import React from 'react';
import { motion } from 'motion/react';

export const PromoFlyer: React.FC = () => {
  return (
    <section id="promo-flyer" className="bg-white py-12 md:py-24 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-[900px] w-full shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden border border-stone-100"
        >
          {/* Main Flyer Image */}
          {/* Using object-contain and h-auto to ensure no cropping per user request */}
          <img 
            src="https://i.postimg.cc/3ryt4rLd/savanna-escape-flyer.jpg" 
            alt="Savanna Escape Promotion - 600K Per Person" 
            className="w-full h-auto block object-contain"
            referrerPolicy="no-referrer"
          />
          
          {/* Subtle elegant border overlay */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg pointer-events-none" />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           viewport={{ once: true }}
           className="mt-12 text-center"
        >
           <h3 className="text-[12px] md:text-[14px] uppercase tracking-[0.6em] text-[#4A3728] font-bold mb-4">
             Special Seasonal Offer
           </h3>
           <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto opacity-60 mb-6" />
           <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#4A3728]/60 font-medium max-w-md mx-auto leading-loose">
             Embark on an unforgettable savanna escape with our limited-time competitive residency rates.
           </p>
        </motion.div>
      </div>
    </section>
  );
};
