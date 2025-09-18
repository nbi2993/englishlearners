import React from 'react';
import type { View, User } from '../types';
import { Link } from 'react-router-dom';

interface HeaderProps {
  currentView: View;
  language: 'en' | 'vi';
  onMenuClick: () => void;
  user: User | null;
}

const Header: React.FC<HeaderProps> = ({ currentView, language, onMenuClick, user }) => {
  const translations = {
    en: {
      home: 'Home',
      curriculum: 'Curriculum',
      'teacher-dashboard': 'Dashboard',
      'writing-grader': 'Writing Grader',
      'speaking-partner': 'Speaking Partner',
      settings: 'Settings',
      'user-guide': 'User Guide',
      signIn: 'Sign In',
      signUp: 'Sign Up',
    },
    vi: {
      home: 'Trang chủ',
      curriculum: 'Chương trình',
      'teacher-dashboard': 'Bảng điều khiển',
      'writing-grader': 'Chấm bài viết',
      'speaking-partner': 'Luyện nói',
      settings: 'Cài đặt',
      'user-guide': 'Hướng dẫn',
      signIn: 'Đăng nhập',
      signUp: 'Đăng ký',
    }
  };

  const title = translations[language][currentView] || 'IVS English';

  return (
    <header className="md:hidden sticky top-0 z-20 flex items-center justify-between p-4 h-[var(--header-height)] bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      {user ? (
        <button onClick={onMenuClick} className="btn btn-icon btn-secondary">
          <i className="fa-solid fa-bars"></i>
        </button>
      ) : (
        <div />
      )}
      <h1 className="text-lg font-bold">{title}</h1>
      {!user ? (
        <div className="flex items-center gap-2">
          <Link to="/signin" className="btn btn-sm btn-secondary">{translations[language].signIn}</Link>
          <Link to="/signup" className="btn btn-sm btn-primary">{translations[language].signUp}</Link>
        </div>
      ) : (
        <div className="w-10"></div> // Spacer
      )}
    </header>
  );
};

export default Header;
