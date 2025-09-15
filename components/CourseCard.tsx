import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onSelectCourse }) => {
  
  const handleEbookClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the onSelectCourse from being called
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col group"
      onClick={() => onSelectCourse(course)}
    >
      <div className="relative">
        <img className="h-40 w-full object-cover" src={course.imageUrl} alt={course.title} />
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1.5">
            <i className="fa-solid fa-book-open"></i>
            <span>{course.lessons.length} Lessons</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className={`text-sm font-semibold ${course.color.replace('bg-', 'text-')}`}>{course.series}</p>
        <h4 className="text-xl font-bold text-gray-800 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{course.title}</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 flex-grow">{course.description}</p>
        
        {course.rawLevel?.ebookPdfUrl && (
            <a
                href={course.rawLevel.ebookPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleEbookClick}
                className="mt-4 w-full text-center px-4 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 dark:text-blue-300 font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
                <i className="fa-solid fa-book"></i>
                Read Ebook
            </a>
        )}

        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Progress</span>
            <span className={`text-sm font-bold ${course.color.replace('bg-', 'text-')}`}>{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className={`${course.color} h-2.5 rounded-full`} style={{ width: `${course.progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;