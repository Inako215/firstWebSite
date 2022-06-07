import React from "react";
import PropTypes from "prop-types";

export function BidTypeView({
  pilots: { id, bidTypes, status, bidPeriods, lastImport },
  buttons: { button1, button2, button3, button4, button5 },
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
                {button1.symbol} {button1.text}
              </button>
              <button
                className={`btn btn2 rounded-3 m-1 ${
                  status === "IMPORTING" ? "d-none" : ""
                }`}
              >
                {button2.text} {button2.symbol}
              </button>
              <button
                className={`btn btn2 rounded-3 m-1 ${
                  status === "IMPORTING" ? "d-none" : ""
                }`}
              >
                {button3.text} {button3.symbol}
              </button>
              <button
                className={`btn btn3 rounded-3 m-1 ${
                  status === "IMPORTING" ? "d-none" : ""
                }`}
              >
                {button4.symbol} {button4.text}
              </button>
              <button
                className={`btn btn3 rounded-3 m-1 ${
                  status === "IMPORTING" ? "" : "d-none"
                }`}
              >
                {button5.text} {button5.symbol}
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
  pilots: PropTypes.shape({
    id: PropTypes.string,
    bidTypes: PropTypes.string,
    status: PropTypes.string,
    bidPeriods: PropTypes.string,
    lastImport: PropTypes.string,
  }),
  buttons: PropTypes.shape({
    button1: PropTypes.any,
    button2: PropTypes.any,
    button3: PropTypes.any,
    button4: PropTypes.any,
    button5: PropTypes.any,
  }),
};
