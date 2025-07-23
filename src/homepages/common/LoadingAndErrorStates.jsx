// src/components/common/LoadingAndErrorStates.jsx
import React from 'react';

const LoadingAndErrorStates = ({ loading, error, dataLength, dataType }) => {
  if (loading) {
    return <p className="loading-message">Loading {dataType}...</p>;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  if (dataLength === 0) {
    return <p className="loading-message">No {dataType} found.</p>;
  }
  return null; // Don't render anything if no loading, no error, and data is present
};

export default LoadingAndErrorStates;