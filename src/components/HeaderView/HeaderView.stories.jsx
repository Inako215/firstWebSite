import React from "react";
import { HeaderView } from "./HeaderView";

export default {
  title: "Components/HeaderView",
  component: HeaderView,
};

const Template = (args) => <HeaderView {...args} />;

export const ExampleWithNavAndLogo = Template.bind({});
