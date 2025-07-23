// src/components/CovidHelpDesk.jsx
import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';

function CovidHelpDesk() {
  return (
    <div className="bg-red-500 text-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-3">Covid Help Desk</h2>
      <p className="text-sm mb-4">
        We value our employees. Following plans have been introduced to protect our employees.
      </p>

      <ul className="space-y-2 mb-6 text-sm">
        <li className="flex items-center">
          <span className="mr-2">→</span> {/* <BsArrowRight className="mr-2" /> */}
          Health Insurance
        </li>
        <li className="flex items-center">
          <span className="mr-2">→</span> {/* <BsArrowRight className="mr-2" /> */}
          Pension Plan
        </li>
        <li className="flex items-center">
          <span className="mr-2">→</span> {/* <BsArrowRight className="mr-2" /> */}
          Mediclaim
        </li>
        <li className="flex items-center">
          <span className="mr-2">→</span> {/* <BsArrowRight className="mr-2" /> */}
          Family Protection
        </li>
      </ul>

      <p className="text-xs">For help, our toll free no. - 0018004300</p>
    </div>
  );
}

export default CovidHelpDesk;