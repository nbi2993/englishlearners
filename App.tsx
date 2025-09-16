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
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Load saved data from localStorage
    try {
      const savedUser = localStorage.getItem('ivs-user');
      const savedClasses = localStorage.getItem('ivs-classes');
      const savedLanguage = localStorage.getItem('ivs-language');
      
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      if (savedClasses) {
        setClasses(JSON.parse(savedClasses));
      }
       if (savedLanguage === 'vi' || savedLanguage === 'en') {
        setLanguage(savedLanguage);
      } else {
        // Default to Vietnamese if no language is set
        setLanguage('vi');
        localStorage.setItem('ivs-language', 'vi');
      }
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
  
  const handleSetLanguage = (lang: 'en' | 'vi') => {
    setLanguage(lang);
    localStorage.setItem('ivs-language', lang);
  }

  const handleSetUser = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('ivs-user', JSON.stringify(newUser));
  }

  const handleSetRole = (role: 'student' | 'teacher') => {
      const newUser: User = { ...MOCK_USER, role, id: `user-${Date.now()}` };
      if (role === 'teacher') {
          newUser.name = 'Ms. Evelyn';
          newUser.avatar = 'fa-user-tie';
          newUser.title = "English Teacher";
          newUser.subject = "English, Literature";
      } else {
          newUser.name = 'Alex';
          newUser.avatar = 'fa-user-astronaut';
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
        return <CourseDetail course={selectedCourse} onBack={handleBackToView} language={language} />;
    }

    switch (view) {
      case 'home':
        return <Home user={user!} onSelectCourse={handleSelectCourse} language={language} setView={setView} />;
      case 'curriculum':
        return <Dashboard onSelectCourse={handleSelectCourse} user={user!} onUpdateUser={handleUpdateUser} language={language}/>;
      case 'teacher-dashboard':
        return <TeacherDashboard classes={classes} setClasses={handleUpdateClasses} language={language} />;
      case 'writing-grader':
        return <WritingGrader language={language} />;
      case 'speaking-partner':
        return <SpeakingPartner language={language} />;
      case 'settings':
        return <Settings user={user!} onUpdateUser={handleUpdateUser} classes={classes} onUpdateClasses={handleUpdateClasses} theme={theme} setTheme={setTheme} language={language} setLanguage={handleSetLanguage}/>;
      case 'user-guide':
        return <UserGuide language={language} />;
      default:
        return <Home user={user!} onSelectCourse={handleSelectCourse} language={language} setView={setView} />;
    }
  };

  const currentTheme = theme === 'dark' ? 'dark' : '';

  if (!user) {
      return (
        <div className={`app-container ${currentTheme}`}>
            <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                <main className="flex-1 overflow-y-auto">
                    <RoleSelection onSelectRole={handleSetRole} language={language} />
                </main>
            </div>
        </div>
      );
  }

  return (
    <div className={`app-container ${currentTheme}`}>
      <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
        <Sidebar user={user} currentView={view} setView={setView} language={language} />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
            {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;