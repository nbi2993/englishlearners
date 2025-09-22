
import React from 'react';
import { ClassData } from '../../types';
import { Users, AlertCircle, TrendingUp, MessageSquare } from 'lucide-react';

interface ClassOverviewCardProps {
  classData: ClassData;
}

const ClassOverviewCard: React.FC<ClassOverviewCardProps> = ({ classData }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">{classData.name}</h3>

      {/* Key Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        <div>
          <Users className="h-6 w-6 mx-auto text-blue-500 mb-1" />
          <p className="text-2xl font-bold">{classData.studentCount}</p>
          <p className="text-xs text-gray-500">Students</p>
        </div>
        <div>
          <TrendingUp className="h-6 w-6 mx-auto text-green-500 mb-1" />
          <p className="text-2xl font-bold">{classData.averageProgress}%</p>
          <p className="text-xs text-gray-500">Avg. Progress</p>
        </div>
        <div>
          <AlertCircle className="h-6 w-6 mx-auto text-red-500 mb-1" />
          <p className="text-2xl font-bold">{classData.alerts}</p>
          <p className="text-xs text-gray-500">Alerts</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${classData.averageProgress}%` }}
        ></div>
      </div>
      
      <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
        <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          View Class
        </button>
        <button className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
            <MessageSquare className="h-4 w-4 mr-2" />
            Announce
        </button>
      </div>
    </div>
  );
};

export default ClassOverviewCard;
