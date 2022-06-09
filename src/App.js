import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/index";
import AABidTypesPage from "./pages/american-airlines/bidtypes/index";
import AAPilotsPage from "./pages/american-airlines/pilots/index.js";
import { HeaderView } from "./components/HeaderView/HeaderView"

function App() {
  return (
    <>
    <HeaderView />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
        <Route path="/american-airlines/pilots" component={AAPilotsPage} />
      </Routes>
    </div>
    </>
  );
}

export default App;
