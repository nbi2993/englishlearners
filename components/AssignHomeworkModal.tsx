import React from 'react';
import { Student } from '../types';

interface AssignHomeworkModalProps {
  students: Student[];
  onClose: () => void;
}

const AssignHomeworkModal: React.FC<AssignHomeworkModalProps> = ({ students, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg m-4">
        <div className="flex justify-between items-center border-b pb-3 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Assign Homework</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl">&times;</button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 dark:text-gray-300">This is a placeholder for the homework assignment form.</p>
          <div className="mt-4">
            <label htmlFor="student-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Student(s)</label>
            <select id="student-select" multiple className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600">
              <option>All Students</option>
              {students.map(s => <option key={s.id}>{s.name}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignHomeworkModal;
