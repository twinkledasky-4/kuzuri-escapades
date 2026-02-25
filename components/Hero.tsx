
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

interface HeroProps {
  onStartPlanning: () => void;
  minimal?: boolean;
}

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.72.42-1.24 1.16-1.31 1.97-.02.18-.01.36.01.53.12 1.1.81 2.04 1.81 2.52.91.44 2 .48 2.94.19.85-.29 1.55-.95 1.88-1.77.1-.25.14-.5.15-.76-.01-3.97.01-7.93-.02-11.9z"/>
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ onStartPlanning, minimal = false }) => {
  const staticContent = {
    title: 'With Kuzuri Escapedes',
    description: 'Find Your Special Tour Today.',
    imageUrl: 'https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg'
  };

  const socialLinks = [
    { icon: <Facebook size={16} />, color: '#1877F2', label: 'Facebook', href: '#' },
    { icon: <Twitter size={16} />, color: '#1DA1F2', label: 'Twitter', href: '#' },
    { icon: <Instagram size={16} />, color: '#E4405F', label: 'Instagram', href: '#' },
    { icon: <Youtube size={16} />, color: '#FF0000', label: 'YouTube', href: '#' },
    { icon: <TikTokIcon size={16} />, color: '#000000', label: 'TikTok', href: '#' },
    { icon: <Linkedin size={16} />, color: '#0077B5', label: 'LinkedIn', href: '#' },
  ];

  return (
    <section className="hero-section h-screen relative overflow-hidden bg-[#1A1A1A]" aria-labelledby="hero-title">
      {/* Social Sidebar */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white transition-all duration-300 group shadow-md"
            aria-label={social.label}
            style={{ color: social.color }}
          >
            <span className="group-hover:scale-110 transition-transform">
              {social.icon}
            </span>
          </a>
        ))}
      </div>

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={staticContent.imageUrl}
          alt="Safari Jeep and elephants in the Ugandan wilderness"
          className="w-full h-full object-cover opacity-100 block"
          loading="eager"
        />
      </div>
      
      {/* Brand Overlay - Balanced for centered content */}
      <div className="hero-overlay absolute inset-0 bg-black/40 z-[1]" />
      
      {/* Content Layout - Centered */}
      <div className="relative z-10 h-full w-full max-w-[1700px] mx-auto flex items-center justify-center px-6">
        <div className="flex flex-col justify-center items-center text-center py-20 animate-fade-in-up max-w-[90vw] md:max-w-[60vw] lg:max-w-[40vw]">
          {/* Main Heading */}
          <h1 
            id="hero-title"
            className="text-[10px] md:text-[12px] lg:text-[14px] font-serif font-light text-white uppercase tracking-[0.3em] leading-none mb-3 whitespace-nowrap"
          >
            {staticContent.title}
          </h1>
          
          {/* Sub-Heading */}
          <h2 className="text-white/50 text-[8px] md:text-[9px] lg:text-[10px] font-serif italic tracking-[0.15em] mb-10 whitespace-nowrap">
            {staticContent.description}
          </h2>

          {/* CTA Button */}
          {!minimal && (
            <button 
              onClick={onStartPlanning}
              className="bg-[#D4AF37] text-[#000000] px-8 py-3 text-[8px] font-bold tracking-[0.4em] uppercase shadow-lg hover:bg-white hover:text-black transition-all duration-500 transform active:scale-95 border-none rounded-[2px]"
            >
              BOOK NOW
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
