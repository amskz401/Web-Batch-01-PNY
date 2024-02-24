import React, { useContext } from "react";
import { myContext } from "./ContextApi";

export default function TopLogo() {
  const { viteLogo, reactLogo } = useContext(myContext);

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}
