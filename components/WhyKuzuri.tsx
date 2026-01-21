
import React from 'react';

export const WhyKuzuri: React.FC = () => {
  const distinctions = [
    {
      title: "Co-Created Narratives",
      description: "We don’t offer packages; we co-author journeys. Every detail is calibrated to your temperament, ensuring a rhythm that feels entirely natural.",
      number: "01"
    },
    {
      title: "Native Stewardship",
      description: "Our guides are more than experts—they are guardians of the land. They offer humble, knowledgeable access to Uganda's most intimate secrets.",
      number: "02"
    },
    {
      title: "Unseen Logistics",
      description: "True luxury is found in the things you don't have to notice. From private air charters to quiet arrivals, your focus remains on the horizon.",
      number: "03"
    }
  ];

  return (
    <section className="py-32 md:py-64 bg-white border-y border-stone-50" aria-labelledby="distinction-title">
      <div className="container mx-auto px-8 md:px-20 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
            <div className="max-w-2xl">
              <p className="text-[#d4af37] uppercase tracking-[0.8em] text-[10px] mb-8 font-bold">THE DISTINCTION</p>
              <h2 id="distinction-title" className="text-5xl md:text-7xl font-serif text-[#002d04] tracking-tighter leading-tight">
                A refined standard <br /><span className="italic font-light text-stone-300">of private stewardship.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 lg:gap-32">
            {distinctions.map((item, idx) => (
              <div key={idx} className="group relative pt-12 md:pt-16 border-t border-stone-100 hover:border-[#d4af37] transition-colors duration-700">
                <span className="absolute top-0 left-0 text-[10px] font-bold text-[#d4af37] mt-6 tracking-widest opacity-40 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  {item.number}
                </span>
                <h3 className="text-2xl font-serif text-[#002d04] mb-6 md:mb-8 group-hover:italic transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-stone-400 font-light leading-relaxed tracking-wide text-lg">
                  {item.description}
                </p>
                <div className="mt-12 h-[1px] w-0 bg-[#d4af37] group-hover:w-full transition-all duration-[800ms] ease-in-out opacity-20" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
