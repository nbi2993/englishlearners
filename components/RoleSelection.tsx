import React from 'react';

interface RoleSelectionProps {
  onSelectRole: (role: 'student' | 'teacher') => void;
  language: 'en' | 'vi';
  setLanguage: (language: 'en' | 'vi') => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole, language, setLanguage }) => {
  const t = {
    en: {
      title: 'Welcome to IVS English',
      subtitle: 'Please select your role to get started',
      student: 'Student',
      teacher: 'Teacher',
      studentDesc: 'Start your learning journey, track progress, and use AI tools.',
      teacherDesc: 'Manage classes, track students, and access teaching resources.'
    },
    vi: {
      title: 'Chào mừng đến với IVS English',
      subtitle: 'Vui lòng chọn vai trò của bạn để bắt đầu',
      student: 'Học sinh',
      teacher: 'Giáo viên',
      studentDesc: 'Bắt đầu hành trình học tập, theo dõi tiến độ và sử dụng các công cụ AI.',
      teacherDesc: 'Quản lý lớp học, theo dõi học sinh và truy cập tài nguyên giảng dạy.'
    }
  };

  const RoleCard = ({ role, title, description, icon }: { role: 'student' | 'teacher', title: string, description: string, icon: string }) => (
    <button
      onClick={() => onSelectRole(role)}
      className="card-glass w-full max-w-sm text-center p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
      <i className={`fa-solid ${icon} text-5xl sm:text-6xl text-blue-500 mb-4 sm:mb-6`}></i>
      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{description}</p>
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-between h-full p-6 text-center animate-fade-in">
        {/* Spacer for vertical alignment */}
        <div className="w-full"></div>

        {/* Main Content */}
        <div className="w-full">
            <i className="fa-solid fa-graduation-cap text-5xl sm:text-6xl text-blue-500 mb-4"></i>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-2">{t[language].title}</h1>
            <p className="text-md sm:text-lg text-slate-500 dark:text-slate-400 mb-8">{t[language].subtitle}</p>

            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-center">
                <RoleCard role="student" title={t[language].student} description={t[language].studentDesc} icon="fa-user-graduate" />
                <RoleCard role="teacher" title={t[language].teacher} description={t[language].teacherDesc} icon="fa-chalkboard-user" />
            </div>
        </div>
        
        {/* Language selector at the bottom */}
        <div className="w-full flex justify-center items-center gap-4 mt-8">
             <button 
                onClick={() => setLanguage('en')}
                title="English"
                className={`transition-all duration-300 ${language === 'en' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-80'}`}
            >
                <span className="text-4xl">🇺🇸</span>
            </button>
            <button 
                onClick={() => setLanguage('vi')}
                title="Tiếng Việt"
                className={`transition-all duration-300 ${language === 'vi' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-80'}`}
            >
                <span className="text-4xl">🇻🇳</span>
            </button>
        </div>
    </div>
  );
};

export default RoleSelection;