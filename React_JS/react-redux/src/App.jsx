import { useState } from "react";

import "./App.css";
import TopLogos from "./components/TopLogos";
import TopHeading from "./components/TopHeading";
import Card from "./components/Card";
import BottomHeading from "./components/BottomHeading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopLogos></TopLogos>
      <TopHeading></TopHeading>
      <Card></Card>
      <BottomHeading></BottomHeading>
    </>
  );
}

export default App;
