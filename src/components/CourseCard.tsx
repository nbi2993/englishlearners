
import React from 'react';
import { Course } from '../../types'; // Import the Course type

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={course.imageUrl} alt={course.title} className="w-full h-32 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-700 mb-4 h-20 overflow-hidden">{course.description}</p>
        <div className="mb-4">
          <p className="text-sm text-gray-600">Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">{course.progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
