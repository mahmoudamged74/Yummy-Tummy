import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import YummyPage from "./Pages/YummyPage/YummyPage";
import CottonPage from "./Pages/CottonPage/CottonPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yummy" element={<YummyPage />} />
        <Route path="/cotton" element={<CottonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
