// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',  // Your Django API endpoint
});

// Set the Authorization header if a token is present
api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access')}`;

export default api;
