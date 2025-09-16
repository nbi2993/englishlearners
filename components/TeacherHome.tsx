import React, { useMemo } from 'react';
import type { User, Classes, Student, Course } from '../types';
import CourseCard from './CourseCard';

interface TeacherHomeProps {
  user: User;
  setUser: (user: User) => void;
  classes: Classes;
  courses: Course[];
  language: 'en' | 'vi';
  setSelectedCourse: (course: Course | null) => void;
}

const AtRiskStudentCard: React.FC<{student: Student}> = ({ student }) => (
    <div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
        <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full" />
        <div>
            <p className="font-semibold">{student.name}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
                Progress: {student.progress}% - Avg Score: {student.averageScore}
            </p>
        </div>
        <button className="ml-auto text-xs btn btn-secondary !px-2 !py-1">View Report</button>
    </div>
);


const TeacherHome: React.FC<TeacherHomeProps> = ({ user, setUser, classes, courses, language, setSelectedCourse }) => {
    const studentsAtRisk = Object.values(classes).flatMap(c => c.students).filter(s => s.isStruggling);
    const totalStudents = Object.values(classes).reduce((sum, c) => sum + c.students.length, 0);
    const totalClasses = Object.keys(classes).length;
    
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
            <div className="card-glass p-6 md:p-8 rounded-2xl md:rounded-3xl">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {language === 'vi' ? `Chào mừng, Giáo viên ${user.name}!` : `Welcome, Teacher ${user.name}!`}
                </h1>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalClasses}</div>
                        <div className="text-sm text-slate-700 dark:text-slate-400 mt-1">{language === 'vi' ? 'Lớp học' : 'Classes'}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{totalStudents}</div>
                        <div className="text-sm text-slate-700 dark:text-slate-400 mt-1">{language === 'vi' ? 'Học sinh' : 'Students'}</div>
                    </div>
                     <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">{studentsAtRisk.length}</div>
                        <div className="text-sm text-slate-700 dark:text-slate-400 mt-1">{language === 'vi' ? 'Cần chú ý' : 'At-Risk'}</div>
                    </div>
                </div>
            </div>

            <section>
                 <h2 className="text-2xl font-bold mb-4">{language === 'vi' ? 'Hành động nhanh' : 'Quick Actions'}</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <button onClick={() => alert('Navigate to add class')} className="p-4 card-glass hover:shadow-lg hover:-translate-y-1 transition-all text-blue-600 dark:text-blue-400">
                         <i className="fa-solid fa-plus text-2xl mb-2"></i>
                         <p className="font-semibold">{language === 'vi' ? 'Thêm lớp mới' : 'Add New Class'}</p>
                     </button>
                      <button onClick={() => alert('Navigate to add student')} className="p-4 card-glass hover:shadow-lg hover:-translate-y-1 transition-all text-emerald-600 dark:text-emerald-400">
                         <i className="fa-solid fa-user-plus text-2xl mb-2"></i>
                         <p className="font-semibold">{language === 'vi' ? 'Thêm học sinh' : 'Add Student'}</p>
                     </button>
                      <button onClick={() => alert('Navigate to assign homework')} className="p-4 card-glass hover:shadow-lg hover:-translate-y-1 transition-all text-violet-600 dark:text-violet-400">
                         <i className="fa-solid fa-file-pen text-2xl mb-2"></i>
                         <p className="font-semibold">{language === 'vi' ? 'Giao bài tập' : 'Assign Homework'}</p>
                     </button>
                     <button className="p-4 card-glass hover:shadow-lg hover:-translate-y-1 transition-all text-orange-600 dark:text-orange-400">
                         <i className="fa-solid fa-bullhorn text-2xl mb-2"></i>
                         <p className="font-semibold">{language === 'vi' ? 'Gửi thông báo' : 'Send Announcement'}</p>
                     </button>
                 </div>
            </section>
            
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{language === 'vi' ? 'Chương trình của tôi' : 'My Programs'}</h2>
                </div>
                {myCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {myCourses.map(course => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onClick={() => setSelectedCourse(course)}
                                isPinned={(user.pinnedCourses || []).includes(course.id)}
                                onPinClick={handlePinClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="card-glass p-8 text-center col-span-full">
                         <i className="fa-solid fa-thumbtack text-4xl text-slate-400 mb-4"></i>
                        <p className="text-slate-800 dark:text-slate-200 font-semibold">{language === 'vi' ? 'Chưa có chương trình nào được ghim' : 'No Pinned Programs Yet'}</p>
                        <p className="text-slate-700 dark:text-slate-400 mt-2 mb-4 text-sm">{language === 'vi' ? 'Ghim các chương trình bạn dạy để truy cập nhanh từ đây.' : 'Pin the programs you teach for quick access from your dashboard.'}</p>
                        <button onClick={() => alert('Navigate to curriculum')} className="btn btn-primary">
                           {language === 'vi' ? 'Tới trang Chương trình' : 'Go to Curriculum'}
                        </button>
                    </div>
                )}
            </section>

            <section>
                 <h2 className="text-2xl font-bold mb-4">{language === 'vi' ? 'Học sinh cần chú ý' : 'Students At-Risk'}</h2>
                 <div className="card-glass p-4">
                     {studentsAtRisk.length > 0 ? (
                        <div className="space-y-3">
                            {studentsAtRisk.map(student => (
                                <AtRiskStudentCard key={student.id} student={student} />
                            ))}
                        </div>
                     ) : (
                        <p className="text-slate-700 dark:text-slate-400 text-center py-4">{language === 'vi' ? 'Tuyệt vời! Không có học sinh nào có vẻ đang gặp khó khăn.' : 'Great! No students appear to be struggling at the moment.'}</p>
                     )}
                 </div>
            </section>

        </div>
    );
};

export default TeacherHome;