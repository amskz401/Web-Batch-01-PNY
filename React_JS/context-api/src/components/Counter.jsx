import React, { useContext, useRef } from "react";
import { myContext } from "./ContextApi";

export default function Counter() {
  const countVal = useRef();
  const { count, dispatch } = useContext(myContext);

  return (
    <div className="card">
      <button onClick={() => dispatch({ type: "inc" })}>Inc</button>
      <p>
        <h2>count is {count}</h2>
      </p>
      <button onClick={() => dispatch({ type: "dec" })}>Dec</button>
      <p>
        <input type="text" ref={countVal} />
        <button
          onClick={() =>
            dispatch({ type: "add", value: countVal.current.value })
          }
        >
          Inc+
        </button>
        <button
          onClick={() =>
            dispatch({ type: "rem", value: countVal.current.value })
          }
        >
          Dec-
        </button>
      </p>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
