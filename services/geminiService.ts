import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, GenerateContentRequest, GenerateContentResponse } from "@google/generative-ai";
import type { WritingFeedback } from '../types';

const API_KEY = process.env.API_KEY || process.env.GEMINI_API_KEY;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set. Please configure your GEMINI_API_KEY in the environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Simple in-memory cache
const cache = new Map<string, { data: WritingFeedback; timestamp: number }>();

const getCacheKey = (topic: string, text: string) => `${topic}-${text}`;

const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < CACHE_DURATION;
};

export const gradeWriting = async (topic: string, text: string): Promise<WritingFeedback> => {
  const cacheKey = getCacheKey(topic, text);
  const cachedResult = cache.get(cacheKey);

  if (cachedResult && isCacheValid(cachedResult.timestamp)) {
    return cachedResult.data;
  }
  const prompt = `Topic: "${topic}"\n\nEssay: "${text}"\n\nPlease grade this essay for a K-12 English learner. Provide feedback on grammar, vocabulary, and coherence. Give an overall score out of 100.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        maxOutputTokens: 1024,
        temperature: 0.7,
        responseSchema: {
          type: Type.OBJECT,
          required: ['overall', 'grammar', 'vocabulary', 'coherence', 'score'],
          properties: {
            overall: { type: Type.STRING, description: 'Overall feedback on the essay.' },
            grammar: { type: Type.STRING, description: 'Specific feedback on grammar.' },
            vocabulary: { type: Type.STRING, description: 'Specific feedback on vocabulary usage.' },
            coherence: { type: Type.STRING, description: 'Specific feedback on the structure and flow.' },
            score: { type: Type.INTEGER, description: 'A score from 0 to 100.' }
          }
        }
      }
    });

    if (!response || !response.response) {
      throw new Error('Failed to generate feedback');
    }

    const result = response.response as WritingFeedback;
    
    // Cache the result
    cache.set(cacheKey, {
      data: result,
      timestamp: Date.now()
    });

    return result;
  } catch (error) {
    console.error('Error in gradeWriting:', error);
    throw new Error('Failed to grade writing. Please try again later.');
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
    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: "You are a friendly and encouraging English tutor for K-12 students. Your name is Sparky. Keep your answers concise and helpful. Use simple language and emojis to make learning fun. Your goal is to help students practice their English conversation skills.",
            temperature: 0.8
        },
    });
};

export const translateToVietnamese = async (text: string): Promise<string> => {
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