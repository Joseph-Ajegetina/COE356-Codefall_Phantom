import React from "react";
import "./Sign up.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Message from "../navigationBar/Message";

const SignUp = () => {
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

  let history = useHistory();

  const submitHandler = (formData) => {
    const userInput = {
      customer_username: formData.username,
      first_name: formData.firstName,
      last_name: formData.lastName,
      contact: formData.phone,
      address: formData.address,
      email: formData.email,
      password: formData.password,
    };

    fetch("http://127.0.0.1:5000/register", {
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
          console.log("passed");
          history.push({
            pathname: "/login",
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
    <div className="signup">
      <div class="signup-box">
        <div className="left ">
          <h1>
            ARTISAN<span class="text-warning">BRIDGE</span>
          </h1>
        </div>
        <div class="login-box">
          {showAlert ? <Message alertMessage={alert} /> : ""}
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
              <label>First Name</label>
              <input
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
                name="lastName"
                type="text"
                {...register("lastName")}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.fisrtName?.message}
              </div>
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                type="text"
                {...register("username")}
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
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

            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                {...register("confirmPassword")}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
            </div>

            <div className="form-group form-check">
              <input
                name="acceptTerms"
                type="checkbox"
                {...register("acceptTerms")}
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                I have read and agree to the Terms
              </label>
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <div className="border-top pt-3">
            <small>
              Already Have An Account? <Link to="/login">Login</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
