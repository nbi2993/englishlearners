import React from 'react';
import type { User } from '../types';
import { MOCK_STUDENT, MOCK_TEACHER } from '../constants';

interface UserRoleSelectorProps {
  onSelectUser: (user: User) => void;
}

const UserRoleSelector: React.FC<UserRoleSelectorProps> = ({ onSelectUser }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to IVS English</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Please select your role to continue</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <button
            onClick={() => onSelectUser(MOCK_STUDENT)}
            className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 space-x-3"
          >
            <i className="fas fa-user-graduate text-2xl"></i>
            <div className="text-left">
              <div className="font-semibold text-lg">I am a Student</div>
              <div className="text-sm opacity-90">Access learning materials and track your progress</div>
            </div>
          </button>

          <button
            onClick={() => onSelectUser(MOCK_TEACHER)}
            className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition duration-150 space-x-3"
          >
            <i className="fas fa-chalkboard-teacher text-2xl"></i>
            <div className="text-left">
              <div className="font-semibold text-lg">I am a Teacher</div>
              <div className="text-sm opacity-90">Manage classes and monitor student progress</div>
            </div>
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          You can change your role later in settings
        </p>
      </div>
    </div>
  );
};

export default UserRoleSelector;