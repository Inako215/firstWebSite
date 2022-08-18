import React from "react";

import { BidTypeListView } from "../../../components/BidTypeListView/BidTypeListView";

export function FABidTypesPage() {
  return (
    <>
      <div className="container-fluid">
        <h1>Frontier Airlines - BidTypes</h1>
        <BidTypeListView airline="FA" bidTypes={[]} />
      </div>
    </>
  );
}

export default FABidTypesPage;
