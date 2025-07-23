// src/components/NewFlights.jsx
import React, { useState } from 'react';
// import { FaPlane } from 'react-icons/fa';

function NewFlights() {
  const [flightType, setFlightType] = useState('Domestic'); // 'Domestic' or 'International'

  const flightData = {
    Domestic: { count: 583, locations: 'Nationwide in 25 states' },
    International: { count: 120, locations: 'Across 30 countries' },
  };

  const currentFlightData = flightData[flightType];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col items-center text-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Newly introduced Flights</h2>

      <div className="flex bg-gray-100 rounded-full p-1 mb-6 text-sm font-medium">
        <button
          onClick={() => setFlightType('Domestic')}
          className={`px-4 py-2 rounded-full ${flightType === 'Domestic' ? 'bg-white shadow' : 'text-gray-600'}`}
        >
          Domestic
        </button>
        <button
          onClick={() => setFlightType('International')}
          className={`px-4 py-2 rounded-full ${flightType === 'International' ? 'bg-white shadow' : 'text-gray-600'}`}
        >
          International
        </button>
      </div>

      <div className="relative w-24 h-24 flex items-center justify-center mb-4">
        <div className="absolute w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
          {/* <FaPlane className="text-purple-600 text-4xl" /> */}
          <span className="text-purple-600 text-4xl">✈️</span> {/* Placeholder icon */}
        </div>
      </div>

      <p className="text-4xl font-bold text-gray-800">{currentFlightData.count}</p>
      <p className="text-sm text-gray-500 mt-2">{currentFlightData.locations}</p>
    </div>
  );
}

export default NewFlights;