import React, { useState } from 'react';
import type { User } from '../types';
import ProfileEditModal from './ProfileEditModal';

interface SettingsProps {
  user: User;
  setUser: (user: User) => void;
  language: 'en' | 'vi';
  setLanguage: (lang: 'en' | 'vi') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  translations: any;
}

const Settings: React.FC<SettingsProps> = ({ user, setUser, language, setLanguage, theme, setTheme }) => {
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);
    
    const SettingCard: React.FC<{ title: string; description: string; children: React.ReactNode; }> = ({ title, description, children }) => (
        <div className="card-glass p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-slate-700 dark:text-slate-400 mt-1">{description}</p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
                {children}
            </div>
        </div>
    );
    
    const SegmentedControl: React.FC<{children: React.ReactNode}> = ({children}) => (
        <div className="flex items-center bg-slate-100 dark:bg-slate-900/70 rounded-lg p-1 w-full md:w-auto">
            {children}
        </div>
    );
    
    const SegmentedButton: React.FC<{isActive: boolean, onClick: () => void, children: React.ReactNode}> = ({isActive, onClick, children}) => (
        <button 
            onClick={onClick}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${isActive ? 'bg-white dark:bg-slate-700 shadow' : 'text-slate-700 dark:text-slate-300'}`}
        >
            {children}
        </button>
    );

    return (
        <div className="max-w-4xl mx-auto animate-fade-in p-4 sm:p-0 py-6">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <div className="space-y-6">
                <div className="card-glass p-6 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-slate-700 flex-center">
                         <i className={`fa-solid ${user.avatar} text-4xl text-blue-600 dark:text-blue-400`}></i>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-slate-700 dark:text-slate-400">{user.level}</p>
                    </div>
                    <button onClick={() => setProfileModalOpen(true)} className="ml-auto btn btn-secondary">
                        Edit Profile
                    </button>
                </div>

                <SettingCard 
                    title={language === 'vi' ? 'Vai trò' : 'Role'}
                    description={language === 'vi' ? 'Chuyển đổi giữa giao diện học sinh và giáo viên.' : 'Switch between student and teacher views.'}
                >
                    <SegmentedControl>
                        <SegmentedButton isActive={user.role === 'student'} onClick={() => setUser({ ...user, role: 'student' })}>
                           <i className="fa-solid fa-user-graduate mr-2"></i> {language === 'vi' ? 'Học sinh' : 'Student'}
                        </SegmentedButton>
                         <SegmentedButton isActive={user.role === 'teacher'} onClick={() => setUser({ ...user, role: 'teacher' })}>
                           <i className="fa-solid fa-chalkboard-user mr-2"></i> {language === 'vi' ? 'Giáo viên' : 'Teacher'}
                        </SegmentedButton>
                    </SegmentedControl>
                </SettingCard>
                
                <SettingCard 
                    title="Language"
                    description="Choose your preferred language for the application."
                >
                    <SegmentedControl>
                        <SegmentedButton isActive={language === 'en'} onClick={() => setLanguage('en')}>English</SegmentedButton>
                        <SegmentedButton isActive={language === 'vi'} onClick={() => setLanguage('vi')}>Tiếng Việt</SegmentedButton>
                    </SegmentedControl>
                </SettingCard>

                <SettingCard 
                    title="Appearance"
                    description="Customize the look and feel of the app."
                >
                     <SegmentedControl>
                        <SegmentedButton isActive={theme === 'light'} onClick={() => setTheme('light')}>
                           <i className="fa-solid fa-sun"></i> Light
                        </SegmentedButton>
                         <SegmentedButton isActive={theme === 'dark'} onClick={() => setTheme('dark')}>
                           <i className="fa-solid fa-moon"></i> Dark
                        </SegmentedButton>
                    </SegmentedControl>
                </SettingCard>
            </div>
            
            {isProfileModalOpen && (
                <ProfileEditModal user={user} setUser={setUser} onClose={() => setProfileModalOpen(false)} />
            )}
        </div>
    );
};

export default Settings;