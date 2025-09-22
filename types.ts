
export interface User {
  uid: string;
  email: string | null;
  name: string | null;
  role: 'teacher' | 'student' | null;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  progress: number;
  nextDueDate: string | null;
}

// Represents a single student, often in the context of a class
export interface Student {
  id: string;
  name: string;
  avatar: string;
  lastActivity: string;
  progress: number;
  averageScore: number;
  timeSpent: string;
  isStruggling: boolean;
  // Detailed views might include these, but keeping it optional for overviews
  scoreHistory?: { date: string; score: number }[];
  assignments?: { id: string; title: string; dueDate: string; status: string }[];
  grades?: { assignmentId: string; grade: number }[];
}

// Represents a teacher's class
export interface ClassData {
  id: string;
  name: string;
  studentCount: number;
  averageProgress: number;
  alerts: number; // Number of struggling students
  students: Student[];
}
