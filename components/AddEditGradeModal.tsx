import React, { useState, useEffect } from 'react';
import type { Grade } from '../types';

interface AddEditGradeModalProps {
  grade: Grade | null;
  onSave: (grade: Grade) => void;
  onClose: () => void;
}

const AddEditGradeModal: React.FC<AddEditGradeModalProps> = ({ grade, onSave, onClose }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState<number | ''>('');
  const [coefficient, setCoefficient] = useState<1 | 2 | 3>(1);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // YYYY-MM-DD

  useEffect(() => {
    if (grade) {
      setName(grade.name);
      setScore(grade.score);
      setCoefficient(grade.coefficient);
      setDate(grade.date);
    }
  }, [grade]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && score !== '' && score >= 0 && score <= 10) {
      const savedGrade: Grade = {
        id: grade ? grade.id : '', // ID will be set in parent for new grades
        name: name.trim(),
        score: score,
        coefficient,
        date,
      };
      onSave(savedGrade);
    } else {
        alert("Please fill in all fields correctly. Score must be between 0 and 10.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60] transition-opacity animate-fade-in p-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 w-full max-w-md m-4 transform transition-all animate-slide-in-up">
        <div className="flex justify-between items-center mb-6 border-b dark:border-slate-700 pb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {grade ? 'Edit Grade' : 'Add New Grade'}
          </h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="gradeName" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Name / Type</label>
            <input
              id="gradeName" type="text" value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input" placeholder="e.g., Mid-term HK1, 15-min Test" required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label htmlFor="score" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Score (0-10)</label>
                <input
                    id="score" type="number" step="0.1" min="0" max="10" value={score}
                    onChange={(e) => setScore(e.target.value === '' ? '' : parseFloat(e.target.value))}
                    className="form-input" placeholder="e.g., 8.5" required
                />
            </div>
            <div>
                <label htmlFor="coefficient" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Coefficient</label>
                <select 
                    id="coefficient" value={coefficient}
                    onChange={(e) => setCoefficient(Number(e.target.value) as 1 | 2 | 3)}
                    className="form-select"
                >
                    <option value="1">x1</option>
                    <option value="2">x2</option>
                    <option value="3">x3</option>
                </select>
            </div>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Date</label>
            <input
              id="date" type="date" value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-input" required
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          <button type="button" onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {grade ? 'Save Changes' : 'Add Grade'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditGradeModal;