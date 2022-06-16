import React from "react";
import PropTypes from "prop-types";
import { TiFilter, TiPlus } from "react-icons/ti";
import { HiOutlineRefresh } from "react-icons/hi";
import { BidTypeView } from "../BidTypeView/BidTypeView";

import { selectBidTypes } from "../../redux/bidTypeSlice";
import { useSelector } from "react-redux";

export function BidTypeListView({ airline, bidTypes }) {
  const storedBidTypes = useSelector(selectBidTypes);
  if (storedBidTypes && storedBidTypes.length > 0) {
    bidTypes = storedBidTypes.filter((bidType) => bidType.airline === airline);
  }

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
            <TiFilter /> <TiPlus /> <HiOutlineRefresh />
          </div>
          <hr className="mt-2" />
          <div className="row">
            <div className="col-12">
              {bidTypes?.map((bidTypes) => {
                return (
                  <>
                    <BidTypeView bidTypes={bidTypes} />
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
