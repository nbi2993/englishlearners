import React, { useMemo } from 'react';
import type { User, Course } from '../types';
import CourseCard from './CourseCard';
import { curriculumData } from '../data/curriculum';

interface StudentHomeProps {
  user: User;
  onSelectCourse: (course: Course) => void;
  language: 'en' | 'vi';
}

const StudentHome: React.FC<StudentHomeProps> = ({ user, onSelectCourse, language }) => {

  const allCourses = useMemo(() => {
    const colorPalette = ['#4A90E2', '#50E3C2', '#F5A623', '#BD10E0', '#9013FE', '#D0021B', '#F8E71C', '#7ED321'];
    let colorIndex = 0;

    return curriculumData.flatMap(category =>
      category.levels.map(level => {
        const courseId = `course-${level.level}`;
        return {
          id: courseId,
          title: language === 'vi' ? level.title.vi : level.title.en,
          series: language === 'vi' ? category.category.vi : category.category.en,
          level: (level.subtitle.en.split(' - ')[0]) as Course['level'],
          imageUrl: `https://picsum.photos/seed/${level.level}/400/225`,
          description: language === 'vi' ? level.subtitle.vi : level.subtitle.en,
          lessons: [], // Not needed for card view
          color: colorPalette[colorIndex++ % colorPalette.length],
          progress: Math.floor(Math.random() * 100), // Mock progress
        } as Course;
      })
    );
  }, [language]);
    
  const pinnedCourses = useMemo(() => {
      return allCourses.filter(course => user.pinnedCourses?.includes(course.id));
  }, [allCourses, user.pinnedCourses]);

  const welcomeMessage = language === 'vi' 
    ? `Chào mừng trở lại, ${user.name}!`
    : `Welcome back, ${user.name}!`;
  
  const welcomeSubMessage = language === 'vi'
    ? 'Hãy tiếp tục hành trình học tập tuyệt vời của bạn.'
    : "Let's continue your awesome learning journey.";

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{welcomeMessage}</h1>
        <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">{welcomeSubMessage}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card-glass p-6 flex items-center gap-4">
            <i className="fa-solid fa-star text-4xl text-amber-400"></i>
            <div>
                <p className="text-2xl font-bold">{user.points}</p>
                <p className="text-sm text-slate-500">{language === 'vi' ? 'Điểm' : 'Points'}</p>
            </div>
        </div>
        <div className="card-glass p-6 flex items-center gap-4">
            <i className="fa-solid fa-fire-flame-curved text-4xl text-red-500"></i>
            <div>
                <p className="text-2xl font-bold">{user.streak}</p>
                <p className="text-sm text-slate-500">{language === 'vi' ? 'Chuỗi ngày học' : 'Day Streak'}</p>
            </div>
        </div>
        <div className="card-glass p-6 flex items-center gap-4">
            <i className="fa-solid fa-gem text-4xl text-sky-500"></i>
            <div>
                <p className="text-2xl font-bold">{user.badges.length}</p>
                <p className="text-sm text-slate-500">{language === 'vi' ? 'Huy hiệu' : 'Badges'}</p>
            </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            {language === 'vi' ? 'Các khóa học của tôi' : 'My Courses'}
        </h2>
        {pinnedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pinnedCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={() => onSelectCourse(course)}
                isPinned={true}
                onPinToggle={() => { /* This would be handled in curriculum view */ }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 card-glass">
            <i className="fa-solid fa-thumbtack text-4xl text-slate-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">{language === 'vi' ? 'Chưa có khóa học nào được ghim' : 'No Pinned Courses'}</h3>
            <p className="text-slate-500">{language === 'vi' ? 'Vào mục Chương trình để ghim một khóa học và bắt đầu học!' : 'Go to the Curriculum to pin a course and get started!'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentHome;
