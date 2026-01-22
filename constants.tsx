
import { Destination, Tour, Service } from './types.ts';

export const HERO_SLIDES = [
  {
    id: 'primate',
    subtitle: 'The Primate Odyssey',
    title: 'A Private <br /><span className="italic font-light">Narrative Awaits.</span>',
    description: 'Venture into the ancient emerald mists of Bwindi, where the mountain gorilla reigns in profound silence.',
    imageUrl: 'https://i.postimg.cc/dVLtYNBN/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg',
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
    imageUrl: 'https://i.postimg.cc/przVFwg6/2-Days-Murchison-Falls-Safari-Uganda-Wildlife-Safari-in-Uganda-Tour-Murchison-Falls-National-Park-75.jpg',
    type: 'image'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'bwindi',
    name: 'Bwindi Impenetrable Forest',
    slug: 'bwindi-impenetrable-forest',
    tagline: 'Mists, Mountains & Monarchs',
    description: 'An ancient sanctuary where emerald canopies meet the clouds. Home to half of the world\'s mountain gorillas, this primal landscape offers a quiet, profound connection to our origins in a setting of unparalleled biodiversity.',
    images: [
      'https://i.postimg.cc/dVLtYNBN/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg',
      'https://i.postimg.cc/qzRsBgyD/images.jpg',
      'https://i.postimg.cc/zf41FdSZ/Tourism-Destinations-in-Uganda-580x450.jpg'
    ],
    highlights: ['Gorilla Curation', 'Batwa Forest Wisdom', 'Silent Canopy Walks', 'Endemic Bird Watching'],
    featured: true,
    order_index: 1
  },
  {
    id: 'murchison',
    name: 'Murchison Falls National Park',
    slug: 'murchison-falls',
    tagline: 'The Nile’s Dramatic Outburst',
    description: 'Uganda\'s largest national park offers dramatic landscapes where the Victoria Nile crashes through a 7-meter gorge, creating the world\'s most powerful waterfall. Golden game drives reveal the "Big Five" against a backdrop of the Albertine Rift.',
    images: [
      'https://i.postimg.cc/przVFwg6/2-Days-Murchison-Falls-Safari-Uganda-Wildlife-Safari-in-Uganda-Tour-Murchison-Falls-National-Park-75.jpg',
      'https://i.postimg.cc/7f63Pb0N/best-african-safari-trips-tours.jpg',
      'https://i.postimg.cc/ykdm6WcP/beyond-uganda-national-parks-uncover-western-ugandas-hidden-gems-kitarafoundation-beyondnationalpark.webp'
    ],
    highlights: [
      'Nile Boat Launch: Cruise to the base of the thundering falls.',
      'Delta Game Drives: Lions, giraffes, and elephants in golden light.',
      'Shoebill Stork Tracking: A rare prehistoric birding experience.'
    ],
    featured: true,
    order_index: 2
  },
  {
    id: 'queen-elizabeth',
    name: 'Queen Elizabeth Plains',
    slug: 'queen-elizabeth-plains',
    tagline: 'Savanna Meets the Crater Lakes',
    description: 'A mosaic of ecosystems from rainforest to savanna. Famous for its tree-climbing lions of Ishasha and the elephant-rich Kazinga Channel, this park is the "Medley of Wonders" at the heart of the Rift Valley.',
    images: [
      'https://i.postimg.cc/0yWvb5zq/herd-elephants-bathing-kazinga-channel-260nw-2690502067.jpg',
      'https://i.postimg.cc/ZCR8Y0pg/Lake-Mburo-National-Park-750x450-1-750x450.jpg',
      'https://i.postimg.cc/XpJfNXdx/10-Must-Visit-Tourist-Attractions-in-Uganda-in-2025.webp'
    ],
    highlights: [
      'Kazinga Channel Cruise: Highest concentration of hippos in Africa.',
      'Ishasha Lion Tracking: Witness the rare tree-climbing lions.',
      'Chimpanzee Gorge: Tracking primates in the Kyambura sunken forest.'
    ],
    featured: true,
    order_index: 3
  },
  {
    id: 'kidepo',
    name: 'Kidepo Valley',
    slug: 'kidepo-valley',
    tagline: 'The Forgotten Eden',
    description: 'A rugged, remote frontier bordering Sudan. Often called Africa’s most beautiful park, Kidepo offers a wild, untamed experience where silence is profound and the landscapes are vast and cinematic.',
    images: [
      'https://i.postimg.cc/MvFynxYJ/Tourism-Activities-in-Uganda.jpg',
      'https://i.postimg.cc/F7BjYmx4/Tourism-in-Uganda.jpg',
      'https://i.postimg.cc/zf41FdSZ/Tourism-Destinations-in-Uganda-580x450.jpg'
    ],
    highlights: ['Isolated Wilderness', 'Karamoja Cultural Immersion', 'Cheetah & Ostrich Tracking'],
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
    highlights: ['Gorilla Trekking', 'Chimp Habituation', 'Volcanic Hiking'],
    inclusions: [
      'Gorilla & Chimp permits',
      'Luxury eco-lodge stays',
      'Private 4x4 transport',
      'Expert naturalist guide'
    ],
    imageUrls: [
      'https://i.postimg.cc/d03qBkbL/Kyambura-Game-Reserve-Chimpanzee-trekking-750x400.jpg',
      'https://i.postimg.cc/hf59Xg0W/Tanzani-Wildlife-tour-1536x1152.jpg',
      'https://i.postimg.cc/QHtQNVcM/Top-8-Safari-Activities-in-Uganda-750x450.jpg'
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
    highlights: ['2 Gorilla Permits', 'Private Air Transfers', 'Luxury Lodge Stays'],
    imageUrls: [
      'https://i.postimg.cc/Mpd6Vbrs/CTC-Conservation-center-lion-cubs-scaled.jpg',
      'https://i.postimg.cc/F7BjYmx4/Tourism-in-Uganda.jpg',
      'https://i.postimg.cc/MvFynxYJ/Tourism-Activities-in-Uganda.jpg'
    ],
    featured: true,
    order_index: 2
  },
  {
    id: 'aquatic-narratives-nile',
    name: 'Aquatic Narratives: The Nile',
    slug: 'aquatic-narratives-nile',
    duration_days: 5,
    duration_nights: 4,
    price_from: 2400,
    currency: 'USD',
    category: 'The Nile Series',
    description: 'Follow the lifeblood of Uganda from the source at Jinja to the thundering base of Murchison Falls.',
    highlights: ['Source of the Nile', 'Murchison Falls Boat Safari', 'White Water Wellness'],
    imageUrls: [
      'https://i.postimg.cc/przVFwg6/2-Days-Murchison-Falls-Safari-Uganda-Wildlife-Safari-in-Uganda-Tour-Murchison-Falls-National-Park-75.jpg',
      'https://i.postimg.cc/TpwV2hnY/top-things-to-do-in-uganda.jpg',
      'https://i.postimg.cc/ykdm6WcP/beyond-uganda-national-parks-uncover-western-ugandas-hidden-gems-kitarafoundation-beyondnationalpark.webp'
    ],
    featured: true,
    order_index: 3
  }
];

export const SERVICES: Service[] = [
  {
    id: 'luxury-stays',
    name: 'Sanctuaries & Boutique Lodges',
    slug: 'hotel-bookings-and-boutique-lodges',
    typeLabel: 'Luxury Stays',
    icon_name: 'hotel',
    description: 'Handpicked accommodations from intimate eco-lodges to five-star luxury resorts. Every stay reflects Uganda\'s natural beauty and world-class hospitality.',
    features: [
      'Luxury safari lodges',
      'Boutique city hotels',
      'Eco-friendly tented camps',
      'Private villas'
    ],
    order_index: 1,
    active: true
  },
  {
    id: 'vip-protocol',
    name: 'VIP Protocol & Transfers',
    slug: 'vip-airport-pick-ups',
    typeLabel: 'Protocol',
    icon_name: 'protocol',
    description: 'Begin your journey stress-free with our meet-and-greet service. From Entebbe International Airport to your first destination, we handle every detail.',
    features: [
      'Chauffeur service',
      'Arrival lounge access',
      'Fast-track immigration'
    ],
    order_index: 2,
    active: true
  },
  {
    id: 'expert-guides',
    name: 'Native Guiding Masters',
    slug: 'professional-tour-guide-services',
    typeLabel: 'Guiding',
    icon_name: 'guiding',
    description: 'Our certified guides are storytellers, naturalists, and cultural ambassadors. Fluent in multiple languages, they transform sightseeing into soul-stirring experiences.',
    features: [
      'Wildlife trackers',
      'Birding experts',
      'Cultural interpreters'
    ],
    order_index: 4,
    active: true
  }
];
