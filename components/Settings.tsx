import React, { useState } from 'react';
import type { User, Classes } from '../types';
import ProfileEditModal from './ProfileEditModal';

interface SettingsProps {
  user: User;
  onUpdateUser: (user: User) => void;
  classes: Classes;
  onUpdateClasses: (classes: Classes) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  language: 'en' | 'vi';
  setLanguage: (language: 'en' | 'vi') => void;
}

const Settings: React.FC<SettingsProps> = ({ user, onUpdateUser, classes, onUpdateClasses, theme, setTheme, language, setLanguage }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('ivs-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleRoleChange = (newRole: 'student' | 'teacher') => {
    if (user.role === newRole) return;

    if (window.confirm(`Are you sure you want to switch to the ${newRole} role? This will change your dashboard and available features.`)) {
        const updatedUser = { ...user, role: newRole };

        if (newRole === 'teacher') {
            updatedUser.gradeLevel = ''; // clear student-specific field
            if (!updatedUser.title) {
                updatedUser.title = 'English Teacher'; // set teacher default
            }
        } else { // newRole is student
            updatedUser.title = ''; // clear teacher-specific fields
            updatedUser.subject = '';
        }
        onUpdateUser(updatedUser);
    }
  };
  
  const handleBackup = () => {
    const dataToBackup = {
        user,
        classes,
        settings: {
            theme,
            language
        }
    };
    const jsonString = JSON.stringify(dataToBackup, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ivs-english-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRestore = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const result = e.target?.result;
            if (typeof result === 'string') {
                const data = JSON.parse(result);
                if (data.user && data.classes && data.settings) {
                    onUpdateUser(data.user);
                    onUpdateClasses(data.classes);
                    handleThemeChange(data.settings.theme || 'light');
                    setLanguage(data.settings.language || 'en');
                    alert('Data restored successfully!');
                } else {
                    alert('Invalid backup file format.');
                }
            }
        } catch (error) {
            console.error("Failed to restore data:", error);
            alert('Failed to read or parse the backup file.');
        }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div className="text-center mb-8">
            <i className="fa-solid fa-cog text-5xl text-blue-500 mb-4"></i>
            <h1 className="text-4xl font-bold">Settings</h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Manage your profile and application preferences.</p>
        </div>

        <div className="space-y-8">
            {/* Profile Section */}
            <section className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                <div className="flex items-center gap-6">
                    <i className={`${user.avatar} text-6xl text-blue-500`}></i>
                    <div className="flex-grow">
                        <p className="text-xl font-bold">{user.name}</p>
                        <p className="text-slate-500 dark:text-slate-400 capitalize">{user.role}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {user.role === 'student' ? `Grade: ${user.gradeLevel || 'N/A'}` : `Subject: ${user.subject || 'N/A'}`}
                        </p>
                    </div>
                    <button onClick={() => setIsEditModalOpen(true)} className="btn btn-secondary">
                        <i className="fa-solid fa-pen-to-square mr-2"></i> Edit Profile
                    </button>
                </div>
            </section>
            
            {/* Role Section */}
            <section className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">Role</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Switching your role will change the app's layout and available features to better suit your needs.</p>
                <div className="flex gap-2">
                    <button onClick={() => handleRoleChange('student')} className={`btn flex-1 ${user.role === 'student' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                        <i className="fa-solid fa-user-graduate mr-2"></i> Student
                    </button>
                    <button onClick={() => handleRoleChange('teacher')} className={`btn flex-1 ${user.role === 'teacher' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                        <i className="fa-solid fa-chalkboard-user mr-2"></i> Teacher
                    </button>
                </div>
            </section>

            {/* Appearance Section */}
            <section className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">Appearance & Language</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Theme</h3>
                        <div className="flex gap-2">
                            <button onClick={() => handleThemeChange('light')} className={`btn flex-1 ${theme === 'light' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                                <i className="fa-solid fa-sun mr-2"></i> Light
                            </button>
                            <button onClick={() => handleThemeChange('dark')} className={`btn flex-1 ${theme === 'dark' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                                <i className="fa-solid fa-moon mr-2"></i> Dark
                            </button>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold mb-2">Language</h3>
                        <div className="flex gap-2">
                             <button onClick={() => setLanguage('en')} className={`btn flex-1 ${language === 'en' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                                English
                            </button>
                             <button onClick={() => setLanguage('vi')} className={`btn flex-1 ${language === 'vi' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                                Tiếng Việt
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Management Section */}
            <section className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">Data Management</h2>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <button onClick={handleBackup} className="btn btn-primary w-full sm:w-auto">
                        <i className="fa-solid fa-download mr-2"></i> Backup Data
                    </button>
                    <label className="btn btn-secondary w-full sm:w-auto cursor-pointer">
                        <i className="fa-solid fa-upload mr-2"></i> Restore Data
                        <input type="file" accept=".json" onChange={handleRestore} className="hidden" />
                    </label>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0 sm:ml-4">
                        Save your profile, classes, and settings to a file, or restore from a backup.
                    </p>
                </div>
            </section>
        </div>

        {isEditModalOpen && (
            <ProfileEditModal 
                user={user} 
                onClose={() => setIsEditModalOpen(false)} 
                onSave={(updatedUser) => {
                    onUpdateUser(updatedUser);
                    setIsEditModalOpen(false);
                }} 
            />
        )}
    </div>
  );
};

export default Settings;