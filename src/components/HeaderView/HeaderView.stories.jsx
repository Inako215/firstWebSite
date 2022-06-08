import React from "react";
import { LogoView } from "../LogoView/LogoView";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";
import { NavBarView} from "../NavBarView/NavBarView";
import { HeaderView } from "./HeaderView";


export default {
  title: "Components/HeaderView",
  component: HeaderView,
  subcomponents: {NavBarDropDownView}
};

const Template = (args) => <HeaderView {...args} />;

export const ExampleWithNavAndLogo = Template.bind({});
ExampleWithNavAndLogo.args = {
  logoView: <LogoView />,
  navMenus: <NavBarView navBarView={[ {
    id: 1,
    airlineName: "American Airlines",
    bidTypesPath: "american-airlines/bidtypes",
    pilotsPath: "american-airlines/pilots",
  },
  {
    id: 2,
    airlineName: "Alaska Airlines",
    bidTypesPath: "alaska-airlines/bidtypes",
    pilotsPath: "alaska-airlines/pilots",
  },{
    id: 3,
    airlineName: "Frontier Airlines",
    bidTypesPath: "frontier-airlines/bidtypes",
    pilotsPath: "frontier-airlines/pilots",
  },{
    id: 4,
    airlineName: "UPS",
    bidTypesPath: "ups-airlines/bidtypes",
    pilotsPath: "ups-airlines/pilots",
  },
]}/>,
};
