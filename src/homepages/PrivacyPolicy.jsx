import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-paragraph">
        <strong>Effective Date:</strong> June 25, 2025
      </p>

      <p className="privacy-paragraph">
        Welcome to our Tour and Adventure website. Your privacy is very
        important to us. This Privacy Policy explains how we collect, use,
        protect, and disclose your personal information when you use our
        services.
      </p>

      <h2 className="privacy-subtitle">Information We Collect</h2>
      <ul className="privacy-list">
        <li>Personal details (name, email, phone number, nationality)</li>
        <li>Payment and billing information</li>
        <li>Booking history and preferences</li>
        <li>Location data (when permitted)</li>
        <li>Website usage data via cookies and analytics</li>
      </ul>

      <h2 className="privacy-subtitle">How We Use Your Information</h2>
      <ul className="privacy-list">
        <li>To manage your bookings and reservations</li>
        <li>To send updates, confirmations, and promotional offers</li>
        <li>To enhance website functionality and security</li>
        <li>To comply with legal obligations and fraud protection</li>
      </ul>

      <h2 className="privacy-subtitle">Data Protection</h2>
      <p className="privacy-paragraph">
        We use industry-standard encryption, secured servers, and restricted
        access controls to protect your personal data against unauthorized
        access, alteration, or disclosure.
      </p>

      <h2 className="privacy-subtitle">Third-Party Services</h2>
      <p className="privacy-paragraph">
        We may share your data with trusted third parties for payment processing,
        travel insurance, or accommodation services. All third parties are
        contractually obligated to respect the security and confidentiality of
        your personal information.
      </p>

      <h2 className="privacy-subtitle">Your Privacy Rights</h2>
      <p className="privacy-paragraph">
        You have the right to access, update, or delete your personal data.
        Please contact us at <a href="mailto:privacy@yourwebsite.com" className="privacy-email-link">privacy@yourwebsite.com</a> for
        inquiries.
      </p>

      <h2 className="privacy-subtitle">Policy Updates</h2>
      <p className="privacy-paragraph">
        We reserve the right to amend this policy at any time. Updated policies
        will be posted on this page with a revised date.
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
          padding-top: 1.5rem; /* Padding at the top */
        }

        /* PrivacyPolicy Styles */
        .privacy-container {
          padding: 1rem;
          max-width: 64rem; /* max-w-4xl */
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          background-color: #fcfcfc; /* Slightly off-white background */
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          margin-bottom: 1.5rem;
        }

        .privacy-title {
          font-size: 2rem; /* text-3xl */
          font-weight: 700; /* font-bold */
          margin-bottom: 0.8rem;
          color: #f97316; /* Dark orange for the main title */
          text-align: center;
        }

        .privacy-paragraph {
          margin-bottom: 0.8rem;
          line-height: 1.5;
          color: #374151; /* Medium gray */
        }

        .privacy-subtitle {
          font-size: 1.5rem; /* text-2xl */
          font-weight: 600; /* font-semibold */
          margin-top: 1.2rem;
          margin-bottom: 0.4rem;
          color: #ea580c; /* Orange for subtitles */
          border-bottom: 2px solid #fed7aa; /* Light orange underline */
          padding-bottom: 0.2rem;
          display: inline-block;
        }

        .privacy-list {
          list-style-type: disc;
          padding-left: 1.2rem;
          margin-bottom: 0.8rem;
          color: #374151; /* Medium gray */
        }
        .privacy-list li {
            margin-bottom: 0.4rem;
            background-color: #fffbeb; /* Very light yellow background for list items */
            padding: 0.3rem 0.5rem;
            border-radius: 0.25rem;
            border-left: 4px solid #f97316; /* Orange accent on the left */
        }

        .privacy-email-link {
          color: #f97316; /* Orange for email link */
          text-decoration: underline;
        }
        .privacy-email-link:hover {
            color: #ea580c; /* Darker orange on hover */
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .privacy-container {
            padding: 0.8rem;
            margin-left: 0.8rem;
            margin-right: 0.8rem;
          }
          .privacy-title {
            font-size: 1.6rem;
          }
          .privacy-subtitle {
            font-size: 1.1rem;
          }
          .privacy-list {
            padding-left: 1rem;
          }
          .privacy-list li {
            padding: 0.25rem 0.4rem;
          }
        }
        `}
      </style>
      <PrivacyPolicy />
    </div>
  );
};

export default App;
