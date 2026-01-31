
import { GoogleGenAI, Type } from "@google/genai";

export const translateContent = async (content: any, targetLang: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `You are an expert translator for Kuzuri Escapades, a luxury travel platform in Uganda. 
  Your task is to translate the provided JSON object into ${targetLang}. 
  Maintain the "Luxury & Silence" tone: refined, evocative, and high-end. 
  DO NOT translate brand names like "Kuzuri Escapades", "Kazinga Channel", or specific lodge names. 
  STRICT RULE: DO NOT translate or alter the official email address "info@kuzuri-escapades.com" in any context.
  Preserve all JSON keys and structure exactly. 
  
  NARRATIVE GUIDANCE:
  - Translate "Local Experts. Unique Journeys." elegantly to convey native authority and bespoke creation.
  - "Local Experts" (EN) -> "Experts Locaux" (FR), "Lokale Experten" (DE), "Expertos Locales" (ES).
  - "Unique Journeys" (EN) -> "Voyages Uniques" (FR), "Einzigartige Reisen" (DE), "Viajes Únicos" (ES).
  
  STRICT RULE: Always use the word "EXPERIENCE" (or its exact uppercase equivalent in the target language, e.g., "EXPÉRIENCE" in FR, "EXPERIENCIA" in ES, "ERLEBNIS" in DE) to replace "Odyssey", "Manifesto", or "Manifest" in all contexts.
  Preserve all HTML tags like <span>, <br/>, or <i> if present in strings.`;

  const prompt = `Translate the following website content into ${targetLang}. 
  Ensure the tone is professional, bespoke, and extremely high-fidelity.
  
  Content:
  ${JSON.stringify(content)}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Translation Error:", error);
    return content;
  }
};

export const UI_DICTIONARY: Record<string, any> = {
  EN: {
    about: "About",
    tours: "Itineraries",
    accommodations: "Accommodations",
    services: "Services",
    contact: "Contact",
    inquire: "Inquire",
    requestManifest: "Request an EXPERIENCE",
    beginOdyssey: "Begin Your EXPERIENCE",
    translating: "Curating Locale...",
    days: "Days",
    nights: "Nights",
    startingFrom: "Starting from",
    currency: "$"
  },
  FR: {
    about: "À Propos",
    tours: "Itineraires",
    accommodations: "Hébergements",
    services: "Services",
    contact: "Contact",
    inquire: "S'enquérir",
    requestManifest: "Demander une EXPÉRIENCE",
    beginOdyssey: "Commencer l'EXPÉRIENCE",
    translating: "Traduction en cours...",
    days: "Jours",
    nights: "Nuits",
    startingFrom: "À partir de",
    currency: "$"
  },
  ES: {
    about: "Nosotros",
    tours: "Itinerarios",
    accommodations: "Alojamientos",
    services: "Servicios",
    contact: "Contacto",
    inquire: "Consultar",
    requestManifest: "Solicitar una EXPERIENCIA",
    beginOdyssey: "Comenzar una EXPERIENCIA",
    translating: "Traduciendo...",
    days: "Días",
    nights: "Noches",
    startingFrom: "Desde",
    currency: "$"
  },
  DE: {
    about: "Über uns",
    tours: "Routen",
    accommodations: "Unterkünfte",
    services: "Leistungen",
    contact: "Kontakt",
    inquire: "Anfragen",
    requestManifest: "ERLEBNIS anfordern",
    beginOdyssey: "ERLEBNIS beginnen",
    translating: "Wird übersetzt...",
    days: "Tage",
    nights: "Nächte",
    startingFrom: "Ab",
    currency: "$"
  }
};
