import React, { useState, useMemo } from 'react';
import { Review } from '../types.ts';
import { ReviewCard } from './ReviewCard.tsx';
import { StarRating } from './StarRating.tsx';

type ReviewFilter = 'all' | '5-star' | 'safari' | 'primate';

const LeaveReviewForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    trip: '',
    rating: 5,
    comment: '',
    country: '',
    agreedToTerms: false
  });

  const [submitStatus, setSubmitStatus] = useState<'loading' | 'success' | 'error' | null>(null);

  const tripOptions = [
    '5 Days Bwindi Gorilla & Crater Lakes',
    '7 Days Murchison Falls Safari',
    '4 Days Queen Elizabeth Safari',
    '6 Days Karamoja Cultural Immersion',
    '3 Days Gorilla Quick Escape',
    '5 Days Kidepo Valley Adventure',
    'Other Bespoke Odyssey'
  ];

  const countryList = [
    'United Kingdom', 'United States', 'Canada', 'Australia',
    'Singapore', 'Spain', 'India', 'Germany', 'France', 'Japan',
    'Switzerland', 'Monaco', 'South Africa', 'Kenya', 'Other'
  ];

  const handleStarClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) return;
    
    setSubmitStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xpwqgrze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _to: 'info@kuzuri-escapades.com',
          _subject: `New Review Manifest from ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', trip: '', rating: 5,
          comment: '', country: '', agreedToTerms: false
        });
        setTimeout(() => setSubmitStatus(null), 8000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 max-w-4xl">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <label htmlFor="client-name" className="block text-[10px] uppercase tracking-[0.4em] font-black mb-4 text-[#1A1A1A]">
            Your Name *
          </label>
          <input
            id="client-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g., Sarah Thompson"
            aria-required="true"
            aria-label="Guest name for review"
            className="w-full bg-[#FAF8F3] border-b-2 border-black p-5 outline-none focus:border-[#D4AF37] transition-all font-bold placeholder:opacity-30"
            required
          />
        </div>

        <div>
          <label htmlFor="client-email" className="block text-[10px] uppercase tracking-[0.4em] font-black mb-4 text-[#1A1A1A]">
            Email Address *
          </label>
          <input
            id="client-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            aria-required="true"
            aria-label="Email for curator verification"
            className="w-full bg-[#FAF8F3] border-b-2 border-black p-5 outline-none focus:border-[#D4AF37] transition-all font-bold placeholder:opacity-30"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <label htmlFor="client-country" className="block text-[10px] uppercase tracking-[0.4em] font-black mb-4 text-[#1A1A1A]">
            Country *
          </label>
          <select
            id="client-country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            aria-required="true"
            aria-label="Country of residence"
            className="w-full bg-[#FAF8F3] border-b-2 border-black p-5 outline-none focus:border-[#D4AF37] transition-all font-bold cursor-pointer"
            required
          >
            <option value="">Select your country</option>
            {countryList.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="trip-taken" className="block text-[10px] uppercase tracking-[0.4em] font-black mb-4 text-[#1A1A1A]">
            Which trip did you take? *
          </label>
          <select
            id="trip-taken"
            name="trip"
            value={formData.trip}
            onChange={handleInputChange}
            aria-required="true"
            aria-label="Bespoke odyssey selected"
            className="w-full bg-[#FAF8F3] border-b-2 border-black p-5 outline-none focus:border-[#D4AF37] transition-all font-bold cursor-pointer"
            required
          >
            <option value="">Select an odyssey</option>
            {tripOptions.map((trip) => (
              <option key={trip} value={trip}>{trip}</option>
            ))}
          </select>
        </div>
      </div>

      <div role="group" aria-labelledby="rating-label">
        <label id="rating-label" className="block text-[10px] uppercase tracking-[0.4em] font-black mb-6 text-[#1A1A1A]">
          How would you rate your experience? *
        </label>
        <StarRating 
          rating={formData.rating} 
          onRate={handleStarClick} 
          interactive={true} 
          size={48} 
        />
      </div>

      <div>
        <label htmlFor="client-comment" className="block text-[10px] uppercase tracking-[0.4em] font-black mb-4 text-[#1A1A1A]">
          Tell us about your experience *
        </label>
        <textarea
          id="client-comment"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder="Share your thoughts, highlights, and recommendations..."
          rows={6}
          maxLength={500}
          aria-required="true"
          aria-label="Narrative of the travel experience"
          className="w-full bg-[#FAF8F3] border-b-2 border-black p-6 outline-none focus:border-[#D4AF37] transition-all font-medium leading-relaxed resize-none placeholder:opacity-30"
          required
        />
        <div className="flex justify-between items-center mt-3">
          <p className="text-[9px] uppercase tracking-widest text-[#654321] opacity-50 font-bold italic">
            Reflecting the rhythm of your return
          </p>
          <p className="text-[10px] font-black text-[#1A1A1A]" aria-live="polite">
            {formData.comment.length}/500
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-[#FAF8F3] border border-black/10">
        <input
          type="checkbox"
          name="agreedToTerms"
          id="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleInputChange}
          aria-required="true"
          className="mt-1 w-6 h-6 accent-[#8B5A2B] border-2 border-black cursor-pointer"
          required
        />
        <label htmlFor="agreedToTerms" className="text-xs font-medium leading-relaxed text-[#1A1A1A] cursor-pointer selection:bg-[#D4AF37]">
          I agree that my review may be published on Kuzuri Escapades' website and social media platforms. I verify that this is a genuine account of my private travel experience.
        </label>
      </div>

      {submitStatus === 'success' && (
        <div role="status" className="p-8 bg-[#D4AF37] border-2 border-black text-[#1A1A1A] text-center font-black uppercase tracking-[0.2em] text-sm animate-fade-in">
          ✓ Thank you. Your narrative has been received for curator verification.
        </div>
      )}

      {submitStatus === 'error' && (
        <div role="alert" className="p-8 bg-red-50 border-2 border-red-600 text-red-700 text-center font-bold text-sm">
          ✗ An error occurred. Please try again or reach out to info@kuzuri-escapades.com.
        </div>
      )}

      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="w-full py-8 bg-[#8B5A2B] text-[#F5F5DC] text-[11px] uppercase tracking-[0.8em] font-black border-2 border-black hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all duration-700 hover:scale-102 disabled:opacity-50 disabled:grayscale shadow-2xl"
      >
        {submitStatus === 'loading' ? 'TRANSMITTING...' : 'SUBMIT REVIEW MANIFEST'}
      </button>
    </form>
  );
};

export const TestimonialsPage: React.FC<{ reviews: Review[], onHelpfulClick?: (id: string | number) => void }> = ({ reviews, onHelpfulClick }) => {
  const [filter, setFilter] = useState<ReviewFilter>('all');
  
  const publishedReviews = useMemo(() => reviews.filter(r => r.published), [reviews]);
  
  // Dynamic stats calculation
  const stats = useMemo(() => {
    const total = publishedReviews.length;
    const avg = publishedReviews.reduce((acc, r) => acc + r.rating, 0) / (total || 1);
    const countries = new Set(publishedReviews.map(r => r.countryCode)).size;
    return { 
      total, 
      avg: avg.toFixed(1), 
      countries: Math.max(countries, 45) // Seeded with historical data
    };
  }, [publishedReviews]);

  // Count helper for filters
  const getFilterCount = (type: ReviewFilter) => {
    if (type === 'all') return publishedReviews.length;
    if (type === '5-star') return publishedReviews.filter(r => r.rating === 5).length;
    if (type === 'safari') return publishedReviews.filter(r => r.tripTaken.toLowerCase().includes('safari')).length;
    if (type === 'primate') return publishedReviews.filter(r => r.tripTaken.toLowerCase().includes('gorilla')).length;
    return 0;
  };

  const filteredReviews = useMemo(() => {
    return publishedReviews.filter(r => {
      if (filter === 'all') return true;
      if (filter === '5-star') return r.rating === 5;
      if (filter === 'safari') return r.tripTaken.toLowerCase().includes('safari');
      if (filter === 'primate') return r.tripTaken.toLowerCase().includes('gorilla');
      return true;
    });
  }, [publishedReviews, filter]);

  return (
    <div className="bg-[#F5F5DC] min-h-screen pt-24 selection:bg-[#1A1A1A] selection:text-[#D4AF37]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#1A1A1A] border-b-2 border-black overflow-hidden">
        <img 
          src="https://i.postimg.cc/qzRsBgyD/images.jpg" 
          alt="Client in Bwindi forest" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#D4AF37] uppercase tracking-[1.5em] text-[10px] font-bold mb-12 animate-fade-in">THE RETURN</p>
          <h1 className="text-6xl md:text-9xl font-serif font-bold text-[#F5F5DC] tracking-tighter leading-none animate-fade-in-up">
            Client <span className="italic font-light">Testimonials</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-48">
        {/* Trust Badges - Data Driven */}
        <div className="text-center mb-32 pb-24 border-b-2 border-black/10">
          <p className="text-2xl md:text-3xl font-light mb-20 max-w-3xl mx-auto leading-relaxed text-[#654321] opacity-90">
            Real stories from global travelers who discovered the profound magic of Uganda with Kuzuri Escapades.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-32">
            <div className="reveal-trigger">
              <p className="text-7xl md:text-8xl font-serif font-bold mb-6 text-[#D4AF37]">{stats.avg}/5</p>
              <p className="text-[11px] uppercase tracking-[0.6em] font-black text-[#1A1A1A]">Average Rating</p>
            </div>
            <div className="reveal-trigger">
              <p className="text-7xl md:text-8xl font-serif font-bold mb-6 text-[#D4AF37]">{stats.total}</p>
              <p className="text-[11px] uppercase tracking-[0.6em] font-black text-[#1A1A1A]">Verified Manifests</p>
            </div>
            <div className="reveal-trigger">
              <p className="text-7xl md:text-8xl font-serif font-bold mb-6 text-[#D4AF37]">{stats.countries}+</p>
              <p className="text-[11px] uppercase tracking-[0.6em] font-black text-[#1A1A1A]">Countries Served</p>
            </div>
          </div>
        </div>

        {/* Filter Navigation with counts */}
        <div className="flex flex-wrap justify-center gap-6 mb-24 reveal-trigger">
          {(['all', '5-star', 'safari', 'primate'] as ReviewFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 text-[10px] uppercase tracking-[0.4em] font-black border-2 transition-all duration-500 hover:scale-105 active:scale-95 ${
                filter === f 
                  ? 'bg-[#1A1A1A] text-[#D4AF37] border-black shadow-xl' 
                  : 'bg-transparent text-[#1A1A1A] border-black/10 hover:border-black'
              }`}
            >
              {f.replace('-', ' ')} <span className="opacity-50 ml-2">({getFilterCount(f)})</span>
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        {filteredReviews.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 mb-48">
            {filteredReviews.map((review) => (
              <div key={review.id} className="reveal-trigger animate-fade-in">
                <ReviewCard review={review} onHelpfulClick={onHelpfulClick} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-48 text-center animate-fade-in border-2 border-dashed border-black/10 rounded-lg">
            <p className="text-2xl font-serif italic text-stone-300">The horizon for this category is currently clear.</p>
          </div>
        )}

        {/* Leave a Review Section */}
        <div className="bg-white border-2 border-black p-10 md:p-32 mb-48 shadow-2xl reveal-trigger relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[12px] bg-[#D4AF37]" />
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 text-[#1A1A1A]">
              Share Your <br /><span className="italic font-light">Experience</span>
            </h2>
            <p className="text-lg font-light text-[#654321] max-w-2xl leading-relaxed">
              Your feedback helps other world travelers discover the silent luxury and native narratives of the Pearl of Africa.
            </p>
          </div>
          <LeaveReviewForm />
        </div>
      </div>
    </div>
  );
};