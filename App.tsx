import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import TeacherDashboard from './components/TeacherDashboard';
import WritingGrader from './components/WritingGrader';
import SpeakingPartner from './components/SpeakingPartner';
import Settings from './components/Settings';
import type { View, User, Course, Lesson } from './types';
import { MOCK_USER } from './constants';
import { curriculumData } from './data/curriculum';
import { otherProgramsData } from './data/otherPrograms';

const translations = {
  en: {
    dashboard: 'Dashboard',
    'teacher-dashboard': 'Teacher Dashboard',
    'speaking-partner': 'Speaking Partner',
    'writing-grader': 'Writing Grader',
    settings: 'Settings',
  },
  vi: {
    dashboard: 'Bảng điều khiển',
    'teacher-dashboard': 'Bảng điều khiển giáo viên',
    'speaking-partner': 'Luyện nói',
    'writing-grader': 'Chấm bài viết',
    settings: 'Cài đặt',
  }
};

const App: React.FC = () => {
    const [user, setUser] = useState<User>(MOCK_USER);
    const [courses, setCourses] = useState<Course[]>([]);
    const [currentView, setCurrentView] = useState<View>('dashboard');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [language, setLanguage] = useState<'en' | 'vi'>('en');
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const processedCourses: Course[] = curriculumData.flatMap(category =>
            category.levels.map(level => ({
                id: level.level.toString(),
                title: level.title[language],
                series: category.category[language],
                level: level.subtitle.en.split(' - ')[0] as any,
                imageUrl: `https://ivs.edu.vn/wp-content/uploads/2023/11/Sach-Giao-Khoa-Tieng-Anh-6-i-Learn-Smart-World.jpg`,
                description: `A comprehensive course for ${level.subtitle[language]}.`,
                lessons: level.units.flatMap(unit =>
                    unit.lessons.map(lesson => ({
                        id: lesson.id.toString(),
                        title: lesson.title[language],
                        type: 'ebook',
                        content: `Content for ${lesson.title[language]}`,
                        rawLesson: lesson,
                    }))
                ),
                color: ['#4A90E2', '#50E3C2', '#F5A623', '#BD10E0', '#9013FE', '#F8E71C'][level.level % 6],
                progress: Math.floor(Math.random() * 100),
                rawLevel: level,
            }))
        );
        setCourses(processedCourses);
    }, [language]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        if (user.role === 'student' && currentView === 'teacher-dashboard') {
            setCurrentView('dashboard');
        }
    }, [user.role, currentView]);

    const handleSetView = (view: View) => {
        setCurrentView(view);
        setIsSidebarOpen(false);
        if (view === 'dashboard') {
            setSelectedCourse(null);
            setSelectedLesson(null);
        }
    };

    const handleSelectLesson = (lesson: Lesson, course: Course) => {
        setSelectedLesson(lesson);
        setSelectedCourse(course);
        setCurrentView('lesson');
    }

    const handleBackToDashboard = () => {
        setSelectedLesson(null);
        setCurrentView('dashboard');
    }

    const handleBackToCourses = () => {
        setSelectedCourse(null);
        setSelectedLesson(null);
        setCurrentView('dashboard');
    }

    const renderContent = () => {
        if (currentView === 'lesson' && selectedLesson && selectedCourse) {
            return <LessonView lesson={selectedLesson} course={selectedCourse} onBack={handleBackToDashboard} language={language} />;
        }

        switch (currentView) {
            case 'teacher-dashboard':
                return user.role === 'teacher' ? <TeacherDashboard language={language} translations={translations} /> : <Dashboard user={user} setUser={setUser} courses={courses} otherPrograms={otherProgramsData} setView={handleSetView} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} onSelectLesson={handleSelectLesson} onBackToCourses={handleBackToCourses} language={language} translations={translations}/>;
            case 'writing-grader':
                return <WritingGrader language={language} translations={translations} />;
            case 'speaking-partner':
                return <SpeakingPartner language={language} translations={translations} />;
            case 'settings':
                return <Settings
                    user={user}
                    setUser={setUser}
                    language={language}
                    setLanguage={setLanguage}
                    theme={theme}
                    setTheme={setTheme}
                    translations={translations}
                />;
            case 'dashboard':
            case 'lesson': // This case handles when a course is selected but no lesson yet
            default:
                return <Dashboard
                    user={user}
                    setUser={setUser}
                    courses={courses}
                    otherPrograms={otherProgramsData}
                    setView={handleSetView}
                    selectedCourse={selectedCourse}
                    setSelectedCourse={setSelectedCourse}
                    onSelectLesson={handleSelectLesson}
                    onBackToCourses={handleBackToCourses}
                    language={language}
                    translations={translations}
                />;
        }
    };

    return (
        <div className="flex h-screen font-sans">
             <div className="aurora-background"></div>
            <Sidebar
                user={user}
                currentView={currentView}
                setView={handleSetView}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                language={language}
                translations={translations}
            />
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="md:hidden h-16 flex-shrink-0 flex items-center justify-between px-4 sticky top-0 z-10">
                     <button onClick={() => setIsSidebarOpen(true)} className="h-10 w-10 flex-center text-slate-700 dark:text-slate-300 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
                        <i className="fa-solid fa-bars text-lg"></i>
                    </button>
                    <h1 className="text-lg font-bold">IVS English</h1>
                    <div className="w-10 h-10 flex-center">
                       <i className={`fa-solid ${user.avatar} text-2xl text-slate-700 dark:text-slate-200`}></i>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default App;