import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/CounterSlice";

export default function Card() {
  const inputVal = useRef();
  const count = useSelector((state) => state.counter.count);
  const disptach = useDispatch();
  const { add, dec, inc, sub } = counterActions;
  return (
    <div className="card">
      <button onClick={() => disptach(inc({ type: "inc" }))}>+</button>
      <button>{count}</button>
      <button onClick={() => disptach(dec({ type: "dec" }))}>-</button>
      <p>
        <input type="text" ref={inputVal} />
      </p>
      <p>
        <button onClick={() => disptach(add(inputVal.current.value))}>
          Addition
        </button>
        <button onClick={() => disptach(sub(inputVal.current.value))}>
          Subsctraction
        </button>
      </p>
    </div>
  );
}
