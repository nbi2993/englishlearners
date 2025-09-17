import React, { useState, useMemo } from 'react';
import type { Classes, Student, ClassData, ClassScheduleItem } from '../types';
import StudentCard from './StudentCard';
import StudentRow from './StudentRow'; // Import the new component
import StudentReportModal from './StudentReportModal';
import CreateTestModal from './CreateTestModal';
import AssignHomeworkModal from './AssignHomeworkModal';
import AddClassModal from './AddClassModal';
import AddStudentModal from './AddStudentModal';
import DeleteClassModal from './DeleteClassModal';

interface TeacherDashboardProps {
  classes: Classes;
  setClasses: (classes: Classes) => void;
  language: 'en' | 'vi';
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ classes, setClasses, language }) => {
  const [expandedClassId, setExpandedClassId] = useState<string | null>(Object.keys(classes)[0] || null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [classForNewStudent, setClassForNewStudent] = useState<string | null>(null);
  
  // Modal states
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [isHomeworkModalOpen, setIsHomeworkModalOpen] = useState(false);
  const [isAddEditClassModalOpen, setIsAddEditClassModalOpen] = useState(false);
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [isDeleteClassModalOpen, setIsDeleteClassModalOpen] = useState(false);

  const [classToEdit, setClassToEdit] = useState<{ id: string; data: ClassData } | null>(null);
  const [classToDelete, setClassToDelete] = useState<{ id: string; data: ClassData } | null>(null);


  const [searchTerm, setSearchTerm] = useState('');

  const t = {
    en: {
      noClassesTitle: "No Classes Found",
      noClassesDesc: "Get started by creating your first class.",
      createClass: "Create Class",
      dashboardTitle: "Teacher Dashboard",
      dashboardDesc: "Manage your classes and track student progress.",
      searchPlaceholder: "Search by class or student name...",
      assign: "Assign",
      createTest: "Create Test",
      addClass: "Add Class",
      addStudent: "Add Student",
      students: "Students",
      classAverage: "Class Avg.",
      struggling: "Struggling",
      noStudents: "No students in this class yet.",
      expand: "Expand",
      collapse: "Collapse",
      editClass: "Edit Class",
      deleteClass: "Delete Class",
    },
    vi: {
      noClassesTitle: "Không tìm thấy Lớp học",
      noClassesDesc: "Bắt đầu bằng cách tạo lớp học đầu tiên của bạn.",
      createClass: "Tạo Lớp",
      dashboardTitle: "Bảng điều khiển Giáo viên",
      dashboardDesc: "Quản lý các lớp học và theo dõi tiến độ của học sinh.",
      searchPlaceholder: "Tìm theo tên lớp hoặc học sinh...",
      assign: "Giao bài",
      createTest: "Tạo Bài kiểm tra",
      addClass: "Thêm Lớp",
      addStudent: "Thêm Học sinh",
      students: "Học sinh",
      classAverage: "Điểm TB",
      struggling: "Cần chú ý",
      noStudents: "Chưa có học sinh nào trong lớp này.",
      expand: "Mở rộng",
      collapse: "Thu gọn",
      editClass: "Sửa Lớp",
      deleteClass: "Xóa Lớp",
    }
  }[language];
  
  const filteredClasses = useMemo(() => {
    if (!searchTerm.trim()) {
      return Object.entries(classes);
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return Object.entries(classes).filter(([classId, classData]) => {
      const classNameMatch = classData.name.toLowerCase().includes(lowercasedFilter);
      const studentNameMatch = classData.students.some(student => student.name.toLowerCase().includes(lowercasedFilter));
      return classNameMatch || studentNameMatch;
    });
  }, [classes, searchTerm]);

  const handleOpenReport = (student: Student) => {
    setSelectedStudent(student);
    setIsReportModalOpen(true);
  };

  const handleSaveClass = (classData: { name: string; schedule: ClassScheduleItem[] }, classId?: string) => {
    if (classId) { // Editing
      const updatedClasses = { ...classes, [classId]: { ...classes[classId], name: classData.name, schedule: classData.schedule } };
      setClasses(updatedClasses);
    } else { // Adding
      const newClassId = `class-${Date.now()}`;
      const newClasses: Classes = { ...classes, [newClassId]: { name: classData.name, students: [], schedule: classData.schedule } };
      setClasses(newClasses);
      setExpandedClassId(newClassId);
    }
    setIsAddEditClassModalOpen(false);
    setClassToEdit(null);
  };

  const handleDeleteClass = () => {
    if (!classToDelete) return;
    const { [classToDelete.id]: _, ...remainingClasses } = classes;
    setClasses(remainingClasses);
    setIsDeleteClassModalOpen(false);
    setClassToDelete(null);
  };

  const handleAddStudent = (studentName: string) => {
    if (!classForNewStudent) return;
    const newStudent: Student = {
        id: `s-${Date.now()}`, name: studentName, avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
        lastActivity: 'Never', progress: 0, averageScore: 0, timeSpent: '0h 0m',
        isStruggling: false, scoreHistory: [], assignments: [], grades: [],
    };
    const updatedClasses = { ...classes };
    updatedClasses[classForNewStudent].students.push(newStudent);
    setClasses(updatedClasses);
    setIsAddStudentModalOpen(false);
    setClassForNewStudent(null);
  };

  if (Object.keys(classes).length === 0) {
      return (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <i className="fa-solid fa-school-circle-xmark text-6xl text-slate-400 mb-4"></i>
              <h2 className="text-2xl font-bold">{t.noClassesTitle}</h2>
              <p className="text-slate-500 mb-6">{t.noClassesDesc}</p>
              <button className="btn btn-primary" onClick={() => { setClassToEdit(null); setIsAddEditClassModalOpen(true); }}>
                  <i className="fa-solid fa-plus mr-2"></i> {t.createClass}
              </button>
              {isAddEditClassModalOpen && <AddClassModal onClose={() => setIsAddEditClassModalOpen(false)} onSave={handleSaveClass} language={language} />}
          </div>
      );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
      <header className="mb-6">
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

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="form-input pl-10"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <button onClick={() => { setClassToEdit(null); setIsAddEditClassModalOpen(true); }} className="btn btn-secondary-outline"><i className="fa-solid fa-plus mr-2"></i> {t.addClass}</button>
      </div>

      <div className="space-y-4">
        {filteredClasses.map(([classId, classData]) => {
          const isExpanded = expandedClassId === classId;
          const classAvg = classData.students.length > 0 ? (classData.students.reduce((acc, s) => acc + s.averageScore, 0) / classData.students.length).toFixed(1) : 'N/A';
          const strugglingCount = classData.students.filter(s => s.isStruggling).length;

          return (
            <div key={classId} className="card-glass overflow-hidden">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50"
              >
                <div className="flex-grow" onClick={() => setExpandedClassId(isExpanded ? null : classId)}>
                  <h2 className="text-xl font-bold">{classData.name}</h2>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500 mt-1">
                    <span><i className="fa-solid fa-users mr-1"></i> {classData.students.length} {t.students}</span>
                    <span><i className="fa-solid fa-star-half-alt mr-1 text-green-500"></i> {t.classAverage}: {classAvg}</span>
                    <span className={strugglingCount > 0 ? 'text-amber-500' : ''}><i className="fa-solid fa-triangle-exclamation mr-1"></i> {strugglingCount} {t.struggling}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                    <button onClick={() => { setClassToEdit({ id: classId, data: classData }); setIsAddEditClassModalOpen(true); }} className="btn-icon text-blue-500" title={t.editClass}><i className="fa-solid fa-pencil"></i></button>
                    <button onClick={() => { setClassToDelete({ id: classId, data: classData }); setIsDeleteClassModalOpen(true); }} className="btn-icon text-red-500" title={t.deleteClass}><i className="fa-solid fa-trash"></i></button>
                    <button onClick={() => setExpandedClassId(isExpanded ? null : classId)} className="btn-icon text-slate-500" title={isExpanded ? t.collapse : t.expand}>
                      <i className={`fa-solid fa-chevron-down transition-transform ${isExpanded ? 'rotate-180' : ''}`}></i>
                    </button>
                </div>
              </div>

              {isExpanded && (
                <div className="p-4 border-t dark:border-slate-700 animate-fade-in">
                  {classData.students.length > 0 ? (
                    <>
                      {/* Desktop Grid */}
                      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {classData.students.map(student => (
                          <StudentCard key={student.id} student={student} onReportClick={() => handleOpenReport(student)} language={language} />
                        ))}
                      </div>
                      {/* Mobile List */}
                      <div className="md:hidden space-y-3">
                         {classData.students.map(student => (
                          <StudentRow key={student.id} student={student} onReportClick={() => handleOpenReport(student)} language={language} />
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <button onClick={() => { setClassForNewStudent(classId); setIsAddStudentModalOpen(true); }} className="btn btn-primary-outline text-sm">
                            <i className="fa-solid fa-user-plus mr-2"></i> {t.addStudent}
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-slate-500 mb-4">{t.noStudents}</p>
                      <button onClick={() => { setClassForNewStudent(classId); setIsAddStudentModalOpen(true); }} className="btn btn-primary">
                        <i className="fa-solid fa-user-plus mr-2"></i> {t.addStudent}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isReportModalOpen && selectedStudent && (
        <StudentReportModal student={selectedStudent} onClose={() => {setIsReportModalOpen(false); setSelectedStudent(null);}} classes={classes} setClasses={setClasses} classId={expandedClassId!} language={language}/>
      )}
      {isTestModalOpen && <CreateTestModal onClose={() => setIsTestModalOpen(false)} language={language} />}
      {isHomeworkModalOpen && <AssignHomeworkModal students={Object.values(classes).flatMap(c => c.students)} onClose={() => setIsHomeworkModalOpen(false)} language={language} />}
      {isAddEditClassModalOpen && <AddClassModal onClose={() => { setIsAddEditClassModalOpen(false); setClassToEdit(null); }} onSave={handleSaveClass} language={language} classToEdit={classToEdit}/>}
      {isAddStudentModalOpen && <AddStudentModal onClose={() => { setIsAddStudentModalOpen(false); setClassForNewStudent(null); }} onAddStudent={handleAddStudent} language={language} />}
      {isDeleteClassModalOpen && classToDelete && <DeleteClassModal className={classToDelete.data.name} onClose={() => { setIsDeleteClassModalOpen(false); setClassToDelete(null); }} onConfirm={handleDeleteClass} language={language}/>}
    </div>
  );
};

export default TeacherDashboard;