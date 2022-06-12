import React from "react";
import { AABidTypesPage } from "./AABidTypesPage";
import * as BidTypes from "../../../components/BidTypeView/BidTypeView.stories";

export default {
  title: "Pages/AABidTypesPage",
  component: AABidTypesPage,
};

const Template = (args) => <AABidTypesPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  pilot: [
    { ...BidTypes.Default.args.pilot, id: "1", bidTypes: "CAPTAIN ANC 73G" },
    { ...BidTypes.Default.args.pilot, id: "2", bidTypes: "CAPTAIN LAX 73G" },
    { ...BidTypes.Default.args.pilot, id: "3", bidTypes: "CAPTAIN PDX 73G" },
    { ...BidTypes.Default.args.pilot, id: "4", bidTypes: "CAPTAIN SEA 73G" },
    {
      ...BidTypes.Default.args.pilot,
      id: "5",
      bidTypes: "FIRST OFFICER ANC 73G",
    },
    {
      ...BidTypes.Default.args.pilot,
      id: "6",
      bidTypes: "FIRST OFFICER LAX 73G",
    },
  ],
};

export const Importing = Template.bind({});
Importing.args = {
  pilot: [
    { ...BidTypes.Default.args.pilot, id: "1", bidTypes: "CAPTAIN ANC 73G" },
    {
      ...BidTypes.Default.args.pilot,
      id: "2",
      bidTypes: "CAPTAIN LAX 73G",
      status: "IMPORTING",
    },
    { ...BidTypes.Default.args.pilot, id: "3", bidTypes: "CAPTAIN PDX 73G" },
    { ...BidTypes.Default.args.pilot, id: "4", bidTypes: "CAPTAIN SEA 73G" },
    {
      ...BidTypes.Default.args.pilot,
      id: "5",
      bidTypes: "FIRST OFFICER ANC 73G",
    },
    {
      ...BidTypes.Default.args.pilot,
      id: "6",
      bidTypes: "FIRST OFFICER LAX 73G",
    },
  ],
};
