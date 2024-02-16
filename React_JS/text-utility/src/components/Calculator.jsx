import React, { useState } from "react";
import Buttons from "./Buttons";

export default function Calculator({ MY_APP }) {
  const buttons = ["+", "-", "*", "/", 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "C", "="];
  const [result, setResult] = useState(0);
  const handleClick = (btnValue) => {
    if (btnValue == "=") {
      console.log(`${result}`);
      console.log(`${btnValue}`);
      const calcResult = eval(result);
      setResult(calcResult);
    } else {
      const old_value = result;
      const new_value = old_value + btnValue;
      setResult(new_value);
    }
  };
  return (
    <div className="col-md-6 mx-auto">
      <h1>{MY_APP}</h1>
      <div class="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          value={`${result}`}
          disabled
        />
      </div>
      {buttons.map((btn) => (
        <Buttons key={btn} button={btn} handleClick={handleClick} />
      ))}
    </div>
  );
}
