
import React, { useState, useRef, useEffect } from 'react';
import { AppSection, Tour, Destination, Review } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Footer } from './components/Footer.tsx';
import { InquiryModal } from './components/InquiryModal.tsx';
import { WhatsAppFAB } from './components/WhatsAppFAB.tsx';
import { AIChatBot } from './components/AIChatBot.tsx';
import { DestinationDetail } from './components/DestinationDetail.tsx';
import { TourCard } from './components/TourCard.tsx';
import { Expertise } from './components/Expertise.tsx';
import { LodgeGallery } from './components/LodgeGallery.tsx';
import { AccommodationsPage } from './components/AccommodationsPage.tsx';
import { DESTINATIONS, TOURS, REVIEWS } from './constants.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPreFill, setInquiryPreFill] = useState('');

  const handleNavigate = (section: AppSection) => {
    setActiveSection(section);
    setSelectedDestination(null); // Clear destination when navigating via main links
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestBooking = (tour: Tour) => {
    setInquiryPreFill(`I am interested in the ${tour.name} odyssey. Please share more details.`);
    setIsInquiryOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-trigger').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedDestination, activeSection]);

  const renderContent = () => {
    if (selectedDestination) {
      return (
        <DestinationDetail 
          destination={selectedDestination} 
          onBack={() => setSelectedDestination(null)} 
        />
      );
    }

    switch (activeSection) {
      case AppSection.ACCOMMODATIONS:
        return <AccommodationsPage onEnquire={() => setIsInquiryOpen(true)} />;
      default:
        return (
          <>
            {/* SECTION 1: THE HERO */}
            <Hero minimal={true} onStartPlanning={() => handleNavigate(AppSection.PLANNER)} />

            {/* SECTION: POPULAR ITINERARIES */}
            <section className="py-24 md:py-40 bg-white px-6">
              <div className="container mx-auto max-w-7xl text-center">
                <div className="mb-20 reveal-trigger">
                  <h2 className="text-3xl md:text-5xl font-sans font-semibold text-[#4A3728] uppercase tracking-[0.2em] leading-tight max-w-5xl mx-auto mb-8">
                    OUR MOST POPULAR KUZURI SAFARI ITINERARIES IN UGANDA
                  </h2>
                  <p className="text-[#1A1A1A] text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto opacity-80">
                    Discover Uganda your way and explore the country at your own pace. Our experts will organize the trip of your dreams, exactly as you want it!
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                  {TOURS.map((tour) => (
                    <div key={tour.id} className="reveal-trigger">
                      <TourCard tour={tour} onRequestBooking={handleRequestBooking} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION: EXPERTISE */}
            <Expertise />

            {/* SECTION: EXCEPTIONAL STAYS GALLERY */}
            <LodgeGallery onViewAll={() => handleNavigate(AppSection.ACCOMMODATIONS)} />

            {/* SECTION: THE INQUIRY */}
            <section className="py-60 bg-white text-center px-6">
              <div className="max-w-5xl mx-auto reveal-trigger">
                <p className="text-[#8B5A2B] uppercase tracking-[0.8em] text-sm font-black mb-12">THE INQUIRY</p>
                <h2 className="text-6xl md:text-9xl font-serif font-black text-[#1A1A1A] mb-16 tracking-tighter">Author Your <span className="italic">Vision.</span></h2>
                <p className="text-[#1A1A1A] text-2xl md:text-4xl font-normal leading-relaxed mb-24 max-w-3xl mx-auto opacity-90">
                  Our curators are waiting to design a journey worth the wait. Every manifest is a one-of-a-kind narrative crafted for the discerning traveler.
                </p>
                <button 
                  onClick={() => setIsInquiryOpen(true)}
                  className="cta-primary scale-125"
                >
                  Request a Manifest
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#8B5A2B] selection:text-white">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onEnquire={() => setIsInquiryOpen(true)} 
      />

      <main>
        {renderContent()}
      </main>

      <Footer onEnquire={() => setIsInquiryOpen(true)} />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialMessage={inquiryPreFill} />
      <WhatsAppFAB />
      <AIChatBot />
    </div>
  );
};

export default App;
