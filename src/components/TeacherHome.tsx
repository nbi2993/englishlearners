
import React from 'react';
import { User } from '../../types'; // Adjusted path

interface TeacherHomeProps {
  user: User;
}

const TeacherHome: React.FC<TeacherHomeProps> = ({ user }) => {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold">Welcome, Teacher {user.name}!</h1>
      <p>This is your dashboard.</p>
      {/* Future teacher-specific components will go here */}
    </div>
  );
};

export default TeacherHome;
