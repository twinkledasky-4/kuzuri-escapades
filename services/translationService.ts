
import { GoogleGenAI, Type } from "@google/genai";

export const translateContent = async (content: any, targetLang: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `You are an expert translator for Kuzuri Escapades, a luxury travel platform in Uganda. 
  Your task is to translate the provided JSON object into ${targetLang}. 
  Maintain the "Luxury & Silence" tone: refined, evocative, and high-end. 
  DO NOT translate brand names like "Kuzuri Escapades", "Kazinga Channel", or specific lodge names. 
  Preserve all JSON keys and structure exactly. Translate all descriptions and itinerary names.`;

  const prompt = `Translate the following website content into ${targetLang}. 
  Ensure the tone is professional and bespoke.
  
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
    requestManifest: "Request an Experience",
    beginOdyssey: "Begin Your Experience",
    translating: "Curating Locale...",
    days: "Days",
    nights: "Nights",
    startingFrom: "Starting from",
    currency: "$"
  },
  FR: {
    about: "À Propos",
    tours: "Itinéraires",
    accommodations: "Hébergements",
    services: "Services",
    contact: "Contact",
    inquire: "S'enquérir",
    requestManifest: "Demander une Expérience",
    beginOdyssey: "Commencer l'Expérience",
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
    requestManifest: "Solicitar una Experiencia",
    beginOdyssey: "Comenzar una Experiencia",
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
    requestManifest: "Erlebnis anfordern",
    beginOdyssey: "Erlebnis beginnen",
    translating: "Wird übersetzt...",
    days: "Tage",
    nights: "Nächte",
    startingFrom: "Ab",
    currency: "$"
  },
  DA: {
    about: "Om os",
    tours: "Rejseplaner",
    accommodations: "Overnatning",
    services: "Tjenester",
    contact: "Kontakt",
    inquire: "Forespørgsel",
    requestManifest: "Anmod om en oplevelse",
    beginOdyssey: "Begynd din oplevelse",
    translating: "Oversætter...",
    days: "Dage",
    nights: "Nætter",
    startingFrom: "Fra",
    currency: "$"
  },
  NL: {
    about: "Over ons",
    tours: "Reisschema's",
    accommodations: "Accommodaties",
    services: "Diensten",
    contact: "Contact",
    inquire: "Inlichtingen",
    requestManifest: "Vraag een ervaring aan",
    beginOdyssey: "Begin uw ervaring",
    translating: "Vertalen...",
    days: "Dagen",
    nights: "Nachten",
    startingFrom: "Vanaf",
    currency: "$"
  },
  NO: {
    about: "Om oss",
    tours: "Reiseruter",
    accommodations: "Overnatning",
    services: "Tjenester",
    contact: "Kontakt",
    inquire: "Forespørsel",
    requestManifest: "Be om en opplevelse",
    beginOdyssey: "Begynn din opplevelse",
    translating: "Oversetter...",
    days: "Dager",
    nights: "Netter",
    startingFrom: "Fra",
    currency: "$"
  },
  SV: {
    about: "Om oss",
    tours: "Resplaner",
    accommodations: "Boenden",
    services: "Tjänster",
    contact: "Kontakt",
    inquire: "Fråga",
    requestManifest: "Begär en upplevelse",
    beginOdyssey: "Börja din upplevelse",
    translating: "Översätter...",
    days: "Dagar",
    nights: "Nätter",
    startingFrom: "Från",
    currency: "$"
  }
};
