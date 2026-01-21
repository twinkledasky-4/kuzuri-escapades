
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { AppSection, Tour } from './types.ts';
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
import { TOURS, DESTINATIONS } from './constants.tsx';

// Simple Analytics Monitor
const monitorInteraction = (event: string, data: any = {}) => {
  const timestamp = new Date().toISOString();
  console.log(`[MONITORING][${timestamp}] ${event}`, data);
  // Implementation of production analytics (e.g., GTM, Mixpanel) would go here
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPreFill, setInquiryPreFill] = useState('');
  
  // A/B testing state: Variant A is standard grid, Variant B is alternating staggered
  const abVariant = useMemo(() => (Math.random() > 0.5 ? 'A' : 'B'), []);

  const plannerRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Track Page Views
  useEffect(() => {
    monitorInteraction('PAGE_VIEW', { section: activeSection, abVariant });
  }, [activeSection, abVariant]);

  // Dynamic SEO Metadata Updates
  useEffect(() => {
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
  }, [activeSection]);

  const handleNavigate = (section: AppSection) => {
    monitorInteraction('NAVIGATION_CLICK', { to: section });
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
  }, [activeSection]);

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
              <div className="w-full lg:w-1/2 overflow-hidden reveal-image aspect-[4/5] shadow-[0_60px_120px_-30px_rgba(0,45,4,0.12)]">
                <img 
                  src="https://i.postimg.cc/jL5HqCPF/ivan-sabayuki-U9Fn5q-Ugp-WE-unsplash-750x400.jpg" 
                  alt="A soft, inviting capture of a savanna elephant in golden natural light" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-[4000ms] grayscale hover:grayscale-0"
                />
              </div>
              <div className="w-full lg:w-1/2 reveal-trigger">
                <p className="text-[#d4af37] uppercase tracking-[1em] text-[9px] mb-8 font-bold">THE PHILOSOPHY</p>
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
                    <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-[#002d04]">Lucky .K</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-stone-300 mt-1 font-bold">Lead Curator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyKuzuri />

        {/* Territory Showcase (Destinations Section) */}
        <section ref={destinationsRef} className="py-24 md:py-64 bg-[#fafaf9] overflow-hidden" aria-labelledby="destinations-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-40 border-b border-stone-200 pb-20 reveal-trigger">
              <div className="max-w-4xl">
                <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[10px] mb-8 font-bold">THE TERRITORY</p>
                <h2 id="destinations-title" className="text-6xl md:text-[8rem] lg:text-[9.5rem] font-serif text-[#002d04] tracking-tighter leading-none">
                  Untamed <br /><span className="italic font-light text-stone-300">Sanctuaries.</span>
                </h2>
              </div>
              <div className="text-right mt-12 md:mt-0 opacity-40 hidden md:block" aria-hidden="true">
                <p className="text-[11px] uppercase tracking-[0.5em] text-stone-300 mb-2 font-bold">Database Alpha</p>
                <p className="text-[11px] uppercase tracking-[0.5em] text-[#002d04] font-bold">Primary Ecosystems</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
              {DESTINATIONS.map((dest, idx) => (
                <ExperienceCard 
                  key={dest.id} 
                  destination={dest} 
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Collection Showcase (Tours Section) with A/B Testing Toggle */}
        <section className="py-24 md:py-64 bg-white" aria-labelledby="gallery-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
             <div className="mb-24 reveal-trigger">
                <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[10px] mb-8 font-bold">THE COLLECTION</p>
                <h2 id="gallery-title" className="text-5xl md:text-7xl font-serif text-[#002d04] tracking-tighter">
                  Curated <span className="italic font-light">Journeys.</span>
                </h2>
                <p className="text-[9px] text-stone-300 mt-2 uppercase tracking-widest font-bold">Variant {abVariant} Display Active</p>
             </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-32 ${abVariant === 'B' ? 'items-start' : ''}`}>
              {TOURS.map((tour, idx) => (
                <div key={tour.id} className={abVariant === 'B' && idx % 2 !== 0 ? 'md:mt-32' : ''}>
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

        {/* Immersive Parallax Visualization */}
        <section className="relative h-[60vh] md:h-[95vh] w-full overflow-hidden" aria-hidden="true">
          <img 
            src="https://i.postimg.cc/0bBpzxCQ/unnamed2.jpg" 
            alt="Untamed landscape"
            className="w-full h-[130%] object-cover absolute top-[-15%] left-0 -z-10 brightness-[0.82] transition-transform duration-[15s] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002d04]/20 via-transparent to-[#002d04]/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
             <span className="text-white/5 text-[28vw] font-serif italic select-none leading-none tracking-tighter">Untamed</span>
             <p className="text-white/80 uppercase tracking-[2.2em] text-[10px] md:text-[14px] font-bold mt-[-3vw]">The Infinite Horizon</p>
          </div>
        </section>

        <div ref={plannerRef}>
          <ItineraryGenerator />
        </div>

        {/* Brand Provenance Section */}
        <section ref={aboutRef} className="py-24 md:py-64 lg:py-80 bg-white" aria-labelledby="provenance-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-[#d4af37] uppercase tracking-[1.5em] text-[9px] mb-16 md:mb-24 font-bold reveal-trigger">PROVENANCE</p>
              <h2 id="provenance-title" className="text-5xl md:text-8xl lg:text-[11rem] font-serif mb-24 md:mb-40 tracking-tighter leading-[0.8] italic text-[#002d04] reveal-trigger">"Crafting legacies, <br /> not just trips."</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 lg:gap-40 text-left border-t border-stone-100 pt-20 md:pt-32 reveal-trigger">
                {[
                  { title: "Heritage", text: "Rooted in a decade of navigating the Albertine Rift, we possess an intimacy with this land that no global agency can mirror. We are natives of the mists." },
                  { title: "Curation", text: "Precision defines the \"Lucky .K Touch\"—invisible logistics, a seamless daily rhythm, and transitions that feel like a gentle breath." },
                  { title: "Reciprocity", text: "Luxury must nourish. We partner exclusively with sanctuaries that honor both the fragile ecosystem and its indigenous guardians." }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-[11px] uppercase tracking-[0.7em] mb-10 text-[#002d04] font-bold group-hover:text-[#d4af37] transition-colors">{item.title}</h4>
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
              className="px-16 md:px-28 py-8 md:py-10 border border-white/20 text-[11px] uppercase tracking-[1.2em] font-bold hover:bg-white hover:text-[#002d04] transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl"
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
