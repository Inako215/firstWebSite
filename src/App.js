import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/index";
import FooterView from "./components/FooterView/index";
import HeaderView from "./components/HeaderView/index";
import AABidTypesPage from "./pages/american-airlines/bidtypes/index";
import * as BidTypes from "./components/BidTypeView/BidTypeView.stories";
import * as pilotTypes from "./components/PilotView/PilotView.stories";
import AAPilotsPage from "./pages/american-airlines/pilots/AAPilotsPage";
import alexJohnathan from "./public/images/alex-johnathan.jpeg";
import janetCarton from "./public/images/janet-carton.jpeg";
import michaelZimber from "./public/images/michael-zimber.jpeg";
import monicaSmith from "./public/images/monica-smith.jpeg";
import sandraSmith from "./public/images/sandra-smith.jpeg";

function App() {
  return (
    <>
      <HeaderView />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/american-airlines/bidtypes"
          element={
            <AABidTypesPage
              pilot={[
                { ...BidTypes.Default.args.pilot },
                {
                  ...BidTypes.Default.args.pilot,
                  id: "2",
                  bidTypes: "CAPTAIN LAX 73G",
                },
                {
                  ...BidTypes.Default.args.pilot,
                  id: "3",
                  bidTypes: "CAPTAIN PDX 73G",
                },
                {
                  ...BidTypes.Default.args.pilot,
                  id: "4",
                  bidTypes: "CAPTAIN SEA 73G",
                },
                {
                  ...BidTypes.Default.args.pilot,
                  id: "5",
                  bidTypes: "FIRST OFFICER ANC 73G",
                },
                {
                  ...BidTypes.Default.args.pilot,
                  id: "6",
                  bidTypes: "FIRST OFFICER LAX 73G",
                },
              ]}
            />
          }
        />
        <Route
          path="/american-airlines/pilots"
          element={
            <AAPilotsPage
              pilots={[
                { ...pilotTypes.Default.args.pilot },
                {
                  ...pilotTypes.Default.args.pilot,
                  photo: alexJohnathan,
                  name: "Alex Johnathan",
                },
                {
                  ...pilotTypes.Default.args.pilot,
                  photo: monicaSmith,
                  name: "Monica Smith",
                },
                {
                  ...pilotTypes.Default.args.pilot,
                  photo: michaelZimber,
                  name: "Michael Zimber",
                  title: "FO 737",
                },
                {
                  ...pilotTypes.Default.args.pilot,
                  photo: sandraSmith,
                  name: "Sandra Smith",
                  title: "FO 737",
                },
                {
                  ...pilotTypes.Default.args.pilot,
                  photo: janetCarton,
                  name: "Janet Carton",
                  title: "FO 737",
                },
              ]}
            />
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
