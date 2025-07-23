// src/components/Header.jsx
import React from 'react';
// import { IoSearchOutline, IoNotificationsOutline } from 'react-icons/io5';

function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      {/* Title */}
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Admin, Dashoboard</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {/* <IoSearchOutline /> */}
            🔎
          </span>
        </div>

        {/* Language */}
        <div className="flex items-center space-x-1 text-gray-700">
          <span>EN</span>
          <span className="text-sm">▾</span> {/* Unicode for dropdown arrow */}
        </div>

        {/* Currency */}
        <div className="flex items-center space-x-1 text-gray-700">
          <span>Dollar</span>
          <span className="text-sm">▾</span>
        </div>

        {/* Notifications */}
        <div className="relative text-gray-700">
          {/* <IoNotificationsOutline className="text-2xl" /> */}
          <span className="text-2xl">🔔</span> {/* Placeholder icon */}
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Replace with actual user avatar URL
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-gray-800">Hi, Morris</span>
        </div>
      </div>
    </header>
  );
}

export default Header;