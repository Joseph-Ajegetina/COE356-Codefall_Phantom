import "./ArtisanUpdate.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../../../navigationBar/Message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import React from "react";
import ImageUploading from "react-images-uploading";
import { useHistory } from "react-router-dom";

export default function ArtisanUpdate() {
  //Schema for the form validation
  const validationSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    address: Yup.string(),
    phone: Yup.string(),
  });

  //useForm functions
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [artisan, setArtisan] = useState({});
  const [artisanService, setArtisanService] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const { artisanID } = useParams();
  const [showAlert, setShowAlert] = useState();
  const [alertMessage, setAlertMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [imageName, setImageName] = useState("");
  const [services, setServices] = useState([]);
  const [images, setImages] = React.useState([]);
  const [alert, setAlert] = useState(false);
  const maxNumber = 1;
  let history = useHistory();

  //Image upload handler
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    const image = imageList[0];
    setImageName(image.file.name);
    setImages(imageList);
  };

  //Fetching the artisan details using the id
  const fetchArtisanData = () => {
    fetch(`http://127.0.0.1:5000/find_artisan/${artisanID}`)
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

  //fetching various services
  const fetchServices = () => {
    fetch("http://127.0.0.1:5000/services")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Server issues with fetching services");
        }
      })
      .then((data) => {
        const dataList = Object.values(data);
        setServices(dataList);
      });
  };

  //useEffect to run once
  useEffect(() => {
    fetchArtisanData();
    fetchServices();
  }, [refreshKey]);

  //Form submission handler
  const submitHandler = (formData) => {
    const userInput = {
      first_name: formData.firstName ? formData.firstName : artisan.first_name,
      last_name: formData.lastName ? formData.lastName : artisan.last_name,
      contact: formData.phone ? formData.phone : artisan.contact,
      address: formData.address ? formData.address : artisan.Address,
      service_id: formData.service ? formData.service : artisan.service_id,
      profile_image_path: imageName ? imageName : artisan.Path,
    };

    //Sending artisan update
    fetch("http://127.0.0.1:5000/admin/update/artisan/1055", {
      method: "POST",
      body: JSON.stringify(userInput),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((info) => {
        if (info.passed) {
          history.push({
            pathname: "/artisans",
            state: {
              messageParams: info.message,
              alertParams: info.alert,
            },
          });
        } else {
          setAlert({ message: info.message, alert: info.alert });
          setShowAlert(true);
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
      <div className="artisanUpdate">
        <div className="artisanEditContainer">
          <h1 className="artisanEditContainer">Edit Artisan</h1>
        </div>
        <div className="artisanContainer">
          <div className="artisanShow">
            <div className="artisanShowTop">
              <img
                src={`/images/${artisan.Path}`}
                alt=""
                className="artisanShowImg"
              />
              <div className="artisanshowTopTItle">
                <span className="artisanShowName"> {artisan.Name}</span>
                <span className="artisanShowartisanTitle">
                  {artisan.Expertise}
                </span>
              </div>
            </div>

            <div className="artisanShowBottom">
              <span className="artisanShowTitle">Account Details</span>
              <div className="artisanShowInfo">
                <PermIdentityIcon className="artisanShowIcon" />
                <span className="artisanShowInfoTitle">{artisan.Name}</span>
              </div>
              <div className="artisanShowInfo">
                <PhoneAndroidIcon className="artisanShowIcon" />
                <span className="artisanShowInfoTitle">{artisan.contact}</span>
              </div>
              <div className="artisanShowInfo">
                <LocationSearchingIcon className="artisanShowIcon" />
                <span className="artisanShowInfoTitle">{artisan.Address}</span>
              </div>
            </div>
          </div>
          <div className="artisanEdit">
            <span className="artisanEditTitle">Edit</span>
            <div className="leftRight">
              <div className="artisanEditLeft">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      placeholder={artisan.first_name}
                      name="firstName"
                      type="text"
                      {...register("firstName")}
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.fisrtName?.message}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      placeholder={artisan.last_name}
                      name="lastName"
                      type="text"
                      {...register("lastName")}
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.lastName?.message}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Location address</label>
                    <input
                      placeholder={artisan.Address}
                      name="address"
                      type="text"
                      {...register("address")}
                      className={`form-control ${
                        errors.address ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.address?.message}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      placeholder={artisan.contact}
                      name="phone"
                      type="tel"
                      {...register("phone")}
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.phone?.message}
                    </div>
                  </div>

                  <div className="newArtisanItem">
                    <label htmlFor="">Type of Service</label>
                    <select
                      name="service"
                      {...register("service")}
                      className={`form-control ${
                        errors.service ? "is-invalid" : ""
                      }`}
                    >
                      {services.map((service) => {
                        return (
                          <option value={service.id}>{service.service}</option>
                        );
                      })}
                    </select>
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary artisanUpdateButton"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
              <div className="artisanEditRight">
                <div className="artisanEditUpload">
                  <img
                    src={`/images/${artisan.Path}`}
                    alt=""
                    className="artisanEditImg"
                  />
                  <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        <button
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          Click or Drop here
                        </button>
                        &nbsp;
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image["data_url"]} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageUpdate(index)}>
                                Update
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                  {({ imageList, onImageUpload, onImageRemoveAll, errors }) =>
                    errors && (
                      <div>
                        {errors.maxNumber && (
                          <span>
                            Number of selected images exceed maxNumber
                          </span>
                        )}
                        {errors.acceptType && (
                          <span>Your selected file type is not allow</span>
                        )}
                        {errors.maxFileSize && (
                          <span>Selected file size exceed maxFileSize</span>
                        )}
                        {errors.resolution && (
                          <span>
                            Selected file is not match your desired resolution
                          </span>
                        )}
                      </div>
                    )
                  }
                  {({ imageList, dragProps, isDragging }) => (
                    <div {...dragProps}>
                      {isDragging ? "Drop here please" : "Upload space"}
                      {imageList.map((image, index) => (
                        <img key={index} src={image.data_url} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
