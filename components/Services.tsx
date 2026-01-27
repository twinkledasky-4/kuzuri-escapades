import React from 'react';
import { SERVICES } from '../constants.tsx';

interface ServicesProps {
  onEnquireService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onEnquireService }) => {
  return (
    <section className="py-40 md:py-80 bg-white border-y border-gray-100 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-32 text-center reveal-trigger">
          <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-10">THE CONCIERGE MANIFEST</p>
          <h2 className="text-5xl md:text-8xl font-serif font-bold text-[#1A1A1A] mb-12 tracking-tighter">Invisible Care.</h2>
          <p className="text-[#1A1A1A]/50 text-xl font-light max-w-2xl mx-auto italic">
            Luxury is found in the things you don't have to notice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-32">
          {SERVICES.map((svc) => (
            <div key={svc.id} className="reveal-trigger group">
              <div className="w-16 h-16 bg-[#F9F9F9] flex items-center justify-center mb-12 group-hover:bg-[#8B5A2B] transition-colors duration-700">
                 <span className="text-[#8B5A2B] text-xl font-serif group-hover:text-white transition-colors">0{svc.order_index}</span>
              </div>
              <p className="text-[#8B5A2B] text-[10px] uppercase tracking-[0.5em] font-black mb-6">{svc.typeLabel}</p>
              <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-8 group-hover:italic transition-all duration-700">{svc.name}</h3>
              <p className="text-[#1A1A1A]/70 text-lg font-light leading-relaxed mb-12">{svc.description}</p>
              
              <ul className="space-y-4 mb-16">
                {svc.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A] font-black">
                    <span className="w-4 h-[1px] bg-[#D4AF37]" /> {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onEnquireService?.(svc.name)}
                className="text-[10px] uppercase tracking-[0.6em] font-black border-b-2 border-[#1A1A1A] pb-2 hover:text-[#8B5A2B] hover:border-[#8B5A2B] transition-all"
              >
                Inquire
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};