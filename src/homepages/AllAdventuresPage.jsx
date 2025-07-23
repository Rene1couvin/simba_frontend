// src/components/AllAdventuresPage.jsx
import React, { useState, useEffect } from 'react';
import AdventureCard from './AdventureCard';
import LoadingAndErrorStates from './common/LoadingAndErrorStates';

const AllAdventuresPage = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend API endpoint for ALL adventures
        const response = await fetch('http://127.0.0.1:8000/api/adventures/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAdventures(data);
      } catch (e) {
        console.error("Failed to fetch all adventures:", e);
        setError("Failed to load adventures. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdventures();
  }, []);

  return (
    <>
      <style>{`
        /* Reused styles from previous examples */
        :root {
          --primary-color: orange;
          --primary-dark: #ff8c00;
          --text-color: #333;
          --light-bg: #f9f9f9;
          --card-bg: #fff;
          --shadow-light: rgba(0, 0, 0, 0.08);
          --shadow-medium: rgba(0, 0, 0, 0.15);
        }

        .adventures-section {
          padding: 80px 0;
          background-color: var(--light-bg);
          text-align: center;
        }

        .adventures-section h2 {
          font-size: 2.8em;
          color: var(--text-color);
          margin-bottom: 50px;
          position: relative;
          display: inline-block;
        }

        .adventures-section h2::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: var(--primary-color);
          border-radius: 2px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .adventure-cards-grid { /* Renamed for clarity from previous 'adventure-cards' */
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          justify-content: center;
        }

        .adventure-card {
          background-color: var(--card-bg);
          border-radius: 12px;
          box-shadow: 0 8px 25px var(--shadow-light);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .adventure-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px var(--shadow-medium);
        }

        .adventure-card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 3px solid var(--primary-color);
        }

        .adventure-card-content {
          padding: 25px;
          text-align: left;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .adventure-card-content h3 {
          font-size: 1.6em;
          color: var(--text-color);
          margin-bottom: 10px;
        }

        .adventure-card-content p {
          font-size: 1em;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .btn-primary {
          background-color: var(--primary-color);
          color: #fff;
          padding: 12px 25px;
          border: none;
          border-radius: 6px;
          font-size: 1em;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.3s ease;
          align-self: flex-start;
        }

        .btn-primary:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
        }

        .loading-message, .error-message {
          text-align: center;
          font-size: 1.2em;
          margin-top: 50px;
          color: #666;
        }
        .error-message {
          color: red;
        }

        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .adventures-section h2 {
            font-size: 2.3em;
          }
        }

        @media (max-width: 768px) {
          .adventures-section {
            padding: 60px 0;
          }
          .adventures-section h2 {
            font-size: 2em;
            margin-bottom: 40px;
          }
          .adventure-cards-grid {
            grid-template-columns: repeat(auto-fit, minmin(250px, 1fr));
          }
          .adventure-card-content {
            padding: 20px;
          }
          .btn-primary {
            padding: 10px 20px;
            font-size: 0.95em;
          }
        }

        @media (max-width: 480px) {
          .adventures-section h2 {
            font-size: 1.8em;
          }
          .container {
            padding: 0 15px;
          }
          .adventure-cards-grid {
            grid-template-columns: 1fr;
          }
          .adventure-card-image {
            height: 180px;
          }
        }
      `}</style>

      <section className="adventures-section">
        <div className="container">
          <h2>All Our Adventures</h2>
          <LoadingAndErrorStates
            loading={loading}
            error={error}
            dataLength={adventures.length}
            dataType="adventures"
          />
          {!loading && !error && adventures.length > 0 && (
            <div className="adventure-cards-grid">
              {adventures.map((adventure) => (
                <AdventureCard key={adventure.id} {...adventure} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllAdventuresPage;