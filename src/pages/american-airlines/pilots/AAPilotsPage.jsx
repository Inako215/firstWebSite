import React from "react";

import { PilotsListView } from "../../../components/PilotsListView/PilotsListView";

export function AAPilotsPage({ pilots }) {
  return (
    <>
      <PilotsListView pilots={pilots} />
    </>
  );
}

export default AAPilotsPage;
