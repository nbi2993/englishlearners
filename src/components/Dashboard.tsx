
import React from 'react';

interface DashboardProps {
  title: string;
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
