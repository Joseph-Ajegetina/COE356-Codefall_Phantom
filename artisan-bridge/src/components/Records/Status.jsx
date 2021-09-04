import { React, useState } from "react";

const Status = ({ recordID, setShowRating, recordStatus }) => {
  

  const statusHandler = (event) => {
    const tranStatus = event.target.value;
    console.log("TranStatus ", tranStatus);
    if (tranStatus === "Done") {
      var status = 0;
      setShowRating(true);
    } else if (tranStatus == "cancel") {
      var status = 1;
    }
    fetch(`http://127.0.0.1:5000/record_status/${recordID}/${status}`).then(
      (response) => {
        if (response.ok) {
          return;
        }
      }
    );
  };
  if (recordStatus === "Done" || recordStatus === "Rated") {
    return (
      <>
        <div value="Done" class="badge badge-success badge-pill">
          completed
        </div>
      </>
    );
  } else if (recordStatus == "cancel") {
    return (
      <div value="Cancelled" class="badge badge-danger badge-pill">
        Cancelled
      </div>
    );
  } else if (recordStatus == "Pending") {
    return (
      <>
        <select
          name="status"
          id=""
          class="badge badge-secondary badge-pill"
          onChange={statusHandler}
        >
          <option value="Pending" class="badge badge-secondary badge-pill">
            pending
          </option>
          <option value="Done" class="badge badge-success badge-pill">
            completed
          </option>
          <option value="cancel" class="badge badge-danger badge-pill">
            Cancelled
          </option>
        </select>
      </>
    );
  }
};

export default Status;
