import "./NewService.scss"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React from "react";
import Message from "../../../navigationBar/Message";
import PublishIcon from '@material-ui/icons/Publish';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";

export default function NewService() {
     //Schema for the form validation for form fields
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Service name  is required"),
    description: Yup.string().required("Service description is required")
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


  // function for image upload
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    const image = imageList[0];
    setImageName(image.file.name);
    setImages(imageList);
  };


  const submitHandler = (formData) => {
    const userInput = {
      skill: formData.name,
      description: formData.description,
      image_path: imageName,
    };

    fetch("http://127.0.0.1:5000/admin/services/0", {
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
    return (
        <div className="newService">
          {showAlert ? <Message alertMessage={alert} /> : ""}
        <form onSubmit={handleSubmit(submitHandler)}>
    
          <div className="form-group">
            <label>Service Name</label>
            <input
              name="address"
              type="text"
              {...register("name")}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

          <div className="newArtisanForm">
            <label>Description</label>
            <input
              name="phone"
              type="text"
              {...register("description")}
              className={`form-control ${errors.description ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.description?.message}</div>
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

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
              {/* <h1 className="newArtisanTitle">New Service</h1>
            <form action="" className="newArtisanForm">
                <div className="newArtisanItem">
                    <label htmlFor="">Name of Service</label>
                    <input type="text" placeholder="Electronics" />
                </div>
                <div className="newArtisanItem">
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder="Some Text" />
                </div>
                <div className="newArtisanImg">
                    <label>Image</label>
                    <input type="file" id="file"/>
                </div>
            </form>
            <button className="createArtisan">Create</button> */}
        </div>
    )
}
