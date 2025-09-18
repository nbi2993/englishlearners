
import React, { Fragment } from 'react';
import type { User, View } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { Menu, Transition } from '@headlessui/react';

interface SidebarProps {
  user: User;
  currentView: View;
  setView: (view: View) => void;
  language: 'en' | 'vi';
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, currentView, setView, language, isOpen, onClose }) => {
  const { logout } = useAuth();

  const t = {
    en: {
      home: 'Home',
      curriculum: 'Curriculum',
      teacherDashboard: 'Dashboard',
      writingGrader: 'Writing Grader',
      speakingPartner: 'Speaking Partner',
      settings: 'Settings',
      userGuide: 'User Guide',
      logout: 'Logout'
    },
    vi: {
      home: 'Trang chủ',
      curriculum: 'Chương trình',
      teacherDashboard: 'Bảng điều khiển',
      writingGrader: 'Chấm bài viết',
      speakingPartner: 'Luyện nói',
      settings: 'Cài đặt',
      userGuide: 'Hướng dẫn',
      logout: 'Đăng xuất'
    }
  };

  const studentNavItems: { view: View; icon: string; label: keyof typeof t.en }[] = [
    { view: 'home', icon: 'fa-home', label: 'home' },
    { view: 'curriculum', icon: 'fa-book-open', label: 'curriculum' },
  ];

  const teacherNavItems: { view: View; icon: string; label: keyof typeof t.en }[] = [
    { view: 'home', icon: 'fa-home', label: 'home' },
    { view: 'teacher-dashboard', icon: 'fa-chalkboard-user', label: 'teacherDashboard' },
    { view: 'curriculum', icon: 'fa-book-open', label: 'curriculum' },
  ];

  const commonNavItems: { view: View; icon: string; label: keyof typeof t.en }[] = [
    { view: 'writing-grader', icon: 'fa-pen-ruler', label: 'writingGrader' },
    { view: 'speaking-partner', icon: 'fa-comments', label: 'speakingPartner' },
  ];
  
  const bottomNavItems: { view: View; icon: string; label: keyof typeof t.en }[] = [
      // { view: 'settings', icon: 'fa-cog', label: 'settings' },
      { view: 'user-guide', icon: 'fa-circle-question', label: 'userGuide' },
  ];

  const navItems = user.role === 'teacher' ? teacherNavItems : studentNavItems;

  const NavLink = ({ item }: { item: { view: View; icon: string; label: keyof typeof t.en } }) => (
    <li>
      <button
        onClick={() => setView(item.view)}
        className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
          currentView === item.view
            ? 'bg-blue-500 text-white font-semibold'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
        }`}
      >
        <i className={`fa-solid ${item.icon} w-6 text-center text-lg`}></i>
        <span className="ml-4">{t[language][item.label]}</span>
      </button>
    </li>
  );

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect or perform other actions after logout
    } catch (error) {
      console.error("Failed to log out: ", error);
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 z-40 transform transition-transform md:relative md:translate-x-0 md:w-64 md:flex-shrink-0 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 h-[var(--header-height)] flex items-center">
            <i className="fa-solid fa-graduation-cap text-3xl text-blue-500"></i>
            <h1 className="text-xl font-bold ml-3">IVS English</h1>
        </div>
        
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <Menu as="div" className="relative w-full">
            <Menu.Button className="flex items-center w-full text-left rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <i className={`fa-solid ${user.avatar} text-2xl text-blue-500`}></i>
              </div>
              <div className="ml-3 flex-grow">
                <p className="font-semibold text-slate-800 dark:text-slate-200">{user.name}</p>
                <p className="text-sm text-slate-500 capitalize">{user.role}</p>
              </div>
              <i className="fa-solid fa-chevron-down text-xs text-slate-500 ml-2"></i>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 bottom-full mb-2 w-full origin-bottom-left bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setView('settings')}
                        className={`${ active ? 'bg-slate-100 dark:bg-slate-700' : '' } group flex w-full items-center rounded-md px-4 py-2 text-sm text-slate-700 dark:text-slate-300`}
                      >
                        <i className="fa-solid fa-cog w-6 text-center"></i>
                        <span className="ml-3">{t[language].settings}</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${ active ? 'bg-slate-100 dark:bg-slate-700' : '' } group flex w-full items-center rounded-md px-4 py-2 text-sm text-red-600 dark:text-red-400`}
                      >
                        <i className="fa-solid fa-right-from-bracket w-6 text-center"></i>
                        <span className="ml-3">{t[language].logout}</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map(item => <NavLink key={item.view} item={item} />)}
            <hr className="my-4 border-slate-200 dark:border-slate-700" />
            {commonNavItems.map(item => <NavLink key={item.view} item={item} />)}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
             <ul className="space-y-2">
                {bottomNavItems.map(item => <NavLink key={item.view} item={item} />)}
            </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
