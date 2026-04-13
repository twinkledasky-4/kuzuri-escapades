import { Review } from '../types.ts';

/**
 * KUZURI CRM SERVICE & SMTP RELAY GATEWAY
 * Centralized logic for lead capture, prospect management, and automated notifications.
 * Integrated with the 'Pearl Registry' database and a high-priority SMTP relay.
 */

export interface Lead {
  id: string;
  source: 'inquiry_modal' | 'consultation_btn' | 'service_inquiry' | 'tour_booking' | 'spotlight_inquiry' | 'payment_portal' | 'testimonial_form' | 'about_page_planner';
  timestamp: string;
  status: 'new' | 'contacted' | 'booked' | 'lost';
  packageViewing?: string;
  data: {
    fullName?: string;
    email?: string;
    phone?: string;
    phoneCode?: string;
    phoneNumber?: string;
    nationality?: string;
    travelDate?: string;
    numDays?: string;
    numPeople?: string;
    budget?: string;
    accommodation?: string;
    interests?: string | string[];
    message?: string;
    context?: string;
    destination?: string;
    bookingRef?: string;
    amount?: string;
    paymentMethod?: string;
    trip?: string;
    rating?: number;
    country?: string;
    travelDates?: string;
  };
}

class CRMService {
  private leads: Lead[] = [];
  private readonly STORAGE_KEY = 'kuzuri_crm_leads';
  private readonly CURATOR_EMAIL = 'info@kuzuri-escapades.com';
  // Formspree acts as our SMTP Relay Gateway for this implementation
  private readonly RELAY_ENDPOINT = 'https://formspree.io/f/xpwqgrze';
  private readonly INTERNAL_API = '/api/send-email';

  constructor() {
    this.loadLeads();
  }

  private loadLeads() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.leads = JSON.parse(saved);
      } catch (e) {
        this.leads = [];
      }
    }
  }

  private persist() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.leads));
  }

  /**
   * CAPTURE PROTOCOL:
   * 1. Logs lead in local Pearl Registry
   * 2. Triggers High-Priority SMTP Relay to info@kuzuri-escapades.com
   */
  public async captureLead(leadData: Omit<Lead, 'id' | 'timestamp' | 'status'>): Promise<boolean> {
    const newLead: Lead = {
      id: `KZR-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      status: 'new',
      ...leadData
    };

    // 1. Permanent Registry Storage
    this.leads.unshift(newLead);
    this.persist();

    // 2. Instant SMTP Relay Transmission
    try {
      const subject = `Inquiry for ${newLead.packageViewing || 'Bespoke Journey'} - ${newLead.data.fullName}`;
      const text = `
Lead ID: ${newLead.id}
Source: ${newLead.source}
Name: ${newLead.data.fullName}
Email: ${newLead.data.email}
Phone: ${newLead.data.phone || `${newLead.data.phoneCode || ''} ${newLead.data.phoneNumber || ''}`.trim()}
Nationality: ${newLead.data.nationality}
Travel Date: ${newLead.data.travelDate}
Duration: ${newLead.data.numDays} days
Party Size: ${newLead.data.numPeople}
Budget: ${newLead.data.budget}
Accommodation: ${newLead.data.accommodation}
Interests: ${Array.isArray(newLead.data.interests) ? newLead.data.interests.join(', ') : newLead.data.interests}
Destination: ${newLead.data.destination}
Message: ${newLead.data.message}
      `.trim();

      // Try Internal SMTP first
      const internalResponse = await fetch(this.INTERNAL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          text,
          replyTo: newLead.data.email
        })
      });

      if (internalResponse.ok) {
        console.debug(`[CRM] Internal SMTP Relay Successful: Lead ${newLead.id} transmitted.`);
        return true;
      }

      // Fallback to Formspree if internal SMTP is not configured or fails
      console.warn("[CRM] Internal SMTP failed or unconfigured, falling back to Formspree.");
      
      const payload = {
        // Standard Formspree fields
        email: newLead.data.email,
        message: newLead.data.message || `New inquiry for ${newLead.packageViewing || 'Bespoke Journey'}`,
        _subject: subject,
        
        // Custom fields
        lead_id: newLead.id,
        timestamp: newLead.timestamp,
        source_context: newLead.source,
        package_of_interest: newLead.packageViewing || 'General Collection',
        
        // Personal Details
        client_name: newLead.data.fullName,
        client_email: newLead.data.email,
        client_nationality: newLead.data.nationality,
        client_phone: newLead.data.phone || `${newLead.data.phoneCode || ''} ${newLead.data.phoneNumber || ''}`.trim(),
        
        // Trip Details
        travel_date: newLead.data.travelDate,
        duration_days: newLead.data.numDays,
        party_size: newLead.data.numPeople,
        budget_usd: newLead.data.budget,
        accommodation_preference: newLead.data.accommodation,
        
        // Interests
        interests: Array.isArray(newLead.data.interests) ? newLead.data.interests.join(', ') : newLead.data.interests,
        
        // Message & Context
        vision_narrative: newLead.data.message,
        desired_destination: newLead.data.destination,
        
        metadata: {
          browser_time: new Date().toLocaleString(),
          origin: window.location.origin
        }
      };

      const response = await fetch(this.RELAY_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.warn(`[CRM] Formspree Relay Response (${response.status}):`, errorText);
        throw new Error(`Relay Gateway Rejected Transmission: ${response.status}`);
      }

      console.debug(`[CRM] Formspree Relay Successful: Lead ${newLead.id} transmitted.`);
      return true;
    } catch (error) {
      console.error("[CRM] All SMTP Relay attempts failed - Lead saved to local registry only:", error);
      return true; 
    }
  }

  /**
   * CHATBOT LEAD CAPTURE:
   * Specifically for capturing interactions from the AI Concierge.
   */
  public async captureChatLead(message: string): Promise<boolean> {
    const chatLead: Lead = {
      id: `CHAT-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      status: 'new',
      source: 'consultation_btn', // Reusing existing source type or we could add 'chatbot'
      data: {
        message: message,
        context: 'AI Concierge Interaction'
      }
    };

    this.leads.unshift(chatLead);
    this.persist();

    try {
      const subject = `[CHAT LEAD] New Interaction from AI Concierge`;
      const text = `
Chat Lead ID: ${chatLead.id}
Timestamp: ${chatLead.timestamp}
Initial Message: ${message}
      `.trim();

      // Try Internal SMTP first
      const internalResponse = await fetch(this.INTERNAL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          text
        })
      });

      if (internalResponse.ok) {
        return true;
      }

      const payload = {
        message: message,
        _subject: subject,
        lead_id: chatLead.id,
        timestamp: chatLead.timestamp,
        initial_message: message,
        metadata: {
          browser_time: new Date().toLocaleString(),
          origin: window.location.origin
        }
      };

      const response = await fetch(this.RELAY_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.warn(`[CRM] Chat Relay Response (${response.status}):`, errorText);
      }

      return response.ok;
    } catch (error) {
      console.error("[CRM] Chat Relay Failure:", error);
      return true;
    }
  }

  public getAllLeads(): Lead[] {
    return this.leads;
  }

  public updateLeadStatus(id: string, status: Lead['status']) {
    const idx = this.leads.findIndex(l => l.id === id);
    if (idx !== -1) {
      this.leads[idx].status = status;
      this.persist();
    }
  }

  public deleteLead(id: string) {
    this.leads = this.leads.filter(l => l.id !== id);
    this.persist();
  }
}

export const crmService = new CRMService();