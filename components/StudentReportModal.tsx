import React, { useState } from 'react';
import { Student, Grade } from '../types';
import AddEditGradeModal from './AddEditGradeModal';

interface StudentReportModalProps {
  student: Student;
  onClose: () => void;
  onUpdateStudent: (student: Student) => void;
}

const StudentReportModal: React.FC<StudentReportModalProps> = ({ student, onClose, onUpdateStudent }) => {
    const [notes, setNotes] = useState(student.notes || '');
    const [isGradeModalOpen, setGradeModalOpen] = useState(false);
    const [editingGrade, setEditingGrade] = useState<Grade | null>(null);
    
    const getStatusColor = (status: 'Completed' | 'Pending' | 'Overdue') => {
        switch(status) {
            case 'Completed': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400';
            case 'Pending': return 'bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400';
            case 'Overdue': return 'bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-400';
        }
    }
    
    const handleSaveNotes = () => {
        onUpdateStudent({ ...student, notes });
        alert('Notes saved!');
    };
    
    const handleOpenAddGrade = () => {
        setEditingGrade(null);
        setGradeModalOpen(true);
    }
    
    const handleOpenEditGrade = (grade: Grade) => {
        setEditingGrade(grade);
        setGradeModalOpen(true);
    }

    const handleDeleteGrade = (gradeId: string) => {
        if (confirm('Are you sure you want to delete this grade?')) {
            const updatedGrades = student.grades.filter(g => g.id !== gradeId);
            onUpdateStudent({ ...student, grades: updatedGrades });
        }
    };

    const handleSaveGrade = (grade: Grade) => {
        let updatedGrades;
        if (editingGrade) { // Editing existing grade
            updatedGrades = student.grades.map(g => g.id === grade.id ? grade : g);
        } else { // Adding new grade
            updatedGrades = [...student.grades, { ...grade, id: `g-${Date.now()}` }];
        }
        onUpdateStudent({ ...student, grades: updatedGrades });
        setGradeModalOpen(false);
        setEditingGrade(null);
    };

  return (
    <>
      {isGradeModalOpen && (
        <AddEditGradeModal
          grade={editingGrade}
          onClose={() => setGradeModalOpen(false)}
          onSave={handleSaveGrade}
        />
      )}
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity animate-fade-in p-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 w-full max-w-3xl transform transition-all animate-slide-in-up flex flex-col max-h-[90vh]">
          <div className="flex justify-between items-center border-b pb-3 dark:border-slate-700 flex-shrink-0">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Student Report</h3>
              <div className="flex items-center gap-3 mt-1">
                  <img className="w-10 h-10 rounded-full" src={student.avatar} alt={student.name} />
                  <span className="text-lg font-semibold">{student.name}</span>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
          </div>
          
          <div className="mt-4 flex-grow overflow-y-auto pr-2 custom-scrollbar space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{student.progress}%</div>
                      <div className="text-sm text-slate-700 dark:text-slate-400 mt-1">Progress</div>
                  </div>
                   <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{student.averageScore}</div>
                      <div className="text-sm text-slate-700 dark:text-slate-400 mt-1">Avg. Score</div>
                  </div>
                   <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">{student.timeSpent}</div>
                      <div className="text-sm text-slate-700 dark:text-slate-400 mt-1">Time Spent</div>
                  </div>
              </div>

              <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Gradebook (Bảng điểm)</h4>
                    <button onClick={handleOpenAddGrade} className="btn btn-secondary btn-sm !text-xs !px-2 !py-1"><i className="fa-solid fa-plus mr-1"></i> Add Grade</button>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg overflow-x-auto">
                     <table className="w-full text-sm text-left">
                        <thead className="bg-slate-100 dark:bg-slate-900/50 text-xs uppercase text-slate-700 dark:text-slate-400">
                            <tr>
                                <th scope="col" className="px-4 py-2">Name / Type</th>
                                <th scope="col" className="px-4 py-2">Date</th>
                                <th scope="col" className="px-4 py-2 text-center">Score</th>
                                <th scope="col" className="px-4 py-2 text-center">Coefficient</th>
                                <th scope="col" className="px-4 py-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.grades.length > 0 ? student.grades.map(grade => (
                                <tr key={grade.id} className="border-b dark:border-slate-700">
                                    <td className="px-4 py-2 font-medium whitespace-nowrap">{grade.name}</td>
                                    <td className="px-4 py-2 text-slate-600 dark:text-slate-400">{grade.date}</td>
                                    <td className="px-4 py-2 font-bold text-center">{grade.score}</td>
                                    <td className="px-4 py-2 text-center">x{grade.coefficient}</td>
                                    <td className="px-4 py-2 text-right">
                                        <button onClick={() => handleOpenEditGrade(grade)} className="text-blue-600 dark:text-blue-400 hover:underline text-xs px-1">Edit</button>
                                        <button onClick={() => handleDeleteGrade(grade.id)} className="text-red-600 dark:text-red-400 hover:underline text-xs px-1">Delete</button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="text-center p-4 text-slate-700 dark:text-slate-400">No grades entered yet.</td>
                                </tr>
                            )}
                        </tbody>
                     </table>
                  </div>
              </div>

              <div>
                 <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Notes / Evaluations (Ghi chú / Đánh giá)</h4>
                 <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="form-textarea"
                    placeholder="Enter any notes about this student..."
                 />
                 <div className="text-right mt-2">
                     <button onClick={handleSaveNotes} className="btn btn-secondary btn-sm !text-xs">Save Notes</button>
                 </div>
              </div>

              <div>
                   <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Assignments</h4>
                   <div className="space-y-2">
                      {student.assignments.length > 0 ? student.assignments.map(assignment => (
                          <div key={assignment.id} className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg flex justify-between items-center">
                              <div>
                                  <p className="font-semibold text-slate-900 dark:text-slate-100">{assignment.title}</p>
                                  <p className="text-xs text-slate-700 dark:text-slate-400">Due: {assignment.dueDate}</p>
                              </div>
                              <span className={`text-xs font-bold px-2 py-1 rounded-full ${getStatusColor(assignment.status)}`}>
                                  {assignment.status}
                              </span>
                          </div>
                      )) : (
                           <p className="text-slate-700 dark:text-slate-400 text-sm p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">No assignments found.</p>
                      )}
                   </div>
              </div>
          </div>
          
          <div className="mt-6 flex justify-end flex-shrink-0 pt-4 border-t dark:border-slate-700">
            <button onClick={onClose} className="px-5 py-2 bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentReportModal;