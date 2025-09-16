import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Curriculum from './components/Dashboard';
import LessonView from './components/LessonView';
import TeacherDashboard from './components/TeacherDashboard';
import WritingGrader from './components/WritingGrader';
import SpeakingPartner from './components/SpeakingPartner';
import Settings from './components/Settings';
import RoleSelection from './components/RoleSelection';
import type { View, User, Course, Lesson, Classes } from './types';
import { MOCK_USER, MOCK_CLASSES } from './constants';
import { curriculumData } from './data/curriculum';
import { otherProgramsData } from './data/otherPrograms';

const translations = {
  en: {
    home: 'Home',
    curriculum: 'Curriculum',
    'teacher-dashboard': 'Teacher Dashboard',
    'speaking-partner': 'Speaking Partner',
    'writing-grader': 'Writing Grader',
    settings: 'Settings',
  },
  vi: {
    home: 'Trang chủ',
    curriculum: 'Chương trình',
    'teacher-dashboard': 'Bảng điều khiển giáo viên',
    'speaking-partner': 'Luyện nói',
    'writing-grader': 'Chấm bài viết',
    settings: 'Cài đặt',
  }
};

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [courses, setCourses] = useState<Course[]>([]);
    const [classes, setClasses] = useState<Classes>({});
    const [currentView, setCurrentView] = useState<View>('home');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [language, setLanguage] = useState<'en' | 'vi'>('vi');
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [isInitialized, setIsInitialized] = useState(false);

    // Effect for initializing app state from localStorage
    useEffect(() => {
        try {
            const savedUser = localStorage.getItem('ivs-english-user');
            const savedClasses = localStorage.getItem('ivs-english-classes');
            const savedLang = localStorage.getItem('ivs-english-language');
            const savedTheme = localStorage.getItem('ivs-english-theme');

            if (savedUser) {
                // Ensure pinnedCourses exists
                const parsedUser = JSON.parse(savedUser);
                if (!parsedUser.pinnedCourses) {
                    parsedUser.pinnedCourses = [];
                }
                setUser(parsedUser);
            }
            if (savedClasses) {
                setClasses(JSON.parse(savedClasses));
            }
            if (savedLang) {
                setLanguage(savedLang as 'en' | 'vi');
            }
            if (savedTheme) {
                setTheme(savedTheme as 'light' | 'dark');
            }
        } catch (error) {
            console.error("Failed to load data from localStorage", error);
            // If loading fails, clear potentially corrupted storage
            localStorage.clear();
        } finally {
            setIsInitialized(true);
        }
    }, []);

    // Effects for saving state changes to localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem('ivs-english-user', JSON.stringify(user));
        }
    }, [user]);

    useEffect(() => {
        // Do not save empty initial state
        if (Object.keys(classes).length > 0) {
          localStorage.setItem('ivs-english-classes', JSON.stringify(classes));
        }
    }, [classes]);
    
    useEffect(() => {
        localStorage.setItem('ivs-english-language', language);
    }, [language]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('ivs-english-theme', theme);
    }, [theme]);


    useEffect(() => {
        const processedCourses: Course[] = curriculumData.flatMap(category =>
            category.levels.map(level => ({
                id: `${category.category.en.replace(/\s+/g, '-')}-${level.level}`,
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
        if (user && user.role === 'student' && currentView === 'teacher-dashboard') {
            setCurrentView('home');
        }
    }, [user, user?.role, currentView]);

    const handleSetView = (view: View) => {
        setCurrentView(view);
        setIsSidebarOpen(false);
        if (view === 'curriculum' || view === 'home') {
            // Only clear selectedCourse if navigating back to curriculum main page
            if(view === 'curriculum' && selectedCourse) {
                // do nothing, we are likely navigating TO a lesson view
            } else {
                 setSelectedCourse(null);
            }
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
        setCurrentView('curriculum');
    }

    const handleBackToCourses = () => {
        setSelectedCourse(null);
        setSelectedLesson(null);
        setCurrentView('curriculum');
    }
    
    const handleSelectRole = (role: 'student' | 'teacher') => {
        const newUser: User = { ...MOCK_USER, role };
        setUser(newUser);
        if (role === 'teacher') {
            // Give teachers some mock data to start with
            setClasses(MOCK_CLASSES);
        }
    };
    
    if (!isInitialized) {
        // You can return a loading spinner here if initialization takes time
        return null;
    }
    
    if (!user) {
        return <RoleSelection onSelectRole={handleSelectRole} />;
    }


    const renderContent = () => {
        if (currentView === 'lesson' && selectedLesson && selectedCourse) {
            return <LessonView lesson={selectedLesson} course={selectedCourse} onBack={handleBackToDashboard} language={language} />;
        }

        switch (currentView) {
            case 'teacher-dashboard':
                return user.role === 'teacher' ? <TeacherDashboard classes={classes} setClasses={setClasses} language={language} translations={translations} /> : <Home user={user} setUser={setUser} courses={courses} otherPrograms={otherProgramsData} classes={classes} language={language} setView={handleSetView} setSelectedCourse={setSelectedCourse} />;
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
            case 'curriculum':
                return <Curriculum
                    user={user}
                    setUser={setUser}
                    courses={courses}
                    otherPrograms={otherProgramsData}
                    selectedCourse={selectedCourse}
                    setSelectedCourse={setSelectedCourse}
                    onSelectLesson={handleSelectLesson}
                    onBackToCourses={handleBackToCourses}
                    language={language}
                />;
            case 'home':
            default:
                return <Home
                    user={user}
                    setUser={setUser}
                    courses={courses}
                    otherPrograms={otherProgramsData}
                    classes={classes}
                    language={language}
                    setView={handleSetView}
                    setSelectedCourse={setSelectedCourse}
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