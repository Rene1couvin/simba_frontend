import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Import the jwtDecode function

// IMPORTANT: Replace with your actual backend API URL.
// This will be the base for all your authentication-related API calls.
const API_BASE_URL = 'http://127.0.0.1:8000/api/'; // Example: if your API endpoints are under /api

// Create an Axios instance for authentication-related requests.
// This allows you to set a base URL once.
const authApi = axios.create({
    baseURL: API_BASE_URL,
});

// Set up an interceptor to include the access token in subsequent requests
// and to handle token refresh if the access token expires.
authApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

authApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        // If the error is 401 Unauthorized and not the token refresh request itself,
        // attempt to refresh the token.
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Mark the request to prevent infinite loops

            const refreshToken = localStorage.getItem('refresh');
            if (refreshToken) {
                try {
                    const response = await axios.post(`${API_BASE_URL}/token/refresh/`, {
                        refresh: refreshToken,
                    });
                    localStorage.setItem('access', response.data.access);
                    // Update the authorization header for the original request and retry it
                    originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
                    return authApi(originalRequest); // Retry the original request with the new token
                } catch (refreshError) {
                    console.error('Token refresh failed:', refreshError);
                    logoutUser(); // Log out if refresh fails
                    window.location.href = '/login'; // Redirect to login page
                    return Promise.reject(refreshError);
                }
            } else {
                logoutUser(); // No refresh token, so log out
                window.location.href = '/login'; // Redirect to login page
            }
        }
        return Promise.reject(error);
    }
);


// Login user and save tokens to localStorage
// Now accepts 'identifier' which can be either username or email
export const loginUser = async (identifier, password) => { // Changed 'email' to 'identifier'
    try {
        // IMPORTANT: The key used here ('username' or 'email' or 'identifier')
        // must match what your backend API expects for a login attempt that supports both.
        // Django REST Framework's Simple JWT (TokenObtainPairView) by default often expects
        // the primary identifier as 'username'. If your backend is configured to accept
        // email for the 'username' field, this will work.
        // If your backend expects 'email' specifically when an email is provided,
        // or a different field, you'll need more complex logic here (e.g., regex to detect email).
        const response = await authApi.post('token/', { username: identifier, password }); // Sending identifier as 'username'

        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        return true;
    } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message);
        return false;
    }
};

// Register user
export const registerUser = async (name, email, password) => {
    try {
        // Assuming your backend's registration endpoint is '/register/'
        const response = await authApi.post('register/', {
            name,
            email,
            password,
        });
        // Assuming your backend indicates success upon registration (e.g., 200 or 201 status)
        if (response.status === 200 || response.status === 201) {
            return true;
        }
        return false;
    } catch (error) {
        console.error('Registration failed:', error.response ? error.response.data : error.message);
        return false;
    }
};

// Get the decoded JWT access token
export const getDecodedToken = () => {
    const token = localStorage.getItem('access');
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }
    return null;
};

// Log out the user (remove tokens)
export const logoutUser = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    // Consider also clearing any API-specific headers if you set them globally
    // for an instance that's not `authApi`.
};