
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { AppSection, Tour, Destination } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TourCard } from './components/TourCard.tsx';
import { ExperienceCard } from './components/ExperienceCard.tsx';
import { Services } from './components/Services.tsx';
import { ItineraryGenerator } from './components/ItineraryGenerator.tsx';
import { WhyKuzuri } from './components/WhyKuzuri.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Footer } from './components/Footer.tsx';
import { InquiryModal } from './components/InquiryModal.tsx';
import { WhatsAppFAB } from './components/WhatsAppFAB.tsx';
import { AIChatBot } from './components/AIChatBot.tsx';
import { AdminPanel } from './components/AdminPanel.tsx';
import { DestinationDetail } from './components/DestinationDetail.tsx';
import { WildlifeConservationSection } from './components/WildlifeConservationSection.tsx';
import { DestinationsOverview } from './components/DestinationsOverview.tsx';
import { TOURS, DESTINATIONS } from './constants.tsx';

// Simple Analytics Monitor
const monitorInteraction = (event: string, data: any = {}) => {
  const timestamp = new Date().toISOString();
  console.log(`[MONITORING][${timestamp}] ${event}`, data);
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPreFill, setInquiryPreFill] = useState('');
  
  const abVariant = useMemo(() => (Math.random() > 0.5 ? 'A' : 'B'), []);

  const plannerRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    monitorInteraction('PAGE_VIEW', { section: activeSection, abVariant });
  }, [activeSection, abVariant]);

  useEffect(() => {
    if (selectedDestination) {
      document.title = `${selectedDestination.name} | Kuzuri Escapades`;
      return;
    }

    const metaDescriptions: Record<string, string> = {
      [AppSection.HOME]: "Sur Mesure Ugandan escapades for the discerning traveler. Native curators of silence, elegance, and deep wilderness immersion.",
      [AppSection.DESTINATIONS]: "Discover Bwindi's gorillas, Murchison Falls, and Lake Mburo. Curated luxury travel to Uganda's most breathtaking destinations.",
      [AppSection.SERVICES]: "VIP airport transfers, premium car hire, boutique lodges, and expert guides. Concierge services for effortless luxury travel in Uganda.",
      [AppSection.PLANNER]: "Bespoke 10-14 day luxury safaris. Gorilla trekking, wildlife encounters, and cultural immersion crafted for discerning travelers.",
      [AppSection.ABOUT]: "The Kuzuri provenance. Architects of silence and profound wilderness in the heart of Africa.",
      [AppSection.ADMIN]: "Kuzuri Escapades Administration Portal."
    };

    const titles: Record<string, string> = {
      [AppSection.HOME]: "Kuzuri Escapades | Bespoke Luxury Travel Uganda",
      [AppSection.DESTINATIONS]: "Explore Uganda's Destinations | Kuzuri Escapades",
      [AppSection.SERVICES]: "Luxury Travel Services | Kuzuri Escapades",
      [AppSection.PLANNER]: "Luxury Uganda Safari Packages | Kuzuri Escapades",
      [AppSection.ABOUT]: "Our Story & Philosophy | Kuzuri Escapades",
      [AppSection.ADMIN]: "Admin Portal | Kuzuri Escapades"
    };

    document.title = titles[activeSection] || titles[AppSection.HOME];
    
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDescriptions[activeSection] || metaDescriptions[AppSection.HOME]);
    }
  }, [activeSection, selectedDestination]);

  const handleNavigate = (section: AppSection) => {
    monitorInteraction('NAVIGATION_CLICK', { to: section });
    setSelectedDestination(null);
    setActiveSection(section);
    if (section === AppSection.ADMIN) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const target = {
      [AppSection.PLANNER]: plannerRef,
      [AppSection.DESTINATIONS]: destinationsRef,
      [AppSection.SERVICES]: servicesRef,
      [AppSection.ABOUT]: aboutRef,
    }[section as keyof typeof target];

    if (target?.current) {
      target.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === AppSection.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTourBookingRequest = (tour: Tour) => {
    monitorInteraction('TOUR_INTEREST', { tourId: tour.id, tourName: tour.name });
    setInquiryPreFill(`I am interested in the ${tour.name} itinerary.`);
    setIsInquiryOpen(true);
  };

  const handleServiceInquiry = (serviceName: string) => {
    monitorInteraction('SERVICE_INQUIRY', { service: serviceName });
    setInquiryPreFill(`I would like to inquire about your ${serviceName} concierge service.`);
    setIsInquiryOpen(true);
  };

  const handleGeneralInquiry = (subject: string) => {
    monitorInteraction('GENERAL_INQUIRY', { subject });
    setInquiryPreFill(`I would like to inquire about ${subject}.`);
    setIsInquiryOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.reveal-trigger, .reveal-image').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeSection, selectedDestination]);

  if (activeSection === AppSection.ADMIN) {
    return (
      <div className="relative min-h-screen bg-white">
        <Navbar 
          activeSection={activeSection} 
          onNavigate={handleNavigate} 
          onEnquire={() => setIsInquiryOpen(true)} 
        />
        <AdminPanel onExit={() => handleNavigate(AppSection.HOME)} />
        <Footer onEnquire={() => setIsInquiryOpen(true)} onAdminAccess={() => handleNavigate(AppSection.ADMIN)} />
      </div>
    );
  }

  if (selectedDestination) {
    return (
      <div className="relative min-h-screen bg-white selection:bg-[#002d04] selection:text-[#d4af37]">
        <Navbar 
          activeSection={AppSection.DESTINATIONS} 
          onNavigate={handleNavigate} 
          onEnquire={() => setIsInquiryOpen(true)} 
        />
        <main>
          <DestinationDetail 
            destination={selectedDestination} 
            onBack={() => setSelectedDestination(null)} 
          />
        </main>
        <Footer 
          onEnquire={() => setIsInquiryOpen(true)} 
          onAdminAccess={() => handleNavigate(AppSection.ADMIN)} 
        />
        <InquiryModal 
          isOpen={isInquiryOpen} 
          onClose={() => setIsInquiryOpen(false)}
          initialMessage={inquiryPreFill}
        />
        <WhatsAppFAB />
        <AIChatBot />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#002d04] selection:text-[#d4af37]">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 z-[110] bg-[#d4af37] text-white px-8 py-4 uppercase tracking-[0.4em] text-[10px] font-bold shadow-2xl"
      >
        Skip to content
      </a>
      
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onEnquire={() => {
          setInquiryPreFill('');
          setIsInquiryOpen(true);
        }} 
      />

      <main id="main-content" role="main">
        <Hero onStartPlanning={() => handleNavigate(AppSection.PLANNER)} />

        {/* Brand Philosophy Section */}
        <section className="py-24 md:py-64 lg:py-80 bg-white" aria-labelledby="philosophy-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-24 lg:gap-48 items-center">
              <div className="w-full lg:w-1/2 reveal-image aspect-[4/5] shadow-[0_60px_120px_-30px_rgba(0,45,4,0.12)] bg-stone-50 overflow-hidden">
                <div className="image-container-standard h-full">
                  <img 
                    src="https://i.postimg.cc/jL5HqCPF/ivan-sabayuki-U9Fn5q-Ugp-WE-unsplash-750x400.jpg" 
                    alt="A majestic African elephant captured in soft, golden light on the savanna." 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-[4000ms] grayscale-[0.2] hover:grayscale-0 will-change-transform"
                    style={{ backfaceVisibility: 'hidden' }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 reveal-trigger">
                <p className="text-[#d4af37] uppercase tracking-[1em] text-[11px] mb-8 font-bold">THE PHILOSOPHY</p>
                <h2 id="philosophy-title" className="text-5xl md:text-7xl lg:text-[8.5rem] font-serif mb-12 leading-[0.85] tracking-tighter text-[#002d04]">
                  Silence <br /><span className="italic font-light">as Luxury.</span>
                </h2>
                <div className="space-y-8 text-stone-500 font-light leading-relaxed text-lg md:text-2xl max-w-xl tracking-wide">
                  <p>
                    We curate experiences for those who recognize that the most profound journeys are often the quietest.
                  </p>
                  <p>
                    At Kuzuri, we reveal the <span className="text-[#002d04] italic font-serif">"Sur Mesure"</span>—an intimate dialogue between traveler and wild. No noise, only the pure essence of the moment.
                  </p>
                </div>
                <div className="mt-16 pt-12 border-t border-stone-100 flex items-center gap-8">
                  <div className="w-16 h-16 bg-[#002d04] flex items-center justify-center text-white font-serif text-3xl shadow-2xl" aria-hidden="true">L</div>
                  <div className="flex flex-col">
                    <span className="text-[13px] uppercase tracking-[0.5em] font-bold text-[#002d04]">Lucky .K</span>
                    <span className="text-[11px] uppercase tracking-[0.4em] text-stone-300 mt-1 font-bold">Lead Curator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyKuzuri />

        <WildlifeConservationSection onEnquire={handleGeneralInquiry} />

        {/* Visual Mosaic Gallery Section */}
        <section className="py-24 md:py-48 bg-[#fafaf9] overflow-hidden">
          <div className="container mx-auto px-6 mb-16">
             <p className="text-[#d4af37] uppercase tracking-[1em] text-[11px] mb-6 font-bold text-center">GALLERY</p>
             <h2 className="text-4xl md:text-6xl font-serif text-[#002d04] text-center tracking-tight mb-12">The <span className="italic">Visual Archive</span> of the Land</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 h-[80vh]">
            <div className="col-span-1 row-span-2 reveal-image overflow-hidden">
              <img src="https://i.postimg.cc/qzRsBgyD/images.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Gorilla encounter" />
            </div>
            <div className="col-span-1 row-span-1 reveal-image overflow-hidden">
               <img src="https://i.postimg.cc/TpwV2hnY/top-things-to-do-in-uganda.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Savanna sunset" />
            </div>
            <div className="col-span-2 row-span-1 reveal-image overflow-hidden">
               <img src="https://i.postimg.cc/0bBpzxCQ/unnamed2.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Nile landscape" />
            </div>
            <div className="col-span-1 row-span-1 reveal-image overflow-hidden">
               <img src="https://i.postimg.cc/vcNW4Mvm/Uganda-Food-Tours-and-Safaris-3.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Cultural roots" />
            </div>
            <div className="col-span-1 row-span-1 reveal-image overflow-hidden">
               <img src="https://i.postimg.cc/hf59Xg0W/Tanzani-Wildlife-tour-1536x1152.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Lion tracking" />
            </div>
            <div className="col-span-1 row-span-1 reveal-image overflow-hidden">
               <img src="https://i.postimg.cc/Mpd6Vbrs/CTC-Conservation-center-lion-cubs-scaled.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Conservation center" />
            </div>
          </div>
        </section>

        <DestinationsOverview onViewAll={() => handleNavigate(AppSection.DESTINATIONS)} />

        {/* Territory Showcase (Destinations Section) */}
        <section ref={destinationsRef} className="py-24 md:py-64 bg-white overflow-hidden" aria-labelledby="destinations-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-40 border-b border-stone-200 pb-20 reveal-trigger">
              <div className="max-w-4xl">
                <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[11px] mb-8 font-bold">THE TERRITORY</p>
                <h2 id="destinations-title" className="text-6xl md:text-[8rem] lg:text-[9.5rem] font-serif text-[#002d04] tracking-tighter leading-none">
                  Untamed <br /><span className="italic font-light text-stone-300">Sanctuaries.</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
              {DESTINATIONS.map((dest, idx) => (
                <div key={dest.id} onClick={() => setSelectedDestination(dest)} className="cursor-pointer">
                  <ExperienceCard 
                    destination={dest} 
                    index={idx}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Showcase (Tours Section) */}
        <section className="py-24 md:py-64 bg-[#fafaf9]" aria-labelledby="gallery-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
             <div className="mb-24 text-center reveal-trigger">
                <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[11px] mb-8 font-bold">THE COLLECTION</p>
                <h2 id="gallery-title" className="text-5xl md:text-7xl font-serif text-[#002d04] tracking-tighter">
                  Curated <span className="italic font-light">Journeys.</span>
                </h2>
             </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-32`}>
              {TOURS.map((tour, idx) => (
                <div key={tour.id}>
                  <TourCard 
                    tour={tour} 
                    onRequestBooking={handleTourBookingRequest}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Page Content Section */}
        <div ref={servicesRef}>
          <Services onEnquireService={handleServiceInquiry} />
        </div>

        <div ref={plannerRef} id="planner-section">
          <ItineraryGenerator />
        </div>

        {/* Brand Provenance Section */}
        <section ref={aboutRef} className="py-24 md:py-64 lg:py-80 bg-white" aria-labelledby="provenance-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-[#d4af37] uppercase tracking-[1.5em] text-[11px] mb-16 md:mb-24 font-bold reveal-trigger">PROVENANCE</p>
              <h2 id="provenance-title" className="text-5xl md:text-8xl lg:text-[11rem] font-serif mb-24 md:mb-40 tracking-tighter leading-[0.8] italic text-[#002d04] reveal-trigger">"Crafting legacies, <br /> not just trips."</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 lg:gap-40 text-left border-t border-stone-100 pt-20 md:pt-32 reveal-trigger">
                {[
                  { title: "Heritage", text: "Rooted in a decade of navigating the Albertine Rift, we possess an intimacy with this land that no global agency can mirror. We are natives of the mists." },
                  { title: "Curation", text: "Precision defines the \"Lucky .K Touch\"—invisible logistics, a seamless daily rhythm, and transitions that feel like a gentle breath." },
                  { title: "Reciprocity", text: "Luxury must nourish. We partner exclusively with sanctuaries that honor both the fragile ecosystem and its indigenous guardians." }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-[13px] uppercase tracking-[0.7em] mb-10 text-[#002d04] font-bold group-hover:text-[#d4af37] transition-colors">{item.title}</h4>
                    <p className="text-lg md:text-2xl text-stone-400 font-light leading-relaxed tracking-wide">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Final Luxury Call to Action */}
        <section className="py-40 md:py-80 bg-[#002d04] text-white text-center overflow-hidden relative" aria-labelledby="cta-title">
          <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />
          <div className="container mx-auto px-6 relative z-10">
            <h3 id="cta-title" className="text-4xl md:text-[7.5rem] font-serif mb-20 md:mb-32 font-light tracking-tighter max-w-6xl mx-auto leading-[1]">
              A private narrative <br /> <span className="italic font-light text-[#d4af37]">is waiting to be shared.</span>
            </h3>
            <button 
              onClick={() => {
                monitorInteraction('CTA_CLICK', { label: 'Request Consultation Bottom' });
                setInquiryPreFill('');
                setIsInquiryOpen(true);
              }}
              className="px-16 md:px-28 py-8 md:py-10 border border-white/20 text-[13px] uppercase tracking-[1.2em] font-bold hover:bg-white hover:text-[#002d04] transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl"
              aria-label="Connect with our curators to start your story"
            >
              Request a Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer 
        onEnquire={() => {
          setInquiryPreFill('');
          setIsInquiryOpen(true);
        }} 
        onAdminAccess={() => handleNavigate(AppSection.ADMIN)}
      />
      
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)}
        initialMessage={inquiryPreFill}
      />

      <WhatsAppFAB />
      <AIChatBot />
    </div>
  );
};

export default App;
