
import React from 'react';
import { HomeIcon, RocketLaunchIcon, ChartBarIcon, AcademicCapIcon, LanguageIcon, Cog6ToothIcon } from './Icons';
import { useTranslation } from '../contexts/i18n';
import { CurriculumLevel } from '../types';
import { ivsLogoSrc } from '../assets/logo';

// Định nghĩa kiểu cho các props của Sidebar
interface SidebarProps {
  onNavigate: (screen: string) => void;
  activeScreen: string;
  activeLevel: CurriculumLevel | null;
  onOpenSettings: () => void;
}

// Component Sidebar
const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activeScreen, activeLevel, onOpenSettings }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-between w-20 bg-gray-800 text-white p-4 shadow-lg rounded-r-lg">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo của ứng dụng */}
        <div className="flex flex-col items-center text-center">
            <img src={ivsLogoSrc} alt="IVS Logo" className="w-12 h-12 rounded-full" />
            <span className="text-white text-[9px] mt-1.5 font-medium leading-tight">IVS Education</span>
        </div>

        {/* Các mục điều hướng chính */}
        <button
          onClick={() => onNavigate('home')}
          className={`p-2 rounded-full transition-colors duration-200 ${activeScreen === 'home' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          title={t('home')}
        >
          <HomeIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => onNavigate('dashboard')}
          className={`p-2 rounded-full transition-colors duration-200 ${activeScreen === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-700'} ${!activeLevel ? 'opacity-50 cursor-not-allowed' : ''}`}
          title={t('dashboard')}
          disabled={!activeLevel}
        >
          <ChartBarIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => onNavigate('curriculum')}
          className={`p-2 rounded-full transition-colors duration-200 ${activeScreen === 'curriculum' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          title={t('curriculum')}
        >
          <AcademicCapIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => onNavigate('other-programs')}
          className={`p-2 rounded-full transition-colors duration-200 ${activeScreen === 'other-programs' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          title={t('otherPrograms')}
        >
          <RocketLaunchIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Nút cài đặt ở cuối Sidebar */}
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={onOpenSettings}
          className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-700"
          title={t('settings')}
        >
            <Cog6ToothIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
