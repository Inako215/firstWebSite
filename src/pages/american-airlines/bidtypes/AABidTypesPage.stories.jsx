import React from "react";
import { AABidTypesPage } from "./AABidTypesPage";

import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";

export default {
  title: "Pages/AABidTypesPage",
  component: AABidTypesPage,
};

const store = {
  getState: () => {
    return {
      bidTypes: [
        {
          id: "1",
          airline: "AA",
          seat: "CAPTAIN",
          domicile: "ANC",
          fleet: "73G",
          status: "Current",
          numOfBidPeriods: "3",
          lastImported: `${new Date()}`,
        },
        {
          id: "2",
          airline: "AA",
          seat: "CAPTAIN",
          domicile: "ANC",
          fleet: "73G",
          status: "Current",
          numOfBidPeriods: "3",
          lastImported: `${new Date()}`,
        },
      ],
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const Template = (args) => (
  <Provider store={store}>
    <AABidTypesPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
