import React, { useState, useEffect } from 'react';
import { AppSection, Tour, Destination } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Ticker } from './components/Ticker.tsx';
import { Footer } from './components/Footer.tsx';
import { InquiryModal } from './components/InquiryModal.tsx';
import { WhatsAppFAB } from './components/WhatsAppFAB.tsx';
import { AIChatBot } from './components/AIChatBot.tsx';
import { DestinationDetail } from './components/DestinationDetail.tsx';
import { TourCard } from './components/TourCard.tsx';
import { TourDetail } from './components/TourDetail.tsx';
import { Expertise } from './components/Expertise.tsx';
import { LodgeGallery } from './components/LodgeGallery.tsx';
import { BeautyOfUganda } from './components/BeautyOfUganda.tsx';
import { DiscoverUganda } from './components/DiscoverUganda.tsx';
import { AuthorYourVision } from './components/AuthorYourVision.tsx';
import { AccommodationsPage } from './components/AccommodationsPage.tsx';
import { Services } from './components/Services.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { BentoGallery } from './components/BentoGallery.tsx';
import { PromoPopup } from './components/PromoPopup.tsx';
import { GorillaTrekkingPage } from './components/GorillaTrekkingPage.tsx';
import { BoatSafariPage } from './components/BoatSafariPage.tsx';
import { ChimpanzeeObservationPage } from './components/ChimpanzeeObservationPage.tsx';
import { DESTINATIONS, TOURS, HERO_SLIDES, LODGES, DISCOVER_FEATURES, ABOUT_CONTENT } from './constants.tsx';
import { translateContent, UI_DICTIONARY } from './services/translationService.ts';

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
  
  // Translation State
  const [currentLang, setCurrentLang] = useState('EN');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedData, setTranslatedData] = useState({
    hero: HERO_SLIDES,
    tours: TOURS,
    destinations: DESTINATIONS,
    lodges: LODGES,
    discoverFeatures: DISCOVER_FEATURES,
    about: ABOUT_CONTENT
  });

  useEffect(() => {
    const path = window.location.pathname.split('/').filter(p => p).pop()?.toUpperCase();
    const availableLangs = ['FR', 'DE', 'ES'];
    if (path && availableLangs.includes(path)) {
      handleLangChange(path);
    }

    const promoTimer = setTimeout(() => {
      if (!isInquiryOpen) {
        setIsPromoOpen(true);
      }
    }, 3000);

    return () => clearTimeout(promoTimer);
  }, []);

  useEffect(() => {
    if (pendingScrollId) {
      // Small timeout ensures component is rendered before searching for ID
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

  // Handle Initial Hash on Load
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setPendingScrollId(hash);
      }
    };
    handleInitialHash();
  }, []);

  const handleLangChange = async (langCode: string) => {
    if (langCode === currentLang) return;
    
    setIsTranslating(true);
    setCurrentLang(langCode);
    
    const newPath = langCode === 'EN' ? '/' : `/${langCode.toLowerCase()}/`;
    window.history.pushState({}, '', newPath);

    if (langCode === 'EN') {
      setTranslatedData({
        hero: HERO_SLIDES,
        tours: TOURS,
        destinations: DESTINATIONS,
        lodges: LODGES,
        discoverFeatures: DISCOVER_FEATURES,
        about: ABOUT_CONTENT
      });
      setIsTranslating(false);
      return;
    }

    const sourceData = {
      hero: HERO_SLIDES,
      tours: TOURS,
      lodges: LODGES,
      destinations: DESTINATIONS,
      discoverFeatures: DISCOVER_FEATURES,
      about: ABOUT_CONTENT
    };

    const translated = await translateContent(sourceData, langCode);
    setTranslatedData(prev => ({
      ...prev,
      hero: translated.hero || HERO_SLIDES,
      tours: translated.tours || TOURS,
      lodges: translated.lodges || LODGES,
      destinations: translated.destinations || DESTINATIONS,
      discoverFeatures: translated.discoverFeatures || DISCOVER_FEATURES,
      about: translated.about || ABOUT_CONTENT
    }));
    
    setIsTranslating(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (section: AppSection) => {
    const anchorMap: Record<string, string> = {
      [AppSection.CONTACT]: 'contact-us',
      [AppSection.SERVICES]: 'services-section',
      [AppSection.ABOUT]: 'about-kuzuri',
      [AppSection.PLANNER]: 'kuzuri-tours',
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
    
    // Programmatically set the URL hash to #discover-uganda as requested for the Collection path
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
  }, [selectedDestination, selectedTour, activeSection, translatedData, showGorillaPage, showBoatSafariPage, showChimpanzeePage]);

  const ui = UI_DICTIONARY[currentLang] || UI_DICTIONARY.EN;

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
        return <AccommodationsPage onEnquire={() => setIsInquiryOpen(true)} />;
      default:
        return (
          <div className="flex flex-col">
            <Hero 
              minimal={false} 
              onStartPlanning={() => setIsInquiryOpen(true)} 
              slides={translatedData.hero}
            />
            <Ticker />
            <AboutSection content={translatedData.about} />
            
            {/* ITINERARIES section: Moved to be immediately after AboutSection */}
            <section id="kuzuri-tours" className="pt-6 md:pt-8 lg:pt-10 pb-24 md:pb-32 lg:pb-40 bg-white px-6 scroll-mt-[120px]">
              <div className="container mx-auto max-w-[1700px] text-center">
                <div className="mb-20 lg:mb-28 reveal-trigger">
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-semibold text-[#4A3728] uppercase tracking-[0.2em] leading-tight max-w-6xl mx-auto mb-10 text-center">
                    {ui.tours.toUpperCase()}
                  </h2>
                  <div className="w-32 h-[1px] bg-[#D4AF37] mx-auto opacity-40" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 items-stretch">
                  {translatedData.tours.map((tour) => (
                    <div key={tour.id} className="reveal-trigger flex h-auto">
                      <TourCard 
                        tour={tour} 
                        onRequestBooking={handleRequestBooking} 
                        onExplore={() => handleExploreTour(tour)}
                        currentLang={currentLang} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Expertise />

            <LodgeGallery 
              onViewAll={() => handleNavigate(AppSection.ACCOMMODATIONS)} 
              lodges={translatedData.lodges}
            />
            <BeautyOfUganda />
            <DiscoverUganda 
              features={translatedData.discoverFeatures}
              onExploreGorilla={handleExploreGorillaTrek} 
              onExploreBoat={handleExploreBoatSafari} 
              onExploreChimpanzee={handleExploreChimpanzee} 
            />
            <BentoGallery />
            <Services onEnquireService={(svc) => {
              setInquiryPreFill(`I am inquiring about your ${svc} service.`);
              setIsInquiryOpen(true);
            }} />
            <AuthorYourVision onShareVision={() => setIsInquiryOpen(true)} />
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#8B5A2B] selection:text-white">
      {isTranslating && (
        <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center animate-fade-in">
          <div className="w-48 h-[2px] bg-stone-100 overflow-hidden relative mb-8">
            <div className="absolute inset-0 bg-[#D4AF37] animate-translate-shimmer" />
          </div>
          <p className="text-[10px] uppercase tracking-[1em] font-black text-[#8B5A2B] animate-pulse">
            {ui.translating}
          </p>
        </div>
      )}

      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onEnquire={() => setIsInquiryOpen(true)} 
        currentLang={currentLang}
        onLangChange={handleLangChange}
      />

      <main>
        {renderContent()}
      </main>

      <Footer onEnquire={() => setIsInquiryOpen(true)} />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialMessage={inquiryPreFill} />
      {isPromoOpen && <PromoPopup onClose={() => setIsPromoOpen(false)} onEnquire={handlePromoEnquiry} />}
      <WhatsAppFAB />
      <AIChatBot />

      <style>{`
        @keyframes translateShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-translate-shimmer {
          animation: translateShimmer 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;