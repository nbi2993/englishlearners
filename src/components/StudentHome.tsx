
import React from 'react';
import { User } from '../../types'; // Adjusted path

interface StudentHomeProps {
  user: User;
}

const StudentHome: React.FC<StudentHomeProps> = ({ user }) => {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold">Welcome, Student {user.name}!</h1>
      <p>This is your dashboard.</p>
      {/* Future student-specific components will go here */}
    </div>
  );
};

export default StudentHome;
