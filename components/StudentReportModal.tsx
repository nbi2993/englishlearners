import React from 'react';
import { Student } from '../types';

interface StudentReportModalProps {
  student: Student;
  onClose: () => void;
}

const StudentReportModal: React.FC<StudentReportModalProps> = ({ student, onClose }) => {
    
    const getStatusColor = (status: 'Completed' | 'Pending' | 'Overdue') => {
        switch(status) {
            case 'Completed': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400';
            case 'Pending': return 'bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400';
            case 'Overdue': return 'bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-400';
        }
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity animate-fade-in p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 w-full max-w-2xl transform transition-all animate-slide-in-up flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center border-b pb-3 dark:border-slate-700 flex-shrink-0">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">Student Report</h3>
            <div className="flex items-center gap-3 mt-1">
                <img className="w-10 h-10 rounded-full" src={student.avatar} alt={student.name} />
                <span className="text-lg font-semibold">{student.name}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
        </div>
        
        <div className="mt-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{student.progress}%</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Progress</div>
                </div>
                 <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{student.averageScore}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Avg. Score</div>
                </div>
                 <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">{student.timeSpent}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Time Spent</div>
                </div>
            </div>

            <div className="mt-6">
                <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Score History</h4>
                <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg h-48 flex items-end justify-around gap-2">
                    {student.scoreHistory.length > 0 ? student.scoreHistory.map((entry, index) => (
                        <div key={index} className="flex flex-col items-center justify-end h-full w-full group">
                            <div className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{entry.score}</div>
                            <div 
                                className="w-3/4 bg-blue-400 dark:bg-blue-500 rounded-t-md hover:bg-blue-500 dark:hover:bg-blue-400 transition-all"
                                style={{ height: `${entry.score}%` }}
                                title={`Score: ${entry.score}`}
                            ></div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{entry.date}</div>
                        </div>
                    )) : (
                        <p className="text-slate-500 text-sm self-center">No score history available.</p>
                    )}
                </div>
            </div>

            <div className="mt-6">
                 <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Assignments</h4>
                 <div className="space-y-2">
                    {student.assignments.length > 0 ? student.assignments.map(assignment => (
                        <div key={assignment.id} className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-slate-800 dark:text-slate-100">{assignment.title}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Due: {assignment.dueDate}</p>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${getStatusColor(assignment.status)}`}>
                                {assignment.status}
                            </span>
                        </div>
                    )) : (
                         <p className="text-slate-500 text-sm p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">No assignments found.</p>
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
  );
};

export default StudentReportModal;