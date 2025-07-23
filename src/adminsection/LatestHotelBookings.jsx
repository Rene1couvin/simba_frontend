// src/components/LatestHotelBookings.jsx
import React from 'react';

const BookingItem = ({ hotel, dates, client, timeAgo, avatarUrl }) => (
  <div className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
    <img
      src={avatarUrl || 'https://via.placeholder.com/40'}
      alt={client}
      className="w-10 h-10 rounded-full object-cover mr-3"
    />
    <div className="flex-1">
      <p className="font-semibold text-gray-800">{hotel}</p>
      <p className="text-sm text-gray-500">{dates}</p>
      <p className="text-xs text-gray-400">{client} <span className="ml-1 text-gray-500">{timeAgo}</span></p>
    </div>
    <button className="text-gray-400 hover:text-gray-600">...</button>
  </div>
);

function LatestHotelBookings() {
  const bookings = [
    {
      hotel: 'Queens Hotel',
      dates: '28 - 29 May',
      client: 'Mark Wayne',
      timeAgo: '3 days ago',
      avatar: 'https://via.placeholder.com/40/FF5733/FFFFFF?text=MW'
    },
    {
      hotel: 'Hotel Lavilias',
      dates: '28 May - 01 June',
      client: 'Eno Willis',
      timeAgo: '10 days ago',
      avatar: 'https://via.placeholder.com/40/33FF57/FFFFFF?text=EW'
    },
    {
      hotel: 'Poshy Inn',
      dates: '24 - 28 May', // Corrected to match image's implied ordering/dates
      client: 'K. Parker',
      timeAgo: '12 days ago',
      avatar: 'https://via.placeholder.com/40/3357FF/FFFFFF?text=KP'
    },
    {
      hotel: 'Stay Happy',
      dates: '02 - 05 June',
      client: 'Melissa Wade',
      timeAgo: 'Last week', // Example, adjust as needed
      avatar: 'https://via.placeholder.com/40/5733FF/FFFFFF?text=MW'
    },
    // Add more bookings as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Latest Hotel Bookings</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>May, 2021</span>
          <span className="text-xs">▾</span>
        </div>
      </div>
      <div className="text-sm text-gray-500 mb-4 flex justify-between">
        <span>From</span>
        <span>To</span>
        <button className="text-gray-400">📅</button> {/* Placeholder for calendar icon */}
      </div>
      <div className="mb-4">
        <div className="flex items-center text-sm font-medium text-gray-700">
          <span className="w-1/2">28.05.2021</span>
          <span className="w-1/2 text-right">05.06.2021</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {bookings.map((booking, index) => (
          <BookingItem
            key={index}
            hotel={booking.hotel}
            dates={booking.dates}
            client={booking.client}
            timeAgo={booking.timeAgo}
            avatarUrl={booking.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestHotelBookings;