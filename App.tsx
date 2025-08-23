
import React, { useState, useCallback, useEffect } from 'react';
import { curriculumData } from './data/curriculum';
import { Lesson, Unit, CurriculumLevel } from './types';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import AIAssistant, { AIAction } from './components/AIAssistant';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import { SparklesIcon } from './components/Icons';
import { useTranslation } from './contexts/i18n';
import EBookReader from './components/EBookReader';
import OtherPrograms from './components/OtherPrograms';
import CurriculumDisplay from './components/CurriculumDisplay';
import SettingsModal from './components/SettingsModal';

type Screen = 'home' | 'dashboard' | 'curriculum' | 'other-programs' | 'lesson';
type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [activeLevel, setActiveLevel] = useState<CurriculumLevel | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [aiAssistantState, setAIAssistantState] = useState<{isOpen: boolean; action: AIAction | null}>({isOpen: false, action: null});
  const [ebookLevel, setEbookLevel] = useState<CurriculumLevel | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  const { t } = useTranslation();

  useEffect(() => {
    // Load theme from local storage
    const savedTheme = localStorage.getItem('ivs-theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
        // Or from user's OS preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
    
    // Load completed lessons
    try {
      const savedCompleted = localStorage.getItem('swCompletedLessons');
      if (savedCompleted) {
        setCompletedLessons(new Set(JSON.parse(savedCompleted)));
      }
    } catch (e) {
      console.error("Failed to parse completed lessons from localStorage", e);
      setCompletedLessons(new Set());
    }
  }, []);

  useEffect(() => {
    // Apply theme to HTML element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('ivs-theme', theme);
  }, [theme]);
  
  const handleToggleTheme = useCallback(() => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  const handleResetProgress = useCallback(() => {
    setCompletedLessons(new Set());
    localStorage.removeItem('swCompletedLessons');
  }, []);

  const handleToggleComplete = useCallback((lessonId: number) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      localStorage.setItem('swCompletedLessons', JSON.stringify(Array.from(newSet)));
      return newSet;
    });
  }, []);

  const handleMarkLessonComplete = useCallback((lessonId: number) => {
    setCompletedLessons(prev => {
        if (prev.has(lessonId)) return prev;
        const newSet = new Set(prev);
        newSet.add(lessonId);
        localStorage.setItem('swCompletedLessons', JSON.stringify(Array.from(newSet)));
        return newSet;
    });
  }, []);

  const handleLessonClick = useCallback((lesson: Lesson, unit: Unit, level: CurriculumLevel) => {
    setActiveLevel(level);
    setSelectedLesson(lesson);
    setSelectedUnit(unit);
    setActiveScreen('lesson');
  }, []);

  const handleSelectLevel = useCallback((level: CurriculumLevel) => {
    setActiveLevel(level);
    setSelectedLesson(null);
    setSelectedUnit(null);
    setActiveScreen('dashboard');
  }, []);
  
  const handleNavigate = (screen: Screen) => {
    if (screen === 'home') {
      setActiveLevel(null);
      setSelectedLesson(null);
      setSelectedUnit(null);
    }
    
    if (screen === 'dashboard' && !activeLevel) {
        return; 
    }

    setActiveScreen(screen);
  }

  const handleGoHome = useCallback(() => {
    handleNavigate('home');
  }, []);

  const handleOpenQuiz = useCallback(() => {
    setAIAssistantState({isOpen: true, action: 'quiz'});
  }, []);

  const handleOpenAIAssistant = useCallback(() => {
      setAIAssistantState({isOpen: true, action: null});
  }, []);

  const handleOpenEbook = useCallback((level: CurriculumLevel) => {
    setEbookLevel(level);
  }, []);

  const handleCloseEbook = useCallback(() => {
    setEbookLevel(null);
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
        case 'home':
            return <HomeScreen curriculum={curriculumData} onSelectLevel={handleSelectLevel} onShowOtherPrograms={() => handleNavigate('other-programs')} onOpenEbook={handleOpenEbook} />;
        case 'dashboard':
            if (activeLevel) {
                return <Dashboard
                    level={activeLevel}
                    completedLessons={completedLessons}
                    onLessonClick={(lesson, unit) => handleLessonClick(lesson, unit, activeLevel)}
                    onOpenEbook={handleOpenEbook}
                  />;
            }
            break;
        case 'lesson':
            if (selectedLesson && activeLevel && selectedUnit) {
                return <LessonView 
                    lesson={selectedLesson} 
                    unit={selectedUnit}
                    level={activeLevel}
                    completedLessons={completedLessons}
                    onToggleComplete={handleToggleComplete}
                    onOpenQuiz={handleOpenQuiz}
                    onGoBack={() => handleNavigate('dashboard')}
                    onLessonClick={(lesson, unit) => handleLessonClick(lesson, unit, activeLevel)}
                    />;
            }
            break;
        case 'curriculum':
            return <CurriculumDisplay onLessonClick={handleLessonClick} />;
        case 'other-programs':
            return <OtherPrograms
                onGoBack={handleGoHome}
                onViewProgram={(url) => setEbookLevel({
                    level: 'external',
                    title: { en: 'Program Viewer', vi: 'Trình xem chương trình' },
                    units: [],
                    ebookPdfUrl: url,
                })}
            />;
    }
    // Fallback to home
    return <HomeScreen curriculum={curriculumData} onSelectLevel={handleSelectLevel} onShowOtherPrograms={() => handleNavigate('other-programs')} onOpenEbook={handleOpenEbook} />;
  }

  return (
    <>
      <div className="flex h-screen bg-slate-50 text-gray-800 dark:bg-slate-900 dark:text-slate-200">
          <Sidebar onNavigate={handleNavigate} activeScreen={activeScreen} activeLevel={activeLevel} onOpenSettings={() => setIsSettingsOpen(true)} />
          <main className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto main-content-bg">
                {renderScreen()}
              </div>
          </main>
          {selectedLesson && activeLevel && (
              <>
                  <button
                      onClick={handleOpenAIAssistant}
                      className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-hover transition-transform transform hover:scale-110 z-40"
                      aria-label={t('aiAssistant')}
                  >
                      <SparklesIcon className="h-8 w-8" />
                  </button>
                  <AIAssistant 
                      lesson={selectedLesson}
                      level={activeLevel}
                      isOpen={aiAssistantState.isOpen}
                      initialAction={aiAssistantState.action}
                      onClose={() => setAIAssistantState({isOpen: false, action: null})}
                      onQuizComplete={() => handleMarkLessonComplete(selectedLesson.id)}
                  />
              </>
          )}
      </div>
      {ebookLevel && ebookLevel.ebookPdfUrl && (
          <EBookReader onClose={handleCloseEbook} pdfUrl={ebookLevel.ebookPdfUrl} />
      )}
       <SettingsModal 
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          currentTheme={theme}
          onToggleTheme={handleToggleTheme}
          onResetProgress={handleResetProgress}
      />
    </>
  );
};

export default App;