import React from "react";
import PropTypes from "prop-types";

import { ImCloudDownload } from "react-icons/im";
import { BiChevronsRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

export function BidTypeView({
  bidTypes: {
    id,
    fleet,
    seat,
    domicile,
    status,
    numOfBidPeriods,
    lastImported,
  },
  onDeleteBidType,
  onImportBidType,
  onCancelImportBidType,
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
            <div className="col-sm-2">
              {seat} {domicile} {fleet}
            </div>
            <div className="col-sm-2 text-end">{status}</div>
            <div className="col-sm-3 text-center">{numOfBidPeriods}</div>
            <div className="col-sm-2 text-center">{lastImported}</div>
            <div className={`col-sm-2 text-end`}>
              <button
                className={`btn btn1 rounded-3 m-1 ${
                  status === "IMPORTING" ? "d-none" : ""
                }`}
                onClick={() => onImportBidType({ id })}
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
                onClick={() => onDeleteBidType({ id })}
              >
                <FaTimes /> Delete
              </button>
              <button
                className={`btn btn3 rounded-3 m-1 ${
                  status === "IMPORTING" ? "" : "d-none"
                }`}
                onClick={() => onCancelImportBidType({ id })}
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
  bidTypes: PropTypes.shape({
    id: PropTypes.number,
    seat: PropTypes.any,
    domicile: PropTypes.string,
    fleet: PropTypes.string,
    status: PropTypes.string,
    numOfBidPeriods: PropTypes.any,
    lastImported: PropTypes.any,
  }),
};
