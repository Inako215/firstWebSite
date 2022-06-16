import React from "react";
import PropTypes from "prop-types";
import { ImLocation } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { BsFillPencilFill } from "react-icons/bs";

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
}) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 col-md-4 text-center">
            <img className="rounded-circle img-fluid" src={"/" + photo} />
            <p>
              {seat} {fleet} <br /> {domicile}
            </p>
          </div>
          <div className="col-sm-10 col-md-8">
            <h4>
              {nameFirst} {nameLast}
            </h4>
            <div className="text-start">
              <ImLocation /> {trainingFacility} <br />
              <span className="fw-bold">
                <br /> {company} <br />
              </span>
              <p>
                {address1} <br />
                {address2} <br />
                {city} {state} {postalCode}
                <br />
                P: {areaCode}-{prefix}-{suffix}
              </p>
              <div className="row">
              <button className="btn btn2 rounded-3 m-1">
                Add <TiPlus />
              </button>
              <button className="btn btn2 rounded-3 m-1">
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
