import React from "react";
import PropTypes from "prop-types";
import { ImLocation } from "react-icons/im";

export function PilotView({
  pilot: {
    photo,
    title,
    airport,
    name,
    location,
    company,
    street,
    suite,
    state,
    phone,
  },
}) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 text-center">
            <img className="rounded-circle img-fluid" src={photo} />
            <p>
              {title} <br /> {airport}
            </p>
          </div>
          <div className="col-sm-8">
            <h4>{name}</h4>
            <div className="text-start"
            >
              <ImLocation /> {location} <br />
              <span className="fw-bold">
                <br /> {company} <br />
              </span>
              <p>
                {street} <br />
                {suite} <br />
                {state} <br />
                {phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PilotView.propTypes = {
    pilot: PropTypes.object
}