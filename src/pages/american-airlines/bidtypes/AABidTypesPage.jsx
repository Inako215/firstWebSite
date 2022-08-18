import React from "react";

import { BidTypeListView } from "../../../components/BidTypeListView/BidTypeListView";

export function AABidTypesPage() {
  return (
    <>
      <div className="container-fluid">
        <h1>American Airlines - BidTypes</h1>
        <BidTypeListView airline="AA" bidTypes={[]} />
      </div>
    </>
  );
}

export default AABidTypesPage;
