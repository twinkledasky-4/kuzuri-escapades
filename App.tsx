import React, { useState, useEffect } from 'react';
import { AppSection, Tour, Destination } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Ticker } from './components/Ticker.tsx';
import { Footer } from './components/Footer.tsx';
import { InquiryModal } from './components/InquiryModal.tsx';
import { WhatsAppFAB } from './components/WhatsAppFAB.tsx';
import { AIChatBot } from './components/AIChatBot.tsx';
import { LanguageFAB } from './components/LanguageFAB.tsx';
import { DestinationDetail } from './components/DestinationDetail.tsx';
import { TourCard } from './components/TourCard.tsx';
import { TourDetail } from './components/TourDetail.tsx';
import { Expertise } from './components/Expertise.tsx';
import { LodgeGallery } from './components/LodgeGallery.tsx';
import { BeautyOfUganda } from './components/BeautyOfUganda.tsx';
import { DiscoverUganda } from './components/DiscoverUganda.tsx';
import { AuthorYourVision } from './components/AuthorYourVision.tsx';
import { AccommodationsPage } from './components/AccommodationsPage.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { TestimonialsPage } from './components/TestimonialsPage.tsx';
import { Services } from './components/Services.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { BentoGallery } from './components/BentoGallery.tsx';
import { PromoPopup } from './components/PromoPopup.tsx';
import { GorillaTrekkingPage } from './components/GorillaTrekkingPage.tsx';
import { BoatSafariPage } from './components/BoatSafariPage.tsx';
import { ChimpanzeeObservationPage } from './components/ChimpanzeeObservationPage.tsx';
import { DESTINATIONS, TOURS, LODGES, DISCOVER_FEATURES, ABOUT_CONTENT, REVIEWS } from './constants.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showGorillaPage, setShowGorillaPage] = useState(false);
  const [showBoatSafariPage, setShowBoatSafariPage] = useState(false);
  const [showChimpanzeePage, setShowChimpanzeePage] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [inquiryPreFill, setInquiryPreFill] = useState('');
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
  
  // Persistence: Fetch stored choice or look for existing Google Translate cookie
  const [currentLang, setCurrentLang] = useState(() => {
    const saved = localStorage.getItem('kuzuri_lang');
    if (saved) return saved;
    // Check cookie for persistence if user reloads
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    return match ? match[1].toUpperCase() : 'EN';
  });

  const setTranslationCookie = (langCode: string) => {
    const code = langCode.toLowerCase();
    const expiry = new Date();
    expiry.setTime(expiry.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expiry.toUTCString();
    
    // Core cookie for Google Translate widget
    document.cookie = `googtrans=/en/${code}; path=/; ${expires}`;
    document.cookie = `googtrans=/en/${code}; path=/; domain=.${window.location.hostname}; ${expires}`;
    
    if (window.location.hostname === 'localhost') {
      document.cookie = `googtrans=/en/${code}; path=/; domain=localhost; ${expires}`;
    }
  };

  useEffect(() => {
    const promoTimer = setTimeout(() => {
      if (!isInquiryOpen) {
        setIsPromoOpen(true);
      }
    }, 3000);
    return () => clearTimeout(promoTimer);
  }, []);

  // Sync translation engine state on initial mount
  useEffect(() => {
    if (currentLang !== 'EN') {
      setTranslationCookie(currentLang);
    }
  }, []);

  useEffect(() => {
    if (pendingScrollId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScrollId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setPendingScrollId(null);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeSection, pendingScrollId, selectedDestination, selectedTour, showGorillaPage, showBoatSafariPage, showChimpanzeePage]);

  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setPendingScrollId(hash);
      }
    };
    handleInitialHash();
  }, []);

  const handleLangChange = (langCode: string) => {
    if (langCode === currentLang) return;
    
    setCurrentLang(langCode);
    localStorage.setItem('kuzuri_lang', langCode);
    setTranslationCookie(langCode);
    
    // Trigger Google Widget re-scan
    const googleSelect = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
    if (googleSelect) {
      googleSelect.value = langCode.toLowerCase();
      googleSelect.dispatchEvent(new Event('change'));
    } else {
      // Hard refresh as fallback to ensure engine initializes with new cookie
      window.location.reload();
    }
  };

  const handleNavigate = (section: AppSection) => {
    const anchorMap: Record<string, string> = {
      [AppSection.CONTACT]: 'contact-us',
      [AppSection.SERVICES]: 'services-section',
      [AppSection.ABOUT]: 'about-kuzuri',
      [AppSection.PLANNER]: 'kuzuri-tours',
      [AppSection.TESTIMONIALS]: 'travellers-reviews',
    };
    const anchorId = anchorMap[section];
    if (anchorId) {
      const element = document.getElementById(anchorId);
      if (element && activeSection === AppSection.HOME && !selectedDestination && !selectedTour && !showGorillaPage && !showBoatSafariPage && !showChimpanzeePage) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(section);
      } else {
        setPendingScrollId(anchorId);
        setActiveSection(AppSection.HOME);
        setSelectedDestination(null);
        setSelectedTour(null);
        setShowGorillaPage(false);
        setShowBoatSafariPage(false);
        setShowChimpanzeePage(false);
      }
      return;
    }
    setActiveSection(section);
    setSelectedDestination(null);
    setSelectedTour(null);
    setShowGorillaPage(false);
    setShowBoatSafariPage(false);
    setShowChimpanzeePage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestBooking = (tour: Tour) => {
    setInquiryPreFill(`I am interested in the ${tour.name} experience. Please share more details.`);
    setIsInquiryOpen(true);
  };

  const handleExploreTour = (tour: Tour) => {
    if (tour.id === 'boat-safaris-uganda') {
      setShowBoatSafariPage(true);
      setSelectedTour(null);
      setSelectedDestination(null);
      setShowGorillaPage(false);
      setShowChimpanzeePage(false);
    } else {
      setSelectedTour(tour);
      setSelectedDestination(null);
      setShowGorillaPage(false);
      setShowBoatSafariPage(false);
      setShowChimpanzeePage(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreGorillaTrek = () => {
    setShowGorillaPage(true);
    setShowBoatSafariPage(false);
    setShowChimpanzeePage(false);
    setSelectedTour(null);
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreBoatSafari = () => {
    setShowBoatSafariPage(true);
    setShowGorillaPage(false);
    setShowChimpanzeePage(false);
    setSelectedTour(null);
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreChimpanzee = () => {
    setShowChimpanzeePage(true);
    setShowGorillaPage(false);
    setShowBoatSafariPage(false);
    setSelectedTour(null);
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseSubPage = (id: string) => {
    setShowGorillaPage(false);
    setShowBoatSafariPage(false);
    setShowChimpanzeePage(false);
    setSelectedTour(null);
    setSelectedDestination(null);
    setActiveSection(AppSection.HOME);
    if (id === 'discover-uganda') {
      window.location.hash = 'discover-uganda';
      setPendingScrollId('discover-uganda');
    } else {
      setPendingScrollId(id);
    }
  };

  const handlePromoEnquiry = () => {
    setInquiryPreFill("I am inquiring about the Jinja Buyala Bliss Staycation experience.");
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
  }, [selectedDestination, selectedTour, activeSection, showGorillaPage, showBoatSafariPage, showChimpanzeePage]);

  const renderContent = () => {
    if (selectedDestination) {
      return (
        <DestinationDetail 
          destination={selectedDestination} 
          onBack={() => handleCloseSubPage('discover-uganda')} 
        />
      );
    }
    if (selectedTour) {
      return (
        <TourDetail 
          tour={selectedTour} 
          onBack={() => handleCloseSubPage('kuzuri-tours')} 
          onBook={handleRequestBooking}
          currentLang={currentLang}
        />
      );
    }
    if (showGorillaPage) {
      return (
        <GorillaTrekkingPage 
          onBack={() => handleCloseSubPage('discover-uganda')}
          onBook={() => {
            setInquiryPreFill("I am interested in the 5-Day Gorilla Trekking experience.");
            setIsInquiryOpen(true);
          }}
        />
      );
    }
    if (showBoatSafariPage) {
      return (
        <BoatSafariPage 
          onBack={() => handleCloseSubPage('discover-uganda')}
          onBook={() => {
            setInquiryPreFill("I am interested in the Serenity of Water: Boat Safari experience.");
            setIsInquiryOpen(true);
          }}
        />
      );
    }
    if (showChimpanzeePage) {
      return (
        <ChimpanzeeObservationPage 
          onBack={() => handleCloseSubPage('discover-uganda')}
          onBook={() => {
            setInquiryPreFill("I am interested in the Chimpanzee Observation experience.");
            setIsInquiryOpen(true);
          }}
        />
      );
    }

    switch (activeSection) {
      case AppSection.ACCOMMODATIONS:
        return <AccommodationsPage onBack={() => handleNavigate(AppSection.HOME)} onEnquire={() => setIsInquiryOpen(true)} />;
      case AppSection.TESTIMONIALS:
        return <TestimonialsPage reviews={REVIEWS} onHelpfulClick={(id) => console.log('Helpful click:', id)} />;
      default:
        return (
          <div className="flex flex-col">
            <Hero minimal={false} onStartPlanning={() => setIsInquiryOpen(true)} />
            <Ticker />
            <AboutSection content={ABOUT_CONTENT} />
            <section id="kuzuri-tours" className="pt-6 md:pt-8 lg:pt-10 pb-24 md:pb-32 lg:pb-40 bg-white px-6 scroll-mt-[120px]">
              <div className="container mx-auto max-w-[1700px] text-center">
                <div className="mb-20 lg:mb-28 reveal-trigger">
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-semibold text-[#4A3728] uppercase tracking-[0.2em] leading-tight max-w-6xl mx-auto mb-10 text-center">
                    ITINERARIES
                  </h2>
                  <div className="w-32 h-[1px] bg-[#D4AF37] mx-auto opacity-40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 items-stretch">
                  {TOURS.map((tour) => (
                    <div key={tour.id} className="reveal-trigger flex h-auto">
                      <TourCard tour={tour} onRequestBooking={handleRequestBooking} onExplore={() => handleExploreTour(tour)} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <Expertise onEnquire={() => {
              setInquiryPreFill("I would like to consult with your native experts about a bespoke Ugandan journey.");
              setIsInquiryOpen(true);
            }} />
            <LodgeGallery onViewAll={() => handleNavigate(AppSection.ACCOMMODATIONS)} lodges={LODGES} />
            <BeautyOfUganda />
            <DiscoverUganda features={DISCOVER_FEATURES} onExploreGorilla={handleExploreGorillaTrek} onExploreBoat={handleExploreBoatSafari} onExploreChimpanzee={handleExploreChimpanzee} />
            <BentoGallery />
            <Services onEnquireService={(svc) => {
              setInquiryPreFill(`I am inquiring about your ${svc} service.`);
              setIsInquiryOpen(true);
            }} />
            <AuthorYourVision onShareVision={() => setIsInquiryOpen(true)} />
            <Testimonials reviews={REVIEWS} onNavigateToAll={() => handleNavigate(AppSection.TESTIMONIALS)} />
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#8B5A2B] selection:text-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} onEnquire={() => setIsInquiryOpen(true)} />
      <main>{renderContent()}</main>
      <Footer onEnquire={() => setIsInquiryOpen(true)} />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialMessage={inquiryPreFill} />
      {isPromoOpen && <PromoPopup onClose={() => setIsPromoOpen(false)} onEnquire={handlePromoEnquiry} />}
      <WhatsAppFAB />
      <AIChatBot />
      <LanguageFAB currentLang={currentLang} onLangChange={handleLangChange} />
      <style>{`
        /* Standard Google Translate widget cleanup */
        .goog-te-banner-frame.skiptranslate, 
        .goog-te-gadget-icon,
        .goog-te-gadget-simple span { 
          display: none !important; 
        }
        body { top: 0px !important; }
        .skiptranslate iframe { display: none !important; }
        #google_translate_element { display: none !important; }
        
        /* Ensure font weights are preserved during translation */
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default App;