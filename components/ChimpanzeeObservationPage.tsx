import React, { useEffect, useState } from 'react';
import { Clock, Check, Calendar, Info, Users, Euro, Minus, Trees, Zap, Binoculars, Mountain, Camera, Waves, Brain, Sparkles, ShieldAlert, Backpack, Heart, Anchor } from 'lucide-react';
import { intelligenceService } from '../services/analyticsService.ts';

interface ChimpanzeeObservationPageProps {
  onBack: () => void;
  onBook: (context?: string) => void;
}

export const ChimpanzeeObservationPage: React.FC<ChimpanzeeObservationPageProps> = ({ onBack, onBook }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Observing Chimpanzees in Uganda | Kuzuri Escapades";
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNgambaTrack = () => {
    intelligenceService.trackInteraction('ngamba-island');
    onBook('Ngamba Island Sanctuary');
  };

  const regions = [
    {
      id: 'kibale',
      title: "KIBALE FOREST NATIONAL PARK",
      subtitle: "THE PRIMATE CAPITAL",
      detail: "Known as the 'Primate Capital of the World,' Kibale is home to the highest density of chimpanzees in Africa. It offers the most successful sightings and the famous Chimpanzee Habituation Experience (CHEX), where you can witness the intricate daily lives of our cousins in a world-class conservation setting.",
      image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=85&w=1200",
      overlay: "PRIMATE CAPITAL",
      icon: <Trees size={24} />
    },
    {
      id: 'kyambura',
      title: "KYAMBURA GORGE",
      subtitle: "THE UNDERGROUND FOREST",
      detail: "Experience the 'Underground Forest' in Queen Elizabeth National Park. This deep, lush canyon provides a backdrop for tracking a community of chimpanzees isolated within the savanna. The vertical landscape and atmospheric mist create a unique tracking perspective.",
      image: "https://i.postimg.cc/qvcqHx8d/c6b8b1e4_65a4_4e49_92bd_f4ed040c7b13.jpg",
      overlay: "UNDERGROUND FOREST",
      icon: <Mountain size={24} />
    },
    {
      id: 'budongo',
      title: "BUDONGO FOREST",
      subtitle: "MAHOGANY SANCTUARY",
      detail: "Located within the Murchison Falls Conservation Area, this forest is famous for its mahogany trees and is one of the largest habitats for chimpanzees in Uganda. It provides a peaceful, less-traversed atmosphere for observing chimpanzees.",
      image: "https://i.postimg.cc/VkY4Hkrd/Tourism_in_Uganda.jpg",
      overlay: "MAHOGANY SANCTUARY",
      icon: <Binoculars size={24} />
    }
  ];

  const pricingData = [
    {
      season: "Low Season",
      period: "March–May, Nov 1–Dec 19",
      prices: { p2: "1,150.00", p4: "1,020.00", p6: "940.00" }
    },
    {
      season: "Mid-Season",
      period: "Rest of the year",
      prices: { p2: "1,320.00", p4: "1,180.00", p6: "1,050.00" }
    },
    {
      season: "High Season",
      period: "Jan, July–Sept, Dec 20–31",
      prices: { p2: "1,450.00", p4: "1,290.00", p6: "1,180.00" }
    }
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
      <section className="relative h-screen overflow-hidden flex items-end bg-[#1A1A1A]">
        <div className="signature-overlay">KIBALE PRIMATES</div>
        <img
          src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=85&w=1600"
          alt="Close-up of a chimpanzee in its natural forest habitat"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] ease-out opacity-100 ${isRevealed ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

        <div className={`relative z-20 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-24 pb-16 md:pb-24 transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-6">PRIMATE SYMPHONY</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif font-bold text-white uppercase tracking-tight leading-[0.85] max-w-6xl mb-12">
            OBSERVING <br/><span className="italic font-light text-[#D4AF37]">CHIMPANZEES IN UGANDA.</span>
          </h1>
          <p className="text-white/90 text-xl md:text-3xl font-serif italic mb-12 max-w-4xl border-l-2 border-[#D4AF37] pl-8 leading-relaxed">
            "With over 5,000 individuals, Uganda is the best place in the world to observe our closest cousins in their natural habitat."
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

      {/* Intro Narrative */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl reveal-trigger">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] leading-tight mb-12 uppercase tracking-tighter">
              THE RHYTHM OF THE RAINFOREST.
            </h2>
            <div className="space-y-8 text-xl text-[#1A1A1A]/80 font-serif leading-relaxed italic">
              <p>
                Observe how they groom each other, play, and communicate. You will discover fascinating traits that remind us of ourselves—after all, we share about 98% of our DNA with them.
              </p>
            </div>
            <div className="w-20 h-[2px] bg-[#D4AF37] mt-16" />
          </div>
        </div>
      </section>

      {/* Regional Discovery Modules */}
      <section className="bg-white overflow-hidden">
        {regions.map((region, idx) => (
          <div key={region.id} className="w-full">
            <div className={`grid grid-cols-1 lg:grid-cols-2 items-stretch`}>
              {/* Image Side */}
              <div className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#1A1A1A] ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="signature-overlay">{region.overlay}</div>
                <img 
                  src={region.image} 
                  alt={region.title} 
                  className="w-full h-full object-cover object-center opacity-100 transition-transform duration-[10s] hover:scale-105"
                />
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
                  onClick={() => onBook(region.title)}
                  className="inline-flex items-center gap-6 text-[10px] font-sans font-black uppercase tracking-[0.6em] text-[#1A1A1A] border-b-2 border-[#D4AF37] pb-2 hover:text-[#8B5A2B] transition-colors w-fit"
                >
                  INQUIRE ABOUT {region.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Special Mention: Ngamba Island Sanctuary Spotlight */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="signature-overlay">NGAMBA SANCTUARY</div>
          <img 
            src="https://i.postimg.cc/qvMp6vwr/beautiful-nice-chimpanzee-nature-looking-habitatpan-troglodytes-wild-animal-bars.jpg" 
            alt="Intimate Close-up of a Chimpanzee - Ngamba Sanctuary Spotlight"
            className="w-full h-full object-cover object-center opacity-100 transition-transform duration-[15s] hover:scale-105"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.85)_100%)] z-[2]" />
          <div className="absolute inset-0 bg-black/40 z-[1]" />
        </div>

        <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-3xl reveal-trigger">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Heart size={20} />
              </div>
              <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black">SANCTUARY SPOTLIGHT</p>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight uppercase tracking-tighter mb-12">
              NGAMBA <br/><span className="italic font-light text-[#D4AF37]">ISLAND.</span>
            </h2>
            
            <div className="space-y-8 text-xl font-serif leading-relaxed text-white italic mb-12">
              <p className="drop-shadow-sm">
                A sanctuary for orphaned and rescued chimpanzees located on Lake Victoria. Ngamba Island offers a rare, intimate look at the conservation efforts dedicated to protecting these intelligent primates.
              </p>
              <p className="drop-shadow-sm">
                Witness daily feeding sessions and learn about the intricate rehabilitation processes from the stewards who have dedicated their lives to primate welfare.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 border-y border-white/20">
              <div className="flex items-start gap-4">
                 <Anchor size={20} className="text-[#D4AF37] mt-1" />
                 <div>
                    <p className="text-white font-bold uppercase tracking-widest text-[11px] mb-2">ACCESS</p>
                    <p className="text-white/80 text-sm leading-relaxed">Private boat charter from Entebbe across Lake Victoria.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <Info size={20} className="text-[#D4AF37] mt-1" />
                 <div>
                    <p className="text-white font-bold uppercase tracking-widest text-[11px] mb-2">MISSION</p>
                    <p className="text-white/80 text-sm leading-relaxed">Sustainable tourism directly funding rescue and education.</p>
                 </div>
              </div>
            </div>

            <div className="mt-12">
               <button 
                 onClick={handleNgambaTrack}
                 className="px-12 py-6 bg-[#D4AF37] text-[#1A1A1A] text-[10px] uppercase tracking-[0.8em] font-black hover:bg-white transition-all duration-700 shadow-2xl"
               >
                 START NGAMBA CONSULTATION
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Depth Section - Trekking vs Habituation */}
      <section className="bg-white py-24 md:py-40">
        <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24">
          <div className="text-center mb-24 reveal-trigger">
            <p className="text-[#8B5A2B] uppercase tracking-[1em] text-[10px] font-black mb-6">THE ENCOUNTER</p>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#1A1A1A] uppercase tracking-tighter leading-none mb-12">
              DEPTHS OF <br/><span className="italic font-light text-[#D4AF37]">OBSERVATION.</span>
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-stretch">
            {/* Standard Trekking */}
            <div className="bg-[#FAF8F3] border-2 border-[#1A1A1A] p-10 md:p-16 flex flex-col reveal-trigger">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 bg-[#1A1A1A] text-[#D4AF37] flex items-center justify-center">
                  <Clock size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold italic">Standard Trekking</h3>
              </div>
              <p className="text-lg text-[#1A1A1A]/80 font-serif italic mb-12 leading-relaxed flex-grow">
                A standard chimpanzee trek usually lasts 2 to 3 hours, including one full hour spent in their presence once they are located. Observe their social dynamics, from playful juveniles to the watchful alpha, in a focused and high-impact window of discovery.
              </p>
              <ul className="space-y-4 pt-10 border-t border-black/5">
                {["1 Hour Observation", "2-3 Hours Total Duration", "Expert Guided Tracking", "Perfect for First-Timers"].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-[#1A1A1A]">
                    <Check size={14} className="text-[#D4AF37]" strokeWidth={3} /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CHEX Experience */}
            <div className="bg-[#1A1A1A] text-white p-10 md:p-16 flex flex-col reveal-trigger">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 bg-[#D4AF37] text-[#1A1A1A] flex items-center justify-center">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold italic text-[#D4AF37]">Habituation (CHEX)</h3>
              </div>
              <p className="text-lg text-white/80 font-serif italic mb-12 leading-relaxed flex-grow">
                The all-day immersion. Join researchers from dawn until dusk as they work to habituate a community. Witness the full cycle of life—from waking up and foraging to social strife and the building of night nests.
              </p>
              <ul className="space-y-4 pt-10 border-t border-white/10">
                {["Full Day Experience", "Dawn to Dusk Tracking", "Deep Biological Insight", "The Ultimate Immersion"].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-[#D4AF37]">
                    <Check size={14} className="text-white" strokeWidth={3} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section - Integrated as editorial content */}
      <section className="py-24 bg-[#3B1E14] text-white overflow-hidden">
        <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 reveal-trigger">
              <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-8">NATIVE INTEL</p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight uppercase tracking-tighter mb-12">
                PRIME <span className="italic font-light text-[#D4AF37]">INTELLIGENCE.</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Brain size={24} className="text-[#D4AF37] group-hover:text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif italic mb-2">98% Genetic Ancestry</h4>
                    <p className="text-white/60 font-light leading-relaxed">Our closest living relatives. Sharing almost our entire DNA blueprint, their emotional capacity and social gestures are eerily familiar.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Sparkles size={24} className="text-[#D4AF37] group-hover:text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif italic mb-2">Architects of Tools</h4>
                    <p className="text-white/60 font-light leading-relaxed">Observe as they craft tools from their environment—shaping sticks to fish for termites or using crushed leaves as sponges to collect water.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                    <Users size={24} className="text-[#D4AF37] group-hover:text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif italic mb-2">Complex Societies</h4>
                    <p className="text-white/60 font-light leading-relaxed">Governed by intricate hierarchies and political alliances. Their communities are a tapestry of grooming rituals and sophisticated communication.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 reveal-trigger flex flex-col items-center">
               <div className="w-full aspect-[4/5] border-r-2 border-[#D4AF37] overflow-hidden rounded-[10px] shadow-2xl relative group bg-[#1A1A1A]">
                 <div className="signature-overlay">REFLECTIVE INTELLIGENCE</div>
                 <img 
                    src="https://i.postimg.cc/G3F1vx46/tourist-places-in-Uganda.jpg" 
                    alt="Chimpanzee in its natural habitat - High-Resolution Close-Up" 
                    className="w-full h-full object-cover object-center transition-all duration-[800ms] group-hover:scale-105" 
                 />
               </div>
               
               <div className="w-full bg-white p-10 md:p-12 shadow-3xl text-[#1A1A1A] border border-black/5 rounded-[10px] mt-12 relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.5em] font-black mb-4 text-[#8B5A2B]">MOMENT OF CONNECTION</p>
                  <p className="text-2xl font-serif italic leading-tight text-[#1A1A1A]">
                    "We place the finest, highly intelligent primates in the world at the center of your private journey."
                  </p>
                  <div className="w-12 h-[2px] bg-[#D4AF37] mt-8" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expedition Intel Section */}
      <section className="relative py-24 md:py-40 bg-[#1A1A1A] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://i.postimg.cc/MKKwZ78b/group_zebras_africa.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[20px] z-[1]" />
        </div>

        <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            <div className="lg:col-span-6 reveal-trigger flex flex-col justify-center">
              <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-black mb-8">EXPEDITION INTEL</p>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-none uppercase tracking-tighter mb-12">
                THE BEST TIME <br/><span className="italic font-light text-[#D4AF37]">IS ALL THE TIME.</span>
              </h2>
              <div className="space-y-8 text-xl font-serif leading-relaxed text-white max-w-2xl italic">
                <p>
                  While primate treks are magical year-round, the dry months from June to February offer the most optimal tracking conditions. During these windows, the forest floor is less damp, and the chimpanzees are often found lower in the canopy for easier observation.
                </p>
                <p className="border-l-4 border-[#D4AF37] pl-8 text-white">
                  <span className="font-bold text-[#D4AF37] not-italic block mb-2">CURATOR'S TIP:</span>
                  "To capture the rapid intelligence in a chimpanzee's gaze or their rapid movements through the branches, we highly recommend bringing a <strong>powerful zoom lens</strong>. The jungle light is dappled, so speed and distance are your best allies."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 border-2 border-[#D4AF37] shadow-3xl text-[#1A1A1A] space-y-8 flex flex-col justify-between reveal-trigger rounded-[10px] transform hover:scale-[1.02] transition-transform opacity-100 relative z-[20]">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[#D4AF37]">
                    <Backpack size={32} strokeWidth={1.5} />
                    <p className="text-[10px] uppercase tracking-[0.4em] font-black">PACK FOR THE WILD</p>
                  </div>
                  <h3 className="text-2xl font-serif font-bold italic leading-tight">Essential Gear.</h3>
                  <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                    Wear long trousers, sturdy hiking boots, and bring a rain jacket. Don't forget your camera with a good zoom lens, as they can often be high up in the canopy!
                  </p>
                </div>
                <div className="pt-4 border-t border-black/5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#8B5A2B]">Fast lenses (f/2.8) recommended</span>
                </div>
              </div>

              <div className="bg-white p-10 border-2 border-[#D4AF37] shadow-3xl text-[#1A1A1A] space-y-8 flex flex-col justify-between reveal-trigger rounded-[10px] transform hover:scale-[1.02] transition-transform opacity-100 relative z-[20]">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-[#1A1A1A]">
                    <ShieldAlert size={32} strokeWidth={1.5} className="text-[#D4AF37]" />
                    <p className="text-[10px] uppercase tracking-[0.4em] font-black">TRACKER'S PROTOCOL</p>
                  </div>
                  <h3 className="text-2xl font-serif font-bold italic leading-tight">Safety & Age.</h3>
                  <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                    The minimum age for chimpanzee tracking in Uganda is <strong>12 years old</strong>. Our expert guides ensure a secure and respectful encounter for all guests.
                  </p>
                </div>
                <div className="pt-4 border-t border-black/5">
                   <div className="flex items-center gap-2">
                     <Clock size={12} className="text-[#D4AF37]" />
                     <span className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]">2-3 Hour Average Duration</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Pricing Section */}
      <div className="container mx-auto max-w-[1700px] px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#FAF8F3]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-8 space-y-24">
            <div className="reveal-trigger">
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1A1A1A] uppercase tracking-tight mb-12 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-[#D4AF37]" />
                PRIMATE INVESTMENT
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
                    {["Expert Primate Curators", "Private Transport (4x4)", "Chimpanzee Permits", "Boutique Lodging", "Full Board Meals", "Ranger Support", "Airport Transfers", "Drinking Water"].map((item, idx) => (
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
                    <div className="w-5 h-5 bg-red-50 flex items-center justify-center shrink-0 border border-red-200">
                       <Minus size={12} className="text-red-600" strokeWidth={3} />
                    </div>
                    WHAT'S EXCLUDED
                  </h3>
                  <ul className="space-y-5">
                    {["Visas", "Travel Insurance", "International Flights", "Gratuities"].map((item, idx) => (
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
                <h4 className="text-[11px] uppercase tracking-[0.6em] font-black text-[#8B5A2B] mb-8 border-b border-black/5 pb-4">PRIMATE ESSENTIALS</h4>
                <div className="space-y-6">
                  {[
                    "Private Primate Charters",
                    "Native Primatologist Guides",
                    "Exclusive CHEX Access",
                    "VIP Navigation Protocol",
                    "Rainforest Support Gear"
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
                  onClick={() => onBook('Signature Primate Journey')}
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
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/qvcqHx8d/c6b8b1e4_65a4_4e49_92bd_f4ed040c7b13.jpg" 
            alt="Majestic Primate Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-[2]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-8xl font-serif font-bold mb-16 italic text-[#D4AF37] tracking-tight [text-shadow:0_4px_40px_rgba(0,0,0,0.95)]">
            Return to the Heart of the Forest.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <button 
              onClick={onBack}
              className="w-full md:w-auto px-12 py-7 border-2 border-[#D4AF37] text-[#D4AF37] text-[11px] uppercase tracking-[1em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl"
            >
              BACK TO COLLECTION
            </button>
            <button 
              onClick={() => onBook('Chimpanzee Observation Trek')}
              className="w-full md:w-auto px-12 py-7 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[1em] font-black hover:bg-white transition-all duration-500 shadow-2xl"
            >
              BOOK A CHIMPANZEE TREK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};