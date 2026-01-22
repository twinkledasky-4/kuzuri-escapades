
import { GoogleGenAI, Type } from "@google/genai";
import { TravelPreferences } from "../types.ts";

export const generateItinerary = async (prefs: TravelPreferences) => {
  // Always use a named parameter for the API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `You are the Lead Curator at Kuzuri Escapades. Your voice is refined yet inviting, knowledgeable but never lecturing, and warm without being casual. 
  You specialize in "Sur Mesure" (custom-made) luxury travel in Uganda. 
  Your itineraries emphasize silence as luxury, intimate encounters, and seamless, invisible logistics. 
  Avoid clichés. Use evocative, atmospheric language (e.g., "The morning mist clinging to the canopy" instead of "It is a foggy morning").`;

  const prompt = `Please co-create a bespoke journey for ${prefs.travelers} guests exploring ${prefs.destination}. 
  Duration: ${prefs.duration} nights. 
  Primary Rhythm: ${prefs.vibe}.
  
  Include exclusive stays at boutique sanctuaries like Clouds, Kyambura Gorge, or Apoka. 
  Highlight moments of quietude and deep connection with the land. 
  The response must be in JSON format matching the schema provided.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: prompt,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "A warm and inviting title for the journey" },
          overview: { type: Type.STRING, description: "A knowledgeable summary of the experience's soul" },
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.NUMBER },
                location: { type: Type.STRING },
                activities: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING } 
                },
                lodging: { type: Type.STRING },
                theme: { type: Type.STRING }
              },
              required: ["day", "location", "activities", "lodging"]
            }
          }
        },
        required: ["title", "overview", "days"]
      }
    }
  });

  // response.text returns the extracted string output directly.
  return JSON.parse(response.text);
};
