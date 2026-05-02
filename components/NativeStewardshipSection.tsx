import React from 'react';
import { motion } from 'motion/react';

export const NativeStewardshipSection: React.FC = () => {
  return (
    <section 
      id="native-stewardship"
      className="native-stewardship-section relative w-full overflow-hidden bg-[#1A1212]"
    >
      <div className="flex flex-col md:flex-row min-h-[600px] lg:min-h-[800px]">
        {/* Left Side: The Photograph */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://i.postimg.cc/tRk6Bsc2/KEN-9441copy.jpg"
            alt="Native Stewardship"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle gradient overlay to blend into the dark content if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1212]/20" />
        </div>

        {/* Right Side: The Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative bg-[#1A1212]">
          {/* Content Glassmorphism / Solid Veil for Signature Branding */}
          <div className="absolute inset-0 bg-[#1A1212]/80 md:bg-[#1A1212]/90 backdrop-blur-sm shadow-2xl" />
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative z-10 px-8 py-20 md:px-16 lg:px-24 text-left max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black">
                Signature
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white uppercase tracking-[0.05em] leading-[1.1] mb-10">
              NATIVE <br />
              <span className="italic font-light text-[#D4AF37]">STEWARDSHIP</span>
            </h2>
            
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed tracking-wide mb-12">
              Authentic Ugandan discovery from a native perspective. We don't just guide; we protect the rhythm of your journey. Our stewardship ensures that your experience is not only profound but respectful of the wild we call home.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <div className="bg-[#D4AF37] h-px w-24" />
              <div className="bg-transparent border border-white/20 p-6 shadow-2xl">
                <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.4em] font-black mb-1">LEGACY CRAFTSMANSHIP</p>
                <p className="text-white font-serif text-xl font-bold italic">Since 2018</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
