import React from "react";
import { BidTypeView } from "./BidTypeView";

export default {
  title: "Components/BidTypeView",
  component: BidTypeView,
};

const Template = (args) => <BidTypeView {...args} />;

export const Default = Template.bind({});
Default.args = {
  bidTypes: {
    id: 1,
    seat: "CAPTAIN",
    domicile: "ANC",
    fleet: "73G",
    status: "Current",
    numOfBidPeriods: "3",
    lastImported: " Nov 1 2017 12:00AM",
  },
};
