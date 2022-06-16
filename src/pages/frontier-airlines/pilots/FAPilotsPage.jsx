import React from "react";

import { PilotsListView } from "../../../components/PilotsListView/PilotsListView";

export function FAPilotsPage() {
  return (
    <>
      <PilotsListView airline="FA" pilots={[]} />
    </>
  );
}

export default FAPilotsPage;
