import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const API_BASE_URL = "http://127.0.0.1:8000/api";

const EditProfile = () => {
    const { user, fetchUserProfile, isAuthenticated } = useAuth();
    const [username, setUsername] = useState(user?.username || '');
    const [email, setEmail] = useState(user?.email || '');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setIsLoading(true);

        const token = localStorage.getItem('accessToken');
        if (!token) {
            setError("No authentication token found. Please log in again.");
            setIsLoading(false);
            return;
        }

        try {
            const payload = {
                username: username,
                email: email,
            };

            const response = await axios.patch(`${API_BASE_URL}/profile/`, payload, { // Use PATCH for partial updates
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                setMessage("Profile updated successfully!");
                await fetchUserProfile(token); // Re-fetch user data to update context
            } else {
                setError("Failed to update profile.");
            }
        } catch (err) {
            console.error("Error updating profile:", err.response?.data || err.message);
            setError(err.response?.data?.detail || err.response?.data?.username?.[0] || err.response?.data?.email?.[0] || "Failed to update profile.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setIsLoading(true);

        if (newPassword !== confirmNewPassword) {
            setError("New passwords do not match.");
            setIsLoading(false);
            return;
        }

        const token = localStorage.getItem('accessToken');
        if (!token) {
            setError("No authentication token found. Please log in again.");
            setIsLoading(false);
            return;
        }

        try {
            // This endpoint might need adjustment based on your Django backend
            const response = await axios.post(`${API_BASE_URL}/change-password/`, { // Or PATCH /users/<id>/
                old_password: oldPassword,
                new_password: newPassword,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                setMessage("Password changed successfully!");
                setOldPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
            } else {
                setError("Failed to change password.");
            }
        } catch (err) {
            console.error("Error changing password:", err.response?.data || err.message);
            setError(err.response?.data?.detail || err.response?.data?.old_password?.[0] || err.response?.data?.new_password?.[0] || "Failed to change password.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isAuthenticated) {
        return <p>Please log in to edit your profile.</p>;
    }

    return (
        <div style={{ textAlign: 'center', padding: '20px', maxWidth: '600px', margin: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2>Edit Profile</h2>

            <form onSubmit={handleProfileUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <h3>Update Basic Info</h3>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '80%' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '80%' }}
                />
                <button type="submit" disabled={isLoading} style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    {isLoading ? "Updating..." : "Update Profile"}
                </button>
            </form>

            <hr style={{ width: '80%', border: '0', borderTop: '1px solid #eee' }} />

            <form onSubmit={handleChangePassword} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <h3>Change Password</h3>
                <input
                    type="password"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '80%' }}
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '80%' }}
                />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '80%' }}
                />
                <button type="submit" disabled={isLoading} style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    {isLoading ? "Changing..." : "Change Password"}
                </button>
            </form>

            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default EditProfile;