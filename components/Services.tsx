import React from 'react';
import { SERVICES } from '../constants.tsx';
import { Service } from '../types.ts';

// Added missing ServicesProps interface
interface ServicesProps {
  onEnquireService?: (serviceName: string) => void;
}

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'hotel':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="7" height="5" x="7" y="7" rx="1"/><rect width="7" height="5" x="10" y="12" rx="1"/>
        </svg>
      );
    case 'protocol':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22h20"/><path d="M11 3v9"/><path d="m15 7-4 4-4-4"/><path d="M3 13h18l-2 3H5l-2-3Z"/><path d="m5 16 1 4h12l1-4"/>
        </svg>
      );
    case 'fleet':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 .6.4 1 1 1h1"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
        </svg>
      );
    case 'guiding':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export const Services: React.FC<ServicesProps> = ({ onEnquireService }) => {
  return (
    <section className="bg-[#FAF8F3] border-b-2 border-[#1A1A1A]" aria-labelledby="services-hero-title">
      {/* Services Hero Header */}
      <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden border-b-2 border-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1600" 
            alt="Bespoke luxury service in Uganda" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/30" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[12px] font-bold mb-10 reveal-trigger">
            BEYOND THE JOURNEY
          </p>
          <h1 id="services-hero-title" className="text-6xl md:text-8xl lg:text-[10rem] text-[#F5F5DC] font-serif font-bold tracking-tighter leading-none mb-12 reveal-trigger">
            Private Concierge Elegance
          </h1>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mb-12 reveal-trigger" />
        </div>
      </div>

      {/* Service Selection Grid */}
      <div className="py-32 md:py-64 bg-[#F5F5DC]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-32 text-center max-w-3xl mx-auto reveal-trigger">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] mb-12">A Suite of Impeccable Care.</h2>
            <p className="text-[#654321] font-light text-xl tracking-wide leading-relaxed opacity-90 italic">
              Our curated services are the invisible threads that ensure your odyssey moves with effortless grace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.filter(s => s.active).map((service, idx) => (
              <div 
                key={service.id} 
                className="reveal-trigger flex flex-col group p-10 bg-[#F5F5DC] border-2 border-[#1A1A1A] transition-all duration-1000 hover:-translate-y-2 hover:shadow-xl relative"
              >
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
                
                <div className="text-[#8B5A2B] mb-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  <ServiceIcon name={service.icon_name} />
                </div>
                
                <p className="text-[#8B5A2B] text-[9px] uppercase tracking-[0.6em] font-bold mb-4">{service.typeLabel}</p>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-8 group-hover:italic transition-all duration-700">
                  {service.name}
                </h3>
                <p className="text-[#1A1A1A] text-base font-normal leading-relaxed mb-10 tracking-wide opacity-90">
                  {service.description}
                </p>
                
                <ul className="mb-12 space-y-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A] font-bold">
                      <span className="w-2 h-[2px] bg-[#D4AF37] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onEnquireService?.(service.name)}
                  className="mt-auto w-full py-5 text-[10px] uppercase tracking-[0.5em] font-extrabold border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 shadow-sm"
                >
                  Consult Concierge
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
