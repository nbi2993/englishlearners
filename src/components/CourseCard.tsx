
import React from 'react';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    progress: number;
    nextDueDate: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
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
      <div>
        <p className="text-sm text-gray-600">Next Due Date</p>
        <p className="font-semibold">{course.nextDueDate}</p>
      </div>
    </div>
  );
};

export default CourseCard;
