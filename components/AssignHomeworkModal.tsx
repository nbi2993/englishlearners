import React from 'react';
import { Student } from '../types';

interface AssignHomeworkModalProps {
  students: Student[];
  onClose: () => void;
}

const AssignHomeworkModal: React.FC<AssignHomeworkModalProps> = ({ students, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity animate-fade-in p-4">
      <div className="modal-content p-6 w-full max-w-lg m-4 transform transition-all animate-slide-in-up">
        <div className="flex justify-between items-center border-b pb-3 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Assign Homework</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
        </div>
        <div className="mt-4">
          <p className="text-slate-700 dark:text-slate-300">This is a placeholder for the homework assignment form.</p>
          <div className="mt-4">
            <label htmlFor="student-select" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Select Student(s)</label>
            <select id="student-select" multiple className="form-select mt-1 block w-full">
              <option>All Students</option>
              {students.map(s => <option key={s.id}>{s.name}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={onClose} className="btn btn-primary">
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignHomeworkModal;