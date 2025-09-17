import { GoogleGenAI, Type, Chat } from "@google/genai";
import type { WritingFeedback } from '../types';

let aiInstance: GoogleGenAI | null = null;
let currentApiKey: string | null = null;

const API_KEY_STORAGE_KEY = 'ivs-gemini-api-key';

const getApiKey = (): string | null => {
  try {
    return localStorage.getItem(API_KEY_STORAGE_KEY);
  } catch (e) {
    console.error("Could not access localStorage:", e);
    return null;
  }
};

export const setApiKey = (key: string): void => {
  try {
    localStorage.setItem(API_KEY_STORAGE_KEY, key);
    aiInstance = null; // Force re-initialization on next use
  } catch (e) {
    console.error("Could not save API key to localStorage:", e);
  }
};

export const clearApiKey = (): void => {
  try {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
    aiInstance = null; // Clear the instance
  } catch (e) {
    console.error("Could not clear API key from localStorage:", e);
  }
};

/**
 * Lazily initializes and returns the GoogleGenAI instance using the key from localStorage.
 * Throws an error if the API key is not available when an AI feature is used.
 */
function getAiInstance(): GoogleGenAI {
  const storedApiKey = getApiKey();

  if (!storedApiKey) {
    throw new Error("API key is not configured. Please set it in the AI Settings.");
  }
  
  // Re-initialize if the key has changed or instance doesn't exist
  if (!aiInstance || storedApiKey !== currentApiKey) {
    currentApiKey = storedApiKey;
    aiInstance = new GoogleGenAI({ apiKey: currentApiKey });
  }

  return aiInstance;
}

export const isAiConfigured = (): boolean => {
  return !!getApiKey();
};

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