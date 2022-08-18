import React from "react";

import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View component that displays navbar with dropdowns
 */
export function NavBarView({ navBarView }) {
  return (
    <div className="collapse navbar-collapse justify-content-end"
    id="navbarSupportedContent">
      <ul className="navbar-nav">
        {navBarView?.map(function (airline, i) {
          return (
            <li key={i}>
              <NavBarDropDownView
                airlineName={airline.airlineName}
                bidTypesPath={airline.bidTypesPath}
                pilotsPath={airline.pilotsPath}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// NavBarView.propTypes = {
//   navBarView: PropTypes.arrayOf.shape({
//     id: PropTypes.any,
//     airlineName: PropTypes.string,
//     map: PropTypes.any,
//   }),
// };
