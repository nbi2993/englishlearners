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

  const TranslationModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${showTranslationModal ? '' : 'hidden'}`}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Translation</h3>
          <button onClick={() => setShowTranslationModal(false)} className="text-gray-500">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="mb-4">
          <p className="font-medium mb-2">Original Text:</p>
          <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded">{selectedText}</p>
        </div>
        <div>
          <p className="font-medium mb-2">Vietnamese Translation:</p>
          {isTranslating ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
              <span>Translating...</span>
            </div>
          ) : translationError ? (
            <p className="text-red-500">{translationError}</p>
          ) : (
            <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded">{translatedText}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-6">
        {/* Left sidebar - Units list */}
        <div className="w-1/4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => window.history.back()} className="text-gray-600 hover:text-gray-800">
              ← Bảng điều khiển
            </button>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{course.title.vi}</span>
          </div>
          
          <div className="mb-4">
            <select 
              value={currentUnitIndex}
              onChange={(e) => {
                setCurrentUnitIndex(Number(e.target.value));
                setCurrentLessonIndex(0);
              }}
              className="w-full p-2 border rounded bg-white dark:bg-gray-700"
            >
              {course.units.map((unit, index) => (
                <option key={unit.id} value={index}>{unit.title.vi}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            {course.units[currentUnitIndex]?.lessons.map((lesson, lessonIndex) => (
              <button
                key={lessonIndex}
                onClick={() => setCurrentLessonIndex(lessonIndex)}
                className={`w-full text-left px-4 py-3 rounded ${
                  currentLessonIndex === lessonIndex
                    ? 'bg-[#E1F9F6] text-[#00A99D]'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="font-medium">{lesson.title.vi}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">
              {currentLesson?.title.vi}
            </h1>
            
            <div className="flex space-x-4 border-b">
              <button className="px-4 py-2 text-[#00A99D] border-b-2 border-[#00A99D]">
                Mục tiêu
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                Từ vựng
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                Thẻ ghi nhớ
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                Ngữ pháp
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
                Hoạt động
              </button>
            </div>
          </div>

          {currentLesson ? (
            <div className="prose dark:prose-invert max-w-none">
              {/* Lesson content */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Mục tiêu học tập</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {currentLesson.aims?.vi.map((aim, index) => (
                    <li key={index}>{aim}</li>
                  ))}
                </ul>
              </div>

              {/* Aims section */}
              {currentLesson.aims && (
                <div>
                  <h4 className="text-xl font-semibold mb-4">Aims:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {currentLesson.aims.en.map((aim: string, i: number) => (
                      <li key={i} className="flex justify-between items-start gap-4">
                        <span>{aim}</span>
                        <span className="text-gray-500 dark:text-gray-400">{currentLesson.aims?.vi[i]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Vocabulary section */}
              {currentLesson.vocabulary && currentLesson.vocabulary.length > 0 && (
                <div>
                  <h4 className="text-xl font-semibold mb-4">Vocabulary:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentLesson.vocabulary.map((word: VocabularyItem, i: number) => (
                      <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start justify-between">
                        <div>
                          <span className="font-medium">{word.term}</span>
                          {word.pronunciation && (
                            <span className="text-gray-500 dark:text-gray-400 ml-2">
                              /{word.pronunciation}/
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
              {currentLesson.grammar && currentLesson.grammar.length > 0 && (
                <div>
                  <h4 className="text-xl font-semibold mb-4">Grammar:</h4>
                  {currentLesson.grammar.map((item: GrammarItem, i: number) => (
                    <div key={i} className="mb-6 last:mb-0">
                      <h5 className="font-medium mb-2">{item.title.vi}</h5>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        {item.explanation.en.map((exp: string, j: number) => (
                          <div key={j} className="mb-2">
                            <p>{exp}</p>
                            <p className="text-gray-500 dark:text-gray-400">{item.explanation.vi[j]}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Content section */}
              {currentLesson.content && (
                <div className="relative">
                  <div 
                    className="prose dark:prose-invert max-w-none select-text"
                    onMouseUp={handleTranslate}
                  >
                    {currentLesson.content}
                  </div>
                </div>
              )}

              {/* Activities section */}
              {currentLesson.activities && currentLesson.activities.length > 0 && (
                <div>
                  <h4 className="text-xl font-semibold mb-4">Activities:</h4>
                  <div className="space-y-4">
                    {currentLesson.activities.map((activity: Activity, i: number) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">{activity.type}</h5>
                        {activity.description.en.map((desc: string, j: number) => (
                          <div key={j} className="mb-2">
                            <p>{desc}</p>
                            <p className="text-gray-500 dark:text-gray-400">{activity.description.vi[j]}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                Select a lesson from the sidebar to begin
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Translation Modal */}
      <TranslationModal />
    </div>
  );
};

export default LessonView;