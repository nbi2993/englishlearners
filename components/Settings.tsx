import React, { useState, useRef } from 'react';
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
    const fileInputRef = useRef<HTMLInputElement>(null);
    
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

    const handleBackup = () => {
        try {
            const backupData = {
                user: JSON.parse(localStorage.getItem('ivs-english-user') || '{}'),
                classes: JSON.parse(localStorage.getItem('ivs-english-classes') || '{}'),
                language: localStorage.getItem('ivs-english-language') || 'vi',
                theme: localStorage.getItem('ivs-english-theme') || 'dark',
            };
            const jsonString = JSON.stringify(backupData, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `IVS_English_Backup_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Backup failed:", error);
            alert("An error occurred during backup.");
        }
    };

    const handleRestoreClick = () => {
        fileInputRef.current?.click();
    };

    const handleRestore = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!confirm(language === 'vi' ? 'Bạn có chắc chắn muốn khôi phục dữ liệu không? Mọi dữ liệu hiện tại sẽ bị ghi đè.' : 'Are you sure you want to restore data? All current data will be overwritten.')) {
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result;
                if (typeof text !== 'string') throw new Error("File could not be read.");
                
                const restoredData = JSON.parse(text);
                
                // Validate data structure
                if (restoredData.user && restoredData.classes && restoredData.language && restoredData.theme) {
                    localStorage.setItem('ivs-english-user', JSON.stringify(restoredData.user));
                    localStorage.setItem('ivs-english-classes', JSON.stringify(restoredData.classes));
                    localStorage.setItem('ivs-english-language', restoredData.language);
                    localStorage.setItem('ivs-english-theme', restoredData.theme);
                    alert(language === 'vi' ? 'Khôi phục thành công! Ứng dụng sẽ được tải lại.' : 'Restore successful! The app will now reload.');
                    window.location.reload();
                } else {
                    throw new Error("Invalid backup file format.");
                }

            } catch (error) {
                console.error("Restore failed:", error);
                alert(error instanceof Error ? error.message : "An error occurred during restore.");
            }
        };
        reader.readAsText(file);
    };

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

                <SettingCard
                    title={language === 'vi' ? 'Quản lý Dữ liệu' : 'Data Management'}
                    description={language === 'vi' ? 'Sao lưu dữ liệu của bạn vào một tệp hoặc khôi phục từ một bản sao lưu.' : 'Backup your application data to a file, or restore from a backup.'}
                >
                    <div className="flex gap-3">
                        <button onClick={handleBackup} className="btn btn-secondary">
                            <i className="fa-solid fa-download mr-2"></i> {language === 'vi' ? 'Sao lưu' : 'Backup'}
                        </button>
                        <button onClick={handleRestoreClick} className="btn btn-secondary">
                            <i className="fa-solid fa-upload mr-2"></i> {language === 'vi' ? 'Khôi phục' : 'Restore'}
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleRestore}
                            className="hidden"
                            accept=".json"
                        />
                    </div>
                </SettingCard>
            </div>
            
            {isProfileModalOpen && (
                <ProfileEditModal user={user} setUser={setUser} onClose={() => setProfileModalOpen(false)} />
            )}
        </div>
    );
};

export default Settings;