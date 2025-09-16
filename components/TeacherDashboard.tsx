import React, { useState, useEffect } from 'react';
import type { Classes, Student } from '../types';
import StudentCard from './StudentCard';
import StudentReportModal from './StudentReportModal';
import CreateTestModal from './CreateTestModal';
import AssignHomeworkModal from './AssignHomeworkModal';
import AddClassModal from './AddClassModal';
import AddStudentModal from './AddStudentModal';

interface TeacherDashboardProps {
    classes: Classes;
    setClasses: (classes: Classes) => void;
    language: 'en' | 'vi';
    translations: any;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ classes, setClasses, language, translations }) => {
    const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const [isReportModalOpen, setReportModalOpen] = useState(false);
    const [isTestModalOpen, setTestModalOpen] = useState(false);
    const [isHomeworkModalOpen, setHomeworkModalOpen] = useState(false);
    const [isAddClassModalOpen, setAddClassModalOpen] = useState(false);
    const [isAddStudentModalOpen, setAddStudentModalOpen] = useState(false);
    
    const selectedClass = selectedClassId ? classes[selectedClassId] : null;

    useEffect(() => {
        // If there's no selected class or the selected class was deleted,
        // select the first available class.
        if (!selectedClassId || !classes[selectedClassId]) {
            const firstClassId = Object.keys(classes)[0];
            setSelectedClassId(firstClassId || null);
        }
    }, [classes, selectedClassId]);

    const handleOpenReport = (student: Student) => {
        setSelectedStudent(student);
        setReportModalOpen(true);
    };

    const handleAddClass = (className: string) => {
        const newClassId = `${className.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
        const newClass = { name: className, students: [] };
        const newClasses = { ...classes, [newClassId]: newClass };
        setClasses(newClasses);
        setSelectedClassId(newClassId);
    };

    const handleAddStudent = (studentName: string) => {
        if (!selectedClassId) return;

        const newStudent: Student = {
            id: `s${Date.now()}`, name: studentName, avatar: `https://i.pravatar.cc/150?u=${encodeURIComponent(studentName)}`,
            lastActivity: 'Just now', progress: 0, averageScore: 0, timeSpent: '0m',
            isStruggling: false, scoreHistory: [], assignments: [], grades: [], notes: ''
        };
        
        const updatedClasses = { ...classes };
        updatedClasses[selectedClassId].students.push(newStudent);
        setClasses(updatedClasses);
    };
    
    const handleUpdateStudent = (updatedStudent: Student) => {
        if (!selectedClassId) return;

        const updatedClasses = { ...classes };
        const studentIndex = updatedClasses[selectedClassId].students.findIndex(s => s.id === updatedStudent.id);
        
        if (studentIndex > -1) {
            updatedClasses[selectedClassId].students[studentIndex] = updatedStudent;
            setClasses(updatedClasses);
            // Also update the selectedStudent if it's the one being edited
            if (selectedStudent?.id === updatedStudent.id) {
                setSelectedStudent(updatedStudent);
            }
        }
    };

    const classIds = Object.keys(classes);

    return (
        <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                    <div className="card-glass p-4">
                        <h2 className="text-xl font-bold mb-4">Classes</h2>
                        <div className="space-y-2">
                             {classIds.length > 0 ? (
                                classIds.map((id) => (
                                    <button
                                        key={id} onClick={() => setSelectedClassId(id)}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm font-semibold ${
                                            selectedClassId === id
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'hover:bg-black/5 dark:hover:bg-white/5'
                                        }`}
                                    >
                                        {classes[id].name}
                                    </button>
                                ))
                            ) : (
                                <p className="text-sm text-slate-700 dark:text-slate-400 p-2">No classes yet. Add one to start.</p>
                            )}
                        </div>
                        <button onClick={() => setAddClassModalOpen(true)} className="w-full mt-4 btn btn-secondary text-sm">
                            <i className="fa-solid fa-plus mr-2"></i> Add Class
                        </button>
                    </div>
                </div>

                <div className="flex-1">
                    {classIds.length === 0 && (
                        <div className="card-glass h-full flex flex-col items-center justify-center text-center p-8">
                            <i className="fa-solid fa-chalkboard-user text-6xl text-slate-400 dark:text-slate-500 mb-4"></i>
                            <h2 className="text-2xl font-bold">Welcome to your Dashboard!</h2>
                            <p className="text-slate-700 dark:text-slate-400 mt-2 mb-6 max-w-sm">Create your first class to add students, assign homework, and track progress.</p>
                            <button onClick={() => setAddClassModalOpen(true)} className="btn btn-primary">
                                <i className="fa-solid fa-plus mr-2"></i> Create Your First Class
                            </button>
                        </div>
                    )}

                    {selectedClass && (
                        <div>
                            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                                <h2 className="text-2xl font-bold">{selectedClass.name}</h2>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => setHomeworkModalOpen(true)} className="btn btn-secondary text-sm">Assign Homework</button>
                                    <button onClick={() => setTestModalOpen(true)} className="btn btn-secondary text-sm">Create Test</button>
                                </div>
                            </div>
                            
                            {selectedClass.students.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                    {selectedClass.students.map(student => (
                                        <StudentCard key={student.id} student={student} onReportClick={() => handleOpenReport(student)} />
                                    ))}
                                    <button onClick={() => setAddStudentModalOpen(true)} className="card-glass border-2 border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center text-slate-700 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors rounded-2xl min-h-[220px]">
                                        <i className="fa-solid fa-plus text-2xl"></i>
                                        <span className="mt-2 font-semibold">Add Student</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="card-glass h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-300 dark:border-slate-600">
                                    <i className="fa-solid fa-user-plus text-6xl text-slate-400 dark:text-slate-500 mb-4"></i>
                                    <h2 className="text-2xl font-bold">This class is empty</h2>
                                    <p className="text-slate-700 dark:text-slate-400 mt-2 mb-6">Add your first student to begin tracking their progress and assignments.</p>
                                    <button onClick={() => setAddStudentModalOpen(true)} className="btn btn-primary">
                                        <i className="fa-solid fa-plus mr-2"></i> Add Student
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            {isReportModalOpen && selectedStudent && (
                <StudentReportModal 
                    student={selectedStudent} 
                    onClose={() => setReportModalOpen(false)}
                    onUpdateStudent={handleUpdateStudent}
                />
            )}
            {isTestModalOpen && <CreateTestModal onClose={() => setTestModalOpen(false)} />}
            {isHomeworkModalOpen && selectedClass && (
                <AssignHomeworkModal students={selectedClass.students} onClose={() => setHomeworkModalOpen(false)} />
            )}
            {isAddClassModalOpen && <AddClassModal onClose={() => setAddClassModalOpen(false)} onAddClass={handleAddClass} />}
            {isAddStudentModalOpen && <AddStudentModal onClose={() => setAddStudentModalOpen(false)} onAddStudent={handleAddStudent} />}
        </div>
    );
};

export default TeacherDashboard;