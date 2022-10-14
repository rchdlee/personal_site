import { Route, Routes, Navigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Home from "./Home/Home";
import "./App.css";
import AlmostRecipes from "./ProjectPages/AlmostRecipes";

function App() {
  return (
    <div>
      <div>
        <HashLink to="/home#" smooth>
          Home
        </HashLink>
        <HashLink to="/home#projects" smooth>
          Projects
        </HashLink>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects/AlmostRecipes" element={<AlmostRecipes />} />
      </Routes>
      <div
        style={{
          height: "360px",
        }}
      ></div>
    </div>
  );
}

export default App;
