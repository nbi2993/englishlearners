
// This file contains shared type definitions for the application.

// Represents the structure of a user document in Firestore.
export interface User {
  uid: string;          // Firebase Authentication user ID
  email: string | null; // User's email address
  name: string;         // Display name
  avatar: string;       // Path or identifier for the user's avatar image
  photoURL?: string;      // URL of the user's profile picture (e.g., from Google)
  createdAt: any;       // Timestamp of account creation
  role: 'student' | 'teacher' | null; // User's role in the application
  points: number;       // Points earned by the user
  badges: string[];     // Array of badge identifiers
  streak: number;       // Current learning streak
  pinnedCourses: string[]; // IDs of courses pinned to the dashboard
  // Optional fields for teacher profiles
  age?: number | null;
  gender?: 'male' | 'female' | 'other' | null;
  level?: 'beginner' | 'intermediate' | 'advanced' | null;
  title?: string;        // Professional title (e.g., "English Teacher")
  subject?: string;      // Subject they teach
  gradeLevel?: string;   // Grade level they teach
}

// Represents the combined user object, including Firebase Auth and Firestore data.
// This is the type used in the AuthContext.
export type AuthUser = User | null;
