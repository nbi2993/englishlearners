// types.ts

export type View = 'dashboard' | 'lesson' | 'teacher-dashboard' | 'writing-grader' | 'speaking-partner' | 'settings';

export interface BilingualText {
  en: string;
  vi: string;
}

export interface ScoreEntry {
  date: string;
  score: number;
  type?: string; // Making type optional since it's not used in the mock data
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: 'Completed' | 'Pending' | 'Overdue';
  score?: number;
}

export interface Classes {
  [key: string]: {
    name: string;
    grade: string;
    students: Student[];
  };
}

export interface Student {
  id: string;
  name: string;
  avatar: string;
  grade: string;
  level: string;
  attendance: number;
  lastActive: string;
  progress: number;
  averageScore: number;
  timeSpent: string;
  isStruggling: boolean;
  lastActivity: string;
  scoreHistory: ScoreEntry[];
  assignments: Assignment[];
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

export type GrammarPoint = GrammarItem;

export interface CurriculumLesson extends Lesson {
  vocabPreview?: string[];
  grammarPreview?: string[];
  objectives?: string[];
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

export interface Course {
  id: string;
  title: BilingualText;
  subtitle?: BilingualText;
  level: 'Preschool' | 'Primary' | 'Junior High' | 'High School';
  imageUrl: string;
  description: string;
  series: string;
  units: Unit[];
  color: string;
  progress: number;
  ebookPdfUrl?: string;
  rawLevel?: CurriculumLevel;  
}

export interface CurriculumLevel {
  level: number;
  title: BilingualText;
  subtitle: BilingualText;
  ebookPdfUrl?: string;
  units: Unit[];
}

export interface CurriculumCategory {
  category: BilingualText;
  levels: CurriculumLevel[];
}

export type Curriculum = CurriculumCategory[];

export interface OtherProgram {
  title: BilingualText;
  description: BilingualText;
  driveLink: string;
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
  avatar: string;
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

export interface ChatConfig {
  systemInstruction?: string;
  temperature?: number;
}

export interface Chat {
  model: string;
  config: ChatConfig;
  sendMessageStream: (params: { message: string }) => Promise<{
    response: {
      text: () => string;
    }
  }>;
}