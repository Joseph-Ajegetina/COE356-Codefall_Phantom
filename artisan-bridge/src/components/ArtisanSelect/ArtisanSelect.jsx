import React, { useEffect, useState } from "react";
import "./ArtisanSelect.module.css";
import { useLocation } from "react-router";

const ArtisanSelect = () => {
  const [artisan, setArtisan] = useState({});
  const location = useLocation();

  useEffect(() => {
    setArtisan(location.state.artisan);
  });

  return (
    <div className="container" style={{ background: "#c4c4c4" }}>
      <div className="row ">
        <div class="col-sm-6 col-md-5 my-auto">
          <div className="container-fluid">
            <div className="row pt-3">
              <img
                className="artisan-select-img"
                src={`/${artisan.profile_image_path}`}
                alt=""
                class="rounded-circle img-fluid"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="d-block">
              <h4 className="display-12">Name: {artisan.first_name}</h4>
            </div>
            <div className="d-block my-4">
              <h4 className="display-12">Expertise: {artisan.skill} </h4>
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
                <p className="lead">{artisan.address}</p>
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
                <p className="lead">{artisan.skill}</p>
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

          <div className="row">
            <div className="d-flex flex-row">
              <img
                src="/images/contact.png"
                alt=""
                className="artisan-elipse mt-2 mx-1"
              />
              <h4 className="display-12 ">Contact</h4>

              <div className=" ml-auto my-auto ">
                <p className="lead">{artisan.contact}</p>
              </div>
            </div>
          </div>

          <div className="ml-6 mt-0">
            <button
              className="btn btn-md float-right"
              data-toggle="modal"
              data-target="#requestModal"
              style={{ background: "#f59401" }}
            >
              Request electrician
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
              <div class="modal-body">Request Kweku manu services ?</div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-dismiss="modal">
                  Cancel
                </button>
                <button class="btn btn-primary" data-dismiss="modal">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanSelect;
