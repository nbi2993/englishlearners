import React, { useState, useMemo, lazy, Suspense } from 'react';
import type { User, Course } from '../types';

// Lazy load CourseCard component
const CourseCard = lazy(() => import('./CourseCard'));

interface DashboardProps {
  user: User;
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  lastViewedCourse: Course | null;
}

const UserProfile: React.FC<{ user: User }> = React.memo(({ user }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center flex-wrap gap-4">
    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center border-4 border-blue-500">
        <i className={`fa-solid ${user.avatar} text-4xl text-blue-600 dark:text-blue-400`}></i>
    </div>
    <div className="flex-grow">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome back, {user.name}!</h2>
      <p className="text-gray-500 dark:text-gray-400">Current Level: {user.level}</p>
      <div className="flex items-center mt-2">
        <i className="fa-solid fa-star text-yellow-400 mr-2"></i>
        <span className="font-bold text-lg text-gray-700 dark:text-gray-200">{user.points} Points</span>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      {user.badges.map(badge => (
        <div key={badge} className="group relative">
          <span className="inline-block bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
           <div className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {badge} Badge
          </div>
        </div>
      ))}
    </div>
  </div>
));

const LoadingPlaceholder = () => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md animate-pulse">
    <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
);

const ContinueLearningCard: React.FC<{ course: Course; onSelectCourse: (course: Course) => void }> = React.memo(({ course, onSelectCourse }) => (
    <div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 p-6 rounded-xl shadow-lg flex items-center justify-between cursor-pointer transform hover:scale-105 transition-transform duration-300"
        onClick={() => onSelectCourse(course)}
    >
        <div className="flex items-center">
            <img src={course.imageUrl} alt={course.title} className="w-24 h-24 rounded-lg object-cover border-4 border-white/50" loading="lazy" />
            <div className="ml-6 text-white">
                <p className="text-sm font-semibold opacity-80 uppercase tracking-wider">Continue Learning</p>
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <p className="opacity-90">{course.series}</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-right text-white">
                <p className="font-bold text-3xl">{course.progress}%</p>
                <p className="text-sm opacity-80">Complete</p>
            </div>
            <i className="fa-solid fa-arrow-right text-white text-3xl"></i>
        </div>
    </div>
);


const Dashboard = React.memo<React.FC<DashboardProps>>(({ user, courses, onSelectCourse, lastViewedCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    if (!searchTerm) return courses;
    return courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.series.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [courses, searchTerm]);

  const groupedCourses = useMemo(() => {
    return filteredCourses.reduce((acc, course) => {
      const level = course.level;
      if (!acc[level]) {
        acc[level] = [];
      }
      acc[level].push(course);
      return acc;
    }, {} as Record<Course['level'], Course[]>);
  }, [filteredCourses]);

  const levelOrder: Array<Course['level']> = ['Preschool', 'Primary', 'Junior High', 'High School'];

  const levelDisplayNames: Record<Course['level'], string> = {
      'Preschool': 'Preschool Program (Ages 3-5)',
      'Primary': 'Primary School (Grades 1-5)',
      'Junior High': 'Junior High School (Grades 6-9)',
      'High School': 'High School (Grades 10-12)',
  };


  return (
    <div className="max-w-7xl mx-auto">
      <UserProfile user={user} />
      
      <div className="mt-8 space-y-8">
        {lastViewedCourse && <ContinueLearningCard course={lastViewedCourse} onSelectCourse={onSelectCourse} />}
        
        <div className="relative">
          <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search for a course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>
      </div>

      <div className="space-y-12 mt-10">
        {levelOrder.map(level => {
          const coursesInLevel = groupedCourses[level];
          if (!coursesInLevel || coursesInLevel.length === 0) return null;

          return (
            <section key={level} aria-labelledby={`${level.replace(/\s+/g, '-').toLowerCase()}-heading`}>
              <h3 
                id={`${level.replace(/\s+/g, '-').toLowerCase()}-heading`} 
                className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-500 pb-2"
              >
                {levelDisplayNames[level]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {coursesInLevel.map(course => (
                  <CourseCard key={course.id} course={course} onSelectCourse={onSelectCourse} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;