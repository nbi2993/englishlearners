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
      writingGrader: 'Writing Grader',
      speakingPartner: 'Speaking Partner',
      aiTools: 'AI Tools',
    },
    vi: {
      writingGrader: 'Chấm bài viết',
      speakingPartner: 'Luyện nói',
      aiTools: 'Công cụ AI',
    }
  };

  const menuItems: { view: View; icon: string; label: keyof typeof t.en; color: string }[] = [
    { view: 'writing-grader', icon: 'fa-pen-ruler', label: 'writingGrader', color: 'bg-blue-500' },
    { view: 'speaking-partner', icon: 'fa-comments', label: 'speakingPartner', color: 'bg-green-500' },
  ];
  
  const handleToggle = () => {
      setIsOpen(prev => !prev);
  };
  
  const handleItemClick = (view: View) => {
      setView(view);
      setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
        <div className="relative flex flex-col-reverse items-center gap-3">
             {menuItems.map((item, index) => (
                <div 
                    key={item.view}
                    className={`transition-all duration-300 flex items-center gap-3 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                    style={{ transitionDelay: `${isOpen ? index * 50 : 0}ms` }}
                >
                    <span className="text-sm bg-slate-800 text-white px-2 py-1 rounded-md whitespace-nowrap">{t[language][item.label]}</span>
                     <button
                        onClick={() => handleItemClick(item.view)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg ${item.color} hover:scale-110 transition-transform`}
                     >
                        <i className={`fa-solid ${item.icon}`}></i>
                    </button>
                </div>
             ))}
            
            <button
                onClick={handleToggle}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-xl transition-all duration-300 ${isOpen ? 'bg-red-500 rotate-45' : 'bg-blue-600'}`}
                title={t[language].aiTools}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
  );
};

export default AssistiveTouch;
