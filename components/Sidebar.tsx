import React, { useState } from 'react';
import type { User, View } from '../types';

interface SidebarProps {
  user: User;
  currentView: View;
  setView: (view: View) => void;
  language: 'en' | 'vi';
}

const Sidebar: React.FC<SidebarProps> = ({ user, currentView, setView, language }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const translations = {
    en: {
      home: 'Home',
      curriculum: 'Curriculum',
      dashboard: 'Dashboard',
      writingGrader: 'Writing Grader',
      speakingPartner: 'Speaking Partner',
      settings: 'Settings',
      userGuide: 'User Guide',
      student: 'Student',
      teacher: 'Teacher',
    },
    vi: {
      home: 'Trang chủ',
      curriculum: 'Chương trình',
      dashboard: 'Bảng điều khiển',
      writingGrader: 'Chấm bài viết',
      speakingPartner: 'Luyện nói',
      settings: 'Cài đặt',
      userGuide: 'Hướng dẫn',
      student: 'Học sinh',
      teacher: 'Giáo viên',
    }
  };

  const t = translations[language];

  const navGroups = [
    [
      { id: 'home', icon: 'fa-home', label: t.home }
    ],
    [
      { id: 'curriculum', icon: 'fa-book-open', label: t.curriculum },
      ...(user.role === 'teacher' ? [{ id: 'teacher-dashboard', icon: 'fa-chalkboard-user', label: t.dashboard }] : []),
      { id: 'writing-grader', icon: 'fa-pen-ruler', label: t.writingGrader },
      { id: 'speaking-partner', icon: 'fa-comments', label: t.speakingPartner },
    ],
    [
      { id: 'settings', icon: 'fa-cog', label: t.settings },
      { id: 'user-guide', icon: 'fa-circle-question', label: t.userGuide },
    ]
  ];

  return (
    <nav className={`flex flex-col bg-white/70 dark:bg-slate-800/50 shadow-lg transition-all duration-300 ease-in-out sidebar-glass ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className={`p-4 flex items-center border-b border-slate-200/80 dark:border-slate-700/80 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
        {isExpanded && <span className="text-xl font-bold text-blue-600 dark:text-blue-400">IVS English</span>}
        <button onClick={() => setIsExpanded(!isExpanded)} className="btn btn-secondary h-8 w-8 !p-0">
          <i className={`fa-solid ${isExpanded ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
        </button>
      </div>
      
      <div className={`p-4 flex flex-col items-center border-b border-slate-200/80 dark:border-slate-700/80 ${isExpanded ? '' : 'py-4'}`}>
        <i className={`text-4xl text-blue-500 mb-2 ${user.avatar}`}></i>
        {isExpanded && <h3 className="font-bold text-lg text-center">{user.name}</h3>}
        {isExpanded && <p className="text-sm text-slate-500 dark:text-slate-400">{user.role === 'student' ? user.gradeLevel || t.student : user.title || t.teacher}</p>}
      </div>
      
      <ul className="flex-1 px-2 py-4 custom-scrollbar overflow-y-auto">
        {navGroups.map((group, groupIndex) => (
          <React.Fragment key={`group-${groupIndex}`}>
            {group.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setView(item.id as View)}
                  className={`w-full flex items-center p-3 my-1 rounded-lg transition-colors duration-200 ${
                    currentView === item.id 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/80'
                  } ${isExpanded ? '' : 'justify-center'}`}
                  title={item.label}
                >
                  <i className={`fa-solid ${item.icon} text-lg ${isExpanded ? 'mr-4 w-6 text-center' : ''}`}></i>
                  {isExpanded && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            ))}
            {groupIndex < navGroups.length - 1 && (
              <li key={`divider-${groupIndex}`}>
                <hr className="my-2 border-slate-200 dark:border-slate-700 mx-3" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      
      <div className="p-4 mt-auto border-t border-slate-200/80 dark:border-slate-700/80 text-center">
        {isExpanded ? (
          <p className="text-xs text-slate-500 dark:text-slate-400">© 2025 IVS JSC</p>
        ) : (
          <i className="fa-solid fa-copyright text-slate-500 dark:text-slate-400"></i>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;