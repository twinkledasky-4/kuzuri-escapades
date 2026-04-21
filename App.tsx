import React, { useState, useEffect } from 'react';
import { AppSection, Tour, Destination } from './types.ts';
import { Toaster } from 'sonner';
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
import { WildlifeConservationSection } from './components/WildlifeConservationSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { AboutPage } from './components/AboutPage.tsx';
import { SearchResultsPage } from './components/SearchResultsPage.tsx';
import { CombinedSafariPage } from './components/CombinedSafariPage.tsx';
import { PaymentPortal } from './components/PaymentPortal.tsx';
import { PaymentGatewayCTA } from './components/PaymentGatewayCTA.tsx';
import { BentoGallery } from './components/BentoGallery.tsx';
import { GorillaTrekkingPage } from './components/GorillaTrekkingPage.tsx';
import { BoatSafariPage } from './components/BoatSafariPage.tsx';
import { ChimpanzeeObservationPage } from './components/ChimpanzeeObservationPage.tsx';
import { AdminPanel } from './components/AdminPanel.tsx';
import { AdminLogin } from './components/AdminLogin.tsx';
import { intelligenceService } from './services/analyticsService.ts';
import { DESTINATIONS, TOURS, LODGES, DISCOVER_FEATURES, ABOUT_CONTENT, REVIEWS } from './constants.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedCombinedSafari, setSelectedCombinedSafari] = useState<Tour | null>(null);
  const [showGorillaPage, setShowGorillaPage] = useState(false);
  const [showBoatSafariPage, setShowBoatSafariPage] = useState(false);
  const [showChimpanzeePage, setShowChimpanzeePage] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('kuzuri_admin_auth') === 'true');
  const [loginError, setLoginError] = useState('');
  const [inquiryPreFill, setInquiryPreFill] = useState('');
  const [packageContext, setPackageContext] = useState('');
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
  const [formDestination, setFormDestination] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Tour[]>([]);
  
  const [currentLang, setCurrentLang] = useState(() => {
    const saved = localStorage.getItem('kuzuri_lang');
    if (saved) return saved;
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    return match ? match[1].toUpperCase() : 'EN';
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('OrderTrackingId') || params.get('OrderMerchantReference') || window.location.pathname === '/pay') {
      setActiveSection(AppSection.PAYMENT_PORTAL);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const setTranslationCookie = (langCode: string) => {
    const code = langCode.toLowerCase();
    const expiry = new Date();
    expiry.setTime(expiry.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expiry.toUTCString();
    document.cookie = `googtrans=/en/${code}; path=/; ${expires}`;
  };

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

  const handleLangChange = (langCode: string) => {
    if (langCode === currentLang) return;
    setCurrentLang(langCode);
    localStorage.setItem('kuzuri_lang', langCode);
    setTranslationCookie(langCode);
    window.location.reload();
  };

  const handleNavigate = (section: AppSection) => {
    const anchorMap: Record<string, string> = {
      [AppSection.HOME]: 'home',
      [AppSection.DESTINATIONS]: 'discover-uganda',
      [AppSection.GORILLA_SAFARIS]: 'discover-uganda',
      [AppSection.COMBINED_SAFARIS]: 'combined-safaris',
      [AppSection.FILMING]: 'services-section',
      [AppSection.BIRDING]: 'services-section',
      [AppSection.CONTACT]: 'contact-us',
      [AppSection.SERVICES]: 'services-section',
      [AppSection.PLANNER]: 'kuzuri-tours',
      [AppSection.TESTIMONIALS]: 'travellers-reviews',
    };
    const anchorId = anchorMap[section];
    if (anchorId) {
      const element = document.getElementById(anchorId);
      if (element && activeSection === AppSection.HOME && !selectedDestination && !selectedTour && !selectedCombinedSafari && !showGorillaPage && !showBoatSafariPage && !showChimpanzeePage) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(section);
      } else {
        setPendingScrollId(anchorId);
        setActiveSection(AppSection.HOME);
        setSelectedDestination(null);
        setSelectedTour(null);
        setSelectedCombinedSafari(null);
        setShowGorillaPage(false);
        setShowBoatSafariPage(false);
        setShowChimpanzeePage(false);
        setShowAdmin(false);
      }
      return;
    }
    if (section === AppSection.ABOUT) {
      window.location.hash = '#about';
      setActiveSection(AppSection.ABOUT);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (section === AppSection.PAYMENT_PORTAL) {
      window.history.pushState({}, '', '/pay');
      setActiveSection(AppSection.PAYMENT_PORTAL);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Reset path if we were on /pay
    if (window.location.pathname === '/pay') {
      window.history.pushState({}, '', '/');
    }

    setActiveSection(section);
    setSelectedDestination(null);
    setSelectedTour(null);
    setSelectedCombinedSafari(null);
    setShowGorillaPage(false);
    setShowBoatSafariPage(false);
    setShowChimpanzeePage(false);
    setShowAdmin(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestBooking = (tour: Tour) => {
    scrollToForm(tour.name);
  };

  const handleExploreTour = (tour: Tour) => {
    intelligenceService.trackInteraction(tour.id);
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
    setActiveSection(AppSection.HOME); // Reset section if we were in search results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreGorillaTrek = () => {
    intelligenceService.trackInteraction('gorilla-trekking');
    setShowGorillaPage(true);
    setShowBoatSafariPage(false);
    setShowChimpanzeePage(false);
    setSelectedTour(null);
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreBoatSafari = () => {
    intelligenceService.trackInteraction('boat-safari');
    setShowBoatSafariPage(true);
    setShowGorillaPage(false);
    setShowChimpanzeePage(false);
    setSelectedTour(null);
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreChimpanzee = () => {
    intelligenceService.trackInteraction('chimpanzee-trekking');
    setShowChimpanzeePage(true);
    setShowGorillaPage(false);
    setShowBoatSafariPage(false);
    setSelectedTour(null);
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCombined = (tourName: string) => {
    const tour = TOURS.find(t => t.name.toLowerCase() === tourName.toLowerCase());
    if (tour) {
      setSelectedCombinedSafari(tour);
      setActiveSection(AppSection.COMBINED_SAFARI_DETAIL);
      setSelectedTour(null);
      setSelectedDestination(null);
      setShowGorillaPage(false);
      setShowBoatSafariPage(false);
      setShowChimpanzeePage(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCloseSubPage = (id: string) => {
    setShowGorillaPage(false);
    setShowBoatSafariPage(false);
    setShowChimpanzeePage(false);
    setSelectedTour(null);
    setSelectedCombinedSafari(null);
    setSelectedDestination(null);
    setActiveSection(AppSection.HOME);
    if (id === 'discover-uganda') {
      window.location.hash = 'discover-uganda';
      setPendingScrollId('discover-uganda');
    } else {
      setPendingScrollId(id);
    }
  };

  const handleAdminLogin = (password: string) => {
    if (password === 'Kuzuri2025') {
      setIsAuthenticated(true);
      localStorage.setItem('kuzuri_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid curator credentials.');
    }
  };

  const handleAdminLogout = () => {
    setIsAuthenticated(false);
    setShowAdmin(false);
    localStorage.removeItem('kuzuri_admin_auth');
  };

  const handleSearchTriggered = (query: string) => {
    setSearchQuery(query);
    const keywords = query.toLowerCase().split(' ').filter(k => k.length > 0);
    const filtered = TOURS.filter(t => {
      const name = t.name.toLowerCase();
      return keywords.every(k => name.includes(k));
    });
    setSearchResults(filtered);
    setActiveSection(AppSection.SEARCH_RESULTS);
    setSelectedTour(null);
    setSelectedDestination(null);
    setShowGorillaPage(false);
    setShowBoatSafariPage(false);
    setShowChimpanzeePage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setActiveSection(AppSection.ABOUT);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-trigger').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedDestination, selectedTour, activeSection, showGorillaPage, showBoatSafariPage, showChimpanzeePage, showAdmin, isAuthenticated]);

  const scrollToForm = (destination?: string) => {
    if (destination) setFormDestination(destination);
    const element = document.getElementById('contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderContent = () => {
    if (showAdmin) {
      if (!isAuthenticated) {
        return (
          <AdminLogin 
            onLogin={handleAdminLogin} 
            onCancel={() => setShowAdmin(false)} 
            error={loginError} 
          />
        );
      }
      return (
        <AdminPanel 
          onExit={handleAdminLogout} 
          reviews={REVIEWS} 
          onUpdateReviews={(revs) => console.log('Reviews updated:', revs)} 
        />
      );
    }
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
          onBook={(ctx) => {
            setInquiryPreFill(`I am interested in the ${ctx || 'Gorilla Trekking'} experience.`);
            setPackageContext(ctx || 'Gorilla Trekking');
            setIsInquiryOpen(true);
          }}
        />
      );
    }
    if (showBoatSafariPage) {
      return (
        <BoatSafariPage 
          onBack={() => handleCloseSubPage('discover-uganda')}
          onBook={(ctx) => {
            setInquiryPreFill(`I am interested in the ${ctx || 'Boat Safari'} experience.`);
            setPackageContext(ctx || 'Boat Safari');
            setIsInquiryOpen(true);
          }}
        />
      );
    }
    if (showChimpanzeePage) {
      return (
        <ChimpanzeeObservationPage 
          onBack={() => handleCloseSubPage('discover-uganda')}
          onBook={(ctx) => {
            setInquiryPreFill(`I am interested in the ${ctx || 'Chimpanzee Observation'} experience.`);
            setPackageContext(ctx || 'Chimpanzee Observation');
            setIsInquiryOpen(true);
          }}
        />
      );
    }

    if (selectedCombinedSafari) {
      return (
        <CombinedSafariPage 
          tour={selectedCombinedSafari} 
          onBack={() => handleCloseSubPage('combined-safaris')}
          onBook={(name) => {
            setInquiryPreFill(`I am interested in the ${name} Combined Safari.`);
            setPackageContext(name);
            setIsInquiryOpen(true);
          }}
        />
      );
    }

    switch (activeSection) {
      case AppSection.ACCOMMODATIONS:
        return <AccommodationsPage onBack={() => handleNavigate(AppSection.HOME)} onEnquire={(ctx) => {
          setInquiryPreFill(`I am inquiring about ${ctx || 'accommodations'}.`);
          setPackageContext(ctx || 'Sanctuary Registry');
          setIsInquiryOpen(true);
        }} />;
      case AppSection.TESTIMONIALS:
        return <TestimonialsPage reviews={REVIEWS} />;
      case AppSection.SEARCH_RESULTS:
        return (
          <SearchResultsPage 
            query={searchQuery} 
            results={searchResults} 
            onBack={() => handleNavigate(AppSection.HOME)} 
            onViewTour={handleExploreTour} 
          />
        );
      case AppSection.PAYMENT_PORTAL:
        return <PaymentPortal onBack={() => handleNavigate(AppSection.HOME)} />;
      case AppSection.ABOUT:
        return (
          <AboutPage 
            onBack={() => handleNavigate(AppSection.HOME)} 
            onContact={() => {
              handleNavigate(AppSection.HOME);
              setPendingScrollId('contact-us');
            }} 
            onExploreTour={(tourName) => {
              const tour = TOURS.find(t => t.name.toLowerCase() === tourName.toLowerCase());
              if (tour) {
                handleExploreTour(tour);
              } else {
                setInquiryPreFill(`I am interested in the ${tourName} experience. Please share more details.`);
                setPackageContext(tourName);
                setIsInquiryOpen(true);
              }
            }}
            onSearchTriggered={handleSearchTriggered}
          />
        );
      default:
        return (
          <div className="flex flex-col">
            <Hero 
              minimal={false} 
              onStartPlanning={() => scrollToForm()} 
            />
            <Ticker />
            <AboutSection 
              content={ABOUT_CONTENT} 
              onReadMore={() => handleNavigate(AppSection.ABOUT)}
            />
            <section id="kuzuri-tours" className="pt-6 pb-24 md:pb-40 bg-white px-6 scroll-mt-[120px]">
              <div className="container mx-auto max-w-[1700px] text-center">
                <div className="mb-20 lg:mb-28 reveal-trigger">
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-semibold text-[#4A3728] uppercase tracking-[0.2em] leading-tight max-w-6xl mx-auto mb-10 text-center">ITINERARIES</h2>
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
            <Expertise onEnquire={(ctx) => {
              setInquiryPreFill(`I would like to consult with your native experts regarding ${ctx || 'a bespoke journey'}.`);
              setPackageContext(ctx || 'Bespoke Consultation');
              setIsInquiryOpen(true);
            }} />
            <LodgeGallery onViewAll={() => handleNavigate(AppSection.ACCOMMODATIONS)} lodges={LODGES} />
            <BeautyOfUganda />
            <DiscoverUganda features={DISCOVER_FEATURES} onExploreGorilla={handleExploreGorillaTrek} onExploreBoat={handleExploreBoatSafari} onExploreChimpanzee={handleExploreChimpanzee} />
            <WildlifeConservationSection onEnquire={(subject) => {
              setInquiryPreFill(`I am inquiring about ${subject}.`);
              setPackageContext(subject);
              setIsInquiryOpen(true);
            }} />
            <BentoGallery />
            <PaymentGatewayCTA onNavigateToPortal={() => handleNavigate(AppSection.PAYMENT_PORTAL)} />
            <Services onEnquireService={(svc) => {
              setInquiryPreFill(`I am inquiring about your ${svc} service.`);
              setPackageContext(`Service: ${svc}`);
              setIsInquiryOpen(true);
            }} />
            <AuthorYourVision 
              onShareVision={() => {
                setInquiryPreFill("I have shared my basic details and wish to commence a bespoke adventure consultation.");
                setPackageContext("Final Chapter Lead");
                setIsInquiryOpen(true);
              }} 
              initialDestination={formDestination}
            />
            <Testimonials reviews={REVIEWS} onNavigateToAll={() => handleNavigate(AppSection.TESTIMONIALS)} />
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#8B5A2B] selection:text-white">
      <Toaster position="top-center" richColors />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} onEnquire={(ctx) => {
        if (ctx) {
          // Check if ctx is one of our combined safaris
          const isCombined = TOURS.some(t => t.name.toLowerCase() === ctx.toLowerCase() && t.category === 'Combined Safari');
          if (isCombined) {
            handleExploreCombined(ctx);
            return;
          }
          setInquiryPreFill(`I am interested in the ${ctx} experience. Please share more details.`);
          setPackageContext(ctx);
        } else {
          setInquiryPreFill("Hello, I am reaching out from the global navigation to inquire about your services.");
          setPackageContext("Global Navbar Lead");
        }
        setIsInquiryOpen(true);
      }} />
      <main>{renderContent()}</main>
      <Footer 
        onEnquire={() => {
          setInquiryPreFill("Hello, I am reaching out from the footer to inquire about your services.");
          setPackageContext("Footer Lead");
          setIsInquiryOpen(true);
        }} 
        onAdminAccess={() => setShowAdmin(true)}
        onPaymentPortal={() => handleNavigate(AppSection.PAYMENT_PORTAL)}
      />
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        initialMessage={inquiryPreFill} 
        packageContext={packageContext}
      />
      <WhatsAppFAB />
      <AIChatBot />
      <LanguageFAB currentLang={currentLang} onLangChange={handleLangChange} />
    </div>
  );
};

export default App;