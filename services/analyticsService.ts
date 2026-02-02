/**
 * KUZURI INTELLIGENCE SERVICE
 * Tracks client engagement and exploration patterns for bespoke packages.
 */

export interface PackageIntelligence {
  id: string;
  label: string;
  clicks: number;
  lastInteracted: string;
}

class IntelligenceService {
  private stats: Record<string, number> = {};
  private readonly STORAGE_KEY = 'kuzuri_intelligence_metrics';

  constructor() {
    this.loadStats();
  }

  private loadStats() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.stats = JSON.parse(saved);
      } catch (e) {
        this.stats = {};
      }
    }
  }

  private persist() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.stats));
  }

  /**
   * INTERACTION TRACKER:
   * Logs an exploration event for a specific package or territory.
   */
  public trackInteraction(packageId: string) {
    this.stats[packageId] = (this.stats[packageId] || 0) + 1;
    this.persist();
    console.debug(`[Intelligence] Interaction logged for: ${packageId} (Total: ${this.stats[packageId]})`);
  }

  public getRankedMetrics(): PackageIntelligence[] {
    // Map of internal IDs to readable labels as requested in the brief
    const labelMap: Record<string, string> = {
      'gorilla-trekking': 'Misty Mountain Gorillas',
      'boat-safari': 'Serenity Water Safaris',
      'chimpanzee-trekking': 'Prime Intelligence Treks',
      'ngamba-island': 'Ngamba Island Sanctuary',
      'boat-safaris-uganda': 'Aquatic Expeditions',
      'uganda-rwanda-birding-12d': 'Signature Birding',
      'kenya-uganda-wildlife-14d': 'Multi-Country Wildlife',
      'masai-mara-serengeti-6d': 'Savannah Sovereignty',
      'murchison-explorer-7d': 'Northern Wilds Explorer',
      'kidepo-valley-5d': 'Remote Isolation',
      'karamoja-cultural-6d': 'Ancestral Roots'
    };

    return Object.entries(this.stats)
      .map(([id, clicks]) => ({
        id,
        label: labelMap[id] || id.replace(/-/g, ' ').toUpperCase(),
        clicks,
        lastInteracted: new Date().toISOString()
      }))
      .sort((a, b) => b.clicks - a.clicks);
  }

  public clearMetrics() {
    this.stats = {};
    this.persist();
  }
}

export const intelligenceService = new IntelligenceService();