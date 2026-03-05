import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Search } from 'lucide-react';
import { Tour } from '../types.ts';

interface SearchResultsPageProps {
  query: string;
  results: Tour[];
  onBack: () => void;
  onViewTour: (tour: Tour) => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ query, results, onBack, onViewTour }) => {
  return (
    <div className="bg-white min-h-screen pt-[120px] pb-32 font-sans">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] mb-12 text-stone-400"
        >
          <button onClick={onBack} className="hover:text-[#D4AF37] transition-colors">Home</button>
          <ChevronRight size={12} />
          <span className="text-[#1A1A1A]">Search Results</span>
        </motion.div>

        {/* Header */}
        <div className="mb-20 space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] uppercase tracking-tight">
            Results for "{query}"
          </h1>
          <div className="w-20 h-1 bg-[#D4AF37]" />
          <p className="text-stone-500 font-light tracking-wide">
            {results.length} {results.length === 1 ? 'itinerary' : 'itineraries'} found matching your vision.
          </p>
        </div>

        {/* Results List */}
        {results.length > 0 ? (
          <div className="space-y-12">
            {results.map((tour, idx) => (
              <motion.div 
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-stone-100 last:border-0"
              >
                {/* Image Container */}
                <div className="w-full md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-sm shrink-0">
                  <img 
                    src={tour.imageUrls[0]} 
                    alt={tour.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-center space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-4">
                      <p className="text-[#1A1A1A] text-[10px] font-bold uppercase tracking-[0.3em] bg-stone-100 px-3 py-1.5 rounded-sm">
                        {tour.category || 'Safari Itinerary'}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[8px] font-black text-[#D4AF37] uppercase tracking-[0.4em]">STARTING FROM</span>
                        <span className="text-sm font-sans font-black text-[#1A1A1A]">${tour.price_from.toLocaleString()}</span>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors">
                      {tour.name}
                    </h3>
                  </div>
                  
                  <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2 max-w-2xl">
                    {tour.description}
                  </p>

                  <div className="pt-4">
                    <button 
                      onClick={() => onViewTour(tour)}
                      className="inline-flex items-center gap-3 text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-[10px] group/btn"
                    >
                      VIEW TOUR 
                      <div className="w-8 h-[1px] bg-[#D4AF37] group-hover/btn:w-12 transition-all" />
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-8">
            <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto">
              <Search className="text-stone-300" size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">No matches found</h3>
              <p className="text-stone-500 font-light">Try adjusting your keywords or browse our signature odysseys.</p>
            </div>
            <button 
              onClick={onBack}
              className="px-8 py-4 border border-stone-200 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Return Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
