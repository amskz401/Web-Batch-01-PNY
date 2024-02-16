import React from "react";

export default function Buttons({ button, handleClick }) {
  return (
    <div className="col-md-2">
      <button
        onClick={() => handleClick(button)}
        type="button"
        value={`${button}`}
        className="btn btn-secondary"
      >
        {button}
      </button>
    </div>
  );
}
