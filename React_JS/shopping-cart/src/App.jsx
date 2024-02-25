import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GetItems from "./components/GetItems";

function App() {
  return (
    <>
      <Header></Header>
      <GetItems />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
