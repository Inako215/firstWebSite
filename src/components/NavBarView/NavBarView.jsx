import React from "react";
import PropTypes from "prop-types";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View component that displays navbar with dropdowns
 */
export function NavBarView({ navBarView }) {
  return (
      <nav className="navbar">
        <ul className="nav">
            {navBarView?.map(function (airline) {
              return (
                <li key={airline.id}>
                  <NavBarDropDownView
                    airlineName={airline.airlineName}
                    bidTypesPath={airline.bidTypesPath}
                    pilotsPath={airline.PilotsPath}
                  />
                </li>
              );
            })}
        </ul>
      </nav>
  );
}

NavBarView.propTypes = {
  navBarView: PropTypes.shape({
    id: PropTypes.any,
    airlineName: PropTypes.string,
    map: PropTypes.any,
    // americanAirlines: PropTypes.string,
    // alaskaAirlines: PropTypes.string,
    // frontierAirlines: PropTypes.string,
    // ups: PropTypes.string,
  }),
};
