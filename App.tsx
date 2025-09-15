import React, { useState, useMemo, useEffect } from 'react';
import { Course, User, View, Lesson } from './types';
import { MOCK_USER } from './constants';
import { curriculumData } from './data/curriculum';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import TeacherDashboard from './components/TeacherDashboard';
import WritingGrader from './components/WritingGrader';
import SpeakingPartner from './components/SpeakingPartner';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';

type Language = 'en' | 'vi';
type Theme = 'light' | 'dark' | 'system';

const translations = {
  en: {
    dashboard: 'Dashboard',
    lesson: 'Lesson',
    'teacher-dashboard': 'Teacher Mode',
    'writing-grader': 'AI Writing Grader',
    'speaking-partner': 'AI Speaking Partner',
    settings: 'Settings',
  },
  vi: {
    dashboard: 'Bảng điều khiển',
    lesson: 'Bài học',
    'teacher-dashboard': 'Chế độ Giáo viên',
    'writing-grader': 'AI Chấm điểm Viết',
    'speaking-partner': 'AI Luyện nói',
    settings: 'Cài đặt',
  }
};

const levelMap: { [key: string]: 'Preschool' | 'Primary' | 'Junior High' | 'High School' } = {
  'Kindergarten IVS-Mastery': 'Preschool',
  'Primary IVS-Mastery': 'Primary',
  'Secondary IVS-Mastery': 'Junior High',
  'Highschool IVS-Mastery': 'High School'
};

const colorMap: { [key: string]: string } = {
  'Kindergarten IVS-Mastery': 'bg-rose-700',
  'Primary IVS-Mastery': 'bg-sky-700',
  'Secondary IVS-Mastery': 'bg-emerald-700',
  'Highschool IVS-Mastery': 'bg-violet-700',
};

export default function App() {
  const [user, setUser] = useState<User>(MOCK_USER);
  const [view, setView] = useState<View>('teacher-dashboard');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [lastViewedCourse, setLastViewedCourse] = useState<Course | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('vi');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'system');

  useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        if (theme === 'system') {
            document.documentElement.classList.toggle('dark', e.matches);
        }
    };

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (theme === 'system') {
        localStorage.removeItem('theme');
        document.documentElement.classList.toggle('dark', systemPrefersDark.matches);
        systemPrefersDark.addEventListener('change', handleSystemThemeChange);
    } else {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
        systemPrefersDark.removeEventListener('change', handleSystemThemeChange);
    }

    return () => systemPrefersDark.removeEventListener('change', handleSystemThemeChange);
}, [theme]);


  const courses: Course[] = useMemo(() => {
    return curriculumData.flatMap(category =>
      category.levels.map(levelData => {
        const description = `${levelData.subtitle[language]}. This course covers units like ${levelData.units.slice(0, 2).map(u => u.title[language]).join(', ')}${levelData.units.length > 2 ? ' and more' : ''}.`;
        
        return {
          id: `${category.category.en.replace(/\s+/g, '-').toLowerCase()}-${levelData.level}`,
          title: levelData.title[language],
          series: category.category[language],
          level: levelMap[category.category.en] || 'Primary',
          imageUrl: `https://picsum.photos/seed/${levelData.title.en.replace(/[^a-zA-Z0-9]/g, '-')}/400/300`,
          description: description,
          lessons: levelData.units.flatMap(unit =>
            unit.lessons.map((lesson): Lesson => ({
              id: lesson.id.toString(),
              title: lesson.title[language],
              type: 'ebook',
              content: `Aims:\n- ${lesson.aims[language].join('\n- ')}`,
              rawLesson: lesson,
            }))
          ),
          color: colorMap[category.category.en] || 'bg-gray-700',
          progress: Math.floor(Math.random() * 80) + 5, // random progress
          rawLevel: levelData,
        }
      })
    );
  }, [language]);

  const handleSetView = (newView: View) => {
    setView(newView);
    setIsSidebarOpen(false);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setLastViewedCourse(course);
    handleSetView('lesson');
  };

  const currentTitle = useMemo(() => {
    if (view === 'lesson' && selectedCourse) {
      return selectedCourse.title;
    }
    return translations[language][view];
  }, [view, selectedCourse, language]);

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard user={user} courses={courses} onSelectCourse={handleSelectCourse} lastViewedCourse={lastViewedCourse} />;
      case 'lesson':
        return selectedCourse ? <LessonView course={selectedCourse} /> : <Dashboard user={user} courses={courses} onSelectCourse={handleSelectCourse} lastViewedCourse={lastViewedCourse}/>;
      case 'teacher-dashboard':
        return <TeacherDashboard />;
      case 'writing-grader':
        return <WritingGrader />;
      case 'speaking-partner':
        return <SpeakingPartner />;
      case 'settings':
        return <Settings user={user} setUser={setUser} language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />;
      default:
        return <Dashboard user={user} courses={courses} onSelectCourse={handleSelectCourse} lastViewedCourse={lastViewedCourse}/>;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
      <Sidebar currentView={view} setView={handleSetView} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} language={language} translations={translations} />
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-20">
            <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600 dark:text-gray-300">
                <i className="fa-solid fa-bars text-xl"></i>
            </button>
            <h1 className="text-lg font-bold">{currentTitle}</h1>
            <div className="w-6"></div>
        </header>
        <div className="flex-1 p-4 sm:p-6 md:p-8">
            {renderView()}
        </div>
      </main>
    </div>
  );
}