import React from "react";
import { useSelector } from "react-redux";

export default function BottomHeading() {
  const count = useSelector((state) => state.counter.count);
  return (
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more {count}
    </p>
  );
}
