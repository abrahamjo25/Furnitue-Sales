import React from "react";
import './App.css'
const Loading = () => {
  return (
    <div>
     <div className="loading-container">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
    </div>
  );
};

export default Loading;
