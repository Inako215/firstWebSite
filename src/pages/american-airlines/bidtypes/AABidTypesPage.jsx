import React from "react";
import PropTypes from "prop-types";
import { BidTypeListView } from "../../../components/BidTypeListView/BidTypeListView";

export function AABidTypesPage({ pilots, buttons }) {
  return (
    <>
      <div className="container-fluid">
        <h1>American Airlines - BidTypes</h1>
        <BidTypeListView pilots={pilots} buttons={buttons} />
      </div>
    </>
  );
}

AABidTypesPage.propTypes = {
  pilots: PropTypes.any,
  buttons: PropTypes.any,
};

export default AABidTypesPage;
