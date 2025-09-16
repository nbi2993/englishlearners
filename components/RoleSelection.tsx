import React from 'react';

interface RoleSelectionProps {
  onSelectRole: (role: 'student' | 'teacher') => void;
}

const RoleCard: React.FC<{
    icon: string;
    title: string;
    description: string;
    onClick: () => void;
}> = ({ icon, title, description, onClick }) => (
    <button
        onClick={onClick}
        className="w-full max-w-sm p-8 text-center transition-all duration-300 transform border rounded-2xl card-glass hover:shadow-lg hover:-translate-y-2 hover:border-blue-500/50"
    >
        <i className={`fa-solid ${icon} text-6xl text-blue-500 dark:text-blue-400 mb-6`}></i>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-700 dark:text-slate-400">{description}</p>
    </button>
);

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-sans text-center bg-slate-50 dark:bg-slate-900">
        <div className="aurora-background"></div>
        <div className="relative z-10">
            <i className="fa-solid fa-graduation-cap text-5xl text-blue-600 dark:text-blue-400 mb-4"></i>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Welcome to IVS English</h1>
            <p className="text-lg text-slate-700 dark:text-slate-400 mb-12">Please select your role to get started.</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <RoleCard
                    icon="fa-user-graduate"
                    title="I am a Student"
                    description="Access my courses, practice with AI tools, and track my progress."
                    onClick={() => onSelectRole('student')}
                />
                <RoleCard
                    icon="fa-chalkboard-user"
                    title="I am a Teacher"
                    description="Manage my classes, track student performance, and assign homework."
                    onClick={() => onSelectRole('teacher')}
                />
            </div>
        </div>
    </div>
  );
};

export default RoleSelection;