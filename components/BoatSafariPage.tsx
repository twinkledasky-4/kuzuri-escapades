import React, { useEffect, useState } from 'react';
import { Clock, Check, Calendar, Info, Users, Euro, Minus, Waves, Anchor, Ship, Bird, Fish, Mountain, Camera } from 'lucide-react';

interface BoatSafariPageProps {
  onBack: () => void;
  onBook: () => void;
}

export const BoatSafariPage: React.FC<BoatSafariPageProps> = ({ onBack, onBook }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const regions = [
    {
      id: 'victoria',
      title: "LAKE VICTORIA",
      subtitle: "THE GREAT INLAND SEA",
      detail: "Sailing smoothly across this natural gem, you can visit islands like Ngamba Island and its world-renowned chimpanzee sanctuary, or the Ssese Islands—a prime spot for birdwatchers. Our signature romantic sunset cruises offer a moment of pure serenity as the sun dips below the horizon of the Victoria.",
      image: "https://i.postimg.cc/BnbDJsdd/indonesian-sunset-gili-trawangan.jpg",
      overlay: "THE GREAT INLAND SEA",
      icon: <Waves size={24} />
    },
    {
      id: 'murchison',
      title: "MURCHISON FALLS",
      subtitle: "THUNDERING NILE EXPEDITIONS",
      detail: "Experience the ultimate safari with an experienced marine guide. For the thrill-seekers, the journey to the base of the falls reveals the raw power of the Nile. Continue cruising to the Victoria Nile Delta, where elephants, hippos, and crocodiles await in the thundering heart of the wild.",
      image: "https://i.postimg.cc/DZWv9h7k/local-female-visitor-enjoying-bungee-jump-at-the-Nile-in-Jinja-Uganda-photo-by-Visit-Jinja-City-750x.jpg",
      overlay: "THE MIGHTY NILE",
      icon: <Anchor size={24} />
    },
    {
      id: 'mutanda',
      title: "LAKE MUTANDA",
      subtitle: "VOLCANIC SERENITY",
      detail: "One of the most beautiful lakes in the country, where the famous Virunga volcanoes rise from the mist. Here, you can enjoy a unique cultural experience fishing with locals in waters completely free of hippos and crocodiles—offering a rare, tranquil connection to the land.",
      image: "https://i.postimg.cc/wBXcDCCq/motorboat_sea_with_green_landscape_coast.jpg",
      overlay: "VOLCANIC SERENITY",
      icon: <Mountain size={24} />
    },
    {
      id: 'bunyonyi',
      title: "LAKE BUNYONYI",
      subtitle: "LEGENDS OF THE 29 ISLANDS",
      detail: "Discover Ugandan culture across twenty-nine islands scattered across the lake. While this boat safari focuses on scenery and birds, your guide will share local legends and cultural stories known only to the locals of this mist-covered sanctuary.",
      image: "https://i.postimg.cc/DZw3MjWY/river-calm-scenery.jpg",
      overlay: "29 ISLANDS",
      icon: <Bird size={24} />
    },
    {
      id: 'kazinga',
      title: "KAZINGA CHANNEL",
      subtitle: "THE HIGHWAY OF GIANTS",
      detail: "Home to the largest population of hippos in Africa. Keep your eyes peeled for the various mammals, birds, crocodiles, and enormous 'Giant Monitor Lizards'—some so large they can even be mistaken for baby crocodiles as they line the banks to hunt.",
      image: "https://i.postimg.cc/Sxm49xyv/fisherman-with-net-river.jpg",
      overlay: "HIGHWAY OF GIANTS",
      icon: <Ship size={24} />
    },
    {
      id: 'mburo',
      title: "LAKE MBURO",
      subtitle: "BIODIVERSITY OF THE BLUE MOSAIC",
      detail: "In western Uganda lies its smallest lake, yet it boasts an incredibly rich biodiversity. Beyond the usual aquatic animals, numerous birds can be spotted, including the endemic African finch and rare otters playing along the shoreline.",
      image: "https://i.postimg.cc/7Y6XWLt6/lake-mburo-national-park-700x450.jpg",
      overlay: "BLUE MOSAIC",
      icon: <Fish size={24} />
    }
  ];

  const pricingData = [
    {
      season: "Low Season",
      period: "March–May, Nov 1–Dec 19",
      prices: { p2: "1,250.00", p4: "1,120.00", p6: "980.00" }
    },
    {
      season: "Mid-Season",
      period: "Rest of the year",
      prices: { p2: "1,420.00", p4: "1,280.00", p6: "1,150.00" }
    },
    {
      season: "High Season",
      period: "Jan, July–Sept, Dec 20–31",
      prices: { p2: "1,650.00", p4: "1,490.00", p6: "1,320.00" }
    }
  ];

  const inclusions = [
    "24/7 service",
    "Private boat charters",
    "Expert marine guides",
    "National park entrance",
    "Full board meals",
    "Luxury ground transfers",
    "Airport meet & greet",
    "English-speaking curator"
  ];

  const exclusions = [
    "Visas",
    "Travel insurance",
    "International flights"
  ];

  return (
    <div className="bg-[#FAF8F3] min-h-screen selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Navigation */}
      <div className="fixed top-24 left-6 md:left-12 z-50">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-black text-white bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 border border-white/10 px-8 py-4 shadow-2xl active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
          BACK TO COLLECTION
        </button>
      </div>

      {/* Hero Header */}
      <section className="relative h-screen overflow-hidden flex items-end bg-[#1A1A1A]">
        <img
          src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=1600"
          alt="High-resolution Ugandan waterway sunset"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] ease-out opacity-100 ${isRevealed ? 'scale-110' : 'scale-100'}`}
        />
        <div className="signature-overlay">THE SOURCE</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

        <div className={`relative z-20 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-24 pb-16 md:pb-24 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-6">AQUATIC EXPERIENCE</p>
          <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-serif font-bold text-white uppercase tracking-tight leading-[0.85] max-w-6xl mb-12">
            BOAT SAFARIS <br/><span className="italic font-light text-[#D4AF37]">IN UGANDA.</span>
          </h1>
          <p className="text-white/90 text-xl md:text-3xl font-serif italic mb-12 max-w-4xl border-l-2 border-[#D4AF37] pl-8 leading-relaxed">
            "Hop aboard and experience safari from a whole new perspective. Uganda is the perfect place for a boat safari."
          </p>
          
          <div className="flex flex-wrap gap-10 border-t border-white/20 pt-10">
            <div className="flex items-center gap-4">
              <Clock className="text-[#D4AF37]" size={20} />
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-black">DURATION</p>
                <p className="text-white text-sm font-bold">Variable / Custom</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="text-[#D4AF37]" size={20} />
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-black">BEST PERIOD</p>
                <p className="text-white text-sm font-bold">June-Feb (Dry Season)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Regional Discovery Modules - No vertical gaps */}
      <section className="bg-white">
        {regions.map((region, idx) => (
          <div key={region.id} className="w-full">
            <div className={`grid grid-cols-1 lg:grid-cols-2 items-stretch`}>
              {/* Image Side */}
              <div className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#1A1A1A] ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img 
                  src={region.image} 
                  alt={region.title} 
                  className="w-full h-full object-cover opacity-100 transition-transform duration-[10s] hover:scale-105"
                />
                <div className="signature-overlay">{region.overlay}</div>
                <div className="absolute top-10 left-10 bg-white p-6 shadow-2xl border border-black/5 z-20">
                  <div className="text-[#D4AF37]">{region.icon}</div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className={`flex flex-col justify-center px-10 md:px-20 lg:px-32 py-20 md:py-32 ${idx % 2 !== 0 ? 'lg:order-1' : ''} bg-[#FAF8F3]`}>
                <p className="text-[#8B5A2B] uppercase tracking-[0.8em] text-[10px] font-black mb-8">{region.subtitle}</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] leading-tight uppercase tracking-tighter mb-8">
                  {region.title}
                </h2>
                <div className="w-16 h-[2px] bg-[#D4AF37] mb-10" />
                <p className="text-xl text-[#1A1A1A]/80 font-serif leading-relaxed italic mb-12">
                  {region.detail}
                </p>
                <button 
                  onClick={onBook}
                  className="inline-flex items-center gap-6 text-[10px] font-sans font-black uppercase tracking-[0.6em] text-[#1A1A1A] border-b-2 border-[#D4AF37] pb-2 hover:text-[#8B5A2B] transition-colors w-fit"
                >
                  INQUIRE ABOUT {region.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Travel Planning Section - No vertical gap from modules */}
      <section className="py-24 md:py-40 bg-[#1A1A1A] text-white">
        <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 reveal-trigger">
              <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-8">EXPEDITION INTEL</p>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-none uppercase tracking-tighter mb-12">
                THE BEST TIME <br/><span className="italic font-light text-[#D4AF37]">IS ALL THE TIME.</span>
              </h2>
              <div className="space-y-8 text-xl font-serif leading-relaxed text-white/80 max-w-2xl italic">
                <p>
                  While boat safaris are magical year-round, the dry months from June to February offer the ultimate wildlife converge. During these windows, the chances of spotting Africa's famous wildlife are significantly higher, as the animals congregate at the water's edge to quench their thirst.
                </p>
                <p className="border-l-4 border-[#D4AF37] pl-8">
                  <span className="font-bold text-white not-italic block mb-2">CURATOR'S TIP:</span>
                  "To capture the raw emotion of a hippo's yawn or a monitor lizard's hunting gaze, we highly recommend bringing a <strong>powerful zoom lens</strong>. The water provides unique angles, but distance is key to maintaining the wild rhythm."
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 reveal-trigger">
              <div className="bg-white p-12 md:p-16 border-2 border-[#D4AF37] shadow-3xl text-[#1A1A1A] space-y-10">
                <div className="flex items-center gap-6 text-[#D4AF37]">
                  <Camera size={40} strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-[0.6em] font-black">GEAR RECOMMENDATION</p>
                </div>
                <h3 className="text-3xl font-serif font-bold italic">Capture the Silence.</h3>
                <p className="text-[#1A1A1A]/70 font-light leading-relaxed">
                  Our boats are equipped with stabilizers for photography, but the light over the Nile can be fast-changing. Ensure your kit is ready for the golden hour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Pricing Section */}
      <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#FAF8F3]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-8 space-y-24">
            {/* Investment Matrix */}
            <div className="reveal-trigger">
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1A1A1A] uppercase tracking-tight mb-12 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-[#D4AF37]" />
                AQUATIC INVESTMENT
              </h2>

              <div className="overflow-x-auto border-2 border-[#1A1A1A] bg-white shadow-2xl">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="bg-[#1A1A1A] text-white">
                      <th className="p-8 text-left text-[10px] uppercase tracking-[0.3em] font-black border-r border-white/10">Season / Period</th>
                      <th className="p-8 text-center text-[10px] uppercase tracking-[0.3em] font-black border-r border-white/10">
                        <div className="flex flex-col items-center gap-2">
                          <Users size={16} className="text-[#D4AF37]" />
                          <span>2 GUESTS</span>
                        </div>
                      </th>
                      <th className="p-8 text-center text-[10px] uppercase tracking-[0.3em] font-black border-r border-white/10">
                        <div className="flex flex-col items-center gap-2">
                          <Users size={16} className="text-[#D4AF37]" />
                          <span>4 GUESTS</span>
                        </div>
                      </th>
                      <th className="p-8 text-center text-[10px] uppercase tracking-[0.3em] font-black">
                        <div className="flex flex-col items-center gap-2">
                          <Users size={16} className="text-[#D4AF37]" />
                          <span>6 GUESTS</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, idx) => (
                      <tr key={idx} className="group hover:bg-[#FAF8F3] transition-colors border-b border-black/5 last:border-0">
                        <td className="p-8 border-r border-black/5">
                          <p className="text-[#8B5A2B] text-lg font-serif font-bold italic mb-1 uppercase tracking-tight">{row.season}</p>
                          <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold">{row.period}</p>
                        </td>
                        <td className="p-8 text-center border-r border-black/5 group-hover:bg-[#D4AF37]/5 transition-colors">
                          <div className="flex items-center justify-center gap-1">
                            <Euro size={14} className="text-[#8B5A2B]" />
                            <span className="text-xl font-sans font-black text-[#1A1A1A]">{row.prices.p2}</span>
                          </div>
                          <p className="text-[9px] uppercase tracking-widest font-black text-black/20 mt-2">Per Person</p>
                        </td>
                        <td className="p-8 text-center border-r border-black/5 group-hover:bg-[#D4AF37]/5 transition-colors">
                          <div className="flex items-center justify-center gap-1">
                            <Euro size={14} className="text-[#8B5A2B]" />
                            <span className="text-xl font-sans font-black text-[#1A1A1A]">{row.prices.p4}</span>
                          </div>
                          <p className="text-[9px] uppercase tracking-widest font-black text-black/20 mt-2">Per Person</p>
                        </td>
                        <td className="p-8 text-center group-hover:bg-[#D4AF37]/5 transition-colors">
                          <div className="flex items-center justify-center gap-1">
                            <Euro size={14} className="text-[#8B5A2B]" />
                            <span className="text-xl font-sans font-black text-[#1A1A1A]">{row.prices.p6}</span>
                          </div>
                          <p className="text-[9px] uppercase tracking-widest font-black text-black/20 mt-2">Per Person</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Logistics Grid */}
            <div className="reveal-trigger">
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1A1A1A] uppercase tracking-tight mb-12 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-[#D4AF37]" />
                LOGISTICS LEDGER
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white border-2 border-black p-12 shadow-xl">
                  <h3 className="text-[#D4AF37] text-[11px] uppercase tracking-[0.5em] font-black mb-8 border-b border-black/5 pb-4 flex items-center gap-3">
                    <Check size={16} className="text-green-600" /> WHAT'S INCLUDED
                  </h3>
                  <ul className="space-y-5">
                    {inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-5 h-5 bg-green-50 flex items-center justify-center shrink-0 mt-0.5 border border-green-200">
                          <Check size={12} className="text-green-600" strokeWidth={3} />
                        </div>
                        <p className="text-[13px] font-bold text-[#1A1A1A] uppercase tracking-wide leading-tight">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-2 border-black p-12 shadow-xl">
                  <h3 className="text-red-600 text-[11px] uppercase tracking-[0.5em] font-black mb-8 border-b border-black/5 pb-4 flex items-center gap-3">
                    <Minus size={16} className="text-red-600" /> WHAT'S EXCLUDED
                  </h3>
                  <ul className="space-y-5">
                    {exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-5 h-5 bg-red-50 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                          <Minus size={12} className="text-red-600" strokeWidth={3} />
                        </div>
                        <p className="text-[13px] font-bold text-[#1A1A1A] uppercase tracking-wide leading-tight">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-40 bg-white border-2 border-black p-10 shadow-2xl space-y-12">
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.6em] font-black text-[#8B5A2B] mb-8 border-b border-black/5 pb-4">AQUATIC ESSENTIALS</h4>
                <div className="space-y-6">
                  {[
                    "Private Marine Charters",
                    "Native Captains & Curators",
                    "Gourmet Lakeside Dining",
                    "VIP Navigation Protocol",
                    "All Marine Safety Gear"
                  ].map((h, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-[#D4AF37]" strokeWidth={3} />
                      </div>
                      <p className="text-[13px] font-bold text-[#1A1A1A] uppercase tracking-wide leading-tight">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-black/5">
                <button 
                  onClick={onBook}
                  className="w-full py-6 bg-[#1A1A1A] text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl"
                >
                  REQUEST THE EXPERIENCE
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="relative py-32 md:py-64 text-center text-white border-t-2 border-[#D4AF37] overflow-hidden bg-black">
        {/* Immersive High-Res Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/qvcqHx8d/c6b8b1e4_65a4_4e49_92bd_f4ed040c7b13.jpg" 
            alt="Majestic Aquatic Life Background"
            className="w-full h-full object-cover object-center"
          />
          {/* 60% Dark Overlay for typographic focus */}
          <div className="absolute inset-0 bg-black/60 z-[1]" />
          {/* Subtle gradient edges to blend with content/footer */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-[2]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-8xl font-serif font-bold mb-16 italic text-[#D4AF37] tracking-tight [text-shadow:0_4px_40px_rgba(0,0,0,0.95)]">
            Return to the Serenity of the Source.
          </h2>
          <button 
            onClick={onBook}
            className="px-20 py-8 bg-[#D4AF37] text-[#1A1A1A] text-[12px] uppercase tracking-[1em] font-black hover:bg-white transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.7)] border-none transform hover:scale-105 active:scale-95"
          >
            START CO-AUTHORING
          </button>
        </div>
      </section>
    </div>
  );
};