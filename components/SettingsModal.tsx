
import React from 'react';
import { useTranslation } from '../contexts/i18n';
import { XIcon, MoonIcon, SunIcon, TrashIcon } from './Icons';

type Theme = 'light' | 'dark';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentTheme: Theme;
    onToggleTheme: () => void;
    onResetProgress: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, currentTheme, onToggleTheme, onResetProgress }) => {
    const { t, setLanguage, language } = useTranslation();

    const handleReset = () => {
        if (window.confirm(t('resetProgressConfirm'))) {
            onResetProgress();
            onClose();
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-800/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="settings-title">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl w-full max-w-md m-4 flex flex-col" onClick={(e) => e.stopPropagation()}>
                <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                    <h2 id="settings-title" className="text-xl font-bold text-dark dark:text-slate-100">{t('settings')}</h2>
                    <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full">
                        <XIcon className="h-6 w-6" />
                    </button>
                </header>
                <main className="p-6 space-y-6">
                    {/* Theme Settings */}
                    <div className="space-y-2">
                        <h3 className="text-md font-semibold text-secondary dark:text-slate-300">{t('theme')}</h3>
                        <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                            <span className="font-medium text-dark dark:text-slate-200">{currentTheme === 'light' ? t('light') : t('dark')}</span>
                            <button onClick={onToggleTheme} className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-slate-300 dark:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-800">
                                <span className="sr-only">Toggle Theme</span>
                                <span className={`${currentTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}/>
                                <div className="absolute inset-0 flex items-center justify-between px-1">
                                    <SunIcon className={`h-4 w-4 text-yellow-500 transition-opacity ${currentTheme === 'dark' ? 'opacity-0' : 'opacity-100'}`} />
                                    <MoonIcon className={`h-4 w-4 text-slate-300 transition-opacity ${currentTheme === 'light' ? 'opacity-0' : 'opacity-100'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                    
                    {/* Language Settings */}
                    <div className="space-y-2">
                         <h3 className="text-md font-semibold text-secondary dark:text-slate-300">{t('language')}</h3>
                         <div className="grid grid-cols-2 gap-2">
                             <button
                                 onClick={() => setLanguage('en')}
                                 className={`p-3 rounded-lg font-semibold transition-colors ${language === 'en' ? 'bg-primary text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-dark dark:text-slate-200'}`}
                            >
                                English
                            </button>
                             <button
                                 onClick={() => setLanguage('vi')}
                                 className={`p-3 rounded-lg font-semibold transition-colors ${language === 'vi' ? 'bg-primary text-white' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-dark dark:text-slate-200'}`}
                             >
                                 Tiếng Việt
                            </button>
                         </div>
                    </div>

                    {/* Data Settings */}
                    <div className="space-y-2">
                        <h3 className="text-md font-semibold text-secondary dark:text-slate-300">{t('data')}</h3>
                        <button onClick={handleReset} className="w-full flex items-center justify-center p-3 rounded-lg font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors">
                            <TrashIcon className="h-5 w-5 mr-2" />
                            {t('resetProgress')}
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SettingsModal;
