// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios'; // Import axios to fetch user profile

// Create the context
export const AuthContext = createContext(null);

const API_BASE_URL = "http://127.0.0.1:8000/api"; // Ensure this matches your backend API base URL

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user object {username, email, profile_picture, etc.}
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Derived from user !== null
  const [loading, setLoading] = useState(true); // True initially while checking auth status

  // Function to fetch user profile details
  const fetchUserProfile = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      try {
        // IMPORTANT: You need an API endpoint on your backend that returns user details
        // using the access token. Example: /api/profile/ or /api/user/me/
        const response = await axios.get(`${API_BASE_URL}/profile/`, { // Adjust this URL as per your backend
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // Assuming your backend returns a user object like { id, username, email, profile_picture }
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        // If token is invalid or expired, clear it
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
        setIsAuthenticated(false);
      }
    }
    setLoading(false); // Finished loading check
  };

  useEffect(() => {
    fetchUserProfile(); // Run on component mount to check for existing session
  }, []);

  // Login function now receives user data (from Login.jsx)
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    // You might still store isLoggedIn in localStorage if other parts of your app use it
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Logout function clears user data and authentication state
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken'); // Clear tokens
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isLoggedIn'); // Clear any legacy flags
  };

  // Provide the state and functions to children components
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};