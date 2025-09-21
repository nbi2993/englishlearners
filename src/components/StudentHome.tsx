
import React from 'react';
import { User } from '../../types';
import Dashboard from './Dashboard';
import CourseCard from './CourseCard'; // Assuming this component exists

interface StudentHomeProps {
  user: User;
}

const StudentHome: React.FC<StudentHomeProps> = ({ user }) => {
  // Mock data for demonstration
  const courses = [
    { id: '1', title: 'English 101', progress: 75, nextDueDate: '2023-10-26' },
    { id: '2', title: 'History 202', progress: 50, nextDueDate: '2023-10-28' },
    { id: '3', title: 'Math 301', progress: 90, nextDueDate: '2023-10-25' },
  ];

  return (
    <Dashboard title={`Welcome, ${user.name}!`}>
      <div className="col-span-1 md:col-span-3">
        <h2 className="text-2xl font-bold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default StudentHome;
