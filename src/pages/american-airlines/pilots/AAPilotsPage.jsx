import React from "react";
import PropTypes from "prop-types";
import { PilotsListView } from "../../../components/PilotsListView/PilotsListView";

export function AAPilotsPage({ pilots }) {
  return (
    <>
      <PilotsListView pilots={pilots} />
    </>
  );
}

AAPilotsPage.propTypes = {
  pilots: PropTypes.any,
};

export default AAPilotsPage;
