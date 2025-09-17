import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import TeacherDashboard from './components/TeacherDashboard';
import WritingGrader from './components/WritingGrader';
import SpeakingPartner from './components/SpeakingPartner';
import Settings from './components/Settings';
import UserGuide from './components/UserGuide';
import RoleSelection from './components/RoleSelection';
import CourseDetail from './components/CourseDetail';
import Dashboard from './components/Dashboard';
import { MOCK_USER, MOCK_CLASSES } from './constants';
import type { User, View, Course, Classes } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [classes, setClasses] = useState<Classes>(MOCK_CLASSES);
  const [view, setView] = useState<View>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [language, setLanguage] = useState<'en' | 'vi'>('vi');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [fontSize, setFontSize] = useState('16px');
  const [fontWeight, setFontWeight] = useState(400);

  useEffect(() => {
    // Load saved data from localStorage
    try {
      const savedUser = localStorage.getItem('ivs-user');
      const savedClasses = localStorage.getItem('ivs-classes');
      const savedLanguage = localStorage.getItem('ivs-language');
      const savedFontSize = localStorage.getItem('ivs-fontSize');
      const savedFontWeight = localStorage.getItem('ivs-fontWeight');
      
      if (savedUser) setUser(JSON.parse(savedUser));
      if (savedClasses) setClasses(JSON.parse(savedClasses));
      if (savedLanguage === 'vi' || savedLanguage === 'en') {
        setLanguage(savedLanguage);
      } else {
        setLanguage('vi');
        localStorage.setItem('ivs-language', 'vi');
      }
      if (savedFontSize) setFontSize(savedFontSize);
      if (savedFontWeight) setFontWeight(parseInt(savedFontWeight, 10));

    } catch (error) {
      console.error("Failed to parse data from localStorage", error);
      localStorage.clear(); // Clear corrupted data
    }

    const savedTheme = localStorage.getItem('ivs-theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
    } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = fontSize;
    document.documentElement.style.fontWeight = fontWeight.toString();
    localStorage.setItem('ivs-fontSize', fontSize);
    localStorage.setItem('ivs-fontWeight', fontWeight.toString());
  }, [fontSize, fontWeight]);
  
  const handleSetLanguage = (lang: 'en' | 'vi') => {
    setLanguage(lang);
    localStorage.setItem('ivs-language', lang);
  }

  const handleSetUser = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('ivs-user', JSON.stringify(newUser));
  }

  const handleSetRole = (role: 'student' | 'teacher') => {
    const baseUser = { ...MOCK_USER, id: `user-${Date.now()}` };
    let newUser: User;

    if (role === 'teacher') {
        const { gradeLevel, ...teacherDefaults } = baseUser;
        newUser = {
            ...teacherDefaults,
            role: 'teacher',
            name: 'Ms. Evelyn',
            avatar: 'fa-user-tie',
            title: "English Teacher",
            subject: "English, Literature",
        };
    } else {
        const { title, subject, ...studentDefaults } = baseUser;
        newUser = {
            ...studentDefaults,
            role: 'student',
            name: 'Alex',
            avatar: 'fa-user-astronaut',
        };
    }
    handleSetUser(newUser);
  };
  
  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('ivs-user', JSON.stringify(updatedUser));
  };
  
  const handleUpdateClasses = useCallback((updatedClasses: Classes) => {
    setClasses(updatedClasses);
    localStorage.setItem('ivs-classes', JSON.stringify(updatedClasses));
  }, []);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleBackToView = () => {
    setSelectedCourse(null);
  }
  
  const renderContent = () => {
    if (selectedCourse) {
        return <CourseDetail course={selectedCourse} onBack={handleBackToView} language={language} setView={setView} />;
    }

    switch (view) {
      case 'home':
        return <Home user={user!} onSelectCourse={handleSelectCourse} language={language} setView={setView} classes={classes} />;
      case 'curriculum':
        return <Dashboard onSelectCourse={handleSelectCourse} user={user!} onUpdateUser={handleUpdateUser} language={language}/>;
      case 'teacher-dashboard':
        return <TeacherDashboard classes={classes} setClasses={handleUpdateClasses} language={language} />;
      case 'writing-grader':
        return <WritingGrader language={language} setView={setView} />;
      case 'speaking-partner':
        return <SpeakingPartner language={language} setView={setView} />;
      case 'settings':
        return <Settings user={user!} onUpdateUser={handleUpdateUser} classes={classes} onUpdateClasses={handleUpdateClasses} theme={theme} setTheme={setTheme} language={language} setLanguage={handleSetLanguage} fontSize={fontSize} setFontSize={setFontSize} fontWeight={fontWeight} setFontWeight={setFontWeight} />;
      case 'user-guide':
        return <UserGuide language={language} />;
      default:
        return <Home user={user!} onSelectCourse={handleSelectCourse} language={language} setView={setView} classes={classes} />;
    }
  };

  if (!user) {
      return (
        <div className={`app-container h-full`}>
            <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                <main className="flex-1 overflow-y-auto">
                    <RoleSelection onSelectRole={handleSetRole} language={language} />
                </main>
            </div>
        </div>
      );
  }

  return (
    <div className={`app-container h-full`}>
      <div className="flex h-screen bg-transparent">
        <Sidebar user={user} currentView={view} setView={setView} language={language} />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
            {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;