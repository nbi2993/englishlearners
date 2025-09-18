
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import ProtectedRoute from './src/components/ProtectedRoute';
import App from './App';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import Dashboard from './src/pages/Dashboard';
import ForgotPassword from './src/pages/ForgotPassword';
import RoleSelection from './src/pages/RoleSelection';
// We don't need to import user-specific homes here, Dashboard will handle it.
import { LanguageProvider } from './src/contexts/LanguageContext';
import './index.css';

const container = document.getElementById('root');

// A component to handle redirection for already logged-in users
const GuestRoute: React.FC<{children: React.ReactElement}> = ({ children }) => {
  const { currentUser } = useAuth();
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }
  return children;
}

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <LanguageProvider>
        <Router>
          <AuthProvider>
            <Routes>
              {/* Guest routes: accessible only when not logged in */}
              <Route path="/" element={<GuestRoute><App /></GuestRoute>} />
              <Route path="/signup" element={<GuestRoute><SignUp /></GuestRoute>} />
              <Route path="/signin" element={<GuestRoute><SignIn /></GuestRoute>} />
              <Route path="/forgot-password" element={<GuestRoute><ForgotPassword /></GuestRoute>} />
              
              {/* Protected routes: accessible only when logged in */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/select-role" element={<ProtectedRoute><RoleSelection /></ProtectedRoute>} />

              {/* Redirect any other path to the dashboard or landing page */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AuthProvider>
        </Router>
      </LanguageProvider>
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
