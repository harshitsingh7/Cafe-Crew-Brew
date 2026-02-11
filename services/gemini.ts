
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAIRecommendation = async (mood: string) => {
  if (!API_KEY) return "An artisan latte is always a good choice.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `The user says they are feeling: "${mood}". Recommend a unique coffee or tea drink from a cafe called "Cafe Crew Brew" which is powered by women. Make it sound elegant and inspiring. Return only a short 2-sentence recommendation.`,
    config: {
      temperature: 0.8,
    }
  });

  return response.text || "I recommend our signature Rose Petal Matcha for its calming and elegant profile.";
};
