import { GoogleGenerativeAI } from "@google/generative-ai";
import type { WritingFeedback } from '../types';

declare module 'vite' {
  interface ImportMetaEnv {
    readonly VITE_API_KEY: string
  }
}

export class ChatSession {
  private chat: any;

  constructor() {
    if (!API_KEY) {
      throw new Error("API key is not set");
    }
    const genAI = new GoogleGenerativeAI(API_KEY);
    this.chat = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig: {
      temperature: 0.8,
    }}).startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 2048,
      },
    });
  }

  async sendMessage(message: string) {
    const result = await this.chat.sendMessage(message);
    const response = await result.response;
    return { text: response.text() };
  }

  async sendMessageStream(message: string) {
    const result = await this.chat.sendMessage(message);
    const response = await result.response;
    return [{ text: response.text() }];
  }
}

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  console.error("API key is not set in environment variables");
  throw new Error("API key is not set");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const gradeWriting = async (topic: string, text: string): Promise<WritingFeedback> => {
  const prompt = `Topic: "${topic}"\n\nEssay: "${text}"\n\nPlease grade this essay for a K-12 English learner. Provide feedback on grammar, vocabulary, and coherence. Give an overall score out of 100. Return the response in the following JSON format:
  {
    "overall": "Overall feedback here",
    "grammar": "Grammar feedback here",
    "vocabulary": "Vocabulary feedback here",
    "coherence": "Coherence feedback here",
    "score": 85
  }`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();
    return JSON.parse(responseText) as WritingFeedback;
  } catch (error) {
    console.error("Error grading writing:", error);
    throw new Error("Failed to grade writing");
  }
};

export const translateToVietnamese = async (text: string): Promise<string> => {
  const prompt = `Translate the following English text to Vietnamese for a K-12 student. Return only the translated text.\n\nEnglish: "${text}"`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error translating text:", error);
    throw new Error("Failed to translate text.");
  }
};