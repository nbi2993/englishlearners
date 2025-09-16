import React, { useState } from 'react';
import { translateToVietnamese } from '../services/geminiService';
import type { Lesson, Course, VocabularyItem } from '../types';

interface LessonViewProps {
  lesson: Lesson;
  course: Course;
  onBack: () => void;
  language: 'en' | 'vi';
}

const TabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 whitespace-nowrap ${
            isActive
                ? 'bg-white dark:bg-slate-900 shadow-md text-blue-600 dark:text-blue-400'
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'
        }`}
    >
        {label}
    </button>
);

const VocabularyCard: React.FC<{ item: VocabularyItem }> = ({ item }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="perspective-1000">
            <div 
                className={`relative w-full h-48 rounded-lg shadow-md cursor-pointer transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* Front */}
                <div className="absolute w-full h-full card-glass backface-hidden flex flex-col items-center justify-center p-4 text-center">
                    {item.imageUrl && <img src={item.imageUrl} alt={item.term} className="w-20 h-20 object-contain mb-2" />}
                    <p className="text-lg font-bold">{item.term}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.pronunciation}</p>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full card-glass bg-blue-100/50 dark:bg-blue-900/50 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-4">
                    <p className="text-lg font-bold text-blue-800 dark:text-blue-300">{item.vietnamese}</p>
                </div>
            </div>
        </div>
    );
};

const LessonView: React.FC<LessonViewProps> = ({ lesson, course, onBack, language }) => {
  const [activeTab, setActiveTab] = useState('aims');
  const { aims, vocabulary, grammar, activities } = lesson.rawLesson;

  const renderContent = () => {
    switch (activeTab) {
      case 'aims':
        return (
          <div className="card-glass p-6">
            <h3 className="text-xl font-bold mb-4">Lesson Aims</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              {(aims[language] || aims.en).map((aim, index) => <li key={index}>{aim}</li>)}
            </ul>
          </div>
        );
      case 'vocabulary':
        return (
          <div>
              <h3 className="text-xl font-bold mb-4">Vocabulary</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {vocabulary.map((item, index) => <VocabularyCard key={index} item={item} />)}
              </div>
          </div>
        );
      case 'grammar':
        return (
          <div className="card-glass p-6 space-y-6">
            <h3 className="text-xl font-bold">Grammar Focus</h3>
            {grammar.map((point, index) => (
              <div key={index}>
                <h4 className="font-semibold text-lg text-blue-700 dark:text-blue-400">{(point.title[language] || point.title.en)}</h4>
                <div className="mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                    {(point.explanation[language] || point.explanation.en).map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        );
      case 'activities':
        return (
          <div className="card-glass p-6 space-y-6">
            <h3 className="text-xl font-bold">Activities</h3>
             {activities.map((activity, index) => (
              <div key={index}>
                <h4 className="font-semibold text-lg">{activity.type}</h4>
                <div className="mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                     {(activity.description[language] || activity.description.en).map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8 relative min-h-full pb-28">
      <button onClick={onBack} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-6 hover:underline">
        <i className="fa-solid fa-arrow-left"></i>
        Back to {course.title}
      </button>

      <div className="mb-6">
        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{course.title}</p>
        <h1 className="text-3xl font-bold mt-1">{lesson.title}</h1>
      </div>

      <div className="card-glass p-2 mb-6 sticky top-2 z-20">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
            <TabButton label="Aims" isActive={activeTab === 'aims'} onClick={() => setActiveTab('aims')} />
            <TabButton label="Vocabulary" isActive={activeTab === 'vocabulary'} onClick={() => setActiveTab('vocabulary')} />
            <TabButton label="Grammar" isActive={activeTab === 'grammar'} onClick={() => setActiveTab('grammar')} />
            <TabButton label="Activities" isActive={activeTab === 'activities'} onClick={() => setActiveTab('activities')} />
        </div>
      </div>

      <div className="animate-fade-in-slow">
        {renderContent()}
      </div>

       <div className="fixed bottom-4 right-4 z-30">
        <button className="btn btn-primary !rounded-full w-14 h-14 shadow-lg flex-center">
            <i className="fa-solid fa-wand-magic-sparkles text-2xl"></i>
        </button>
      </div>

      <div className="fixed bottom-0 left-0 md:left-64 right-0 p-4 z-20">
          <div className="card-glass max-w-4xl mx-auto p-2 flex items-center justify-between gap-2">
            <button className="btn btn-secondary flex-1">
                <i className="fa-solid fa-question-circle mr-2"></i> Quiz
            </button>
             <button className="btn btn-primary flex-1">
                <i className="fa-solid fa-check-circle mr-2"></i> Mark as Done
            </button>
          </div>
      </div>
    </div>
  );
};

export default LessonView;
