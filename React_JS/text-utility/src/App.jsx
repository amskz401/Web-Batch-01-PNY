import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import UtilityForm from "./components/UtilityForm";
import Calculator from "./components/Calculator";
import TodoList from "./components/TodoList";
import { APP_NAME_FC } from "./components/AppConfig";

function App() {
  const MY_APP = "Text Utility";
  const APP_VERSION = "1.0";
  const CARD_DATA = [
    { id: 1, title: "First Card", description: "First Card Description" },
    { id: 2, title: "Second Card", description: "Second Card Description" },
    { id: 3, title: "Third Card", description: "Third Card Description" },
    { id: 4, title: "Fourth Card", description: "Fourth Card Description" },
    { id: 5, title: "Fifth Card", description: "Fifth Card Description" },
    { id: 6, title: "Sixth Card", description: "Sixth Card Description" },
  ];

  const [menuItem, setMenuItem] = useState("home");

  return (
    <APP_NAME_FC.Provider value={"My React Application"}>
      <Navbar
        APP_VERSION={APP_VERSION}
        menuItem={menuItem}
        setMenuItem={setMenuItem}
      />
      {menuItem == "home" && <h1>Welcome To My React Application</h1>}
      {menuItem == "text_util" && <UtilityForm />}
      {menuItem == "calc" && <Calculator />}
      {menuItem == "todo_list" && <TodoList />}
      {/* {CARD_DATA.map((card) => (
        <Card card={card} />
      ))} */}
    </APP_NAME_FC.Provider>
  );
}

export default App;
