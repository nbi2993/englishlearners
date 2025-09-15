import React, { useState } from 'react';
import type { User } from '../types';

type Language = 'en' | 'vi';
type Theme = 'light' | 'dark' | 'system';

interface SettingsProps {
  user: User;
  setUser: (user: User) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const avatars = [
  'fa-graduation-cap', 'fa-book-open-reader', 'fa-flask-vial', 'fa-laptop-code',
  'fa-palette', 'fa-music', 'fa-chart-line', 'fa-earth-americas',
  'fa-building-columns', 'fa-lightbulb', 'fa-scale-balanced', 'fa-brain'
];

const gradeLevels = [
    "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
    "Grade 6", "Grade 7", "Grade 8", "Grade 9",
    "Grade 10", "Grade 11", "Grade 12"
];

const SettingsCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-md ${className}`}>
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      <div className="mt-4">
        {children}
      </div>
    </div>
  </div>
);

const Settings: React.FC<SettingsProps> = ({ user, setUser, language, setLanguage, theme, setTheme }) => {
  const [name, setName] = useState(user.name);
  // FIX: Ensure 'age' state is always a string to match TextInput's `value` prop type.
  const [age, setAge] = useState(String(user.age ?? ''));
  const [gradeLevel, setGradeLevel] = useState(user.gradeLevel || '');
  const [gender, setGender] = useState(user.gender || '');
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);

  const handleSaveChanges = () => {
    setUser({ ...user, name, age, gradeLevel, gender, avatar: selectedAvatar });
    alert('Changes saved!');
  };
  
  const FormRow: React.FC<{children: React.ReactNode}> = ({children}) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">{children}</div>
  );

  const FormField: React.FC<{label: string, children: React.ReactNode}> = ({label, children}) => (
      <div>
        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{label}</label>
        {children}
      </div>
  );

  const TextInput: React.FC<{value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder?: string}> = ({ value, onChange, placeholder }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
    />
  );
  
  const SelectInput: React.FC<{value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, children: React.ReactNode}> = ({ value, onChange, children }) => (
     <select value={value} onChange={onChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition">
        {children}
    </select>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Profile Settings</h2>
      </div>

      <SettingsCard title="Personal Information">
        <div className="space-y-6">
            <FormRow>
                <FormField label="Name">
                    <TextInput value={name} onChange={(e) => setName(e.target.value)} />
                </FormField>
                <FormField label="Age">
                    <TextInput value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g., 18" />
                </FormField>
                 <FormField label="Grade Level">
                    <SelectInput value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
                        <option value="">-- Select Grade Level --</option>
                        {gradeLevels.map(gl => <option key={gl} value={gl}>{gl}</option>)}
                    </SelectInput>
                </FormField>
                <FormField label="Gender">
                    <SelectInput value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">-- Select Gender --</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </SelectInput>
                </FormField>
            </FormRow>

            <FormField label="Avatar">
                 <div className="flex flex-wrap gap-3">
                    {avatars.map(avatarIcon => (
                        <button
                            key={avatarIcon}
                            onClick={() => setSelectedAvatar(avatarIcon)}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200
                                        ${selectedAvatar === avatarIcon 
                                            ? 'bg-blue-600 text-white ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-slate-800' 
                                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                        }`}
                            aria-label={`Select ${avatarIcon.replace('fa-', '')} avatar`}
                        >
                            <i className={`fa-solid ${avatarIcon} text-2xl`}></i>
                        </button>
                    ))}
                </div>
            </FormField>
        </div>
      </SettingsCard>

      <SettingsCard title="Preferences">
          <FormRow>
            <FormField label="Language">
                 <div className="flex rounded-md bg-slate-100 dark:bg-slate-700 p-1">
                        <button 
                            onClick={() => setLanguage('en')}
                            className={`w-full py-1.5 rounded text-sm font-semibold transition-colors ${language === 'en' ? 'bg-white dark:bg-blue-600 text-blue-700 dark:text-white shadow' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            English
                        </button>
                        <button 
                            onClick={() => setLanguage('vi')}
                            className={`w-full py-1.5 rounded text-sm font-semibold transition-colors ${language === 'vi' ? 'bg-white dark:bg-blue-600 text-blue-700 dark:text-white shadow' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            Tiếng Việt
                        </button>
                    </div>
            </FormField>
            <FormField label="Theme">
                 <div className="flex rounded-md bg-slate-100 dark:bg-slate-700 p-1">
                        <button 
                            onClick={() => setTheme('light')}
                            className={`w-full py-1.5 rounded text-sm font-semibold transition-colors ${theme === 'light' ? 'bg-white dark:bg-slate-500 text-slate-700 dark:text-white shadow' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            Light
                        </button>
                         <button 
                            onClick={() => setTheme('dark')}
                            className={`w-full py-1.5 rounded text-sm font-semibold transition-colors ${theme === 'dark' ? 'bg-white dark:bg-slate-500 text-slate-700 dark:text-white shadow' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            Dark
                        </button>
                        <button 
                            onClick={() => setTheme('system')}
                            className={`w-full py-1.5 rounded text-sm font-semibold transition-colors ${theme === 'system' ? 'bg-white dark:bg-slate-500 text-slate-700 dark:text-white shadow' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            System
                        </button>
                    </div>
            </FormField>
          </FormRow>
      </SettingsCard>
      
      <div className="flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="px-5 py-2.5 bg-white dark:bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-300 transition-colors shadow flex items-center gap-2"
          >
            <i className="fa-solid fa-check"></i>
            Save Changes
          </button>
      </div>

      <div className="text-center text-xs text-slate-500 dark:text-slate-400 space-y-1">
        <p>ivsacademy.edu.vn</p>
        <p>D-U-N-S Number: 646434880</p>
        <p>Designed and developed by IVS Celestech, IVS JSC.</p>
        <p>&copy; 2025 IVS JSC. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Settings;