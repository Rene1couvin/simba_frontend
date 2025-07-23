// src/components/AdventureCard.jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Import the auth hook

const AdventureCard = ({ title, description, imageUrl, id }) => {
  const { isLoggedIn } = useAuth(); // Get login status from context

  return (
    <div className="adventure-card">
      <img src={imageUrl} alt={title} className="adventure-card-image" />
      <div className="adventure-card-content">
        <h3>{title}</h3>
        {/* Conditionally render description */}
        {isLoggedIn && <p>{description}</p>}

        {/* Conditionally render button text and link behavior */}
        {isLoggedIn ? (
          <a
            href={`/adventures/${id || title.toLowerCase().replace(/\s/g, '-')}`}
            className="btn-primary"
            style={{ display: 'inline-block', marginTop: '15px' }}
          >
            Learn More
          </a>
        ) : (
          <a
            href={`/adventures/${id || title.toLowerCase().replace(/\s/g, '-')}`}
            className="btn-primary"
            style={{ display: 'inline-block', marginTop: '15px' }}
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
};

export default AdventureCard;