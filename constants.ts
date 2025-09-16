import type { User, Classes, TeacherSchedule } from './types';

export const MOCK_USER: User = {
  id: 'user-01',
  name: 'Alex',
  avatar: 'fa-user-astronaut',
  level: 'N/A',
  points: 0,
  badges: [],
  role: 'student',
  age: '',
  gradeLevel: '',
  gender: '',
  streak: 0,
  pinnedCourses: [],
  title: '',
  subject: '',
};

export const MOCK_CLASSES: Classes = {
  'grade-5': {
    name: 'Grade 5',
    students: [
      { id: 's1', name: 'An Nguyen', avatar: 'https://i.pravatar.cc/150?u=an', lastActivity: '2 hours ago', progress: 75, averageScore: 8.5, timeSpent: '5h 30m', isStruggling: false, scoreHistory: [], assignments: [], grades: [] },
      { id: 's2', name: 'Binh Pham', avatar: 'https://i.pravatar.cc/150?u=binh', lastActivity: '1 day ago', progress: 40, averageScore: 6.2, timeSpent: '2h 15m', isStruggling: true, scoreHistory: [], assignments: [], grades: [] },
      { id: 's3', name: 'Chi Tran', avatar: 'https://i.pravatar.cc/150?u=chi', lastActivity: '5 minutes ago', progress: 92, averageScore: 9.1, timeSpent: '8h 05m', isStruggling: false, scoreHistory: [], assignments: [], grades: [] },
    ]
  },
  'grade-6': {
    name: 'Grade 6',
    students: [
      { id: 's4', name: 'Dung Le', avatar: 'https://i.pravatar.cc/150?u=dung', lastActivity: 'Yesterday', progress: 25, averageScore: 5.5, timeSpent: '1h 45m', isStruggling: true, scoreHistory: [], assignments: [], grades: [] },
      { id: 's5', name: 'Giang Hoang', avatar: 'https://i.pravatar.cc/150?u=giang', lastActivity: '3 days ago', progress: 88, averageScore: 8.9, timeSpent: '7h 15m', isStruggling: false, scoreHistory: [], assignments: [], grades: [] },
    ]
  }
};

export const MOCK_TEACHER_SCHEDULE: TeacherSchedule = [
  { id: 'ts1', className: 'Grade 6', day: 'Monday', period: 1, startTime: '07:30', endTime: '08:15' },
  { id: 'ts2', className: 'Grade 7', day: 'Monday', period: 3, startTime: '09:25', endTime: '10:10' },
  { id: 'ts3', className: 'Grade 8', day: 'Tuesday', period: 2, startTime: '08:25', endTime: '09:10' },
  { id: 'ts4', className: 'Grade 9', day: 'Tuesday', period: 4, startTime: '10:20', endTime: '11:05' },
  { id: 'ts5', className: 'Grade 6', day: 'Wednesday', period: 2, startTime: '08:25', endTime: '09:10' },
  { id: 'ts6', className: 'Grade 8', day: 'Wednesday', period: 5, startTime: '11:15', endTime: '12:00' },
  { id: 'ts7', className: 'Grade 7', day: 'Thursday', period: 1, startTime: '07:30', endTime: '08:15' },
  { id: 'ts8', className: 'Grade 9', day: 'Friday', period: 3, startTime: '09:25', endTime: '10:10' },
];