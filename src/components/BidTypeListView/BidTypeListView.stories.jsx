import React from "react";
import { BidTypeListView } from "./BidTypeListView";
import * as BidTypes from "../BidTypeView/BidTypeView.stories";

import { Provider } from "react-redux";

export default {
  title: "Components/BidTypeListView",
  component: BidTypeListView,
};

const store = {
  getState: () => {
    return {
      bidTypes: [],
    };
  },
  subscribe: () => 0,
};

const Template = (args) => (
  <Provider store={store}>
    <BidTypeListView {...args} />
  </Provider>
);

export const AmericanAirlines = Template.bind({});
AmericanAirlines.args = {
  airline: "AA",
  bidTypes: [
    { ...BidTypes.Default.args.bidTypes, id: 1 },
    { ...BidTypes.Default.args.bidTypes, id: 2 },
    { ...BidTypes.Default.args.bidTypes, id: 3 },
    { ...BidTypes.Default.args.bidTypes, id: 4 },
    { ...BidTypes.Default.args.bidTypes, id: 5 },
  ],
};

export const AlaskaAirlines = Template.bind({});
AlaskaAirlines.args = {
  airline: "AS",
  bidTypes: [
    { ...BidTypes.Default.args.bidTypes, id: 6 },
    { ...BidTypes.Default.args.bidTypes, id: 7 },
    { ...BidTypes.Default.args.bidTypes, id: 8 },
    { ...BidTypes.Default.args.bidTypes, id: 9 },
  ],
};

export const FrontierAirlines = Template.bind({});
FrontierAirlines.args = {
  airline: "FA",
  bidTypes: [
    { ...BidTypes.Default.args.bidTypes, id: 10 },
    { ...BidTypes.Default.args.bidTypes, id: 11 },
    { ...BidTypes.Default.args.bidTypes, id: 12 },
  ],
};

export const UPS = Template.bind({});
UPS.args = {
  airline: "UP",
  bidTypes: [
    { ...BidTypes.Default.args.bidTypes, id: 13 },
    { ...BidTypes.Default.args.bidTypes, id: 14 },
  ],
};
