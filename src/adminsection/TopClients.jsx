// src/components/TopClients.jsx
import React from 'react';

const ClientAvatar = ({ name, avatarUrl }) => (
  <div className="text-center">
    <img
      src={avatarUrl || 'https://via.placeholder.com/64'}
      alt={name}
      className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
    />
    <p className="text-sm font-medium text-gray-800">{name}</p>
  </div>
);

function TopClients() {
  const clients = [
    { name: 'Mark Wayne', avatar: 'https://via.placeholder.com/64/FF5733/FFFFFF?text=MW' },
    { name: 'Eno Willis', avatar: 'https://via.placeholder.com/64/33FF57/FFFFFF?text=EW' },
    { name: 'K. Parker', avatar: 'https://via.placeholder.com/64/3357FF/FFFFFF?text=KP' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Top valued clients</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>May, 2021</span>
          <span className="text-xs">▾</span>
        </div>
      </div>
      <div className="flex justify-around items-center flex-1">
        {clients.map((client, index) => (
          <ClientAvatar key={index} name={client.name} avatarUrl={client.avatar} />
        ))}
      </div>
    </div>
  );
}

export default TopClients;