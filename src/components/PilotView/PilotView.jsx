import React from "react";
import PropTypes from "prop-types";
import { ImLocation } from "react-icons/im";

export function PilotView({
  pilots: {
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
