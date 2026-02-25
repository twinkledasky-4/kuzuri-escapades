import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Award, Users, Globe, ShieldCheck, ArrowRight, Compass, Calendar, Heart, HandHeart, Car, Tag, Search } from 'lucide-react';
import { ABOUT_CONTENT } from '../constants.tsx';

interface AboutPageProps {
  onBack: () => void;
  onContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onContact }) => {
  return (
    <div className="bg-white min-h-screen pt-[80px] font-sans">
      {/* Hero Header */}
      <section className="relative h-[30vh] min-h-[250px] overflow-hidden">
        <img 
          src="https://i.postimg.cc/Hkp3Pkcx/Tanzani_Wildlife_tour_1536x1152.jpg" 
          alt="Wide angle safari landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 font-medium"
          >
            <button onClick={onBack} className="hover:text-[#D4AF37] transition-colors">Home</button>
            <ChevronRight size={14} className="opacity-50" />
            <span className="opacity-70">About Us</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold tracking-tighter text-center uppercase"
          >
            About Us
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 w-[1px] h-12 bg-white"
          />
        </div>
      </section>

      {/* Our Story & Sidebar Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content Column (Left Side) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="space-y-4">
                <p className="text-[#D4AF37] uppercase tracking-[0.8em] text-[10px] font-bold">
                  WHO WE ARE?
                </p>
                <h2 className="text-lg md:text-xl font-bold text-[#1A1A1A] uppercase tracking-widest relative inline-block">
                  KUZURI ESCAPADES COMPANY LIMITED:
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AF37]" />
                </h2>
              </div>
              
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
                <p>
                  To begin with, Kuzuri Escapedes is a safari-based company with a knowledgeable employee base that turns every safari into a lifetime memory. A diverse selection of our sample safaris positions us to champion in discovering the beauty of Africa’s Wilderness.
                </p>
                <p>
                  Our Tailor-Made-safari nature enables us to clearly understand our client’s interest. This also aids the amazing test of Africa’s adventure.
                </p>
                <p>
                  Additionally, our company started in 2018 thus based in Uganda. It is important to note that Uganda is referred to as ‘The Pearl of Africa’ as Sir Winston Churchill named it during his discovery safari in 1907.
                </p>
                <p>
                  Furthermore, the word KUZURI is a Swahili word that means <span className="text-[#D4AF37] font-medium italic">Beautiful or Good</span>.
                </p>
                <p>
                  That said, our dedicated cohesive team of skilled guides is staged to aid your itinerary plan. Therefore, you will become comfortably connected to the sights and sounds of Nature.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-stone-100">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-wider">Our Mission</h3>
                  <p className="text-stone-600 leading-relaxed font-light text-base">
                    To be the most preferred safari agency with safe and comfortable services that meet and exceed the expectation of our clients.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-wider">Our Vision</h3>
                  <p className="text-stone-600 leading-relaxed font-light text-base">
                    To offer affordable safari packages with professionalism, credibility and transparency to meet standards and develop the tourism industry as we go discovering the beauty of nature.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-wider mb-6">Our Core Values</h3>
                <ul className="space-y-4">
                  {[
                    "Integrity",
                    "Timely service delivery",
                    "Accountability",
                    "Professionalism",
                    "Comfortability"
                  ].map((value, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                      <span className="text-stone-600 font-medium uppercase tracking-widest text-sm">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-3 text-[#1A1A1A] font-bold uppercase tracking-[0.2em] text-[10px] hover:text-[#D4AF37] transition-colors"
                >
                  Explore Itineraries <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Safari Destinations Integrated into Main Column */}
              <div className="pt-16 space-y-10 border-t border-stone-100">
                <div className="space-y-4">
                  <p className="text-[#D4AF37] uppercase tracking-[0.8em] text-[10px] font-bold">WHERE WE GO</p>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] uppercase tracking-widest">
                    SAFARI DESTINATIONS WE COVER
                  </h2>
                </div>
                
                <div className="flex flex-wrap gap-x-6 gap-y-4 text-base md:text-lg font-serif font-bold text-[#1A1A1A]">
                  {[
                    "Uganda", "Rwanda", "Kenya", "Tanzania", 
                    "South Sudan", "Burundi", "Democratic Republic of Congo"
                  ].map((country, idx, arr) => (
                    <React.Fragment key={country}>
                      <span className="hover:text-[#D4AF37] transition-colors cursor-default">{country}</span>
                      {idx < arr.length - 1 && (
                        <span className="text-[#D4AF37] opacity-30">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-stone-500 text-sm font-light italic tracking-wide">
                  We provide comprehensive safari services across the whole of East Africa.
                </p>
              </div>
            </motion.div>
            
            {/* Sidebar Column (Right Side) */}
            <motion.aside 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-12"
            >
              {/* Search Box */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]">Search</h4>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Search our safaris..." 
                    className="w-full bg-transparent border-b border-stone-200 py-2 pr-10 text-sm focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-stone-300 font-light"
                  />
                  <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4 group-focus-within:text-[#D4AF37] transition-colors" />
                </div>
              </div>

              {/* Remarkable Safaris */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]">Remarkable Safaris</h4>
                <ul className="space-y-5">
                  {[
                    "23-day Luxury Uganda Safari with primates and wildlife",
                    "14 Days Uganda Big 5 safari – Primates and Tree Climbing Lions",
                    "14 days Kenya & Uganda wildlife and Gorilla tracking safari",
                    "1-day Mabamba excursion tour",
                    "1-day birding in Akagera national park",
                    "3-day Gorilla Trekking & Lake Bunyonyi relaxation",
                    "3 days Gorillas and Birds of Volcanoes National park",
                    "4 Day Luxury Gorilla trekking safari from Rwanda",
                    "3-Day gorilla trekking safari in Bwindi"
                  ].map((safari, idx) => (
                    <li key={idx} className="group">
                      <a 
                        href="#" 
                        className="text-[#D4AF37] hover:text-[#1A1A1A] text-xs leading-relaxed transition-all font-semibold block uppercase tracking-wider"
                      >
                        <span className="inline-block mr-2 opacity-30 group-hover:opacity-100 transition-opacity">/</span>
                        {safari}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legacy Image (Moved to Sidebar) */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.postimg.cc/y8yW9yQ5/a66809a6-28e3-4e2f-9391-0f6cc547e9cb.jpg" 
                  alt="Kuzuri Legacy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[8px] uppercase tracking-[0.4em] mb-1 opacity-70">Established</p>
                  <p className="text-2xl font-serif font-bold">2018</p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* The Kuzuri Promise Section */}

      {/* Our Services Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-4">
              <p className="text-[#D4AF37] uppercase tracking-[0.8em] text-[10px] font-bold">WHAT WE OFFER</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">Our Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Tailor-made Safaris", icon: <Compass /> },
                { title: "Fixed safaris", icon: <Calendar /> },
                { title: "Country Combined Safaris", icon: <Globe /> },
                { title: "Kuzuri Health Initiative", icon: <Heart /> }
              ].map((service, idx) => (
                <div key={idx} className="p-10 bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center text-center group">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-all duration-500 group-hover:scale-110">
                    {React.cloneElement(service.icon as React.ReactElement, { 
                      className: "text-[#D4AF37] group-hover:text-white transition-colors",
                      size: 28,
                      strokeWidth: 1.5
                    })}
                  </div>
                  <p className="text-[#1A1A1A] font-serif font-bold uppercase tracking-widest text-xs leading-relaxed">{service.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Safaris Section */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            <div className="text-center space-y-4">
              <p className="text-[#D4AF37] uppercase tracking-[0.8em] text-[10px] font-bold">DISCOVER YOUR PATH</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] relative inline-block">
                Types of Safaris
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#D4AF37]" />
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {[
                "Gorilla Trekking", "Chimpanzee Trekking", "Golden Monkey Tracking", 
                "Canopy Walk", "Gorilla Habituation", "Chimpanzee Habituation",
                "Wildlife Game Drives", "Birding Safaris", "Lion & Predator Tracking", 
                "Walking Safaris", "Boat Cruise Safaris", "Sport Fishing Safaris",
                "White Water Rafting", "Quad Biking Safaris", "Horseback Safaris", 
                "Hot Air Balloon Safaris", "Ziplining Safaris", "Bungee Jumping", 
                "Mountain Climbing", "Honeymoon Safaris", "Group & Family Safaris", 
                "Fly-in-Safaris", "Wildlife Filming Safaris", "Education Exchange Safaris",
                "Cultural Safaris", "City Tours", "Agriculture Safaris", 
                "Kayaking Safaris", "Biking & Cycling Safaris"
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  className="text-stone-600 hover:text-[#D4AF37] transition-colors text-sm font-medium border-b border-stone-100 pb-2 flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors" />
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Kuzuri Escapades Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            <div className="text-center space-y-4">
              <p className="text-[#D4AF37] uppercase tracking-[0.8em] text-[10px] font-bold">THE KUZURI ADVANTAGE</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] relative inline-block">
                Why Choose Kuzuri Escapades?
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#D4AF37]" />
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "5% of profits go to charity",
                  desc: "Kuzuri gives back to the community through its 5% share of the profits. This is to outstanding vulnerable and marginalized people in an organized association, NGOs, etc.",
                  icon: <HandHeart />
                },
                {
                  title: "Reliability and trustworthiness",
                  desc: "Kuzuri has trustworthy and reliable tour guides. They are ready to work together with you to deliver quality services.",
                  icon: <ShieldCheck />
                },
                {
                  title: "Comfortable safe mileage",
                  desc: "Kuzuri also aims at providing the most comfortable safe mileage to its clients so as to meet their satisfaction.",
                  icon: <Car />
                },
                {
                  title: "Hospitable employees",
                  desc: "Meet our hospitable guides all determined to make it to your travel destination. Additionally, the guides are fluent English speakers with broader knowledge about Uganda.",
                  icon: <Users />
                },
                {
                  title: "Affordable quality services",
                  desc: "Kuzuri exists to offer pocket-friendly safari packages which are of good quality to suit your taste.",
                  icon: <Tag />
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="text-[#D4AF37] mb-8 group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 40, strokeWidth: 1 })}
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-4 text-[#1A1A1A]">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Partners Section */}
      <section className="py-20 bg-stone-50 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-12">
            <p className="text-[#D4AF37] uppercase tracking-[0.8em] text-[10px] font-bold">TRUSTED BY THE BEST</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://utb.go.ug/sites/default/files/utb-logo.png" alt="UTB" className="h-12 md:h-16 w-auto object-contain" />
              <img src="https://www.ugandawildlife.org/images/uwa-logo.png" alt="UWA" className="h-16 md:h-20 w-auto object-contain" />
              <img src="https://ugandatouroperators.org/wp-content/uploads/2021/05/AUTO-Logo.png" alt="AUTO" className="h-12 md:h-16 w-auto object-contain" />
              <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor" className="h-8 md:h-10 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Consultation Section */}
      <section className="py-24 md:py-32 px-6 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#D4AF37] uppercase tracking-[0.8em] text-[10px] font-bold">START YOUR LEGACY</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Ready to Author <br />Your Vision?</h2>
              </div>
              <p className="text-stone-400 text-lg font-light leading-relaxed max-w-md">
                Our native curators are standing by to help you craft a journey that transcends the ordinary. Let's begin the first chapter of your Ugandan story.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button 
                  onClick={onContact}
                  className="bg-[#D4AF37] text-black px-10 py-5 text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-white transition-all duration-500 rounded-sm"
                >
                  Request Consultation
                </button>
                <button 
                  onClick={onBack}
                  className="border border-white/20 text-white px-10 py-5 text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
                >
                  View Itineraries
                </button>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-stone-100">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-8 text-center">Plan Your Safari</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Your Name</label>
                    <input type="text" placeholder="Full Name" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Your Email</label>
                    <input type="email" placeholder="email@example.com" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Your Nationality</label>
                    <input type="text" placeholder="e.g. British" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Travel Date</label>
                    <input type="date" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Days</label>
                    <input type="number" placeholder="7" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">People</label>
                    <input type="number" placeholder="2" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Budget (USD)</label>
                    <input type="text" placeholder="$5000" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex gap-2">
                    <div className="w-20 space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Code</label>
                      <input type="text" defaultValue="+256" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-2 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                    </div>
                    <div className="flex-grow space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Phone Number</label>
                      <input type="tel" placeholder="708012030" className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Accommodation</label>
                    <select className="w-full bg-stone-50 border border-stone-100 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] text-stone-900 transition-all appearance-none cursor-pointer">
                      <option>Luxury</option>
                      <option>Mid-range</option>
                      <option>Budget</option>
                      <option>Camping</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#D4AF37] text-black py-4 rounded-lg text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500 mt-4">
                  Request Itinerary
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-[#1A1A1A]">Ready to write your chapter?</h2>
          <button 
            onClick={onContact}
            className="bg-[#D4AF37] text-black px-12 py-5 text-[11px] font-bold tracking-[0.6em] uppercase hover:bg-black hover:text-white transition-all duration-500 rounded-sm"
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};
