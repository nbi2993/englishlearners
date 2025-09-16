import React from 'react';
import type { User, Course, OtherProgram, Classes } from '../types';
import StudentHome from './StudentHome';
import TeacherHome from './TeacherHome';

interface HomeProps {
  user: User;
  setUser: (user: User) => void;
  courses: Course[];
  otherPrograms: OtherProgram[];
  classes: Classes;
  language: 'en' | 'vi';
  setSelectedCourse: (course: Course | null) => void;
}

const Home: React.FC<HomeProps> = (props) => {
  if (props.user.role === 'teacher') {
    return <TeacherHome {...props} />;
  }
  return <StudentHome {...props} />;
};

export default Home;