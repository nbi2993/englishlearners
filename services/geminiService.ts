import { GoogleGenerativeAI } from "@google/generative-ai";
import type { WritingFeedback } from '../types';

const API_KEY = process.env.API_KEY || process.env.GEMINI_API_KEY;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set. Please configure your GEMINI_API_KEY in the environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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

  try {
    const essayText = text; // Store text in a new variable to avoid TDZ issue
    const prompt = `Topic: "${topic}"

Essay: "${essayText}"

Please grade this essay for a K-12 English learner. Provide structured feedback in JSON format with the following fields:
- overall: Overall feedback on the essay
- grammar: Specific feedback on grammar
- vocabulary: Specific feedback on vocabulary usage
- coherence: Specific feedback on the structure and flow
- score: A number from 0 to 100

Response must be valid JSON only.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    try {
      const feedback = JSON.parse(responseText) as WritingFeedback;
      
      // Validate the response structure
      if (!feedback.overall || !feedback.grammar || !feedback.vocabulary || 
          !feedback.coherence || typeof feedback.score !== 'number') {
        throw new Error('Invalid response format');
      }

      // Cache the result
      cache.set(cacheKey, {
        data: feedback,
        timestamp: Date.now()
      });

      return feedback;
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      throw new Error('Failed to parse writing feedback');
    }
  } catch (error) {
    console.error('Error in gradeWriting:', error);
    throw new Error('Failed to grade writing. Please try again later.');
  }
};


interface Chat {
  model: string;
  config: {
    systemInstruction?: string;
    temperature?: number;
  }
}

export const createChat = async (): Promise<Chat> => {
    return {
        model: 'gemini-pro',
        config: {
            systemInstruction: "You are a friendly and encouraging English tutor for K-12 students. Your name is Sparky. Keep your answers concise and helpful. Use simple language and emojis to make learning fun. Your goal is to help students practice their English conversation skills.",
            temperature: 0.8
        },
    };
};

export const translateToVietnamese = async (text: string): Promise<string> => {
  const prompt = `Translate the following English text to Vietnamese for a K-12 student. Return only the translated text.\n\nEnglish: "${text}"`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text().trim();
  } catch (error) {
    console.error("Error translating text:", error);
    throw new Error("Failed to translate text.");
  }
};