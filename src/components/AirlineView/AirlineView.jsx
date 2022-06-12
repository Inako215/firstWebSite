import React from "react";
import PropTypes from "prop-types";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { Link } from "react-router-dom";

/**
 * Interactive component that displays the airline section
 */
export function AirlineView({ name, path }) {
  return (
    <div className="col-xs-12 col-sm-6 mt-3">
      <h1>{name}</h1>
      <p>
        View the monthly bid data, import history &amp; download statistics.
      </p>
      <Link to={path} className="btn btn-outline-dark">
        <BsBoxArrowUpRight/> View
      </Link>
    </div>
  );
}

AirlineView.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};
