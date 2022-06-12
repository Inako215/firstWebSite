import React from "react";
import { BidTypeView } from "./BidTypeView";

export default {
  title: "Components/BidTypeView",
  component: BidTypeView,
};

const Template = (args) => <BidTypeView {...args} />;

export const Default = Template.bind({});
Default.args = {
  pilot: {
    id: "1",
    bidTypes: "CAPTAIN ANC 73G",
    status: "Current",
    bidPeriods: "1",
    lastImport: " Nov 1 2017 12:00AM",
  },
};

export const Importing = Template.bind({});
Importing.args = {
  pilot: {
    ...Default.args.pilot,
    status: "IMPORTING",
  },
};
