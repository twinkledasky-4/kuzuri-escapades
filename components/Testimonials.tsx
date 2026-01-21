
import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    quote: "The silence of the Bwindi forest was only matched by the profound silence of Lucky’s logistics. Every transition was invisible, every moment was profound. Impeccable.",
    client: "Julianne Moore",
    origin: "United Kingdom"
  },
  {
    quote: "We didn't just see Uganda; we felt its heartbeat. Kuzuri is the only way to experience the Pearl. It's a masterclass in private curation and deep respect for the wild.",
    client: "Robert Keller",
    origin: "Switzerland"
  },
  {
    quote: "A journey that transcends travel. It felt less like a tour and more like an intimate dialogue with the landscape. The Lucky .K touch is truly real.",
    client: "Elena Vasiliev",
    origin: "Monaco"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsFading(false);
    }, 800);
  };

  return (
    <section className="py-64 bg-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-20">
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative Quote Mark */}
          <div className="absolute -top-16 -left-12 text-[#d4af37]/10 text-[20rem] font-serif select-none pointer-events-none">
            &ldquo;
          </div>

          <div className={`transition-all duration-1000 ease-in-out transform ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#002d04] leading-[1.3] mb-20 italic">
              {TESTIMONIALS[activeIndex].quote}
            </p>
            
            <div className="flex items-center gap-8">
              <div className="h-[1px] w-12 bg-[#d4af37]"></div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-[#002d04]">
                  {TESTIMONIALS[activeIndex].client}
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-stone-300 mt-2 font-medium">
                  {TESTIMONIALS[activeIndex].origin}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-4 mt-24">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx !== activeIndex) {
                    setIsFading(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsFading(false);
                    }, 500);
                  }
                }}
                className={`h-[2px] transition-all duration-700 ${idx === activeIndex ? 'w-12 bg-[#d4af37]' : 'w-6 bg-stone-100 hover:bg-stone-200'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
