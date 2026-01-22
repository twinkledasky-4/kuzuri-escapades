import React, { useState, useRef, useEffect, useMemo } from 'react';
import { AppSection, Tour, Destination, Review } from './types.ts';
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
import { ContactPage } from './components/ContactPage.tsx';
import { TestimonialsPage } from './components/TestimonialsPage.tsx';
import { TOURS, DESTINATIONS, REVIEWS as INITIAL_REVIEWS } from './constants.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPreFill, setInquiryPreFill] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  
  const plannerRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const filteredTours = useMemo(() => {
    return TOURS.filter(tour => 
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleNavigate = (section: AppSection) => {
    setSelectedDestination(null);
    setActiveSection(section);
    
    const target = {
      [AppSection.PLANNER]: plannerRef,
      [AppSection.DESTINATIONS]: destinationsRef,
      [AppSection.SERVICES]: servicesRef,
      [AppSection.ABOUT]: aboutRef,
    }[section as keyof typeof target];

    if (target?.current) {
      target.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHelpfulVote = (id: string | number) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, helpful: r.helpful + 1 } : r));
  };

  const handleTourBookingRequest = (tour: Tour) => {
    setInquiryPreFill(`I am interested in the ${tour.name} itinerary.`);
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
      <div className="relative min-h-screen bg-[#F5F5DC]">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} onEnquire={() => setIsInquiryOpen(true)} />
        <AdminPanel 
          reviews={reviews} 
          onUpdateReviews={setReviews} 
          onExit={() => handleNavigate(AppSection.HOME)} 
        />
        <Footer onEnquire={() => setIsInquiryOpen(true)} onAdminAccess={() => handleNavigate(AppSection.ADMIN)} />
      </div>
    );
  }

  if (activeSection === AppSection.CONTACT) {
    return (
      <div className="relative min-h-screen bg-[#F5F5DC]">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} onEnquire={() => setIsInquiryOpen(true)} />
        <ContactPage />
        <Footer onEnquire={() => setIsInquiryOpen(true)} onAdminAccess={() => handleNavigate(AppSection.ADMIN)} />
        <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialMessage={inquiryPreFill} />
        <WhatsAppFAB />
        <AIChatBot />
      </div>
    );
  }

  if (activeSection === AppSection.TESTIMONIALS) {
    return (
      <div className="relative min-h-screen bg-[#F5F5DC]">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} onEnquire={() => setIsInquiryOpen(true)} />
        <TestimonialsPage reviews={reviews} onHelpfulClick={handleHelpfulVote} />
        <Footer onEnquire={() => setIsInquiryOpen(true)} onAdminAccess={() => handleNavigate(AppSection.ADMIN)} />
        <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialMessage={inquiryPreFill} />
        <WhatsAppFAB />
        <AIChatBot />
      </div>
    );
  }

  if (selectedDestination) {
    return (
      <div className="relative min-h-screen bg-[#F5F5DC]">
        <Navbar activeSection={AppSection.DESTINATIONS} onNavigate={handleNavigate} onEnquire={() => setIsInquiryOpen(true)} />
        <main>
          <DestinationDetail destination={selectedDestination} onBack={() => setSelectedDestination(null)} />
        </main>
        <Footer onEnquire={() => setIsInquiryOpen(true)} onAdminAccess={() => handleNavigate(AppSection.ADMIN)} />
        <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialMessage={inquiryPreFill} />
        <WhatsAppFAB />
        <AIChatBot />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#F5F5DC] selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onEnquire={() => { setInquiryPreFill(''); setIsInquiryOpen(true); }} 
      />

      <main id="main-content" role="main">
        <Hero onStartPlanning={() => handleNavigate(AppSection.PLANNER)} />

        <section className="py-32 md:py-64 bg-[#F5F5DC] border-y-2 border-[#1A1A1A] px-4" aria-labelledby="hub-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center reveal-trigger mb-32">
              <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[12px] mb-10 font-bold">UGANDA HUB</p>
              <h2 id="hub-title" className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] mb-12 tracking-tighter">The <span className="italic font-light text-[#654321]">Soul</span> of East Africa</h2>
              <p className="text-[#1A1A1A] font-light text-xl md:text-2xl leading-relaxed tracking-wide mb-16 max-w-2xl mx-auto opacity-90">
                A definitive collection of narratives through the Pearl.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 reveal-trigger">
              {[
                { title: "Primate Odyssey", img: "https://i.postimg.cc/qzRsBgyD/images.jpg", desc: "Intimate encounters in the ancient Bwindi mists." },
                { title: "Savannah Majesty", img: "https://i.postimg.cc/XpJfNXdx/10-Must-Visit-Tourist-Attractions-in-Uganda-in-2025.webp", desc: "Game drives across golden Albertine horizons." },
                { title: "Native Heritage", img: "https://i.postimg.cc/vcNW4Mvm/Uganda-Food-Tours-and-Safaris-3.jpg", desc: "Ancestral wisdom and ancestral heritage." }
              ].map((cat, idx) => (
                <div key={idx} className="group cursor-pointer" onClick={() => setSearchQuery(cat.title)}>
                  <div className="aspect-[4/6] overflow-hidden mb-10 shadow-2xl transition-transform duration-1000 group-hover:-translate-y-4 border-2 border-[#1A1A1A]">
                    <img src={cat.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={cat.title} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:italic transition-all duration-700 tracking-wide">{cat.title}</h3>
                  <p className="text-[#654321] font-light tracking-[0.1em] uppercase text-xs font-semibold">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DestinationsOverview onViewAll={() => handleNavigate(AppSection.DESTINATIONS)} />

        <section className="py-32 md:py-64 bg-[#FAF8F3] border-y-2 border-[#1A1A1A] px-4" aria-labelledby="categories-title">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <p className="text-[#8B5A2B] uppercase tracking-[1.2em] text-[11px] mb-12 font-bold reveal-trigger">THE ODYSSEY SERIES</p>
            <h2 id="categories-title" className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] mb-24 tracking-tighter reveal-trigger">Tailored to your <span className="italic font-light text-[#654321]">Temperament.</span></h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 reveal-trigger">
              {[
                { title: "Adventure", icon: "🏔️" },
                { title: "Wellness", icon: "🧘" },
                { title: "Family", icon: "🦁" },
                { title: "Photography", icon: "📸" },
                { title: "Birding", icon: "🦅" },
                { title: "Honeymoon", icon: "🥂" },
                { title: "Ancestral", icon: "🏺" },
                { title: "Scientific", icon: "🔬" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 border-2 border-[#1A1A1A] flex flex-col items-center group hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-700 hover:shadow-2xl">
                  <span className="text-5xl mb-8 opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                  <h4 className="text-[11px] uppercase tracking-[0.6em] font-bold text-[#1A1A1A]">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={destinationsRef} className="py-32 md:py-64 bg-[#F5F5DC] border-y-2 border-[#1A1A1A] px-4">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
              {DESTINATIONS.map((dest, idx) => (
                <div key={dest.id} onClick={() => setSelectedDestination(dest)}>
                  <ExperienceCard destination={dest} index={idx} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 md:py-64 bg-[#F5F5DC] border-y-2 border-[#1A1A1A] px-4" id="packages-section">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
             <div className="mb-32 text-center reveal-trigger">
                <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[12px] mb-10 font-bold">THE COLLECTION</p>
                <h2 className="text-6xl md:text-8xl font-serif font-bold text-[#1A1A1A] mb-20 tracking-tighter">Curated <span className="italic font-light text-[#654321]">Odysseys.</span></h2>
                
                <div className="max-w-2xl mx-auto relative mt-20">
                  <input 
                    type="text" 
                    placeholder="Refine your search (e.g. Bwindi, Primate...)" 
                    className="w-full py-6 pl-16 pr-10 bg-white border-2 border-[#1A1A1A] text-lg font-light focus:border-[#8B5A2B] outline-none transition-all placeholder:text-[#654321]/50 text-[#1A1A1A]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-[#654321]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
             </div>
            
            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} onRequestBooking={handleTourBookingRequest} />
                ))}
              </div>
            ) : (
              <div className="py-32 text-center">
                <p className="text-[#654321] italic text-xl font-light">The horizon is clear. Try a different vision.</p>
              </div>
            )}
          </div>
        </section>

        <div ref={servicesRef}>
          <Services onEnquireService={(svc) => { setInquiryPreFill(`Inquiry about ${svc}`); setIsInquiryOpen(true); }} />
        </div>

        <section className="py-32 md:py-64 bg-[#FAF8F3] border-y-2 border-[#1A1A1A] px-4">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
             <div className="mb-24 reveal-trigger text-center">
                <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[11px] mb-10 font-bold">ESSENTIALS</p>
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] tracking-tight">The Curator's <span className="italic text-[#654321]">Manifest.</span></h2>
             </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 reveal-trigger">
              {[
                { title: "Visa Protocol", text: "Seamless navigation of Uganda's E-visa requirements. We handle the manifest, you handle the anticipation. Contact info@kuzuri-escapades.com for assistance." },
                { title: "Packing Gear", text: "A curated list of trekking and savannah gear. From silent forest boots to neutral tone textiles crafted for the Albertine biome." },
                { title: "Primal Health", text: "Latest health protocols, yellow fever certification, and our private medical concierge network. Secure guidance for a safe odyssey." }
              ].map((item, idx) => (
                <div key={idx} className="p-16 bg-white border-2 border-[#1A1A1A] group hover:bg-[#D4AF37] transition-all duration-700">
                  <h4 className="text-[13px] uppercase tracking-[0.6em] font-bold text-[#1A1A1A] mb-10">{item.title}</h4>
                  <p className="text-[#1A1A1A] font-light leading-relaxed mb-12 text-lg tracking-wide">{item.text}</p>
                  <button 
                    onClick={() => { setInquiryPreFill(`Requesting the ${item.title} manifest.`); setIsInquiryOpen(true); }}
                    className="px-6 py-3 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[10px] uppercase tracking-[0.5em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500 shadow-sm"
                  >
                    Request Guide
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div ref={plannerRef}>
          <ItineraryGenerator />
        </div>

        <section ref={aboutRef}>
          <WhyKuzuri />
        </section>

        <WildlifeConservationSection onEnquire={(sub) => { setInquiryPreFill(`Inquiry about ${sub}`); setIsInquiryOpen(true); }} />
        
        <section className="border-y-2 border-[#1A1A1A] px-4">
          <Testimonials reviews={reviews} onNavigateToAll={() => handleNavigate(AppSection.TESTIMONIALS)} onHelpfulClick={handleHelpfulVote} />
        </section>

        <section className="py-24 bg-[#F5F5DC] border-t-2 border-[#1A1A1A]">
          <div className="container mx-auto px-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.6em] text-[#654321]/60 font-bold mb-16">SECURE TRANSACTIONS & PRIVATE BANKING</p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-10" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-7" alt="PayPal" />
              <img src="https://i.postimg.cc/t4G2q6wS/mtn-momo.png" className="h-14" alt="Mobile Money" />
            </div>
          </div>
        </section>

        <section className="py-48 md:py-80 bg-[#1A1A1A] text-white text-center relative overflow-hidden border-t-2 border-[#D4AF37]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />
          <div className="container mx-auto px-6 relative z-10">
            <h3 className="text-5xl md:text-9xl font-serif mb-24 font-bold tracking-tighter leading-none italic text-[#D4AF37]">
              A private narrative <br /> <span className="text-white not-italic">is waiting to be shared.</span>
            </h3>
            <button 
              onClick={() => { setInquiryPreFill(''); setIsInquiryOpen(true); }}
              className="px-20 md:px-32 py-10 bg-[#8B5A2B] text-[#F5F5DC] text-[12px] uppercase tracking-[1em] font-extrabold border-2 border-[#1A1A1A] hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-1000 shadow-2xl"
            >
              Request a Manifest
            </button>
          </div>
        </section>
      </main>

      <Footer onEnquire={() => { setInquiryPreFill(''); setIsInquiryOpen(true); }} onAdminAccess={() => handleNavigate(AppSection.ADMIN)} />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialMessage={inquiryPreFill} />
      <WhatsAppFAB />
      <AIChatBot />
    </div>
  );
};

export default App;