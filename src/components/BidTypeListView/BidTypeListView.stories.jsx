import React from "react";
import { BidTypeListView } from "./BidTypeListView";
import * as BidTypes from "../BidTypeView/BidTypeView.stories";

export default {
  title: "Components/BidTypeListView",
  component: BidTypeListView,
};

const Template = (args) => <BidTypeListView {...args} />;

export const Default = Template.bind({});
Default.args = {
  pilots: [
    { ...BidTypes.Default.args.pilots, id: "1", bidTypes: "CAPTAIN ANC 73G" },
    { ...BidTypes.Default.args.pilots, id: "2", bidTypes: "CAPTAIN LAX 73G" },
    { ...BidTypes.Default.args.pilots, id: "3", bidTypes: "CAPTAIN PDX 73G" },
    { ...BidTypes.Default.args.pilots, id: "4", bidTypes: "CAPTAIN SEA 73G" },
    {
      ...BidTypes.Default.args.pilots,
      id: "5",
      bidTypes: "FIRST OFFICER ANC 73G",
    },
    {
      ...BidTypes.Default.args.pilots,
      id: "6",
      bidTypes: "FIRST OFFICER LAX 73G",
    },
  ],
  buttons: { ...BidTypes.Default.args.buttons },
};
