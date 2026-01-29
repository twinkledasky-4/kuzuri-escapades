
export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  highlights: string[];
  images: string[];
  featured: boolean;
  order_index?: number;
  tagline?: string; 
}

export interface TourItineraryDay {
  day: number | string;
  title: string;
  detail: string;
}

export interface Tour {
  id: string;
  name: string;
  slug: string;
  duration_days: number;
  duration_nights: number;
  price_from: number;
  price_was?: number; // Added for struck-through pricing
  currency: string;
  imageUrls: string[]; 
  category?: string; 
  description: string;
  highlights: string[];
  inclusions?: string[];
  exclusions?: string[];
  itinerary?: TourItineraryDay[];
  featured: boolean;
  order_index?: number;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  icon_name: string;
  order_index: number;
  active: boolean;
  typeLabel?: string;
}

export interface ReviewResponse {
  author: string;
  text: string;
  date: string;
}

export interface Review {
  id: number | string;
  clientName: string;
  email?: string;
  country: string;
  countryCode: string;
  tripTaken: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  approved: boolean;
  published: boolean;
  responses: ReviewResponse[];
  helpful: number;
  images?: string[];
}

export interface Lodge {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  description: string;
  region?: string;
}

export interface ItineraryDay {
  day: number;
  location: string;
  activities: string[];
  lodging: string;
  theme: string;
}

export interface TravelPreferences {
  destination: string;
  duration: number;
  travelers: number;
  vibe: 'adventure' | 'wellness' | 'culture' | 'safari';
}

export enum AppSection {
  HOME = 'home',
  DESTINATIONS = 'destinations',
  ACCOMMODATIONS = 'accommodations',
  SERVICES = 'services',
  PLANNER = 'planner',
  ABOUT = 'about',
  CONTACT = 'contact',
  TESTIMONIALS = 'testimonials',
  ADMIN = 'admin'
}
