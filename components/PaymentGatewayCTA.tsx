
import React from 'react';
import { ShieldCheck, CreditCard, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PaymentGatewayCTAProps {
  onNavigateToPortal: () => void;
}

export const PaymentGatewayCTA: React.FC<PaymentGatewayCTAProps> = ({ onNavigateToPortal }) => {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3] px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-[#1A1A1A] rounded-[30px] p-8 md:p-16 relative overflow-hidden shadow-2xl border-2 border-[#D4AF37]/20 group">
          {/* Background Textures */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] opacity-[0.03] blur-[100px] -mr-48 -mt-48 transition-all duration-1000 group-hover:opacity-[0.07]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#D4AF37]" />
                <p className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-bold">Secure Transactions</p>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight uppercase tracking-tighter">
                Official <span className="italic font-light text-[#D4AF37]">Payment</span> <br /> Portal.
              </h2>
              
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                Settle your safari dues through our secure Pesapal gateway. We support all major cards and mobile money providers across East Africa.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <CreditCard size={14} className="text-[#D4AF37]" /> Visa & Mastercard
                </div>
                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <Smartphone size={14} className="text-[#D4AF37]" /> Mobile Money (MTN/Airtel)
                </div>
                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <ShieldCheck size={14} className="text-[#D4AF37]" /> 256-bit SSL Secure
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="/pay"
                  onClick={(e) => { e.preventDefault(); onNavigateToPortal(); }}
                  className="inline-flex items-center gap-4 bg-[#D4AF37] text-black px-10 py-5 text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-white transition-all duration-500 rounded-sm shadow-xl group/btn no-underline cursor-pointer"
                >
                  Enter Portal <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-3xl border border-white/10 relative">
                <img 
                  src="https://i.postimg.cc/yd59GFFR/payment-(1).png" 
                  alt="Secure Payment Gateway" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-[10s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              {/* Floating Shield Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-3xl border border-[#D4AF37]/20 hidden md:block"
              >
                <ShieldCheck size={40} className="text-[#D4AF37] mb-3" />
                <p className="text-[#1A1A1A] text-[10px] font-black uppercase tracking-widest leading-tight">Verified <br />Merchant</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
