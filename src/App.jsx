import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import Watch from "./page/Watch";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Watch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
