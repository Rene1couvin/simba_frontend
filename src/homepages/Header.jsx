import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../components/AuthButton'; 

const Header = () => {
  // --- REMOVED OLD LOGIN/LOGOUT STATE AND FUNCTIONS ---
  // The following states and functions are now managed globally by AuthContext
  // and handled by the AuthButton component, so they are no longer needed here:
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState('');
  // const [showDropdown, setShowDropdown] = useState(false);
  // const handleLoginClick = () => { /* ... */ };
  // const simulateSuccessfulLogin = (name) => { /* ... */ };
  // const handleLogout = () => { /* ... */ };
  // const toggleDropdown = () => { /* ... */ };
  // const handleEditProfile = () => { /* ... */ };
  // ---------------------------------------------------

  return (
    <>
      {/* Embedded CSS for Header */}
      <style>
        {`
          .header {
            background-color: #222; /* Dark background */
            color: white;
            padding: 15px 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            z-index: 1000; /* Ensure header is on top */
            width: 100%;
            box-sizing: border-box; /* Include padding in width calculation */
            display: flex;
            justify-content: center; /* Center header content */
            align-items: center;
          }

          .header-content {
            display: flex;
            justify-content: space-between; /* Space out logo, nav, auth-button */
            align-items: center;
            width: 90%; /* Max width for content within header */
            max-width: 1200px; /* Limit overall width */
          }

          .logo {
            color: white;
            text-decoration: none;
            font-size: 1.5em;
            font-weight: bold;
            white-space: nowrap; /* Prevent logo text from wrapping */
          }

          .nav-links {
            display: flex;
            gap: 25px; /* Space between navigation links */
          }

          .nav-links a {
            color: white;
            text-decoration: none;
            font-size: 1.05em;
            transition: color 0.3s ease;
          }

          .nav-links a:hover {
            color: orange; /* Highlight on hover */
          }

          /* This section is where the AuthButton will render its own styles */
          .auth-section {
            /* This div is now just a container for AuthButton, its own styles are minimal */
            display: flex;
            align-items: center;
          }

          /* Responsive Adjustments for Header */
          @media (max-width: 768px) {
            .header-content {
              flex-direction: column; /* Stack items vertically on small screens */
              text-align: center;
              padding: 10px 0;
            }

            .nav-links {
              flex-direction: column; /* Stack nav links vertically */
              gap: 10px; /* Reduced gap for stacked links */
              margin: 15px 0; /* Space between logo/nav and nav/auth */
            }

            .logo {
              font-size: 1.3em;
            }

            .nav-links a {
              font-size: 1em;
            }
          }

          @media (max-width: 480px) {
            .header {
              padding: 10px 15px;
            }
            .nav-links {
              gap: 8px;
            }
          }
        `}
      </style>
      {/* End Embedded CSS for Header */}

      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo">Simba Adventure</Link>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/AllAdventuresPage">Adventures</Link>
            <Link to="/about">About Us</Link>
            {/* <Link to="/contact">Contact</Link> */}
            {/* Added Dashboard link directly in nav for easy access */}
            <Link to="/dashboard">Dashboard</Link>
          </nav>

          {/* This is the key change: AuthButton replaces the manual login/account logic */}
          <AuthButton />
        </div>
      </header>
    </>
  );
};

export default Header;