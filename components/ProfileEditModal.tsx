import React, { useState } from 'react';
import type { User } from '../types';

interface ProfileEditModalProps {
  user: User;
  onSave: (user: User) => void;
  onClose: () => void;
}

const avatars = [
  'fa-user-astronaut', 'fa-user-secret', 'fa-user-ninja', 'fa-user-doctor', 
  'fa-user-graduate', 'fa-user-tie', 'fa-user-nurse', 'fa-user-md'
];

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (avatar: string) => {
    setFormData({ ...formData, avatar });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity animate-fade-in p-4">
      <form onSubmit={handleSubmit} className="modal-content p-6 w-full max-w-lg m-4 transform transition-all animate-slide-in-up">
        <div className="flex justify-between items-center border-b pb-3 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Edit Profile</h3>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-2xl">&times;</button>
        </div>
        
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-2">Avatar</label>
            <div className="flex flex-wrap gap-3">
              {avatars.map(avatar => (
                <button
                  type="button"
                  key={avatar}
                  onClick={() => handleAvatarChange(avatar)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${
                    formData.avatar === avatar ? 'bg-blue-500 text-white scale-110 ring-2 ring-blue-300' : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                >
                  <i className={`fa-solid ${avatar}`}></i>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Name</label>
            <input
              id="name" name="name" type="text"
              value={formData.name} onChange={handleChange}
              className="form-input" required
            />
          </div>

          {user.role === 'student' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Age</label>
                <input
                  id="age" name="age" type="number"
                  value={formData.age || ''} onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="gradeLevel" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Grade Level</label>
                <input
                  id="gradeLevel" name="gradeLevel" type="text"
                  value={formData.gradeLevel || ''} onChange={handleChange}
                  className="form-input" placeholder="e.g., Grade 5"
                />
              </div>
            </div>
          ) : ( // Teacher fields
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Age</label>
                  <input
                    id="age" name="age" type="number"
                    value={formData.age || ''} onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Title</label>
                  <input
                    id="title" name="title" type="text"
                    value={formData.title || ''} onChange={handleChange}
                    className="form-input" placeholder="e.g., English Teacher"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-800 dark:text-slate-300 mb-1">Subject(s)</label>
                <input
                  id="subject" name="subject" type="text"
                  value={formData.subject || ''} onChange={handleChange}
                  className="form-input" placeholder="e.g., English, Literature"
                />
              </div>
            </>
          )}
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          <button type="button" onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditModal;