import React, { createContext, useReducer } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import { reducer } from "../logic/counterLogin";

export const myContext = createContext();

export default function ContextApi({ children }) {
  const [count, dispatch] = useReducer(reducer, {
    counterVal: 0,
  });

  const myValues = {
    reactLogo: reactLogo,
    viteLogo: viteLogo,
    title: "Context + React",
    count: count.counterVal,
    dispatch: dispatch,
  };
  return <myContext.Provider value={myValues}>{children}</myContext.Provider>;
}
