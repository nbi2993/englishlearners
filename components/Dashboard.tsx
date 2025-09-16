import React, { useMemo } from 'react';
import { curriculumData } from '../data/curriculum';
import CourseCard from './CourseCard';
import type { Course, User } from '../types';
import { Course as MappedCourse } from '../types';

interface DashboardProps {
  onSelectCourse: (course: Course) => void;
  user: User;
  onUpdateUser: (user: User) => void;
  language: 'en' | 'vi';
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectCourse, user, onUpdateUser, language }) => {

  const courses = useMemo(() => {
    const colorPalette = ['#4A90E2', '#50E3C2', '#F5A623', '#BD10E0', '#9013FE', '#D0021B', '#F8E71C', '#7ED321'];
    let colorIndex = 0;
    const slug = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    return curriculumData.flatMap(category =>
      category.levels.map(level => {
        const courseId = `course-${slug(level.title.en)}`;
        return {
          id: courseId,
          title: language === 'vi' ? level.title.vi : level.title.en,
          series: language === 'vi' ? category.category.vi : category.category.en,
          level: (level.subtitle.en.split(' - ')[0]) as Course['level'],
          imageUrl: `https://picsum.photos/seed/${level.level}/400/225`,
          description: language === 'vi' ? level.subtitle.vi : level.subtitle.en,
          lessons: level.units.flatMap(unit => unit.lessons.map(l => ({
            id: l.id.toString(),
            title: language === 'vi' ? l.title.vi : l.title.en,
            type: 'ebook',
            content: '',
            rawLesson: l
          }))),
          color: colorPalette[colorIndex++ % colorPalette.length],
          progress: Math.floor(Math.random() * 100), // Mock progress
          rawLevel: level,
        } as MappedCourse;
      })
    );
  }, [language]);

  const groupedCourses = useMemo(() => {
    return courses.reduce((acc, course) => {
      const series = course.series;
      if (!acc[series]) {
        acc[series] = [];
      }
      acc[series].push(course);
      return acc;
    }, {} as Record<string, MappedCourse[]>);
  }, [courses]);

  const handlePinToggle = (courseId: string) => {
    const pinnedCourses = user.pinnedCourses || [];
    const newPinnedCourses = pinnedCourses.includes(courseId)
      ? pinnedCourses.filter(id => id !== courseId)
      : [...pinnedCourses, courseId];
    onUpdateUser({ ...user, pinnedCourses: newPinnedCourses });
  };
  
  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
      <div className="text-center mb-8">
        <i className="fa-solid fa-book-open-reader text-5xl text-blue-500 mb-4"></i>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {language === 'vi' ? 'Chương trình học' : 'Curriculum'}
        </h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
          {language === 'vi' ? 'Khám phá thư viện khóa học toàn diện của chúng tôi.' : 'Explore our comprehensive library of courses.'}
        </p>
      </div>

      {Object.entries(groupedCourses).map(([series, coursesInSeries]) => (
        <div key={series} className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b-2 border-blue-500">{series}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coursesInSeries.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={() => onSelectCourse(course)}
                isPinned={user.pinnedCourses?.includes(course.id) || false}
                onPinToggle={() => handlePinToggle(course.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;