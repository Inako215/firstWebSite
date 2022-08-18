import React from "react";
import { UPPilotsPage } from "./UPPilotsPage";
import photo from "../../../public/images/stockPhoto.jpeg";

import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";

export default {
  title: "Pages/UPPilotsPage",
  component: UPPilotsPage,
};

const store = {
  getState: () => {
    return {
      pilots: [
        {
          id: 1,
          airline: "AA",
          photo: photo,
          seat: "CPT",
          fleet: "737",
          domicile: "GEG",
          nameFirst: "John",
          nameLast: "Smith",
          trainingFacility: "Riviera State 32/106",
          company: "Twitter, Inc.",
          address1: "795 Folsom Ave",
          address2: " Suite 600",
          city: "San Fransisco,",
          state: "CA",
          postalCode: "94107",
          areaCode: "(123)",
          prefix: "456",
          suffix: "7890",
        },
      ],
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const Template = (args) => (
  <Provider store={store}>
    <UPPilotsPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
