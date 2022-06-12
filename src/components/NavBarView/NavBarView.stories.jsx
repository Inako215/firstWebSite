import React from "react";
import { NavBarView } from "./NavBarView";

export default {
  title: "Components/NavBarView",
  component: NavBarView,
};

const Template = (args) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-light py-0">
    <div className="container-fluid ps-0">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavBarView {...args} />
    </div>
  </nav>
);

export const ExampleWithNavBar = Template.bind({});
ExampleWithNavBar.args = {
  navBarView: [
    {
      id: 1,
      airlineName: "American Airlines",
      bidTypesPath: "american-airlines/bidtypes",
      pilotsPath: "/american-airlines/pilots",
    },
    {
      id: 2,
      airlineName: "Alaska Airlines",
      bidTypesPath: "alaska-airlines/bidtypes",
      pilotsPath: "/alaska-airlines/pilots",
    },
    {
      id: 3,
      airlineName: "Frontier Airlines",
      bidTypesPath: "frontier-airlines/bidtypes",
      pilotsPath: "/frontier-airlines/pilots",
    },
    {
      id: 4,
      airlineName: "UPS",
      bidTypesPath: "ups-airlines/bidtypes",
      pilotsPath: "/ups-airlines/pilots",
    },
  ],
  //   americanAirlines: (
  //     <NavBarDropDownView
  //       airlineName="American Airlines"
  //       bidTypesPath="american-airlines/bid-types"
  //       pilotsPath="american-airlines/pilots"
  //     />
  //   ),
  //   alaskaAirlines: (
  //     <NavBarDropDownView
  //       airlineName="Alaska Airlines"
  //       bidTypesPath="alaska-airlines/bid-types"
  //       pilotsPath="alaska-airlines/pilots"
  //     />
  //   ),
  //   frontierAirlines: (
  //     <NavBarDropDownView
  //       airlineName="Frontier Airlines"
  //       bidTypesPath="frontier-airlines/bid-types"
  //       pilotsPath="frontier-airlines/pilots"
  //     />
  //   ),
  //   ups: (
  //     <NavBarDropDownView
  //       airlineName="UPS"
  //       bidTypesPath="ups-airlines/bid-types"
  //       pilotsPath="ups-airlines/pilots"
  //     />
  //   ),
  // },
};
