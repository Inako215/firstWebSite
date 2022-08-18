import React from "react";
import { ASBidTypesPage } from "./ASBidTypesPage";

import { Provider } from "react-redux";

export default {
  title: "Pages/ASBidTypesPage",
  component: ASBidTypesPage,
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
    <ASBidTypesPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
