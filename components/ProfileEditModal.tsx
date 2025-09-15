
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
  // FIX(line 12): Property 'avatarUrl' does not exist on type 'User'. Correct property is 'avatar'.
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSave = () => {
    // FIX(line 15): Property 'avatarUrl' does not exist on type 'User'. Correct property is 'avatar'.
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
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md m-4 transform transition-all animate-slide-in-up">
        <div className="flex justify-between items-center mb-4 border-b dark:border-gray-700 pb-3">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white">Edit Profile</h4>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl">&times;</button>
        </div>
        
        <div className="space-y-6">
            <div className="flex flex-col items-center">
                {/* FIX: The User.avatar property is a font-awesome class, not an image URL. Changed <img> to <i> to display the icon correctly. */}
                <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center border-4 border-blue-500 mb-3">
                    <i className={`fa-solid ${avatar} text-5xl text-blue-600 dark:text-blue-400`}></i>
                </div>
                <button onClick={handleAvatarChange} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Change Avatar
                </button>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
            <button 
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
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
