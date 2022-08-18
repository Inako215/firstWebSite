import React from "react";
import { JumbotronView } from "./JumbotronView";
import { AdministrationView } from "../AdministrationView/AdministrationView";
import { VersionView } from "../VersionView/VersionView";

export default {
  title: "Components/JumbotronView",
  component: JumbotronView,
};

const Template = (args) => <JumbotronView {...args} />;

export const ExampleWithAdminandVersionViews = Template.bind({});
ExampleWithAdminandVersionViews.args = {
  administrationView: <AdministrationView name="Someone" />,
  versionView: <VersionView current="1.1.0" />,
};
