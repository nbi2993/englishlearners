import React from 'react';
import type { User, Course, OtherProgram, Classes, View } from '../types';
import StudentHome from './StudentHome';
import TeacherHome from './TeacherHome';

interface HomeProps {
  user: User;
  setUser: (user: User) => void;
  courses: Course[];
  otherPrograms: OtherProgram[];
  classes: Classes;
  language: 'en' | 'vi';
  setView: (view: View) => void;
  setSelectedCourse: (course: Course | null) => void;
}

const Home: React.FC<HomeProps> = (props) => {
  if (props.user.role === 'teacher') {
    return <TeacherHome {...props} />;
  }
  return <StudentHome {...props} />;
};

export default Home;