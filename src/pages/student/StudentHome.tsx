
import React from 'react';
import Dashboard from '../components/Dashboard';
import CourseCard from '../components/CourseCard';
import { Course } from '../../types'; // Import the Course type

// Dummy data for courses
const dummyCourses: Course[] = [
  {
    id: '1',
    title: 'English for Beginners',
    description: 'A comprehensive course for beginners. Learn the basics of English grammar and vocabulary.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    progress: 65,
    series: "Primary",
    level: "Primary",
    lessons: [],
    color: "blue",
    rawLevel: {} as any,
  },
  {
    id: '2',
    title: 'Intermediate English Grammar',
    description: 'Improve your grammar with in-depth lessons and exercises.',
    imageUrl: 'https://images.unsplash.com/photo-1558021212-51b6ec1e0f39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    progress: 40,
    series: "Primary",
    level: "Primary",
    lessons: [],
    color: "green",
    rawLevel: {} as any,
  },
  // Add more dummy courses as needed
];

const StudentHome: React.FC = () => {
  return (
    <Dashboard>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Dashboard>
  );
};

export default StudentHome;
