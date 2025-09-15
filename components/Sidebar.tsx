import React from 'react';
import type { View } from '../types';

interface SidebarProps {
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
    className={`flex items-center w-full px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-gray-700 dark:hover:text-white'
    }`}
  >
    <i className={`fa-solid ${icon} w-6 text-center`}></i>
    <span className="ml-3">{label}</span>
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isSidebarOpen, setIsSidebarOpen, language, translations }) => {
  const t = translations[language];

  return (
    <aside className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-gray-700 flex flex-col p-4 z-40
                     transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
                     ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
            <i className="fa-solid fa-graduation-cap text-3xl text-blue-600"></i>
            <h1 className="text-xl font-bold ml-3 text-gray-800 dark:text-white">IVS English</h1>
        </div>
        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
            <i className="fa-solid fa-times text-2xl"></i>
        </button>
      </div>
      <nav className="flex-1 space-y-2">
        <NavItem
          icon="fa-table-columns"
          label={t.dashboard}
          isActive={currentView === 'dashboard' || currentView === 'lesson'}
          onClick={() => setView('dashboard')}
        />
        <NavItem
          icon="fa-user-tie"
          label={t['teacher-dashboard']}
          isActive={currentView === 'teacher-dashboard'}
          onClick={() => setView('teacher-dashboard')}
        />
        <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">AI Tools</h3>
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
  );
};

export default Sidebar;