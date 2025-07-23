// src/components/SegmentReport.jsx
import React, { useState } from 'react';
// import { BsArrowRight } from 'react-icons/bs';

const SegmentMetric = ({ label, value }) => (
  <div className="flex flex-col items-start">
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="text-xl font-bold text-gray-800">{value}</p>
  </div>
);

function SegmentReport() {
  const [activeTab, setActiveTab] = useState('Hotels');

  // Dummy data based on active tab
  const segmentData = {
    Hotels: {
      total: '2.8B',
      newBookings: '5K',
      newCustomers: '2K',
      transactions: '1.2M',
    },
    Flights: {
      total: '1.5M',
      newBookings: '3K',
      newCustomers: '1K',
      transactions: '0.8M',
    },
    'Packaged Holidays': {
      total: '500M',
      newBookings: '1K',
      newCustomers: '0.5K',
      transactions: '0.3M',
    },
    Trains: {
      total: '200M',
      newBookings: '0.5K',
      newCustomers: '0.2K',
      transactions: '0.1M',
    },
    Buses: {
      total: '100M',
      newBookings: '0.3K',
      newCustomers: '0.1K',
      transactions: '0.05M',
    },
    Cabs: {
      total: '80M',
      newBookings: '0.2K',
      newCustomers: '0.05K',
      transactions: '0.02M',
    },
    Others: {
      total: '10M',
      newBookings: '0.1K',
      newCustomers: '0.02K',
      transactions: '0.01M',
    },
  };

  const currentData = segmentData[activeTab];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Calculate monthly report based on each segment</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>May, 2021</span>
          <span className="text-xs">▾</span>
        </div>
      </div>

      {/* Segment Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200 pb-2 mb-6 text-sm">
        {Object.keys(segmentData).map((segment) => (
          <button
            key={segment}
            onClick={() => setActiveTab(segment)}
            className={`mr-4 px-3 py-1 rounded-full whitespace-nowrap
              ${activeTab === segment ? 'bg-purple-100 text-purple-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            {segment}
          </button>
        ))}
      </div>

      {/* Metrics for selected segment */}
      <div className="grid grid-cols-2 gap-y-4 mb-6">
        <SegmentMetric label="Total Properties" value={currentData.total} />
        <SegmentMetric label="New Bookings" value={currentData.newBookings} />
        <SegmentMetric label="New Customers" value={currentData.newCustomers} />
        <SegmentMetric label="Transactions" value={currentData.transactions} />
      </div>

      {/* Generate Report Button */}
      <div className="flex justify-end mt-auto">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-purple-700 transition-colors">
          Generate Report
          <span className="ml-2">›</span> {/* <BsArrowRight className="ml-2" /> */}
        </button>
      </div>
    </div>
  );
}

export default SegmentReport;