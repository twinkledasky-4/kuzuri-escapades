
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
}

interface DiscoverUgandaProps {
  features: DiscoverFeature[];
  onExploreGorilla?: () => void;
  onExploreBoat?: () => void;
  onExploreChimpanzee?: () => void;
}

export const DiscoverUganda: React.FC<DiscoverUgandaProps> = ({ features, onExploreGorilla, onExploreBoat, onExploreChimpanzee }) => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const handleToggleDetail = (id: string) => {
    if (id === 'gorilla' && onExploreGorilla) {
      onExploreGorilla();
      return;
    }
    if (id === 'boat' && onExploreBoat) {
      onExploreBoat();
      return;
    }
    if (id === 'chimpanzee' && onExploreChimpanzee) {
      onExploreChimpanzee();
      return;
    }
    setActiveDetailId(activeDetailId === id ? null : id);
  };

  return (
    <section id="discover-uganda" className="bg-white py-12 md:py-16 px-6 scroll-mt-[100px]" aria-labelledby="discover-heading">
      <div className="container mx-auto max-w-[1400px]">
        <div className="mb-16 text-center reveal-trigger">
          <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-6">THE COLLECTION</p>
          <h2 id="discover-heading" className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] tracking-tighter uppercase">
            DISCOVER <span className="italic font-light">UGANDA</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {features.map((feature, idx) => {
            const isExpanded = activeDetailId === feature.id;

            return (
              <div key={feature.id} className="reveal-trigger group flex flex-col h-full">
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

                <div 
                  className={`relative flex flex-col flex-grow justify-between cursor-pointer border border-[#1A1A1A]/5 shadow-sm bg-[#FAF8F3] transition-all duration-700 p-8 ${isExpanded ? 'ring-2 ring-[#D4AF37]/30' : ''}`}
                  onClick={() => handleToggleDetail(feature.id)}
                >
                  <div key={isExpanded ? 'detail' : 'summary'} className="animate-fade-in space-y-6 flex-grow">
                    <div className="space-y-3">
                      <p className="text-[#D4AF37] uppercase tracking-[0.6em] text-[11px] font-black">
                        {feature.subtitle}
                      </p>
                      
                      <h3 className={`text-xl md:text-2xl lg:text-3xl uppercase leading-tight tracking-tight transition-all duration-700 font-sans ${isExpanded ? 'text-[#D4AF37] font-extrabold' : 'text-[#3B1E14] font-black group-hover:text-[#8B5A2B]'}`}>
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
                      </div>
                    ) : (
                      <p className="text-base md:text-lg font-normal leading-relaxed tracking-wide text-gray-700">
                        {feature.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-8 flex justify-between items-end border-t border-black/5 mt-8">
                    <span className="text-[11px] uppercase tracking-[0.6em] font-black border-b-2 border-[#1A1A1A] pb-2 text-[#1A1A1A] group-hover:text-[#8B5A2B] group-hover:border-[#8B5A2B] transition-all duration-500">
                      {isExpanded ? 'Close EXPERIENCE' : 'Explore EXPERIENCE'}
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
