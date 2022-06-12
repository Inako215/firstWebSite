import React from "react";
import { PilotView } from "./PilotView";
import johnSmith from "../../public/images/john-smith.jpeg";

export default {
  title: "Components/PilotView",
  component: PilotView,
};

const Template = (args) => <PilotView {...args} />;

export const Default = Template.bind({});
Default.args = {
  pilot: {
    photo: johnSmith,
    title: "CPT 737",
    airport: "GEG",
    name: "John Smith",
    location: "Riviera State 32/106",
    company: "Twitter, Inc.",
    street: "795 Folsom Ave, Suite",
    suite: "600",
    state: "San Fransisco, CA 94107",
    phone: "P:(123) 456-7890",
  },
};
