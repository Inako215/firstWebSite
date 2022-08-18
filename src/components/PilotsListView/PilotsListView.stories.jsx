import React from "react";
import { PilotsListView } from "./PilotsListView";
import * as pilotTypes from "../PilotView/PilotView.stories";

import { Provider } from "react-redux";

export default {
  title: "Components/PilotsListView",
  component: PilotsListView,
};

const store = {
  getState: () => {
    return {
      pilots: [],
    };
  },
  subscribe: () => 0,
};

const Template = (args) => (
  <Provider store={store}>
    <PilotsListView {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  pilots: [
    { ...pilotTypes.Default.args.pilots },
    {
      ...pilotTypes.Default.args.pilots,
      nameFirst: "Alex",
      nameLast: "Johnathan",
    },
    {
      ...pilotTypes.Default.args.pilots,
      nameFirst: "Monica",
    },
    {
      ...pilotTypes.Default.args.pilots,
      nameFirst: "Michael",
      nameLast: "Zimber",
      seat: "FO",
      fleet: "737",
    },
    {
      ...pilotTypes.Default.args.pilots,
      nameFirst: "Sandra",
      seat: "FO",
      fleet: "737",
    },
    {
      ...pilotTypes.Default.args.pilots,
      nameFirst: "Janet",
      nameLast: "Carton",
      seat: "FO",
      fleet: "737",
    },
  ],
};
