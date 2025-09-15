import type { User, Classes } from './types';

export const MOCK_USER: User = {
  id: 'user-01',
  name: 'Alex',
  avatar: 'fa-user-astronaut',
  level: 'Primary - Grade 5',
  points: 1250,
  badges: ['Grammar Guru', 'Perfect Pronunciation', 'Bookworm'],
  age: 10,
  gradeLevel: 'Grade 5',
  gender: 'Male',
};

export const MOCK_CLASSES: Classes = {
    'sw-6': {
        name: 'Smart World 6',
        students: [
            { id: 's1', name: 'Bella', avatar: 'https://i.pravatar.cc/150?u=bella', lastActivity: '2 hours ago', progress: 95, averageScore: 92, timeSpent: '15h 20m', isStruggling: false, scoreHistory: [{ date: 'W1', score: 88 }, { date: 'W2', score: 90 }, { date: 'W3', score: 95 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Completed' }] },
            { id: 's2', name: 'Charlie', avatar: 'https://i.pravatar.cc/150?u=charlie', lastActivity: '1 day ago', progress: 80, averageScore: 85, timeSpent: '12h 45m', isStruggling: false, scoreHistory: [{ date: 'W1', score: 80 }, { date: 'W2', score: 82 }, { date: 'W3', score: 85 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Completed' }] },
            { id: 's3', name: 'David', avatar: 'https://i.pravatar.cc/150?u=david', lastActivity: '5 hours ago', progress: 65, averageScore: 78, timeSpent: '11h 10m', isStruggling: false, scoreHistory: [{ date: 'W1', score: 75 }, { date: 'W2', score: 80 }, { date: 'W3', score: 78 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Pending' }] },
            { id: 's4', name: 'Emily', avatar: 'https://i.pravatar.cc/150?u=emily', lastActivity: '3 days ago', progress: 40, averageScore: 68, timeSpent: '8h 5m', isStruggling: true, scoreHistory: [{ date: 'W1', score: 70 }, { date: 'W2', score: 65 }, { date: 'W3', score: 68 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Pending' }] },
            { id: 's5', name: 'Frank', avatar: 'https://i.pravatar.cc/150?u=frank', lastActivity: '1 week ago', progress: 25, averageScore: 61, timeSpent: '5h 30m', isStruggling: true, scoreHistory: [{ date: 'W1', score: 65 }, { date: 'W2', score: 60 }, { date: 'W3', score: 61 }], assignments: [{ id: 'a1', title: 'Unit 1 Grammar', dueDate: 'Tomorrow', status: 'Overdue' }] },
        ]
    },
    'sm-4': {
        name: 'Super Minds 4',
        students: [
            { id: 's6', name: 'Grace', avatar: 'https://i.pravatar.cc/150?u=grace', lastActivity: '1 hour ago', progress: 98, averageScore: 96, timeSpent: '18h', isStruggling: false, scoreHistory: [{ date: 'W1', score: 92 }, { date: 'W2', score: 95 }, { date: 'W3', score: 98 }], assignments: [{ id: 'a2', title: 'Reading Comprehension', dueDate: 'Today', status: 'Completed' }] },
            { id: 's7', name: 'Henry', avatar: 'https://i.pravatar.cc/150?u=henry', lastActivity: '4 hours ago', progress: 85, averageScore: 88, timeSpent: '14h 30m', isStruggling: false, scoreHistory: [{ date: 'W1', score: 85 }, { date: 'W2', score: 88 }, { date: 'W3', score: 89 }], assignments: [{ id: 'a2', title: 'Reading Comprehension', dueDate: 'Today', status: 'Pending' }] },
        ]
    }
};