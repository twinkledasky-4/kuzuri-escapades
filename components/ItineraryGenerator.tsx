
import React, { useState } from 'react';
import { generateItinerary } from '../services/geminiService.ts';
import { TravelPreferences } from '../types.ts';

export const ItineraryGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<any>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [prefs, setPrefs] = useState<TravelPreferences>({
    destination: 'The Pearl of Africa (Uganda Focus)',
    duration: 12,
    travelers: 2,
    vibe: 'safari'
  });

  const loadingMessages = [
    "Consulting native stewards...",
    "Mapping unseen forest trails...",
    "Calibrating your private rhythm...",
    "Finalizing the narrative..."
  ];

  const handleGenerate = async () => {
    setLoading(true);
    setLoadingStep(0);
    const stepInterval = setInterval(() => {
      setLoadingStep(prev => (prev + 1) % loadingMessages.length);
    }, 2000);

    try {
      const data = await generateItinerary(prefs);
      setItinerary(data);
    } catch (error) {
      console.error("Consultation failed:", error);
    } finally {
      clearInterval(stepInterval);
      setLoading(false);
    }
  };

  return (
    <section className="py-32 md:py-64 bg-[#fcfcfc]" aria-labelledby="atelier-title">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-screen-2xl mx-auto">
          
          <div className="mb-24 md:mb-40 reveal-trigger">
            <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[10px] mb-8 font-bold">CO-CREATION</p>
            <h2 id="atelier-title" className="text-5xl md:text-7xl lg:text-[9rem] font-serif tracking-tighter max-w-5xl leading-[0.9] text-[#002d04]">
              Invite our <br />
              <span className="italic font-light">Curators</span> in.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            
            {/* Accessible Form */}
            <div className="lg:col-span-4 bg-white p-10 md:p-16 shadow-[0_60px_120px_-20px_rgba(0,45,4,0.08)] border border-stone-50 reveal-trigger">
              <h3 className="text-2xl font-serif mb-12 italic border-b border-stone-100 pb-8 text-[#002d04]">The Starting Point</h3>
              
              <div className="space-y-12">
                <div className="group">
                  <label htmlFor="territory" className="block text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-5 font-bold">Desired Territory</label>
                  <select 
                    id="territory"
                    className="w-full py-4 bg-transparent border-b border-stone-100 text-[#002d04] text-base focus:border-[#d4af37] outline-none transition-all cursor-pointer font-light appearance-none"
                    value={prefs.destination}
                    onChange={e => setPrefs({...prefs, destination: e.target.value})}
                  >
                    <option>The Pearl of Africa (Uganda Focus)</option>
                    <option>Albertine Rift Highlands</option>
                    <option>Savannah Sovereignty</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <label htmlFor="duration" className="block text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-5 font-bold">Preferred Nights</label>
                    <input 
                      id="duration"
                      type="number" min="5" max="21"
                      className="w-full py-4 bg-transparent border-b border-stone-100 text-[#002d04] text-base focus:border-[#d4af37] outline-none transition-all font-light"
                      value={prefs.duration}
                      onChange={e => setPrefs({...prefs, duration: parseInt(e.target.value)})}
                    />
                  </div>
                  <div>
                    <label htmlFor="vibe" className="block text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-5 font-bold">The Rhythm</label>
                    <select 
                      id="vibe"
                      className="w-full py-4 bg-transparent border-b border-stone-100 text-[#002d04] text-base focus:border-[#d4af37] outline-none transition-all cursor-pointer font-light appearance-none"
                      value={prefs.vibe}
                      onChange={e => setPrefs({...prefs, vibe: e.target.value as any})}
                    >
                      <option value="safari">Deep Wilderness</option>
                      <option value="wellness">Silent Sanctuary</option>
                      <option value="culture">Native Roots</option>
                    </select>
                  </div>
                </div>

                <div className="pt-10">
                  <button 
                    onClick={handleGenerate}
                    disabled={loading}
                    className="w-full py-6 bg-[#002d04] text-white text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-[#d4af37] shadow-xl transition-all disabled:bg-stone-100 disabled:text-stone-300 transform active:scale-[0.98]"
                    aria-live="polite"
                  >
                    {loading ? 'Curating your vision...' : 'Share your vision'}
                  </button>
                  <p className="text-[9px] text-stone-300 italic mt-10 text-center tracking-[0.4em]">
                    Expertly guided by Lucky .K
                  </p>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-8 reveal-trigger min-h-[600px]" aria-live="polite">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full bg-white border border-stone-50 p-20 text-center shadow-sm">
                   <div className="relative w-20 h-20 mb-12">
                     <div className="absolute inset-0 border-2 border-stone-50 rounded-full" />
                     <div className="absolute inset-0 border-t-2 border-[#d4af37] rounded-full animate-spin" />
                   </div>
                   <h3 className="text-3xl font-serif text-[#002d04] mb-6 italic transition-all duration-700 animate-pulse">
                     {loadingMessages[loadingStep]}
                   </h3>
                   <span className="text-[10px] uppercase tracking-[0.6em] text-stone-300 font-bold">Consulting our native network for the perfect path.</span>
                </div>
              ) : itinerary ? (
                <article className="bg-white p-12 md:p-24 shadow-[0_60px_120px_-40px_rgba(0,45,4,0.05)] animate-fade-in border border-stone-50 relative">
                  <div className="mb-24">
                    <h3 className="text-5xl md:text-6xl font-serif mb-10 text-[#002d04] leading-tight tracking-tight">{itinerary.title}</h3>
                    <p className="text-stone-500 font-light italic leading-relaxed text-xl max-w-2xl tracking-wide">{itinerary.overview}</p>
                    <div className="w-24 h-[1px] bg-[#d4af37] mt-16" aria-hidden="true" />
                  </div>
                  
                  <div className="space-y-32">
                    {itinerary.days.map((day: any, idx: number) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start group">
                        <div className="md:col-span-2">
                           <span className="text-[10px] tracking-[0.6em] text-stone-200 font-bold uppercase block mt-1 group-hover:text-[#d4af37] transition-colors">Day {day.day}</span>
                        </div>
                        <div className="md:col-span-10">
                          <h4 className="text-3xl font-serif mb-8 text-[#002d04] group-hover:italic transition-all duration-500">{day.location}</h4>
                          <div className="space-y-6 mb-12 border-l border-stone-100 pl-10">
                            {day.activities.map((act: string, aIdx: number) => (
                              <p key={aIdx} className="text-lg text-stone-500 font-light leading-relaxed tracking-wide">{act}</p>
                            ))}
                          </div>
                          <div className="bg-[#fcfcfc] p-8 inline-block border border-stone-50 shadow-sm">
                            <span className="block text-[9px] uppercase tracking-[0.5em] text-stone-400 mb-3 font-bold italic">Suggested Sanctuary</span>
                            <span className="text-base text-[#002d04] font-medium tracking-wide">{day.lodging}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-32 pt-16 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-10">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-300 font-bold">Identifier: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                    <button className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#002d04] hover:text-[#d4af37] transition-all border-b border-stone-200 hover:border-[#d4af37] pb-2">
                      Finalize our narrative
                    </button>
                  </div>
                </article>
              ) : (
                <div className="h-full min-h-[600px] flex flex-col items-center justify-center bg-stone-50/10 border border-stone-100/50 p-16 text-center rounded-sm">
                  <h3 className="text-4xl font-serif text-stone-200 mb-8 italic">Where shall we begin?</h3>
                  <p className="text-stone-300 text-[10px] uppercase tracking-[0.6em] text-center font-bold max-w-xs leading-loose">Complete the brief above and we will design a journey worth the wait.</p>
                  <div className="mt-12 w-12 h-[1px] bg-stone-100" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};
