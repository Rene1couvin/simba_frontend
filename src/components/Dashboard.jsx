import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Home, Users, DollarSign, Calendar, TrendingUp, BarChart2,
  PieChart, MapPin, Plane, HelpCircle, Hotel, Briefcase, Menu
} from 'lucide-react'; // Added Menu icon for mobile toggle

// --- CSS styles embedded directly ---
const globalStyles = `
/* Basic Reset/Global Styles */
body {
  margin: 0;
  font-family: 'Inter', sans-serif; /* Assuming you'll still use Inter font, ensure it's imported in your HTML or here */
  background-color: #f3f4f6; /* Equivalent of bg-gray-100 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* App Component Styles */
.app-container {
  display: flex;
  min-height: 100vh;
}

.main-content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dashboard-main {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f3f4f6; /* Equivalent of bg-gray-100 */
  padding: 1rem; /* Equivalent of p-4 */
}

/* For small screens and up, apply more padding */
@media (min-width: 640px) { /* sm breakpoint */
  .dashboard-main {
    padding: 1.5rem; /* Equivalent of sm:p-6 */
  }
}

.dashboard-container {
  max-width: 1280px; /* Equivalent of container mx-auto max-w-full, adjust max-w as needed */
  margin-left: auto;
  margin-right: auto;
}

/* Card General Style (Used by many components) */
.card {
  background-color: #ffffff; /* bg-white */
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  padding: 1.5rem; /* p-6 */
  border: 1px solid #e5e7eb; /* border border-gray-200 */
}

.card-title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-800 */
  margin-bottom: 1rem; /* mb-4 */
}

/* Dashboard Metrics Styles */
.dashboard-metrics-grid {
  display: grid;
  grid-template-columns: 1fr; /* Default to 1 column */
  gap: 1.5rem; /* Equivalent of gap-6 */
}

@media (min-width: 640px) { /* sm breakpoint */
  .dashboard-metrics-grid {
    grid-template-columns: repeat(2, 1fr); /* sm:grid-cols-2 */
  }
}

@media (min-width: 1024px) { /* lg breakpoint */
  .dashboard-metrics-grid {
    grid-template-columns: repeat(4, 1fr); /* lg:grid-cols-4 */
  }
}

.metric-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out; /* transition-transform */
  background-image: linear-gradient(to bottom right, var(--start-color), var(--end-color)); /* For gradient backgrounds */
}

.metric-card:hover {
  transform: scale(1.03); /* Slightly reduced scale for better feel */
}

.metric-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem; /* mb-4 */
}

.metric-title {
  font-size: 0.875rem; /* text-md */
  font-weight: 500; /* font-medium */
  /* Specific colors are set by the metric type classes */
}

.metric-icon-wrapper {
  padding: 0.5rem; /* p-2 */
  border-radius: 9999px; /* rounded-full */
  opacity: 0.2; /* bg-opacity-20 */
}

.metric-value-row {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem; /* mb-2 */
}

.metric-value {
  font-size: 2.25rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  color: #1f2937; /* text-gray-900 */
}

.metric-change {
  margin-left: 0.5rem; /* ml-2 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
}

.metric-description {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
}

/* Specific colors for metrics */
.metric-card.bookings {
  --start-color: #e0e7ff; /* from-indigo-50 */
  --end-color: #c7d2fe; /* to-indigo-100 */
}
.metric-card.bookings .metric-title, .metric-card.bookings .metric-icon-wrapper {
  color: #4f46e5; /* text-indigo-700 */
}
.metric-card.bookings .metric-change {
  color: #22c55e; /* text-green-500 */
}

.metric-card.revenue {
  --start-color: #dcfce7; /* from-green-50 */
  --end-color: #bbf7d0; /* to-green-100 */
}
.metric-card.revenue .metric-title, .metric-card.revenue .metric-icon-wrapper {
  color: #16a34a; /* text-green-700 */
}
.metric-card.revenue .metric-change {
  color: #22c55e; /* text-green-500 */
}

.metric-card.clients {
  --start-color: #fee2e2; /* from-red-50 */
  --end-color: #fecaca; /* to-red-100 */
}
.metric-card.clients .metric-title, .metric-card.clients .metric-icon-wrapper {
  color: #dc2626; /* text-red-700 */
}
.metric-card.clients .metric-change {
  color: #22c55e; /* text-green-500 */
}

.metric-card.users {
  --start-color: #fffbeb; /* from-yellow-50 */
  --end-color: #fef08a; /* to-yellow-100 */
}
.metric-card.users .metric-title, .metric-card.users .metric-icon-wrapper {
  color: #eab308; /* text-yellow-700 */
}
.metric-card.users .metric-change {
  color: #ef4444; /* text-red-500 */
}

/* Dashboard Section Grid - Manual Tailwind Replication */
.dashboard-grid-middle {
  margin-top: 1.5rem; /* mt-6 */
  display: grid;
  grid-template-columns: 1fr; /* Default to 1 column */
  gap: 1.5rem; /* gap-6 */
}

@media (min-width: 768px) { /* md breakpoint */
  .dashboard-grid-middle {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }
}

@media (min-width: 1024px) { /* lg breakpoint */
  .dashboard-grid-middle {
    grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
  }
}

.dashboard-grid-bottom {
  margin-top: 1.5rem; /* mt-6 */
  display: grid;
  grid-template-columns: 1fr; /* Default to 1 column */
  gap: 1.5rem; /* gap-6 */
}

@media (min-width: 768px) { /* md breakpoint */
  .dashboard-grid-bottom {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }
}

@media (min-width: 1024px) { /* lg breakpoint */
  .dashboard-grid-bottom {
    grid-template-columns: repeat(4, 1fr); /* lg:grid-cols-4 */
  }
}

/* Table Responsive */
.table-responsive {
  overflow-x: auto;
  width: 100%; /* Ensures it takes full width for overflow */
}

.data-table {
  min-width: 600px; /* Ensures table doesn't shrink too much on small screens */
  width: 100%; /* Take full width of its container */
  border-collapse: collapse;
}

.table-header {
  background-color: #f9fafb; /* bg-gray-50 */
}

.table-header-cell {
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  text-align: left;
  font-size: 0.75rem; /* text-xs */
  font-weight: 500; /* font-medium */
  color: #6b7280; /* text-gray-500 */
  text-transform: uppercase; /* uppercase */
  letter-spacing: 0.05em; /* tracking-wider */
  border-bottom: 1px solid #e5e7eb; /* divide-y divide-gray-200 */
}
/* Ensure rounded corners apply correctly */
.table-header-cell:first-child { border-top-left-radius: 0.75rem; }
.table-header-cell:last-child { border-top-right-radius: 0.75rem; }


.table-body {
  background-color: #ffffff; /* bg-white */
}

.table-row {
  transition: background-color 0.15s ease-in-out; /* transition-colors duration-150 */
  border-bottom: 1px solid #e5e7eb; /* For row dividers */
}

.table-row:last-child {
  border-bottom: none; /* No border for the last row */
}

.table-row:hover {
  background-color: #f9fafb; /* hover:bg-gray-50 */
}

.table-cell {
  padding: 1rem 1.5rem; /* px-6 py-4 */
  white-space: nowrap; /* whitespace-nowrap */
  font-size: 0.875rem; /* text-sm */
  color: #4b5563; /* Default text color, adjust if needed */
}

.table-cell.font-medium {
  font-weight: 500;
  color: #1f2937; /* text-gray-900 */
}

.table-cell.text-gray-600 {
  color: #4b5563;
}

.status-badge {
  padding: 0.25rem 0.5rem; /* px-2 py-1 */
  display: inline-flex;
  font-size: 0.75rem; /* text-xs */
  line-height: 1.25rem; /* leading-5 */
  font-weight: 600; /* font-semibold */
  border-radius: 9999px; /* rounded-full */
}

.status-confirmed {
  background-color: #dcfce7; /* bg-green-100 */
  color: #16a34a; /* text-green-800 */
}

.status-pending {
  background-color: #fffbeb; /* bg-yellow-100 */
  color: #b45309; /* text-yellow-800 */
}

.status-cancelled {
  background-color: #fee2e2; /* bg-red-100 */
  color: #dc2626; /* text-red-800 */
}

/* Monthly Increase */
.monthly-increase-card {
  height: 100%; /* h-full */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to bottom right, #f3e8ff, #ede9fe); /* from-purple-50 to-purple-100 */
  color: #5b21b6; /* General purple text color */
}

.card-header-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-subtitle {
  font-size: 1.125rem; /* text-lg */
  font-weight: 500; /* font-medium */
  color: #6d28d9; /* text-purple-700 */
}

.icon-purple {
  width: 1.5rem; /* w-6 */
  height: 1.5rem; /* h-6 */
  color: #8b5cf6; /* text-purple-500 */
}

.increase-value-wrapper {
  text-align: center;
  margin-top: 1rem; /* my-4, adjusted */
  margin-bottom: 1rem;
}

.increase-value {
  font-size: 3.75rem; /* text-5xl */
  font-weight: 700; /* font-bold */
  color: #1f2937; /* text-gray-900 */
}

.increase-description {
  font-size: 0.875rem; /* text-sm */
  color: #4b5563; /* text-gray-600 */
  text-align: center;
}

.increase-badge-wrapper {
  margin-top: 1rem; /* mt-4 */
  display: flex;
  justify-content: center;
}

.increase-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
  border-radius: 9999px; /* rounded-full */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  background-color: #d8b4fe; /* bg-purple-200 */
  color: #5b21b6; /* text-purple-800 */
}

/* Segment Report */
.full-height-card {
  height: 100%;
}

.segment-list {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
}

.segment-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f3f4f6; /* border-b border-gray-100 */
}

.segment-item:last-child {
  border-bottom: none; /* last:border-b-0 */
}

.segment-info {
  display: flex;
  align-items: center;
}

.segment-color-dot {
  width: 0.75rem; /* w-3 */
  height: 0.75rem; /* h-3 */
  border-radius: 9999px; /* rounded-full */
  margin-right: 0.75rem; /* mr-3 */
}

.segment-name {
  color: #374151; /* text-gray-700 */
  font-weight: 500; /* font-medium */
}

.segment-value {
  text-align: right;
}

.segment-amount {
  color: #1f2937; /* text-gray-900 */
  font-weight: 600; /* font-semibold */
}

.segment-percentage {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
}

.report-button-container {
  margin-top: 1.5rem; /* mt-6 */
  display: flex;
  justify-content: flex-end;
}

.primary-button {
  padding: 0.5rem 1rem; /* px-4 py-2 */
  background-color: #4f46e5; /* bg-indigo-600 */
  color: #ffffff; /* text-white */
  border-radius: 0.375rem; /* rounded-md */
  transition: background-color 0.2s ease-in-out; /* transition-colors duration-200 */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  border: none;
  cursor: pointer;
}

.primary-button:hover {
  background-color: #4338ca; /* hover:bg-indigo-700 */
}

.icon-button {
  display: flex;
  align-items: center;
}

.button-icon {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  margin-right: 0.5rem; /* mr-2 */
}

/* Top Clients */
.client-list {
  list-style: none; /* remove default list bullets */
  padding: 0; /* remove default padding */
  margin: 0; /* remove default margin */
}

.client-item {
  padding: 0.75rem 0.5rem; /* py-3 px-2 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.15s ease-in-out; /* transition-colors duration-150 */
  border-bottom: 1px solid #e5e7eb; /* for subsequent dividers */
  border-radius: 0.375rem; /* rounded-md */
}

.client-item:first-child {
  border-top: 1px solid #e5e7eb; /* Add top border for the first item */
}

.client-item:last-child {
  border-bottom: none; /* Remove bottom border for the last item */
}

.client-item:hover {
  background-color: #f9fafb; /* hover:bg-gray-50 */
}

.client-name {
  font-weight: 500; /* font-medium */
  color: #1f2937; /* text-gray-900 */
}

.client-bookings {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
}

.client-revenue {
  font-weight: 600; /* font-semibold */
  color: #4f46e5; /* text-indigo-600 */
}

.view-all-link-container {
  margin-top: 1rem; /* mt-4 */
  text-align: center;
}

.view-all-link {
  color: #4f46e5; /* text-indigo-600 */
  transition: color 0.2s ease-in-out; /* hover:text-indigo-800 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; /* remove underline */
}

.view-all-link:hover {
  color: #3730a3; /* darker indigo */
}

.arrow-icon {
  margin-left: 0.25rem; /* ml-1 */
}

/* New Flights */
.flight-list {
  list-style: none; /* remove default list bullets */
  padding: 0; /* remove default padding */
  margin: 0; /* remove default margin */
}

.flight-item {
  padding: 0.75rem 0.5rem; /* py-3 px-2 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.15s ease-in-out; /* transition-colors duration-150 */
  border-bottom: 1px solid #e5e7eb; /* for subsequent dividers */
  border-radius: 0.375rem; /* rounded-md */
}

.flight-item:first-child {
  border-top: 1px solid #e5e7eb; /* Add top border for the first item */
}

.flight-item:last-child {
  border-bottom: none; /* Remove bottom border for the last item */
}

.flight-item:hover {
  background-color: #f9fafb; /* hover:bg-gray-50 */
}

.flight-route {
  font-weight: 500; /* font-medium */
  color: #1f2937; /* text-gray-900 */
}

.flight-route .arrow-icon {
  color: #6b7280; /* text-gray-500 */
}

.flight-date {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
}

.flight-icon {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  color: #6366f1; /* text-indigo-500 */
}

/* Covid Help Desk */
.covid-help-desk-card {
  background-image: linear-gradient(to bottom right, #eff6ff, #dbeafe); /* from-blue-50 to-blue-100 */
}

.covid-help-desk-title {
  color: #1e40af; /* text-blue-800 */
  display: flex;
  align-items: center;
}

.covid-help-icon {
  width: 1.5rem; /* w-6 */
  height: 1.5rem; /* h-6 */
  margin-right: 0.75rem; /* mr-3 */
  color: #2563eb; /* text-blue-600 */
}

.covid-help-description {
  color: #374151; /* text-gray-700 */
  line-height: 1.625; /* leading-relaxed */
  margin-bottom: 1rem; /* mb-4 */
}

.covid-help-list {
  list-style-type: disc;
  list-style-position: inside;
  color: #4b5563; /* text-gray-600 */
  margin-bottom: 1rem; /* mb-4 */
  padding-left: 0; /* Remove default padding */
}

.covid-help-list li {
  margin-bottom: 0.25rem; /* space-y-1 */
}

.covid-help-button-container {
  display: flex;
  justify-content: flex-end;
}

.large-button {
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  font-size: 1.125rem; /* text-lg */
  font-weight: 500; /* font-medium */
  background-color: #2563eb; /* bg-blue-600 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
}

.large-button:hover {
  background-color: #1d4ed8; /* hover:bg-blue-700 */
}

/* Sidebar Responsive Styles */
.sidebar-wrapper {
  position: fixed;
  inset-y: 0;
  left: 0;
  width: 16rem; /* w-64 */
  background-color: #1f2937; /* bg-gray-800 */
  color: #ffffff;
  padding: 1.5rem; /* p-6 */
  transition: transform 0.3s ease-in-out; /* transition-transform duration-300 ease-in-out */
  z-index: 40;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 0.75rem; /* rounded-r-lg */
  border-bottom-right-radius: 0.75rem; /* rounded-r-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
}

/* Mobile: Hidden by default, slides in */
.sidebar-wrapper.mobile-closed {
  transform: translateX(-100%);
}

.sidebar-wrapper.mobile-open {
  transform: translateX(0);
}

/* Desktop: Always visible */
@media (min-width: 1024px) { /* lg breakpoint */
  .sidebar-wrapper {
    transform: translateX(0) !important; /* Override mobile state */
    position: static; /* Takes up space in layout */
    border-radius: 0; /* Remove rounded corners */
    box-shadow: none; /* No shadow */
  }
}

.sidebar-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); /* bg-black bg-opacity-50 */
  z-index: 30;
}

/* Hide overlay on desktop */
@media (min-width: 1024px) { /* lg breakpoint */
  .sidebar-overlay {
    display: none;
  }
}

/* Sidebar Links */
.sidebar-link-item {
  margin-bottom: 0.5rem; /* mb-2 */
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem; /* py-2 px-4 */
  border-radius: 0.5rem; /* rounded-lg */
  transition: background-color 0.2s ease-in-out; /* transition-colors duration-200 */
  text-decoration: none; /* remove underline */
}

.sidebar-link.active {
  background-color: #4338ca; /* bg-indigo-700 */
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
}

.sidebar-link:not(.active) {
  color: #d1d5db; /* text-gray-300 */
}

.sidebar-link:not(.active):hover {
  background-color: #374151; /* hover:bg-gray-700 */
  color: #ffffff;
}

.sidebar-link-icon {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
  margin-right: 0.75rem; /* mr-3 */
}

.sidebar-brand-title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
  color: #93c5fd; /* text-indigo-300 */
}

.sidebar-bottom-text {
  margin-top: 2rem; /* mt-8 */
  padding-top: 1.5rem; /* pt-6 */
  border-top: 1px solid #374151; /* border-t border-gray-700 */
  font-size: 0.875rem; /* text-sm */
  color: #9ca3af; /* text-gray-400 */
}

/* Header Styles */
.header-bar {
  background-color: #ffffff; /* bg-white */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  padding: 1rem; /* p-4 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb; /* border-b border-gray-200 */
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom-left-radius: 0.75rem; /* rounded-b-lg */
  border-bottom-right-radius: 0.75rem; /* rounded-b-lg */
}

@media (min-width: 640px) { /* sm breakpoint */
  .header-bar {
    padding: 1.5rem; /* sm:p-6 */
  }
}

.header-menu-button {
  display: block; /* Always visible for mobile */
  color: #4b5563; /* text-gray-600 */
  outline: none;
}

.header-menu-button svg {
  width: 1.5rem; /* w-6 */
  height: 1.5rem; /* h-6 */
}

@media (min-width: 1024px) { /* lg breakpoint */
  .header-menu-button {
    display: none; /* Hide on desktop */
  }
}

.header-title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-800 */
  margin-left: 1rem; /* ml-4 */
}

@media (min-width: 1024px) { /* lg breakpoint */
  .header-title {
    margin-left: 0; /* lg:ml-0 */
  }
}

.header-user-profile {
  display: flex;
  align-items: center;
  gap: 1rem; /* space-x-4 */
}

.user-avatar-wrapper {
  position: relative;
}

.user-avatar {
  width: 2.5rem; /* w-10 */
  height: 2.5rem; /* h-10 */
  border-radius: 9999px; /* rounded-full */
  border: 2px solid #6366f1; /* border-2 border-indigo-400 */
  object-fit: cover;
}

.user-status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  height: 0.75rem; /* h-3 */
  width: 0.75rem; /* w-3 */
  border-radius: 9999px; /* rounded-full */
  background-color: #22c55e; /* bg-green-500 */
  border: 2px solid #ffffff; /* ring-2 ring-white */
}

/* Adjust font sizes for smaller screens if needed for overall aesthetic */
@media (max-width: 639px) { /* Extra small screens */
  .card-title {
    font-size: 1.125rem; /* Smaller text-xl for very small screens */
  }
  .metric-value {
    font-size: 2rem; /* Slightly smaller metric values */
  }
  .increase-value {
    font-size: 3rem; /* Slightly smaller monthly increase value */
  }
}
`;

// Main App Component
function App() {
  // Inject styles into the document head when the component mounts
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(globalStyles));
    document.head.appendChild(styleTag);

    return () => {
      // Clean up the style tag when the component unmounts
      document.head.removeChild(styleTag);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="main-content-area">
        {/* Header Component */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* Dashboard Content Scroller */}
        <main className="dashboard-main">
          <div className="dashboard-container">
            {/* Top Metrics Row */}
            <DashboardMetrics />

            {/* Middle Row - Bookings, Earnings Chart, Monthly Increase */}
            {/* Using the new custom CSS classes for grid layout */}
            <div className="dashboard-grid-middle">
              <LatestHotelBookings />
              <EarningsChart />
              <MonthlyIncrease />
            </div>

            {/* Bottom Row - Segment Report, Top Clients, New Flights, Covid Help Desk */}
            {/* Using the new custom CSS classes for grid layout */}
            <div className="dashboard-grid-bottom">
              <div className="lg:col-span-2"> {/* Added class for SegmentReport to span 2 columns on large screens */}
                <SegmentReport />
              </div>
              <TopClients />
              <NewFlights />
            </div>

            {/* Separate Covid Help Desk for its own row if needed, as in original plan */}
            <div className="mt-6">
              <CovidHelpDesk />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const sidebarClasses = `sidebar-wrapper ${isSidebarOpen ? 'mobile-open' : 'mobile-closed'}`;

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={sidebarClasses}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="sidebar-brand-title">TravelAdmin</h2>
          <button
            className="header-menu-button lg:hidden" // Use header-menu-button to hide on desktop
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex-grow">
          <ul>
            <SidebarLink icon={<Home className="sidebar-link-icon" />} text="Dashboard" active />
            <SidebarLink icon={<Hotel className="sidebar-link-icon" />} text="Hotels" />
            <SidebarLink icon={<Plane className="sidebar-link-icon" />} text="Flights" />
            <SidebarLink icon={<Users className="sidebar-link-icon" />} text="Clients" />
            <SidebarLink icon={<DollarSign className="sidebar-link-icon" />} text="Finances" />
            <SidebarLink icon={<Briefcase className="sidebar-link-icon" />} text="Bookings" />
            <SidebarLink icon={<HelpCircle className="sidebar-link-icon" />} text="Support" />
            {/* Add more links as needed */}
          </ul>
        </nav>
        <div className="sidebar-bottom-text">
          <p>&copy; {new Date().getFullYear()} TravelAdmin. All rights reserved.</p>
        </div>
      </aside>
    </>
  );
}

// Sidebar Link Component
function SidebarLink({ icon, text, active }) {
  return (
    <li className="sidebar-link-item">
      <a
        href="#"
        className={`sidebar-link ${active ? 'active' : ''}`}
      >
        {icon}
        <span>{text}</span>
      </a>
    </li>
  );
}

// Header Component
function Header({ setIsSidebarOpen }) {
  return (
    <header className="header-bar">
      <button
        className="header-menu-button"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu /> {/* Using the Menu icon from lucide-react */}
      </button>
      <h1 className="header-title">Dashboard Overview</h1>
      <div className="header-user-profile">
        {/* User Profile / Notifications */}
        <div className="user-avatar-wrapper">
          <img
            className="user-avatar"
            src="https://placehold.co/40x40/667eea/ffffff?text=U" // Placeholder image for user
            alt="User Avatar"
          />
          <span className="user-status-indicator"></span>
        </div>
      </div>
    </header>
  );
}

// DashboardMetrics Component (No changes needed, already uses responsive grid classes)
function DashboardMetrics() {
  const metrics = [
    {
      id: 1,
      title: "Total Bookings",
      value: "1,245",
      change: "+12%",
      icon: <Calendar className="w-6 h-6 text-indigo-500" />,
      type: "bookings",
    },
    {
      id: 2,
      title: "Revenue",
      value: "$85,320",
      change: "+8.5%",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      type: "revenue",
    },
    {
      id: 3,
      title: "New Clients",
      value: "215",
      change: "+20%",
      icon: <Users className="w-6 h-6 text-red-500" />,
      type: "clients",
    },
    {
      id: 4,
      title: "Active Users",
      value: "987",
      change: "-2%",
      icon: <Home className="w-6 h-6 text-yellow-500" />,
      type: "users",
    },
  ];

  return (
    <div className="dashboard-metrics-grid">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className={`card metric-card ${metric.type}`}
        >
          <div className="metric-card-header">
            <h3 className="metric-title">{metric.title}</h3>
            <div className="metric-icon-wrapper">
              {metric.icon}
            </div>
          </div>
          <div className="metric-value-row">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-change">{metric.change}</span>
          </div>
          <p className="metric-description">Compared to last month</p>
        </div>
      ))}
    </div>
  );
}

// LatestHotelBookings Component (No major changes needed, table responsiveness handled)
function LatestHotelBookings() {
  const bookings = [
    { id: 1, client: "Alice Smith", hotel: "Grand Plaza", date: "2024-07-10", status: "Confirmed" },
    { id: 2, client: "Bob Johnson", hotel: "Coastal Retreat", date: "2024-07-12", status: "Pending" },
    { id: 3, client: "Charlie Brown", hotel: "Mountain View Lodge", date: "2024-07-15", status: "Cancelled" },
    { id: 4, client: "Diana Prince", hotel: "City Center Inn", date: "2024-07-18", status: "Confirmed" },
    { id: 5, client: "Eve Adams", hotel: "Riverside Suites", date: "2024-07-20", status: "Pending" },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "Confirmed":
        return "status-confirmed";
      case "Pending":
        return "status-pending";
      case "Cancelled":
        return "status-cancelled";
      default:
        return "status-default";
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">Latest Hotel Bookings</h2>
      <div className="table-responsive">
        <table className="data-table">
          <thead className="table-header">
            <tr>
              <th scope="col" className="table-header-cell">
                Client
              </th>
              <th scope="col" className="table-header-cell">
                Hotel
              </th>
              <th scope="col" className="table-header-cell">
                Date
              </th>
              <th scope="col" className="table-header-cell">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="table-body">
            {bookings.map((booking) => (
              <tr key={booking.id} className="table-row">
                <td className="table-cell font-medium">
                  {booking.client}
                </td>
                <td className="table-cell text-gray-600">
                  {booking.hotel}
                </td>
                <td className="table-cell text-gray-600">
                  {booking.date}
                </td>
                <td className="table-cell">
                  <span
                    className={`status-badge ${getStatusClasses(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// EarningsChart Component (No changes needed)
function EarningsChart() {
  const data = [
    { name: 'Jan', earnings: 4000 },
    { name: 'Feb', earnings: 3000 },
    { name: 'Mar', earnings: 5000 },
    { name: 'Apr', earnings: 4500 },
    { name: 'May', earnings: 6000 },
    { name: 'Jun', earnings: 5500 },
    { name: 'Jul', earnings: 7000 },
  ];

  return (
    <div className="card">
      <h2 className="card-title">Earnings Overview</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}
              labelStyle={{ color: '#333', fontWeight: 'bold' }}
              itemStyle={{ color: '#666' }}
            />
            <Line type="monotone" dataKey="earnings" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// MonthlyIncrease Component (No changes needed)
function MonthlyIncrease() {
  return (
    <div className="card monthly-increase-card">
      <div className="card-header-flex">
        <h3 className="card-subtitle">Monthly Increase</h3>
        <TrendingUp className="icon-purple" />
      </div>
      <div className="increase-value-wrapper">
        <p className="increase-value">18%</p>
      </div>
      <p className="increase-description">Growth in new bookings compared to previous month.</p>
      <div className="increase-badge-wrapper">
        <span className="increase-badge">
          Last 30 Days
        </span>
      </div>
    </div>
  );
}

// SegmentReport Component (No changes needed, full-height-card handles height)
function SegmentReport() {
  const segments = [
    { name: 'Leisure Travel', value: 45000, percentage: '45%', color: '#6366f1' },
    { name: 'Business Travel', value: 30000, percentage: '30%', color: '#10b981' },
    { name: 'Adventure Tours', value: 15000, percentage: '15%', color: '#ef4444' },
    { name: 'Group Bookings', value: 10000, percentage: '10%', color: '#f59e0b' },
  ];

  return (
    <div className="card full-height-card">
      <h2 className="card-title">Revenue Segment Report</h2>
      <div className="segment-list">
        {segments.map((segment, index) => (
          <div key={index} className="segment-item">
            <div className="segment-info">
              <span className="segment-color-dot" style={{ backgroundColor: segment.color }}></span>
              <p className="segment-name">{segment.name}</p>
            </div>
            <div className="segment-value">
              <p className="segment-amount">${segment.value.toLocaleString()}</p>
              <p className="segment-percentage">{segment.percentage}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="report-button-container">
        <button className="primary-button icon-button">
          <BarChart2 className="button-icon" />
          Full Report
        </button>
      </div>
    </div>
  );
}

// TopClients Component (No changes needed, already uses flexbox)
function TopClients() {
  const clients = [
    { id: 1, name: "Global Corp", bookings: 120, revenue: "$15,000" },
    { id: 2, name: "Travel Enthusiasts Inc.", bookings: 95, revenue: "$12,500" },
    { id: 3, name: "Adventure Seekers Ltd.", bookings: 80, revenue: "$10,000" },
    { id: 4, name: "City Explorers", bookings: 70, revenue: "$9,000" },
  ];

  return (
    <div className="card full-height-card">
      <h2 className="card-title">Top Clients</h2>
      <ul className="client-list">
        {clients.map((client) => (
          <li key={client.id} className="client-item">
            <div>
              <p className="client-name">{client.name}</p>
              <p className="client-bookings">{client.bookings} Bookings</p>
            </div>
            <p className="client-revenue">{client.revenue}</p>
          </li>
        ))}
      </ul>
      <div className="view-all-link-container">
        <a href="#" className="view-all-link">
          View All Clients <span className="arrow-icon">&#8594;</span>
        </a>
      </div>
    </div>
  );
}

// NewFlights Component (No changes needed, already uses flexbox)
function NewFlights() {
  const flights = [
    { id: 1, origin: "NYC", destination: "LAX", date: "2024-08-01" },
    { id: 2, origin: "LON", destination: "PAR", date: "2024-08-05" },
    { id: 3, origin: "DXB", destination: "SIN", date: "2024-08-10" },
    { id: 4, origin: "TYO", destination: "SYD", date: "2024-08-12" },
  ];

  return (
    <div className="card full-height-card">
      <h2 className="card-title">New Flight Routes</h2>
      <ul className="flight-list">
        {flights.map((flight) => (
          <li key={flight.id} className="flight-item">
            <div>
              <p className="flight-route">{flight.origin} <span className="arrow-icon">&#8594;</span> {flight.destination}</p>
              <p className="flight-date">Depart: {flight.date}</p>
            </div>
            <Plane className="flight-icon" />
          </li>
        ))}
      </ul>
      <div className="view-all-link-container">
        <a href="#" className="view-all-link">
          Explore All Flights <span className="arrow-icon">&#8594;</span>
        </a>
      </div>
    </div>
  );
}

// CovidHelpDesk Component (No changes needed, already uses flexbox/block)
function CovidHelpDesk() {
  return (
    <div className="card covid-help-desk-card">
      <h2 className="card-title covid-help-desk-title">
        <HelpCircle className="covid-help-icon" /> COVID-19 Help Desk
      </h2>
      <p className="covid-help-description">
        Stay updated with the latest travel advisories and health guidelines. Our dedicated help desk provides real-time information and support for your travel plans amidst the ongoing situation.
      </p>
      <ul className="covid-help-list">
        <li>Latest travel restrictions updates</li>
        <li>Testing requirements by destination</li>
        <li>Quarantine policies</li>
        <li>Health and safety protocols for hotels and flights</li>
      </ul>
      <div className="covid-help-button-container">
        <button className="primary-button large-button icon-button">
          <MapPin className="button-icon" />
          View Global Map
        </button>
      </div>
    </div>
  );
}

// Export the main App component
export default App;