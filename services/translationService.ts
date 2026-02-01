// This service is largely deprecated in favor of the Google Translate widget integration in App.tsx.
// We keep the UI_DICTIONARY for non-dynamic component labels where instant reactive changes are preferred.

export const translateContent = async (content: any, _targetLang: string) => {
  // Manual translation is disabled. Google Translate widget handles full-page translation.
  return content;
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