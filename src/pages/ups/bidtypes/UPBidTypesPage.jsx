import React from "react";

import { BidTypeListView } from "../../../components/BidTypeListView/BidTypeListView";

export function UPBidTypesPage() {
  return (
    <>
      <div className="container-fluid">
        <h1>UPS - BidTypes</h1>
        <BidTypeListView airline="UP" bidTypes={[]} />
      </div>
    </>
  );
}

export default UPBidTypesPage;
