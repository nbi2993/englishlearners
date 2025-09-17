import React from 'react';

interface RoleSelectionProps {
  onSelectRole: (role: 'student' | 'teacher') => void;
  language: 'en' | 'vi';
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole, language }) => {
  const t = {
    en: {
      welcome: "Welcome to IVS English!",
      prompt: "Please select your role to get started.",
      student: "I am a Student",
      teacher: "I am a Teacher",
    },
    vi: {
      welcome: "Chào mừng đến với IVS English!",
      prompt: "Vui lòng chọn vai trò của bạn để bắt đầu.",
      student: "Tôi là Học sinh",
      teacher: "Tôi là Giáo viên",
    }
  }[language];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">{t.welcome}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">{t.prompt}</p>
      
      <div className="flex flex-col sm:flex-row gap-8">
        <div 
          className="card-glass p-8 w-64 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          onClick={() => onSelectRole('student')}
        >
          <i className="fa-solid fa-user-graduate text-6xl text-blue-500 mb-4"></i>
          <h2 className="text-2xl font-bold">{t.student}</h2>
        </div>
        
        <div 
          className="card-glass p-8 w-64 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          onClick={() => onSelectRole('teacher')}
        >
          <i className="fa-solid fa-chalkboard-user text-6xl text-green-500 mb-4"></i>
          <h2 className="text-2xl font-bold">{t.teacher}</h2>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;