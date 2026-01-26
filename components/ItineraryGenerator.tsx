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
    <section className="py-32 md:py-64 bg-[#F5F5DC] border-y-2 border-[#1A1A1A] px-4" aria-labelledby="atelier-title">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-screen-2xl mx-auto">
          
          <div className="mb-24 md:mb-40 reveal-trigger text-center">
            <p className="text-[#8B5A2B] uppercase tracking-[0.8em] text-[10px] mb-8 font-bold">CO-CREATION</p>
            <h2 id="atelier-title" className="text-5xl md:text-7xl lg:text-[9rem] font-serif font-bold tracking-tighter max-w-5xl mx-auto leading-[0.9] text-[#1A1A1A]">
              Invite our Curators in.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            
            <div className="lg:col-span-4 bg-white p-10 md:p-16 border-2 border-[#1A1A1A] reveal-trigger">
              <h3 className="text-2xl font-serif mb-12 italic border-b-2 border-[#1A1A1A] pb-8 text-[#1A1A1A]">The Starting Point</h3>
              
              <div className="space-y-12">
                <div className="group">
                  <label htmlFor="territory" className="block text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-5 font-bold">Desired Territory</label>
                  <select 
                    id="territory"
                    className="w-full py-4 px-4 bg-[#FAF8F3] border-2 border-[#1A1A1A] text-[#1A1A1A] text-base focus:border-[#8B5A2B] outline-none transition-all cursor-pointer font-bold appearance-none hover:bg-[#FAF8F3]/80"
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
                    <label htmlFor="duration" className="block text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-5 font-bold">Preferred Nights</label>
                    <input 
                      id="duration"
                      type="number" min="5" max="21"
                      className="w-full py-4 px-4 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] text-base focus:border-[#8B5A2B] outline-none transition-all font-bold"
                      value={prefs.duration}
                      onChange={e => setPrefs({...prefs, duration: parseInt(e.target.value)})}
                    />
                  </div>
                  <div>
                    <label htmlFor="vibe" className="block text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A] mb-5 font-bold">The Rhythm</label>
                    <select 
                      id="vibe"
                      className="w-full py-4 px-4 bg-[#FAF8F3] border-2 border-[#1A1A1A] text-[#1A1A1A] text-base focus:border-[#8B5A2B] outline-none transition-all cursor-pointer font-bold appearance-none hover:bg-[#FAF8F3]/80"
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
                    className="w-full py-6 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[10px] uppercase tracking-[0.6em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 shadow-xl transition-all duration-500 disabled:bg-stone-300 transform"
                    aria-live="polite"
                  >
                    {loading ? 'Curating your vision...' : 'Share your vision'}
                  </button>
                  <p className="text-[9px] text-stone-500 font-bold uppercase mt-10 text-center tracking-[0.4em]">
                    Expertly guided by our Native Curators
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 reveal-trigger min-h-[600px]" aria-live="polite">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full bg-white border-2 border-[#1A1A1A] p-20 text-center shadow-sm">
                   <div className="relative w-20 h-20 mb-12">
                     <div className="absolute inset-0 border-4 border-stone-100 rounded-full" />
                     <div className="absolute inset-0 border-t-4 border-[#D4AF37] rounded-full animate-spin" />
                   </div>
                   <h3 className="text-3xl font-serif text-[#1A1A1A] mb-6 italic transition-all duration-700 animate-pulse">
                     {loadingMessages[loadingStep]}
                   </h3>
                   <span className="text-[10px] uppercase tracking-[0.6em] text-stone-600 font-bold">Consulting our native network for the perfect path.</span>
                </div>
              ) : itinerary ? (
                <article className="bg-white p-12 md:p-24 shadow-2xl animate-fade-in border-2 border-[#1A1A1A] relative">
                  <div className="mb-24">
                    <h3 className="text-5xl md:text-6xl font-serif font-bold mb-10 text-[#1A1A1A] leading-tight tracking-tight">{itinerary.title}</h3>
                    <p className="text-stone-700 font-light italic leading-relaxed text-xl max-w-2xl tracking-wide">{itinerary.overview}</p>
                    <div className="w-24 h-[4px] bg-[#D4AF37] mt-16" aria-hidden="true" />
                  </div>
                  
                  <div className="space-y-32">
                    {itinerary.days.map((day: any, idx: number) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start group">
                        <div className="md:col-span-2">
                           <span className="text-[10px] tracking-[0.6em] text-[#8B5A2B] font-bold uppercase block mt-1 group-hover:text-[#D4AF37] transition-colors">Day {day.day}</span>
                        </div>
                        <div className="md:col-span-10">
                          <h4 className="text-3xl font-serif font-bold mb-8 text-[#1A1A1A] group-hover:italic transition-all duration-500">{day.location}</h4>
                          <div className="space-y-6 mb-12 border-l-2 border-[#8B5A2B] pl-10">
                            {day.activities.map((act: string, aIdx: number) => (
                              <p key={aIdx} className="text-lg text-[#1A1A1A] font-normal leading-relaxed tracking-wide opacity-90">{act}</p>
                            ))}
                          </div>
                          <div className="bg-[#FAF8F3] p-8 inline-block border-2 border-[#1A1A1A]">
                            <span className="block text-[9px] uppercase tracking-[0.5em] text-[#8B5A2B] mb-3 font-bold italic">Suggested Sanctuary</span>
                            <span className="text-base text-[#1A1A1A] font-bold tracking-wide">{day.lodging}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-32 pt-16 border-t-2 border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-10">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold">Identifier: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                    <button className="px-10 py-5 border-2 border-[#1A1A1A] bg-[#8B5A2B] text-[#F5F5DC] text-[10px] uppercase tracking-[0.6em] font-extrabold hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:scale-105 transition-all duration-500">
                      Finalize our narrative
                    </button>
                  </div>
                </article>
              ) : (
                <div className="h-full min-h-[600px] flex flex-col items-center justify-center bg-white border-2 border-[#1A1A1A] p-16 text-center shadow-inner">
                  <h3 className="text-4xl font-serif text-stone-300 italic mb-8">Where shall we begin?</h3>
                  <p className="text-stone-400 text-[10px] uppercase tracking-[0.6em] text-center font-bold max-w-xs leading-loose">Complete the brief and our curators will design a journey worth the wait.</p>
                  <div className="mt-12 w-12 h-[2px] bg-[#1A1A1A]" />
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