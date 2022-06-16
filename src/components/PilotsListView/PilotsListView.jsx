import React from "react";
import PropTypes from "prop-types";
import { PilotView } from "../PilotView/PilotView";

import { useDispatch, useSelector } from "react-redux";
import { selectPilots, deletePilot } from "../../redux/pilotsSlice";

export function PilotsListView({ airline, pilots, }) {
  const storedPilots = useSelector(selectPilots);
  if (storedPilots && storedPilots.length > 0) {
    pilots = storedPilots.filter((pilot) => pilot.airline === airline);
  }

  const dispatch = useDispatch();
  const events = {
    onDeletePilot: (pilots) => dispatch(deletePilot(pilots)),
  };


  return (
    <>
      <div className="container-fluid backg pt-2">
        <div className="banner">
            <div className="display-5">Pilots</div>
            <div className="row">
            <div className="col-sm-8">
              Home / App Views / <span className="fw-bold">Contacts</span>
            </div>
          </div>
        </div>
        <div className="row">
          {pilots.map(function (pilots) {
            return (
              <>
                <div className="col-4 p-3">
                  <div className="banner card">
                    <div className="card-body">
                      <PilotView pilots={pilots} {...events}/>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

PilotsListView.propTypes = {
  pilots: PropTypes.any,
  airline: PropTypes.any,
};
