import React, { useContext } from "react";
import { myContext } from "./ContextApi";

export default function MainTitle() {
  const { title } = useContext(myContext);
  return <h1>{title}</h1>;
}
