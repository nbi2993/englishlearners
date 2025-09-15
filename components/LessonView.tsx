import React, { useState } from 'react';
import type { Course, Unit, Lesson, VocabularyItem, GrammarItem, Activity } from '../types';
import { translateToVietnamese } from '../services/geminiService';

interface LessonViewProps {
  course: Course;
}

const LessonView: React.FC<LessonViewProps> = ({ course }) => {
  const [currentUnitIndex, setCurrentUnitIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [selectedText, setSelectedText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [showTranslationModal, setShowTranslationModal] = useState<boolean>(false);
  const [translationError, setTranslationError] = useState<string | null>(null);

  const currentUnit = course.units[currentUnitIndex];
  const currentLesson = currentUnit?.lessons?.[currentLessonIndex];

  const handleTranslate = async () => {
    const text = window.getSelection()?.toString().trim();
    if (!text) {
      alert("Please select some text to translate.");
      return;
    }

    setSelectedText(text);
    setIsTranslating(true);
    setTranslationError(null);
    setTranslatedText('');
    setShowTranslationModal(true);

    try {
      const translation = await translateToVietnamese(text);
      setTranslatedText(translation);
    } catch (err) {
      setTranslationError("Sorry, we couldn't translate that text. Please try again.");
    } finally {
      setIsTranslating(false);
    }
  };

  const LessonContent: React.FC = () => {
    if (!lesson || !lesson.aims) return null;

    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Lesson: {lesson.title.vi} ({lesson.title.en})</h3>
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentLessonIndex(prev => Math.max(0, prev - 1))}
              disabled={currentLessonIndex === 0}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={() => setCurrentLessonIndex(prev => Math.min(currentUnit.lessons.length - 1, prev + 1))}
              disabled={currentLessonIndex === currentUnit.lessons.length - 1}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="prose dark:prose-invert lg:prose-xl max-w-none bg-white dark:bg-gray-700 p-6 rounded-lg shadow select-text space-y-6">
          {/* Aims section */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Aims:</h4>
            <ul className="list-disc pl-6 space-y-1">
              {lesson.aims.en.map((aim, i) => (
                <li key={i} className="flex justify-between items-start">
                  <span>{aim}</span>
                  <span className="text-gray-500 dark:text-gray-400">{lesson.aims.vi[i]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vocabulary section */}
          {lesson.vocabulary && lesson.vocabulary.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-2">Vocabulary:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.vocabulary.map((word, i) => (
                  <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start justify-between">
                    <div>
                      <span className="font-medium">{word.term}</span>
                      {word.pronunciation && (
                        <span className="text-gray-500 dark:text-gray-400 ml-2">
                          {word.pronunciation}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{word.vietnamese}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grammar section */}
          {lesson.grammar && lesson.grammar.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-2">Grammar:</h4>
              {lesson.grammar.map((item, i) => (
                <div key={i} className="mb-4">
                  <h5 className="font-medium mb-2">
                    {item.title.en} ({item.title.vi})
                  </h5>
                  <ul className="list-disc pl-6 space-y-1">
                    {item.explanation.en.map((exp, j) => (
                      <li key={j} className="flex justify-between items-start">
                        <span>{exp}</span>
                        <span className="text-gray-500 dark:text-gray-400">{item.explanation.vi[j]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Activities section */}
          {lesson.activities && lesson.activities.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-2">Activities:</h4>
              {lesson.activities.map((activity, i) => (
                <div key={i} className="mb-4">
                  <h5 className="font-medium mb-2">{activity.type}</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    {activity.description.en.map((desc, j) => (
                      <li key={j} className="flex justify-between items-start">
                        <span>{desc}</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {activity.description.vi[j]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 mt-4 p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <i className="fa-solid fa-volume-high mr-2"></i>
            AI Read Aloud
          </button>
          <button 
            onClick={handleTranslate}
            disabled={isTranslating}
            className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:bg-teal-300"
          >
            <i className={`fa-solid ${isTranslating ? 'fa-spinner fa-spin' : 'fa-language'} mr-2`}></i>
            Translate
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            <i className="fa-solid fa-highlighter mr-2"></i>
            Highlight
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            <i className="fa-solid fa-bookmark mr-2"></i>
            Bookmark
          </button>
        </div>
      </div>
    );
  };

  const TranslationModal: React.FC = () => {
    if (!showTranslationModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md m-4 transform transition-all">
          <div className="flex justify-between items-center mb-4 border-b dark:border-gray-700 pb-3">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white">
              Vietnamese Translation
            </h4>
            <button 
              onClick={() => setShowTranslationModal(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-500 dark:text-gray-400 text-sm mb-1">
                Original (English)
              </p>
              <p className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-200">
                {selectedText}
              </p>
            </div>
            <div>
              <p className="font-semibold text-teal-600 dark:text-teal-400 text-sm mb-1">
                Translation (Vietnamese)
              </p>
              {isTranslating ? (
                <div className="flex items-center justify-center p-3">
                  <i className="fa-solid fa-spinner fa-spin text-teal-500"></i>
                  <span className="ml-2">Translating...</span>
                </div>
              ) : translationError ? (
                <p className="text-red-500 p-3">{translationError}</p>
              ) : (
                <p className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-teal-800 dark:text-teal-200">
                  {translatedText}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!lesson || !currentUnit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {/* Unit navigation */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            {currentUnit.title.vi} ({currentUnit.title.en})
          </h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              if (currentUnitIndex > 0) {
                setCurrentUnitIndex(prev => prev - 1);
                setCurrentLessonIndex(0);
              }
            }}
            disabled={currentUnitIndex === 0}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
          >
            Previous Unit
          </button>
          <button
            onClick={() => {
              if (currentUnitIndex < course.units.length - 1) {
                setCurrentUnitIndex(prev => prev + 1);
                setCurrentLessonIndex(0);
              }
            }}
            disabled={currentUnitIndex === course.units.length - 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
          >
            Next Unit
          </button>
        </div>
      </div>

      {/* Lesson content */}
      <div className="mt-8">
        <LessonContent />
      </div>

      {/* Translation Modal */}
      <TranslationModal />
    </div>
  );
};

export default LessonView;
  const currentUnit = course.units[currentUnitIndex];
  const lesson = currentUnit?.lessons[currentLessonIndex];

  const handleTranslate = async () => {
    const text = window.getSelection()?.toString().trim();
    if (!text) {
      alert("Please select some text to translate.");
      return;
    }

    setSelectedText(text);
    setIsTranslating(true);
    setTranslationError(null);
    setTranslatedText('');
    setShowTranslationModal(true);

    try {
      const translation = await translateToVietnamese(text);
      setTranslatedText(translation);
    } catch (err) {
      setTranslationError("Sorry, we couldn't translate that text. Please try again.");
    } finally {
      setIsTranslating(false);
    }
  };

  const LessonContent: React.FC = () => {
    if (!lesson || !lesson.aims) return null;

    return (
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Lesson: {lesson.title.vi} ({lesson.title.en})</h3>
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentLessonIndex(prev => Math.max(0, prev - 1))}
              disabled={currentLessonIndex === 0}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={() => setCurrentLessonIndex(prev => Math.min(currentUnit.lessons.length - 1, prev + 1))}
              disabled={currentLessonIndex === currentUnit.lessons.length - 1}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="prose dark:prose-invert lg:prose-xl max-w-none bg-white dark:bg-gray-700 p-6 rounded-lg shadow select-text space-y-6">
          {/* Aims section */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Aims:</h4>
            <ul className="list-disc pl-6 space-y-1">
              {lesson.aims.en.map((aim, i) => (
                <li key={i} className="flex justify-between items-start">
                  <span>{aim}</span>
                  <span className="text-gray-500 dark:text-gray-400">{lesson.aims.vi[i]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vocabulary section */}
          {lesson.vocabulary && lesson.vocabulary.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-2">Vocabulary:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.vocabulary.map((word, i) => (
                  <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start justify-between">
                    <div>
                      <span className="font-medium">{word.term}</span>
                      {word.pronunciation && (
                        <span className="text-gray-500 dark:text-gray-400 ml-2">
                          {word.pronunciation}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{word.vietnamese}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grammar section */}
          {lesson.grammar && lesson.grammar.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-2">Grammar:</h4>
              {lesson.grammar.map((item, i) => (
                <div key={i} className="mb-4">
                  <h5 className="font-medium mb-2">
                    {item.title.en} ({item.title.vi})
                  </h5>
                  <ul className="list-disc pl-6 space-y-1">
                    {item.explanation.en.map((exp, j) => (
                      <li key={j} className="flex justify-between items-start">
                        <span>{exp}</span>
                        <span className="text-gray-500 dark:text-gray-400">{item.explanation.vi[j]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Activities section */}
          {lesson.activities && lesson.activities.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-2">Activities:</h4>
              {lesson.activities.map((activity, i) => (
                <div key={i} className="mb-4">
                  <h5 className="font-medium mb-2">{activity.type}</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    {activity.description.en.map((desc, j) => (
                      <li key={j} className="flex justify-between items-start">
                        <span>{desc}</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {activity.description.vi[j]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 mt-4 p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <i className="fa-solid fa-volume-high mr-2"></i>
            AI Read Aloud
          </button>
          <button 
            onClick={handleTranslate}
            disabled={isTranslating}
            className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:bg-teal-300"
          >
            <i className={`fa-solid ${isTranslating ? 'fa-spinner fa-spin' : 'fa-language'} mr-2`}></i>
            Translate
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            <i className="fa-solid fa-highlighter mr-2"></i>
            Highlight
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            <i className="fa-solid fa-bookmark mr-2"></i>
            Bookmark
          </button>
        </div>
      </div>
    );
  };
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!lesson || !currentUnit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {/* Unit navigation */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            {currentUnit.title.vi} ({currentUnit.title.en})
          </h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              if (currentUnitIndex > 0) {
                setCurrentUnitIndex(prev => prev - 1);
                setCurrentLessonIndex(0);
              }
            }}
            disabled={currentUnitIndex === 0}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
          >
            Previous Unit
          </button>
          <button
            onClick={() => {
              if (currentUnitIndex < course.units.length - 1) {
                setCurrentUnitIndex(prev => prev + 1);
                setCurrentLessonIndex(0);
              }
            }}
            disabled={currentUnitIndex === course.units.length - 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded disabled:opacity-50"
          >
            Next Unit
          </button>
        </div>
      </div>

      {/* Lesson content */}
      <div className="mt-8">
        <LessonContent />
      </div>

      {/* Translation Modal */}
      <TranslationModal />
    </div>
  );
              <div className="p-3 bg-teal-50 dark:bg-teal-900/50 rounded-lg text-teal-800 dark:text-teal-200 min-h-[4rem]">
                {isTranslating ? (
                   <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                       <i className="fa-solid fa-spinner fa-spin"></i>
                       <span>Translating...</span>
                   </div>
                ) : translationError ? (
                  <p className="text-red-500">{translationError}</p>
                ) : (
                  <p>{translatedText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">{course.title}</h2>
      <p className={`text-lg font-semibold ${course.color.replace('bg-', 'text-')} mb-6`}>{course.series}</p>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-inner">
          <MockEbook />
          <MockQuiz />
      </div>
      <TranslationModal />
    </div>
  );
};

export default LessonView;