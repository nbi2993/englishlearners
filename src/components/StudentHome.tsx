
import React, { useState, useMemo } from 'react';
import { User } from '../../types';
import Dashboard from './Dashboard';
import CourseCard from './CourseCard';
import { ChevronDown, Search } from 'lucide-react';

interface StudentHomeProps {
  user: User;
}

// Enhanced mock data with new fields
const allCourses = [
  {
    id: '1',
    title: 'English 101: Intro to Linguistics',
    description: 'A comprehensive introduction to the study of language, its structure, and use.',
    imageUrl: '/images/course-linguistics.jpg',
    progress: 75,
    nextDueDate: '2023-10-26',
  },
  {
    id: '2',
    title: 'Business English: Communication Skills',
    description: 'Master the art of professional communication, from emails to presentations.',
    imageUrl: '/images/course-business.jpg',
    progress: 50,
    nextDueDate: '2023-10-28',
  },
  {
    id: '3',
    title: 'Advanced Grammar and Syntax',
    description: 'A deep dive into the rules of English grammar and sentence structure.',
    imageUrl: '/images/course-grammar.jpg',
    progress: 90,
    nextDueDate: '2023-10-25',
  },
  {
    id: '4',
    title: 'IELTS Preparation: Speaking & Listening',
    description: 'Focused training to help you ace the speaking and listening sections of the IELTS exam.',
    imageUrl: '/images/course-ielts.jpg',
    progress: 25,
    nextDueDate: '2023-11-01',
  },
  {
    id: '5',
    title: 'Creative Writing Workshop',
    description: 'Unleash your inner author and learn the craft of compelling storytelling.',
    imageUrl: '/images/course-creative-writing.jpg',
    progress: 100,
    nextDueDate: null,
  },
  {
    id: '6',
    title: 'English for Travel',
    description: 'Learn essential phrases and cultural tips for your next trip abroad.',
    imageUrl: '/images/course-travel.jpg',
    progress: 10,
    nextDueDate: '2023-11-15',
  },
];

// Custom hook for managing course filtering and sorting
const useCourseManagement = (courses) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('nextDueDate');

  const filteredCourses = useMemo(() => {
    return courses
      .filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        if (a.nextDueDate && b.nextDueDate) {
          return new Date(a.nextDueDate) - new Date(b.nextDueDate);
        }
        return a.nextDueDate ? -1 : 1;
      });
  }, [searchTerm, sortBy, courses]);

  return { searchTerm, setSearchTerm, sortBy, setSortBy, filteredCourses };
};

const StudentHome: React.FC<StudentHomeProps> = ({ user }) => {
  const { searchTerm, setSearchTerm, sortBy, setSortBy, filteredCourses } = useCourseManagement(allCourses);

  return (
    <Dashboard title={`Welcome back, ${user.name}!`}>
      <div className="col-span-1 md:col-span-3">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">My Courses</h2>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pr-8 pl-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="nextDueDate">Sort by Due Date</option>
                <option value="title">Sort by Title</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-8">
              No courses found. Try a different search term.
            </p>
          )}
        </div>
      </div>
    </Dashboard>
  );
};

export default StudentHome;
