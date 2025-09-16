import React from 'react';
import type { User, Course, View } from '../types';
import StudentHome from './StudentHome';
import TeacherHome from './TeacherHome';

interface HomeProps {
  user: User;
  onSelectCourse: (course: Course) => void;
  language: 'en' | 'vi';
  setView: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ user, onSelectCourse, language, setView }) => {
  if (user.role === 'student') {
    return <StudentHome user={user} onSelectCourse={onSelectCourse} language={language} setView={setView} />;
  }
  
  if (user.role === 'teacher') {
    return <TeacherHome user={user} onSelectCourse={onSelectCourse} language={language} setView={setView} />;
  }

  return <div>Invalid user role.</div>;
};

export default Home;