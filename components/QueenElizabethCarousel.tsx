import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
  fallbackUrl: string;
}

const QueenElizabethCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [useFallback, setUseFallback] = useState<Record<number, boolean>>({});
  
  const images: CarouselImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1551104230-7798707153b3?auto=format&fit=crop&q=85&w=1600',
      alt: 'Elephant family in the Queen Elizabeth National Park savannah - Majestic matriarchs',
      caption: 'The majestic matriarchs of the Albertine plains',
      fallbackUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=1600'
    },
    {
      src: '/images/destinations/queen-elizabeth/qenp-safari-1200w.jpg',
      alt: 'Safari in Queen Elizabeth National Park - Wildlife viewing in the savannah',
      caption: 'Thrilling game drives through diverse ecosystems',
      fallbackUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1600'
    },
    {
      src: '/images/destinations/queen-elizabeth/qenp-landscape-1200w.jpg',
      alt: 'Scenic landscape of Queen Elizabeth National Park - Crater lakes and savannah',
      caption: 'Breathtaking savannah and crater lake views',
      fallbackUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1600'
    },
    {
      src: '/images/destinations/queen-elizabeth/aruu-falls-1200w.jpg',
      alt: 'Aruu Falls waterfall - Hidden wonders in the wild',
      caption: 'Hidden waterfalls and natural wonders',
      fallbackUrl: 'https://images.unsplash.com/photo-1502219684198-f9188219994d?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  // Auto-advance slides every 6 seconds for a "slow luxury" feel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // SEO: Inject Structured Data for Image Gallery
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Queen Elizabeth National Park - Visual Narrative",
      "description": "A high-fidelity visual exploration of Queen Elizabeth National Park's diverse ecosystems and wildlife.",
      "image": images.map(img => ({
        "@type": "ImageObject",
        "contentUrl": img.src,
        "description": img.alt,
        "name": img.caption
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'carousel-structured-data-qenp';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('carousel-structured-data-qenp');
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, [images]);

  const handleImageLoad = (idx: number) => {
    setLoadedImages(prev => ({ ...prev, [idx]: true }));
  };

  const handleImageError = (idx: number) => {
    console.warn(`Local image failed for slide ${idx}, falling back to remote assets.`);
    setUseFallback(prev => ({ ...prev, [idx]: true }));
    setLoadedImages(prev => ({ ...prev, [idx]: true }));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  }, [images.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  }, [images.length]);
  
  return (
    <div 
      className="qenp-carousel relative w-full group"
      role="region"
      aria-label="Queen Elizabeth National Park image gallery"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="carousel-container luxury-image-container rounded-sm border-2 border-[#1A1A1A] overflow-hidden shadow-2xl bg-[#002d04]">
        
        {/* Image Display Area */}
        <div 
          id="qenp-carousel-images"
          className="carousel-images relative aspect-[16/9] w-full"
          aria-live="polite"
          aria-atomic="true"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              role="group"
              aria-label={`Slide ${index + 1} of ${images.length}`}
              aria-hidden={index !== currentSlide}
            >
              {/* Shimmer Effect while loading */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-savannah-shimmer" />
              )}
              
              <img
                src={useFallback[index] ? image.fallbackUrl : image.src}
                alt={image.alt}
                className={`carousel-image w-full h-full object-cover transition-transform duration-[10s] ease-linear ${
                  index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                loading={index === 0 ? "eager" : "lazy"}
              />
              
              {/* Captions with Glassmorphism */}
              {image.caption && (
                <div className="carousel-caption absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-black/40 backdrop-blur-md border-t border-white/10 flex flex-col items-center justify-center">
                  <p className="text-[#F5F5DC] font-serif text-xl md:text-3xl italic font-light text-center tracking-wide leading-tight animate-fade-in-up">
                    {image.caption}
                  </p>
                  <div className="w-12 h-[2px] bg-[#D4AF37] mt-6 opacity-60" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow carousel-arrow-left absolute top-1/2 left-6 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-110 active:scale-95"
          onClick={prevSlide}
          aria-label="View previous image"
          aria-controls="qenp-carousel-images"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        
        <button 
          className="carousel-arrow carousel-arrow-right absolute top-1/2 right-6 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-110 active:scale-95"
          onClick={nextSlide}
          aria-label="View next image"
          aria-controls="qenp-carousel-images"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
        
        {/* Dots Navigation */}
        <div 
          className="carousel-dots absolute bottom-6 right-8 flex gap-3 z-20" 
          role="tablist" 
          aria-label="Slideshow controls"
        >
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot w-3 h-3 rounded-full border border-white/40 transition-all duration-500 ${
                index === currentSlide ? 'bg-[#D4AF37] scale-125 border-[#D4AF37]' : 'bg-transparent hover:bg-white/40'
              }`}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Go to slide ${index + 1}`}
              aria-controls="qenp-carousel-images"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueenElizabethCarousel;