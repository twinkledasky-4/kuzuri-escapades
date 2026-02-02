import { Lodge } from '../types.ts';
import { LODGES as INITIAL_LODGES } from '../constants.tsx';

/**
 * KUZURI CMS SERVICE: THE SANCTUARIES DATABASE
 * Logic for managing high-end boutique accommodation data with persistence.
 */
class SanctuariesDatabase {
  private lodges: Lodge[] = [];
  private readonly STORAGE_KEY = 'kuzuri_cms_lodges';

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.lodges = JSON.parse(saved);
      } catch (e) {
        this.initializeDefault();
      }
    } else {
      this.initializeDefault();
    }
  }

  private persist() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.lodges));
  }

  private initializeDefault() {
    this.lodges = INITIAL_LODGES.map(l => ({ 
      ...l, 
      active: true, 
      featured: true,
      gallery: l.id === 'ishasha-jungle-lodge' ? [
        { 
          url: 'https://i.postimg.cc/d3wH8fC0/IM-SA-QE-Ishasha-Jungle-Lodge-Exterior.webp', 
          label: 'Exterior',
          caption: 'Authentic Thatched Architecture & Native Craftsmanship' 
        },
        { 
          url: 'https://i.postimg.cc/Jn163QxT/thatch-roof-house.jpg',
          label: 'Interior',
          caption: 'Refined wilderness comfort and riverside views'
        }
      ] : []
    }));
    this.seedDatabase();
    this.persist();
  }

  private seedDatabase() {
    const seeds: Lodge[] = [
      {
        id: 'clouds-mountain-gorilla',
        name: 'Clouds Mountain Gorilla Lodge',
        location: 'Nkuringo Sector, Bwindi',
        region: 'Bwindi',
        imageUrl: 'https://i.postimg.cc/Jn163QxT/thatch-roof-house.jpg',
        description: 'Set at over 2,000 meters above sea level, Clouds offers an ethereal experience with private butlers and views of the Virunga volcanoes.',
        featured: true,
        active: true,
        gallery: []
      },
      {
        id: 'paraa-safari-lodge',
        name: 'Paraa Safari Lodge',
        location: 'Murchison Falls North Bank',
        region: 'Murchison Falls',
        imageUrl: 'https://i.postimg.cc/0QswdfSF/spa-salon-with-beach-view.jpg',
        description: 'A blend of colonial elegance and wild adventure, Paraa is the thundering heart of the Nile exploration.',
        featured: false,
        active: true,
        gallery: []
      },
      {
        id: 'apoka-safari-lodge',
        name: 'Apoka Safari Lodge',
        location: 'Kidepo Valley National Park',
        region: 'Kidepo Valley',
        imageUrl: 'https://i.postimg.cc/Jn163QxT/thatch-roof-house.jpg',
        description: 'Hidden in a landscape of jagged hills and golden plains, Apoka is an oasis of silence in the remote north.',
        featured: true,
        active: true,
        gallery: []
      }
    ];

    seeds.forEach(seed => {
      if (!this.lodges.find(l => l.id === seed.id)) {
        this.lodges.push(seed);
      }
    });
  }

  public getAll(): Lodge[] {
    return this.lodges.filter(l => l.active);
  }

  public getAdminAll(): Lodge[] {
    return this.lodges;
  }

  public getFeatured(): Lodge[] {
    return this.lodges.filter(l => l.featured && l.active);
  }

  public getByRegion(region: string): Lodge[] {
    return this.lodges.filter(l => l.region === region && l.active);
  }

  public updateLodge(id: string, updates: Partial<Lodge>): void {
    const idx = this.lodges.findIndex(l => l.id === id);
    if (idx !== -1) {
      this.lodges[idx] = { ...this.lodges[idx], ...updates };
      this.persist();
    }
  }

  public toggleStatus(id: string, field: 'active' | 'featured'): void {
    const lodge = this.lodges.find(l => l.id === id);
    if (lodge) {
      (lodge as any)[field] = !(lodge as any)[field];
      this.persist();
    }
  }
}

export const cmsDatabase = new SanctuariesDatabase();