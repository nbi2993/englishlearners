
import { GoogleGenAI, Type, Part } from "@google/genai";
import { Lesson, Quiz, VocabularyItem, CurriculumLevel, PronunciationFeedback } from '../types';
import { Language } from "../contexts/i18n";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const languageMap = {
    en: 'English',
    vi: 'Vietnamese',
};

const quizSchema = {
    type: Type.OBJECT,
    properties: {
        questions: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    question: {
                        type: Type.STRING,
                        description: 'The question text, in the requested language (English or Vietnamese).'
                    },
                    options: {
                        type: Type.OBJECT,
                        properties: {
                            A: { type: Type.STRING },
                            B: { type: Type.STRING },
                            C: { type: Type.STRING },
                            D: { type: Type.STRING },
                        },
                        required: ['A', 'B', 'C', 'D'],
                        description: 'An object containing four possible answers in English.'
                    },
                    answer: {
                        type: Type.STRING,
                        description: 'The key of the correct option (e.g., "A").'
                    }
                },
                required: ['question', 'options', 'answer']
            }
        }
    },
    required: ['questions']
};

export const generateQuiz = async (lesson: Lesson, level: CurriculumLevel, language: Language): Promise<Quiz> => {
    const targetLanguage = languageMap[language] || 'English';
    const vocabularyList = lesson.vocabulary.map(v => `${v.term}: ${v.vietnamese}`).join(', ');
    const grammarList = lesson.grammar.map(g => typeof g.title === 'string' ? g.title : g.title.en).join(', ');
    const bookTitle = typeof level.title === 'string' ? level.title : level.title.en;

    const prompt = `You are an English teacher creating a quiz for Vietnamese students based on the "${bookTitle}" textbook.
    The lesson is titled "${typeof lesson.title === 'string' ? lesson.title : lesson.title.en}".
    The vocabulary for this lesson is: ${vocabularyList}.
    The grammar points are: ${grammarList}.

    Generate a 5-question multiple-choice quiz. The questions should test understanding of the vocabulary and grammar in context. The questions and options should be in English.
    The quiz should be appropriate for a ${level.level}th-grade student's level.
    Ensure the JSON output is valid and strictly follows the provided schema. The 'question' and 'options' fields must be in English.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: quizSchema,
        }
    });
    
    const jsonStr = response.text.trim();
    const quizData = JSON.parse(jsonStr) as Quiz;
    
    if (!quizData || !Array.isArray(quizData.questions) || quizData.questions.length === 0) {
        throw new Error("Received invalid quiz data from API.");
    }

    return quizData;
};

export const generateExplanation = async (grammarTopic: string, lessonContext: string, level: CurriculumLevel, language: Language): Promise<string> => {
    const targetLanguage = languageMap[language] || 'English';

    const prompt = `As a friendly English teacher, explain the following English grammar point in simple terms for a ${level.level}th-grade Vietnamese student. The explanation should be in ${targetLanguage}.
    
    Grammar Topic: "${grammarTopic}"
    Lesson Context: "${lessonContext}"
    
    Provide a clear definition, 2-3 simple example sentences in English with a ${targetLanguage} translation. Keep the explanation concise and easy to understand. Format the output with clear headings.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            temperature: 0.5,
        }
    });

    return response.text;
};

export const generateDialogue = async (lessonTitle: string, vocabulary: VocabularyItem[], level: CurriculumLevel, language: Language): Promise<string> => {
    const targetLanguage = languageMap[language] || 'English';
    const vocabList = vocabulary.map(v => v.term).join(', ');

    const prompt = `Create a short, simple dialogue in English suitable for a ${level.level}th-grade Vietnamese learner. The dialogue should be based on the lesson "${lessonTitle}" and must use some of the following vocabulary: ${vocabList}.

    Provide the dialogue in this format:
    Person A: [English Text]
    Person B: [English Text]
    
    Also, provide the full ${targetLanguage} translation of the dialogue at the end.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            temperature: 0.7,
        }
    });

    return response.text;
};

const pronunciationFeedbackSchema = {
    type: Type.OBJECT,
    properties: {
        score: {
            type: Type.NUMBER,
            description: 'A score from 1 (poor) to 5 (excellent) on the pronunciation accuracy. The score should be an integer.'
        },
        feedback: {
            type: Type.STRING,
            description: 'A single paragraph of overall feedback on the pronunciation, mentioning clarity, rhythm, and accuracy of sounds. This should be encouraging.'
        },
        improvementTips: {
            type: Type.ARRAY,
            items: {
                type: Type.STRING,
            },
            description: 'A list of 1-3 specific, actionable tips for improvement. Focus on the most important errors. If pronunciation is excellent, this can be an empty array or contain praise.'
        }
    },
    required: ['score', 'feedback', 'improvementTips']
};

export const getPronunciationFeedback = async (targetText: string, audioBase64: string, level: CurriculumLevel, language: Language): Promise<PronunciationFeedback> => {
    const targetLanguage = languageMap[language] || 'English';
    const levelTitle = typeof level.title === 'string' ? level.title : level.title.en;

    const prompt = `You are an expert English pronunciation coach for Vietnamese learners. The student is practicing for the curriculum level "${levelTitle}".
    The user is trying to pronounce the word/phrase: "${targetText}".
    
    Analyze the user's provided audio recording. Compare it to the correct pronunciation of the target text.
    Provide constructive and encouraging feedback in ${targetLanguage}.
    
    Evaluate the pronunciation based on clarity, accuracy of sounds, and rhythm.
    Provide a score from 1 to 5, where 1 is poor and 5 is excellent.
    Provide overall feedback and specific, actionable tips for improvement. 
    Keep feedback concise and appropriate for the student's level.
    
    Structure your response in JSON format according to the schema.`;
    
    const audioPart: Part = {
        inlineData: {
            mimeType: 'audio/webm', 
            data: audioBase64,
        },
    };

    const textPart: Part = {
        text: prompt
    };

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: { parts: [textPart, audioPart] },
        config: {
            responseMimeType: "application/json",
            responseSchema: pronunciationFeedbackSchema,
            temperature: 0.3,
        }
    });

    const jsonStr = response.text.trim();
    const feedbackData = JSON.parse(jsonStr) as PronunciationFeedback;

    if (!feedbackData || typeof feedbackData.score !== 'number' || !feedbackData.feedback) {
        throw new Error("Received invalid pronunciation feedback from API.");
    }
    
    return feedbackData;
};

export const generateImageForTerm = async (term: string): Promise<string> => {
    try {
        const prompt = `A simple, clear, child-friendly educational flashcard illustration of "${term}" for young language learners. The image should be in a flat vector style with vibrant colors, featuring the object clearly on a plain white background. The illustration must not contain any text or letters.`;
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '1:1',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        } else {
            throw new Error("No image was generated.");
        }
    } catch (error) {
        console.error("Error generating image:", error);
        throw new Error("Failed to generate image.");
    }
};
