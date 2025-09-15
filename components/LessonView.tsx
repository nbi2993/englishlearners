
import React, { useState, useMemo, useEffect } from 'react';
import type { Course, CurriculumLesson, View } from '../types';

interface LessonViewProps {
  course: Course;
  setView: (view: View) => void;
}

type ActiveTab = 'aims' | 'vocabulary' | 'grammar' | 'activities' | 'flashcards';

const LessonView: React.FC<LessonViewProps> = ({ course, setView }) => {
  const [selectedLesson, setSelectedLesson] = useState<CurriculumLesson | null>(course.rawLevel.units[0]?.lessons[0] || null);
  const [expandedUnitId, setExpandedUnitId] = useState<number | null>(course.rawLevel.units[0]?.id || null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('aims');
  const [showContent, setShowContent] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  const currentUnit = useMemo(() => 
    course.rawLevel.units.find(u => u.lessons.some(l => l.id === selectedLesson?.id)),
    [course.rawLevel.units, selectedLesson]
  );
  
  if (!selectedLesson) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
            <h2 className="text-2xl font-bold">No lessons available for this course.</h2>
            <button onClick={() => setView('dashboard')} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
                Back to Dashboard
            </button>
        </div>
      </div>
    );
  }

  const handleUnitToggle = (unitId: number) => {
    setExpandedUnitId(prevId => (prevId === unitId ? null : unitId));
  };

  const handleSelectLesson = (lesson: CurriculumLesson) => {
      setSelectedLesson(lesson);
      setActiveTab('aims'); // Reset to first tab on new lesson selection
      if (isMobile) {
        setShowContent(true);
      }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'aims':
        return (
          <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm animate-fade-in">
            <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-4">Mục tiêu học tập</h2>
            <ul className="list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300 text-lg">
              {(selectedLesson.aims.vi || selectedLesson.aims.en).map((aim, index) => <li key={index}>{aim}</li>)}
            </ul>
          </div>
        );
      case 'vocabulary':
        if (!selectedLesson.vocabulary || selectedLesson.vocabulary.length === 0) {
            return <p className="text-center text-slate-500">No vocabulary for this lesson.</p>
        }
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
            {selectedLesson.vocabulary.map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm flex items-center gap-4 transition-transform hover:scale-105">
                {item.imageUrl && <img src={item.imageUrl} alt={item.term} className="w-20 h-20 object-cover rounded-md flex-shrink-0"/>}
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">{item.term}</h3>
                    <p className="text-slate-500 dark:text-slate-400">{item.pronunciation}</p>
                    <p className="text-cyan-600 font-semibold">{item.vietnamese}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'grammar':
        if (!selectedLesson.grammar || selectedLesson.grammar.length === 0) {
            return <p className="text-center text-slate-500">No grammar points for this lesson.</p>
        }
        return (
            <div className="space-y-6 animate-fade-in">
                {selectedLesson.grammar.map((point, index) => (
                    <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-4">{point.title.vi || point.title.en}</h2>
                        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                            {(point.explanation.vi || point.explanation.en).map((exp, i) => <p key={i}>{exp}</p>)}
                        </div>
                    </div>
                ))}
            </div>
        );
      case 'activities':
        if (!selectedLesson.activities || selectedLesson.activities.length === 0) {
            return <p className="text-center text-slate-500">No activities for this lesson.</p>
        }
        return (
            <div className="space-y-6 animate-fade-in">
                {selectedLesson.activities.map((activity, index) => (
                     <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-4">{activity.type}</h2>
                         <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                           {(activity.description.vi || activity.description.en).map((desc, i) => <li key={i}>{desc}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        );
      case 'flashcards':
        return (
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm text-center animate-fade-in">
                <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-4">Thẻ ghi nhớ</h2>
                <p className="text-slate-500">Flashcard feature coming soon!</p>
            </div>
        );
      default:
        return null;
    }
  };

  const tabs: {id: ActiveTab, label: string, icon: string}[] = [
    { id: 'aims', label: 'Mục tiêu', icon: 'fa-solid fa-lightbulb' },
    { id: 'vocabulary', label: 'Từ vựng', icon: 'fa-solid fa-book-bookmark' },
    { id: 'flashcards', label: 'Thẻ ghi nhớ', icon: 'fa-solid fa-clone' },
    { id: 'grammar', label: 'Ngữ pháp', icon: 'fa-solid fa-comment-dots' },
    { id: 'activities', label: 'Hoạt động', icon: 'fa-solid fa-person-running' },
  ];

  return (
    <div className="flex h-full md:rounded-lg md:shadow-inner overflow-hidden">
      <aside className={`w-full md:w-80 md:bg-white md:dark:bg-slate-900 md:border-r md:border-slate-200 md:dark:border-slate-700 overflow-y-auto shrink-0 flex-col ${isMobile && showContent ? 'hidden' : 'flex'}`}>
        <div className="p-4 flex-1 flex flex-col bg-slate-100 dark:bg-slate-900">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md flex-1 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-white shrink-0">{course.title}</h2>
              <nav className="flex-1 space-y-1 overflow-y-auto pr-2 -mr-2">
                  {course.rawLevel.units.map((unit) => (
                    <div key={unit.id}>
                      <button 
                        onClick={() => handleUnitToggle(unit.id)}
                        className={`w-full text-left p-3 rounded-md flex justify-between items-center transition-colors ${expandedUnitId === unit.id ? 'bg-slate-100 dark:bg-slate-700' : 'hover:bg-slate-100 dark:hover:bg-slate-600'}`}
                        aria-expanded={expandedUnitId === unit.id}
                      >
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{unit.title.vi || unit.title.en}</span>
                        <i className={`fa-solid ${expandedUnitId === unit.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-slate-500`}></i>
                      </button>
                      {expandedUnitId === unit.id && (
                        <div className="pl-4 mt-2 ml-2 relative border-l-2 border-slate-200 dark:border-slate-600">
                          <ul className="space-y-1">
                              {unit.lessons.map(lesson => (
                                <li key={lesson.id}>
                                  <button
                                    onClick={() => handleSelectLesson(lesson)}
                                    className={`w-full text-left p-3 my-1 rounded-md text-sm transition-colors ${
                                      selectedLesson.id === lesson.id 
                                        ? 'bg-cyan-500 text-white font-semibold' 
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                                  >
                                    {lesson.title.vi || lesson.title.en}
                                  </button>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
              </nav>
            </div>
        </div>
      </aside>

      <main className={`flex-1 bg-cyan-50 dark:bg-slate-800/60 p-6 overflow-y-auto flex flex-col relative ${isMobile && !showContent ? 'hidden' : 'flex'}`}>
          {isMobile && (
             <button onClick={() => setShowContent(false)} className="md:hidden absolute top-4 left-4 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-md">
                <i className="fa-solid fa-arrow-left"></i>
            </button>
          )}
          <div className="flex-shrink-0 pt-10 md:pt-0">
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 hidden md:block">
              <button onClick={() => setView('dashboard')} className="hover:underline transition-colors">
                <i className="fa-solid fa-arrow-left mr-2"></i> Bảng điều khiển
              </button>
              <span> | {course.series} &gt; {currentUnit?.title.vi || currentUnit?.title.en}</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-6">{selectedLesson.title.vi || selectedLesson.title.en}</h1>

            <div className="border-b border-slate-300 dark:border-slate-600">
                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                                activeTab === tab.id
                                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:hover:text-slate-200 dark:hover:border-slate-500'
                            }`}
                        >
                            <i className={tab.icon}></i>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </nav>
            </div>
          </div>
          
          <div className="flex-grow py-6">
            {renderTabContent()}
          </div>
          
          <div className="mt-auto flex justify-center gap-4 py-4 flex-shrink-0 bg-cyan-50 dark:bg-slate-800/60 sticky bottom-0">
             <button className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-transform hover:scale-105 flex items-center gap-2">
                <i className="fa-solid fa-bolt"></i>
                Kiểm tra kiến thức
             </button>
             <button className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-transform hover:scale-105 flex items-center gap-2">
                <i className="fa-solid fa-check-circle"></i>
                Đánh dấu đã xong
             </button>
          </div>

          <div className="fixed bottom-10 right-10">
            <button className="w-14 h-14 bg-teal-500 rounded-full text-white shadow-lg flex items-center justify-center text-2xl hover:bg-teal-600 transition-transform hover:scale-110 hover:rotate-12" aria-label="AI Helper">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </button>
          </div>
      </main>
    </div>
  );
};

export default LessonView;
