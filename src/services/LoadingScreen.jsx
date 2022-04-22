import React from "react";

export default function LoadingScreen() {
  return (
    <div
      className="d-flex justify-content-center align-items-center h-100 w-100"
      style={{ position: "absolute", overflow: "hidden" }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
