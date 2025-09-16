import React, { useState } from 'react';
import type { User } from '../types';

interface ProfileEditModalProps {
  user: User;
  setUser: (user: User) => void;
  onClose: () => void;
}

// Added more diverse avatar options including the default one
const avatars = [
  'fa-user-astronaut', 'fa-user-ninja', 'fa-user-secret', 'fa-user-doctor',
  'fa-user-graduate', 'fa-user-tie', 'fa-user-pen', 'fa-music',
  'fa-palette', 'fa-flask-vial', 'fa-laptop-code', 'fa-brain'
];

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ user, setUser, onClose }) => {
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);
  const [gradeLevel, setGradeLevel] = useState(user.gradeLevel || '');
  const [age, setAge] = useState(user.age || '');
  const [gender, setGender] = useState(user.gender || '');

  const getEducationLevel = (gradeStr: string): string => {
      if (!gradeStr) return 'N/A';
      const grade = parseInt(gradeStr.match(/\d+/)?.[0] || '0');
      if (grade >= 10) return 'High School';
      if (grade >= 6) return 'Secondary';
      if (grade >= 1) return 'Primary';
      return 'Preschool';
  };

  const handleSave = () => {
    const educationLevel = getEducationLevel(gradeLevel);
    const newLevel = gradeLevel ? `${educationLevel} - ${gradeLevel}` : educationLevel;

    setUser({ 
        ...user, 
        name, 
        avatar,
        gradeLevel,
        age: age ? Number(age) : undefined,
        gender,
        level: newLevel,
    });
    onClose();
  };
  
  const handleAvatarChange = () => {
      const currentIndex = avatars.indexOf(avatar);
      // If current avatar is not in the list, start from the beginning
      const nextIndex = currentIndex > -1 ? (currentIndex + 1) % avatars.length : 0;
      setAvatar(avatars[nextIndex]);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 w-full max-w-md m-4 transform transition-all animate-slide-in-up">
        <div className="flex justify-between items-center mb-4 border-b dark:border-slate-700 pb-3">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">Edit Profile</h4>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 text-2xl">&times;</button>
        </div>
        
        <div className="space-y-6">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-slate-700 flex items-center justify-center border-4 border-blue-500 mb-3">
                    <i className={`fa-solid ${avatar} text-5xl text-blue-600 dark:text-blue-400`}></i>
                </div>
                <button onClick={handleAvatarChange} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Change Avatar
                </button>
            </div>

            <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div>
                    <label htmlFor="gradeLevel" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Grade Level</label>
                    <input
                        id="gradeLevel"
                        type="text"
                        value={gradeLevel}
                        onChange={(e) => setGradeLevel(e.target.value)}
                        className="form-input"
                        placeholder="e.g., Grade 5"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Age</label>
                        <input
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="form-input"
                            placeholder="e.g., 10"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Gender</label>
                        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="form-select">
                            <option value="">Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
            <button 
                onClick={onClose}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-slate-200 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors"
            >
                Cancel
            </button>
            <button 
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
                Save Changes
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
