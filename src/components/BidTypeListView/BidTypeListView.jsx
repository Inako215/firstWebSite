import React, { useState } from "react";
import PropTypes from "prop-types";
import { TiFilter, TiPlus } from "react-icons/ti";
import { HiOutlineRefresh } from "react-icons/hi";
import { BidTypeView } from "../BidTypeView/BidTypeView";

import {
  selectBidTypes,
  deleteBidType,
  importBidType,
  cancelImportBidType,
} from "../../redux/bidTypeSlice";
import { useSelector, useDispatch } from "react-redux";

export function BidTypeListView({ airline, bidTypes }) {
  const [isAdding, setIsAdding] = useState(false);

  const storedBidTypes = useSelector(selectBidTypes);
  if (storedBidTypes && storedBidTypes.length > 0) {
    bidTypes = storedBidTypes.filter((bidType) => bidType.airline === airline);
  }

  const dispatch = useDispatch();
  const events = {
    onDeleteBidType: (bidType) => dispatch(deleteBidType(bidType)),
    onImportBidType: (bidType) => dispatch(importBidType(bidType)),
    onCancelImportBidType: (bidType) => dispatch(cancelImportBidType(bidType)),
  };

  const addCancelButtonClicked = () => {
    setIsAdding(!isAdding);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <hr />
          <div className="col-sm-1 fw-bold">ID</div>
          <div className="col-sm-2 fw-bold">Bid Types</div>
          <div className="col-sm-3 text-center fw-bold">Status</div>
          <div className="col-sm-2 fw-bold"># Bid Periods</div>
          <div className="col-sm-2 fw-bold">Last Import</div>
          <div className="icons col-sm-2 text-end fw-bold">
            <TiFilter />{" "}
            <button
              className={`btn btn-sm m-1 ${isAdding ? "btn-danger" : "btn"}`}
              onClick={addCancelButtonClicked}
            >
              {isAdding ? "Close" : <TiPlus />}
            </button>{" "}
            <HiOutlineRefresh />
          </div>
          <hr className="mt-2" />
          <div className="row">
            <div className="col-12">
              {bidTypes?.map((bidTypes) => {
                return (
                  <>
                    <BidTypeView bidTypes={bidTypes} {...events} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

BidTypeListView.propTypes = {
  bidTypes: PropTypes.any,
  airline: PropTypes.string,
};
