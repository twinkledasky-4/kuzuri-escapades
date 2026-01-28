
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
    tours: "Tours",
    accommodations: "Accommodations",
    services: "Services",
    contact: "Contact",
    inquire: "Inquire",
    requestManifest: "Request a Manifest",
    beginOdyssey: "Begin Your Odyssey",
    translating: "Curating Locale...",
    days: "Days",
    nights: "Nights",
    startingFrom: "Starting from",
    currency: "£"
  },
  FR: {
    about: "À Propos",
    tours: "Circuits",
    accommodations: "Hébergements",
    services: "Services",
    contact: "Contact",
    inquire: "S'enquérir",
    requestManifest: "Demander un Manifeste",
    beginOdyssey: "Commencer l'Odyssée",
    translating: "Traduction en cours...",
    days: "Jours",
    nights: "Nuits",
    startingFrom: "À partir de",
    currency: "€"
  },
  ES: {
    about: "Nosotros",
    tours: "Tours",
    accommodations: "Alojamientos",
    services: "Servicios",
    contact: "Contacto",
    inquire: "Consultar",
    requestManifest: "Solicitar Manifiesto",
    beginOdyssey: "Comenzar Odisea",
    translating: "Traduciendo...",
    days: "Días",
    nights: "Noches",
    startingFrom: "Desde",
    currency: "€"
  },
  DE: {
    about: "Über uns",
    tours: "Touren",
    accommodations: "Unterkünfte",
    services: "Leistungen",
    contact: "Kontakt",
    inquire: "Anfragen",
    requestManifest: "Manifest anfordern",
    beginOdyssey: "Odyssee beginnen",
    translating: "Wird übersetzt...",
    days: "Tage",
    nights: "Nächte",
    startingFrom: "Ab",
    currency: "€"
  },
  DA: {
    about: "Om os",
    tours: "Ture",
    accommodations: "Overnatning",
    services: "Tjenester",
    contact: "Kontakt",
    inquire: "Forespørgsel",
    requestManifest: "Anmod om manifest",
    beginOdyssey: "Begynd din odyssé",
    translating: "Oversætter...",
    days: "Dage",
    nights: "Nætter",
    startingFrom: "Fra",
    currency: "€"
  },
  NL: {
    about: "Over ons",
    tours: "Tours",
    accommodations: "Accommodaties",
    services: "Diensten",
    contact: "Contact",
    inquire: "Inlichtingen",
    requestManifest: "Manifest aanvragen",
    beginOdyssey: "Begin uw odyssee",
    translating: "Vertalen...",
    days: "Dagen",
    nights: "Nachten",
    startingFrom: "Vanaf",
    currency: "€"
  },
  NO: {
    about: "Om oss",
    tours: "Turer",
    accommodations: "Overnatting",
    services: "Tjenester",
    contact: "Kontakt",
    inquire: "Forespørsel",
    requestManifest: "Be om manifest",
    beginOdyssey: "Begynn din odyssé",
    translating: "Oversetter...",
    days: "Dager",
    nights: "Netter",
    startingFrom: "Fra",
    currency: "kr"
  },
  SV: {
    about: "Om oss",
    tours: "Resor",
    accommodations: "Boenden",
    services: "Tjänster",
    contact: "Kontakt",
    inquire: "Fråga",
    requestManifest: "Begär manifest",
    beginOdyssey: "Börja din odyssé",
    translating: "Översätter...",
    days: "Dagar",
    nights: "Nätter",
    startingFrom: "Från",
    currency: "kr"
  }
};
