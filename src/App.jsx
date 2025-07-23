// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import Login from './components/Login'; // Your Login/Signup component
import Home from './HomePage';
import Dashboard from './components/Dashboard';
import AllAdventuresPage from './homepages/AllAdventuresPage';
import AdventuresCard from './homepages/AdventureCard';
import ProtectedRoute from './components/ProtectedRoute'; // Your ProtectedRoute component
import Privacy from './homepages/PrivacyPolicy';
import Terms from './homepages/TermsAndConditions';
import Footer from '../src/homepages/Footer';
import Header from '../src/homepages/Header'; // Your existing Header component

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Ensure your global CSS is imported here for body/html styles

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Wrap the entire application with AuthProvider */}
        <div className="app-container"> {/* This div will hold header, main, footer */}
          <Header /> {/* Your existing Header component */}
          
          <main className="app-main-content"> {/* This will be the flexible content area */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/AllAdventuresPage" element={<AllAdventuresPage />} />
              <Route path="/AdventureCard" element={<AdventuresCard />} />

              {/* Protected Routes: Wrap components that require authentication */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              {/* Add more protected routes like profile edit here */}
              <Route
                path="/profile/edit"
                element={
                  <ProtectedRoute>
                    {/* Assuming you will create an EditProfile component */}
                    {/* For now, a placeholder, or you can point it to a specific route in Dashboard if you edit there */}
                    <div>Edit Profile Page (Protected)</div> 
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          
          <Footer /> {/* Your existing Footer component */}
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;