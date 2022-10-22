import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home/Home";
import "./App.css";
import AlmostRecipes from "./ProjectPages/AlmostRecipes/AlmostRecipes";
import Playground from "./Helpers/Playground";
import Navbar from "./UI/Navbar";
import Navigation from "./UI/Navigation";
import Footer from "./UI/Footer";

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects/AlmostRecipes" element={<AlmostRecipes />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
