
import React, { useState, useMemo } from 'react';
import { User } from '../../types';
import Dashboard from './Dashboard';
import CourseCard from './CourseCard';
import { ChevronDown, Search } from 'lucide-react';

interface StudentHomeProps {
  user: User;
}

// Mock data for demonstration - assuming this would be fetched from an API
const allCourses = [
  { id: '1', title: 'English 101: Introduction to Linguistics', progress: 75, nextDueDate: '2023-10-26' },
  { id: '2', title: 'History 202: World Civilizations', progress: 50, nextDueDate: '2023-10-28' },
  { id: '3', title: 'Math 301: Advanced Calculus', progress: 90, nextDueDate: '2023-10-25' },
  { id: '4', title: 'Art 101: Introduction to Painting', progress: 25, nextDueDate: '2023-11-01' },
  { id: '5', title: 'Science 101: Biology Basics', progress: 100, nextDueDate: null },
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
        // Sort by due date, putting courses with no due date at the end
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
            {/* Search Input */}
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
            
            {/* Sort Dropdown */}
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

        {/* Courses Grid */}
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
