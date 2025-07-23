// src/components/AuthButton.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adjust path if needed

const AuthButton = () => {
    const { user, isAuthenticated, loading, logout } = useAuth(); // Get user, isAuthenticated, loading, and logout from AuthContext
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref to detect clicks outside the dropdown
    const navigate = useNavigate();

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    // Handle user logout
    const handleLogout = () => {
        logout(); // Call the logout function from AuthContext
        setDropdownOpen(false); // Close dropdown
        navigate('/login'); // Redirect to login page after logout
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the dropdown
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

    // Show loading state if authentication check is in progress
    if (loading) {
        return <div className="auth-loading">Loading...</div>; // Or a spinner
    }

    return (
        <div className="auth-button-container" ref={dropdownRef}>
            {isAuthenticated && user ? ( // If authenticated AND user data is available
                <div className="profile-dropdown">
                    <button className="profile-button" onClick={toggleDropdown} aria-expanded={dropdownOpen}>
                        {user.profile_picture ? ( // Check if profile_picture exists
                            <img src={user.profile_picture} alt={user.username || "Profile"} className="profile-pic" />
                        ) : (
                            // Fallback if no profile picture, display first letter of username or a generic icon
                            <span className="profile-initials">
                                {user.username ? user.username.charAt(0).toUpperCase() : <i className="fa-solid fa-user-circle"></i>}
                            </span>
                        )}
                        {/* Display username next to image/initials */}
                        <span className="profile-name">{user.username || "Profile"}</span>
                        <i className={`fa-solid fa-caret-${dropdownOpen ? 'up' : 'down'} dropdown-icon`}></i>
                    </button>
                    {dropdownOpen && ( // Show dropdown menu if open
                        <div className="dropdown-menu">
                            {/* Link to dashboard */}
                            <Link to="/dashboard" onClick={() => setDropdownOpen(false)}>Dashboard</Link>
                            {/* Link to edit profile page */}
                            <Link to="/profile/edit" onClick={() => setDropdownOpen(false)}>Edit Profile</Link>
                            {/* Logout button */}
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            ) : ( // If not authenticated
                <Link to="/login" className="login-button">
                    Login
                </Link>
            )}

            {/* Local CSS for AuthButton - You can move these to a separate CSS file if preferred */}
            <style jsx>{`
                .auth-button-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100; /* Ensure it's above other elements in the header */
                }

                .auth-loading {
                    color: white;
                    font-size: 0.9em;
                }

                .login-button {
                    background-color: orange;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: background-color 0.3s ease;
                    white-space: nowrap; /* Prevent wrapping */
                }

                .login-button:hover {
                    background-color: #ff8c00;
                }

                .profile-dropdown {
                    position: relative;
                }

                .profile-button {
                    background-color: orange;
                    color: white;
                    padding: 8px 15px;
                    border-radius: 5px;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 1rem;
                    font-weight: bold;
                    transition: background-color 0.3s ease;
                    white-space: nowrap; /* Prevent wrapping */
                }

                .profile-button:hover {
                    background-color: #ff8c00;
                }

                .profile-pic {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 1px solid white; /* Small white border for definition */
                }

                .profile-initials {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background-color: #e07b00; /* A slightly different orange */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.1em;
                    font-weight: bold;
                    color: white;
                    border: 1px solid white;
                }

                .profile-initials .fa-user-circle {
                    font-size: 1.5em; /* Larger icon if no initials */
                }

                .profile-name {
                    max-width: 100px; /* Limit width of username to prevent overflow */
                    overflow: hidden;
                    text-overflow: ellipsis; /* Add ellipsis if text overflows */
                    white-space: nowrap;
                }

                .dropdown-icon {
                    margin-left: 5px;
                    font-size: 0.8em;
                }

                .dropdown-menu {
                    position: absolute;
                    top: 100%; /* Position directly below the button */
                    right: 0; /* Align to the right of the button */
                    background-color: white;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    min-width: 160px;
                    padding: 8px 0;
                    margin-top: 5px; /* Small gap between button and dropdown */
                    display: flex;
                    flex-direction: column;
                }

                .dropdown-menu a,
                .dropdown-menu button {
                    display: block;
                    width: 100%;
                    padding: 10px 15px;
                    text-align: left;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #333;
                    text-decoration: none;
                    transition: background-color 0.2s ease;
                }

                .dropdown-menu a:hover,
                .dropdown-menu button:hover {
                    background-color: #f0f0f0;
                }

                .dropdown-menu button {
                    font-size: 1rem; /* Match link font size */
                }
            `}</style>
        </div>
    );
};

export default AuthButton;