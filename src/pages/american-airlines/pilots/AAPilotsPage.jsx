import React from "react";

import { PilotsListView } from "../../../components/PilotsListView/PilotsListView";

export function AAPilotsPage() {
  return (
    <>
      <PilotsListView airline ="AA" pilots={[]} />
    </>
  );
}

export default AAPilotsPage;
