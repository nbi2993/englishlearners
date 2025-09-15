
import type { User, Classes } from './types';

export const MOCK_TEACHER: User = {
  id: 'teacher-01', 
  name: 'Alex Thompson',
  avatar: 'fa-user-tie',
  level: 'Senior Teacher',
  points: 5250,
  badges: ['Master Educator', 'Student Favorite', 'Innovation Leader'],
  role: 'teacher',
  teacherProfile: {
    subjectsAndLevels: ['English - Primary', 'English - Secondary'],
    specializations: ['Grammar', 'Conversation'],
    yearsOfExperience: 5,
    classes: ['sw-6', 'sm-4'],
    rating: 4.8,
    reviews: 120
  },
  age: 32,
  gender: 'Male',
  email: 'alex.thompson@ivs.edu.vn'
};

export const MOCK_STUDENT: User = {
  id: 'student-01',
  name: 'Minh Anh',
  avatar: 'fa-user-graduate',
  level: 'Primary - Grade 5',
  points: 1250,
  badges: ['Grammar Guru', 'Perfect Pronunciation', 'Bookworm'],
  role: 'student',
  studentProfile: {
    grade: 'Grade 5',
    learningStyle: 'Visual',
    interests: ['Reading', 'Music', 'Games'],
    recentScores: [85, 92, 88, 90]
  },
  age: 10,
  gender: 'Female',
  email: 'minh.anh@student.ivs.edu.vn'
};

export const MOCK_CLASSES: Classes = {
    'sw-6': {
        name: 'Smart World 6',
        grade: 'Grade 6',
        students: [
            { id: 's1', name: 'Bella', avatar: 'https://i.pravatar.cc/150?u=bella', lastActive: '2 hours ago', lastActivity: '2 hours ago', grade: 'Grade 6', level: 'Advanced', attendance: 95, progress: 95, averageScore: 92, timeSpent: '15h 20m', isStruggling: false, scoreHistory: [{ date: 'W1', score: 88 }, { date: 'W2', score: 90 }, { date: 'W3', score: 95 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Completed' }] },
            { id: 's2', name: 'Charlie', avatar: 'https://i.pravatar.cc/150?u=charlie', lastActive: '1 day ago', lastActivity: '1 day ago', grade: 'Grade 6', level: 'Intermediate', attendance: 80, progress: 80, averageScore: 85, timeSpent: '12h 45m', isStruggling: false, scoreHistory: [{ date: 'W1', score: 80 }, { date: 'W2', score: 82 }, { date: 'W3', score: 85 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Completed' }] },
            { id: 's3', name: 'David', avatar: 'https://i.pravatar.cc/150?u=david', lastActive: '5 hours ago', lastActivity: '5 hours ago', grade: 'Grade 6', level: 'Intermediate', attendance: 70, progress: 65, averageScore: 78, timeSpent: '11h 10m', isStruggling: false, scoreHistory: [{ date: 'W1', score: 75 }, { date: 'W2', score: 80 }, { date: 'W3', score: 78 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Pending' }] },
            { id: 's4', name: 'Emily', avatar: 'https://i.pravatar.cc/150?u=emily', lastActive: '3 days ago', lastActivity: '3 days ago', grade: 'Grade 6', level: 'Beginner', attendance: 60, progress: 40, averageScore: 68, timeSpent: '8h 5m', isStruggling: true, scoreHistory: [{ date: 'W1', score: 70 }, { date: 'W2', score: 65 }, { date: 'W3', score: 68 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Pending' }] },
            { id: 's5', name: 'Frank', avatar: 'https://i.pravatar.cc/150?u=frank', lastActive: '1 week ago', lastActivity: '1 week ago', grade: 'Grade 6', level: 'Beginner', attendance: 40, progress: 25, averageScore: 61, timeSpent: '5h 30m', isStruggling: true, scoreHistory: [{ date: 'W1', score: 65 }, { date: 'W2', score: 60 }, { date: 'W3', score: 61 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Overdue' }] },
        ]
    },
    'sm-4': {
        name: 'Super Minds 4',
        grade: 'Grade 4',
        students: [
            { id: 's6', name: 'Grace', avatar: 'https://i.pravatar.cc/150?u=grace', lastActive: '1 hour ago', lastActivity: '1 hour ago', grade: 'Grade 4', level: 'Advanced', attendance: 98, progress: 98, averageScore: 96, timeSpent: '18h', isStruggling: false, scoreHistory: [{ date: 'W1', score: 92 }, { date: 'W2', score: 95 }, { date: 'W3', score: 98 }], assignments: [{ id: 'a2', title: 'Reading Comprehension', dueDate: 'Today', status: 'Completed' }] },
            { id: 's7', name: 'Henry', avatar: 'https://i.pravatar.cc/150?u=henry', lastActive: '4 hours ago', lastActivity: '4 hours ago', grade: 'Grade 4', level: 'Intermediate', attendance: 85, progress: 85, averageScore: 88, timeSpent: '14h 30m', isStruggling: false, scoreHistory: [{ date: 'W1', score: 85 }, { date: 'W2', score: 88 }, { date: 'W3', score: 89 }], assignments: [{ id: 'a2', title: 'Reading Comprehension', dueDate: 'Today', status: 'Pending' }] },
        ]
    }
};
