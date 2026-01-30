
import React, { useState } from 'react';

interface SubHighlight {
  label: string;
  text: string;
}

interface DiscoverFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  detailHeading: string;
  detailDescription?: string;
  subHighlights?: SubHighlight[];
  cta?: { text: string; action: () => void }[];
  onExploreOverride?: () => void;
}

interface DiscoverUgandaProps {
  onExploreGorilla?: () => void;
  onExploreBoat?: () => void;
  onExploreChimpanzee?: () => void;
}

export const DiscoverUganda: React.FC<DiscoverUgandaProps> = ({ onExploreGorilla, onExploreBoat, onExploreChimpanzee }) => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const features: DiscoverFeature[] = [
    {
      id: 'boat',
      subtitle: 'AQUATIC ODYSSEY',
      title: 'SERENITY OF WATER SAFARI',
      description: "Hop aboard and experience safari from a whole new perspective. Thanks to its rivers and lakes, Uganda is the perfect place for a boat safari – whether you simply want to relax, observe wildlife up close, or awaken your inner adventurer.",
      detailHeading: 'REGIONAL AQUATIC HIGHLIGHTS',
      subHighlights: [
        { label: 'LAKE VICTORIA', text: "Lake Victoria is one of the world's largest freshwater lakes. Sailing smoothly across this natural gem, you can visit islands like Ngamba Island and its chimpanzee sanctuary, or the Ssese Islands, a prime spot for birdwatchers." },
        { label: 'MURCHISON FALLS', text: "Head to Murchison Falls National Park and experience the ultimate safari with an experienced marine guide. After getting up close to the falls, continue cruising the Victoria Nile Delta, where elephants, hippos, and crocodiles await." },
        { label: 'KAZINGA CHANNEL', text: "Home to the largest population of hippos in Africa. Keep your eyes peeled for the various mammals, birds, crocodiles, and enormous monitor lizards—some so large they can even be mistaken for baby crocodiles!" },
        { label: 'LAKE BUNYONYI', text: "Discover Ugandan culture across twenty-nine islands scattered across the lake. While this boat safari focuses on scenery and birds, your guide will share stories and legends known only to the locals." },
        { label: 'LAKE MBURO', text: "Relaxation at Lake Mburo. In western Uganda lies its smallest lake, yet it boasts an incredibly rich biodiversity. Besides the usual aquatic animals, numerous birds can be spotted, including the endemic African finch." },
        { label: 'LAKE MUTANDA', text: "One of the most beautiful lakes in the country, where the famous Virunga volcanoes rise from the mist. You can swim and fish with the locals; rest assured, there are no hippos or crocodiles in it." },
        { label: 'TIMING', text: "The best time is all the time. During the dry months (June-Aug, Dec-Feb), chances of spotting wildlife are higher as they congregate at the water's edge. If you're eager to experience this, be our guest." }
      ],
      imageUrl: 'https://i.postimg.cc/HkZK72Sk/frames-for-your-heart-yb-Ea-Jqf-RUHs-unsplash.jpg',
      cta: [
        { text: 'BOOK A SAFARI (BY BOAT) IN UGANDA', action: () => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' }) }
      ],
      onExploreOverride: onExploreBoat
    },
    {
      id: 'gorilla',
      subtitle: 'MISTY ENCOUNTERS',
      title: 'GORILLA TREKKING',
      description: 'The soul of the forest. Venture into the ancient Bwindi Impenetrable Forest for a life-altering encounter with the mountain gorilla.',
      detailHeading: 'THE SOUL OF THE ANCIENT FOREST',
      detailDescription: 'Bwindi is not just a forest; it is a living sanctuary of ancient memories. Tracking the mountain gorilla through its misty valleys is a journey that transcends traditional travel—it is a profound reconnection with the natural world. In the silent emerald gloom, meeting the gaze of a silverback is a moment of pure, raw connection.',
      imageUrl: 'https://i.postimg.cc/VkY4Hkrd/Tourism_in_Uganda.jpg',
      onExploreOverride: onExploreGorilla
    },
    {
      id: 'chimpanzee',
      subtitle: 'PRIMATE SYMPHONY',
      title: 'OBSERVE THE CHIMPANZEES',
      description: 'Experience the wild energy of Kibale National Park, the primate capital of the world. Track our closest relatives through the lush tropical rainforest.',
      detailHeading: 'THE RHYTHM OF THE RAINFOREST',
      detailDescription: 'In the heart of Kibale, the air vibrates with the raw energy of our closest living relatives. Observing chimpanzees in their natural habitat is a window into a complex social world of intelligence, play, and survival. As you traverse the forest floor, the overhead calls and rustling canopy create an immersive primate symphony.',
      imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=85&w=1200',
      onExploreOverride: onExploreChimpanzee
    },
    {
      id: 'planning',
      subtitle: 'THE PERFECT RHYTHM',
      title: 'PLANNING & BOOKING',
      description: 'The best time is all the time. Discover the dry months that offer the ultimate wildlife convergence at the water’s edge.',
      detailHeading: 'PLANNING YOUR JOURNEY',
      detailDescription: "During the dry months of June, July, August, December, January, and February, the chances of spotting Africa's famous wildlife are higher, as the animals congregate at the water's edge. If you're eager to experience one (or all) of these boat safaris yourself, be our guest – literally.",
      imageUrl: 'https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=1200',
      cta: [
        { text: 'Discover Uganda', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { text: 'Book an Experience', action: () => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' }) }
      ]
    }
  ];

  const handleToggleDetail = (id: string) => {
    const feature = features.find(f => f.id === id);
    if (feature?.onExploreOverride) {
      feature.onExploreOverride();
      return;
    }
    setActiveDetailId(activeDetailId === id ? null : id);
  };

  return (
    <section className="bg-white py-12 md:py-16 px-6" aria-labelledby="discover-heading">
      <div className="container mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-20 text-center reveal-trigger">
          <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-6">THE COLLECTION</p>
          <h2 id="discover-heading" className="text-5xl md:text-8xl font-serif font-bold text-[#1A1A1A] tracking-tighter uppercase">
            DISCOVER <span className="italic font-light">UGANDA</span>
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-8" />
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {features.map((feature, idx) => {
            const isExpanded = activeDetailId === feature.id;

            return (
              <div key={feature.id} className="reveal-trigger group flex flex-col h-full">
                {/* Image Column */}
                <div className="relative aspect-[16/10] overflow-hidden border border-[#1A1A1A]/10 shadow-xl bg-[#F9F9F9] mb-8">
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title} 
                    className="w-full h-full object-cover opacity-100 transition-transform duration-[10s] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-0 left-0 bg-[#1A1A1A] px-6 py-3">
                    <span className="text-white text-xs font-black tracking-widest">0{idx + 1}</span>
                  </div>
                </div>

                {/* Text Column */}
                <div 
                  className={`relative flex flex-col flex-grow justify-between cursor-pointer border border-[#1A1A1A]/5 shadow-sm bg-[#FAF8F3] transition-all duration-700 p-8 ${isExpanded ? 'ring-2 ring-[#D4AF37]/30' : ''}`}
                  onClick={() => handleToggleDetail(feature.id)}
                >
                  <div key={isExpanded ? 'detail' : 'summary'} className="animate-fade-in space-y-6 flex-grow">
                    <div className="space-y-3">
                      <p className="text-[#D4AF37] uppercase tracking-[0.6em] text-[11px] font-black">
                        {feature.subtitle}
                      </p>
                      
                      <h3 className={`text-2xl md:text-3xl uppercase leading-tight tracking-tight transition-all duration-700 font-sans ${isExpanded ? 'text-[#D4AF37] font-extrabold' : 'text-[#3B1E14] font-black group-hover:text-[#8B5A2B]'}`}>
                        {isExpanded ? feature.detailHeading : feature.title}
                      </h3>
                    </div>
                    
                    {isExpanded ? (
                      <div className="space-y-8">
                        {feature.subHighlights ? (
                          <div className="grid grid-cols-1 gap-6">
                            {feature.subHighlights.map((sh, i) => (
                              <div key={i} className="border-l-2 border-[#D4AF37] pl-4 space-y-1">
                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#8B5A2B]">{sh.label}</p>
                                <p className="text-sm font-normal text-[#1A1A1A] leading-relaxed">{sh.text}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-base md:text-lg font-normal leading-relaxed tracking-wide text-[#1A1A1A]">
                            {feature.detailDescription}
                          </p>
                        )}
                        
                        {feature.cta && (
                          <div className="pt-4 flex flex-col gap-4">
                            {feature.cta.map((c, i) => (
                              <button 
                                key={i}
                                onClick={(e) => { e.stopPropagation(); c.action(); }}
                                className="w-full sm:w-auto px-6 py-4 border-2 border-[#1A1A1A] bg-[#1A1A1A] text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#8B5A2B] hover:text-white transition-all duration-500 shadow-lg"
                              >
                                {c.text}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-base md:text-lg font-normal leading-relaxed tracking-wide text-gray-700">
                        {feature.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-8 flex justify-between items-end border-t border-black/5 mt-8">
                    <span className="text-[11px] uppercase tracking-[0.6em] font-black border-b-2 border-[#1A1A1A] pb-2 text-[#1A1A1A] group-hover:text-[#8B5A2B] group-hover:border-[#8B5A2B] transition-all duration-500">
                      {isExpanded ? 'Close Narrative' : 'Explore Details'}
                    </span>
                    
                    <div className={`pb-2 text-[#D4AF37] transition-all duration-700 transform ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-2'}`} aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
