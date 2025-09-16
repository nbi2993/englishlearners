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
  const [language, setLanguage] = useState<'en' | 'vi'>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Load saved data from localStorage
    try {
      const savedUser = localStorage.getItem('ivs-user');
      const savedClasses = localStorage.getItem('ivs-classes');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      if (savedClasses) {
        setClasses(JSON.parse(savedClasses));
      }
    } catch (error) {
      console.error("Failed to parse data from localStorage", error);
      localStorage.clear(); // Clear corrupted data
    }

    const savedTheme = localStorage.getItem('ivs-theme');
    if (savedTheme === 'dark' || (savedTheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
    } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
    }
  }, []);
  
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

  const handleBackToCurriculum = () => {
    setSelectedCourse(null);
    setView('curriculum');
  }
  
  const renderView = () => {
    if (selectedCourse) {
        return <CourseDetail course={selectedCourse} onBack={handleBackToCurriculum} language={language} />;
    }

    switch (view) {
      case 'home':
        return <Home user={user!} onSelectCourse={handleSelectCourse} language={language} />;
      case 'curriculum':
        return <Dashboard onSelectCourse={handleSelectCourse} user={user!} onUpdateUser={handleUpdateUser} language={language}/>;
      case 'teacher-dashboard':
        return <TeacherDashboard classes={classes} setClasses={handleUpdateClasses} />;
      case 'writing-grader':
        return <WritingGrader />;
      case 'speaking-partner':
        return <SpeakingPartner />;
      case 'settings':
        return <Settings user={user!} onUpdateUser={handleUpdateUser} classes={classes} onUpdateClasses={handleUpdateClasses} theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>;
      case 'user-guide':
        return <UserGuide language={language} />;
      default:
        return <Home user={user!} onSelectCourse={handleSelectCourse} language={language} />;
    }
  };

  const currentTheme = theme === 'dark' ? 'dark' : '';

  if (!user) {
      return (
        <div className={`app-container ${currentTheme}`}>
            <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                <main className="flex-1 overflow-y-auto">
                    <RoleSelection onSelectRole={handleSetRole} />
                </main>
            </div>
        </div>
      );
  }

  return (
    <div className={`app-container ${currentTheme}`}>
      <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
        <Sidebar user={user} currentView={view} setView={setView} />
        <main className="flex-1 overflow-y-auto">
            {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
