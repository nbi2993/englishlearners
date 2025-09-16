import React from 'react';
import type { View, User } from '../types';

interface SidebarProps {
  user: User;
  currentView: View;
  setView: (view: View) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  language: 'en' | 'vi';
  translations: any;
}

const NavItem: React.FC<{
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-3 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg relative ${
      isActive
        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
        : 'text-slate-700 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5'
    }`}
  >
    {isActive && <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 dark:bg-blue-400 rounded-r-full"></div>}
    <i className={`fa-solid ${icon} w-6 text-center text-lg`}></i>
    <span className="ml-3">{label}</span>
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ user, currentView, setView, isSidebarOpen, setIsSidebarOpen, language, translations }) => {
  const t = translations[language];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/30 z-30 md:hidden transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <aside className={`fixed inset-y-0 left-0 w-64 border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col p-4 z-40
                       transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 sidebar-glass
                       ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between mb-8 h-12">
          <div className="flex items-center">
              <i className="fa-solid fa-graduation-cap text-3xl text-blue-600 dark:text-blue-400"></i>
              <h1 className="text-xl font-bold ml-3 text-slate-900 dark:text-white">IVS English</h1>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden h-10 w-10 flex-center rounded-full hover:bg-black/10 dark:hover:bg-white/10">
              <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>
        <nav className="flex-1 space-y-2">
          <NavItem
            icon="fa-house"
            label={t.home}
            isActive={currentView === 'home'}
            onClick={() => setView('home')}
          />
          <NavItem
            icon="fa-table-columns"
            label={t.curriculum}
            isActive={currentView === 'curriculum' || currentView === 'lesson'}
            onClick={() => setView('curriculum')}
          />
          {user.role === 'teacher' && (
            <NavItem
                icon="fa-user-tie"
                label={t['teacher-dashboard']}
                isActive={currentView === 'teacher-dashboard'}
                onClick={() => setView('teacher-dashboard')}
            />
          )}
          <h3 className="px-3 pt-6 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">AI Tools</h3>
          <NavItem
            icon="fa-comments"
            label={t['speaking-partner']}
            isActive={currentView === 'speaking-partner'}
            onClick={() => setView('speaking-partner')}
          />
          <NavItem
            icon="fa-pen-ruler"
            label={t['writing-grader']}
            isActive={currentView === 'writing-grader'}
            onClick={() => setView('writing-grader')}
          />
        </nav>
        <div className="mt-auto space-y-2">
          <NavItem
            icon="fa-gear"
            label={t.settings}
            isActive={currentView === 'settings'}
            onClick={() => setView('settings')}
          />
          <NavItem
            icon="fa-arrow-right-from-bracket"
            label={language === 'vi' ? 'Đăng xuất' : 'Logout'}
            isActive={false}
            onClick={() => alert('Logout clicked!')}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;