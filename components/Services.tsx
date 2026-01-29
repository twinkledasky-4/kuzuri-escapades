
import React from 'react';
import { SERVICES } from '../constants.tsx';
import { Compass, Car, Binoculars, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  onEnquireService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onEnquireService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'compass': return <Compass size={32} strokeWidth={1.2} />;
      case 'jeep': return <Car size={32} strokeWidth={1.2} />;
      case 'binoculars': return <Binoculars size={32} strokeWidth={1.2} />;
      case 'shield': return <ShieldCheck size={32} strokeWidth={1.2} />;
      default: return <Compass size={32} strokeWidth={1.2} />;
    }
  };

  return (
    <section id="services-section" className="pt-0 pb-12 md:pb-16 bg-[#1A1412] px-6 scroll-mt-24 border-y border-white/5 m-0 block">
      <div className="container mx-auto max-w-[1700px]">
        {/* Section Header - Updated to Left Alignment */}
        <div className="mb-20 text-left reveal-trigger pt-16 md:pt-24">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-bold mb-8">THE CONCIERGE EXPERIENCE</p>
          <h2 className="text-5xl md:text-8xl font-serif font-bold text-[#D4AF37] mb-8 tracking-tighter">Invisible Care.</h2>
          <p className="text-white text-xl font-light italic opacity-100 max-w-2xl">
            Luxury is found in the things you don't have to notice.
          </p>
        </div>

        {/* 4-Column Grid for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {SERVICES.map((svc) => (
            <div key={svc.id} className="reveal-trigger group flex flex-col h-full bg-[#1F1917] p-10 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 shadow-2xl relative overflow-hidden text-left">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-colors" />

              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#1A1412] flex items-center justify-center mb-10 text-[#D4AF37] border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-[#1A1A12] group-hover:border-[#D4AF37] transition-all duration-700">
                 {getIcon(svc.icon_name)}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#D4AF37] text-xs font-serif opacity-40">0{svc.order_index}</span>
                <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-black">{svc.typeLabel}</p>
              </div>

              {/* Heading: Safari Gold, Bold Serif */}
              <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 group-hover:italic transition-all duration-700 leading-snug">
                {svc.name}
              </h3>
              
              {/* Body Text: Rescaled to 16px (text-base) */}
              <p className="text-[#FFFFFF] text-base font-normal leading-relaxed mb-10 flex-grow opacity-100">
                {svc.description}
              </p>
              
              <ul className="space-y-3 mb-12">
                {svc.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white font-black group-hover:text-[#D4AF37] transition-colors opacity-100">
                    <span className="w-3 h-[1px] bg-[#D4AF37]" /> {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                <button 
                  onClick={() => onEnquireService?.(svc.name)}
                  className="text-[10px] uppercase tracking-[0.6em] font-black border-b-2 border-[#D4AF37] pb-1 text-white hover:text-[#D4AF37] transition-all opacity-100"
                >
                  Inquire
                </button>
                
                {/* Navigation Link: > character in a styled box */}
                <button 
                  onClick={() => onEnquireService?.(svc.name)}
                  className="flex items-center gap-3 text-[#D4AF37] hover:text-white transition-all duration-500 group/nav"
                  aria-label={`Explore ${svc.name}`}
                >
                   <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover/nav:opacity-100 transition-opacity">Explore</span>
                   <div className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center group-hover/nav:bg-[#D4AF37] group-hover/nav:text-[#1A1A12] group-hover/nav:border-[#D4AF37] transition-all text-xl font-light leading-none pt-1">
                    &gt;
                   </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
