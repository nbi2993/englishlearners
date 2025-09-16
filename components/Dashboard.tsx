import React, { useMemo, useEffect, useState } from 'react';
import type { Course, OtherProgram, User } from '../types';
import CourseCard from './CourseCard';

interface CurriculumProps {
  user: User;
  setUser: (user: User) => void;
  courses: Course[];
  otherPrograms: OtherProgram[];
  setSelectedCourse: (course: Course | null) => void;
  language: 'en' | 'vi';
}

const Curriculum: React.FC<CurriculumProps> = ({
    user,
    setUser,
    courses,
    otherPrograms,
    setSelectedCourse,
    language,
}) => {
    
    const groupedCourses = useMemo(() => {
        return courses.reduce((acc, course) => {
            const category = course.series;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(course);
            return acc;
        }, {} as Record<string, Course[]>);
    }, [courses]);
    
    const [openCategories, setOpenCategories] = useState<string[]>([]);

    useEffect(() => {
        // Automatically open the first category when courses load
        const firstCategory = Object.keys(groupedCourses)[0];
        if (firstCategory) {
            setOpenCategories([firstCategory]);
        }
    }, [groupedCourses]);

    const toggleCategory = (category: string) => {
        setOpenCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category) 
                : [...prev, category]
        );
    };

    const handlePinClick = (courseId: string) => {
      const currentPinned = user.pinnedCourses || [];
      const isPinned = currentPinned.includes(courseId);
      const newPinned = isPinned
        ? currentPinned.filter(id => id !== courseId)
        : [...currentPinned, courseId];
      setUser({ ...user, pinnedCourses: newPinned });
    };

    return (
        <div className="animate-fade-in p-4 sm:p-6 lg:p-8 space-y-8">
            <h1 className="text-3xl font-bold">{language === 'vi' ? 'Chương trình học' : 'Curriculum'}</h1>
            <p className="text-slate-700 dark:text-slate-400 -mt-6">{language === 'vi' ? 'Nhấn vào biểu tượng ghim để thêm hoặc xóa khóa học khỏi Trang chủ của bạn.' : 'Click the pin icon to add or remove courses from your Home page.'}</p>
            <section>
                <div className="space-y-4">
                    {Object.entries(groupedCourses).map(([category, courseList]) => {
                        const isOpen = openCategories.includes(category);
                        return (
                            <div key={category} className="card-glass overflow-hidden">
                                <button
                                    onClick={() => toggleCategory(category)}
                                    className="w-full p-4 text-left flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                                >
                                    <h3 className="text-lg font-bold">{category}</h3>
                                    <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                                </button>
                                {isOpen && (
                                     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                                        {courseList.map(course => (
                                            <CourseCard 
                                                key={course.id} 
                                                course={course} 
                                                onClick={() => setSelectedCourse(course)}
                                                isPinned={(user.pinnedCourses || []).includes(course.id)}
                                                onPinClick={handlePinClick}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold mb-4">{language === 'vi' ? 'Chương trình khác' : 'Other Programs'}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {otherPrograms.map(program => (
                        <a href={program.driveLink} target="_blank" rel="noopener noreferrer" key={program.title.en} className="block p-6 card-glass hover:shadow-lg hover:-translate-y-1 transition-all">
                            <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">{program.title[language]}</h3>
                            <p className="text-slate-700 dark:text-slate-400 mt-2 text-sm">{program.description[language]}</p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Curriculum;