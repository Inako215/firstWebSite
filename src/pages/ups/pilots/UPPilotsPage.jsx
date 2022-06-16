import React from "react";

import { PilotsListView } from "../../../components/PilotsListView/PilotsListView";

export function UPPilotsPage() {
  return (
    <>
      <PilotsListView airline="UP" pilots={[]} />
    </>
  );
}

export default UPPilotsPage;
