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
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity animate-fade-in p-4">
      <form onSubmit={handleSubmit} className="modal-content p-6 w-full max-w-sm m-4 transform transition-all animate-slide-in-up">
        <div className="flex justify-between items-center border-b pb-3 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Create New Class</h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
        </div>
        <div className="mt-6">
          <label htmlFor="className" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Class Name</label>
          <input
            id="className"
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="form-input"
            placeholder="e.g., Grade 6A, Advanced English"
            required
          />
        </div>
        <div className="mt-8 flex justify-end space-x-3">
          <button type="button" onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Create Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClassModal;
