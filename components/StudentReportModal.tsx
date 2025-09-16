import React, { useState, useMemo } from 'react';
import type { Student, Grade, Classes } from '../types';
import AddEditGradeModal from './AddEditGradeModal';

interface StudentReportModalProps {
  student: Student;
  onClose: () => void;
  classes: Classes;
  setClasses: (classes: Classes) => void;
  classId: string;
}

const StudentReportModal: React.FC<StudentReportModalProps> = ({ student, onClose, classes, setClasses, classId }) => {
    const [activeTab, setActiveTab] = useState('grades');
    const [notes, setNotes] = useState(student.notes || '');
    const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
    const [editingGrade, setEditingGrade] = useState<Grade | null>(null);

    const averageScore = useMemo(() => {
        if (!student.grades || student.grades.length === 0) return 0;
        const totalScore = student.grades.reduce((sum, g) => sum + (g.score * g.coefficient), 0);
        const totalCoefficient = student.grades.reduce((sum, g) => sum + g.coefficient, 0);
        return totalCoefficient > 0 ? (totalScore / totalCoefficient) : 0;
    }, [student.grades]);

    const handleSaveNotes = () => {
        const updatedClasses = { ...classes };
        const studentIndex = updatedClasses[classId].students.findIndex(s => s.id === student.id);
        if (studentIndex > -1) {
            updatedClasses[classId].students[studentIndex].notes = notes;
            setClasses(updatedClasses);
            alert("Notes saved!");
        }
    };
    
    const handleSaveGrade = (grade: Grade) => {
        const updatedClasses = { ...classes };
        const studentIndex = updatedClasses[classId].students.findIndex(s => s.id === student.id);
        if (studentIndex > -1) {
            const currentStudent = updatedClasses[classId].students[studentIndex];
            if (editingGrade) { // Editing existing grade
                const gradeIndex = currentStudent.grades.findIndex(g => g.id === editingGrade.id);
                if (gradeIndex > -1) {
                    currentStudent.grades[gradeIndex] = grade;
                }
            } else { // Adding new grade
                currentStudent.grades.push({ ...grade, id: `g-${Date.now()}` });
            }
            // Recalculate average score
            const newAvg = currentStudent.grades.length > 0
                ? currentStudent.grades.reduce((sum, g) => sum + (g.score * g.coefficient), 0) / currentStudent.grades.reduce((sum, g) => sum + g.coefficient, 0)
                : 0;
            currentStudent.averageScore = parseFloat(newAvg.toFixed(1));

            setClasses(updatedClasses);
        }
        setIsGradeModalOpen(false);
        setEditingGrade(null);
    };

    const handleDeleteGrade = (gradeId: string) => {
        if (!window.confirm("Are you sure you want to delete this grade?")) return;
        
        const updatedClasses = { ...classes };
        const studentIndex = updatedClasses[classId].students.findIndex(s => s.id === student.id);
        if (studentIndex > -1) {
             const currentStudent = updatedClasses[classId].students[studentIndex];
             currentStudent.grades = currentStudent.grades.filter(g => g.id !== gradeId);
             
             // Recalculate average score
             const newAvg = currentStudent.grades.length > 0
                ? currentStudent.grades.reduce((sum, g) => sum + (g.score * g.coefficient), 0) / currentStudent.grades.reduce((sum, g) => sum + g.coefficient, 0)
                : 0;
             currentStudent.averageScore = parseFloat(newAvg.toFixed(1));

             setClasses(updatedClasses);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity animate-fade-in p-4">
            <div className="modal-content p-0 w-full max-w-3xl m-4 transform transition-all animate-slide-in-up flex flex-col h-[90vh]">
                <header className="p-6 flex justify-between items-start border-b dark:border-slate-700 sticky top-0 bg-white dark:bg-slate-800 z-10 rounded-t-xl">
                    <div className="flex items-center gap-4">
                        <img className="w-20 h-20 rounded-full" src={student.avatar} alt={student.name} />
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{student.name}</h3>
                            <p className="text-slate-500 dark:text-slate-400">Class: {classes[classId].name}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
                </header>

                <div className="p-6 flex-grow overflow-y-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                        <div className="card-glass p-3">
                            <p className="text-2xl font-bold">{averageScore.toFixed(1)}</p>
                            <p className="text-sm text-slate-500">Average Score</p>
                        </div>
                         <div className="card-glass p-3">
                            <p className="text-2xl font-bold">{student.progress}%</p>
                            <p className="text-sm text-slate-500">Progress</p>
                        </div>
                        <div className="card-glass p-3">
                            <p className="text-2xl font-bold">{student.assignments.length}</p>
                            <p className="text-sm text-slate-500">Assignments</p>
                        </div>
                        <div className="card-glass p-3">
                            <p className="text-2xl font-bold">{student.timeSpent}</p>
                            <p className="text-sm text-slate-500">Time Spent</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex border-b border-slate-200 dark:border-slate-700">
                            <button onClick={() => setActiveTab('grades')} className={`tab ${activeTab === 'grades' ? 'tab-active' : ''}`}>Grades</button>
                            <button onClick={() => setActiveTab('assignments')} className={`tab ${activeTab === 'assignments' ? 'tab-active' : ''}`}>Assignments</button>
                            <button onClick={() => setActiveTab('notes')} className={`tab ${activeTab === 'notes' ? 'tab-active' : ''}`}>Teacher Notes</button>
                        </div>
                    </div>

                    <div className="animate-fade-in">
                        {activeTab === 'grades' && (
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-xl font-semibold">Gradebook</h4>
                                    <button onClick={() => { setEditingGrade(null); setIsGradeModalOpen(true); }} className="btn btn-primary text-sm"><i className="fa-solid fa-plus mr-2"></i> Add Grade</button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-100 dark:bg-slate-700">
                                            <tr>
                                                <th className="p-3">Name / Type</th>
                                                <th className="p-3 text-center">Score</th>
                                                <th className="p-3 text-center">Coefficient</th>
                                                <th className="p-3">Date</th>
                                                <th className="p-3"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {student.grades.length > 0 ? student.grades.map(grade => (
                                                <tr key={grade.id} className="border-b dark:border-slate-700">
                                                    <td className="p-3 font-medium">{grade.name}</td>
                                                    <td className="p-3 text-center font-bold">{grade.score.toFixed(1)}</td>
                                                    <td className="p-3 text-center">x{grade.coefficient}</td>
                                                    <td className="p-3 text-slate-500">{grade.date}</td>
                                                    <td className="p-3 text-right">
                                                        <button onClick={() => { setEditingGrade(grade); setIsGradeModalOpen(true); }} className="btn-icon text-blue-500 hover:text-blue-700"><i className="fa-solid fa-pencil"></i></button>
                                                        <button onClick={() => handleDeleteGrade(grade.id)} className="btn-icon text-red-500 hover:text-red-700 ml-2"><i className="fa-solid fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                            )) : (
                                                <tr><td colSpan={5} className="text-center p-6 text-slate-500">No grades recorded yet.</td></tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                         {activeTab === 'assignments' && (
                             <div className="text-center p-6 text-slate-500">
                                 <i className="fa-solid fa-file-pen text-4xl mb-4"></i>
                                 <p>Assignment tracking coming soon.</p>
                            </div>
                        )}
                        {activeTab === 'notes' && (
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Private Notes</h4>
                                <textarea 
                                    className="form-textarea w-full h-48"
                                    placeholder="Add notes about this student's progress, behavior, or specific needs..."
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                ></textarea>
                                <div className="mt-4 flex justify-end">
                                    <button onClick={handleSaveNotes} className="btn btn-primary">Save Notes</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isGradeModalOpen && <AddEditGradeModal grade={editingGrade} onSave={handleSaveGrade} onClose={() => setIsGradeModalOpen(false)} />}
        </div>
    );
};

export default StudentReportModal;
