import { GoogleGenAI, Type, Chat } from "@google/genai";
import type { WritingFeedback } from '../types';

let aiInstance: GoogleGenAI | null = null;

/**
 * Lazily initializes and returns the GoogleGenAI instance.
 * This avoids a startup crash if the API key is not set.
 * Throws an error if the API key is not available when an AI feature is used.
 */
function getAiInstance(): GoogleGenAI {
  if (!aiInstance) {
    // The API key MUST be obtained exclusively from the environment variable `process.env.API_KEY`.
    // This is a strict requirement from the coding guidelines.
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
      // This error will be caught by the calling functions in the components.
      throw new Error("API key is not set. Please ensure the API_KEY environment variable is configured correctly in your deployment settings (e.g., Netlify).");
    }

    aiInstance = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiInstance;
}

export const gradeWriting = async (topic: string, text: string): Promise<WritingFeedback> => {
  const ai = getAiInstance();
  const prompt = `Topic: "${topic}"\n\nEssay: "${text}"\n\nPlease grade this essay for a K-12 English learner. Provide feedback on grammar, vocabulary, and coherence. Give an overall score out of 100.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          overall: { type: Type.STRING, description: 'Overall feedback on the essay.' },
          grammar: { type: Type.STRING, description: 'Specific feedback on grammar.' },
          vocabulary: { type: Type.STRING, description: 'Specific feedback on vocabulary usage.' },
          coherence: { type: Type.STRING, description: 'Specific feedback on the structure and flow.' },
          score: { type: Type.INTEGER, description: 'A score from 0 to 100.' },
        },
        required: ["overall", "grammar", "vocabulary", "coherence", "score"]
      },
      temperature: 0.2
    },
  });

  try {
    const jsonString = response.text.trim();
    return JSON.parse(jsonString) as WritingFeedback;
  } catch (e) {
    console.error("Failed to parse Gemini JSON response:", e);
    throw new Error("Could not get feedback from AI. Please try again.");
  }
};


export const createChat = (): Chat => {
    const ai = getAiInstance();
    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: "You are a friendly and encouraging English tutor for K-12 students. Your name is Sparky. Keep your answers concise and helpful. Use simple language and emojis to make learning fun. Your goal is to help students practice their English conversation skills.",
            temperature: 0.8
        },
    });
};

export const translateToVietnamese = async (text: string): Promise<string> => {
  const ai = getAiInstance();
  const prompt = `Translate the following English text to Vietnamese for a K-12 student. Return only the translated text.\n\nEnglish: "${text}"`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.1,
      },
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error translating text:", error);
    throw new Error("Failed to translate text.");
  }
};