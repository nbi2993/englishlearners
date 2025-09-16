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
  
  const t = {
    en: {
        title: "Settings",
        subtitle: "Manage your profile and application preferences.",
        profileTitle: "Profile",
        role: "Role",
        student: "Student",
        teacher: "Teacher",
        grade: "Grade",
        subject: "Subject",
        editProfile: "Edit Profile",
        roleTitle: "Role",
        roleDesc: "Switching your role will change the app's layout and available features to better suit your needs.",
        roleConfirm: (role: string) => `Are you sure you want to switch to the ${role} role? This will change your dashboard and available features.`,
        appearanceTitle: "Appearance & Language",
        themeTitle: "Theme",
        light: "Light",
        dark: "Dark",
        languageTitle: "Language",
        dataTitle: "Data Management",
        backup: "Backup Data",
        restore: "Restore Data",
        dataDesc: "Save your profile, classes, and settings to a file, or restore from a backup.",
        restoreSuccess: "Data restored successfully!",
        restoreInvalid: "Invalid backup file format.",
        restoreFail: "Failed to read or parse the backup file.",
    },
    vi: {
        title: "Cài đặt",
        subtitle: "Quản lý hồ sơ và tùy chọn ứng dụng của bạn.",
        profileTitle: "Hồ sơ",
        role: "Vai trò",
        student: "Học sinh",
        teacher: "Giáo viên",
        grade: "Cấp lớp",
        subject: "Môn học",
        editProfile: "Chỉnh sửa Hồ sơ",
        roleTitle: "Vai trò",
        roleDesc: "Chuyển đổi vai trò sẽ thay đổi giao diện và các tính năng có sẵn của ứng dụng để phù hợp hơn với nhu cầu của bạn.",
        roleConfirm: (role: string) => `Bạn có chắc chắn muốn chuyển sang vai trò ${role} không? Điều này sẽ thay đổi bảng điều khiển và các tính năng có sẵn của bạn.`,
        appearanceTitle: "Giao diện & Ngôn ngữ",
        themeTitle: "Giao diện",
        light: "Sáng",
        dark: "Tối",
        languageTitle: "Ngôn ngữ",
        dataTitle: "Quản lý Dữ liệu",
        backup: "Sao lưu Dữ liệu",
        restore: "Phục hồi Dữ liệu",
        dataDesc: "Lưu hồ sơ, lớp học và cài đặt của bạn vào một tệp, hoặc khôi phục từ một bản sao lưu.",
        restoreSuccess: "Dữ liệu đã được khôi phục thành công!",
        restoreInvalid: "Định dạng tệp sao lưu không hợp lệ.",
        restoreFail: "Không thể đọc hoặc phân tích tệp sao lưu.",
    }
  }[language];

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
    const translatedRole = newRole === 'student' ? t.student : t.teacher;

    if (window.confirm(t.roleConfirm(translatedRole))) {
      const baseUser: Partial<User> = {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        points: user.points,
        badges: user.badges,
        streak: user.streak,
        pinnedCourses: user.pinnedCourses,
        age: user.age,
        gender: user.gender,
        level: user.level,
      };

      let updatedUser: User;

      if (newRole === 'teacher') {
        updatedUser = {
          ...baseUser,
          role: 'teacher',
          title: user.title || 'English Teacher',
          subject: user.subject || 'English, Literature',
        } as User;
      } else { // newRole === 'student'
        updatedUser = {
          ...baseUser,
          role: 'student',
          gradeLevel: user.gradeLevel || '',
        } as User;
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
                    alert(t.restoreSuccess);
                } else {
                    alert(t.restoreInvalid);
                }
            }
        } catch (error) {
            console.error("Failed to restore data:", error);
            alert(t.restoreFail);
        }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div className="text-center mb-8">
            <i className="fa-solid fa-cog text-5xl text-blue-500 mb-4"></i>
            <h1 className="text-4xl font-bold">{t.title}</h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <div className="space-y-8">
            <section className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">{t.profileTitle}</h2>
                <div className="flex items-center gap-6">
                    <i className={`${user.avatar} text-6xl text-blue-500`}></i>
                    <div className="flex-grow">
                        <p className="text-xl font-bold">{user.name}</p>
                        <p className="text-slate-500 dark:text-slate-400 capitalize">{user.role === 'student' ? t.student : t.teacher}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {user.role === 'student' ? `${t.grade}: ${user.gradeLevel || 'N/A'}` : `${t.subject}: ${user.subject || 'N/A'}`}
                        </p>
                    </div>
                    <button onClick={() => setIsEditModalOpen(true)} className="btn btn-secondary">
                        <i className="fa-solid fa-pen-to-square mr-2"></i> {t.editProfile}
                    </button>
                </div>
            </section>
            
            <section className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">{t.roleTitle}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">{t.roleDesc}</p>
                <div className="flex gap-2">
                    <button onClick={() => handleRoleChange('student')} className={`btn flex-1 ${user.role === 'student' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                        <i className="fa-solid fa-user-graduate mr-2"></i> {t.student}
                    </button>
                    <button onClick={() => handleRoleChange('teacher')} className={`btn flex-1 ${user.role === 'teacher' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                        <i className="fa-solid fa-chalkboard-user mr-2"></i> {t.teacher}
                    </button>
                </div>
            </section>

            <section className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">{t.appearanceTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">{t.themeTitle}</h3>
                        <div className="flex gap-2">
                            <button onClick={() => handleThemeChange('light')} className={`btn flex-1 ${theme === 'light' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                                <i className="fa-solid fa-sun mr-2"></i> {t.light}
                            </button>
                            <button onClick={() => handleThemeChange('dark')} className={`btn flex-1 ${theme === 'dark' ? 'btn-primary' : 'btn-secondary-outline'}`}>
                                <i className="fa-solid fa-moon mr-2"></i> {t.dark}
                            </button>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold mb-2">{t.languageTitle}</h3>
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

            <section className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">{t.dataTitle}</h2>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <button onClick={handleBackup} className="btn btn-primary w-full sm:w-auto">
                        <i className="fa-solid fa-download mr-2"></i> {t.backup}
                    </button>
                    <label className="btn btn-secondary w-full sm:w-auto cursor-pointer">
                        <i className="fa-solid fa-upload mr-2"></i> {t.restore}
                        <input type="file" accept=".json" onChange={handleRestore} className="hidden" />
                    </label>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0 sm:ml-4">
                        {t.dataDesc}
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
                language={language}
            />
        )}
    </div>
  );
};

export default Settings;