
import React from 'react';

interface StudentCardProps {
  student: {
    id: string;
    name: string;
    avatar: string;
  };
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-bold">{student.name}</p>
        <button className="text-sm text-blue-500 hover:underline">View Profile</button>
      </div>
    </div>
  );
};

export default StudentCard;
