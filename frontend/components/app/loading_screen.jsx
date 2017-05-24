import React from 'react';

const LoadingScreen = ({loading}) => (
  loading ? (
    <div className="background">
      <label className="loading">
        <img src="https://i.imgur.com/Zl83lfn.gif" className="loading" />
          Loading...
      </label>
    </div>
  ) : null
);

export default LoadingScreen;
