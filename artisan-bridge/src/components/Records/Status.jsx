import { React, useState } from "react";

const Status = ({ recordID, setRecordStatus, recordStatus }) => {
  const [statusID, setStatusID] = useState("");
  const statusHandler = (event) => {
    const tranStatus = event.target.value;
    if (tranStatus === "complete") {
      setStatusID(true);
      setRecordStatus("complete");
    } else if (tranStatus === "cancel") {
      setStatusID(false);
      setRecordStatus("cancel");
    } else {
      setStatusID();
    }
    // setRecordStatus(tranStatus);
    fetch(`http://127.0.0.1:5000/rating/${recordID}/${statusID}`, {
      method: "POST",
    }).then((response) => {
      if (response.ok) {
        return;
      }
    });
  };
  if (recordStatus === "complete") {
    return (
      <>
        <div value="complete" class="badge badge-success badge-pill">
          completed
        </div>
      </>
    );
  } else if (recordStatus == "cancel") {
    return (
      <div value="complete" class="badge badge-success badge-pill">
        completed
      </div>
    );
  } else {
    return (
      <>
        <select
          name="status"
          id=""
          class="badge badge-danger badge-pill"
          onChange={statusHandler}
        >
          <option value="pending" class="badge badge-secondary badge-pill">
            pending
          </option>
          <option value="complete" class="badge badge-success badge-pill">
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
