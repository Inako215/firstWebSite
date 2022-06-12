import React from "react";

import { BidTypeListView } from "../../../components/BidTypeListView/BidTypeListView";

export function AABidTypesPage({ pilot }) {
  return (
    <>
      <div className="container-fluid">
        <h1>American Airlines - BidTypes</h1>
        <BidTypeListView
          pilot={pilot}
            />
      </div>
    </>
  );
}

export default AABidTypesPage;
