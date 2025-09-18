
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import Dashboard from './src/pages/Dashboard';
import ForgotPassword from './src/pages/ForgotPassword';
import RoleSelection from './src/pages/RoleSelection';
import StudentHome from './src/pages/student/StudentHome';
import TeacherHome from './src/pages/teacher/TeacherHome';
import { LanguageProvider } from './src/contexts/LanguageContext';
import './index.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Router>
        <LanguageProvider>
          <Routes>
            {/* Core Authentication & Static Pages */}
            <Route path="/" element={<App />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/select-role" element={<RoleSelection />} />
            
            {/* User-Specific Home Pages */}
            <Route path="/student/home" element={<StudentHome />} />
            <Route path="/teacher/home" element={<TeacherHome />} />

            {/* Legacy or General-Purpose Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </LanguageProvider>
      </Router>
    </React.StrictMode>
  );

  // Hide the initial loader after the app has been mounted
  const loader = document.querySelector('.initial-loader');
  if (loader) {
    loader.remove();
  }
} else {
  console.error('Fatal Error: Root element #root not found in the DOM.');
}
