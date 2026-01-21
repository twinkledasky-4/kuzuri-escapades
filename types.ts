
export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  highlights: string[];
  images: string[];
  featured: boolean;
  order_index?: number;
  tagline?: string; // Optional field for UI-specific subtitles
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
  currency: string;
  imageUrls: string[]; // Maps to hero_image and other associated media
  category?: string; // Optional metadata
  description: string;
  highlights: string[];
  inclusions?: string[];
  exclusions?: string[];
  itinerary?: TourItineraryDay[];
  featured: boolean;
  order_index?: number;
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
  SERVICES = 'services',
  PLANNER = 'planner',
  ABOUT = 'about'
}
