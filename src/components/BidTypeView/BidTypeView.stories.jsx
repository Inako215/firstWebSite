import React from "react";
import { BidTypeView } from "./BidTypeView";
import { ImCloudDownload } from "react-icons/im";
import { BiChevronsRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

export default {
  title: "Components/BidTypeView",
  component: BidTypeView,
};

const Template = (args) => <BidTypeView {...args} />;

export const Default = Template.bind({});
Default.args = {
  pilots: {
    id: 1,
    bidTypes: "CAPTAIN ANC 73G",
    status: "Current",
    bidPeriods: "1",
    lastImport: " Nov 1 2017 12:00AM",
  },
  buttons: {
    button1: {
      text: "Retry Import",
      symbol: <ImCloudDownload />,
    },
    button2: {
      text: "Bid Periods",
      symbol: <BiChevronsRight />,
    },
    button3: {
      text: "Import History",
      symbol: <BiChevronsRight />,
    },
    button4: {
      text: "Delete",
      symbol: <FaTimes />,
    },
    button5: {
      text: "Cancel",
    },
  },
};

export const Importing = Template.bind({});
Importing.args = {
  pilots: {
    ...Default.args.pilots,
    status: "IMPORTING",
  },
  buttons: {
    ...Default.args.buttons,
  },
};
