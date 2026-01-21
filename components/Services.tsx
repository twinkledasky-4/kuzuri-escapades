
import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onEnquireService?: (serviceName: string) => void;
}

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'hotel':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="7" height="5" x="7" y="7" rx="1"/><rect width="7" height="5" x="10" y="12" rx="1"/>
        </svg>
      );
    case 'protocol':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22h20"/><path d="M11 3v9"/><path d="m15 7-4 4-4-4"/><path d="M3 13h18l-2 3H5l-2-3Z"/><path d="m5 16 1 4h12l1-4"/>
        </svg>
      );
    case 'fleet':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 .6.4 1 1 1h1"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
        </svg>
      );
    case 'guiding':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      );
    default:
      return null;
  }
};

export const Services: React.FC<ServicesProps> = ({ onEnquireService }) => {
  return (
    <section className="bg-white" aria-labelledby="services-hero-title">
      {/* Refined Services Hero */}
      <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=85&w=2400" 
            alt="Luxury lodge interior" 
            className="w-full h-full object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002d04]/40 via-transparent to-[#002d04]/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-[#d4af37] uppercase tracking-[1.2em] text-[10px] md:text-[12px] font-bold mb-10 reveal-trigger">
            BEYOND THE JOURNEY
          </p>
          <h1 id="services-hero-title" className="text-6xl md:text-8xl lg:text-[11rem] text-white font-serif tracking-tighter leading-none mb-12 reveal-trigger">
            Luxury Concierge <br /><span className="italic font-light">Services</span>
          </h1>
          <div className="h-[1px] w-24 bg-[#d4af37] mx-auto mb-12 reveal-trigger" />
          <p className="text-white/90 uppercase tracking-[0.6em] text-[11px] md:text-[14px] font-bold max-w-2xl mx-auto leading-loose reveal-trigger">
            Every detail orchestrated to perfection
          </p>
        </div>
      </div>

      {/* 4-Column Service Category Grid */}
      <div className="py-32 md:py-56 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-[#002d04] mb-8">A Suite of <span className="italic">Impeccable Care.</span></h2>
            <p className="text-stone-400 font-light text-lg tracking-wide leading-relaxed">
              Our concierge services extend beyond the itinerary, providing the invisible support structure required for true immersion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {SERVICES.filter(s => s.active).map((service, idx) => (
              <div 
                key={service.id} 
                className="reveal-trigger flex flex-col group p-10 bg-white shadow-[0_10px_30px_-10px_rgba(0,45,4,0.05)] border border-stone-100 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
              >
                {/* Savanna Gold accent line top border on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                
                <div className="text-[#d4af37] mb-8 group-hover:scale-110 transition-transform duration-500">
                  <ServiceIcon name={service.icon_name} />
                </div>
                
                <p className="text-[#d4af37] text-[8px] uppercase tracking-[0.5em] font-bold mb-3">{service.typeLabel}</p>
                <h3 className="text-[20px] font-serif text-[#002d04] mb-6 leading-tight group-hover:italic transition-all">
                  {service.name}
                </h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed mb-8 tracking-wide">
                  {service.description}
                </p>
                
                <ul className="mb-10 space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-stone-300 font-bold">
                      <span className="w-1 h-[1px] bg-[#d4af37]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onEnquireService?.(service.name)}
                  className="mt-auto w-full py-4 text-[9px] uppercase tracking-[0.4em] font-bold text-[#002d04] border border-[#002d04]/10 hover:bg-[#002d04] hover:text-white transition-all duration-500"
                >
                  Inquire About This Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Services Content (Legacy/Historical) */}
      <div className="py-32 md:py-64 container mx-auto px-6 md:px-12 lg:px-24 bg-[#fafaf9] border-y border-stone-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
          {[
            {
              title: "VIP Protocol",
              subtitle: "Invisible Transitions",
              description: "Bespoke meet-and-greet services at Entebbe International. Skip the noise with fast-track arrivals and private lounge access while our team handles every credential.",
              image: "https://images.unsplash.com/photo-1540339832862-1745299be71c?auto=format&fit=crop&q=85&w=1200"
            },
            {
              title: "Wilderness Wellness",
              subtitle: "Primal Restoration",
              description: "Yoga sessions on platforms overlooking the Bwindi canopy and private spa treatments using indigenous botanicals, curated within the sanctuary of your lodge.",
              image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=85&w=1200"
            }
          ].map((service, idx) => (
            <div key={idx} className="reveal-trigger group">
              <div className="relative overflow-hidden aspect-[16/10] mb-12 shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-90"
                />
                <div className="absolute inset-0 bg-[#002d04]/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <p className="text-[#d4af37] uppercase tracking-[0.6em] text-[9px] font-bold mb-4">{service.subtitle}</p>
              <h3 className="text-4xl font-serif text-[#002d04] mb-6 group-hover:italic transition-all duration-500">{service.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed text-lg tracking-wide max-w-lg">
                {service.description}
              </p>
              <div className="mt-8 w-12 h-[1px] bg-stone-100 group-hover:w-full group-hover:bg-[#d4af37]/20 transition-all duration-1000" />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Concierge */}
      <div className="py-40 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h4 className="text-3xl md:text-5xl font-serif text-[#002d04] mb-12 italic">"We handle the complexity; <br /> you curate the memories."</h4>
          <p className="text-stone-400 font-light text-lg mb-16 tracking-wide">
            Our concierge team is available 24/7 to adjust your rhythm on the fly. From securing last-minute permits to private chef arrangements, your wish is our operational baseline.
          </p>
          <div className="flex justify-center gap-10">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] font-bold mb-2">Private Line</span>
              <span className="text-lg font-bold text-[#002d04] tracking-widest">+256 708 012030</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
