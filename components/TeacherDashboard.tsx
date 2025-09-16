import React, { useState } from 'react';
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
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ classes, setClasses, language }) => {
  const classKeys = Object.keys(classes);
  const [selectedClassId, setSelectedClassId] = useState<string>(classKeys[0] || '');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [isHomeworkModalOpen, setIsHomeworkModalOpen] = useState(false);
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);

  const selectedClass = classes[selectedClassId];

  const t = {
    en: {
      noClassesTitle: "No Classes Found",
      noClassesDesc: "Get started by creating your first class.",
      createClass: "Create Class",
      dashboardTitle: "Teacher Dashboard",
      dashboardDesc: "Manage your classes and track student progress.",
      assign: "Assign",
      createTest: "Create Test",
      addClass: "Add Class",
      addStudent: "Add Student",
      students: "Students",
      classAverage: "Class Average",
      struggling: "Struggling",
      selectClassPrompt: "Select a class to view students.",
    },
    vi: {
      noClassesTitle: "Không tìm thấy Lớp học",
      noClassesDesc: "Bắt đầu bằng cách tạo lớp học đầu tiên của bạn.",
      createClass: "Tạo Lớp",
      dashboardTitle: "Bảng điều khiển Giáo viên",
      dashboardDesc: "Quản lý các lớp học và theo dõi tiến độ của học sinh.",
      assign: "Giao bài",
      createTest: "Tạo Bài kiểm tra",
      addClass: "Thêm Lớp",
      addStudent: "Thêm Học sinh",
      students: "Học sinh",
      classAverage: "Điểm TB Lớp",
      struggling: "Cần chú ý",
      selectClassPrompt: "Chọn một lớp để xem danh sách học sinh.",
    }
  }[language];

  const handleOpenReport = (student: Student) => {
    setSelectedStudent(student);
    setIsReportModalOpen(true);
  };
  
  const handleAddClass = (className: string) => {
    const newClassId = `class-${Date.now()}`;
    const newClasses: Classes = {
      ...classes,
      [newClassId]: { name: className, students: [] }
    };
    setClasses(newClasses);
    setSelectedClassId(newClassId);
    setIsAddClassModalOpen(false);
  };

  const handleAddStudent = (studentName: string) => {
    if (!selectedClassId) return;
    const newStudent: Student = {
        id: `s-${Date.now()}`,
        name: studentName,
        avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
        lastActivity: 'Never',
        progress: 0,
        averageScore: 0,
        timeSpent: '0h 0m',
        isStruggling: false,
        scoreHistory: [],
        assignments: [],
        grades: [],
    };
    const updatedClasses = { ...classes };
    updatedClasses[selectedClassId].students.push(newStudent);
    setClasses(updatedClasses);
    setIsAddStudentModalOpen(false);
  };

  if (classKeys.length === 0) {
      return (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <i className="fa-solid fa-school-circle-xmark text-6xl text-slate-400 mb-4"></i>
              <h2 className="text-2xl font-bold">{t.noClassesTitle}</h2>
              <p className="text-slate-500 mb-6">{t.noClassesDesc}</p>
              <button className="btn btn-primary" onClick={() => setIsAddClassModalOpen(true)}>
                  <i className="fa-solid fa-plus mr-2"></i> {t.createClass}
              </button>
              {isAddClassModalOpen && <AddClassModal onClose={() => setIsAddClassModalOpen(false)} onAddClass={handleAddClass} language={language} />}
          </div>
      );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{t.dashboardTitle}</h1>
            <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">{t.dashboardDesc}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsHomeworkModalOpen(true)} className="btn btn-secondary"><i className="fa-solid fa-file-pen mr-2"></i> {t.assign}</button>
            <button onClick={() => setIsTestModalOpen(true)} className="btn btn-primary"><i className="fa-solid fa-vial-circle-check mr-2"></i> {t.createTest}</button>
          </div>
        </div>
      </header>

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <select
          value={selectedClassId}
          onChange={(e) => setSelectedClassId(e.target.value)}
          className="form-select w-full sm:w-auto"
        >
          {classKeys.map(key => (
            <option key={key} value={key}>{classes[key].name}</option>
          ))}
        </select>
        <button onClick={() => setIsAddClassModalOpen(true)} className="btn btn-secondary-outline text-sm"><i className="fa-solid fa-plus mr-2"></i> {t.addClass}</button>
        <button onClick={() => setIsAddStudentModalOpen(true)} className="btn btn-primary-outline text-sm"><i className="fa-solid fa-user-plus mr-2"></i> {t.addStudent}</button>
      </div>
      
      {selectedClass ? (
        <>
            <div className="mb-6 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg flex flex-wrap justify-between items-center gap-4">
                <h2 className="text-2xl font-bold">{selectedClass.name}</h2>
                <div className="flex gap-x-6 gap-y-2 flex-wrap">
                    <div className="text-center">
                        <p className="text-2xl font-bold">{selectedClass.students.length}</p>
                        <p className="text-sm text-slate-500">{t.students}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-green-500">
                           {selectedClass.students.length > 0 ? (selectedClass.students.reduce((acc, s) => acc + s.averageScore, 0) / selectedClass.students.length).toFixed(1) : 'N/A'}
                        </p>
                        <p className="text-sm text-slate-500">{t.classAverage}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-amber-500">
                           {selectedClass.students.filter(s => s.isStruggling).length}
                        </p>
                        <p className="text-sm text-slate-500">{t.struggling}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {selectedClass.students.map(student => (
                <StudentCard key={student.id} student={student} onReportClick={() => handleOpenReport(student)} language={language} />
              ))}
            </div>
        </>
      ) : (
        <p>{t.selectClassPrompt}</p>
      )}

      {isReportModalOpen && selectedStudent && (
        <StudentReportModal student={selectedStudent} onClose={() => {setIsReportModalOpen(false); setSelectedStudent(null);}} classes={classes} setClasses={setClasses} classId={selectedClassId} language={language}/>
      )}
      {isTestModalOpen && <CreateTestModal onClose={() => setIsTestModalOpen(false)} language={language} />}
      {isHomeworkModalOpen && selectedClass && <AssignHomeworkModal students={selectedClass.students} onClose={() => setIsHomeworkModalOpen(false)} language={language} />}
      {isAddClassModalOpen && <AddClassModal onClose={() => setIsAddClassModalOpen(false)} onAddClass={handleAddClass} language={language} />}
      {isAddStudentModalOpen && <AddStudentModal onClose={() => setIsAddStudentModalOpen(false)} onAddStudent={handleAddStudent} language={language} />}
    </div>
  );
};

export default TeacherDashboard;