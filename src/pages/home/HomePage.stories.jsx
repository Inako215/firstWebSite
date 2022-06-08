import React from "react";
import { HeaderView } from "../../components/HeaderView/HeaderView";
import { LogoView } from "../../components/LogoView/LogoView";
import { NavBarView } from "../../components/NavBarView/NavBarView";
import { HomePage } from "../home/HomePage";
import { JumbotronView } from "../../components/JumbotronView/JumbotronView";
import { AdministrationView } from "../../components/AdministrationView/AdministrationView";
import { VersionView } from "../../components/VersionView/VersionView";
import { FooterView } from "../../components/FooterView/FooterView";

export default {
  title: "Pages/HomePage",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerView: (
    <HeaderView
      logoView={<LogoView />}
      navMenus={
        <NavBarView
          navBarView={[
            {
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
            },
            {
              id: 3,
              airlineName: "Frontier Airlines",
              bidTypesPath: "frontier-airlines/bidtypes",
              pilotsPath: "frontier-airlines/pilots",
            },
            {
              id: 4,
              airlineName: "UPS",
              bidTypesPath: "ups-airlines/bidtypes",
              pilotsPath: "ups-airlines/pilots",
            },
          ]}
        />
      }
    />
  ),

  jumbotronView: (
    <JumbotronView
      administrationView={<AdministrationView name="Someone" />}
      versionView={<VersionView current="1.0.0" />}
    />
  ),

  airlineView: [
    {
      id: 1,
      name: "American Airlines",
      path: "american-airlines/bidtypes",
    },
    {
      id: 2,
      name: "Alaska Airlines",
      path: "alaska-airlines/bidtypes",
    },
    {
      id: 3,
      name: "Frontier Airlines",
      path: "frontier-airlines/bidtypes",
    },
    {
      id: 4,
      name: "UPS",
      path: "ups/bidtypes",
    },
  ],

  footerView: <FooterView />,
};
