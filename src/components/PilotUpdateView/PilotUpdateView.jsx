import React, { useState } from "react";
import photo from "../../public/images/stockPhoto.jpeg";
import pilotsSlice from "../../redux/pilotsSlice";

export const PilotUpdateView = ({ onEditPilot, id, setIsUpdating, pilots }) => {
  const [nameFirst, setNameFirst] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  // const updateButtonClicked = () => {
  //   onEditPilot({ });
  //   setIsUpdating(false);
  //   setIsUpdated(true);
  // };

  return (
    <>
      <div className="modal" id="myUpdateModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content container-fluid d-flex">
            <div className="modal-header">
              <h4 className="modal-title">Add Pilot</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
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
                    setNameFirst(key.target.value);
                    setIsUpdated(false);
                  }}
                />
              </div>
            </form>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn2 rounded-3"
                data-bs-dismiss="modal"
                onClick={() => onEditPilot({ id })}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn3 rounded-3"
                data-bs-dismiss="modal"
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