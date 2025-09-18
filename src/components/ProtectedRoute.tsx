
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // User is not authenticated, redirect to sign-in page
    return <Navigate to="/signin" />;
  }

  return children; // User is authenticated, render the requested component
};

export default ProtectedRoute;
