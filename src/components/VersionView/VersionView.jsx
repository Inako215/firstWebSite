import React from "react";
import PropTypes from "prop-types";

/**
 *  View coponent that displays the version
 */

export function VersionView({ version }) {
  return (
    <div className="col-sm-12 col-lg text-center">
      <h1 className="display-3">{version.current}</h1>
      <p className="text-muted">Version</p>
    </div>
  );
}

VersionView.proptypes = {
  version: PropTypes.shape({
    current: PropTypes.string,
  }).isRequired,
};
