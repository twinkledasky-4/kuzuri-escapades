
import React from 'react';

interface AboutSectionProps {
  content: {
    legacyLabel: string;
    headingMain: string;
    headingSub: string;
    signatureStory: string;
    quote: string;
    para1: string;
    para2: string;
    stats: Array<{ value: string; label: string }>;
  };
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <section id="about-kuzuri" className="pt-0 pb-12 md:pb-16 bg-[#1A1412] px-6 scroll-mt-[120px] border-b border-white/5 overflow-hidden m-0 block">
      <div className="container mx-auto max-w-[1700px] p-0">
        <div className="flex flex-col items-center">
          
          {/* Narrative Column: Centered Editorial Header - Spacing reduced by 50% */}
          <div className="reveal-trigger w-full text-center pt-0 mb-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-[#D4AF37] uppercase tracking-[1em] text-[10px] font-bold mb-2">{content.legacyLabel}</p>
              {/* Heading scale reduced for sophistication: 3xl md:5xl lg:6xl */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#D4AF37] leading-[1.1] tracking-tighter mb-6">
                {content.headingMain} <br />
                <span className="italic font-light block mt-2 text-white opacity-90">{content.headingSub}</span>
              </h2>
              
              {/* Signature Story Text - Centered and Styled as Hero Paragraph */}
              <p className="text-[#FFFFFF] text-base md:text-lg font-normal leading-[1.8] tracking-wide opacity-95 font-sans max-w-3xl mx-auto mb-6">
                {content.signatureStory}
              </p>

              <div className="w-24 h-[1px] bg-[#D4AF37] opacity-60 mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
            {/* Visual Column - Placeholder removed for replacement */}
            <div className="reveal-trigger relative group">
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[#D4AF37]/30 shadow-3xl bg-[#1A1412]">
                {/* Image deleted to prepare for replacement */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-transparent to-transparent opacity-70" />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] p-10 hidden xl:block shadow-2xl">
                <p className="text-[#1A1212] text-[10px] uppercase tracking-[0.5em] font-black mb-1">ESTABLISHED</p>
                <p className="text-[#1A1212] font-serif text-3xl font-bold">2018</p>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="reveal-trigger space-y-10 text-left">
              <div className="space-y-6">
                <p className="text-[#FFFFFF] text-lg font-light leading-relaxed tracking-wide opacity-100 font-sans italic border-l-2 border-[#D4AF37] pl-8 mb-8">
                  "{content.quote}"
                </p>

                <p className="text-[#FFFFFF] text-base font-normal leading-relaxed tracking-wide opacity-90 font-sans">
                  {content.para1}
                </p>
                
                <p className="text-[#FFFFFF] text-base font-normal leading-relaxed tracking-wide opacity-90 font-sans">
                  {content.para2}
                </p>
              </div>

              {/* High-Impact Stat Grid */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10">
                {content.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[#D4AF37] font-serif text-4xl font-bold mb-1">{stat.value}</span>
                    <span className="text-[#FFFFFF] text-[10px] uppercase tracking-[0.4em] font-black opacity-100">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
