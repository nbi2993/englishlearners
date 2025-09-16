import React, { useState } from 'react';
import type { Lesson, VocabularyItem } from '../types';
import { translateToVietnamese } from '../services/geminiService';

interface LessonViewProps {
  lesson: Lesson;
  language: 'en' | 'vi';
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, language }) => {
  const [activeTab, setActiveTab] = useState('aims');
  const [translation, setTranslation] = useState<Record<string, string>>({});
  const [isTranslating, setIsTranslating] = useState<Record<string, boolean>>({});

  const aims = lesson.rawLesson.aims[language];
  const grammar = lesson.rawLesson.grammar;
  const activities = lesson.rawLesson.activities;

  const handleTranslate = async (term: string) => {
    if (translation[term]) return; // Already translated
    setIsTranslating(prev => ({ ...prev, [term]: true }));
    try {
      const translatedText = await translateToVietnamese(term);
      setTranslation(prev => ({ ...prev, [term]: translatedText }));
    } catch (error) {
      console.error("Translation failed:", error);
      setTranslation(prev => ({ ...prev, [term]: "Translation failed" }));
    } finally {
      setIsTranslating(prev => ({ ...prev, [term]: false }));
    }
  };

  const renderVocabulary = (item: VocabularyItem) => (
    <div key={item.term} className="card-glass p-4 flex flex-col sm:flex-row items-center gap-4">
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.term} className="w-24 h-24 object-cover rounded-lg" />
      )}
      <div className="flex-1 text-center sm:text-left">
        <h4 className="text-xl font-bold">{item.term}</h4>
        <p className="text-slate-500 dark:text-slate-400">{item.pronunciation}</p>
        <p className="text-blue-600 dark:text-blue-400 font-medium">{item.vietnamese}</p>
         {language === 'en' && (
            <div className="mt-2">
                 <button 
                    onClick={() => handleTranslate(item.term)}
                    disabled={isTranslating[item.term]}
                    className="text-xs btn btn-secondary-outline">
                     {isTranslating[item.term] ? 'Translating...' : (translation[item.term] ? translation[item.term] : `Translate with AI`)}
                 </button>
            </div>
         )}
      </div>
    </div>
  );
  
  const TabButton = ({ id, icon, label }: { id: string, icon: string, label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 text-sm sm:text-base font-semibold border-b-4 transition-all duration-300 ${
        activeTab === id
          ? 'border-blue-500 text-blue-500'
          : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200'
      }`}
    >
      <i className={`fa-solid ${icon}`}></i>
      <span>{label}</span>
    </button>
  );

  const TABS = {
    en: [
      { id: 'aims', icon: 'fa-bullseye-arrow', label: 'Lesson Aims' },
      { id: 'vocabulary', icon: 'fa-book-sparkles', label: 'Vocabulary' },
      { id: 'grammar', icon: 'fa-spell-check', label: 'Grammar' },
      { id: 'activities', icon: 'fa-pencil-ruler', label: 'Activities' },
    ],
    vi: [
      { id: 'aims', icon: 'fa-bullseye-arrow', label: 'Mục tiêu' },
      { id: 'vocabulary', icon: 'fa-book-sparkles', label: 'Từ vựng' },
      { id: 'grammar', icon: 'fa-spell-check', label: 'Ngữ pháp' },
      { id: 'activities', icon: 'fa-pencil-ruler', label: 'Hoạt động' },
    ]
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>

      <div className="card-glass p-0 mb-6">
        <div className="flex flex-wrap sm:flex-nowrap border-b border-slate-200 dark:border-slate-700">
          {TABS[language].map(tab => (
            <TabButton key={tab.id} id={tab.id} icon={tab.icon} label={tab.label} />
          ))}
        </div>
        
        <div className="p-6 animate-fade-in min-h-[300px]">
          {activeTab === 'aims' && (
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <ul className="list-disc list-inside space-y-2">
                {aims.map((aim, index) => <li key={index}>{aim}</li>)}
              </ul>
            </div>
          )}

          {activeTab === 'vocabulary' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lesson.rawLesson.vocabulary.map(renderVocabulary)}
            </div>
          )}

          {activeTab === 'grammar' && (
            <div className="space-y-6">
              {grammar.map((point, index) => (
                <div key={index} className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">{point.title[language]}</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                      {point.explanation[language].map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'activities' && (
             <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">{activity.type}</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                      {activity.description[language].map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonView;