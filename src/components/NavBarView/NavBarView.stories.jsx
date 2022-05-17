import React from "react";
import { NavBarView } from "./NavBarView";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

export default {
  title: "Components/NavBarView",
  component: NavBarView,
};

const Template = (args) => <NavBarView {...args} />;

export const ExampleWithNavBar = Template.bind({});
ExampleWithNavBar.args = {
  navBarView: {
    americanAirlines: (
      <NavBarDropDownView
        airlineName="American Airlines"
        bidTypesPath="american-airlines/bid-types"
        pilotsPath="american-airlines/pilots"
      />
    ),
    alaskaAirlines: (
      <NavBarDropDownView
        airlineName="Alaska Airlines"
        bidTypesPath="alaska-airlines/bid-types"
        pilotsPath="alaska-airlines/pilots"
      />
    ),
    frontierAirlines: (
      <NavBarDropDownView
        airlineName="Frontier Airlines"
        bidTypesPath="frontier-airlines/bid-types"
        pilotsPath="frontier-airlines/pilots"
      />
    ),
    ups: (
      <NavBarDropDownView
        airlineName="UPS"
        bidTypesPath="ups-airlines/bid-types"
        pilotsPath="ups-airlines/pilots"
      />
    ),
  },
};
