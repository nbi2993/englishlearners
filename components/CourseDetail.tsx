import React from 'react';
import type { Course, Lesson, User } from '../types';

interface CourseDetailProps {
  user: User;
  setUser: (user: User) => void;
  course: Course;
  onBack: () => void;
  onSelectLesson: (lesson: Lesson) => void;
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


const CourseDetail: React.FC<CourseDetailProps> = ({
    user,
    setUser,
    course,
    onBack,
    onSelectLesson,
    language
}) => {
    
    const handlePinClick = (courseId: string) => {
        const currentPinned = user.pinnedCourses || [];
        const isPinned = currentPinned.includes(courseId);
        const newPinned = isPinned
            ? currentPinned.filter(id => id !== courseId)
            : [...currentPinned, courseId];
        setUser({ ...user, pinnedCourses: newPinned });
    };

    return (
        <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
            <button onClick={onBack} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-6 hover:underline">
                <i className="fa-solid fa-arrow-left"></i>
                {language === 'vi' ? 'Quay lại' : 'Back'}
            </button>
            <div className="card-glass p-6 flex flex-col sm:flex-row items-start gap-6 mb-8 relative">
                <div className="w-32 h-32 rounded-lg flex-shrink-0" style={{ backgroundColor: course.color }}>
                    {/* Image could go here */}
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{course.title}</h1>
                    <p className="text-slate-700 dark:text-slate-400 mt-1">{course.description}</p>
                    <div className="flex items-center gap-4 mt-4">
                        <a href={course.rawLevel.ebookPdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            {language === 'vi' ? 'Xem eBook PDF' : 'View eBook PDF'} <i className="fa-solid fa-external-link-alt ml-2"></i>
                        </a>
                         <button 
                            onClick={() => handlePinClick(course.id)}
                            title={(user.pinnedCourses || []).includes(course.id) ? "Unpin from Home" : "Pin to Home"}
                            className={`w-10 h-10 rounded-full flex-center transition-all duration-300
                                ${ (user.pinnedCourses || []).includes(course.id)
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white'
                                }`}
                        >
                            <i className="fa-solid fa-thumbtack text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">{language === 'vi' ? 'Các bài học' : 'Lessons'}</h2>
            <div className="space-y-3">
                {course.lessons.map(lesson => (
                    <LessonListItem key={lesson.id} lesson={lesson} onClick={() => onSelectLesson(lesson)} />
                ))}
            </div>
        </div>
    )
};

export default CourseDetail;
