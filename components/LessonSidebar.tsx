
import React, { useState, useEffect } from 'react';
import { CurriculumLevel, Unit, Lesson } from '../types';
import { useTranslation } from '../contexts/i18n';
import { ChevronRightIcon, CheckCircleIcon } from './Icons';

interface LessonSidebarProps {
    level: CurriculumLevel;
    activeLessonId: number;
    completedLessons: Set<number>;
    onLessonClick: (lesson: Lesson, unit: Unit) => void;
}

const LessonSidebar: React.FC<LessonSidebarProps> = ({ level, activeLessonId, completedLessons, onLessonClick }) => {
    const { l } = useTranslation();
    const [openUnitIds, setOpenUnitIds] = useState<Set<number>>(new Set());

    useEffect(() => {
        // Find the unit of the active lesson and open it by default
        for (const unit of level.units) {
            if (unit.lessons.some(l => l.id === activeLessonId)) {
                setOpenUnitIds(new Set([unit.id]));
                break;
            }
        }
    }, [activeLessonId, level.units]);

    const toggleUnit = (unitId: number) => {
        setOpenUnitIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(unitId)) {
                newSet.delete(unitId);
            } else {
                newSet.add(unitId);
            }
            return newSet;
        });
    };

    return (
        <aside className="w-80 flex-shrink-0 bg-slate-100/80 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700 p-4">
            <h2 className="text-xl font-bold text-dark dark:text-slate-100 mb-4 px-2">{l(level.title)}</h2>
            <nav className="space-y-2">
                {level.units.map(unit => (
                    <div key={unit.id}>
                        <button
                            onClick={() => toggleUnit(unit.id)}
                            className="w-full text-left flex justify-between items-center p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            aria-expanded={openUnitIds.has(unit.id)}
                        >
                            <span className="font-semibold text-gray-700 dark:text-slate-200">{l(unit.title)}</span>
                            <ChevronRightIcon
                                className={`h-5 w-5 text-gray-500 dark:text-slate-400 transition-transform ${openUnitIds.has(unit.id) ? 'rotate-90' : ''}`}
                            />
                        </button>
                        {openUnitIds.has(unit.id) && (
                            <ul className="pl-4 mt-1 space-y-1 border-l-2 border-slate-200 dark:border-slate-600">
                                {unit.lessons.map(lesson => (
                                    <li key={lesson.id}>
                                        <button
                                            onClick={() => onLessonClick(lesson, unit)}
                                            className={`w-full text-left p-2 rounded-md transition-colors text-sm flex items-center justify-between ${
                                                activeLessonId === lesson.id
                                                    ? 'bg-primary/20 text-primary font-bold'
                                                    : 'text-gray-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                            }`}
                                        >
                                            <span className="flex-grow pr-2">{l(lesson.title)}</span>
                                            {completedLessons.has(lesson.id) && (
                                                <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default LessonSidebar;
