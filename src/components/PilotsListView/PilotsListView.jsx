import React from "react";
import PropTypes from "prop-types";
import { PilotView } from "../PilotView/PilotView";

import { useSelector } from "react-redux";
import { selectPilots } from "../../redux/pilotsSlice";

export function PilotsListView({ airline, pilots }) {
  const storedPilots = useSelector(selectPilots);
  if (storedPilots && storedPilots.length > 0) {
    pilots = storedPilots.filter((pilot) => pilot.airline === airline);
  }
  return (
    <>
      <div className="container-fluid backg pt-2">
        <div className="row banner">
          <div className="col-sm-12">
            <p className="display-5">Pilots</p>
            <p>
              Home / App Views / <span className="fw-bold">Contacts</span>
            </p>
          </div>
        </div>
        <div className="row">
          {pilots.map(function (pilots) {
            return (
              <>
                <div className="col-4 p-3">
                  <div className="banner card">
                      <div className="card-body">
                    <PilotView pilots={pilots} />
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
}