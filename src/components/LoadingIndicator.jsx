import React, { useContext } from "react";
import LoadingContext from "../contexts/LoadingContext";

function LoadingIndicator() {
  const { isLoading } = useContext(LoadingContext);
  if (!isLoading) return null;
  return (
    <div className="loading-indicator" aria-live="polite" aria-busy="true">
      <div className="spinner" />
      <span className="loading-text">Loading...</span>
    </div>
  );
}

export default LoadingIndicator;


