import React, { useState } from 'react';
import type { View } from '../types';

interface AssistiveTouchProps {
  setView: (view: View) => void;
  language: 'en' | 'vi';
}

const AssistiveTouch: React.FC<AssistiveTouchProps> = ({ setView, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  const t = {
    en: {
      home: 'Home',
      speaking: 'Speaking',
      writing: 'Writing',
      settings: 'Settings'
    },
    vi: {
      home: 'Trang chủ',
      speaking: 'Luyện nói',
      writing: 'Chấm bài',
      settings: 'Cài đặt'
    }
  }[language];
  
  const menuItems = [
    { view: 'home', icon: 'fa-home', label: t.home },
    { view: 'speaking-partner', icon: 'fa-comments', label: t.speaking },
    { view: 'writing-grader', icon: 'fa-pen-ruler', label: t.writing },
    { view: 'settings', icon: 'fa-cog', label: t.settings },
  ];

  const handleAction = (view: View) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Menu items that appear when open */}
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-4 flex flex-col items-center gap-3 animate-fade-in">
            {menuItems.map(item => (
              <div key={item.view} className="group relative">
                <button
                  onClick={() => handleAction(item.view as View)}
                  className="w-12 h-12 rounded-full bg-slate-700 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all"
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                </button>
                <span className="absolute right-full mr-3 px-2 py-1 text-xs text-white bg-slate-800 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Main floating button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${isOpen ? 'bg-red-500 hover:bg-red-600 rotate-45' : 'bg-blue-500 hover:bg-blue-600'}`}
          aria-label="Assistive Touch Menu"
        >
          <i className={`fa-solid fa-plus text-2xl transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}></i>
        </button>
      </div>
    </div>
  );
};

export default AssistiveTouch;
