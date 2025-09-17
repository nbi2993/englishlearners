import React, { useState, useEffect } from 'react';
import type { View, User, Course, Classes } from './types';
import { MOCK_USER, MOCK_CLASSES } from './constants';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CourseDetail from './components/CourseDetail';
import TeacherDashboard from './components/TeacherDashboard';
import WritingGrader from './components/WritingGrader';
import SpeakingPartner from './components/SpeakingPartner';
import Settings from './components/Settings';
import UserGuide from './components/UserGuide';
import Login from './components/Login';
import AssistiveTouch from './components/AssistiveTouch';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [classes, setClasses] = useState<Classes>(() => {
    try {
      const savedClasses = localStorage.getItem('ivs-classes');
      return savedClasses ? JSON.parse(savedClasses) : MOCK_CLASSES;
    } catch (error) {
      return MOCK_CLASSES;
    }
  });
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('ivs-theme') as 'light' | 'dark';
    return savedTheme || 'dark';
  });
  const [language, setLanguage] = useState<'en' | 'vi'>(() => {
    const savedLang = localStorage.getItem('ivs-language') as 'en' | 'vi';
    return savedLang || 'en';
  });
  const [fontSize, setFontSize] = useState<string>(() => {
    return localStorage.getItem('ivs-fontSize') || '16px';
  });
  const [fontWeight, setFontWeight] = useState<number>(() => {
    return parseInt(localStorage.getItem('ivs-fontWeight') || '400', 10);
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // For now, we'll use a mock user structure and enhance it later
        const newUser: User = {
          ...MOCK_USER, // Spread mock user to get default fields
          uid: firebaseUser.uid,
          email: firebaseUser.email || 'No email',
          displayName: firebaseUser.displayName || 'No name',
          photoURL: firebaseUser.photoURL || MOCK_USER.photoURL,
          role: 'student', // Default role, can be changed later
        };
        setUser(newUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem('ivs-classes', JSON.stringify(classes));
  }, [classes]);
  
  useEffect(() => {
    localStorage.setItem('ivs-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  useEffect(() => {
    localStorage.setItem('ivs-language', language);
  }, [language]);
  
  useEffect(() => {
    document.documentElement.style.fontSize = fontSize;
    localStorage.setItem('ivs-fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.style.fontWeight = fontWeight.toString();
    localStorage.setItem('ivs-fontWeight', fontWeight.toString());
  }, [fontWeight]);

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error('Logout failed', error));
  };

  const handleSetView = (view: View) => {
    setSelectedCourse(null);
    setCurrentView(view);
    setIsSidebarOpen(false);
  };
  
  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
  };
  
  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  const renderView = () => {
    if (selectedCourse) {
      return <CourseDetail course={selectedCourse} onBack={() => setSelectedCourse(null)} language={language} setView={handleSetView} />;
    }

    switch (currentView) {
      case 'home':
        return <Home user={user!} onSelectCourse={handleSelectCourse} language={language} setView={handleSetView} classes={classes}/>;
      case 'curriculum':
        return <Dashboard onSelectCourse={handleSelectCourse} user={user!} onUpdateUser={handleUpdateUser} language={language}/>;
      case 'teacher-dashboard':
        return <TeacherDashboard classes={classes} setClasses={setClasses} language={language} />;
      case 'writing-grader':
        return <WritingGrader language={language} setView={handleSetView} />;
      case 'speaking-partner':
        return <SpeakingPartner language={language} setView={handleSetView} />;
      case 'settings':
        return <Settings 
                    user={user!} 
                    onUpdateUser={handleUpdateUser} 
                    classes={classes}
                    onUpdateClasses={setClasses}
                    theme={theme}
                    setTheme={setTheme}
                    language={language}
                    setLanguage={setLanguage}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    fontWeight={fontWeight}
                    setFontWeight={setFontWeight}
                />;
      case 'user-guide':
        return <UserGuide language={language} />;
      default:
        return <Home user={user!} onSelectCourse={handleSelectCourse} language={language} setView={handleSetView} classes={classes}/>;
    }
  };
  
  if (!user) {
    return <Login language={language} />;
  }

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200">
      <Sidebar 
        user={user} 
        currentView={currentView} 
        setView={handleSetView} 
        language={language} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onLogout={handleLogout} // Pass logout handler to Sidebar
      />
      <div className="flex-1 flex flex-col h-screen">
        <Header currentView={currentView} language={language} onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto custom-scrollbar relative">
          {renderView()}
          <AssistiveTouch setView={handleSetView} language={language} />
        </main>
      </div>
    </div>
  );
}

export default App;
