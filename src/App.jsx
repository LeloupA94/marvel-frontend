import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";

// Components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics/:characterId" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
};

export default App;
