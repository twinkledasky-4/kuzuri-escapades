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
import { DestinationDetail } from './components/DestinationDetail.tsx';
import { DESTINATIONS, TOURS, REVIEWS } from './constants.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryPreFill, setInquiryPreFill] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const destinationsRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: AppSection) => {
    setActiveSection(section);
    if (section === AppSection.DESTINATIONS && destinationsRef.current) {
      destinationsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F5F5DC] selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onEnquire={() => setIsInquiryOpen(true)} 
      />

      <main>
        {selectedDestination ? (
          <DestinationDetail 
            destination={selectedDestination} 
            onBack={() => setSelectedDestination(null)} 
          />
        ) : (
          <>
            <Hero onStartPlanning={() => handleNavigate(AppSection.PLANNER)} />

            {/* Immersive Vertical Destination Stack */}
            <section ref={destinationsRef} className="bg-[#1A1A1A]">
              {DESTINATIONS.map((dest, idx) => (
                <div key={dest.id} onClick={() => setSelectedDestination(dest)}>
                  <ExperienceCard destination={dest} index={idx} />
                </div>
              ))}
            </section>

            {/* Dedicated Nature/Wildlife Section: Zebra Panel */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-y-2 border-[#1A1A1A]">
               <img 
                src="https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&q=85&w=1600" 
                alt="Native Zebra Portrait" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/50" />
               <div className="relative z-10 text-center px-6 reveal-trigger">
                  <p className="text-[#D4AF37] uppercase tracking-[1.5em] text-[10px] md:text-xs font-bold mb-10">THE LIVING CANVAS</p>
                  <h2 className="text-5xl md:text-9xl font-serif font-bold text-white mb-12 tracking-tighter italic">Portrait of the Wild.</h2>
                  <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-2xl font-light leading-relaxed tracking-wide">
                    Witness the stripped elegance of Lake Mburo—a sanctuary of native stewardship and silent observation.
                  </p>
               </div>
            </section>

            {/* Dedicated Nature/Wildlife Section: Elephant Panel */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b-2 border-[#1A1A1A]">
               <img 
                src="https://i.postimg.cc/85zK23r1/elephants.jpg" 
                alt="Elephant Family in Savannah" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 transition-all duration-[3000ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
               <div className="relative z-10 text-center px-6 reveal-trigger">
                  <p className="text-[#D4AF37] uppercase tracking-[1.5em] text-[10px] md:text-xs font-bold mb-10">ANCIENT KINSHIP</p>
                  <h2 className="text-5xl md:text-9xl font-serif font-bold text-white mb-12 tracking-tighter">Sovereign Giants.</h2>
                  <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-2xl font-light leading-relaxed tracking-wide">
                    Co-author your journey through the Albertine Rift, where the monarchs of the savannah dictate the pace of time.
                  </p>
               </div>
            </section>

            {/* Safari Packages with Lion Road Background */}
            <section 
              className="relative py-48 md:py-80 border-y-2 border-[#1A1A1A] px-4 overflow-hidden" 
              id="packages-section"
            >
              <div className="absolute inset-0 z-0">
                 <img 
                   src="https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg" 
                   alt="Lions on the road" 
                   className="w-full h-full object-cover brightness-[0.3]"
                 />
              </div>

              <div className="container mx-auto px-6 relative z-10 text-center">
                 <div className="mb-32 reveal-trigger">
                    <p className="text-[#D4AF37] uppercase tracking-[1em] text-[12px] mb-10 font-bold">THE ODYSSEY COLLECTION</p>
                    <h2 className="text-6xl md:text-9xl font-serif font-bold text-white mb-20 tracking-tighter">Bespoke <span className="italic font-light">Fragments.</span></h2>
                    <div className="max-w-3xl mx-auto">
                      <input 
                        type="text" 
                        placeholder="Refine your vision..." 
                        className="w-full py-8 px-12 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-xl font-light focus:border-[#D4AF37] outline-none transition-all placeholder:text-white/30 text-white"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                 </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
                  {TOURS.map((tour) => (
                    <TourCard key={tour.id} tour={tour} onRequestBooking={(t) => { setInquiryPreFill(`Interested in ${t.name}`); setIsInquiryOpen(true); }} />
                  ))}
                </div>
              </div>
            </section>

            <Services />
            <WhyKuzuri />
            <Testimonials reviews={REVIEWS} />
          </>
        )}
      </main>

      <Footer onEnquire={() => setIsInquiryOpen(true)} />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialMessage={inquiryPreFill} />
      <WhatsAppFAB />
      <AIChatBot />
    </div>
  );
};

export default App;
