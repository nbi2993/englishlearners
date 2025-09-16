import React, { useMemo } from 'react';
import type { User, Course, Classes } from '../types';
import { MOCK_CLASSES } from '../constants'; // Using mock classes for the home summary

interface TeacherHomeProps {
  user: User;
  onSelectCourse: (course: Course) => void;
  language: 'en' | 'vi';
}

const TeacherHome: React.FC<TeacherHomeProps> = ({ user, language }) => {
  const classes: Classes = MOCK_CLASSES; // In a real app, this would come from props or a data store

  const stats = useMemo(() => {
    const classCount = Object.keys(classes).length;
    const studentCount = Object.values(classes).reduce((sum, c) => sum + c.students.length, 0);
    const strugglingCount = Object.values(classes).flatMap(c => c.students).filter(s => s.isStruggling).length;
    return { classCount, studentCount, strugglingCount };
  }, [classes]);
  
  const welcomeMessage = language === 'vi' 
    ? `Chào mừng, ${user.name}!`
    : `Welcome, ${user.name}!`;

  const welcomeSubMessage = language === 'vi'
    ? 'Đây là tổng quan nhanh về các lớp học của bạn.'
    : "Here's a quick overview of your classes.";

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
        <header className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{welcomeMessage}</h1>
            <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">{welcomeSubMessage}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-glass p-6 flex items-center gap-4">
                <i className="fa-solid fa-school text-4xl text-blue-500"></i>
                <div>
                    <p className="text-2xl font-bold">{stats.classCount}</p>
                    <p className="text-sm text-slate-500">{language === 'vi' ? 'Lớp học' : 'Classes'}</p>
                </div>
            </div>
            <div className="card-glass p-6 flex items-center gap-4">
                <i className="fa-solid fa-users text-4xl text-green-500"></i>
                <div>
                    <p className="text-2xl font-bold">{stats.studentCount}</p>
                    <p className="text-sm text-slate-500">{language === 'vi' ? 'Học sinh' : 'Students'}</p>
                </div>
            </div>
            <div className="card-glass p-6 flex items-center gap-4">
                <i className="fa-solid fa-triangle-exclamation text-4xl text-amber-500"></i>
                <div>
                    <p className="text-2xl font-bold">{stats.strugglingCount}</p>
                    <p className="text-sm text-slate-500">{language === 'vi' ? 'Học sinh cần chú ý' : 'Struggling'}</p>
                </div>
            </div>
        </div>

        <div className="card-glass p-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                {language === 'vi' ? 'Hành động nhanh' : 'Quick Actions'}
            </h2>
            <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">
                    <i className="fa-solid fa-plus mr-2"></i> {language === 'vi' ? 'Tạo Lớp học mới' : 'Create New Class'}
                </button>
                 <button className="btn btn-secondary">
                    <i className="fa-solid fa-file-pen mr-2"></i> {language === 'vi' ? 'Giao bài tập' : 'Assign Homework'}
                </button>
                 <button className="btn btn-secondary-outline">
                    <i className="fa-solid fa-bullhorn mr-2"></i> {language === 'vi' ? 'Gửi thông báo' : 'Send Announcement'}
                </button>
            </div>
        </div>
    </div>
  );
};

export default TeacherHome;
