import React from "react";
import { UPBidTypesPage } from "./UPBidTypesPage";

import { Provider } from "react-redux";

export default {
  title: "Pages/UPBidTypesPage",
  component: UPBidTypesPage,
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
    <UPBidTypesPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
