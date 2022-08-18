import React from "react";
import { PilotView } from "./PilotView";
import photo from "../../public/images/stockPhoto.jpeg";

export default {
  title: "Components/PilotView",
  component: PilotView,
};

const Template = (args) => <PilotView {...args} />;

export const Default = Template.bind({});
Default.args = {
  pilots: {
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
};
