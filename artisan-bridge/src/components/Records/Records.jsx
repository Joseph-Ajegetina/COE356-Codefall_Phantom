import "./Records.scss";
import React, { useEffect, useState } from "react";
import Message from "../navigationBar/Message";
import Star from "./Rating";
import Status from "./Status";

export default function Records() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showRating, setShowRating] = useState(null);

  //Fetching the artisan details using the id
  const fetchRecordData = () => {
    fetch(`http://127.0.0.1:5000/report/${localStorage.getItem("user")}`)
      .then((response) => {
        setIsLoading(true);
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        const recordList = Object.entries(data);
        console.log("recordList", recordList);
        setRecords(recordList);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  //useEffect to run once
  useEffect(() => {
    fetchRecordData();
  }, [refreshKey]);

  return (
    <div className="records">
      <div className="container">
        {isError ? (
          <Message
            alertMessage={{
              message: "An Error occured while fetching customer records",
              alert: "danger",
            }}
          />
        ) : (
          ""
        )}
        {isLoading ? (
          <Message
            alertMessage={{
              message: "Loading customer records",
              alert: "info",
            }}
          />
        ) : (
          <div className="jumbotron">
            <div className="record-details">
              <strong> Activity</strong>
              <table class="table">
                <thead class="thead-inverse">
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Artisan</th>
                    <th>Status</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => {
                    const num =
                      parseInt(record[0].substr(record[0].length - 1)) + 1;
                    const info = {
                      artisanID: record[1].artisan_id,
                      recordID: record[0],
                      status: record[1].status,
                      rating: record[1].rating,
                    };

                    return (
                      <tr>
                        <th scope="row">{num}</th>
                        <td>{record[1].Date}</td>
                        <td>{record[1].Skill}</td>
                        <td>{record[1].Artisan_name}</td>
                        <td>
                          <Status
                            recordID={info.recordID}
                            setShowRating={setShowRating}
                            recordStatus={info.status}
                          />
                        </td>
                        {showRating ||
                        info.rating > 0 ||
                        info.status === "Done" ? (
                          <td>
                            {" "}
                            <Star
                              recordID={info.recordID}
                              artisanID={info.artisanID}
                              setShowRating={setShowRating}
                              recordRating={info.rating}
                            />
                          </td>
                        ) : (
                          ""
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <nav>
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
