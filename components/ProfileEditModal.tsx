import React, { useState } from 'react';
import type { User } from '../types';

interface ProfileEditModalProps {
  user: User;
  setUser: (user: User) => void;
  onClose: () => void;
}

// Copied from Settings.tsx for consistency
const avatars = [
  'fa-graduation-cap', 'fa-book-open-reader', 'fa-flask-vial', 'fa-laptop-code',
  'fa-palette', 'fa-music', 'fa-chart-line', 'fa-earth-americas',
  'fa-building-columns', 'fa-lightbulb', 'fa-scale-balanced', 'fa-brain'
];

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ user, setUser, onClose }) => {
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSave = () => {
    setUser({ ...user, name, avatar: avatar });
    onClose();
  };
  
  // Simulate avatar change by cycling through available icons
  const handleAvatarChange = () => {
      const currentIndex = avatars.indexOf(avatar);
      const nextIndex = (currentIndex + 1) % avatars.length;
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
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
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