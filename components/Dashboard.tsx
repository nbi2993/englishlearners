import React, { useState } from 'react';
import type { User, Course, OtherProgram, Lesson } from '../types';
import CourseCard from './CourseCard';
import ProfileEditModal from './ProfileEditModal';

interface DashboardProps {
  user: User;
  setUser: (user: User) => void;
  courses: Course[];
  otherPrograms: OtherProgram[];
  setView: (view: any) => void;
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  onSelectLesson: (lesson: Lesson, course: Course) => void;
  onBackToCourses: () => void;
  language: 'en' | 'vi';
  translations: any;
}

const StatCard: React.FC<{ icon: string; value: string | number; label: string; iconBg: string; valueColor: string; }> = ({ icon, value, label, iconBg, valueColor }) => (
    <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex-center flex-shrink-0 ${iconBg}`}>
            <i className={`fa-solid ${icon} text-white text-xl`}></i>
        </div>
        <div>
            <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
        </div>
    </div>
);

const WelcomeHub: React.FC<{user: User, onEditProfile: () => void, language: 'en' | 'vi'}> = ({ user, onEditProfile, language }) => (
    <div className="card-glass p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                        {language === 'vi' ? `Chào mừng, ${user.name}!` : `Welcome, ${user.name}!`}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">
                        {language === 'vi' ? 'Sẵn sàng cho một ngày học tuyệt vời!' : 'Ready for a great day of learning!'}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-slate-700 flex-center border-2 border-white/50">
                        <i className={`fa-solid ${user.avatar} text-4xl text-blue-600 dark:text-blue-400`}></i>
                    </div>
                    <button onClick={onEditProfile} className="btn btn-secondary h-10 w-10 !rounded-full">
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                <StatCard icon="fa-star" value={user.points} label={language === 'vi' ? 'Điểm' : 'Points'} iconBg="bg-amber-500" valueColor="text-amber-500" />
                <StatCard icon="fa-fire" value={user.streak} label={language === 'vi' ? 'Chuỗi ngày' : 'Streak'} iconBg="bg-orange-500" valueColor="text-orange-500" />
                <StatCard icon="fa-trophy" value={user.badges.length} label={language === 'vi' ? 'Huy hiệu' : 'Badges'} iconBg="bg-violet-500" valueColor="text-violet-500" />
            </div>
        </div>
    </div>
);

const LessonListItem: React.FC<{ lesson: Lesson; onClick: () => void; }> = ({ lesson, onClick }) => (
    <button onClick={onClick} className="w-full text-left p-4 rounded-lg bg-slate-50/50 dark:bg-slate-800/20 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all flex justify-between items-center border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
        <div>
            <p className="font-semibold text-slate-800 dark:text-white">{lesson.rawLesson.day ? `Day ${lesson.rawLesson.day}: ` : ''}{lesson.title}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{lesson.rawLesson.aims.en[0]}</p>
        </div>
        <i className="fa-solid fa-chevron-right text-slate-400"></i>
    </button>
);

const Dashboard: React.FC<DashboardProps> = ({
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
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    
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
                        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">{selectedCourse.title}</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">{selectedCourse.description}</p>
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
             {isProfileModalOpen && (
                <ProfileEditModal user={user} setUser={setUser} onClose={() => setProfileModalOpen(false)} />
            )}
            
            <WelcomeHub user={user} onEditProfile={() => setProfileModalOpen(true)} language={language} />

            <section>
                <h2 className="text-2xl font-bold mb-4">{language === 'vi' ? 'Khóa học của bạn' : 'Your Courses'}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.filter(course => course).map(course => (
                        <CourseCard key={course.id} course={course} onClick={() => setSelectedCourse(course)} />
                    ))}
                </div>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold mb-4">{language === 'vi' ? 'Chương trình khác' : 'Other Programs'}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {otherPrograms.map(program => (
                        <a href={program.driveLink} target="_blank" rel="noopener noreferrer" key={program.title.en} className="block p-6 card-glass hover:shadow-lg hover:-translate-y-1 transition-all">
                            <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">{program.title[language]}</h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{program.description[language]}</p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;