import React, { useState } from 'react';

interface AddClassModalProps {
  onClose: () => void;
  onAddClass: (className: string) => void;
}

const AddClassModal: React.FC<AddClassModalProps> = ({ onClose, onAddClass }) => {
  const [className, setClassName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (className.trim()) {
      onAddClass(className.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity animate-fade-in">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 w-full max-w-md m-4 transform transition-all animate-slide-in-up">
        <div className="flex justify-between items-center mb-4 border-b dark:border-slate-700 pb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Add New Class</h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
        </div>
        
        <div className="space-y-4">
            <div>
              <label htmlFor="className" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Class Name</label>
              <input
                id="className"
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Smart World 7"
                required
              />
            </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
            <button 
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-slate-200 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
            >
                Cancel
            </button>
            <button 
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
                Add Class
            </button>
        </div>
      </form>
    </div>
  );
};

export default AddClassModal;