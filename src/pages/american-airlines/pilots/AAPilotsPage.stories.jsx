import React from "react";
import { AAPilotsPage } from "./AAPilotsPage";
import * as pilotTypes from "../../../components/PilotView/PilotView.stories";
import alexJohnathan from "../../../public/alex-johnathan.jpeg";
import janetCarton from "../../../public/janet-carton.jpeg";
import michaelZimber from "../../../public/michael-zimber.jpeg";
import monicaSmith from "../../../public/monica-smith.jpeg";
import sandraSmith from "../../../public/sandra-smith.jpeg";

export default {
  title: "Pages/AAPilotsPage",
  component: AAPilotsPage,
};

const Template = (args) => <AAPilotsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  pilots: [
    { ...pilotTypes.Default.args.pilot },
    {
      ...pilotTypes.Default.args.pilot,
      photo: alexJohnathan,
      name: "Alex Johnathan",
    },
    {
      ...pilotTypes.Default.args.pilot,
      photo: monicaSmith,
      name: "Monica Smith",
    },
    {
      ...pilotTypes.Default.args.pilot,
      photo: michaelZimber,
      name: "Michael Zimber",
      title: "FO 737",
    },
    {
      ...pilotTypes.Default.args.pilot,
      photo: sandraSmith,
      name: "Sandra Smith",
      title: "FO 737",
    },
    {
      ...pilotTypes.Default.args.pilot,
      photo: janetCarton,
      name: "Janet Carton",
      title: "FO 737",
    },
  ],
};
