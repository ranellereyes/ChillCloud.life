import React from 'react';

const LoadingScreen = ({loading}) => (
  loading ? (
    <div className="loading">
      Loading...
    </div>
  ) : null
);

export default LoadingScreen;
