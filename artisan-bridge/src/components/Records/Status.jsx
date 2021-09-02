import { React, useState } from "react";

const Status = ({ recordID, setShowRating, recordStatus }) => {
  console.log("Record id ", recordID, " status:",recordStatus)

  const [statusID, setStatusID] = useState("");


  const statusHandler = (event) => {
    const tranStatus = event.target.value;
    if (tranStatus === "Done") {
      //   setStatusID(2);
      //   setRecordStatus("complete");
      // } else if (tranStatus === "Pending") {
      //   setStatusID(1);
      //   setRecordStatus("cancel");
      // } else {
      //   setStatusID(3);
      // }
      // setRecordStatus(tranStatus);
      fetch(`http://127.0.0.1:5000/record_status/${recordID}`).then(
        (response) => {
          if (response.ok) {
            return;
          }
        }
      );
    }
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
