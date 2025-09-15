import { GoogleGenerativeAI } from "@google/generative-ai";
import type { WritingFeedback } from '../types';

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("GEMINI_API_KEY environment variable not set.");
  throw new Error("GEMINI_API_KEY environment variable not set");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

export const gradeWriting = async (topic: string, text: string): Promise<WritingFeedback> => {
  const prompt = `Topic: "${topic}"\n\nEssay: "${text}"\n\nPlease grade this essay for a K-12 English learner. Provide feedback on grammar, vocabulary, and coherence. Give an overall score out of 100. Return the response in the following JSON format:
  {
    "overall": "Overall feedback here",
    "grammar": "Grammar feedback here",
    "vocabulary": "Vocabulary feedback here",
    "coherence": "Coherence feedback here",
    "score": 85
  }`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const responseText = response.text();
  
  try {
    return JSON.parse(responseText) as WritingFeedback;
  } catch (e) {
    console.error("Failed to parse AI response:", e);
    throw new Error("Failed to grade writing");
  }
};


export const createChat = async () => {
  const chat = model.startChat({
    history: [],
    generationConfig: {
      temperature: 0.8,
    },
  });
  
  await chat.sendMessage(
    "You are a friendly and encouraging English tutor for K-12 students. Your name is Sparky. Keep your answers concise and helpful. Use simple language and emojis to make learning fun. Your goal is to help students practice their English conversation skills."
  );
  
  return chat;
};

export const translateToVietnamese = async (text: string): Promise<string> => {
  const prompt = `Translate the following English text to Vietnamese for a K-12 student. Return only the translated text.\n\nEnglish: "${text}"`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error("Error translating text:", error);
    throw new Error("Failed to translate text.");
  }
};