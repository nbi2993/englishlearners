import React, { useMemo, useEffect, useState } from 'react';
import type { Course, OtherProgram, Lesson, User } from '../types';
import CourseCard from './CourseCard';

interface CurriculumProps {
  user: User;
  setUser: (user: User) => void;
  courses: Course[];
  otherPrograms: OtherProgram[];
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  onSelectLesson: (lesson: Lesson, course: Course) => void;
  onBackToCourses: () => void;
  language: 'en' | 'vi';
}

const LessonListItem: React.FC<{ lesson: Lesson; onClick: () => void; }> = ({ lesson, onClick }) => (
    <button onClick={onClick} className="w-full text-left p-4 rounded-lg bg-slate-50/50 dark:bg-slate-800/20 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all flex justify-between items-center border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
        <div>
            <p className="font-semibold text-slate-900 dark:text-white">{lesson.rawLesson.day ? `Day ${lesson.rawLesson.day}: ` : ''}{lesson.title}</p>
            <p className="text-sm text-slate-700 dark:text-slate-400">{lesson.rawLesson.aims.en[0]}</p>
        </div>
        <i className="fa-solid fa-chevron-right text-slate-400"></i>
    </button>
);

const Curriculum: React.FC<CurriculumProps> = ({
    user,
    setUser,
    courses,
    otherPrograms,
    selectedCourse,
    setSelectedCourse,
    onSelectLesson,
    onBackToCourses,
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

    if (selectedCourse) {
        return (
            <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
                <button onClick={onBackToCourses} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-6 hover:underline">
                    <i className="fa-solid fa-arrow-left"></i>
                    Back to All Courses
                </button>
                <div className="card-glass p-6 flex flex-col sm:flex-row items-start gap-6 mb-8">
                    <div className="w-32 h-32 rounded-lg flex-shrink-0" style={{ backgroundColor: selectedCourse.color }}>
                        {/* Image could go here */}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{selectedCourse.title}</h1>
                        <p className="text-slate-700 dark:text-slate-400 mt-1">{selectedCourse.description}</p>
                        <a href={selectedCourse.rawLevel.ebookPdfUrl} target="_blank" rel="noopener noreferrer" className="mt-4 btn btn-primary">
                            View eBook PDF <i className="fa-solid fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Lessons</h2>
                <div className="space-y-3">
                    {selectedCourse.lessons.map(lesson => (
                        <LessonListItem key={lesson.id} lesson={lesson} onClick={() => onSelectLesson(lesson, selectedCourse)} />
                    ))}
                </div>
            </div>
        )
    }

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