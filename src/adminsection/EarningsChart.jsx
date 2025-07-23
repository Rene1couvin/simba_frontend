// src/components/EarningsChart.jsx
import React from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'; // Example if using Recharts

function EarningsChart() {
  // Dummy data for the chart (replace with actual fetched data)
  const data = [
    { name: 'Jan', earnings: 1.0 },
    { name: 'Feb', earnings: 1.5 },
    { name: 'Mar', earnings: 1.2 },
    { name: 'Apr', earnings: 0.9 },
    { name: 'May', earnings: 1.1 },
    { name: 'Jun', earnings: 1.3 },
    { name: 'Jul', earnings: 1.0 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Earning stats on all bookings</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>2021</span>
          <div className="flex items-center space-x-1">
            <span>Monthly</span>
            <span className="text-xs">▾</span>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="flex-1 w-full h-48 md:h-64 lg:h-72 flex items-center justify-center bg-gray-50 rounded-md">
        {/*
        This is where your charting library component would go.
        Example with Recharts:

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis hide={true} domain={[0, 2]} />
            <Tooltip />
            <Line type="monotone" dataKey="earnings" stroke="#8884d8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        */}
        <p className="text-gray-400">Graph Placeholder (e.g., February 1.5 M)</p>
      </div>
    </div>
  );
}

export default EarningsChart;