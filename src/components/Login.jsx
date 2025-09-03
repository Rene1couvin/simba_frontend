import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext"; // <--- Import useAuth hook

const API_BASE_URL = "http://127.0.0.1:8000/api";

const loginUser = async (usernameOrEmail, password) => {
  try {
    // Change the endpoint to your JWT token obtain pair endpoint
    const response = await axios.post(`${API_BASE_URL}/token/`, {
      // Corrected URL
      username: usernameOrEmail,
      password,
    });

    if (response.status === 200 && response.data.access) {
      console.log("Login successful:", response.data);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      // Assuming your token endpoint returns access, refresh, and potentially user info
      return {
        success: true,
        data: response.data,
        accessToken: response.data.access,
      };
    } else {
      return { success: false, message: "Unexpected login response" };
    }
  } catch (error) {
    console.error(
      "Login API call error:",
      error.response?.data || error.message
    );
    const errorMessage =
      error.response?.data?.detail ||
      error.response?.data?.username?.[0] ||
      error.response?.data?.password?.[0] ||
      error.message;
    return { success: false, message: errorMessage };
  }
};

// Function to fetch user profile after login
const fetchUserProfile = async (accessToken) => {
  try {
    // Adjust this URL to your profile endpoint, commonly '/users/me/' for the authenticated user
    const response = await axios.get(`${API_BASE_URL}/users/me/`, {
      // Adjusted URL for current user profile
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // Assuming your profile endpoint returns data like {id, username, email, profile_picture}
    return { success: true, userData: response.data };
  } catch (error) {
    console.error("Failed to fetch user profile after login:", error);
    // If '/users/me/' isn't supported, you might need to fetch the user by ID
    // if the login response includes it, or adjust your backend.
    return { success: false, message: "Failed to fetch user profile" };
  }
};

const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, {
      // Corrected URL based on urls.py
      username,
      email,
      password,
    });

    if (response.status === 201) {
      console.log("Registration successful:", response.data);
      return { success: true, data: response.data };
    } else {
      return { success: false, message: "Unexpected registration response" };
    }
  } catch (error) {
    console.error(
      "Registration API call error:",
      error.response?.data || error.message
    );
    const errorMessage =
      error.response?.data?.username?.[0] ||
      error.response?.data?.email?.[0] ||
      error.response?.data?.password?.[0] ||
      error.response?.data?.non_field_errors?.[0] ||
      error.message;
    return { success: false, message: errorMessage };
  }
};

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false);
  const [signInIdentifier, setSignInIdentifier] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInErrorMessage, setSignInErrorMessage] = useState("");
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [currentBackgroundImage, setCurrentBackgroundImage] = useState("");
  const backgroundImages = [
    "/loginI/1.jpg",
    "/loginI/2.jpg",
    "/loginI/3.jpg",
    "/loginI/4.jpg",
    "/loginI/5.jpg",
  ];

  const navigate = useNavigate();
  const { login: authLogin } = useAuth(); // <--- Get the login function from AuthContext

  const idleTimeout = 3 * 60 * 1000;
  const promptTimeout = 2 * 60 * 1000 + 45 * 1000;

  const idleTimer = useRef(null);
  const promptTimer = useRef(null);
  const [showIdlePrompt, setShowIdlePrompt] = useState(false);

  const resetIdleTimer = useCallback(() => {
    clearTimeout(idleTimer.current);
    clearTimeout(promptTimer.current);
    setShowIdlePrompt(false);

    promptTimer.current = setTimeout(() => {
      setShowIdlePrompt(true);
    }, promptTimeout);

    idleTimer.current = setTimeout(() => {
      setShowIdlePrompt(false);
      navigate("/");
      setModalMessage(
        "You were inactive for too long and have been redirected to the homepage."
      );
      setShowModal(true);
    }, idleTimeout);
  }, [navigate, idleTimeout, promptTimeout]);

  useEffect(() => {
    const events = ["mousemove", "keydown", "click", "touchstart"];

    const handleUserActivity = () => {
      resetIdleTimer();
    };

    events.forEach((event) =>
      window.addEventListener(event, handleUserActivity)
    );
    resetIdleTimer();

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleUserActivity)
      );
      clearTimeout(idleTimer.current);
      clearTimeout(promptTimer.current);
    };
  }, [resetIdleTimer]);

  useEffect(() => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const imageIndex = dayOfMonth % backgroundImages.length;
    setCurrentBackgroundImage(backgroundImages[imageIndex]);
  }, [backgroundImages]);

  const handleRegisterClick = () => {
    setIsActive(true);
    setSignInErrorMessage("");
    setSignUpErrorMessage("");
    setShowModal(false);
    resetIdleTimer();
  };

  const handleLoginClick = () => {
    setIsActive(false);
    setSignInErrorMessage("");
    setSignUpErrorMessage("");
    setShowModal(false);
    resetIdleTimer();
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setSignInErrorMessage("");
    setIsLoading(true);
    resetIdleTimer();

    const loginResult = await loginUser(signInIdentifier, signInPassword);
    if (loginResult.success) {
      // Step 1: Login (get tokens)
      const accessToken = loginResult.accessToken;

      // Step 2: Fetch user profile using the new access token
      const profileResult = await fetchUserProfile(accessToken);

      if (profileResult.success) {
        // Step 3: Update AuthContext with user data
        authLogin(profileResult.userData); // <--- Call AuthContext's login function
        navigate("/dashboard");
      } else {
        // If profile fetch fails, treat as login failure or handle specifically
        setSignInErrorMessage(
          profileResult.message ||
            "Login successful but failed to fetch user profile."
        );
        // Optionally, you might want to clear tokens if profile fetch consistently fails
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    } else {
      setSignInErrorMessage(
        loginResult.message || "Login failed. Please check your credentials."
      );
    }
    setIsLoading(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignUpErrorMessage("");
    setIsLoading(true);
    resetIdleTimer();

    const result = await registerUser(signUpName, signUpEmail, signUpPassword);
    if (result.success) {
      setModalMessage("Registration successful! You can now sign in.");
      setShowModal(true);
      setIsActive(false);
      setSignUpName("");
      setSignUpEmail("");
      setSignUpPassword("");
    } else {
      setSignUpErrorMessage(
        result.message || "Registration failed. Please try again."
      );
    }
    setIsLoading(false);
  };

  const handleStayLoggedIn = () => {
    setShowIdlePrompt(false);
    resetIdleTimer();
  };

  const handleGoToHomepage = () => {
    setShowIdlePrompt(false);
    navigate("/");
    setModalMessage("You chose to go to the homepage.");
    setShowModal(true);
  };

  return (
    <>
      {/* Embedded CSS */}
      <style>
        {`
          /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'); */

          /* --- Main Container Styles (ONLY for the form component) --- */
          
          .login-signup-container {
            // background-color: #fff;
            border-radius: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
            position: relative;
            overflow: hidden;
            width: 768px; /* Base width */
            max-width: 60%; /* Default max-width for most desktops */
            min-height: 480px;
            transition: all 0.6s ease-in-out;
            display: flex; /* Ensure flex is applied here for desktop layout */
          }

          /* --- Typography and Link Styles for General Container --- */
          .login-signup-container p {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.3px;
            margin: 20px 0;
          }

          .login-signup-container span {
            font-size: 12px;
            color: #333;
          }

          .login-signup-container a {
            color: #333;
            font-size: 13px;
            text-decoration: none;
            margin: 15px 0 10px;
          }

          /* --- Button Styles --- */
          .login-signup-container button {
            background-color: orange;
            color: #fff;
            font-size: 12px;
            padding: 10px 45px;
            border: 1px solid transparent;
            border-radius: 8px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-top: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
          }

          .login-signup-container button:hover {
            background-color: #ff8c00;
          }

          .login-signup-container button:active {
            transform: scale(0.95);
          }

          .login-signup-container button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            opacity: 0.7;
          }

          .login-signup-container button.hidden {
            background-color: transparent;
            border-color: #fff;
          }


          /* --- Form Container Styles --- */
          .login-signup-container form {
            background-color: rgba(255, 255, 255, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            height: 100%;
          }

          /* --- Text Colors SPECIFIC to elements INSIDE the forms --- */
          .login-signup-container form h1 {
            color: #333;
          }

          .login-signup-container form p {
            color: #333;
          }

          .login-signup-container form span {
            color: #333;
          }

          .login-signup-container form a {
            color: #333;
          }

          .login-signup-container input {
            background-color: #eee;
            border: none;
            margin: 8px 0;
            padding: 10px 15px;
            font-size: 13px;
            border-radius: 8px;
            width: 100%;
            outline: none;
            color: #333;
          }

          .login-signup-container input::placeholder {
            color: #888;
          }

          /* --- Error message styling --- */
          .error-message {
            color: red;
            font-size: 6px;
            margin-top: 1px;
            text-align: center;
          }

          .form-container {
            position: absolute;
            top: 0;
            height: 100%;
            transition: all 0.6s ease-in-out;
          }

          .sign-in {
            left: 0;
            width: 50%;
            z-index: 2;
          }

          .login-signup-container.active .sign-in {
            transform: translateX(100%);
          }

          .sign-up {
            left: 0;
            width: 50%;
            opacity: 0;
            z-index: 1;
          }

          .login-signup-container.active .sign-up {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: move 0.6s;
          }

          /* --- Animation for Sign-Up form --- */
          @keyframes move {
            0%, 49.99% {
              opacity: 0;
              z-index: 1;
            }
            50%, 100% {
              opacity: 1;
              z-index: 5;
            }
          }

          /* --- Social Icons --- */
          .social-icons {
            margin: 20px 0;
          }

          .social-icons a {
            border: 1px solid #ccc;
            border-radius: 20%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 3px;
            width: 40px;
            height: 40px;
            color: #333;
            transition: border-color 0.3s ease;
          }

          .social-icons a:hover {
            border-color: orange;
          }

          /* --- Toggle Panel Container --- */
          .toggle-container {
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: all 0.6s ease-in-out;
            border-radius: 150px 0 0 100px;
            z-index: 1000;
          }

          .login-signup-container.active .toggle-container {
            transform: translateX(-100%);
            border-radius: 0 150px 100px 0;
          }

          /* --- Toggle Panel (Background for the sliding part) --- */
          .toggle {
            height: 100%;
            color: #ffffff;
            position: relative;
            left: -100%;
            width: 200%;
            transform: translateX(0);
            transition: all 0.6s ease-in-out;
            display: flex;
            // background: linear-gradient(to right, orange, #ff8c00);
          }

          .login-signup-container.active .toggle {
            transform: translateX(50%);
          }

          /* --- Individual Toggle Panels --- */
          .toggle-panel {
            position: absolute;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 30px;
            text-align: center;
            top: 0;
            transform: translateX(0);
            transition: all 0.6s ease-in-out;
          }

          .toggle-left {
            transform: translateX(-200%);
          }

          .login-signup-container.active .toggle-left {
            transform: translateX(0);
          }

          .toggle-right {
            right: 0;
            transform: translateX(0);
          }

          .login-signup-container.active .toggle-right {
            transform: translateX(200%);
          }

          /* --- Custom Modal Styles (for registration success and idle prompt) --- */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
          }

          .modal-content {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 400px;
            width: 90%;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .modal-content h2 {
            color: #333;
            margin-bottom: 0;
          }

          .modal-content p {
            color: #555;
            margin-bottom: 0;
          }

          .modal-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 10px;
          }

          .modal-content button {
            background-color: orange;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease;
          }

          .modal-content button:hover {
            background-color: #ff8c00;
          }

          .modal-content button.secondary-button {
            background-color: #6c757d;
          }
          .modal-content button.secondary-button:hover {
            background-color: #5a6268;
          }

          /* --- Responsive Adjustments (Mobile First) for FORM ONLY --- */
          @media (max-width: 768px) {
            .login-signup-container {
              flex-direction: column;
              height: auto; /* Allow container height to be driven by its content */
              min-height: auto; /* Remove fixed min-height for flexible content */
              width: 95%; /* Adjust width to leave some margin */
              max-width: 480px; /* Max width for mobile to not stretch too wide */
              border-radius: 15px; /* Keep some border-radius for mobile */
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Keep a subtle shadow */
              margin: 40px auto 20px auto; /* Adjusted vertical margin for mobile */
            }

            .form-container {
              position: relative;
              width: 100%;
              height: auto;
              transform: none !important;
              border-radius: 0; /* No border-radius for forms within the container on mobile */
              padding: 20px; /* Uniform padding */
              order: 2; /* Forms come after the toggle panel */
              background-color: rgba(255, 255, 255, 0.95); /* More opaque for better readability */
              box-shadow: none; /* Remove individual form shadows */
              margin-bottom: 0; /* Remove margin-bottom to make sections flush */
            }

            .sign-in, .sign-up {
              width: 100%;
              opacity: 1;
              z-index: auto;
              transform: none !important;
              position: static; /* Stack naturally */
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .login-signup-container.active .sign-in {
              display: none;
            }

            .login-signup-container:not(.active) .sign-up {
              display: none;
            }

            .toggle-container {
              position: relative;
              width: 100%;
              left: 0;
              transform: none !important;
              border-radius: 0; /* No border-radius for toggle container on mobile */
              height: auto;
              padding: 20px 0;
              order: 1; /* Toggle panel comes first */
              box-shadow: none; /* Remove toggle container shadow */
            }

            .toggle {
              width: 100%;
              left: 0;
              transform: none !important;
              height: auto;
              padding: 20px 0;
              flex-direction: column;
              border-radius: 0; /* No toggle border-radius */
            }

            .toggle-panel {
              position: static;
              width: 100%;
              transform: none !important;
              padding: 20px 30px;
              height: auto;
              color: #fff;
            }

            .toggle-left, .toggle-right {
              display: block;
              width: 100%;
              text-align: center;
            }

            /* Explicitly control which button is visible */
            .toggle-panel button.hidden {
                background-color: transparent;
                border-color: #fff;
                margin-top: 15px;
            }

            .login-signup-container.active .toggle-left button.hidden {
              display: inline-block;
            }
            .login-signup-container:not(.active) .toggle-right button.hidden {
              display: inline-block;
            }
            .login-signup-container.active .toggle-right button.hidden {
              display: none;
            }
            .login-signup-container:not(.active) .toggle-left button.hidden {
              display: none;
            }
          }

          @media (max-width: 480px) {
            .login-signup-container {
              width: 98%; /* Even tighter width for very small phones */
              margin: 20px auto 10px auto; /* Reduced vertical margin for very small phones */
            }
            .login-signup-container form {
              padding: 0 10px; /* Reduced padding further */
            }
            .login-signup-container button {
              padding: 8px 20px; /* Smaller buttons */
              font-size: 11px;
            }
            .social-icons {
              margin: 10px 0; /* Reduced margin */
            }
            .social-icons a {
              width: 30px;
              height: 30px;
              font-size: 0.8rem;
            }
            .modal-content {
              padding: 15px; /* Smaller modal padding */
            }
            .modal-content button {
              padding: 7px 12px;
              font-size: 0.8rem;
            }
          }

          /* --- Desktop First Overrides (Ensures correct desktop layout for FORM ONLY) --- */
          @media (min-width: 769px) {
            .login-signup-container {
                flex-direction: row; /* Default desktop layout */
                max-width: 90%; /* Restore original max-width for desktop */
                min-height: 480px; /* Restore original min-height for desktop */
                border-radius: 30px; /* Restore original border-radius for desktop */
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35); /* Restore original shadow for desktop */
                margin: 50px auto; /* Added padding from the top for desktop */
            }
            .form-container {
                position: absolute; /* Restore absolute positioning for sliding effect */
                height: 100%; /* Forms take full height of container */
                border-radius: 0;
                box-shadow: none;
            }
            .toggle-container {
                position: absolute; /* Restore absolute positioning for toggle */
                height: 100%;
                border-radius: 150px 0 0 100px;
                box-shadow: none;
            }
            .toggle {
                height: 100%; /* Toggle takes full height of container */
                border-radius: 0;
            }
            .toggle-panel {
                position: absolute; /* Restore absolute positioning for panels within toggle */
                height: 100%;
            }
          }


          @media (min-width: 1200px) { /* Adjust this breakpoint as needed for "large screen" */
            .login-signup-container {
              max-width: 960px; /* Allow container to be wider on very large screens */
              min-height: 550px; /* Potentially increase height for larger forms */
            }

            /* Adjust font sizes for better readability on large screens */
            .login-signup-container p {
              font-size: 16px;
              line-height: 24px;
            }
            .login-signup-container span {
              font-size: 14px;
            }
            .login-signup-container a {
              font-size: 14px;
            }
            .login-signup-container button {
              font-size: 14px;
              padding: 12px 50px;
            }
            .login-signup-container input {
              font-size: 14px;
              padding: 12px 18px;
            }
            .login-signup-container form h1 {
              font-size: 2.5em; /* Larger headings */
            }
            .toggle-panel h1 {
                font-size: 2.8em; /* Even larger for toggle panel headings */
            }
          }

          @media (min-width: 1400px) { /* Optional: even larger screens */
            .login-signup-container {
              max-width: 1100px; /* Further widen for ultra-wide monitors */
              min-height: 600px;
            }
          }
        `}
      </style>
      {/* End Embedded CSS */}

      <div
        className={`login-signup-container ${isActive ? "active" : ""}`}
        id="login-signup-container"
        style={{
          backgroundImage: `url(${currentBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="form-container sign-up">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon" aria-label="Sign up with Google">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon" aria-label="Sign up with Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon" aria-label="Sign up with GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon" aria-label="Sign up with LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Username"
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
              required
              aria-label="Username"
            />
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              required
              aria-label="Email"
            />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              required
              aria-label="Password"
            />

            <div class="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="consent"
                name="consent"
                required
              />
              <label class="form-check-label" for="consent">
                I consent to a credit check and agree to the{" "}
                <a href="/terms" class="text-decoration-none">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/terms" class="text-decoration-none">
                  Conditions
                </a>
                .
              </label>
              {signUpErrorMessage && (
                <p className="error-message">{signUpErrorMessage}</p>
              )}
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon" aria-label="Sign in with Google">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon" aria-label="Sign in with Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon" aria-label="Sign in with GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon" aria-label="Sign in with LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your username or email and password</span>
            <input
              type="text"
              placeholder="Username or Email"
              value={signInIdentifier}
              onChange={(e) => setSignInIdentifier(e.target.value)}
              required
              aria-label="Username or Email"
            />
            <input
              type="password"
              placeholder="Password"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              required
              aria-label="Password"
            />
            <a href="#">Forget Your Password?</a>
            {signInErrorMessage && (
              <p className="error-message">{signInErrorMessage}</p>
            )}
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
        <div className="toggle-container">
          <div
            className="toggle"
            // style={{ background: 'linear-gradient(to right, orange, #ff8c00)' }}
          >
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>

              <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Notification</h2>
              <p>{modalMessage}</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}

        {showIdlePrompt && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Are you still there?</h2>
              <p>
                You've been inactive for a while. You will be redirected to the
                homepage soon if no action is taken.
              </p>
              <div className="modal-buttons">
                <button onClick={handleStayLoggedIn}>Stay Logged In</button>
                <button
                  className="secondary-button"
                  onClick={handleGoToHomepage}
                >
                  Go to Homepage
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginSignup;
