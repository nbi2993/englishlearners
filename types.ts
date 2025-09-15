
// types.ts

export type View = 'dashboard' | 'lesson' | 'teacher-dashboard' | 'writing-grader' | 'speaking-partner' | 'settings';

export interface BilingualText {
  en: string;
  vi: string;
}

export interface VocabularyItem {
  term: string;
  pronunciation?: string;
  vietnamese: string;
  imageUrl?: string;
}

export interface GrammarItem {
  title: BilingualText;
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

export interface Lesson {
  id: number;
  title: BilingualText;
  aims?: {
    en: string[];
    vi: string[];
  };
  vocabulary?: VocabularyItem[];
  grammar?: GrammarItem[];
  activities?: Activity[];
  content?: string;
  day?: number;
}

export interface Unit {
  id: number;
  title: BilingualText;
  lessons: Lesson[];
}

export interface CurriculumLevel {
  level: number;
  title: BilingualText;
  subtitle: BilingualText;
  ebookPdfUrl?: string;
  units: Unit[];
}

export interface Course {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  level: 'Preschool' | 'Primary' | 'Junior High' | 'High School';
  imageUrl?: string;
  description?: string;
  units: Unit[];
  color?: string;
  progress?: number;
  ebookPdfUrl?: string;
  rawLevel?: CurriculumLevel;  
}

export interface TeacherProfile {
  subjectsAndLevels: string[];
  yearsOfExperience: number;
  classes: string[];
  specializations: string[];
  rating: number;
  reviews: number;
}

export interface StudentProfile {
  grade: string;
  learningStyle?: string;
  interests?: string[];
  recentScores?: number[];
}

export interface User {
  id: string;
  name: string;
  avatar: string; // font-awesome class
  level: string;
  points: number;
  badges: string[];
  role: 'student' | 'teacher';
  age?: string | number;
  gender?: string;
  email?: string;
  gradeLevel?: string;
  studentProfile?: StudentProfile;
  teacherProfile?: TeacherProfile;
}

export interface Chat {
  model: string;
  config: {
    systemInstruction?: string;
    temperature?: number;
  };
  sendMessageStream: (params: { message: string }) => Promise<{
    response: {
      text: () => string;
    }
  }>;
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
