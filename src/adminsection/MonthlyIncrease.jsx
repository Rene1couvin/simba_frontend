// src/components/MonthlyIncrease.jsx
import React from 'react';

function MonthlyIncrease() {
  const percentage = 60; // Example value

  // Simple SVG for the circular progress bar (you might use a dedicated library)
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col items-center justify-center text-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly increased amount</h2>

      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="text-red-500"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            transform="rotate(-90 60 60)"
          />
          <text x="60" y="60" textAnchor="middle" dy="0.3em" className="text-3xl font-bold fill-gray-800">
            {percentage}%
          </text>
        </svg>
      </div>

      <p className="text-sm text-gray-500 mt-4">Calculated with respect to per 100 bookings.</p>
    </div>
  );
}

export default MonthlyIncrease;	