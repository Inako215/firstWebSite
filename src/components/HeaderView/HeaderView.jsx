import React from "react";
import PropTypes from "prop-types";

/**
 * View component that displays a navbar
 */

export function HeaderView({ logoView, navMenus }) {
  return (
    <nav className="navbar customNav py-0">
      <ul className="nav container-fluid">
        <li>{logoView}</li>
        <li>{navMenus}</li>
      </ul>
    </nav>
  );
}

HeaderView.propTypes = {
  logoView: PropTypes.any,
  navMenus: PropTypes.any,
};
