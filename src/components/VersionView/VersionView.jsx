import React from "react";
import PropTypes from "prop-types";

/**
 *  View coponent that displays the version of the application
 */

export function VersionView({ current }) {
  return (
    <div className="col-xs-6 col-lg-4 text-center">
      <h1 className="display-3">{current}</h1>
      <p className="text-muted">Version</p>
    </div>
  );
}

VersionView.proptypes = {
  current: PropTypes.string,
};
