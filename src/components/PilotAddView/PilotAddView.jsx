import React, { useState } from "react";
import photo from "../../public/images/stockPhoto.jpeg";

export const PilotAddView = ({ airline, onAddPilot, setIsAdding, company }) => {
  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [seat, setSeat] = useState("");
  const [fleet, setfleet] = useState("");
  const [domicile, setDomicile] = useState("");
  const [trainingFacility, setTrainingFacility] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  if (airline === "AA") {
    company = "American Airlines";
  }
  if (airline === "AS") {
    company = "Alaska Airlines";
  }
  if (airline === "FA") {
    company = "Frontier Airlines";
  }
  if (airline === "UP") {
    company = "UPS";
  }

  const emptyFields = () => {
    setNameFirst("");
    setNameLast("");
    setSeat("");
    setfleet("");
    setDomicile("");
    setTrainingFacility("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setState("");
    setPostalCode("");
    setAreaCode("");
    setPrefix("");
    setSuffix("");
  };

  const addButtonClicked = () => {
    console.log("Add Button Clicked.");
    //Perform Error Checking...
    onAddPilot({
      id: 100,
      photo,
      airline,
      seat,
      fleet,
      domicile,
      nameFirst,
      nameLast,
      company,
      trainingFacility,
      address1,
      address2,
      city,
      state,
      postalCode,
      areaCode,
      prefix,
      suffix,
    });
    setIsAdded(true);
    setIsAdding(false);
    emptyFields();
  };

  const cancelButtonClicked = () => {
    setIsAdded(false);
    setIsAdding(false);
    emptyFields();
  };

  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content container-fluid d-flex">
            <div className="modal-header">
              <h4 className="modal-title">Add Pilot</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={cancelButtonClicked}
              ></button>
            </div>
            <form className="modal-body row">
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="firstNameInput" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstNameInput"
                  className="form-control"
                  value={nameFirst}
                  onChange={(key) => {
                    setIsAdded(false);
                    setNameFirst(key.target.value);
                  }}
                />
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="lastNameInput" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastNameInput"
                  className="form-control"
                  value={nameLast}
                  onChange={(key) => {
                    setIsAdded(false);
                    setNameLast(key.target.value);
                  }}
                />
              </div>

              <div className="mb-3 col-12 col-md-4">
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
              <div className="mb-3 col-12 col-md-4">
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
                    setfleet(key.target.value);
                  }}
                />
              </div>
              <div className="mb-3 col-12 col-md-4">
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

              <div className="mb-3 col-12 col-md-12">
                <label htmlFor="trainingFacilityInput" className="form-label">
                  Training Facility
                </label>
                <input
                  type="text"
                  id="trainingFacilityInput"
                  className="form-control"
                  value={trainingFacility}
                  onChange={(key) => {
                    setIsAdded(false);
                    setTrainingFacility(key.target.value);
                  }}
                />
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="address1Input" className="form-label">
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1Input"
                  className="form-control"
                  value={address1}
                  onChange={(key) => {
                    setIsAdded(false);
                    setAddress1(key.target.value);
                  }}
                />
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="address2Input" className="form-label">
                  Address 2 (Optional)
                </label>
                <input
                  type="text"
                  id="address2Input"
                  className="form-control"
                  value={address2}
                  onChange={(key) => {
                    setIsAdded(false);
                    setAddress2(key.target.value);
                  }}
                />
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label htmlFor="cityInput" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="cityInput"
                  className="form-control"
                  value={city}
                  onChange={(key) => {
                    setIsAdded(false);
                    setCity(key.target.value);
                  }}
                />
              </div>
              <div className="mb-3 col-12 col-md-2">
                <label htmlFor="stateInput" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  id="stateInput"
                  className="form-control"
                  value={state}
                  onChange={(key) => {
                    setIsAdded(false);
                    setState(key.target.value);
                  }}
                />
              </div>
              <div className="mb-3 col-12 col-md-4">
                <label htmlFor="postalCodeInput" className="form-label">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="postalCodeInput"
                  className="form-control"
                  value={postalCode}
                  onChange={(key) => {
                    setIsAdded(false);
                    setPostalCode(key.target.value);
                  }}
                />
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="areaCodeInput" className="form-label">
                  Phone Number
                </label>
                <div className="input-group text-center">
                  <span className="col-md-1 justify-content-center">(</span>
                  <input
                    type="text"
                    id="areaCodeInput"
                    className="form-control col-2"
                    value={areaCode}
                    onChange={(key) => {
                      setIsAdded(false);
                      setAreaCode(key.target.value);
                    }}
                  />
                  <span className="col-md-1 justify-content-center">){""}</span>
                  <input
                    type="text"
                    id="prefixInput"
                    className="form-control col-md-2"
                    value={prefix}
                    onChange={(key) => {
                      setIsAdded(false);
                      setPrefix(key.target.value);
                    }}
                  />
                  <span className="col-md-1 justify-content-center"> - </span>
                  <input
                    type="text"
                    id="suffixInput"
                    className="form-control col-2"
                    value={suffix}
                    onChange={(key) => {
                      setIsAdded(false);
                      setSuffix(key.target.value);
                    }}
                  />
                </div>
              </div>
            </form>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn2 rounded-3"
                data-bs-dismiss="modal"
                onClick={addButtonClicked}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn3 rounded-3"
                data-bs-dismiss="modal"
                onClick={cancelButtonClicked}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
