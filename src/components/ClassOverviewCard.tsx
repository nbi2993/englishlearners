
import React from 'react';
import { ClassData } from '../../types'; // Import the ClassData type

interface ClassOverviewCardProps {
  classData: ClassData;
}

const ClassOverviewCard: React.FC<ClassOverviewCardProps> = ({ classData }) => {
  const studentCount = classData.students.length;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{classData.name}</h3>
      <p className="text-gray-600">Students: {studentCount}</p>
      {/* Add more class-specific info here if needed */}
    </div>
  );
};

export default ClassOverviewCard;
