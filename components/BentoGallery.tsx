
import React from 'react';

interface GalleryItem {
  id: string;
  title: string;
  url: string;
  alt: string;
}

export const BentoGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 'wildlife-01',
      title: 'Wildlife Sovereignty',
      url: 'https://i.postimg.cc/7Y6XWLt6/lake-mburo-national-park-700x450.jpg',
      alt: 'Luxury Uganda Safaris - Wildlife viewing in Lake Mburo National Park',
    },
    {
      id: 'culture-01',
      title: 'Cultural Heritage',
      url: 'https://i.postimg.cc/43rrJ9MQ/Cultural-Tourism.jpg',
      alt: 'Luxury Uganda Safaris - Authentic cultural immersion and heritage',
    },
    {
      id: 'karamoja-01',
      title: 'Karamoja Wilds',
      url: 'https://i.postimg.cc/L5V7B0s0/uganda-karamoja.jpg',
      alt: 'Luxury Uganda Safaris - Rugged wilderness of Karamoja region',
    },
    {
      id: 'dance-01',
      title: 'Ndere Rhythms',
      url: 'https://i.postimg.cc/BZw2tBNG/Ndere-1.jpg',
      alt: 'Luxury Uganda Safaris - Traditional Ndere cultural dance performance',
    },
    {
      id: 'scenic-01',
      title: 'Scenic Vistas',
      url: 'https://i.postimg.cc/hGkPHh1k/Top-Attractions-in-Uganda.jpg',
      alt: 'Luxury Uganda Safaris - Panoramic scenic attractions of the Pearl of Africa',
    },
    {
      id: 'landscape-01',
      title: 'Luxury Horizons',
      url: 'https://i.postimg.cc/SK3pJ5XS/6720669733-d2babcc9a3.jpg',
      alt: 'Luxury Uganda Safaris - High-end landscape and wilderness sanctuaries',
    },
  ];

  return (
    <section className="pt-12 md:pt-16 pb-0 bg-[#1A1412] border-t border-white/5 px-6 m-0 block" aria-labelledby="gallery-title">
      <div className="container mx-auto max-w-[1700px]">
        <div className="mb-20 text-center reveal-trigger">
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] mb-6 font-bold">VISUAL ARCHIVE</p>
          <h2 id="gallery-title" className="text-5xl md:text-8xl font-serif font-bold text-[#D4AF37] mb-8 tracking-tighter uppercase">
            Signature <span className="italic font-light">Fragments.</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37]/30 mx-auto" />
        </div>

        {/* 3-Column Grid Layout - Desktop, 1-Column - Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden border-2 border-[#D4AF37] shadow-2xl transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] bg-[#1A1412] filter-none"
            >
              {/* Image Layer - High Fidelity, No Fog, Object-Fit Cover */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-[4000ms] group-hover:scale-110 opacity-100 filter-none"
                  loading="lazy"
                />
              </div>
              
              {/* Grounded linear overlay for contrast - Zero Blur */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-85" />
              
              {/* Content Layer - Sharp Typography */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-10 text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <p className="text-[#D4AF37] font-serif text-3xl md:text-4xl font-bold tracking-tight mb-3 italic leading-tight">
                  {item.title}
                </p>
                <div className="w-12 h-[2px] bg-[#D4AF37] mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <p className="text-white text-[10px] uppercase tracking-[0.5em] font-black opacity-100 mb-2">
                  NATIVE NARRATIVE
                </p>
                
                {/* Visual Serial ID */}
                <div className="absolute top-6 left-6 text-white/40 text-[9px] uppercase tracking-[0.6em] font-black border-l border-white/20 pl-3">
                  KE // {item.id.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
