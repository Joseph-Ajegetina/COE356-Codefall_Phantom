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
  //Schema for the form validation
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("FirstName  is required"),
    lastName: Yup.string().required("lastName is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    address: Yup.string().required("Location is required"),

    phone: Yup.string()
      .required("Location is required")
      .matches(phoneRegex, "Invalid Phone"),

    email: Yup.string().required("Email is required").email("Email is invalid"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 6 characters")
      .max(80, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
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

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    const image = imageList[0];
    setImageName(image.file.name);

    setImages(imageList);
  };

  //fetching the services

  const createHandler = (formData) => {
    console.log("here");
    const userInput = {
      service_id: formData.service,
      first_name: formData.firstName,
      last_name: formData.lastName,
      contact: formData.phone,
      address: formData.address,
      profile: formData.email,
      profile_image_path: imageName,
    };
    console.log(userInput);
  };

  const fetchServices = () => {
    fetch("http://127.0.0.1:5000/admin/services/100")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Server issues");
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

  return (
    <div className="newArtisan">
      <h1 className="newArtisanTitle">New Artisan</h1>
      <form onSubmit={handleSubmit(createHandler)}>
        <div className="newArtisanItem">
          <label htmlFor="">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            {...register("firstName")}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.firstName?.message}</div>
        </div>
        <div className="newArtisanItem">
          <label htmlFor="">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.lastName?.message}</div>
        </div>
        <div className="newArtisanItem">
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            {...register("phone")}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.phone?.message}</div>
        </div>

        <div className="newArtisanItem">
          <label htmlFor="">Location</label>
          <input
            name="address"
            type="text"
            placeholder="Location"
            {...register("address")}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.address?.message}</div>
        </div>
        <div className="newArtisanItem">
          <label htmlFor="">Email</label>
          <input
            name="address"
            type="text"
            placeholder="Location"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

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
            Create
          </button>
        </div>
      </form>
      <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
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
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
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
                <span>Selected file is not match your desired resolution</span>
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
  );
}
