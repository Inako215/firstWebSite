import React from "react";

import { LogoView } from "../LogoView/LogoView";
import { NavBarView } from "../NavBarView/NavBarView";

/**
 * View component that displays a navbar
 */

export function HeaderView() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light py-0">
      <div className="container-fluid ps-0">
        <LogoView />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavBarView
          navBarView={[
            {
              airlineName: "American Airlines",
              bidTypesPath: "american-airlines/bidtypes",
              pilotsPath: "american-airlines/pilots",
            },
            {
              airlineName: "Alaska Airlines",
              bidTypesPath: "alaska-airlines/bidtypes",
              pilotsPath: "alaska-airlines/pilots",
            },
            {
              airlineName: "Frontier Airlines",
              bidTypesPath: "frontier-airlines/bidtypes",
              pilotsPath: "frontier-airlines/pilots",
            },
            {
              airlineName: "UPS",
              bidTypesPath: "ups-airlines/bidtypes",
              pilotsPath: "ups-airlines/pilots",
            },
          ]}
        />
      </div>
    </nav>
  );
}
