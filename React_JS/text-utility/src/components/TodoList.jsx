import React, { useContext, useState } from "react";
import { APP_NAME_FC } from "./AppConfig";

export default function TodoList() {
  const myCont = useContext(APP_NAME_FC);
  return (
    <div>
      <h1>{myCont}</h1>
      <input type="text" />
      <input type="button" value="Add Todo" />
      <div className="col-md-6 mx-atuo">
        <ul>
          <li>
            My Task One <button className="btn btn-danger">Delete</button>
          </li>
          <li>
            My Task One <button className="btn btn-danger">Delete</button>
          </li>
          <li>
            My Task One <button className="btn btn-danger">Delete</button>
          </li>
          <li>
            My Task One <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
