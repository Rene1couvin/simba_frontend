import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>Simba Adventure</h3>
          <p>Your journey begins with us. Explore the world's most breathtaking destinations and embark on unforgettable adventures.</p>
        </div>

        <div className="footer-section footer-quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/AllAdventuresPage">Adventures</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/packages">Special Packages</a></li>
            <li><a href="/blog">Blog / Travel Tips</a></li>
            <li><a href="/faq">FAQ</a></li> {/* Added FAQ link */}
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>123 Adventure Lane, Wildlands, WL 98765</p>
          <p>Phone: <a href="tel:250788564396">+250 788 564 396</a></p>
          <p>Email: <a href="mailto:info@simbaadventure.com">info@simbaadventure.com</a></p>
        </div>

        <div className="footer-section footer-social"> {/* New social media section */}
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.243-1.333 1.103-1.333h2.897v-5h-3.99c-3.123 0-4.009 1.597-4.009 4.628v1.372z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.779 1.63 4.931 4.832.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.85-.148 3.252-1.63 4.779-4.832 4.931-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.779-1.63-4.931-4.832-.058-1.265-.07-1.645-.07-4.849 0-3.204.012-3.584.07-4.85.148-3.252 1.63-4.779 4.832-4.931 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.947-.072 4.358-.2 6.78-2.618 6.98-6.98.058-1.281.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.444.647-1.444 1.443s.647 1.443 1.444 1.443c.795 0 1.443-.647 1.443-1.443s-.647-1.443-1.443-1.443z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.174-1.556-3.594-1.556-3.593 0-6.488 2.906-6.488 6.49s2.907 6.49 6.49 6.49c1.78 0 3.408-.705 4.637-1.858 1.009.192 1.968-.27 2.762-.751-.33.978-1.077 1.83-2.062 2.372.885-.095 1.737-.362 2.531-.698-.582 1.008-1.312 1.942-2.164 2.825-1.047 1.082-2.316 2.016-3.79 2.809-1.474.793-3.136 1.44-4.908 1.921-1.772.481-3.648.784-5.617.882-1.969.098-3.987.037-5.96-.188-.951-.109-1.89-.3-2.812-.57-1.846-.549-3.48-1.599-4.887-3.11-1.407-1.511-2.433-3.327-3.076-5.328-.643-2.001-.892-4.088-.737-6.177.155-2.088.75-4.14 1.79-5.992.52-1.065 1.144-2.083 1.869-3.024.724-.941 1.543-1.802 2.44-2.583.897-.781 1.859-1.472 2.886-2.073 1.027-.601 2.115-1.093 3.242-1.475 1.127-.382 2.31-.652 3.528-.804 1.218-.152 2.464-.176 3.69-.068.791.075 1.575.228 2.339.458.764.23 1.503.527 2.203.888.7.361 1.36.786 1.979 1.275.619.489 1.196 1.042 1.72 1.657 1.047 1.213 1.896 2.595 2.54 4.106.643 1.511.965 3.094.965 4.694 0 .828-.052 1.653-.153 2.47-.101.817-.253 1.626-.454 2.417-.201.791-.452 1.55-.752 2.276-.3.725-.65 1.411-1.047 2.059-.396.648-.84 1.24-1.332 1.775-1.923 2.102-4.133 3.73-6.602 4.884-.963.454-1.972.827-3.025 1.119-1.053.292-2.148.497-3.267.618-1.119.12-2.26.126-3.398-.009z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.52 16.483c-.099.303-.217.48-.387.65-.558.563-1.298.924-2.091 1.054-1.253.197-2.613.294-3.992.294-1.385 0-2.748-.098-4.002-.3-1.63-.255-2.92-1.066-3.69-2.584-.258-.51-.383-.87-.383-1.394 0-1.782.87-2.637 2.61-3.084 1.547-.394 3.424-.491 5.39-.491h.209c.005-.078.009-.156.009-.237 0-.326-.017-.552-.058-.679-.053-.16-.145-.296-.285-.4-.145-.104-.325-.157-.52-.157-.17 0-.306.02-.408.06-.101.04-.202.1-.301.18-.099.08-.2.18-.301.301-.099.12-.2.25-.301.38-.101.13-.202.26-.301.38-.1-.13-.2-.26-.3-.38-.1-.13-.2-.25-.301-.38-.099-.12-.2-.22-.301-.301-.1-.08-.2-.14-.301-.18-.1-.04-.23-.06-.4-.06-.195 0-.375.053-.52.157-.14.104-.232.24-.285.4-.041.127-.058.353-.058.679 0 .081.004.159.009.237h.209c1.966 0 3.843.097 5.39.491 1.74 0 2.61.87 2.61 3.084 0 .524-.125.884-.383 1.394-.77 1.518-2.06 2.329-3.69 2.584z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-section footer-payments">
          <h3>Payment Methods</h3>
          <div className="payment-icons">
            {/* Using placeholder images for payment icons */}
            <img src="https://placehold.co/60x40/f97316/ffffff?text=VISA" alt="Visa" className="payment-icon" />
            <img src="https://placehold.co/60x40/f97316/ffffff?text=MC" alt="MasterCard" className="payment-icon" />
            <img src="https://placehold.co/60x40/f97316/ffffff?text=PayPal" alt="PayPal" className="payment-icon" />
            <img src="https://placehold.co/60x40/f97316/ffffff?text=Amex" alt="American Express" className="payment-icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Simba Adventure. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="/privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

// Main App component to render only the Footer
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
        .footer-section.footer-quick-links,
        .footer-section.footer-contact {
            text-align: left;
          }

        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column; /* Allows content and footer to stack */
          justify-content: flex-end; /* Pushes the footer to the bottom */
        }

        /* Footer Styles */
        .footer {
          background-color: #1f2937; /* Dark gray background, consistent with text colors */
          color: #e5e7eb; /* Light gray text */
          padding: 2rem 1rem; /* Vertical and horizontal padding */
          margin-top: auto; /* Pushes footer to the bottom */
          font-size: 0.9rem;
          border-top-left-radius: 0.5rem; /* Rounded top corners */
          border-top-right-radius: 0.5rem; /* Rounded top corners */
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive columns */
          gap: 1.5rem; /* Space between grid items */
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #374151; /* Darker gray separator */
        }

        .footer-section h3 {
          color: #f97316; /* Orange for section titles, matching other components */
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-section p, .footer-section ul {
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li a {
          color: #e5e7eb; /* Light gray for links */
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }
        .footer-section ul li a:hover {
          color: #f97316; /* Orange on hover */
        }

        .footer-contact a {
          color: #e5e7eb; /* Light gray for contact links */
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }
        .footer-contact a:hover {
          color: #f97316; /* Orange on hover */
        }

        /* Social Media Icons */
        .social-icons {
          display: flex;
          gap: 0.8rem; /* Space between social icons */
          margin-top: 0.5rem;
        }

        .social-icon-link {
          color: #e5e7eb; /* Light gray for icons */
          transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
          display: flex; /* To center icon within its area if needed */
          align-items: center;
          justify-content: center;
        }
        .social-icon-link:hover {
          color: #f97316; /* Orange on hover */
          transform: translateY(-2px); /* Slight lift on hover */
        }

        .payment-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .payment-icon {
          height: 30px; /* Standard height for payment icons */
          width: auto;
          border: 1px solid #4b5563; /* Subtle border for icons */
          border-radius: 0.25rem; /* Rounded corners for icons */
          box-shadow: 0 1px 3px rgba(0,0,0,0.2); /* Small shadow for depth */
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 1.5rem auto 0 auto; /* Space from sections above */
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-legal-links a {
          color: #e5e7eb;
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }
        .footer-legal-links a:hover {
          color: #f97316;
        }

        .separator {
          margin: 0 0.5rem;
          color: #6b7280; /* Gray separator */
        }

        /* Responsive adjustments for Footer */
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr; /* Stack columns on small screens */
            /* Removed global text-align: center here */
          }
          .footer-section h3 {
            margin-top: 1rem; /* Add space between stacked sections */
          }
          .footer-section ul {
            padding-left: 0;
          }
          .footer-section ul li {
            margin-bottom: 0.25rem;
          }
          .payment-icons, .social-icons {
            justify-content: center; /* Center icons on small screens */
          }
          .footer-bottom {
            flex-direction: column;
            gap: 0.75rem;
          }

          /* Specific alignment for quick links and contact us on mobile */
          .footer-section.footer-quick-links,
          .footer-section.footer-contact {
            text-align: left; /* Align these sections to the left */
            padding-left: 1rem; /* Add some padding if needed for visual spacing */
            padding-right: 1rem;
          }

          /* Ensure list items within these sections are also left-aligned */
          .footer-section.footer-quick-links ul,
          .footer-section.footer-contact p {
            text-align: left;
          }
        }
        `}
      </style>
     
      <Footer />
    </div>
  );
};

export default App;
