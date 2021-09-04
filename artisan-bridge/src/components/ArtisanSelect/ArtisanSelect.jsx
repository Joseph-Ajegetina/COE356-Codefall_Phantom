import React, { useEffect, useState } from "react";
import "./ArtisanSelect.module.css";
import { useParams } from "react-router";
import Message from "../navigationBar/Message";

const ArtisanSelect = () => {
  //State variables that will change
  const [artisan, setArtisan] = useState({});
  const [userId, setUserId] = useState();
  const [request, setRequest] = useState();
  const [showAlert, setShowAlert] = useState();
  const [alertMessage, setAlertMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  //getting the artisan id from the parameters
  const { artisanId } = useParams();

  useEffect(() => {
    //Getting the user id
    setUserId(localStorage.getItem("user"));
  }, []);

  //Fetching the artisan details using the id
  const fetchArtisanData = () => {
    fetch(`http://127.0.0.1:5000/find_artisan/${artisanId}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setArtisan(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };
  console.log("artisan", artisan);

  //useEffect to run once
  useEffect(() => {
    fetchArtisanData();
  }, [refreshKey]);

  //request handelr
  const requestHandler = () => {
    //sending data to the backend
    fetch(`http://127.0.0.1:5000/confirm_order/${artisanId}/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response;
        }
      })
      .then((data) => {
        if (data) {
          //setting request to true indicating service request
          setRequest(true);

          //sending alert message
          setAlertMessage({
            message: `${artisan.Name} has been requested`,
            alert: "success",
          });

          //displaying alert
          setShowAlert(true);

          //timeout for alert to disappear after 3 seconds
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        }
      });
  };
  return (
    <>
      {showAlert ? <Message alertMessage={alertMessage} /> : ""}
      {isError ? (
        <Message
          alertMessage={{
            message: "An Error occured while fetching artisan data",
            alert: "danger",
          }}
        />
      ) : (
        ""
      )}
      {isLoading ? (
        <Message
          alertMessage={{ message: "Loading artisan data", alert: "info" }}
        />
      ) : (
        <div className="container" style={{ background: "#c4c4c4" }}>
          <div className="row ">
            <div class="col-sm-6 col-md-5 my-auto">
              <div className="container-fluid">
                <div className="row pt-3">
                  <img
                    className="artisan-select-img"
                    src={`/images/${artisan.Path}`}
                    alt=""
                    class="rounded-circle img-fluid"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="d-block">
                  <h4 className="display-12">Name: {artisan.Name}</h4>
                </div>
                <div className="d-block my-4">
                  <h4 className="display-12">
                    Expertise: {artisan.Expertise}{" "}
                  </h4>
                </div>
                <div className="d-block">
                  <h4 className="display-12">
                    {" "}
                    <span className="skill">Rating: {artisan.rating}</span>
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-7 mt-3 mb-3">
              <div className="row">
                <div className="d-flex flex-row">
                  <img
                    src="/images/location.png"
                    alt=""
                    className="artisan-elipse mt-2 mx-1"
                    style={{ background: "#f59401" }}
                  />
                  <h4 className="display-12 ">Location</h4>

                  <div className=" ml-auto my-auto">
                    <p className="lead">{artisan.Address}</p>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="d-flex flex-row">
                  <img
                    src="/images/service.png"
                    alt=""
                    className="artisan-elipse mt-2 mx-1"
                  />
                  <h4 className="display-12 ">Core Services</h4>

                  <div className="ml-auto my-auto ">
                    <p className="lead">{artisan.description}</p>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="d-flex flex-row ">
                  <img
                    src="/images/charge.png"
                    alt=""
                    className="artisan-elipse mt-2 mx-1"
                  />
                  <h4 className="display-12 ">Regular Charge</h4>

                  <div className="ml-auto my-auto">
                    <p className="lead">ghc 30</p>
                  </div>
                </div>
              </div>
              {request ? (
                <div className="row">
                  <div className="d-flex flex-row">
                    <img
                      src="/images/contact.png"
                      alt=""
                      className="artisan-elipse mt-2 mx-1"
                    />
                    <h4 className="display-12 ">Contact</h4>

                    <div className=" ml-auto my-auto ">
                      <p className="lead">
                        Reach out to the {artisan.Name} on {artisan.contact}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="ml-6 mt-0">
                <button
                  className="btn btn-md float-right"
                  data-toggle="modal"
                  data-target="#requestModal"
                  style={{ background: "#f59401" }}
                >
                  Request {artisan.Name}
                </button>
              </div>
            </div>

            <div class="modal" id="requestModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Request Artisan Service</h5>
                    <button class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>
                  <div class="modal-body">
                    Request {artisan.Name} services ?
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-danger" data-dismiss="modal">
                      Cancel
                    </button>
                    <button
                      class="btn btn-primary"
                      data-dismiss="modal"
                      onClick={requestHandler}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtisanSelect;
