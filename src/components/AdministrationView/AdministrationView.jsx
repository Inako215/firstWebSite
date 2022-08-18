import React from "react";
import PropTypes from "prop-types";

/**
 * View comonent that displayes the administration header with a welcome message
 */
export function AdministrationView({ name }) {
  return (
    <div className="col-12 col-lg-8">
      <h1 className="display-5">ADMINISTRATION</h1>
      <p className="lead">
        Hello {name}! A website dedicated to the administration of Airline data.
      </p>
    </div>
  );
}

AdministrationView.propTypes = {
  name: PropTypes.string,
};
