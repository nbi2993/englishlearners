// types.ts

export type View = 'dashboard' | 'lesson' | 'teacher-dashboard' | 'writing-grader' | 'speaking-partner' | 'settings';

export interface User {
  id: string;
  name: string;
  avatar: string; // font-awesome class
  level: string;
  points: number;
  badges: string[];
  role: 'student' | 'teacher';
  age?: string | number;
  gradeLevel?: string;
  gender?: string;
  streak: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'ebook' | 'video' | 'quiz';
  content: string;
  rawLesson: CurriculumLesson;
}

export interface Course {
  id: string;
  title: string;
  series: string;
  level: 'Preschool' | 'Primary' | 'Junior High' | 'High School';
  imageUrl: string;
  description: string;
  lessons: Lesson[];
  color: string;
  progress: number;
  rawLevel: CurriculumLevel;
}

export interface WritingFeedback {
  overall: string;
  grammar: string;
  vocabulary: string;
  coherence: string;
  score: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Based on data/curriculum.ts and other data files

interface LocalizedString {
    en: string;
    vi: string;
}

export interface VocabularyItem {
    term: string;
    pronunciation: string;
    vietnamese: string;
    imageUrl?: string;
}

export interface GrammarPoint {
    title: LocalizedString;
    explanation: {
        en: string[];
        vi: string[];
    };
}

export interface Activity {
    type: string;
    description: {
        en: string[];
        vi: string[];
    };
}

export interface CurriculumLesson {
    id: number;
    title: LocalizedString;
    aims: {
        en: string[];
        vi: string[];
    };
    vocabulary: VocabularyItem[];
    grammar: GrammarPoint[];
    activities: Activity[];
    day?: number;
}

export interface Unit {
    id: number;
    title: LocalizedString;
    lessons: CurriculumLesson[];
}

export interface CurriculumLevel {
    level: number;
    title: LocalizedString;

    subtitle: LocalizedString;
    ebookPdfUrl: string;
    units: Unit[];
}

export interface CurriculumCategory {
    category: LocalizedString;
    levels: CurriculumLevel[];
}

export type Curriculum = CurriculumCategory[];

export interface OtherProgram {
    title: LocalizedString;
    description: LocalizedString;
    driveLink: string;
}

// For TeacherDashboard
export interface Assignment {
    id: string;
    title: string;
    dueDate: string;
    status: 'Completed' | 'Pending' | 'Overdue';
}

export interface Student {
    id: string;
    name: string;
    avatar: string;
    lastActivity: string;
    progress: number;
    averageScore: number;
    timeSpent: string;
    isStruggling: boolean;
    scoreHistory: { date: string; score: number }[];
    assignments: Assignment[];
}

export interface ClassData {
    name: string;
    students: Student[];
}

export type Classes = Record<string, ClassData>;