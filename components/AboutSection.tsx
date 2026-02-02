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
          
          {/* Narrative Column: Perfectly Centered Editorial Header */}
          <div className="reveal-trigger w-full text-center pt-0 mb-12">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              <p className="text-[#D4AF37] uppercase tracking-[1.2em] text-[10px] font-bold mb-6 leading-none">
                {content.legacyLabel}
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#D4AF37] leading-[1.1] tracking-tight mb-8 text-center max-w-4xl">
                {content.headingMain} <br />
                <span className="italic font-light block mt-3 text-white opacity-90">{content.headingSub}</span>
              </h2>
              
              <p className="text-[#FFFFFF] text-base md:text-lg font-normal leading-[1.8] tracking-wide opacity-95 font-sans max-w-3xl mx-auto mb-12">
                {content.signatureStory}
              </p>

              <div className="w-24 h-[1px] bg-[#D4AF37] opacity-60 mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full mt-12">
            {/* Visual Column: Container Width set to 100% with cinematic 3:2 aspect ratio */}
            <div className="reveal-trigger relative group w-full">
              <div className="relative w-full aspect-[3/2] min-h-[450px] overflow-hidden rounded-[15px] border-2 border-[#D4AF37]/30 shadow-3xl bg-[#1A1412]">
                <div className="signature-overlay">NATIVE STEWARDSHIP</div>
                <img 
                  src="https://i.postimg.cc/y8yW9yQ5/a66809a6-28e3-4e2f-9391-0f6cc547e9cb.jpg" 
                  alt="Authentic Ugandan discovery - Native perspective" 
                  className="w-full h-full min-h-[450px] object-cover object-top transition-transform duration-[10s] group-hover:scale-105 opacity-90 rounded-[15px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-8 hidden xl:block shadow-2xl rounded-[15px]">
                <p className="text-[#1A1212] text-[9px] uppercase tracking-[0.4em] font-black mb-1">ESTABLISHED</p>
                <p className="text-[#1A1212] font-serif text-2xl font-bold">2018</p>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="reveal-trigger space-y-12 text-left">
              <div className="space-y-8">
                <p className="text-[#FFFFFF] text-xl font-light leading-relaxed tracking-wide opacity-100 font-sans italic border-l-2 border-[#D4AF37] pl-8 mb-10">
                  "{content.quote}"
                </p>

                <p className="text-[#FFFFFF] text-base font-normal leading-relaxed tracking-wide opacity-90 font-sans">
                  {content.para1}
                </p>
                
                <p className="text-[#FFFFFF] text-base font-normal leading-relaxed tracking-wide opacity-90 font-sans">
                  {content.para2}
                </p>
              </div>

              <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/10">
                {content.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[#D4AF37] font-serif text-3xl font-bold mb-2">{stat.value}</span>
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