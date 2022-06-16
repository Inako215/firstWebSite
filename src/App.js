import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/index";
import FooterView from "./components/FooterView/index";
import HeaderView from "./components/HeaderView/index";
import AABidTypesPage from "./pages/american-airlines/bidtypes/index";
import * as BidTypes from "./components/BidTypeView/BidTypeView.stories";
import * as pilotTypes from "./components/PilotView/PilotView.stories";
import AAPilotsPage from "./pages/american-airlines/pilots/index";
import ASPilotsPage from "./pages/alaska-airlines/pilots/index";
import FAPilotsPage from "./pages/frontier-airlines/pilots/index";
import UPPilotsPage from "./pages/ups/pilots/index";
import ASBidTypesPage from "./pages/alaska-airlines/bidtypes/index";
import FABidTypesPage from "./pages/frontier-airlines/bidtypes/index";
import UPBidTypesPage from "./pages/ups/bidtypes/index";

function App() {
  return (
    <>
      <HeaderView />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/american-airlines/bidtypes"
          element={
            <AABidTypesPage pilot={[{ ...BidTypes.Default.args.bidTypes }]} />
          }
        />
        <Route
          path="/alaska-airlines/bidtypes"
          element={
            <ASBidTypesPage pilot={[{ ...BidTypes.Default.args.bidTypes }]} />
          }
        />
        <Route
          path="/frontier-airlines/bidtypes"
          element={
            <FABidTypesPage pilot={[{ ...BidTypes.Default.args.bidTypes }]} />
          }
        />
        <Route
          path="/ups/bidtypes"
          element={
            <UPBidTypesPage pilot={[{ ...BidTypes.Default.args.bidTypes }]} />
          }
        />
        <Route
          path="/american-airlines/pilots"
          element={
            <AAPilotsPage pilots={[{ ...pilotTypes.Default.args.pilots }]} />
          }
        />
        <Route
          path="/alaska-airlines/pilots"
          element={
            <ASPilotsPage pilots={[{ ...pilotTypes.Default.args.pilots }]} />
          }
        />
        <Route
          path="/frontier-airlines/pilots"
          element={
            <FAPilotsPage pilots={[{ ...pilotTypes.Default.args.pilots }]} />
          }
        />
        <Route
          path="/ups/pilots"
          element={
            <UPPilotsPage pilots={[{ ...pilotTypes.Default.args.pilots }]} />
          }
        />
      </Routes>

      <FooterView />
      {/* <HeaderView />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
        <Route path="/american-airlines/pilots" component={AAPilotsPage} />
      </Routes>
    </div> */}
    </>
  );
}

export default App;
