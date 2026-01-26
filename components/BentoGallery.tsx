import React from 'react';

interface GalleryItem {
  id: string;
  title: string;
  url: string;
  alt: string;
  spanClass: string;
}

export const BentoGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 'wildlife',
      title: 'Wildlife Sovereignty',
      url: 'https://i.postimg.cc/7Y6XWLt6/lake-mburo-national-park-700x450.jpg',
      alt: 'Luxury Uganda Safaris - Wildlife viewing in Lake Mburo National Park',
      spanClass: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 'culture',
      title: 'Cultural Heritage',
      url: 'https://i.postimg.cc/43rrJ9MQ/Cultural-Tourism.jpg',
      alt: 'Luxury Uganda Safaris - Authentic cultural immersion and heritage',
      spanClass: 'md:col-span-1 md:row-span-2',
    },
    {
      id: 'karamoja',
      title: 'Karamoja Wilds',
      url: 'https://i.postimg.cc/L5V7B0s0/uganda-karamoja.jpg',
      alt: 'Luxury Uganda Safaris - Rugged wilderness of Karamoja region',
      spanClass: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'dance',
      title: 'Ndere Rhythms',
      url: 'https://i.postimg.cc/BZw2tBNG/Ndere-1.jpg',
      alt: 'Luxury Uganda Safaris - Traditional Ndere cultural dance performance',
      spanClass: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 'scenic',
      title: 'Scenic Vistas',
      url: 'https://i.postimg.cc/hGkPHh1k/Top-Attractions-in-Uganda.jpg',
      alt: 'Luxury Uganda Safaris - Panoramic scenic attractions of the Pearl of Africa',
      spanClass: 'md:col-span-2 md:row-span-1',
    },
    {
      id: 'landscape',
      title: 'Luxury Horizons',
      url: 'https://i.postimg.cc/SK3pJ5XS/6720669733-d2babcc9a3.jpg',
      alt: 'Luxury Uganda Safaris - High-end landscape and wilderness sanctuaries',
      spanClass: 'md:col-span-1 md:row-span-1',
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-[#F5F5DC] border-y-2 border-[#1A1A1A] px-4" aria-labelledby="gallery-title">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 text-center reveal-trigger">
          <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] mb-6 font-bold">VISUAL ARCHIVE</p>
          <h2 id="gallery-title" className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] mb-8 tracking-tighter">
            Bespoke Fragments.
          </h2>
          <p className="text-[#1A1A1A] font-light text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
            A curated visual narrative of our most intimate and profound encounters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden border-2 border-[#1A1A1A] shadow-xl transition-all duration-700 hover:shadow-2xl ${item.spanClass}`}
            >
              {/* Image Layer */}
              <img
                src={item.url}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-[1500ms] cubic-bezier(0.19, 1, 0.22, 1) group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay Layer */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/60" />
              
              {/* Content Layer */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                <p className="text-[#D4AF37] font-serif text-2xl md:text-3xl font-bold tracking-tight text-center mb-2 italic">
                  {item.title}
                </p>
                <div className="w-12 h-[1px] bg-[#D4AF37] mb-4" />
                <p className="text-[10px] text-white/80 uppercase tracking-[0.4em] font-bold text-center">
                  Native Narrative
                </p>
              </div>

              {/* Decorative Number for Editorial Feel */}
              <div className="absolute bottom-4 left-4 z-10 text-white/40 text-[9px] uppercase tracking-[0.4em] font-bold group-hover:text-[#D4AF37]/60 transition-colors" aria-hidden="true">
                KUZURI / {item.id.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
