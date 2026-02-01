import React, { useState, useRef, useEffect } from 'react';
import { Globe, X, Search } from 'lucide-react';

interface Language {
  code: string;
  label: string;
  flag: string;
  googleCode: string;
}

/**
 * Exhaustive Global Library (Afghanistan to Zimbabwe)
 * Mapped to Google Translate engine codes.
 */
const languages: Language[] = [
  { code: 'AF', label: 'Afghanistan (Pashto)', flag: '🇦🇫', googleCode: 'ps' },
  { code: 'SQ', label: 'Albania (Albanian)', flag: '🇦🇱', googleCode: 'sq' },
  { code: 'DZ', label: 'Algeria (Arabic)', flag: '🇩🇿', googleCode: 'ar' },
  { code: 'AD', label: 'Andorra (Catalan)', flag: '🇦🇩', googleCode: 'ca' },
  { code: 'AO', label: 'Angola (Portuguese)', flag: '🇦🇴', googleCode: 'pt' },
  { code: 'AR', label: 'Argentina (Spanish)', flag: '🇦🇷', googleCode: 'es' },
  { code: 'AM', label: 'Armenia (Armenian)', flag: '🇦🇲', googleCode: 'hy' },
  { code: 'AU', label: 'Australia (English)', flag: '🇦🇺', googleCode: 'en' },
  { code: 'AT', label: 'Austria (German)', flag: '🇦🇹', googleCode: 'de' },
  { code: 'AZ', label: 'Azerbaijan (Azerbaijani)', flag: '🇦🇿', googleCode: 'az' },
  { code: 'BD', label: 'Bangladesh (Bengali)', flag: '🇧🇩', googleCode: 'bn' },
  { code: 'BY', label: 'Belarus (Belarusian)', flag: '🇧🇾', googleCode: 'be' },
  { code: 'BE', label: 'Belgium (Dutch)', flag: '🇧🇪', googleCode: 'nl' },
  { code: 'BO', label: 'Bolivia (Spanish)', flag: '🇧🇴', googleCode: 'es' },
  { code: 'BA', label: 'Bosnia (Bosnian)', flag: '🇧🇦', googleCode: 'bs' },
  { code: 'BR', label: 'Brazil (Portuguese)', flag: '🇧🇷', googleCode: 'pt' },
  { code: 'BG', label: 'Bulgaria (Bulgarian)', flag: '🇧🇬', googleCode: 'bg' },
  { code: 'KH', label: 'Cambodia (Khmer)', flag: '🇰🇭', googleCode: 'km' },
  { code: 'CA', label: 'Canada (English)', flag: '🇨🇦', googleCode: 'en' },
  { code: 'CL', label: 'Chile (Spanish)', flag: '🇨🇱', googleCode: 'es' },
  { code: 'CN', label: 'China (Simplified)', flag: '🇨🇳', googleCode: 'zh-CN' },
  { code: 'CO', label: 'Colombia (Spanish)', flag: '🇨🇴', googleCode: 'es' },
  { code: 'HR', label: 'Croatia (Croatian)', flag: '🇭🇷', googleCode: 'hr' },
  { code: 'CU', label: 'Cuba (Spanish)', flag: '🇨🇺', googleCode: 'es' },
  { code: 'CZ', label: 'Czechia (Czech)', flag: '🇨🇿', googleCode: 'cs' },
  { code: 'DK', label: 'Denmark (Danish)', flag: '🇩🇰', googleCode: 'da' },
  { code: 'EG', label: 'Egypt (Arabic)', flag: '🇪🇬', googleCode: 'ar' },
  { code: 'ET', label: 'Ethiopia (Amharic)', flag: '🇪🇹', googleCode: 'am' },
  { code: 'FI', label: 'Finland (Finnish)', flag: '🇫🇮', googleCode: 'fi' },
  { code: 'FR', label: 'France (French)', flag: '🇫🇷', googleCode: 'fr' },
  { code: 'GE', label: 'Georgia (Georgian)', flag: '🇬🇪', googleCode: 'ka' },
  { code: 'DE', label: 'Germany (German)', flag: '🇩🇪', googleCode: 'de' },
  { code: 'GR', label: 'Greece (Greek)', flag: '🇬🇷', googleCode: 'el' },
  { code: 'HU', label: 'Hungary (Hungarian)', flag: '🇭🇺', googleCode: 'hu' },
  { code: 'IS', label: 'Iceland (Icelandic)', flag: '🇮🇸', googleCode: 'is' },
  { code: 'IN', label: 'India (Hindi)', flag: '🇮🇳', googleCode: 'hi' },
  { code: 'ID', label: 'Indonesia (Indonesian)', flag: '🇮🇩', googleCode: 'id' },
  { code: 'IR', label: 'Iran (Persian)', flag: '🇮🇷', googleCode: 'fa' },
  { code: 'IE', label: 'Ireland (Irish)', flag: '🇮🇪', googleCode: 'ga' },
  { code: 'IL', label: 'Israel (Hebrew)', flag: '🇮🇱', googleCode: 'iw' },
  { code: 'IT', label: 'Italy (Italian)', flag: '🇮🇹', googleCode: 'it' },
  { code: 'JP', label: 'Japan (Japanese)', flag: '🇯🇵', googleCode: 'ja' },
  { code: 'KZ', label: 'Kazakhstan (Kazakh)', flag: '🇰🇿', googleCode: 'kk' },
  { code: 'KE', label: 'Kenya (Swahili)', flag: '🇰🇪', googleCode: 'sw' },
  { code: 'KR', label: 'Korea (Korean)', flag: '🇰🇷', googleCode: 'ko' },
  { code: 'LV', label: 'Latvia (Latvian)', flag: '🇱🇻', googleCode: 'lv' },
  { code: 'LT', label: 'Lithuania (Lithuanian)', flag: '🇱🇹', googleCode: 'lt' },
  { code: 'MY', label: 'Malaysia (Malay)', flag: '🇲🇾', googleCode: 'ms' },
  { code: 'MX', label: 'Mexico (Spanish)', flag: '🇲🇽', googleCode: 'es' },
  { code: 'MN', label: 'Mongolia (Mongolian)', flag: '🇲🇳', googleCode: 'mn' },
  { code: 'NP', label: 'Nepal (Nepali)', flag: '🇳🇵', googleCode: 'ne' },
  { code: 'NL', label: 'Netherlands (Dutch)', flag: '🇳🇱', googleCode: 'nl' },
  { code: 'NZ', label: 'New Zealand (Maori)', flag: '🇳🇿', googleCode: 'mi' },
  { code: 'NG', label: 'Nigeria (Yoruba)', flag: '🇳🇬', googleCode: 'yo' },
  { code: 'NO', label: 'Norway (Norwegian)', flag: '🇳🇴', googleCode: 'no' },
  { code: 'PK', label: 'Pakistan (Urdu)', flag: '🇵🇰', googleCode: 'ur' },
  { code: 'PH', label: 'Philippines (Tagalog)', flag: '🇵🇭', googleCode: 'tl' },
  { code: 'PL', label: 'Poland (Polish)', flag: '🇵🇱', googleCode: 'pl' },
  { code: 'PT', label: 'Portugal (Portuguese)', flag: '🇵🇹', googleCode: 'pt' },
  { code: 'RO', label: 'Romania (Romanian)', flag: '🇷🇴', googleCode: 'ro' },
  { code: 'RU', label: 'Russia (Russian)', flag: '🇷🇺', googleCode: 'ru' },
  { code: 'SA', label: 'Saudi Arabia (Arabic)', flag: '🇸🇦', googleCode: 'ar' },
  { code: 'RS', label: 'Serbia (Serbian)', flag: '🇷🇸', googleCode: 'sr' },
  { code: 'SK', label: 'Slovakia (Slovak)', flag: '🇸🇰', googleCode: 'sk' },
  { code: 'SI', label: 'Slovenia (Slovenian)', flag: '🇸🇮', googleCode: 'sl' },
  { code: 'ZA', label: 'South Africa (Zulu)', flag: '🇿🇦', googleCode: 'zu' },
  { code: 'ES', label: 'Spain (Spanish)', flag: '🇪🇸', googleCode: 'es' },
  { code: 'LK', label: 'Sri Lanka (Sinhala)', flag: '🇱🇰', googleCode: 'si' },
  { code: 'SE', label: 'Sweden (Swedish)', flag: '🇸🇪', googleCode: 'sv' },
  { code: 'CH', label: 'Switzerland (German)', flag: '🇨🇭', googleCode: 'de' },
  { code: 'TH', label: 'Thailand (Thai)', flag: '🇹🇭', googleCode: 'th' },
  { code: 'TR', label: 'Turkey (Turkish)', flag: '🇹🇷', googleCode: 'tr' },
  { code: 'UG', label: 'Uganda (Luganda)', flag: '🇺🇬', googleCode: 'en' },
  { code: 'UA', label: 'Ukraine (Ukrainian)', flag: '🇺🇦', googleCode: 'uk' },
  { code: 'AE', label: 'UAE (Arabic)', flag: '🇦🇪', googleCode: 'ar' },
  { code: 'GB', label: 'UK (English)', flag: '🇬🇧', googleCode: 'en' },
  { code: 'US', label: 'USA (English)', flag: '🇺🇸', googleCode: 'en' },
  { code: 'UZ', label: 'Uzbekistan (Uzbek)', flag: '🇺🇿', googleCode: 'uz' },
  { code: 'VN', label: 'Vietnam (Vietnamese)', flag: '🇻🇳', googleCode: 'vi' },
  { code: 'ZW', label: 'Zimbabwe (Shona)', flag: '🇿🇼', googleCode: 'sn' }
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
      {/* Floating Action Button: Fixed Bottom-Left */}
      <div className="fixed bottom-[110px] left-8 z-[10002]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lang-toggle-btn py-[8px] px-[20px] rounded-full border-2 border-[#1A1A1A] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center justify-center gap-3 transition-all duration-500 hover:-translate-y-1 active:scale-95 group ${
            isOpen ? 'bg-white text-[#1A1A1A]' : 'bg-[#D4AF37] text-[#1A1A1A] hover:bg-white font-black'
          }`}
          aria-label="Toggle Global Voyager Language Selector"
        >
          <Globe size={14} strokeWidth={2.5} className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : 'group-hover:rotate-12'}`} />
          <span className="text-[12px] uppercase tracking-[0.15em] font-bold whitespace-nowrap leading-none">
            {isOpen ? 'CLOSE VOYAGER' : 'SELECT LANGUAGE »'}
          </span>
          
          {!isOpen && (
            <div className="absolute inset-0 rounded-full border-2 border-[#1A1A1A]/10 animate-ping pointer-events-none" />
          )}
        </button>
      </div>

      {/* Full-width Horizontal Drawer (Drawer-style Pop-up) */}
      <div 
        ref={barRef}
        className={`fixed bottom-0 left-0 w-full bg-[#1A1A1A] border-t-2 border-[#D4AF37] z-[10001] shadow-[0_-20px_80px_rgba(0,0,0,0.6)] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[2200px] mx-auto flex flex-col">
          {/* Header Section with Global Search */}
          <div className="px-8 md:px-12 py-6 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className="hidden sm:block">
                <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[9px] font-black mb-1">Global Voyager</p>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight uppercase">
                  Select <span className="italic font-light">Dialect</span>
                </h2>
              </div>
              <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
              <div className="relative group w-full sm:w-[400px]">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#D4AF37] transition-colors" />
                <input 
                  type="text"
                  placeholder="Search Afghanistan to Zimbabwe..."
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

          {/* Massive Grid of Regional Flag Icons */}
          <div className="max-h-[60vh] md:max-h-[480px] overflow-y-auto px-8 md:px-12 py-12 scrollbar-premium">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-15 gap-4 md:gap-5">
              {filteredLanguages.map((lang, idx) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang)}
                  className={`flex flex-col items-center justify-center p-4 border transition-all duration-500 group/langbox h-full ${
                    currentLang === lang.googleCode.toUpperCase() 
                      ? 'bg-[#D4AF37] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                      : 'bg-white/5 border-white/5 hover:border-[#D4AF37] hover:bg-white/10 shadow-sm'
                  }`}
                  style={{ animationDelay: `${idx * 2}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center overflow-hidden mb-3 transition-transform duration-500 group-hover/langbox:scale-110 shadow-lg">
                    <span className="text-2xl scale-125 select-none">{lang.flag}</span>
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-[0.1em] text-center line-clamp-2 leading-tight ${
                    currentLang === lang.googleCode.toUpperCase() ? 'text-[#1A1A1A]' : 'text-white/80'
                  }`}>
                    {lang.label}
                  </span>
                </button>
              ))}
            </div>
            
            {filteredLanguages.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-white/20 text-xs font-bold uppercase tracking-[0.4em]">No matching territories found.</p>
              </div>
            )}
          </div>
          
          {/* Final Decorative Gold Trim */}
          <div className="h-2 w-full bg-gradient-to-r from-[#D4AF37] via-[#8B5A2B] to-[#D4AF37] opacity-90" />
        </div>
      </div>

      <style>{`
        .scrollbar-premium::-webkit-scrollbar {
          width: 5px;
        }
        .scrollbar-premium::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .scrollbar-premium::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 999px;
        }
      `}</style>
    </>
  );
};