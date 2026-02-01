import React, { useState, useRef, useEffect } from 'react';
import { Globe, X, Search } from 'lucide-react';

interface Language {
  code: string;
  label: string;
  flagCode: string;
  googleCode: string;
}

/**
 * Exhaustive Global Library mapped to Flagpedia CDN (ISO-3166)
 * and Google Translate Engine codes.
 */
const languages: Language[] = [
  { code: 'AF', label: 'Afghanistan', flagCode: 'af', googleCode: 'ps' },
  { code: 'AL', label: 'Albania', flagCode: 'al', googleCode: 'sq' },
  { code: 'DZ', label: 'Algeria', flagCode: 'dz', googleCode: 'ar' },
  { code: 'AD', label: 'Andorra', flagCode: 'ad', googleCode: 'ca' },
  { code: 'AO', label: 'Angola', flagCode: 'ao', googleCode: 'pt' },
  { code: 'AR', label: 'Argentina', flagCode: 'ar', googleCode: 'es' },
  { code: 'AM', label: 'Armenia', flagCode: 'am', googleCode: 'hy' },
  { code: 'AU', label: 'Australia', flagCode: 'au', googleCode: 'en' },
  { code: 'AT', label: 'Austria', flagCode: 'at', googleCode: 'de' },
  { code: 'AZ', label: 'Azerbaijan', flagCode: 'az', googleCode: 'az' },
  { code: 'BD', label: 'Bangladesh', flagCode: 'bd', googleCode: 'bn' },
  { code: 'BY', label: 'Belarus', flagCode: 'by', googleCode: 'be' },
  { code: 'BE', label: 'Belgium', flagCode: 'be', googleCode: 'nl' },
  { code: 'BO', label: 'Bolivia', flagCode: 'bo', googleCode: 'es' },
  { code: 'BA', label: 'Bosnia', flagCode: 'ba', googleCode: 'bs' },
  { code: 'BR', label: 'Brazil', flagCode: 'br', googleCode: 'pt' },
  { code: 'BG', label: 'Bulgaria', flagCode: 'bg', googleCode: 'bg' },
  { code: 'KH', label: 'Cambodia', flagCode: 'kh', googleCode: 'km' },
  { code: 'CA', label: 'Canada', flagCode: 'ca', googleCode: 'en' },
  { code: 'CL', label: 'Chile', flagCode: 'cl', googleCode: 'es' },
  { code: 'CN', label: 'China', flagCode: 'cn', googleCode: 'zh-CN' },
  { code: 'CO', label: 'Colombia', flagCode: 'co', googleCode: 'es' },
  { code: 'HR', label: 'Croatia', flagCode: 'hr', googleCode: 'hr' },
  { code: 'CU', label: 'Cuba', flagCode: 'cu', googleCode: 'es' },
  { code: 'CZ', label: 'Czechia', flagCode: 'cz', googleCode: 'cs' },
  { code: 'DK', label: 'Denmark', flagCode: 'dk', googleCode: 'da' },
  { code: 'EG', label: 'Egypt', flagCode: 'eg', googleCode: 'ar' },
  { code: 'ET', label: 'Ethiopia', flagCode: 'et', googleCode: 'am' },
  { code: 'FI', label: 'Finland', flagCode: 'fi', googleCode: 'fi' },
  { code: 'FR', label: 'France', flagCode: 'fr', googleCode: 'fr' },
  { code: 'GE', label: 'Georgia', flagCode: 'ge', googleCode: 'ka' },
  { code: 'DE', label: 'Germany', flagCode: 'de', googleCode: 'de' },
  { code: 'GR', label: 'Greece', flagCode: 'gr', googleCode: 'el' },
  { code: 'HU', label: 'Hungary', flagCode: 'hu', googleCode: 'hu' },
  { code: 'IS', label: 'Iceland', flagCode: 'is', googleCode: 'is' },
  { code: 'IN', label: 'India', flagCode: 'in', googleCode: 'hi' },
  { code: 'ID', label: 'Indonesia', flagCode: 'id', googleCode: 'id' },
  { code: 'IR', label: 'Iran', flagCode: 'ir', googleCode: 'fa' },
  { code: 'IE', label: 'Ireland', flagCode: 'ie', googleCode: 'ga' },
  { code: 'IL', label: 'Israel', flagCode: 'il', googleCode: 'iw' },
  { code: 'IT', label: 'Italy', flagCode: 'it', googleCode: 'it' },
  { code: 'JP', label: 'Japan', flagCode: 'jp', googleCode: 'ja' },
  { code: 'KZ', label: 'Kazakhstan', flagCode: 'kz', googleCode: 'kk' },
  { code: 'KE', label: 'Kenya', flagCode: 'ke', googleCode: 'sw' },
  { code: 'KR', label: 'South Korea', flagCode: 'kr', googleCode: 'ko' },
  { code: 'LV', label: 'Latvia', flagCode: 'lv', googleCode: 'lv' },
  { code: 'LT', label: 'Lithuania', flagCode: 'lt', googleCode: 'lt' },
  { code: 'MY', label: 'Malaysia', flagCode: 'my', googleCode: 'ms' },
  { code: 'MX', label: 'Mexico', flagCode: 'mx', googleCode: 'es' },
  { code: 'MN', label: 'Mongolia', flagCode: 'mn', googleCode: 'mn' },
  { code: 'NP', label: 'Nepal', flagCode: 'np', googleCode: 'ne' },
  { code: 'NL', label: 'Netherlands', flagCode: 'nl', googleCode: 'nl' },
  { code: 'NZ', label: 'New Zealand', flagCode: 'nz', googleCode: 'mi' },
  { code: 'NG', label: 'Nigeria', flagCode: 'ng', googleCode: 'yo' },
  { code: 'NO', label: 'Norway', flagCode: 'no', googleCode: 'no' },
  { code: 'PK', label: 'Pakistan', flagCode: 'pk', googleCode: 'ur' },
  { code: 'PH', label: 'Philippines', flagCode: 'ph', googleCode: 'tl' },
  { code: 'PL', label: 'Poland', flagCode: 'pl', googleCode: 'pl' },
  { code: 'PT', label: 'Portugal', flagCode: 'pt', googleCode: 'pt' },
  { code: 'RO', label: 'Romania', flagCode: 'ro', googleCode: 'ro' },
  { code: 'RU', label: 'Russia', flagCode: 'ru', googleCode: 'ru' },
  { code: 'SA', label: 'Saudi Arabia', flagCode: 'sa', googleCode: 'ar' },
  { code: 'RS', label: 'Serbia', flagCode: 'rs', googleCode: 'sr' },
  { code: 'SK', label: 'Slovakia', flagCode: 'sk', googleCode: 'sk' },
  { code: 'SI', label: 'Slovenia', flagCode: 'si', googleCode: 'sl' },
  { code: 'ZA', label: 'South Africa', flagCode: 'za', googleCode: 'zu' },
  { code: 'ES', label: 'Spain', flagCode: 'es', googleCode: 'es' },
  { code: 'LK', label: 'Sri Lanka', flagCode: 'lk', googleCode: 'si' },
  { code: 'SE', label: 'Sweden', flagCode: 'se', googleCode: 'sv' },
  { code: 'CH', label: 'Switzerland', flagCode: 'ch', googleCode: 'de' },
  { code: 'TH', label: 'Thailand', flagCode: 'th', googleCode: 'th' },
  { code: 'TR', label: 'Turkey', flagCode: 'tr', googleCode: 'tr' },
  { code: 'UG', label: 'Uganda', flagCode: 'ug', googleCode: 'en' },
  { code: 'UA', label: 'Ukraine', flagCode: 'ua', googleCode: 'uk' },
  { code: 'AE', label: 'UAE', flagCode: 'ae', googleCode: 'ar' },
  { code: 'GB', label: 'United Kingdom', flagCode: 'gb', googleCode: 'en' },
  { code: 'US', label: 'USA', flagCode: 'us', googleCode: 'en' },
  { code: 'UZ', label: 'Uzbekistan', flagCode: 'uz', googleCode: 'uz' },
  { code: 'VN', label: 'Vietnam', flagCode: 'vn', googleCode: 'vi' },
  { code: 'ZW', label: 'Zimbabwe', flagCode: 'zw', googleCode: 'sn' }
];

interface LanguageFABProps {
  currentLang: string;
  onLangChange: (langCode: string) => void;
}

export const LanguageFAB: React.FC<LanguageFABProps> = ({ currentLang, onLangChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        if (!target.closest('.lang-toggle-btn')) {
          setIsOpen(false);
        }
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const filteredLanguages = languages.filter(lang => 
    lang.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
    lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (lang: Language) => {
    onLangChange(lang.googleCode.toUpperCase());
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-[110px] left-8 z-[10002]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lang-toggle-btn py-[8px] px-[20px] rounded-full border-2 border-[#1A1A1A] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center justify-center gap-3 transition-all duration-500 hover:-translate-y-1 active:scale-95 group ${
            isOpen ? 'bg-white text-[#1A1A1A]' : 'bg-[#D4AF37] text-[#1A1A1A] hover:bg-white font-black'
          }`}
          aria-label="Toggle Global Voyager Language Selector"
        >
          <Globe size={14} strokeWidth={2.5} className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : 'group-hover:rotate-12'}`} />
          <span className="text-[12px] uppercase tracking-[0.2em] font-bold whitespace-nowrap leading-none">
            {isOpen ? 'CLOSE VOYAGER' : 'SELECT LANGUAGE »'}
          </span>
          
          {!isOpen && (
            <div className="absolute inset-0 rounded-full border-2 border-[#1A1A1A]/10 animate-ping pointer-events-none" />
          )}
        </button>
      </div>

      {/* Full-width Horizontal Drawer */}
      <div 
        ref={barRef}
        className={`fixed bottom-0 left-0 w-full bg-[#1A1A1A] border-t-2 border-[#D4AF37] z-[10001] shadow-[0_-20px_80px_rgba(0,0,0,0.6)] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[2200px] mx-auto flex flex-col">
          {/* Header Section */}
          <div className="px-8 md:px-12 py-6 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className="hidden sm:block">
                <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[9px] font-black mb-1 text-left">Global Voyager</p>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight uppercase">
                  Select <span className="italic font-light">Dialect</span>
                </h2>
              </div>
              <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
              <div className="relative group w-full sm:w-[400px]">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#D4AF37] transition-colors" />
                <input 
                  type="text"
                  placeholder="Search territories..."
                  className="w-full py-3 pl-10 pr-4 bg-white/5 border border-white/10 focus:border-[#D4AF37] outline-none text-[10px] font-bold uppercase tracking-widest text-white transition-all placeholder:text-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-white/40 hover:text-[#D4AF37] transition-all group py-2"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Hide Panel</span>
              <X size={20} strokeWidth={2} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          {/* Grid of Regional Flag Icons */}
          <div className="max-h-[60vh] md:max-h-[480px] overflow-y-auto px-8 md:px-12 py-12 scrollbar-premium">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 md:gap-8">
              {filteredLanguages.map((lang, idx) => {
                const isActive = currentLang === lang.googleCode.toUpperCase();
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang)}
                    className={`flex flex-col items-center justify-center p-5 border transition-all duration-500 group/langbox h-full ${
                      isActive 
                        ? 'bg-[#D4AF37] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)]' 
                        : 'bg-white/5 border-white/5 hover:border-[#D4AF37] hover:bg-white/10 shadow-sm'
                    }`}
                    style={{ animationDelay: `${idx * 2}ms` }}
                  >
                    {/* Circular Frame for Flags: Ensuring visibility against Gold background */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden mb-4 transition-transform duration-500 group-hover/langbox:scale-110 shadow-lg border aspect-square ${
                      isActive ? 'bg-white border-black/10' : 'bg-black/40 border-white/10'
                    }`}>
                      <img 
                        src={`https://flagcdn.com/w160/${lang.flagCode.toLowerCase()}.png`}
                        alt={`${lang.label} flag`}
                        className="block w-full h-full object-cover select-none brightness-[1.1] contrast-[1.1]"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    
                    <span className={`text-[11px] font-black uppercase tracking-[0.15em] text-center line-clamp-2 leading-tight ${
                      isActive ? 'text-[#1A1A1A]' : 'text-white/90'
                    }`}>
                      {lang.label}
                    </span>
                  </button>
                );
              })}
            </div>
            
            {filteredLanguages.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-white/20 text-xs font-bold uppercase tracking-[0.4em]">No matching territories found.</p>
              </div>
            )}
          </div>
          
          <div className="h-2 w-full bg-gradient-to-r from-[#D4AF37] via-[#8B5A2B] to-[#D4AF37] opacity-90" />
        </div>
      </div>

      <style>{`
        .scrollbar-premium::-webkit-scrollbar { width: 5px; }
        .scrollbar-premium::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .scrollbar-premium::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 999px; }
      `}</style>
    </>
  );
};
