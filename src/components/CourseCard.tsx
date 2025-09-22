
import React from 'react';
import { Course } from '../../types';
import { BookOpen, Calendar, CheckCircle } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

// Helper to format dates
const formatDate = (dateString: string | null) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric'
  });
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const isCompleted = course.progress === 100;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      {/* Course Image */}
      <div className="relative">
        <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover" />
        {isCompleted ? (
            <span className="absolute top-2 right-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <CheckCircle className="mr-1.5 h-4 w-4" />
              Completed
            </span>
          ) : (
            <span className="absolute top-2 right-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              In Progress
            </span>
          )}
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{course.description}</p>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-gray-500">Progress</span>
            <span className="text-xs font-semibold text-gray-500">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`${isCompleted ? 'bg-green-500' : 'bg-blue-600'} h-2 rounded-full`}
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Due Date Info */}
        {!isCompleted && course.nextDueDate && (
          <div className="flex items-center text-sm text-red-600 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Due: {formatDate(course.nextDueDate)}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-50 p-4 border-t border-gray-200 flex items-center justify-between">
        <button className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          <BookOpen className="h-4 w-4 mr-2" />
          {isCompleted ? 'Review Course' : 'Continue'}
        </button>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
          Details
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
