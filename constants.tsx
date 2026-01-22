import { Destination, Tour, Service, Review } from './types.ts';

export const HERO_SLIDES = [
  {
    id: 'safari-crossroad',
    subtitle: 'The Call of the Wild',
    title: 'Journey Beyond <br /><span className="italic font-light">The Ordinary.</span>',
    description: 'Bespoke Ugandan escapades crafted for the discerning traveler, where every path leads to wonder.',
    imageUrl: 'https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg',
    type: 'image'
  },
  {
    id: 'primate',
    subtitle: 'The Primate Odyssey',
    title: 'A Private <br /><span className="italic font-light">Narrative Awaits.</span>',
    description: 'Venture into the ancient emerald mists of Bwindi, where the mountain gorilla reigns in profound silence.',
    imageUrl: 'https://i.postimg.cc/dVLtYNBN/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg',
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
    description: 'An ancient sanctuary where emerald canopies meet the clouds. Home to half of the world\'s mountain gorillas.',
    images: ['https://i.postimg.cc/qzRsBgyD/images.jpg', 'https://i.postimg.cc/dVLtYNBN/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg'],
    highlights: ['Gorilla Curation', 'Batwa Forest Wisdom', 'Silent Canopy Walks'],
    featured: true,
    order_index: 1
  },
  {
    id: 'murchison',
    name: 'Murchison Falls National Park',
    slug: 'murchison-falls',
    tagline: 'The Nile’s Dramatic Outburst',
    description: 'Uganda\'s largest national park where the Nile crashes through a narrow gorge.',
    images: ['https://i.postimg.cc/przVFwg6/2-Days-Murchison-Falls-Safari-Uganda-Wildlife-Safari-in-Uganda-Tour-Murchison-Falls-National-Park-75.jpg'],
    highlights: ['Nile Boat Launch', 'Big Five Game Drives', 'Top of the Falls Hike'],
    featured: true,
    order_index: 2
  }
];

export const TOURS: Tour[] = [
  {
    id: 'bwindi-gorilla-5d',
    name: 'Bwindi Gorilla Odyssey',
    slug: 'bwindi-gorilla-5d',
    duration_days: 5,
    duration_nights: 4,
    price_from: 3400,
    currency: 'USD',
    category: 'Gorilla Tours',
    description: 'An intimate encounter with the gentle giants of Bwindi. Includes luxury eco-lodge stays and expert-led trekking.',
    highlights: ['Guaranteed Gorilla Permit', 'Rainforest Lodge Stay', 'Community Walk'],
    inclusions: ['Gorilla Permit', 'Boutique Lodging', 'Private 4x4 Transport', 'Expert Guide'],
    exclusions: ['International Flights', 'Travel Insurance', 'Personal Tips'],
    itinerary: [
      { day: 1, title: 'Arrival & Entebbe Charm', detail: 'Meet your curator at Entebbe and settle into a boutique lakeside sanctuary.' },
      { day: 2, title: 'Fly to the Forest', detail: 'Scenic domestic flight to Bwindi. Afternoon forest walk and Batwa wisdom.' },
      { day: 3, title: 'The Gorilla Narrative', detail: 'The main event. Tracking the monarchs in their ancient emerald mist.' },
      { day: 4, title: 'Reflection & Canopy', detail: 'Guided canopy walk and optional spa rituals in the wild.' },
      { day: 5, title: 'Departure', detail: 'Scenic flight back to Entebbe for your international connection.' }
    ],
    imageUrls: ['https://i.postimg.cc/qzRsBgyD/images.jpg', 'https://i.postimg.cc/dVLtYNBN/02-Top-10-Best-Tourist-Attractions-and-Places-To-Visit-in-Uganda-BW-1600px.jpg'],
    featured: true
  },
  {
    id: 'murchison-safari-7d',
    name: 'Murchison Falls Wildlife Safari',
    slug: 'murchison-safari-7d',
    duration_days: 7,
    duration_nights: 6,
    price_from: 4200,
    currency: 'USD',
    category: 'Wildlife Safaris',
    description: 'Explore the golden plains where the Nile crashes through the Albertine Rift. High-density game viewing.',
    highlights: ['The Big Five', 'Nile Boat Safari', 'Chimpanzee Tracking'],
    inclusions: ['Full Board Stays', 'Park Fees', 'Private Game Drives', 'Boat Launch'],
    itinerary: [
      { day: 1, title: 'Journey to the Nile', detail: 'Private drive to Murchison Falls via the Ziwa Rhino Sanctuary.' },
      { day: 2, title: 'Savannah Awakening', detail: 'Sunrise game drive on the northern delta. Lions, elephants, giraffes.' },
      { day: 3, title: 'The Powerful Falls', detail: 'Boat cruise to the base of the falls and hike to the dramatic top.' },
      { day: 4, title: 'Budongo Forest', detail: 'Chimpanzee tracking in the mahogany canopies of Budongo.' }
    ],
    imageUrls: ['https://i.postimg.cc/przVFwg6/2-Days-Murchison-Falls-Safari-Uganda-Wildlife-Safari-in-Uganda-Tour-Murchison-Falls-National-Park-75.jpg'],
    featured: true
  },
  {
    id: 'queen-elizabeth-4d',
    name: 'Queen Elizabeth Plains',
    slug: 'queen-elizabeth-4d',
    duration_days: 4,
    duration_nights: 3,
    price_from: 2800,
    currency: 'USD',
    category: 'Wildlife Safaris',
    description: 'A medley of wonders. Kazinga Channel boat cruises and tree-climbing lions of Ishasha.',
    highlights: ['Kazinga Channel Hippos', 'Tree Climbing Lions', 'Explosion Craters'],
    imageUrls: ['https://i.postimg.cc/0yWvb5zq/herd-elephants-bathing-kazinga-channel-260nw-2690502067.jpg'],
    featured: true
  },
  {
    id: 'karamoja-cultural-6d',
    name: 'Karamoja Cultural Narrative',
    slug: 'karamoja-cultural-6d',
    duration_days: 6,
    duration_nights: 5,
    price_from: 3100,
    currency: 'USD',
    category: 'Cultural Tours',
    description: 'Immerse in the ancestral wisdom of the Manyattas. A rugged, soul-stirring journey through Karamoja.',
    highlights: ['Manyatta Homestay', 'Ancient Wisdom Gatherings', 'Rugged Landscapes'],
    imageUrls: ['https://i.postimg.cc/vcNW4Mvm/Uganda-Food-Tours-and-Safaris-3.jpg'],
    featured: true
  }
];

export const SERVICES: Service[] = [
  {
    id: 'airport-transfers',
    name: 'Airport Transfers & Protocol',
    slug: 'airport-transfers',
    typeLabel: 'Concierge',
    icon_name: 'protocol',
    description: 'VIP meet-and-greet at Entebbe with fast-track immigration.',
    features: ['Arrival Lounge', 'Protocol Officers', 'Private Transfers'],
    order_index: 1,
    active: true
  },
  {
    id: 'car-hire',
    name: 'Professional Car Hire',
    slug: 'car-hire',
    typeLabel: 'Fleet',
    icon_name: 'fleet',
    description: 'Modified 4x4 V8 Land Cruisers for superior wildlife viewing.',
    features: ['V8 Land Cruisers', 'Pop-up Roofs', 'Onboard Refreshments'],
    order_index: 2,
    active: true
  },
  {
    id: 'hotel-bookings',
    name: 'Hotel & Boutique Bookings',
    slug: 'hotel-bookings',
    typeLabel: 'Accommodations',
    icon_name: 'hotel',
    description: 'Priority access to Uganda\'s most exclusive sanctuaries.',
    features: ['Luxury Lodges', 'Eco Sanctuaries', 'City Hotels'],
    order_index: 3,
    active: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    clientName: "Sarah Thompson",
    email: "sarah.t@example.com",
    country: "United Kingdom",
    countryCode: "GB",
    tripTaken: "5 Days Bwindi Gorilla & Crater Lakes",
    rating: 5,
    comment: "An absolutely transformative experience. The guides were knowledgeable, the accommodations luxurious, and every moment felt meticulously planned. Kuzuri Escapades exceeded every expectation.",
    date: "2024-01-15",
    verified: true,
    approved: true,
    published: true,
    responses: [{
      author: "Lucky .K (Lead Curator)",
      text: "Thank you Sarah. It was a pleasure co-authoring your Bwindi narrative. We hope the silence of the canopy stays with you.",
      date: "2024-01-16"
    }],
    helpful: 12
  },
  {
    id: 2,
    clientName: "Michael Chen",
    email: "m.chen@example.sg",
    country: "Singapore",
    countryCode: "SG",
    tripTaken: "7 Days Murchison Falls Safari",
    rating: 5,
    comment: "The safari was incredible! We saw the Big Five, the wildlife photography opportunities were endless, and the sunset drives were magical. Highly recommend for any wildlife enthusiast.",
    date: "2024-01-10",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 8
  },
  {
    id: 3,
    clientName: "Emma Rodriguez",
    email: "emma.rod@example.es",
    country: "Spain",
    countryCode: "ES",
    tripTaken: "6 Days Karamoja Cultural Immersion",
    rating: 5,
    comment: "A genuine connection with the Karamojong people made this unforgettable. Staying in the village, learning their traditions, and experiencing authentic Uganda was beyond words.",
    date: "2024-01-05",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 5
  },
  {
    id: 4,
    clientName: "James Mitchell",
    email: "j.mitch@example.au",
    country: "Australia",
    countryCode: "AU",
    tripTaken: "4 Days Queen Elizabeth Safari",
    rating: 4,
    comment: "Fantastic safari with great wildlife sightings. The tree-climbing lions were a highlight. One small issue with accommodation, but the team quickly resolved it. Overall, excellent value.",
    date: "2023-12-28",
    verified: true,
    approved: true,
    published: true,
    responses: [{
      author: "Lucky .K (Lead Curator)",
      text: "James, thank you for your feedback. We have addressed the lodge issue with the sanctuary management to ensure seamless invisible logistics for future guests.",
      date: "2023-12-30"
    }],
    helpful: 3
  },
  {
    id: 5,
    clientName: "Priya Patel",
    email: "p.patel@example.in",
    country: "India",
    countryCode: "IN",
    tripTaken: "3 Days Gorilla Quick Escape",
    rating: 5,
    comment: "Short but incredibly impactful. Seeing the mountain gorillas in their natural habitat was the highlight of my life. The professionalism and care shown by Kuzuri made it seamless.",
    date: "2023-12-20",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 15
  }
];