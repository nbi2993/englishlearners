
import React from 'react';

interface ClassOverviewCardProps {
  classData: {
    id: string;
    name: string;
    studentCount: number;
    averageGrade: number;
  };
}

const ClassOverviewCard: React.FC<ClassOverviewCardProps> = ({ classData }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{classData.name}</h3>
      <p className="text-gray-600">Students: {classData.studentCount}</p>
      <p className="text-gray-600">Average Grade: {classData.averageGrade}%</p>
    </div>
  );
};

export default ClassOverviewCard;
