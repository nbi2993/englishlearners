import React from 'react';
import type { User, Course } from '../types';
import StudentHome from './StudentHome';
import TeacherHome from './TeacherHome';

interface HomeProps {
  user: User;
  onSelectCourse: (course: Course) => void;
  language: 'en' | 'vi';
}

const Home: React.FC<HomeProps> = ({ user, onSelectCourse, language }) => {
  if (user.role === 'student') {
    return <StudentHome user={user} onSelectCourse={onSelectCourse} language={language} />;
  }
  
  if (user.role === 'teacher') {
    return <TeacherHome user={user} onSelectCourse={onSelectCourse} language={language} />;
  }

  return <div>Invalid user role.</div>;
};

export default Home;
