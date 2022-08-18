import React, { useState } from "react";
import PropTypes from "prop-types";
import { TiPlus } from "react-icons/ti";
import { PilotView } from "../PilotView/PilotView";

import { useDispatch, useSelector } from "react-redux";
import {
  selectPilots,
  deletePilot,
  addPilot,
  editPilot,
} from "../../redux/pilotsSlice";
import { PilotAddView } from "../PilotAddView/PilotAddView";
import { PilotUpdateView } from "../PilotUpdateView/PilotUpdateView";

export function PilotsListView({ airline, company, pilots, id }) {
  const storedPilots = useSelector(selectPilots);
  if (storedPilots && storedPilots.length > 0) {
    pilots = storedPilots.filter((pilot) => pilot.airline === airline);
  }
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [state, setState] = useState({});

  const selectedPilots = useSelector(selectPilots);
  id = storedPilots.filter((pilot) => pilot.id === pilots.id);

  const filtered = pilots.filter((pilots) => {
    return pilots.id;
  });

  const dispatch = useDispatch();
  const events = {
    onDeletePilot: (pilots) => dispatch(deletePilot(pilots)),
    onEditPilot: (pilots) => dispatch(editPilot(pilots)),
  };

  const addEvent = {
    onAddPilot: (pilots) => dispatch(addPilot(pilots)),
  };

  const addCancelButtonClicked = () => {
    setIsAdding(!isAdding);
  };

  console.log({ id });

  return (
    <>
      <div className="container-fluid backg pt-2">
        <div className="banner">
          <div className="d-flex justify-content-lg-start justify-content-center display-5 mx-3">
            Pilots
          </div>
          <div className="flex-row mx-2">
            <div className="d-flex flex-col-lg-10 flex-col-8 pt-3 justify-content-lg-start justify-content-center ">
              Home / App Views / Contacts
            </div>
            <div className="d-flex flex-col-lg-2 justify-content-center justify-content-lg-end">
              <button
                className="btn btn2 rounded-3 m-1 mb-2"
                onClick={addCancelButtonClicked}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Add <TiPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {pilots.map((pilot) => (
            <div className="col-12 col-md-6 col-lg-4 p-3" key={pilot.id}>
              <div className="banner card">
                <div className="card-body">
                  <PilotView
                    pilots={pilot}
                    {...events}
                    setIsUpdating={setIsUpdating}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className={isAdding ? "" : "d-none"}>
            <PilotAddView
              key={pilots.id}
              airline={airline}
              company={company}
              {...addEvent}
              setIsAdding={setIsAdding}
            />
          </div>
          <div className={isUpdating ? "" : "d-none"}>
            <PilotUpdateView
              id={id}
              {...events}
              setIsUpdating={setIsUpdating}
              pilot={pilots}
            />
          </div>
        </div>
      </div>
    </>
  );
}

PilotsListView.propTypes = {
  pilots: PropTypes.any,
  airline: PropTypes.any,
};
