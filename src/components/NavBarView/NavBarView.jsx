import React from "react";
import PropTypes from "prop-types";

/**
 * View component that displays navbar with dropdowns
 */
export function NavBarView({ navBarView }) {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <ul className="nav">
          <li className="nav-item dropdown">{navBarView.americanAirlines}</li>
          <li className="nav-item dropdown">{navBarView.alaskaAirlines}</li>
          <li className="nav-item dropdown">{navBarView.frontierAirlines}</li>
          <li className="nav-item dropdown">{navBarView.ups}</li>
        </ul>
      </nav>
    </div>
  );
}

NavBarView.propTypes = {
  navBarView: PropTypes.shape({
    americanAirlines: PropTypes.object,
    alaskaAirlines: PropTypes.object,
    frontierAirlines: PropTypes.object,
    ups: PropTypes.object,
  }),
};
