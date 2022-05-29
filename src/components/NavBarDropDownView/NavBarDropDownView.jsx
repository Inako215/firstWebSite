import React from "react";
import PropTypes from "prop-types";

/**
 * Interactive component that displays the dropdown menu for the airlines
 */
export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    <nav>
      <div className="dropdown customNav d-inline-block">
        <button
          className="btn dropdown-toggle btnText btnHover"
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
          <a className="dropdown-item" href={pilotsPath}>
            Pilots
          </a>
        </ul>
      </div>
    </nav>
  );
}

NavBarDropDownView.propTypes = {
  airlineName: PropTypes.string,
  bidTypesPath: PropTypes.string,
  pilotsPath: PropTypes.string,
};
