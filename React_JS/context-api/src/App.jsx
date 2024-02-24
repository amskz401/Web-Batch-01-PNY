import "./App.css";
import TopLogo from "./components/TopLogo";
import MainTitle from "./components/MainTitle";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import ContextApi from "./components/ContextApi";

function App() {
  return (
    <ContextApi>
      <TopLogo />
      <MainTitle />
      <Counter />
      <Footer />
    </ContextApi>
  );
}

export default App;
