import React from 'react';
import type { User, View } from '../types';

interface SidebarProps {
  user: User;
  currentView: View;
  setView: (view: View) => void;
  language: 'en' | 'vi';
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, currentView, setView, language, isOpen, onClose }) => {
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
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Sidebar navigation with hover-to-expand on desktop */}
      <nav className={`sidebar-glass group flex flex-col shadow-lg fixed inset-y-0 left-0 z-40 transform transition-all duration-300
        md:relative md:transform-none md:w-16 md:hover:w-64
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}`}>
        
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700/80 md:justify-center md:group-hover:justify-between">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-opacity md:opacity-0 md:group-hover:opacity-100">
            IVS English
          </span>
          <button onClick={onClose} className="md:hidden btn btn-secondary h-8 w-8 !p-0">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex-1 px-2 py-4 custom-scrollbar overflow-y-auto">
          {navGroups.map((group, groupIndex) => (
            <React.Fragment key={`group-${groupIndex}`}>
              {group.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => setView(item.id as View)}
                    className={`w-full flex items-center p-3 my-1 rounded-lg transition-colors duration-200 justify-start md:justify-center md:group-hover:justify-start
                      ${currentView === item.id 
                        ? 'bg-blue-500 text-white shadow-md' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/80'}`
                    }
                    title={item.label}
                  >
                    <i className={`fa-solid ${item.icon} text-lg w-6 text-center mr-4 transition-all md:mr-0 md:group-hover:mr-4`}></i>
                    <span className="font-medium transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
                      {item.label}
                    </span>
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
        
        {/* Sidebar Footer */}
        <div className="p-4 mt-auto border-t border-slate-200/80 dark:border-slate-700/80 text-center relative h-10 flex items-center justify-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 transition-opacity md:opacity-0 md:group-hover:opacity-100">
              © 2025 IVS JSC
            </p>
            <i className="fa-solid fa-copyright text-slate-500 dark:text-slate-400 absolute transition-opacity opacity-0 md:opacity-100 md:group-hover:opacity-0"></i>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;