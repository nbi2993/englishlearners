
export interface LocalizedString {
    en: string;
    vi: string;
}

export interface LocalizedStringArray {
    en: string[];
    vi: string[];
}

export interface VocabularyItem {
    term?: string;
    pronunciation?: string;
    vietnamese: string;
    imageUrl?: string;
}

export interface GrammarPoint {
    title: string | LocalizedString;
    explanation: string[] | LocalizedStringArray;
}

export interface Activity {
    type: 'Warm-up' | 'During' | 'Wrap-up' | 'Test' | 'Practice';
    description: string[] | LocalizedStringArray;
}

export interface Lesson {
    id: number;
    title: LocalizedString; // Changed to use LocalizedString
    aims: LocalizedStringArray; // Changed to use LocalizedStringArray
    vocabulary: VocabularyItem[];
    grammar: GrammarPoint[];
    activities: Activity[];
    day?: number;
}

export interface Unit {
    id: number;
    title: LocalizedString; // Changed to use LocalizedString
    lessons: Lesson[];
}

export interface CurriculumLevel {
    level: number | string; // Kept as number | string for flexibility
    title: LocalizedString; // Changed to use LocalizedString
    subtitle?: LocalizedString; // Changed to use LocalizedString, kept optional
    ebookPdfUrl?: string; // Kept optional
    units: Unit[];
}

// Define the structure for a curriculum category (e.g., Kindergarten, Primary)
export interface CurriculumCategory {
    category: LocalizedString;
    levels: CurriculumLevel[];
}

// Define the overall curriculum as an array of categories
export type Curriculum = CurriculumCategory[];

export interface QuizQuestion {
    question: string;
    options: {
        [key: string]: string; // e.g. { A: '...', B: '...' }
    };
    answer: string; // e.g. 'A'
}

export interface Quiz {
    questions: QuizQuestion[];
}

export interface OtherProgram {
    title: LocalizedString;
    description: LocalizedString;
    driveLink: string;
}

export interface PronunciationFeedback {
    score: number;
    feedback: string;
    improvementTips: string[];
}

export interface SearchResult {
    type: 'lesson' | 'vocabulary' | 'grammar' | 'aim';
    level: CurriculumLevel;
    unit: Unit;
    lesson: Lesson;
    matchedItem: VocabularyItem | GrammarPoint | string; 
    matchedText: string;
}
