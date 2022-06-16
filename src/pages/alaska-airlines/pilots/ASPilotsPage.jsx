import React from "react";

import { PilotsListView } from "../../../components/PilotsListView/PilotsListView";

export function ASPilotsPage() {
  return (
    <>
      <PilotsListView airline="AS" pilots={[]} />
    </>
  );
}

export default ASPilotsPage;
