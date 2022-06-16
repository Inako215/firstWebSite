import React from "react";
import { FABidTypesPage } from "./FABidTypesPage";

import { Provider } from "react-redux";

export default {
  title: "Pages/FABidTypesPage",
  component: FABidTypesPage,
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
    <FABidTypesPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
