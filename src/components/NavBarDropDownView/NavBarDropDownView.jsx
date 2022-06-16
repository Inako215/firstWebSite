import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <Link className="dropdown-item" to={bidTypesPath}>
                BidTypes
              </Link>
            </li>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to={pilotsPath}>
              Pilots
            </Link>
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
