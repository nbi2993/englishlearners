import React from 'react';
import { Student } from '../types';

interface StudentCardProps {
  student: Student;
  onReportClick: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onReportClick }) => {
  return (
    <div className="card-glass p-4 flex flex-col text-left relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {student.isStruggling && (
        <div className="absolute top-3 right-3 text-amber-500 text-lg" title="This student might be struggling">
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>
      )}
      <div className="flex items-center gap-4 mb-4">
        <img className="w-16 h-16 rounded-full" src={student.avatar} alt={student.name} />
        <div>
            <h4 className="font-bold text-lg">{student.name}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Active: {student.lastActivity}</p>
        </div>
      </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400"><i className="fa-solid fa-chart-line mr-2 w-4 text-center"></i>Progress</span>
            <span className="font-semibold">{student.progress}%</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400"><i className="fa-solid fa-star-half-alt mr-2 w-4 text-center"></i>Avg. Score</span>
            <span className="font-semibold">{student.averageScore}</span>
        </div>
      </div>

      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-4">
        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${student.progress}%` }}></div>
      </div>
      
      <button 
        onClick={onReportClick}
        className="mt-4 w-full btn btn-secondary text-sm"
      >
        View Report
      </button>
    </div>
  );
};

export default StudentCard;
