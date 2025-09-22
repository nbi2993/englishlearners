
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import ProtectedRoute from './components/ProtectedRoute';
import Spinner from './components/Spinner';

// Lazy load the page components
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const RoleSelection = lazy(() => import('./pages/RoleSelection'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const StudentHome = lazy(() => import('./pages/student/StudentHome'));

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Suspense fallback={<div className="flex items-center justify-center h-screen"><Spinner /></div>}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Protected Routes */}
              <Route 
                path="/dashboard" 
                element={<ProtectedRoute element={<Dashboard />} />}
              />
              <Route 
                path="/select-role" 
                element={<ProtectedRoute element={<RoleSelection />} />}
              />
               <Route 
                path="/student/home" 
                element={<ProtectedRoute element={<StudentHome />} />}
              />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
