import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  // Use a placeholder image if imageUrl is not available
  const imageUrl = course.imageUrl || 'https://placehold.co/600x400/E5E7EB/A1A1AA?text=No+Image';

  return (
    <div 
      className="card-glass overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer flex flex-col group" 
      onClick={onClick}
    >
      <div 
        className="h-32 w-full relative bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
        ></div>
        <div className="absolute bottom-0 left-0 p-3 w-full">
          <p className="text-xs font-medium text-white/80 uppercase tracking-wider">{course.series}</p>
          <h3 className="text-lg font-bold text-white leading-tight mt-1">{course.title}</h3>
        </div>
        <div 
           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             background: `radial-gradient(circle at 50% 50%, ${course.color}33, transparent 70%)`
           }}
        ></div>
      </div>
      <div className="p-4 flex flex-col flex-grow bg-white/50 dark:bg-slate-800/20">
        <div>
           <span 
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ 
              backgroundColor: `${course.color}20`, // Hex with 12.5% alpha
              color: course.color 
            }}
          >
            {course.level}
          </span>
        </div>
        <div className="mt-4 flex-grow flex flex-col justify-end">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Progress</span>
            <span className="text-xs font-bold" style={{color: course.color}}>{course.progress}%</span>
          </div>
          <div className="w-full bg-slate-200/70 dark:bg-slate-700/50 rounded-full h-1.5">
            <div 
                className="h-1.5 rounded-full transition-all duration-500 ease-out" 
                style={{ 
                    width: `${course.progress}%`, 
                    backgroundColor: course.color,
                    boxShadow: `0 0 8px ${course.color}80`
                }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;