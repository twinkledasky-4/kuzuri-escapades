
import { Destination, Tour, Service } from './types.ts';

export const HERO_SLIDES = [
  {
    id: 'primate',
    subtitle: 'The Primate Odyssey',
    title: 'A Private <br /><span className="italic font-light">Narrative Awaits.</span>',
    description: 'Venture into the ancient emerald mists of Bwindi, where the mountain gorilla reigns in profound silence.',
    imageUrl: 'https://i.postimg.cc/w3F5dDyf/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg',
    type: 'image'
  },
  {
    id: 'savannah',
    subtitle: 'Savannah Sovereignty',
    title: 'Horizons <br /><span className="italic font-light">Without Borders.</span>',
    description: 'Experience the golden rhythm of the Albertine Rift, where the wild moves with a quiet, untamed dignity.',
    imageUrl: 'https://i.postimg.cc/XpJfNXdx/10-Must-Visit-Tourist-Attractions-in-Uganda-in-2025.webp',
    type: 'image'
  },
  {
    id: 'nile',
    subtitle: 'Aquatic Narratives',
    title: 'The Source <br /><span className="italic font-light">of Every Story.</span>',
    description: 'Drift upon the Albert Nile at dusk, witnessing the power of Murchison Falls in total, curated solitude.',
    imageUrl: 'https://i.postimg.cc/7f63Pb0N/best-african-safari-trips-tours.jpg',
    type: 'image'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'bwindi',
    name: 'Bwindi Impenetrable Forest',
    slug: 'bwindi-impenetrable-forest',
    tagline: 'Mists, Mountains & Monarchs',
    description: 'An ancient sanctuary where emerald canopies meet the clouds. Home to the mountain gorilla, this primal landscape offers a quiet, profound connection to our origins.',
    images: [
      'https://i.postimg.cc/qzRsBgyD/images.jpg',
      'https://i.postimg.cc/w3F5dDyf/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg',
      'https://i.postimg.cc/hf59Xg0W/Tanzani-Wildlife-tour-1536x1152.jpg'
    ],
    highlights: ['Gorilla Curation', 'Batwa Forest Wisdom', 'Silent Canopy Walks'],
    featured: true,
    order_index: 1
  },
  {
    id: 'murchison',
    name: 'Murchison Falls',
    slug: 'murchison-falls',
    tagline: 'The Nile’s Powerful Pulse',
    description: 'Where the Victoria Nile surges through a narrow gorge with thunderous power. A landscape of golden savannahs and aquatic giants.',
    images: [
      'https://i.postimg.cc/ykdm6WcP/beyond-uganda-national-parks-uncover-western-ugandas-hidden-gems-kitarafoundation-beyondnationalpark.webp',
      'https://i.postimg.cc/7f63Pb0N/best-african-safari-trips-tours.jpg',
      'https://i.postimg.cc/TpwV2hnY/top-things-to-do-in-uganda.jpg'
    ],
    highlights: ['The Nile Cascade', 'Delta Birding', 'River Cruising'],
    featured: true,
    order_index: 2
  },
  {
    id: 'queen-elizabeth',
    name: 'Queen Elizabeth Plains',
    slug: 'queen-elizabeth-plains',
    tagline: 'Shadows of the Savannah',
    description: 'A diverse tapestry of crater lakes and golden plains. Famous for tree-climbing lions and the wildlife-rich Kazinga Channel.',
    images: [
      'https://i.postimg.cc/ZCR8Y0pg/Lake-Mburo-National-Park-750x450-1-750x450.jpg',
      'https://i.postimg.cc/XpJfNXdx/10-Must-Visit-Tourist-Attractions-in-Uganda-in-2025.webp',
      'https://i.postimg.cc/QHtQNVcM/Top-8-Safari-Activities-in-Uganda-750x450.jpg'
    ],
    highlights: ['Tree-Climbing Lions', 'Kazinga Channel', 'Explosion Craters'],
    featured: true,
    order_index: 3
  },
  {
    id: 'kidepo',
    name: 'Kidepo Valley',
    slug: 'kidepo-valley',
    tagline: 'The Forgotten Eden',
    description: 'A rugged, remote frontier bordering Sudan. Kidepo offers a wild, untamed experience often called Africa’s most beautiful park.',
    images: [
      'https://i.postimg.cc/w7vXx3Lr/Kara-Tunga-Tours-Life-in-Manyatta-5-e1643904828756.webp',
      'https://i.postimg.cc/F7BjYmx4/Tourism-in-Uganda.jpg',
      'https://i.postimg.cc/MvFynxYJ/Tourism-Activities-in-Uganda.jpg'
    ],
    highlights: ['Isolated Wilderness', 'Karamoja Culture', 'Unique Species'],
    featured: true,
    order_index: 4
  }
];

export const TOURS: Tour[] = [
  {
    id: 'primate-peaks-explorer',
    name: 'Primate & Peaks Explorer',
    slug: 'primate-and-peaks-explorer',
    duration_days: 10,
    duration_nights: 9,
    price_from: 6200,
    currency: 'USD',
    category: 'Premium Series',
    description: 'An intensive exploration of the Albertine Rift’s high-altitude wonders. Focus on rare primates and the mystical volcanic peaks of the deep southwest.',
    highlights: ['Gorilla Trekking', 'Chimp Habituation', 'Golden Monkey Tracking', 'Volcanic Hiking'],
    inclusions: [
      '1 gorilla permit, 1 golden monkey permit',
      'Chimpanzee habituation experience',
      'Boutique eco-lodge accommodation',
      'Private vehicle & professional guide',
      'All meals (Breakfast, Lunch, Dinner)',
      'Park fees & conservation contributions',
      'Airport transfers'
    ],
    exclusions: [
      'International flights',
      'Visa fees ($50 USD)',
      'Optional activities',
      'Travel insurance'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Entebbe', detail: 'Boutique hotel check-in and sunset Lake Victoria cruise.' },
      { day: '2-3', title: 'Kibale Forest', detail: 'Chimpanzee habituation experience and Bigodi wetland walk.' },
      { day: '4-6', title: 'Bwindi Impenetrable', detail: 'Gorilla trekking, community visits, and optional second trek.' },
      { day: '7-8', title: 'Mgahinga Gorilla NP', detail: 'Golden monkey tracking and adventurous volcanic hiking.' },
      { day: 9, title: 'Lake Bunyonyi', detail: 'Canoe excursion on the lake of a thousand islands and eco-lodge relaxation.' },
      { day: 10, title: 'Return to Entebbe', detail: 'Scenic transfer and international departure.' }
    ],
    imageUrls: [
      'https://i.postimg.cc/hf59Xg0W/Tanzani-Wildlife-tour-1536x1152.jpg',
      'https://i.postimg.cc/QHtQNVcM/Top-8-Safari-Activities-in-Uganda-750x450.jpg',
      'https://i.postimg.cc/F7BjYmxH/tour-of-karamoja-uganda-bicycle-event-stage-1-oct-2022-37.jpg',
      'https://i.postimg.cc/xcCvjqMt/culture.jpg'
    ],
    featured: true,
    order_index: 1
  },
  {
    id: 'grand-uganda-odyssey',
    name: 'The Grand Uganda Odyssey',
    slug: 'grand-uganda-odyssey',
    duration_days: 14,
    duration_nights: 13,
    price_from: 8500,
    currency: 'USD',
    category: 'Premium Series',
    description: 'The definitive Ugandan narrative. A 14-day masterclass in private curation, featuring double gorilla permits and VIP heritage tours.',
    highlights: ['2 Gorilla Permits', 'VIP Airport Transfer', 'Luxury Lodge Stays'],
    inclusions: [
      'All park entry fees & permits (2 gorilla permits)',
      'Luxury lodge accommodation throughout',
      'Private 4x4 safari vehicle with expert guide',
      'All meals (breakfast, lunch, dinner)',
      'Airport transfers (VIP service)',
      'Bottled water & refreshments',
      'Travel insurance assistance'
    ],
    exclusions: [
      'International flights',
      'Visa fees',
      'Personal expenses & gratuities',
      'Alcoholic beverages'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kampala', detail: 'VIP airport transfer, boutique hotel check-in.' },
      { day: 2, title: 'Kampala City Heritage', detail: 'Curated cultural tours and local artisan ateliers.' },
      { day: '3-4', title: 'Murchison Falls', detail: 'Private boat launch and golden game drives.' },
      { day: '5-6', title: 'Kibale Forest', detail: 'Chimpanzee tracking and Bigodi wetlands.' },
      { day: '7-8', title: 'Savannah Sovereignty', detail: 'Tree-climbing lions and Kazinga Channel cruises.' },
      { day: '9-11', title: 'Bwindi Mists', detail: 'Double gorilla trekking and Batwa forest wisdom.' },
      { day: 12, title: 'Lake Mburo Serenity', detail: 'Lakeside wellness and horseback safaris.' },
      { day: '13-14', title: 'The Source', detail: 'Return to Entebbe for international departure.' }
    ],
    imageUrls: [
      'https://i.postimg.cc/F7BjYmx4/Tourism-in-Uganda.jpg',
      'https://i.postimg.cc/MvFynxYJ/Tourism-Activities-in-Uganda.jpg',
      'https://i.postimg.cc/vcNW4Mvm/Uganda-Food-Tours-and-Safaris-3.jpg',
      'https://i.postimg.cc/4md64npx/local-community-tourism.png'
    ],
    featured: true,
    order_index: 2
  },
  {
    id: 'murchison-falls-explorer',
    name: 'Murchison Falls Explorer',
    slug: 'murchison-falls-explorer',
    duration_days: 4,
    duration_nights: 3,
    price_from: 1800,
    currency: 'USD',
    category: 'Aquatic Narratives',
    description: 'Witness the raw power of the Nile. A 4-day intensive safari through the delta and the thunderous falls.',
    highlights: ['Nile Boat Launch', 'Big Game Drives', 'Birding Safari'],
    imageUrls: [
      'https://i.postimg.cc/7f63Pb0N/best-african-safari-trips-tours.jpg',
      'https://i.postimg.cc/ykdm6WcP/beyond-uganda-national-parks-uncover-western-ugandas-hidden-gems-kitarafoundation-beyondnationalpark.webp'
    ],
    featured: true,
    order_index: 3
  },
  {
    id: 'lake-mburo-serenity',
    name: 'Lake Mburo Serenity',
    slug: 'lake-mburo-serenity',
    duration_days: 3,
    duration_nights: 2,
    price_from: 950,
    currency: 'USD',
    category: 'Boutique Escapes',
    description: 'An intimate lakeside retreat featuring night game drives and unique horseback safaris among the zebras.',
    highlights: ['Horseback Safari', 'Night Game Drive', 'Lakeside Wellness'],
    imageUrls: [
      'https://i.postimg.cc/ZCR8Y0pg/Lake-Mburo-National-Park-750x450-1-750x450.jpg',
      'https://i.postimg.cc/XpJfNXdx/10-Must-Visit-Tourist-Attractions-in-Uganda-in-2025.webp'
    ],
    featured: true,
    order_index: 4
  }
];

export const SERVICES: Service[] = [
  {
    id: 'luxury-stays',
    name: 'Hotel Bookings & Boutique Lodges',
    slug: 'hotel-bookings-and-boutique-lodges',
    typeLabel: 'Luxury Stays',
    icon_name: 'hotel',
    description: 'Handpicked accommodations from intimate eco-lodges to five-star luxury resorts. Every stay reflects Uganda\'s natural beauty and world-class hospitality.',
    features: [
      'Luxury safari lodges',
      'Boutique city hotels',
      'Eco-friendly tented camps',
      'Private villas & exclusive retreats'
    ],
    order_index: 1,
    active: true
  },
  {
    id: 'vip-protocol',
    name: 'VIP Airport Pick-ups',
    slug: 'vip-airport-pick-ups',
    typeLabel: 'Protocol',
    icon_name: 'protocol',
    description: 'Begin your journey stress-free with our meet-and-greet service. From Entebbe International Airport to your first destination, we handle every detail.',
    features: [
      'Professional chauffeur service',
      'Premium vehicles (Land Cruisers, sedans)',
      'Arrival lounge access',
      'Fast-track immigration assistance'
    ],
    order_index: 2,
    active: true
  },
  {
    id: 'premium-fleet',
    name: 'Premium Car Hire',
    slug: 'premium-car-hire',
    typeLabel: 'Fleet',
    icon_name: 'fleet',
    description: 'Self-drive or chauffeur-driven options in well-maintained 4x4 safari vehicles. GPS-equipped, fully insured, and ready for Uganda\'s diverse terrain.',
    features: [
      'Toyota Land Cruiser V8 (safari-spec)',
      'Toyota RAV4 (urban & light touring)',
      'Luxury sedans for city transfers',
      'Custom itinerary planning included'
    ],
    order_index: 3,
    active: true
  },
  {
    id: 'expert-guides',
    name: 'Professional Tour Guide Services',
    slug: 'professional-tour-guide-services',
    typeLabel: 'Guiding',
    icon_name: 'guiding',
    description: 'Our certified guides are storytellers, naturalists, and cultural ambassadors. Fluent in multiple languages, they transform sightseeing into soul-stirring experiences.',
    features: [
      'Wildlife tracking specialists',
      'Birding experts (1,000+ species)',
      'Cultural heritage interpreters',
      'Photography guides'
    ],
    order_index: 4,
    active: true
  }
];
