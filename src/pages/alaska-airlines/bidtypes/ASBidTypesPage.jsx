import React from "react";

import { BidTypeListView } from "../../../components/BidTypeListView/BidTypeListView";

export function ASBidTypesPage() {
  return (
    <>
      <div className="container-fluid">
        <h1>Alaska Airlines - BidTypes</h1>
        <BidTypeListView airline="AS" bidTypes={[]} />
      </div>
    </>
  );
}

export default ASBidTypesPage;
