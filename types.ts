
export interface User {
  uid: string;
  email: string | null;
  name: string | null;
  role: 'teacher' | 'student' | null;
}

export interface Course {
  id: string;
  title: string;
  description: string; // Added description
  imageUrl: string;    // Added image URL
  progress: number;
  nextDueDate: string | null;
}
