import React, { useContext } from "react";
import { myContext } from "./ContextApi";

export default function Footer() {
  const { count } = useContext(myContext);
  return (
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more {count}
    </p>
  );
}
