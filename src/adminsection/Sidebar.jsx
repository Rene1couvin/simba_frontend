// src/components/Sidebar.jsx
import React from 'react';
// Assuming you have icons or are using a library like react-icons
// import { MdDashboard, MdBook, MdDescription, MdCardGiftcard, MdHelpOutline, MdInfo } from 'react-icons/md';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8">
          {/* Replace with your actual logo */}
          <span className="text-purple-600 text-2xl font-bold">Trouvaille!</span>
          {/* <img src="/path/to/your/logo.svg" alt="Trouvaille Logo" className="h-8 w-auto" /> */}
        </div>

        {/* Navigation */}
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-purple-600 rounded-lg bg-purple-50 font-semibold">
                {/* <MdDashboard className="mr-3 text-xl" /> */}
                <span className="mr-3 text-xl">🏠</span> {/* Placeholder icon */}
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {/* <MdBook className="mr-3 text-xl" /> */}
                <span className="mr-3 text-xl">📚</span> {/* Placeholder icon */}
                Bookings <span className="ml-auto text-gray-400">›</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {/* <MdDescription className="mr-3 text-xl" /> */}
                <span className="mr-3 text-xl">📄</span> {/* Placeholder icon */}
                Visa
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {/* <MdCardGiftcard className="mr-3 text-xl" /> */}
                <span className="mr-3 text-xl">🎁</span> {/* Placeholder icon */}
                Offers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                <span className="mr-3 text-xl">🏢</span> {/* Placeholder icon */}
                B2B
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {/* <MdHelpOutline className="mr-3 text-xl" /> */}
                <span className="mr-3 text-xl">❓</span> {/* Placeholder icon */}
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {/* <MdInfo className="mr-3 text-xl" /> */}
                <span className="mr-3 text-xl">📖</span> {/* Placeholder icon */}
                Generic Pages <span className="ml-auto text-gray-400">›</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer / Admin Contact */}
      <div className="text-center mt-8">
        <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-2">
          {/* Replace with your Super Admin avatar */}
          <span className="text-3xl">👨‍💻</span>
        </div>
        <p className="text-gray-700 font-semibold">Contact Super Admin</p>
        <p className="text-gray-500 text-sm mt-4">Admin Dashboard</p>
        <p className="text-gray-500 text-xs">2023 All Rights Reserved</p>
        <div className="flex justify-center text-xs text-gray-500 mt-2">
          <a href="#" className="mr-2 hover:underline">Policy</a> | <a href="#" className="ml-2 hover:underline">T & C</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;