
import React from 'react';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, icon, children }) => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700 to-indigo-900 opacity-80"></div>
        <div className="z-10 text-center space-y-6">
          <div className="flex justify-center items-center h-24 w-24 rounded-full bg-white/20 mx-auto mb-6">
            {icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-blue-100 text-lg max-w-md">{subtitle}</p>
        </div>
      </div>

      {/* Right form container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
