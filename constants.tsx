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

export const ABOUT_CONTENT = {
  legacyLabel: "OUR LEGACY",
  headingMain: "Local Experts.",
  headingSub: "Unique Journeys.",
  signatureStory: "Welcome to Kuzuri Escapades, your gateway to unforgettable adventures across Uganda and beyond! We are passionate about creating immersive travel experiences that connect you with the Pearl of Africa—its breathtaking landscapes, vibrant cultures, and extraordinary wildlife. Whether you're exploring our curated trips, planning a private safari, or seeking a relaxing getaway, we are committed to providing safe, authentic, and inspiring journeys.",
  quote: "True luxury is found in the moments where time stands still, and the heart finds its rhythm in the wild.",
  para1: "Kuzuri Escapades was born from a singular vision: to bridge the gap between raw, untamed wilderness and refined, soulful elegance. We do not just show you the Pearl of Africa; we invite you to breathe it.",
  para2: "From our headquarters at Ham Towers Wandegeya, Room Number H:12, P.O. BOX 202305, Kampala, we craft journeys that are as profound as the roar of a lion and as silent as the mist over Bwindi. We are not just guides; we are the guardians of your Ugandan legacy.",
  stats: [
    { value: "7+", label: "Years of Stewardship" },
    { value: "100%", label: "Native Owned" },
    { value: "∞", label: "Exclusive Access" }
  ]
};

export const DISCOVER_FEATURES = [
  {
    id: 'boat',
    subtitle: 'AQUATIC EXPERIENCE',
    title: 'SERENITY OF WATER SAFARI',
    description: "Hop aboard and experience safari from a whole new perspective. Thanks to its rivers and lakes, Uganda is the perfect place for a boat safari – whether you simply want to relax, observe wildlife up close, or awaken your inner adventurer.",
    detailHeading: 'REGIONAL AQUATIC HIGHLIGHTS',
    subHighlights: [
      { label: 'LAKE VICTORIA', text: "Lake Victoria is one of the world's largest freshwater lakes. Sailing smoothly across this natural gem, you can visit islands like Ngamba Island and its chimpanzee sanctuary, or the Ssese Islands, a prime spot for birdwatchers." },
      { label: 'MURCHISON FALLS', text: "Head to Murchison Falls National Park and experience the ultimate safari with an experienced marine guide. After getting up close to the falls, continue cruising the Victoria Nile Delta, where elephants, hippos, and crocodiles await." },
      { label: 'KAZINGA CHANNEL', text: "Home to the largest population of hippos in Africa. Keep your eyes peeled for the various mammals, birds, crocodiles, and enormous monitor lizards—some so large they can even be mistaken for baby crocodiles!" },
      { label: 'LAKE BUNYONYI', text: "Discover Ugandan culture across twenty-nine islands scattered across the lake. While this boat safari focuses on scenery and birds, your guide will share stories and legends known only to the locals." },
      { label: 'LAKE MBURO', text: "Relaxation at Lake Mburo. In western Uganda lies its smallest lake, yet it boasts an incredibly rich biodiversity. Besides the usual aquatic animals, numerous birds can be spotted, including the endemic African finch." },
      { label: 'LAKE MUTANDA', text: "One of the most beautiful lakes in the country, where the famous Virunga volcanoes rise from the mist. You can swim and fish with the locals; rest assured, there are no hippos or crocodiles in it." },
      { label: 'TIMING', text: "The best time is all the time. During the dry months (June-Aug, Dec-Feb), chances of spotting wildlife are higher as they congregate at the water's edge. If you're eager to experience this, be our guest." }
    ],
    imageUrl: 'https://i.postimg.cc/HkZK72Sk/frames-for-your-heart-yb-Ea-Jqf-RUHs-unsplash.jpg'
  },
  {
    id: 'gorilla',
    subtitle: 'MISTY ENCOUNTERS',
    title: 'GORILLA TREKKING',
    description: 'The soul of the forest. Venture into the ancient Bwindi Impenetrable Forest for a life-altering encounter with the mountain gorilla.',
    detailHeading: 'THE SOUL OF THE ANCIENT FOREST',
    detailDescription: 'Bwindi is not just a forest; it is a living sanctuary of ancient memories. Tracking the mountain gorilla through its misty valleys is a journey that transcends traditional travel—it is a profound reconnection with the natural world. In the silent emerald gloom, meeting the gaze of a silverback is a moment of pure, raw connection.',
    imageUrl: 'https://i.postimg.cc/VkY4Hkrd/Tourism_in_Uganda.jpg'
  },
  {
    id: 'chimpanzee',
    subtitle: 'PRIMATE SYMPHONY',
    title: 'OBSERVE THE CHIMPANZEES',
    description: 'Experience the wild energy of Kibale National Park, the primate capital of the world. Track our closest relatives through the lush tropical rainforest.',
    detailHeading: 'THE RHYTHM OF THE RAINFOREST',
    detailDescription: 'In the heart of Kibale, the air vibrates with the raw energy of our closest living relatives. Observing chimpanzees in their natural habitat is a window into a complex social world of intelligence, play, and survival. As you traverse the forest floor, the overhead calls and rustling canopy create an immersive primate symphony.',
    imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'planning',
    subtitle: 'THE PERFECT RHYTHM',
    title: 'PLANNING & BOOKING',
    description: 'The best time is all the time. Discover the dry months that offer the ultimate wildlife convergence at the water’s edge.',
    detailHeading: 'PLANNING YOUR JOURNEY',
    detailDescription: "During the dry months of June, July, August, December, January, and February, the chances of spotting Africa's famous wildlife are higher, as the animals congregate at the water's edge. If you're eager to experience one (or all) of these boat safaris yourself, be our guest – literally.",
    imageUrl: 'https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=1200'
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
    id: 'boat-safaris-uganda',
    name: 'SERENITY OF WATER SAFARI',
    slug: 'boat-safaris-uganda',
    duration_days: 1,
    duration_nights: 0,
    price_from: 250,
    price_was: 320,
    currency: '$',
    category: 'Aquatic Experience',
    description: "Experience Uganda from the water. Our signature aquatic safaris take you through the country's most iconic lakes and rivers, offering a perspective of the Pearl of Africa that can only be found from the bow of a private vessel.",
    highlights: ['Private Nile Cruise', 'Sunset over Kazinga', 'Hippopotamus Close-Encounters'],
    imageUrls: ['https://i.postimg.cc/Dfcx09nJ/fishing-boat-sea-thailand.jpg'],
    featured: true
  },
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
    imageUrls: ['https://i.postimg.cc/TY6XvMQy/closeup-shot-group-cranes-field-181624-19833(1).jpg'],
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
    imageUrls: ['https://i.postimg.cc/J0r1cfsX/90e57c35-c104-4c92-b085-d10243cac4cd.jpg'],
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
    imageUrls: ['https://i.postimg.cc/9f9FWt3z/9be3ba5d-30ad-463d-9fb9-8226e0f67943.jpg'],
    featured: true
  },
  {
    id: 'gorilla-quick-3d',
    name: '3 Days Gorilla Quick Escape',
    slug: 'gorilla-quick-3d',
    duration_days: 3,
    duration_nights: 2,
    price_from: 1450,
    currency: '$',
    category: 'Primate Swift',
    description: 'A focused, high-intensity escape into the heart of Bwindi for those seeking a direct encounter with the gentle giants.',
    highlights: ['Bwindi Impenetrable', 'Gorilla Tracking', 'Misty Highlands'],
    imageUrls: ['https://i.postimg.cc/d03qBkbL/Kyambura_Game_Reserve_Chimpanzee_trekking_750x400.jpg'],
    featured: true
  },
  {
    id: 'murchison-explorer-7d',
    name: '7 Days Murchison Falls Explorer',
    slug: 'murchison-explorer-7d',
    duration_days: 7,
    duration_nights: 6,
    price_from: 2850,
    currency: '$',
    category: 'Northern Wilds',
    description: 'Complete immersion into the thundering power of the Nile and the vast savannahs of Murchison Falls National Park.',
    highlights: ['Bottom of the Falls Cruise', 'Savannah Game Drives', 'Budongo Chimpanzees'],
    imageUrls: ['https://i.postimg.cc/RhFXcb5J/aruu_falls_1_750x450.png'],
    featured: true
  },
  {
    id: 'kidepo-valley-5d',
    name: '5 Days Kidepo Valley Adventure',
    slug: 'kidepo-valley-5d',
    duration_days: 5,
    duration_nights: 4,
    price_from: 3120,
    currency: '$',
    category: 'Remote Isolation',
    description: 'Venture to the far north to discover the most rugged and isolated wilderness in the Pearl of Africa.',
    highlights: ['Naruso Valley Game Drives', 'Karamoja Culture', 'Apoka Wilderness'],
    imageUrls: ['https://i.postimg.cc/Px4HxSSt/1979d9c0_1bbb_4bdb_97e0_f9287cc86395.jpg'],
    featured: true
  },
  {
    id: 'karamoja-cultural-6d',
    name: '6 Days Karamoja Cultural Immersion',
    slug: 'karamoja-cultural-6d',
    duration_days: 6,
    duration_nights: 5,
    price_from: 1980,
    currency: '$',
    category: 'Ancestral Roots',
    description: 'Live the life of the Karamojong people, learning their traditions, rhythms, and deep connection to the land.',
    highlights: ['Manyatta Stay', 'Traditional Crafts', 'Plains Discovery'],
    imageUrls: ['https://i.postimg.cc/Kv7JNMzm/Kara_Tunga_Tours_Life_in_Manyatta_5_e1643904828756.webp'],
    featured: true
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
    title: "A Primal Return to Nature",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    country: "Switzerland",
    countryCode: "CH",
    tripTaken: "The Grand Savanna Experience",
    rating: 5,
    comment: "Kuzuri authored a journey that felt less like a tour and more like a return to something primal and profound. Every detail was curated with an invisible hand of excellence.",
    date: "2024-02-10",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 24
  },
  {
    id: 2,
    clientName: "Marcus Thorne",
    title: "Misty Mountain Magic",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    country: "United Kingdom",
    countryCode: "GB",
    tripTaken: "5 Days Bwindi Gorilla Trekking",
    rating: 5,
    comment: "The silence of the Bwindi forest is a luxury I never knew existed. Meeting the mountain gorillas was curated with absolute excellence by Nasif. An experience that stays with you forever.",
    date: "2024-01-15",
    verified: true,
    approved: true,
    published: true,
    responses: [{ author: "Lead Curator", text: "It was an honor to steward your journey, Marcus. The silence is where the soul breathes.", date: "2024-01-16" }],
    helpful: 42
  },
  {
    id: 3,
    clientName: "Emilia Rossi",
    title: "Magical Murchison Falls",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    country: "Italy",
    countryCode: "IT",
    tripTaken: "Murchison Falls Explorer",
    rating: 5,
    comment: "The thundering Nile and the golden horizons were breathtaking. Absolute excellence in logistics and guiding. A truly native perspective that revealed the secret soul of Uganda.",
    date: "2023-11-28",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 19
  },
  {
    id: 4,
    clientName: "Julianne Moore",
    title: "The Ultimate African Odyssey",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    country: "United States",
    countryCode: "US",
    tripTaken: "Grand Uganda Odyssey",
    rating: 5,
    comment: "Two weeks of absolute perfection. From the tree-climbing lions to the quiet evenings on the Nile. Kuzuri Escapades is the definitive choice for discerning world travelers.",
    date: "2023-10-12",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 56
  },
  {
    id: 5,
    clientName: "Arjun Mehta",
    title: "Primate Perfection",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    country: "India",
    countryCode: "IN",
    tripTaken: "Primate Symphony",
    rating: 5,
    comment: "Tracking chimpanzees in Kibale was a high-fidelity experience. The native stewardship made all the difference. We felt safe, respected, and deeply connected to nature.",
    date: "2023-09-05",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 31
  }
];