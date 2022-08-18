import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImLocation } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { PilotUpdateView } from "../PilotUpdateView/PilotUpdateView";

export function PilotView({
  pilots: {
    id,
    photo,
    seat,
    fleet,
    domicile,
    nameFirst,
    nameLast,
    trainingFacility,
    company,
    address1,
    address2,
    city,
    state,
    postalCode,
    areaCode,
    prefix,
    suffix,
  },
  onDeletePilot,
  setIsUpdating,
}) {
  return (
    <>
      <div className="container-fluid">
        <div className={`d-flex row justify-content-center`}>
          <div className="col-8 col-md-4 text-center">
            <img className="rounded-circle img-fluid" src={"/" + photo} />
            <p>
              {seat} {fleet} <br /> {domicile}
            </p>
            id= {id}
          </div>
          <div className="col-12 col-md-8 text-center text-md-start">
            <h4>
              {nameFirst} {nameLast}
            </h4>
            <div className="text-md-start">
              <ImLocation /> {trainingFacility} <br />
              <span className="fw-bold">
                <br /> {company} <br />
              </span>
              <p>
                {address1} <br />
                {address2} <br />
                {city} {state} {postalCode}
                <br />
                P: ({areaCode})-{prefix}-{suffix}
              </p>
              <div className="d-flex row justify-content-evenly justify-content-md-start">
                <button
                  className={`btn pbtn2 rounded-3 m-1`}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#myUpdateModal"
                  onClick={setIsUpdating}
                >
                  Edit <BsFillPencilFill />
                </button>
                <button
                  className="btn btn3 rounded-3 m-1"
                  onClick={() => onDeletePilot({ id })}
                >
                  Delete <FaTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PilotView.propTypes = {
  pilots: PropTypes.object,
};