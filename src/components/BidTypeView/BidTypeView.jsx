import React from "react";
import PropTypes from "prop-types";

import { ImCloudDownload } from "react-icons/im";
import { BiChevronsRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

export function BidTypeView({
  pilot: { id, bidTypes, status, bidPeriods, lastImport },
}) {
  return (
    <>
      <div className="striped">
        <div>
          <div
            className={`row py-2 align-items-center ${
              status === "IMPORTING" ? "status" : ""
            }`}
          >
            <div className="col-sm-1">{id}</div>
            <div className="col-sm-2">{bidTypes}</div>
            <div className="col-sm-2 text-end">{status}</div>
            <div className="col-sm-3 text-center">{bidPeriods}</div>
            <div className="col-sm-2 text-center">{lastImport}</div>
            <div className={`col-sm-2 text-end`}>
              <button
                className={`btn btn1 rounded-3 m-1 ${
                  status === "IMPORTING" ? "d-none" : ""
                }`}
              >
                <ImCloudDownload /> Retry Import
              </button>
              <button
                className={`btn btn2 rounded-3 m-1 ${
                  status === "IMPORTING" ? "d-none" : ""
                }`}
              >
                Bid Periods <BiChevronsRight />
              </button>
              <button
                className={`btn btn2 rounded-3 m-1 ${
                  status === "IMPORTING" ? "d-none" : ""
                }`}
              >
                Import History <BiChevronsRight />
              </button>
              <button
                className={`btn btn3 rounded-3 m-1 ${
                  status === "IMPORTING" ? "d-none" : ""
                }`}
              >
                <FaTimes /> Delete
              </button>
              <button
                className={`btn btn3 rounded-3 m-1 ${
                  status === "IMPORTING" ? "" : "d-none"
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <hr className="m-0" />
      </div>
    </>
  );
}

BidTypeView.propTypes = {
  pilot: PropTypes.shape({
    id: PropTypes.string,
    bidTypes: PropTypes.string,
    status: PropTypes.string,
    bidPeriods: PropTypes.string,
    lastImport: PropTypes.string,
  }),
};
