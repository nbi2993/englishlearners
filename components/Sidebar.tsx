import React, { useState } from 'react';
import type { User, View } from '../types';

interface SidebarProps {
  user: User;
  currentView: View;
  setView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, currentView, setView }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const navGroups = [
    [
      { id: 'home', icon: 'fa-home', label: 'Home' }
    ],
    [
      { id: 'curriculum', icon: 'fa-book-open', label: 'Curriculum' },
      ...(user.role === 'teacher' ? [{ id: 'teacher-dashboard', icon: 'fa-chalkboard-user', label: 'Dashboard' }] : []),
      { id: 'writing-grader', icon: 'fa-pen-ruler', label: 'Writing Grader' },
      { id: 'speaking-partner', icon: 'fa-comments', label: 'Speaking Partner' },
    ],
    [
      { id: 'settings', icon: 'fa-cog', label: 'Settings' },
      { id: 'user-guide', icon: 'fa-circle-question', label: 'User Guide' },
    ]
  ];

  return (
    <nav className={`flex flex-col bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className={`p-4 flex items-center border-b dark:border-slate-700 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
        {isExpanded && <span className="text-xl font-bold text-blue-600 dark:text-blue-400">IVS English</span>}
        <button onClick={() => setIsExpanded(!isExpanded)} className="btn btn-icon">
          <i className={`fa-solid ${isExpanded ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
        </button>
      </div>
      
      <div className={`p-4 flex flex-col items-center border-b dark:border-slate-700 ${isExpanded ? '' : 'py-4'}`}>
        <i className={`text-4xl text-blue-500 mb-2 ${user.avatar}`}></i>
        {isExpanded && <h3 className="font-bold text-lg text-center">{user.name}</h3>}
        {isExpanded && <p className="text-sm text-slate-500 dark:text-slate-400">{user.role === 'student' ? user.gradeLevel || 'Student' : user.title || 'Teacher'}</p>}
      </div>
      
      <ul className="flex-1 px-2 py-4">
        {navGroups.map((group, groupIndex) => (
          <React.Fragment key={`group-${groupIndex}`}>
            {group.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setView(item.id as View)}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
                    currentView === item.id 
                      ? 'bg-blue-500 text-white' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
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
      
      <div className="p-4 mt-auto border-t dark:border-slate-700 text-center">
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