import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<List />} />
            <Route path="/add-user" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
