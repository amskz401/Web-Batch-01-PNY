import React from "react";

export default function ({ type, message }) {
  return (
    <>
      <div className="input-group mb-3">
        <div className={`alert alert-${type}`} style={{ width: "100%" }}>
          {message}
        </div>
      </div>
    </>
  );
}
