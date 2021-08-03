import React, { useState, useEffect } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useParams, useLocation, useRouteMatch} from "react-router";
import { useHistory } from "react-router-dom";
import Message from "../navigationBar/Message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Login = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const {messageParams, alertParams} = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const {url, path} = useRouteMatch();
  
  useEffect(() =>{
      
  if (location.state) {
    const messageLocation = location.state.messageParams;
    const alertLocation = location.state.alertParams;

    if (messageLocation && alertLocation) {
      setAlert({ message: messageLocation, alert: alertLocation });
      setShowAlert(true);
      location.state = null;
      setTimeout(()=>{
        setShowAlert(false);
      }, 3000)
      history.replace(url);

    }
  }

  });


  const submitHandler = (formData) => {
    const userInput = {
      username: formData.username,
      password: formData.password,
    };

    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify(userInput),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((loginReturn) => {
        if (loginReturn.passed) {
          localStorage.setItem("isLoggedIn", "1");
          history.push({
            pathname: "/home",
            state:{
              messageParams:"Successfully logged in",
              alertParams:"success"
            }
          });
        } else {
          setAlert({ message: loginReturn.message, alert: loginReturn.alert });
          console.log(loginReturn);
          setShowAlert(true);
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
