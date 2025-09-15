import React, { useState, useMemo } from 'react';
import { Student, Classes } from '../types';
import { MOCK_CLASSES } from '../constants';
import StudentReportModal from './StudentReportModal';
import CreateTestModal from './CreateTestModal';
import AssignHomeworkModal from './AssignHomeworkModal';
import AddClassModal from './AddClassModal';
import AddStudentModal from './AddStudentModal';

type SortKey = keyof Student;
type SortOrder = 'asc' | 'desc';

const TeacherDashboard: React.FC = () => {
    const [classes, setClasses] = useState<Classes>(MOCK_CLASSES);
    const [selectedClassId, setSelectedClassId] = useState<string>(Object.keys(MOCK_CLASSES)[0] || '');
    
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [isCreateTestOpen, setCreateTestOpen] = useState(false);
    const [isAssignHomeworkOpen, setAssignHomeworkOpen] = useState(false);
    const [isAddClassModalOpen, setAddClassModalOpen] = useState(false);
    const [isAddStudentModalOpen, setAddStudentModalOpen] = useState(false);
    
    const [sortConfig, setSortConfig] = useState<{ key: keyof Student; order: SortOrder }>({ key: 'name', order: 'asc' });

    const currentClass = classes[selectedClassId];
    const students = currentClass?.students || [];

    const sortedStudents = useMemo(() => {
        if (students.length === 0) return [];
        
        return [...students].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.order === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.order === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }, [students, sortConfig]);

    const requestSort = (key: SortKey) => {
        let order: SortOrder = 'asc';
        if (sortConfig.key === key && sortConfig.order === 'asc') {
            order = 'desc';
        }
        setSortConfig({ key, order });
    };

    const getScoreColor = (score: number) => {
        if (score >= 85) return 'text-emerald-500';
        if (score >= 70) return 'text-amber-500';
        return 'text-red-500';
    };
    
    const getProgressColor = (progress: number) => {
        if (progress > 80) return 'bg-sky-500';
        if (progress > 60) return 'bg-emerald-500';
        if (progress > 40) return 'bg-amber-500';
        return 'bg-red-500';
    };

    const handleAddClass = (className: string) => {
        const newClassId = `class-${Date.now()}`;
        const newClass = { 
            name: className, 
            grade: 'Grade 1', // Default grade
            students: [] 
        };
        setClasses(prev => ({ ...prev, [newClassId]: newClass }));
        setSelectedClassId(newClassId);
    };

    const handleAddStudent = (studentName: string) => {
        if (!selectedClassId) return;
        const newStudent: Student = {
            id: `s-${Date.now()}`,
            name: studentName,
            avatar: `https://i.pravatar.cc/150?u=${studentName}`,
            lastActivity: 'Just now',
            lastActive: 'Just now',
            progress: 0,
            averageScore: 0,
            timeSpent: '0h 0m',
            isStruggling: false,
            grade: currentClass.grade || 'N/A',
            level: 'Beginner',
            attendance: 0,
            scoreHistory: [],
            assignments: [],
        };
        const updatedClasses = { ...classes };
        updatedClasses[selectedClassId].students.push(newStudent);
        setClasses(updatedClasses);
    };

    const SortableHeader: React.FC<{ sortKey: SortKey; label: string; }> = ({ sortKey, label }) => (
        <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => requestSort(sortKey)}>
            {label}
            {sortConfig.key === sortKey && (
                <i className={`fa-solid ${sortConfig.order === 'asc' ? 'fa-arrow-up-short-wide' : 'fa-arrow-down-wide-short'} ml-2`}></i>
            )}
        </th>
    );

    return (
        <div className="max-w-7xl mx-auto">
            <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
                <div>
                    <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white">Teacher Dashboard</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your classes and track student progress.</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setCreateTestOpen(true)} className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                        Create Test
                    </button>
                    <button onClick={() => setAssignHomeworkOpen(true)} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <i className="fa-solid fa-plus"></i>
                        Assign Homework
                    </button>
                </div>
            </header>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                       <div className="flex items-baseline gap-2">
                            <label htmlFor="class-select" className="text-sm font-medium text-slate-500 dark:text-slate-400">Class:</label>
                            <select
                                id="class-select"
                                value={selectedClassId}
                                onChange={(e) => setSelectedClassId(e.target.value)}
                                className="font-bold text-xl text-slate-800 dark:text-white bg-transparent border-0 focus:ring-0"
                            >
                                {Object.entries(classes).map(([id, classData]) => (
                                    <option key={id} value={id}>{classData.name}</option>
                                ))}
                            </select>
                       </div>
                        <button onClick={() => setAddClassModalOpen(true)} className="text-xs text-blue-600 hover:underline">+ Add Class</button>
                    </div>
                    <button onClick={() => setAddStudentModalOpen(true)} className="text-sm text-blue-600 hover:underline font-semibold">+ Add Student</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-300">
                            <tr>
                                <SortableHeader sortKey="name" label="Student Name" />
                                <SortableHeader sortKey="averageScore" label="Avg. Score" />
                                <SortableHeader sortKey="timeSpent" label="Time Spent" />
                                <th scope="col" className="px-6 py-3">Progress</th>
                                <SortableHeader sortKey="progress" label="%" />
                                <SortableHeader sortKey="lastActivity" label="Last Active" />
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedStudents.map(student => (
                                <tr key={student.id} className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                    <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap flex items-center gap-3">
                                        {student.isStruggling && <i className="fa-solid fa-triangle-exclamation text-amber-500" title="Student may be struggling"></i>}
                                        <img className="w-8 h-8 rounded-full" src={student.avatar} alt={student.name} />
                                        {student.name}
                                    </th>
                                    <td className={`px-6 py-4 font-semibold ${getScoreColor(student.averageScore)}`}>{student.averageScore}</td>
                                    <td className="px-6 py-4">{student.timeSpent}</td>
                                    <td className="px-6 py-4 w-40">
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                            <div className={`${getProgressColor(student.progress)} h-2 rounded-full`} style={{ width: `${student.progress}%` }}></div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{student.progress}%</td>
                                    <td className="px-6 py-4">{student.lastActivity}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => setSelectedStudent(student)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Report</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedStudent && <StudentReportModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />}
            {isCreateTestOpen && <CreateTestModal onClose={() => setCreateTestOpen(false)} />}
            {isAssignHomeworkOpen && <AssignHomeworkModal students={students} onClose={() => setAssignHomeworkOpen(false)} />}
            {isAddClassModalOpen && <AddClassModal onClose={() => setAddClassModalOpen(false)} onAddClass={handleAddClass} />}
            {isAddStudentModalOpen && <AddStudentModal onClose={() => setAddStudentModalOpen(false)} onAddStudent={handleAddStudent} />}
        </div>
    );
};

export default TeacherDashboard;