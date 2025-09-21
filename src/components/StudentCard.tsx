
import React from 'react';
import { Student } from '../../types'; // Import the Student type

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-bold">{student.name}</p>
        <p className="text-sm text-gray-500">Last active: {student.lastActivity}</p>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div
            className="bg-green-500 h-1.5 rounded-full"
            style={{ width: `${student.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
