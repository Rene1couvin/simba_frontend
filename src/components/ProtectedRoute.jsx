// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // <--- Import useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth(); // Get isAuthenticated and loading states from AuthContext

  if (loading) {
    // Optionally, show a loading spinner or message while authentication state is being determined
    return <div>Loading authentication...</div>;
  }

  // If not authenticated, redirect to the login page
  // The 'replace' prop ensures that the login page replaces the current entry in the history stack,
  // so the user can't just press back to get to the protected page without logging in.
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children (the protected component)
  return children;
};

export default ProtectedRoute;