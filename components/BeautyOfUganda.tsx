
import React, { useState, useEffect } from 'react';

export const BeautyOfUganda: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      url: 'https://i.postimg.cc/brbwD4y3/tobias-stonjeck-ZIT2m-SWDwao-unsplash.jpg',
      alt: 'Breathtaking close-up of Ugandan wildlife'
    },
    {
      url: 'https://i.postimg.cc/SKs82Qwj/zdenek-machacek-Ux-Hol6Sw-Ly-M-unsplash.jpg',
      alt: 'Wide-angle 4K shot of the Ugandan landscape at sunset'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // 10s interval for each slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1A1A1A] border-y-2 border-[#1A1A1A] flex items-center py-16 md:py-24" aria-labelledby="beauty-title">
      {/* Animation Layers */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              activeImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className={`w-full h-full object-cover opacity-100 ${
                activeImage === idx ? 'animate-kenburns' : ''
              }`}
            />
          </div>
        ))}
        {/* Strictly grounded Linear Gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Content Overlay - Centered Editorial Layout */}
      <div className="relative z-30 container mx-auto max-w-4xl px-8 text-center">
        <div className="reveal-trigger flex flex-col items-center">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] md:text-xs font-black mb-10" style={{ opacity: 1 }}>NATIVE SPLENDOR</p>
          
          <h2 id="beauty-title" className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-[#FFFFFF] leading-none tracking-tighter mb-20" style={{ opacity: 1 }}>
            THE BEAUTY OF <br /><span className="italic font-light">UGANDA</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-16">
            {/* The Churchill Quote - Blockquote with left vertical border */}
            <div className="relative py-4">
              <blockquote className="border-l-2 border-[#FFFFFF] pl-8 md:pl-12 text-left">
                <p className="text-2xl md:text-4xl font-serif italic font-light text-[#FFFFFF] leading-relaxed" style={{ opacity: 1 }}>
                  "For its magnificence, the variety of shapes and colors, the profusion of brilliant life – birds, insects, reptiles, beasts – for its sheer scale – Uganda truly is '<span className="text-[#D4AF37] not-italic font-bold">the Pearl of Africa</span>'."
                </p>
                <footer className="mt-6">
                  <cite className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37] not-italic" style={{ opacity: 1 }}>— Winston Churchill</cite>
                </footer>
              </blockquote>
            </div>

            {/* Body Text Block - Center Aligned */}
            <div className="space-y-12 text-center text-[#FFFFFF]">
              <p className="text-lg md:text-2xl font-normal leading-relaxed tracking-wide" style={{ opacity: 1 }}>
                This idyllic place is best described by Winston Churchill! Uganda’s beauty lies in its diversity. From rainforests to lakes, or mountains to savannah: it’s simply impossible to choose a favorite spot.
              </p>
              
              <p className="text-lg md:text-2xl font-normal leading-relaxed tracking-wide" style={{ opacity: 1 }}>
                And even if the animal herds are smaller than in Kenya or Tanzania, a safari in Uganda will leave you with just as <span className="text-[#D4AF37] font-bold">unforgettable memories</span>. Because, in fact, you won't just discover the Big Five, but the "<span className="text-[#D4AF37] font-bold">Big Seven</span>"! Namely, elephants, lions, rhinoceroses, leopards, buffalo, but also mountain gorillas and chimpanzees. Enough to meet all your expectations, and much more.
              </p>
            </div>

            <div className="pt-12 flex justify-center">
              <div className="w-24 h-[1px] bg-[#D4AF37]" style={{ opacity: 1 }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.2); }
        }
        .animate-kenburns {
          animation: kenburns 10s linear forwards;
        }
      `}</style>
    </section>
  );
};
