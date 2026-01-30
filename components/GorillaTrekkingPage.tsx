
import React, { useEffect, useState } from 'react';
import { Clock, Check, Calendar, Info, Users, Euro, Minus } from 'lucide-react';

interface GorillaTrekkingPageProps {
  onBack: () => void;
  onBook: () => void;
}

export const GorillaTrekkingPage: React.FC<GorillaTrekkingPageProps> = ({ onBack, onBook }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const itinerary = [
    { day: 1, title: "ARRIVAL & ENTEBBE SANCTUARY", detail: "Arrive at Entebbe International Airport where your native curator awaits. Transfer to a boutique lakeside hotel. Spend the afternoon adjusting to the rhythm of Africa with a private sunset cruise on Lake Victoria." },
    { day: 2, title: "FLIGHT TO THE MISTY MOUNTAINS", detail: "A scenic private charter flight takes you across the lush craters and plains to the edge of Bwindi Impenetrable Forest. Settle into a luxury cloud-level lodge overlooking the ancient canopy." },
    { day: 3, title: "THE LIFE-CHANGING ENCOUNTER", detail: "Enter the forest at dawn. Led by expert native trackers, navigate the emerald gloom to find the mountain gorilla family. Spend one profound hour in their presence—a silent, sacred connection with our gentle relatives." },
    { day: 4, title: "LAKE BUNYONYI SERENITY", detail: "Traverse the scenic highlands to Lake Bunyonyi. Explore the islands by traditional dugout canoe and share stories with the local communities of the 'place of many little birds'." },
    { day: 5, title: "DEPARTURE & REFLECTION", detail: "Return to Entebbe via a final scenic flight. Enjoy a quiet afternoon at the studio before your international departure, carrying with you the silence and soul of the Pearl." }
  ];

  const pricingData = [
    {
      season: "Low Season",
      period: "March–May, Nov 1–Dec 19",
      prices: { p2: "1,713.14", p4: "1,539.39", p6: "1,481.48" }
    },
    {
      season: "Mid-Season",
      period: "Rest of the year",
      prices: { p2: "1,863.11", p4: "1,661.24", p6: "1,593.95" }
    },
    {
      season: "High Season",
      period: "Jan, July–Sept, Dec 20–31",
      prices: { p2: "1,939.44", p4: "1,729.30", p6: "1,659.26" }
    }
  ];

  const inclusions = [
    "24/7 service",
    "5 days duration",
    "Accommodation included",
    "Full board meals",
    "4x4 Luxury Safari vehicle",
    "National park entrance",
    "Airport transfers",
    "English-speaking private guide"
  ];

  const exclusions = [
    "Visas",
    "Travel insurance",
    "International flights"
  ];

  return (
    <div className="bg-[#FAF8F3] min-h-screen selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Navigation - Strategic Placement to clear Navbar */}
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
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden flex items-end bg-[#1A1A1A] border-b-2 border-[#1A1A1A]">
        <img
          src="https://images.unsplash.com/photo-1518063311540-0640001280cc?auto=format&fit=crop&q=80&w=1600"
          alt="Silverback mountain gorilla in Bwindi Impenetrable Forest"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] ease-out opacity-100 ${isRevealed ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

        <div className={`relative z-20 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-24 pb-16 md:pb-24 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-6">EXCLUSIVE EXPERIENCE</p>
          <h1 className="text-4xl md:text-7xl lg:text-[7rem] font-serif font-bold text-white uppercase tracking-tight leading-[0.9] max-w-6xl mb-6">
            DISCOVERING GORILLAS <br/><span className="italic font-light text-[#D4AF37]">IN UGANDA.</span>
          </h1>
          <p className="text-white/90 text-xl md:text-3xl font-serif italic mb-12 max-w-3xl border-l-2 border-[#D4AF37] pl-8 leading-relaxed">
            "If Sigourney Weaver can get close to them, so can you!"
          </p>
          
          <div className="flex flex-wrap gap-10 border-t border-white/20 pt-10">
            <div className="flex items-center gap-4">
              <Clock className="text-[#D4AF37]" size={20} />
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-black">DURATION</p>
                <p className="text-white text-sm font-bold">5 Days / 4 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Calendar className="text-[#D4AF37]" size={20} />
              <div>
                <p className="text-white/40 text-[9px] uppercase tracking-widest font-black">SEASONALITY</p>
                <p className="text-white text-sm font-bold">Best June-Aug, Dec-Feb</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-8 space-y-24">
            <div className="reveal-trigger">
              <div className="max-w-4xl mb-24">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight mb-12 uppercase tracking-tighter">
                  5-DAY TREK IN UGANDA TO MEET THE GORILLAS.
                </h2>
                
                <div className="space-y-10 text-xl text-[#1A1A1A]/80 font-serif leading-relaxed">
                  <p>
                    Entering the Bwindi Impenetrable Forest is a descent into a world of primal sounds and deep emerald shadows. But as you find the troop, the atmosphere shifts from tension to a strange, domestic tranquility.
                  </p>
                  
                  <div className="bg-white p-12 border-l-4 border-[#D4AF37] shadow-xl space-y-8 italic">
                    <p>
                      Did you know that mountain gorillas are quite vocal during mealtime? To experience them is to hear a constant, low-frequency <strong>humming and singing</strong> as they forage—punctuated, quite often, by <strong>frequent farting</strong>. It is a sign of ultimate relaxation and contentment in their forest home.
                    </p>
                    <p>
                      Despite their immense power, these gentle giants have curious vulnerabilities. While they fear nothing in the savannah, they are known to have a <strong>distinct fear of caterpillars</strong> and certain insects, often moving away or clearing their path if they encounter one of these tiny crawlers.
                    </p>
                    <p>
                      Yet, one never forgets the scale of their strength. Watching an <strong>180kg Silverback</strong> move through the dense undergrowth is a masterclass in physical power. He is the undisputed sovereign of the slopes, capable of shattering thick branches with a single hand, yet he oversees his family with a tenderness that is profoundly moving.
                    </p>
                  </div>
                </div>

                <div className="w-20 h-[2px] bg-[#D4AF37] mt-16" />
              </div>

              <h2 className="text-2xl md:text-4xl font-sans font-black text-[#1A1A1A] uppercase tracking-tight mb-12 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-[#D4AF37]" />
                THE ITINERARY
              </h2>
              
              <div className="space-y-16 border-l border-black/5 pl-8 md:pl-16 ml-4">
                {itinerary.map((day) => (
                  <div key={day.day} className="relative group">
                    <div className="absolute -left-[41px] md:-left-[73px] top-0 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-white shadow-xl group-hover:scale-150 transition-transform" />
                    <p className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-black mb-4">DAY {day.day}</p>
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#1A1A1A] mb-6 uppercase tracking-tight">{day.title}</h3>
                    <p className="text-[#1A1A1A]/70 text-lg leading-relaxed font-normal max-w-3xl">
                      {day.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Pricing Matrix */}
            <div className="reveal-trigger pt-12">
               <h2 className="text-2xl md:text-4xl font-sans font-black text-[#1A1A1A] uppercase tracking-tight mb-12 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-[#D4AF37]" />
                INVESTMENT NARRATIVE
              </h2>

              <div className="overflow-x-auto border-2 border-[#1A1A1A] bg-white shadow-2xl">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="bg-[#1A1A1A] text-white">
                      <th className="p-8 text-left text-[10px] uppercase tracking-[0.3em] font-black border-r border-white/10">Season / Period</th>
                      <th className="p-8 text-center text-[10px] uppercase tracking-[0.3em] font-black border-r border-white/10">
                        <div className="flex flex-col items-center gap-2">
                          <Users size={16} className="text-[#D4AF37]" />
                          <span>2 PEOPLE</span>
                        </div>
                      </th>
                      <th className="p-8 text-center text-[10px] uppercase tracking-[0.3em] font-black border-r border-white/10">
                        <div className="flex flex-col items-center gap-2">
                          <Users size={16} className="text-[#D4AF37]" />
                          <span>4 PEOPLE</span>
                        </div>
                      </th>
                      <th className="p-8 text-center text-[10px] uppercase tracking-[0.3em] font-black">
                        <div className="flex flex-col items-center gap-2">
                          <Users size={16} className="text-[#D4AF37]" />
                          <span>6 PEOPLE</span>
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
              <p className="mt-8 text-[11px] uppercase tracking-[0.4em] font-black text-black/40 italic">
                *Approximate prices per person, excluding international flights.
              </p>
            </div>

            {/* Logistics & Terms Section */}
            <div className="reveal-trigger pt-12">
               <h2 className="text-2xl md:text-4xl font-sans font-black text-[#1A1A1A] uppercase tracking-tight mb-12 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-[#D4AF37]" />
                LOGISTICS & TERMS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white border-2 border-black p-12 shadow-xl">
                  <h3 className="text-[#D4AF37] text-[11px] uppercase tracking-[0.5em] font-black mb-8 border-b border-black/5 pb-4 flex items-center gap-3">
                    <Check size={16} /> WHAT'S INCLUDED
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
                    <Minus size={16} /> WHAT'S EXCLUDED
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
                <h4 className="text-[11px] uppercase tracking-[0.6em] font-black text-[#8B5A2B] mb-8 border-b border-black/5 pb-4">EXPERIENCE ESSENTIALS</h4>
                <div className="space-y-6">
                  {[
                    "Private Gorilla Permits Guaranteed",
                    "Native Lead Curators & Rangers",
                    "Boutique Cloud-Level Lodging",
                    "Private Flight Charters",
                    "All Meals & Refreshments"
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
            
            <div className="p-8 bg-[#1A1A1A] text-white space-y-6">
               <div className="flex items-center gap-3 text-[#D4AF37]">
                 <Info size={18} />
                 <p className="text-[9px] uppercase tracking-widest font-black">CURATOR'S NOTE</p>
               </div>
               <p className="text-sm italic opacity-80 leading-relaxed font-serif">
                 "Watching a Silverback interact with the infants of the troop is the moment most our guests find truly life-changing. There is a silent language of care spoken in these mountains."
               </p>
            </div>
          </aside>
        </div>
      </div>

      <section className="py-24 md:py-48 bg-[#1A1A1A] text-center text-white border-t-2 border-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-16 italic text-[#D4AF37]">
            Return to the Silence of the Forest.
          </h2>
          <button 
            onClick={onBook}
            className="px-16 py-7 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[1em] font-black hover:bg-white transition-all duration-500 shadow-2xl"
          >
            START CO-AUTHORING
          </button>
        </div>
      </section>
    </div>
  );
};
