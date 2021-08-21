import "./ServiceUpdate.scss";
import TitleIcon from "@material-ui/icons/Title";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React from "react";
import Message from "../../../navigationBar/Message";
import PublishIcon from "@material-ui/icons/Publish";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import ImageUploading from "react-images-uploading";

export default function ServiceUpdate() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Service name  is required"),
    description: Yup.string().required("Service description is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(false);
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});
  const [imageName, setImageName] = useState("");
  const [images, setImages] = React.useState([]);
  const [isError, setIsError] = useState(false);
  const { serviceID } = useParams();
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const maxNumber = 1;

  let history = useHistory();

  // function for image upload
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    const image = imageList[0];
    setImageName(image.file.name);
    setImages(imageList);
  };

  //Fetching the artisan details using the id
  const fetchServiceData = () => {
    fetch(`http://127.0.0.1:5000/admin/services/${serviceID}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setService(data[0]);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };
  useEffect(() => {
    fetchServiceData();
  }, [refreshKey]);

  const submitHandler = (formData) => {
    const userInput = {
      skill: formData.name ? formData.description : service.skill,
      description: formData.description
        ? formData.description
        : service.description,
      image_path: imageName ? imageName : service.image_path,
    };

    fetch(`http://127.0.0.1:5000/admin/services/${serviceID}`, {
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
            pathname: "/services",
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

  console.log("Service", service);
  return (
    <div className="serviceUpdate">
      <div className="artisanEditContainer">
        <h1 className="artisanEditContainer">Edit Service</h1>
      </div>
      <div className="artisanContainer">
        <div className="artisanShow">
          <div className="artisanShowTop">
            <img src={`/${service.image_path}`} alt="" className="artisanShowImg" />
            <div className="artisanshowTopTItle">
              <span className="artisanShowName"> Electronics</span>
            </div>
          </div>

          <div className="artisanShowBottom">
            <span className="artisanShowTitle">Service Details</span>
            <div className="artisanShowInfo">
              <TitleIcon className="artisanShowIcon" />
              <span className="artisanShowInfoTitle">{service.skill}</span>
            </div>
            <div className="artisanShowInfo">
              <DescriptionIcon className="artisanShowIcon" />
              <span className="artisanShowInfoTitle">
                {service.description}
              </span>
            </div>
          </div>
        </div>
        <div className="artisanEdit">
          <span className="artisanEditTitle">Edit</span>
          <div className="leftRight">
            <div className="artisanEditLeft">
              {showAlert ? <Message alertMessage={alert} /> : ""}
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                  <label>Service Name</label>
                  <input
                    placeholder={service.skill}
                    name="address"
                    type="text"
                    {...register("name")}
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </div>

                <div className="newArtisanForm">
                  <label>Description</label>
                  <input
                    placeholder={service.description}
                    name="phone"
                    type="text"
                    {...register("description")}
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.description?.message}
                  </div>
                </div>
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
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <div className="artisanEditUpload">
                        <img
                          src={`/${service.image_path}`}
                          alt=""
                          className="artisanEditImg"
                        />
                      </div>
                      <button
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Upload Image
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
                        <span>Number of selected images exceed maxNumber</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
