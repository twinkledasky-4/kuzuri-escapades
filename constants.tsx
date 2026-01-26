import { Destination, Tour, Service, Review } from './types.ts';

export const HERO_SLIDES = [
  {
    id: 'ugandans-heritage',
    subtitle: 'Hello, Traveler!',
    title: 'The Heart of the Pearl',
    description: 'Intimate connections with native wisdom and ancestral rhythms, where every encounter is an odyssey.',
    imageUrl: 'https://i.postimg.cc/bYRVDkb8/ugandans.jpg',
    cta: 'Explore Our Roots'
  },
  {
    id: 'safari-crossroad',
    subtitle: 'Hello, Traveler!',
    title: 'Journey Beyond The Ordinary',
    description: 'Bespoke Ugandan escapades crafted for the discerning traveler, where every path authors a unique story.',
    imageUrl: 'https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg',
    cta: 'Begin Your Odyssey'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'queen-elizabeth',
    name: 'Queen Elizabeth Park',
    slug: 'queen-elizabeth',
    tagline: 'Savannah Medley & Craters',
    description: 'A biodiverse mosaic of savannah, crater lakes, and the legendary Kazinga Channel sanctuary.',
    images: ['https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg'],
    highlights: ['Lion Road Expeditions', 'Kazinga Channel Cruises', 'Tree-Climbing Lions'],
    featured: true,
    order_index: 1
  },
  {
    id: 'lake-mburo',
    name: 'Lake Mburo',
    slug: 'lake-mburo',
    tagline: 'The Zebra Sanctuary',
    description: 'The closest savannah park to the capital, offering intimate encounters with zebras and impalas.',
    images: ['https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&q=80&w=1600'],
    highlights: ['Zebra Portraits', 'Night Game Drives', 'Boat Trips'],
    featured: true,
    order_index: 2
  },
  {
    id: 'savanna-plains',
    name: 'The Savanna Plains',
    slug: 'murchison-falls',
    tagline: 'Infinite Horizons',
    description: 'Witness the thundering power of the Nile and the vast herds of the Albertine Rift.',
    images: ['https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=85&w=1600'],
    highlights: ['Gazelle Herds', 'Nile Boat Launches', 'The Big Five'],
    featured: true,
    order_index: 3
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
    imageUrls: ['https://images.unsplash.com/photo-1519066629447-267ffbb62d4b?auto=format&fit=crop&q=85&w=1200'],
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
    description: 'Explore the golden plains where the Nile crashes through the Albertine Rift.',
    highlights: ['The Big Five', 'Nile Boat Safari', 'Chimpanzee Tracking'],
    imageUrls: ['https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=85&w=1200'],
    featured: true
  }
];

export const SERVICES: Service[] = [
  {
    id: 'protocol',
    name: 'VIP Protocol',
    slug: 'protocol',
    description: 'VIP meet-and-greet at Entebbe with fast-track immigration.',
    features: ['Arrival Lounge', 'Protocol Officers', 'Private Transfers'],
    icon_name: 'protocol',
    order_index: 1,
    active: true,
    typeLabel: 'Concierge'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    clientName: "Sarah Thompson",
    country: "United Kingdom",
    countryCode: "GB",
    tripTaken: "5 Days Bwindi Gorilla & Crater Lakes",
    rating: 5,
    comment: "An absolutely transformative experience. The guides were knowledgeable, the accommodations luxurious.",
    date: "2024-01-15",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 12
  }
];
