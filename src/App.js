import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home/Home";
import "./App.css";
// import AlmostRecipes from "./ProjectPages/AlmostRecipes/AlmostRecipes";
import Navigation from "./UI/Navigation";
import Footer from "./UI/Footer";

import { TailSpin } from "react-loader-spinner";

const AlmostRecipes = React.lazy(() =>
  import("./ProjectPages/AlmostRecipes/AlmostRecipes")
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense
        fallback={
          <div className="centeredspinner">
            <TailSpin
              height="80"
              width="80"
              color="#445f49"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects/AlmostRecipes" element={<AlmostRecipes />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
