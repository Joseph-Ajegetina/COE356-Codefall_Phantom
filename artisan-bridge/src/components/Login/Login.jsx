import React, { useState, useEffect } from "react";
import "./Login.scss";
import { useLocation, useRouteMatch } from "react-router";
import { useHistory } from "react-router-dom";
import Message from "../navigationBar/Message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Login = () => {
  //Settings for the validation
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  //useState variables to hold various data
  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();

  //form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  //function to turn off message after 3 seconds
  const messageOff = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  //Getting messages passed from other components to the login route like accessing unauthorized routes
  useEffect(() => {
    if (location.state) {
      const messageLocation = location.state.messageParams;
      const alertLocation = location.state.alertParams;

      if (messageLocation && alertLocation) {
        //displaying the message
        setAlert({ message: messageLocation, alert: alertLocation });
        setShowAlert(true);

        //turning off message flash after three seconds
        messageOff();

        //removing the message from the route parameters
        history.replace(url);
      }
    }
  }, [location]);

  //function to handle form submission
  const submitHandler = (formData) => {
    const userInput = {
      customer_username: formData.username,
      password: formData.password,
    };

    //Verifying credentials with the server
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify(userInput),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
        }
      })
      .then((loginReturn) => {
        if (loginReturn.passed) {
          //Getting info from login fetch
          const user = loginReturn.user;
          localStorage.setItem("isLoggedIn", "1");
          if (user) {
            localStorage.setItem("user", user);
          }
          let userType = loginReturn.type;

          //checking if the user is a customer or an administrator
          if (userType === "customer") {
            console.log("here");
            history.push({
              pathname: "/home",
              state: {
                messageParams: "Successfully logged in",
                alertParams: "success",
              },
            });
          } else {
            // if adminstrator
            history.push({
              pathname: "/admin",
              state: {
                messageParams: "Successfully logged in",
                alertParams: "success",
              },
            });
          }
        } else {
          setAlert({ message: loginReturn.message, alert: loginReturn.alert });
          setShowAlert(true);
          messageOff();
        }
      });
  };

  return (
    <div className="form">
      <div className="login">
        <div className="left ">
          <h1>
            ARTISAN<span class="text-warning">BRIDGE</span>
          </h1>
        </div>

        <div class="login-box">
          {showAlert ? <Message alertMessage={alert} /> : ""}
          <form onSubmit={handleSubmit(submitHandler)}>
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
              <button type="submit" className="btn btn-secondary mt-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
