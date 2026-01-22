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
    <section className="bg-[#FAF8F3] border-y-2 border-[#1A1A1A]" aria-labelledby="distinction-title">
      <div className="py-24 md:py-32 bg-[#FAF8F3] border-b-2 border-[#1A1A1A]">
        <div className="container mx-auto px-8 md:px-20 lg:px-24">
          <div className="max-w-2xl">
            <p className="text-[#8B5A2B] uppercase tracking-[0.8em] text-[10px] mb-8 font-bold">THE DISTINCTION</p>
            <h2 id="distinction-title" className="text-5xl md:text-7xl font-serif font-bold text-[#1A1A1A] tracking-tighter leading-tight">
              A refined standard <br /><span className="italic font-light text-[#654321]">of private stewardship.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="py-24 md:py-48 bg-[#F5F5DC]">
        <div className="container mx-auto px-8 md:px-20 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {distinctions.map((item, idx) => (
              <div key={idx} className="group relative p-10 md:p-12 bg-[#F5F5DC] border-2 border-[#1A1A1A] hover:bg-[#FAF8F3] transition-all duration-700 shadow-sm hover:shadow-xl">
                <span className="text-[12px] font-bold text-[#654321] tracking-widest opacity-60 group-hover:opacity-100 transition-opacity block mb-8" aria-hidden="true">
                  DISTINCTION {item.number}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-8 group-hover:italic transition-all duration-700 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[#1A1A1A] font-normal leading-relaxed tracking-wide text-lg opacity-80">
                  {item.description}
                </p>
                <div className="mt-12 h-[4px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-[800ms] ease-in-out" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};