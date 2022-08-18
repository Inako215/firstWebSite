import React, { useState } from "react";

export const BidTypeAddView = ({ airline, onAddBidType }) => {
  const [seat, setSeat] = useState("");
  const [fleet, setFleet] = useState("");
  const [domicile, setDomicile] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const addButtonClicked = () => {
    console.log("Add Button Clicked.");
    //Perform Error Checking...
    onAddBidType({
      id: 100,
      airline,
      seat,
      domicile,
      fleet,
      status: "Current",
      numOfBidPeriods: 0,
      lastImported: new Date().toDateString(),
    });
    setIsAdded(true);
  };

  return (
    <>
      <h2>Add New</h2>
      <div
        className={`alert alert-warning alert-dismissible fade show ${
          isAdded ? "" : "d-none"
        }`}
      >
        <strong>Congrats! </strong>
        You have succesfully added a new BidType.
      </div>
      <div className="mb-3">
        <label htmlFor="seatInput" className="form-label">
          Seat
        </label>
        <input
          type="text"
          id="seatInput"
          className="form-control"
          value={seat}
          onChange={(key) => {
            setIsAdded(false);
            setSeat(key.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fleetInput" className="form-label">
          Fleet
        </label>
        <input
          type="text"
          id="fleetInput"
          className="form-control"
          value={fleet}
          onChange={(key) => {
            setIsAdded(false);
            setFleet(key.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="domicileInput" className="form-label">
          Domicile
        </label>
        <input
          type="text"
          id="domicileInput"
          className="form-control"
          value={domicile}
          onChange={(key) => {
            setIsAdded(false);
            setDomicile(key.target.value);
          }}
        />
      </div>
      <button
        className={`btn btn-primary ${isAdded ? "d-none" : ""}`}
        onClick={addButtonClicked}
      >
        Add
      </button>
    </>
  );
};
