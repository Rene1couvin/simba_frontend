import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="terms-paragraph">
        <strong>Effective Date:</strong> June 25, 2025
      </p>

      <p className="terms-paragraph">
        These Terms and Conditions govern your use of our Tour and Adventure
        website. By accessing or using our services, you agree to comply with
        these terms.
      </p>

      <h2 className="terms-subtitle">Use of the Website</h2>
      <ul className="terms-list">
        <li>Users must be 18 years or older to make bookings.</li>
        <li>All information provided must be accurate and complete.</li>
        <li>No unauthorized copying, reproduction, or resale of site content is allowed.</li>
      </ul>

      <h2 className="terms-subtitle">Booking and Payment</h2>
      <ul className="terms-list">
        <li>All bookings are subject to availability and confirmation.</li>
        <li>Full payment or deposit is required to secure reservations.</li>
        <li>Prices may fluctuate due to changes in taxes, fuel costs, or currency rates.</li>
      </ul>

      <h2 className="terms-subtitle">Cancellations and Refunds</h2>
      <ul className="terms-list">
        <li>Cancellations must be made in writing via email.</li>
        <li>Refunds will be processed according to our Cancellation Policy.</li>
        <li>No refunds for no-shows or last-minute cancellations (within 24 hours).</li>
      </ul>

      <h2 className="terms-subtitle">Liability Disclaimer</h2>
      <p className="terms-paragraph">
        We are not liable for any injury, loss, damage, or expense resulting from
        travel delays, acts of nature, government actions, or third-party service
        failures. Travelers are advised to purchase comprehensive travel
        insurance.
      </p>

      <h2 className="terms-subtitle">Intellectual Property</h2>
      <p className="terms-paragraph">
        All site content including images, logos, videos, and text are the
        intellectual property of this website and may not be used without
        written permission.
      </p>

      <h2 className="terms-subtitle">Changes to Terms</h2>
      <p className="terms-paragraph">
        We reserve the right to modify these Terms and Conditions at any time.
        Continued use of our services after changes implies acceptance of the
        updated terms.
      </p>

      <h2 className="terms-subtitle">Contact Us</h2>
      <p className="terms-paragraph">
        For questions about these Terms, contact us at{" "}
        <a href="mailto:support@yourwebsite.com" className="terms-email-link">support@yourwebsite.com</a>.
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #f3f4f6; /* Light gray background for the body */
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start; /* Align content to the top */
          padding-top: 1.5rem; /* Reduced padding at the top */
        }

        /* TermsAndConditions Styles */
        .terms-container {
          padding: 1rem; /* Reduced padding from 1.5rem to 1rem */
          max-width: 64rem; /* max-w-4xl */
          width: 100%; /* Ensure it takes full width within max-width */
          margin-left: auto; /* mx-auto */
          margin-right: auto; /* mx-auto */
          background-color: #fcfcfc; /* Slightly off-white background */
          border-radius: 0.5rem; /* Slightly rounded corners */
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* Subtle shadow */
          margin-bottom: 1.5rem; /* Reduced space at the bottom */
        }

        .terms-title {
          font-size: 2rem; /* text-3xl */
          font-weight: 700; /* font-bold */
          margin-bottom: 0.8rem; /* Slightly reduced margin-bottom */
          color: #f97316; /* Dark orange for the main title */
          text-align: center; /* Center the title */
        }

        .terms-paragraph {
          margin-bottom: 0.8rem; /* Slightly reduced margin-bottom */
          line-height: 1.5; /* Default line height for readability */
          color: #374151; /* Medium gray */
        }

        .terms-subtitle {
          font-size: 1.5rem; /* text-2xl */
          font-weight: 600; /* font-semibold */
          margin-top: 1.2rem; /* Slightly reduced margin-top */
          margin-bottom: 0.4rem; /* Slightly reduced margin-bottom */
          color: #ea580c; /* Orange for subtitles */
          border-bottom: 2px solid #fed7aa; /* Light orange underline */
          padding-bottom: 0.2rem; /* Reduced padding-bottom */
          display: inline-block; /* To make border-bottom only span text */
        }

        .terms-list {
          list-style-type: disc;
          padding-left: 1.2rem; /* Reduced padding-left */
          margin-bottom: 0.8rem; /* Slightly reduced margin-bottom */
          color: #374151; /* Medium gray */
        }
        .terms-list li {
            margin-bottom: 0.4rem; /* Slightly reduced margin-bottom */
            background-color: #fffbeb; /* Very light yellow background for list items */
            padding: 0.3rem 0.5rem; /* Reduced padding */
            border-radius: 0.25rem;
            border-left: 4px solid #f97316; /* Orange accent on the left */
        }

        .terms-email-link {
          color: #f97316; /* Changed to an orange shade */
          text-decoration: underline;
        }
        .terms-email-link:hover {
            color: #ea580c; /* Darker orange on hover */
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .terms-container {
            padding: 0.8rem; /* Further reduced padding for small screens */
            margin-left: 0.8rem;
            margin-right: 0.8rem;
          }
          .terms-title {
            font-size: 1.6rem;
          }
          .terms-subtitle {
            font-size: 1.1rem;
          }
           .terms-list {
            padding-left: 1rem;
          }
          .terms-list li {
            padding: 0.25rem 0.4rem;
          }
        }
        `}
      </style>
      <TermsAndConditions />
    </div>
  );
};

export default App;
