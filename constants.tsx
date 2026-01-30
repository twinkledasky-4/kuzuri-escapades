
import { Destination, Tour, Service, Review, Lodge } from './types.ts';

export const HERO_SLIDES = [
  {
    id: 'safari-crossroad',
    subtitle: 'Signature Private Experiences',
    title: 'Safari in <span class="italic text-[#D4AF37]">Uganda</span>',
    description: 'From fascinating wildlife to vibrant urban centers, from tranquil lake shores to lush rainforests, Uganda is a land of incredible diversity that will inspire you to explore it all! Its breathtaking landscapes and rich cultural heritage have inspired countless tales of adventure and discovery. So, embark on your own journey to this remarkable jewel of East Africa and write your own chapter to share an exceptional experience!',
    imageUrl: 'https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg',
    cta: 'Begin Your Experience'
  },
  {
    id: 'cultural-immersion',
    subtitle: 'Ancestral Narratives',
    title: 'Native <span class="italic text-[#D4AF37]">Heritage.</span>',
    description: 'Step into the living history of the manyattas, where the rhythm of the land is mirrored in the traditions of its guardians.',
    imageUrl: 'https://i.postimg.cc/Kv7JNMzm/Kara_Tunga_Tours_Life_in_Manyatta_5_e1643904828756.webp',
    cta: 'Connect with Roots'
  },
  {
    id: 'wildlife-horizons',
    subtitle: 'Untamed Elegance',
    title: 'Infinite <span class="italic text-[#D4AF37]">Expanses.</span>',
    description: 'Traverse the golden savannas where the thundering wild meets the quiet grace of the Pearl of Africa.',
    imageUrl: 'https://i.postimg.cc/Hkp3Pkcx/Tanzani_Wildlife_tour_1536x1152.jpg',
    cta: 'View the Horizon'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'bwindi-forest',
    name: 'Bwindi Impenetrable',
    slug: 'bwindi-forest',
    tagline: 'Misty Realms & Gentle Giants',
    description: 'The ancient soul of the forest, where sunlight filters through ancient canopies to reveal the mountain gorilla.',
    images: ['https://images.unsplash.com/photo-1518063311540-0640001280cc?auto=format&fit=crop&q=85&w=1600'],
    highlights: ['Gorilla Tracking', 'Forest Birding', 'Batwa Cultural Heritage'],
    featured: true,
    order_index: 1
  },
  {
    id: 'queen-elizabeth',
    name: 'Queen Elizabeth',
    slug: 'queen-elizabeth',
    tagline: 'Savannah Medley & Primal Roads',
    description: 'A biodiverse mosaic where lions claim the open roads and the Kazinga Channel flows with ancestral life.',
    images: ['https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg'],
    highlights: ['Lions of the Savannah', 'Kazinga Channel Cruises', 'Crater Lake Horizons'],
    featured: true,
    order_index: 2
  },
  {
    id: 'lake-mburo',
    name: 'Lake Mburo',
    slug: 'lake-mburo',
    tagline: 'The Mosaic of Stripes',
    description: 'An intimate sanctuary of stripped elegance, offering a closer connection to the native wildlife of the plains.',
    images: ['https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&q=85&w=1600'],
    highlights: ['Zebra Portraits', 'Night Forest Trails', 'Native Steward Guidance'],
    featured: true,
    order_index: 3
  }
];

export const TOURS: Tour[] = [
  {
    id: 'uganda-rwanda-birding-12d',
    name: '12 days Uganda and Rwanda birding comfort safari',
    slug: 'uganda-rwanda-birding-12d',
    duration_days: 12,
    duration_nights: 11,
    price_from: 4520,
    price_was: 4780,
    currency: '$',
    category: 'Signature Birding',
    description: 'An elite avian odyssey across the diverse biomes of Uganda and Rwanda, designed for birding enthusiasts seeking rare sightings and supreme lodge comfort.',
    highlights: ['Albertine Rift Endemics', 'Shoebill Stork Quest', 'Rwandan Highland Trails'],
    imageUrls: ['https://images.unsplash.com/photo-1552728089-57bdde30ebe3?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: 'kenya-uganda-wildlife-14d',
    name: '14 days Kenya & Uganda wildlife and Gorilla tracking safari',
    slug: 'kenya-uganda-wildlife-14d',
    duration_days: 14,
    duration_nights: 13,
    price_from: 6450,
    currency: '$',
    category: 'Multi-Country Expedition',
    description: 'The ultimate East African circuit combining Kenya’s legendary plains with Uganda’s misty primate sanctuaries for a definitive wildlife encounter.',
    highlights: ['Maasai Mara Game Drives', 'Gorilla Tracking Experience', 'The Great Migration'],
    imageUrls: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: 'masai-mara-serengeti-6d',
    name: '6 Days Masai Mara and Serengeti safari',
    slug: 'masai-mara-serengeti-6d',
    duration_days: 6,
    duration_nights: 5,
    price_from: 3520,
    currency: '$',
    category: 'Savannah Sovereignty',
    description: 'A focused, high-impact safari through the world’s most famous wildlife ecosystem across the Kenya-Tanzania border during migration peak.',
    highlights: ['Masai Mara Reserve', 'Serengeti Plains', 'Migration Crossing'],
    imageUrls: ['https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: 'uganda-big5-lions-14d',
    name: '14 Days Uganda Big 5 safari with Primates & Tree Climbing Lions',
    slug: 'uganda-big5-primates-lions-14d',
    duration_days: 14,
    duration_nights: 13,
    price_from: 5090,
    price_was: 5300,
    currency: '$',
    category: 'The Grand Odyssey',
    description: 'An exhaustive exploration of Uganda’s wildlife diversity, featuring the rare tree-climbing lions of Ishasha, primates, and the full Big 5.',
    highlights: ['Tree-climbing Lions', 'Big Five Game Drives', 'Primate Tracking'],
    imageUrls: ['https://images.unsplash.com/photo-1614027164847-1b2809eb7b9b?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: 'murchison-falls-luxury-5d',
    name: '5 Days Murchison Falls & Nile Luxury Retreat',
    slug: 'murchison-falls-luxury-5d',
    duration_days: 5,
    duration_nights: 4,
    price_from: 1980,
    currency: '$',
    category: 'Riverside Luxury',
    description: 'A focused journey to the worlds most powerful waterfall, featuring private boat cruises on the Nile and exclusive riverside stays.',
    highlights: ['Private Nile Cruise', 'Big Five Game Drives', 'Top of the Falls Hike'],
    imageUrls: ['https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=1200'],
    featured: false
  },
  {
    id: 'primate-9d',
    name: '9 DAYS meeting the gorillas and chimpanzees',
    slug: 'gorillas-chimpanzees-9d',
    duration_days: 9,
    duration_nights: 8,
    price_from: 2694,
    currency: '$',
    category: 'Primate Encounters',
    description: 'An intimate pilgrimage to the hearts of the great apes. Two life-changing encounters in the dense jungles.',
    highlights: ['Gorilla Trekking', 'Chimpanzee Habituation', 'Canopy Walks'],
    imageUrls: ['https://i.postimg.cc/c1fCtM2J/gorilla.jpg'],
    featured: false
  }
];

export const LODGES: Lodge[] = [
  {
    id: 'ishasha-jungle-lodge',
    name: 'Ishasha Jungle Lodge',
    location: 'Ishasha Sector',
    region: 'Queen Elizabeth',
    imageUrl: 'https://i.postimg.cc/Jn163QxT/thatch-roof-house.jpg',
    description: 'Nestled along the Ntungwe River, this eco-lodge is the perfect base for spotting the famous tree-climbing lions of Ishasha.'
  },
  {
    id: 'kibale-tourist-safari-lodge',
    name: 'Kibale Tourist Safari Lodge',
    location: 'Kibale Forest Boundary',
    region: 'Kibale',
    imageUrl: 'https://i.postimg.cc/5NvrVjHW/bed_with_canopy.jpg',
    description: 'A sanctuary of comfort on the edge of the primate capital, offering serene views and proximity to chimpanzee trekking trails.'
  },
  {
    id: 'boma-hotel-entebbe',
    name: 'The Boma Hotel Entebbe',
    location: 'Entebbe',
    region: 'Entebbe',
    imageUrl: 'https://i.postimg.cc/0QswdfSF/spa-salon-with-beach-view.jpg',
    description: "Entebbe's original boutique hotel, set in a 1940s colonial home with lush gardens and a timeless, hospitable atmosphere."
  },
  {
    id: 'aardvark-safari-lodge',
    name: 'Aardvark Safari Lodge',
    location: 'Queen Elizabeth Park Edge',
    region: 'Queen Elizabeth',
    imageUrl: 'https://i.postimg.cc/HnD18xPJ/uzuri-safaris-tanzania-Ti9XCg6QOn4-unsplash.jpg',
    description: 'An intimate wilderness retreat designed to blend into the landscape, offering raw nature and refined comfort.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'bespoke-itinerary',
    name: 'Signature Itinerary Design',
    slug: 'itinerary-design',
    description: "The architecture of your journey. We don't sell tours; we design personal legends tailored to your pace, privacy, and passion.",
    features: ['Personalized Mapping', 'Rhythm Calibration', 'Exclusive Access'],
    icon_name: 'compass',
    order_index: 1,
    active: true,
    typeLabel: 'Curation'
  },
  {
    id: 'luxury-transport',
    name: 'Luxury Transport & Logistics',
    slug: 'transport-logistics',
    description: 'Navigate the Pearl of Africa in our customized 4x4 Land Cruisers, equipped with pop-up roofs for 360° viewing and onboard refreshments.',
    features: ['4x4 Land Cruisers', '360° Pop-up Roofs', 'Onboard Refreshments'],
    icon_name: 'jeep',
    order_index: 2,
    active: true,
    typeLabel: 'Expedition'
  },
  {
    id: 'elite-guiding',
    name: 'Elite Guiding & Tracking',
    slug: 'guiding-tracking',
    description: 'Our silverback-certified rangers and birding experts are more than guides—they are storytellers who bring the wilderness to life.',
    features: ['Certified Rangers', 'Expert Tracking', 'Nature Storytelling'],
    icon_name: 'binoculars',
    order_index: 3,
    active: true,
    typeLabel: 'Discovery'
  },
  {
    id: 'concierge-support',
    name: 'Concierge & Support',
    slug: 'concierge-support',
    description: 'From securing rare Gorilla permits to 24/7 on-ground support, we handle the complexity so you can enjoy the serenity.',
    features: ['Permit Procurement', 'VIP Protocol', '24/7 Curator Access'],
    icon_name: 'shield',
    order_index: 4,
    active: true,
    typeLabel: 'Stewardship'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    clientName: "Eleanor Vance",
    country: "Switzerland",
    countryCode: "CH",
    tripTaken: "The Grand Savanna Experience",
    rating: 5,
    comment: "Kuzuri authored a journey that felt less like a tour and more like a return to something primal and profound.",
    date: "2024-02-10",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 24
  }
];
