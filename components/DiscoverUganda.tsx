
import React, { useState } from 'react';

interface DiscoverFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  detailHeading: string;
  detailDescription: string;
}

export const DiscoverUganda: React.FC = () => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const features: DiscoverFeature[] = [
    {
      id: 'boat',
      subtitle: 'AQUATIC ODYSSEY',
      title: 'BOAT SAFARIS',
      description: 'Uganda is full of magnificent lakes. So why not trade your safari vehicle for a boat for a water safari? Hop aboard and discover a wealth of aquatic and terrestrial wildlife amidst breathtaking scenery.',
      detailHeading: 'THE SERENITY OF WATER SAFARIS',
      detailDescription: "Uganda’s true magic is often found where the land meets the water. Trade the dust of the savannah for a refreshing breeze as you embark on a private boat excursion across the country’s legendary lakes and rivers. From the comfort of your vessel, you will witness a vibrant theater of life—watch hippos bask in the shallows, elephants hydrate along the banks, and an array of exotic birds decorate the shoreline. It is a perspective of the wild that few get to experience, set against some of the most stunning natural backdrops in East Africa.",
      imageUrl: 'https://i.postimg.cc/HkZK72Sk/frames-for-your-heart-yb-Ea-Jqf-RUHs-unsplash.jpg'
    },
    {
      id: 'gorilla',
      subtitle: 'MISTY ENCOUNTERS',
      title: 'GORILLA TREKKING',
      description: 'The soul of the forest. Venture into the ancient Bwindi Impenetrable Forest for a life-altering encounter with the mountain gorilla. Our native trackers lead you through the emerald canopy to the heart of the family group.',
      detailHeading: 'THE SOUL OF THE ANCIENT FOREST',
      detailDescription: 'Bwindi is not just a forest; it is a living sanctuary of ancient memories. Tracking the mountain gorilla through its misty valleys is a journey that transcends traditional travel—it is a profound reconnection with the natural world. In the silent emerald gloom, meeting the gaze of a silverback is a moment of pure, raw connection that remains etched in your soul forever, a testament to the enduring majesty of Africa’s high forests.',
      imageUrl: 'https://i.postimg.cc/VkY4Hkrd/Tourism_in_Uganda.jpg'
    },
    {
      id: 'chimpanzee',
      subtitle: 'PRIMATE SYMPHONY',
      title: 'OBSERVE THE CHIMPANZEES',
      description: 'Experience the wild energy of Kibale National Park, the primate capital of the world. Track our closest relatives through the lush tropical rainforest as they swing through the high canopy in a symphony of forest life.',
      detailHeading: 'THE RHYTHM OF THE RAINFOREST',
      detailDescription: 'In the heart of Kibale, the air vibrates with the raw energy of our closest living relatives. Observing chimpanzees in their natural habitat is a window into a complex social world of intelligence, play, and survival. As you traverse the forest floor, the overhead calls and rustling canopy create an immersive primate symphony that reminds us of our own place in the grand tapestry of life on Earth.',
      imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=85&w=1200'
    }
  ];

  const handleToggleDetail = (id: string) => {
    setActiveDetailId(activeDetailId === id ? null : id);
  };

  return (
    <section className="bg-white py-32 md:py-60 px-6" aria-labelledby="discover-heading">
      <div className="container mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-32 text-center reveal-trigger">
          <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-bold mb-6">THE COLLECTION</p>
          <h2 id="discover-heading" className="text-5xl md:text-8xl font-serif font-bold text-[#1A1A1A] tracking-tighter uppercase">
            DISCOVER <span className="italic font-light">UGANDA</span>
          </h2>
          <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto mt-12" />
        </div>

        {/* Feature List */}
        <div className="space-y-40 md:space-y-64">
          {features.map((feature, idx) => {
            const isExpanded = activeDetailId === feature.id;

            return (
              <div key={feature.id} className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start reveal-trigger group">
                {/* Image Column - Left (Maintains high-fidelity, no foggy filters) */}
                <div className="relative aspect-[16/10] overflow-hidden border border-[#1A1A1A]/10 shadow-2xl bg-[#F9F9F9]">
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

                {/* Text Column - Right (Dynamic Height & 24px Safety Zone applied) */}
                <div 
                  className="relative flex flex-col h-auto min-h-full justify-between cursor-pointer border border-[#1A1A1A]/5 shadow-sm bg-[#FAF8F3] transition-all duration-700"
                  style={{ padding: '24px' }}
                  onClick={() => handleToggleDetail(feature.id)}
                >
                  <div key={isExpanded ? 'detail' : 'summary'} className="animate-fade-in space-y-8 flex-grow">
                    <div className="space-y-4">
                      <p className="text-[#D4AF37] uppercase tracking-[0.6em] text-[11px] font-black">
                        {feature.subtitle}
                      </p>
                      
                      {/* Heading: Safari Gold (#D4AF37) for expanded view, clean elegant sans-serif */}
                      <h3 className={`text-4xl md:text-5xl uppercase leading-tight tracking-tight transition-all duration-700 font-sans ${isExpanded ? 'text-[#D4AF37] font-extrabold' : 'text-[#3B1E14] font-black group-hover:text-[#8B5A2B]'}`}>
                        {isExpanded ? feature.detailHeading : feature.title}
                      </h3>
                    </div>
                    
                    {/* Body Text: Deep Charcoal (#1A1A1A) for readability */}
                    <p className={`text-lg md:text-xl font-normal leading-relaxed tracking-wide max-w-2xl transition-colors duration-700 ${isExpanded ? 'text-[#1A1A1A]' : 'text-gray-700'}`}>
                      {isExpanded ? feature.detailDescription : feature.description}
                    </p>
                  </div>

                  {/* Navigation Element & Safari Gold Arrow (>) */}
                  <div className="pt-12 flex justify-between items-end border-t border-black/5 mt-8">
                    <span className="text-[11px] uppercase tracking-[0.6em] font-black border-b-2 border-[#1A1A1A] pb-2 text-[#1A1A1A] group-hover:text-[#8B5A2B] group-hover:border-[#8B5A2B] transition-all duration-500">
                      {isExpanded ? 'Close Narrative' : 'Explore Details'}
                    </span>
                    
                    <div className={`pb-2 text-[#D4AF37] transition-all duration-700 transform ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-2'}`} aria-hidden="true">
                      {/* Clean Elegant Sans-Serif Style Arrow */}
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
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.9s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </section>
  );
};
