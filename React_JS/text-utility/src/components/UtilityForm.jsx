import React, { useContext, useState } from "react";
import { APP_NAME_FC } from "./AppConfig";

export default function UtilityForm(MY_APP) {
  const name = "Farhan";
  let [charCounter, setCharCounter] = useState(0);
  let [wordCounter, setWordCounter] = useState(0);
  let [textAreanValue, setTextAreanValue] = useState("");
  let [transformedText, setTransformedText] = useState("");
  const countChar = (event) => {
    let newStr = event.target.value;

    setTextAreanValue(newStr);

    setCharCounter(newStr.length);

    wordCounter = newStr.split(" ");
    setWordCounter(wordCounter.length);

    console.log(`String Counter: ${charCounter} - WordCounter: ${wordCounter}`);
  };

  const transformToUpper = () => {
    setTransformedText(textAreanValue.toUpperCase());
  };

  const transformToLower = () => {
    setTransformedText(textAreanValue.toLowerCase());
  };

  const myCont = useContext(APP_NAME_FC);

  return (
    <>
      <div className="row">
        <center>
          <h1>{myCont}</h1>
          <div className="col-md-6 mx-atuo">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter Some Text
                </label>
                <textarea
                  name=""
                  id=""
                  rows="6"
                  className="form-control"
                  onKeyUp={countChar}
                ></textarea>
                <p>Character Count: {charCounter}</p>
                <p>Word Count: {wordCounter}</p>
                <p>{transformedText}</p>
              </div>
              <button
                onClick={transformToUpper}
                type="button"
                className="btn btn-primary"
                value="Submit Form"
              >
                Text To Upper
              </button>
              <button
                onClick={transformToLower}
                type="button"
                className="btn btn-primary"
                value="Submit Form"
              >
                Text To Lower
              </button>
            </form>
          </div>
        </center>
      </div>
    </>
  );
}
