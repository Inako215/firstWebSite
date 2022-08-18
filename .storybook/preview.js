import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/styles.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypeRegex: "^on[A-Z.*" },
};
