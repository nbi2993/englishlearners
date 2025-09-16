import React, { useState, useMemo } from 'react';
import type { User, Course, View } from '../types';
import ProfileEditModal from './ProfileEditModal';
import CourseCard from './CourseCard';

interface StudentHomeProps {
  user: User;
  setUser: (user: User) => void;
  courses: Course[];
  language: 'en' | 'vi';
  setView: (view: View) => void;
  setSelectedCourse: (course: Course | null) => void;
}

const StatCard: React.FC<{ icon: string; value: string | number; label: string; iconBg: string; valueColor: string; }> = ({ icon, value, label, iconBg, valueColor }) => (
    <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex-center flex-shrink-0 ${iconBg}`}>
            <i className={`fa-solid ${icon} text-white text-xl`}></i>
        </div>
        <div>
            <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
            <div className="text-sm text-slate-700 dark:text-slate-400">{label}</div>
        </div>
    </div>
);

const WelcomeHub: React.FC<{user: User, onEditProfile: () => void, language: 'en' | 'vi'}> = ({ user, onEditProfile, language }) => (
    <div className="card-glass p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        {language === 'vi' ? `Chào mừng, ${user.name}!` : `Welcome, ${user.name}!`}
                    </h1>
                    <p className="text-slate-700 dark:text-slate-300 mt-1">
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


const StudentHome: React.FC<StudentHomeProps> = ({ user, setUser, courses, language, setView, setSelectedCourse }) => {
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);

    const myCourses = useMemo(() => {
        const pinnedIds = user.pinnedCourses || [];
        const courseMap = new Map(courses.map(c => [c.id, c]));
        return pinnedIds.map(id => courseMap.get(id)).filter(Boolean) as Course[];
    }, [courses, user.pinnedCourses]);

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
            {isProfileModalOpen && (
                <ProfileEditModal user={user} setUser={setUser} onClose={() => setProfileModalOpen(false)} />
            )}
            
            <WelcomeHub user={user} onEditProfile={() => setProfileModalOpen(true)} language={language} />

            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{language === 'vi' ? 'Các khóa học của tôi' : 'My Courses'}</h2>
                    <button onClick={() => setView('curriculum')} className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                        {language === 'vi' ? 'Xem tất cả' : 'View All'}
                    </button>
                </div>
                {myCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {myCourses.map(course => (
                            <CourseCard 
                                key={course.id} 
                                course={course} 
                                onClick={() => {
                                    setSelectedCourse(course);
                                    setView('curriculum');
                                }}
                                isPinned={(user.pinnedCourses || []).includes(course.id)}
                                onPinClick={handlePinClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="card-glass p-8 text-center col-span-full">
                        <i className="fa-solid fa-thumbtack text-4xl text-slate-400 mb-4"></i>
                        <p className="text-slate-800 dark:text-slate-200 font-semibold">{language === 'vi' ? 'Chưa có khóa học nào được ghim' : 'No Pinned Courses Yet'}</p>
                        <p className="text-slate-700 dark:text-slate-400 mt-2 mb-4 text-sm">{language === 'vi' ? 'Đi đến trang Chương trình để chọn và ghim các khóa học bạn muốn truy cập nhanh.' : 'Go to the Curriculum page to select and pin the courses you want to access quickly.'}</p>
                        <button onClick={() => setView('curriculum')} className="btn btn-primary">
                           {language === 'vi' ? 'Khám phá Chương trình' : 'Explore Curriculum'}
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default StudentHome;