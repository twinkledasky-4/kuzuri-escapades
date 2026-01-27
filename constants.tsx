
import { Destination, Tour, Service, Review, Lodge } from './types.ts';

export const HERO_SLIDES = [
  {
    id: 'safari-crossroad',
    subtitle: 'Bespoke Private Odysseys',
    title: 'Safari in <span class="italic text-[#D4AF37]">Uganda</span>',
    description: 'From fascinating wildlife to vibrant urban centers, from tranquil lake shores to lush rainforests, Uganda is a land of incredible diversity that will inspire you to explore it all! Its breathtaking landscapes and rich cultural heritage have inspired countless tales of adventure and discovery. So, embark on your own journey to this remarkable jewel of East Africa and write your own chapter to share an exceptional experience!',
    imageUrl: 'https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg',
    cta: 'Begin Your Odyssey'
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
    id: 'west-parks-12d',
    name: '12 DAYS Heading to the great parks of the west',
    slug: 'great-parks-west-12d',
    duration_days: 12,
    duration_nights: 11,
    price_from: 3358,
    currency: '€',
    category: 'The Western Frontier',
    description: 'A comprehensive exploration of the Albertine Rift Valley, from the crater lakes to the misty peaks of the Rwenzori.',
    highlights: ['Queen Elizabeth Park', 'Bwindi Forest', 'Crater Lakes'],
    imageUrls: ['https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=85&w=1200'],
    featured: true
  },
  {
    id: 'rhinos-forest-10d',
    name: '10-DAY SAFARI Between rhinos, lakes & forests',
    slug: 'rhinos-lakes-forests-10d',
    duration_days: 10,
    duration_nights: 9,
    price_from: 2238,
    currency: '€',
    category: 'Wildlife Sanctuary',
    description: 'A journey of rare encounters, tracking rhinos on foot at Ziwa and exploring the deep silence of the rainforest.',
    highlights: ['Ziwa Rhino Sanctuary', 'Murchison Falls', 'Kibale Forest'],
    imageUrls: ['https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=85&w=1200'],
    featured: true
  },
  {
    id: 'adventure-13d',
    name: '13 DAYS OF ADVENTURE Hiking, Rafting and Cycling',
    slug: 'adventure-hiking-rafting-cycling-13d',
    duration_days: 13,
    duration_nights: 12,
    price_from: 2905,
    currency: '€',
    category: 'Active Odyssey',
    description: 'For the spirited traveler: conquer the Nile rapids, cycle through crater landscapes, and hike the foothills of the sun.',
    highlights: ['White Water Rafting', 'Mt. Elgon Hiking', 'Cycling Trails'],
    imageUrls: ['https://images.unsplash.com/photo-1530733740214-1745173c3a44?auto=format&fit=crop&q=85&w=1200'],
    featured: true
  },
  {
    id: 'primate-9d',
    name: '9 DAYS meeting the gorillas and chimpanzees',
    slug: 'gorillas-chimpanzees-9d',
    duration_days: 9,
    duration_nights: 8,
    price_from: 2694,
    currency: '€',
    category: 'Primate Encounters',
    description: 'An intimate pilgrimage to the hearts of the great apes. Two life-changing encounters in the dense Ugandan jungles.',
    highlights: ['Gorilla Trekking', 'Chimpanzee Habituation', 'Canopy Walks'],
    imageUrls: ['https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=85&w=1200'],
    featured: true
  }
];

export const LODGES: Lodge[] = [
  {
    id: 'ishasha-jungle-lodge',
    name: 'Ishasha Jungle Lodge',
    location: 'Ishasha Sector',
    region: 'Queen Elizabeth',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=85&w=1200',
    description: 'Nestled along the Ntungwe River, this eco-lodge is the perfect base for spotting the famous tree-climbing lions of Ishasha.'
  },
  {
    id: 'kibale-tourist-safari-lodge',
    name: 'Kibale Tourist Safari Lodge',
    location: 'Kibale Forest Boundary',
    region: 'Kibale',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=85&w=1200',
    description: 'A sanctuary of comfort on the edge of the primate capital, offering serene views and proximity to chimpanzee trekking trails.'
  },
  {
    id: 'boma-hotel-entebbe',
    name: 'The Boma Hotel Entebbe',
    location: 'Entebbe',
    region: 'Entebbe',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=1200',
    description: "Entebbe's original boutique hotel, set in a 1940s colonial home with lush gardens and a timeless, hospitable atmosphere."
  },
  {
    id: 'aardvark-safari-lodge',
    name: 'Aardvark Safari Lodge',
    location: 'Queen Elizabeth Park Edge',
    region: 'Queen Elizabeth',
    imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=85&w=1200',
    description: 'An intimate wilderness retreat designed to blend into the landscape, offering raw nature and refined comfort.'
  },
  {
    id: 'buffalo-safari-lodge',
    name: 'Buffalo Safari Lodge',
    location: 'Kazinga Channel Area',
    region: 'Queen Elizabeth',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e13?auto=format&fit=crop&q=85&w=1200',
    description: 'Offering breathtaking vistas of the Kazinga Channel and savannah plains, where wildlife frequently wanders through the grounds.'
  },
  {
    id: 'travellers-rest-hotel',
    name: 'Travellers Rest Hotel',
    location: 'Kisoro',
    region: 'Mgahinga',
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=85&w=1200',
    description: 'A historic base for mountain explorers, famously known as the second home of primatologist Dian Fossey.'
  },
  {
    id: 'masindi-hotel',
    name: 'Masindi Hotel',
    location: 'Masindi Town',
    region: 'Masindi',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=85&w=1200',
    description: "Uganda's oldest hotel, steeped in history since 1923, offering a colonial charm near the gateway to Murchison Falls."
  },
  {
    id: 'arcadia-cottages',
    name: 'Arcadia Cottages',
    location: 'Lake Bunyonyi',
    region: 'Kabale',
    imageUrl: 'https://images.unsplash.com/photo-1449156001931-82992a47dca0?auto=format&fit=crop&q=85&w=1200',
    description: 'Perched on a hill with panoramic views of Lake Bunyonyi’s emerald islands, a perfect place for reflection and quietude.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'private-concierge',
    name: 'Private Curator Concierge',
    slug: 'concierge',
    description: 'Seamless, invisible logistics managed by native experts who anticipate your every temperament.',
    features: ['VIP Airport Protocol', 'Fast-Track Immigration', '24/7 Curator Access'],
    icon_name: 'protocol',
    order_index: 1,
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
    tripTaken: "The Grand Savanna Odyssey",
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
