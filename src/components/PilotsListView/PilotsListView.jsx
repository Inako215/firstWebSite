import React from "react";
import PropTypes from "prop-types";
import { PilotView } from "../PilotView/PilotView";

export function PilotsListView({ pilots }) {
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
          {pilots.map(function (pilot) {
            return (
              <>
                <div className="col-4 p-3">
                  <div className="banner card">
                      <div className="card-body">
                    <PilotView pilot={pilot} />
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
}