import React, { useState } from 'react';

interface AddClassModalProps {
  onClose: () => void;
  onAddClass: (className: string) => void;
  language: 'en' | 'vi';
}

const AddClassModal: React.FC<AddClassModalProps> = ({ onClose, onAddClass, language }) => {
  const [className, setClassName] = useState('');

  const t = {
    en: {
      title: "Create New Class",
      label: "Class Name",
      placeholder: "e.g., Grade 6A, Advanced English",
      cancel: "Cancel",
      create: "Create Class"
    },
    vi: {
      title: "Tạo Lớp Mới",
      label: "Tên Lớp",
      placeholder: "VD: Lớp 6A, Tiếng Anh Nâng cao",
      cancel: "Hủy",
      create: "Tạo Lớp"
    }
  }[language];

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
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.title}</h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
        </div>
        <div className="mt-6">
          <label htmlFor="className" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">{t.label}</label>
          <input
            id="className"
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="form-input"
            placeholder={t.placeholder}
            required
          />
        </div>
        <div className="mt-8 flex justify-end space-x-3">
          <button type="button" onClick={onClose} className="btn btn-secondary">
            {t.cancel}
          </button>
          <button type="submit" className="btn btn-primary">
            {t.create}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClassModal;