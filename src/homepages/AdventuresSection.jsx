// src/components/FeaturedAdventuresSection.jsx
import React, { useState, useEffect } from 'react';
import AdventureCard from './AdventureCard';
import LoadingAndErrorStates from './common/LoadingAndErrorStates';

const FeaturedAdventuresSection = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend API endpoint
        // Ideally, you'd have an endpoint like '/api/adventures/featured' or '/api/adventures?limit=6'
        const response = await fetch('/api/adventures');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Take only the first 6 for featured section
        setAdventures(data.slice(0, 6));
      } catch (e) {
        console.error("Failed to fetch featured adventures:", e);
        setError("Failed to load featured adventures. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdventures();
  }, []);

  return (
    <>
      {/*
        Reusing the same CSS styles from AllAdventuresPage, updated with the new
        color palette variables. In a real application, these would be in a
        shared global stylesheet for consistency.
      */}
      <style>{`
        /* --- Color variables for the new brand palette --- */
        :root {
          --pine-green: #2E7D32;
          --fern-green: #4CAF50;
          --sky-blue: #64B5F6;
          --sunlight-gold: #FFD54F;
          --misty-green: #E8F5E9;
          --stone-gray: #F5F5F5;
          --earth-brown: #5D4037;
          --warm-amber: #FFB300;
          --moss-glow: #A5D6A7;
          --dark-forest: #1B5E20;
          --charcoal-gray: #424242;
          --white: #FFFFFF;
        }

        .adventures-section {
          padding: 80px 0;
          background-color: var(--misty-green);
          text-align: center;
        }

        .adventures-section h2 {
          font-size: 2.8em;
          color: var(--charcoal-gray);
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
          background-color: var(--pine-green);
          border-radius: 2px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .adventure-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          justify-content: center;
        }

        .adventure-card {
          background-color: var(--white);
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .adventure-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .adventure-card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 3px solid var(--pine-green);
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
          color: var(--charcoal-gray);
          margin-bottom: 10px;
        }

        .adventure-card-content p {
          font-size: 1em;
          color: var(--charcoal-gray);
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .btn-primary {
          background-color: var(--pine-green);
          color: var(--white);
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
          background-color: var(--fern-green);
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
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
          <h2>Featured Adventures</h2>
          <LoadingAndErrorStates
            loading={loading}
            error={error}
            dataLength={adventures.length}
            dataType="featured adventures"
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

export default FeaturedAdventuresSection;
