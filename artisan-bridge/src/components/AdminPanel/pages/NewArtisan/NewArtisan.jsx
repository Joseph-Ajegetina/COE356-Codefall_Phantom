import "./NewArtisan.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React from "react";
import Message from "../../../navigationBar/Message";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";


export default function NewArtisan() {
  //Schema for the form validation for form fields
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("FirstName  is required"),
    lastName: Yup.string().required("lastName is required"),
    address: Yup.string().required("Location is required"),
    phone: Yup.string()
      .required("Location is required")
      .matches(phoneRegex, "Invalid Phone"),
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
  const [refresh, setRefresh] = useState();
  const [imageName, setImageName] = useState("");
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;


  let history = useHistory();

  const fetchServices = () => {
    fetch("http://127.0.0.1:5000/admin/services/100")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Server issues for feteching services in New Artisan");
        }
      })
      .then((data) => {
        const dataList = Object.values(data);
        setServices(dataList);
      });
  };

  useEffect(() => {
    fetchServices();
  }, [refresh]);

  // function for image upload
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    const image = imageList[0];
    setImageName(image.file.name);
    setImages(imageList);
  };


  const submitHandler = (formData) => {
    const userInput = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      contact: formData.phone,
      address: formData.address,
      service_id: formData.service,
      profile_image_path: imageName,
    };

    fetch("http://127.0.0.1:5000/admin/artisans/edit/1000", {
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
      <div class="newArtisan">
        <h1 className="newArtisanTitle">New Artisan</h1>
        {showAlert ? <Message alertMessage={alert} /> : ""}
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              {...register("firstName")}
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.fisrtName?.message}</div>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              {...register("lastName")}
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.fisrtName?.message}</div>
          </div>

          <div className="form-group">
            <label>Location address</label>
            <input
              name="address"
              type="text"
              {...register("address")}
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.address?.message}</div>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              type="tel"
              {...register("phone")}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.phone?.message}</div>
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

          <div className="newArtisanItem">
            <label htmlFor="">Type of Service</label>
            <select
              name="service"
              {...register("service")}
              className={`form-control ${errors.service ? "is-invalid" : ""}`}
            >
              {services.map((service) => {
                return <option value={service.id}>{service.name}</option>;
              })}
            </select>
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
