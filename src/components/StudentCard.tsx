
import React from 'react';
import { Student } from '../../types';
import { AlertCircle, ChevronRight, MessageCircle } from 'lucide-react';

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-4 flex flex-col transition-all duration-300 hover:shadow-xl ${student.isStruggling ? 'border-2 border-red-400' : ''}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
            <img src={student.avatar} alt={student.name} className="w-14 h-14 rounded-full border-2 border-gray-200" />
            <div>
                <p className="font-bold text-lg text-gray-800">{student.name}</p>
                <p className="text-xs text-gray-500">Last active: {student.lastActivity}</p>
            </div>
        </div>
        {student.isStruggling && (
          <div className="flex items-center text-red-500 bg-red-100 rounded-full px-2 py-1 text-xs">
            <AlertCircle className="h-4 w-4 mr-1" />
            Struggling
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 text-center mb-4">
        <div>
          <p className="text-xl font-bold text-blue-600">{student.progress}%</p>
          <p className="text-xs text-gray-500">Progress</p>
        </div>
        <div>
          <p className="text-xl font-bold text-green-600">{student.averageScore}</p>
          <p className="text-xs text-gray-500">Avg. Score</p>
        </div>
        <div>
          <p className="text-xl font-bold text-purple-600">{student.timeSpent}</p>
          <p className="text-xs text-gray-500">Time Spent</p>
        </div>
      </div>
      
      {/* Actions */}
      <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-100">
        <button className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
          <MessageCircle className="h-4 w-4 mr-2" />
          Message
        </button>
        <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
          View Profile
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
