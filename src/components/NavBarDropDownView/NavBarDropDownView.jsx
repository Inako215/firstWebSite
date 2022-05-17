import React from "react";
import PropTypes from "prop-types";

/**
 * Interactive component that displays the dropdown menu for the airlines
 */
export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    <div className="Dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        {airlineName}
      </button>
      <ul Dropdown className="dropdown-menu">
        <li>
          <a className="dropdown-item" href={bidTypesPath}>
            BidTypes
          </a>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <a className="dropdown-item" href={pilotsPath}>
            Pilots
          </a>
        </li>
      </ul>
    </div>
  );
}

NavBarDropDownView.propTypes = {
  airlineName: PropTypes.string,
  bidTypesPath: PropTypes.string,
  pilotsPath: PropTypes.string,
};
