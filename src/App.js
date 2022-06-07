import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/home/index";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
