// src/components/DashboardMetrics.jsx
import React from 'react';
// Assuming icons or a library like react-icons
// import { FaMoneyBillAlt, FaUsers, FaBuilding, FaClipboardList } from 'react-icons/fa';

const MetricCard = ({ title, value, icon, bgColor, textColor, iconBgColor }) => (
  <div className={`bg-white rounded-lg shadow-sm p-6 flex items-center justify-between`}>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-3xl font-bold ${textColor || 'text-gray-800'}`}>{value}</p>
    </div>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBgColor || 'bg-gray-100'}`}>
      {icon}
    </div>
  </div>
);

function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Earnings"
        value="2.8B"
        icon={<span className="text-purple-600 text-2xl">💰</span>} // <FaMoneyBillAlt className="text-purple-600 text-2xl" />
        iconBgColor="bg-red-100"
        textColor="text-red-600"
      />
      <MetricCard
        title="Happy Users"
        value="1.5M"
        icon={<span className="text-blue-600 text-2xl">😊</span>} // <FaUsers className="text-blue-600 text-2xl" />
        iconBgColor="bg-blue-100"
        textColor="text-blue-600"
      />
      <MetricCard
        title="Employees"
        value="10K"
        icon={<span className="text-indigo-600 text-2xl">👨‍💼</span>} // <FaBuilding className="text-indigo-600 text-2xl" />
        iconBgColor="bg-indigo-100"
        textColor="text-indigo-600"
      />
      <MetricCard
        title="New Bookings"
        value="12K"
        icon={<span className="text-green-600 text-2xl">✅</span>} // <FaClipboardList className="text-green-600 text-2xl" />
        iconBgColor="bg-green-100"
        textColor="text-green-600"
      />
    </div>
  );
}

export default DashboardMetrics;