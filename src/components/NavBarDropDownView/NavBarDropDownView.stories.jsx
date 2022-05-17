import React from "react";
import { NavBarDropDownView } from "./NavBarDropDownView";

export default {
  title: "Interactive Components/NavBarDropDownView",
  component: NavBarDropDownView,
};

const Template = (args) => <NavBarDropDownView {...args} />;

export const ExampleWithDropDownNavBar = Template.bind({});
ExampleWithDropDownNavBar.args = {
  airlineName: "American Airlines",
  bidTypesPath: "/american-airlines/bid-types",
  pilotsPath: "/american-airlines/pilots",
};
