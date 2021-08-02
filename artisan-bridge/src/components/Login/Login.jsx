// import React, { useState } from "react";
// import "./Login.scss";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// export default function Login({ log_in }) {
//   const [details, setDetails] = useState({ username: "", password: "" });

//   let history = useHistory();

//   const submithand = (e) => {
//     e.preventDefault();
//     log_in(details);

//     axios.defaults.headers.post["Access-Control-Allow-Origin"] =
//       "http://127.0.0.1:5000/login";

//     axios
//       .post("http://127.0.0.1:5000/login", details)
//       .then((response) => {
//         console.log(response);
//         if (response.data.Info == "logged in") {
//           history.push("/dashboard");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div className="login">
//       <div className="left ">
//         <h2>
//           ARTISAN<span class="text-warning">BRIDGE</span>
//         </h2>
//       </div>
//       <div class="login-box">
//         <form onSubmit={submithand}>
//           <div>
//             <label>
//               <input
//                 type="text"
//                 placeholder="username"
//                 name="customer_username"
//                 id="username"
//                 required
//                 onChange={(e) =>
//                   setDetails({ ...details, customer_username: e.target.value })
//                 }
//                 value={details.customer_username}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 id="password"
//                 required
//                 onChange={(e) =>
//                   setDetails({ ...details, password: e.target.value })
//                 }
//                 value={details.password}
//               />
//             </label>
//           </div>
//           <div>
//             <label for="">
//               <input type="submit" value="Login" />
//             </label>
//           </div>
//         </form>
//         <label for="">
//           <Link to="/signup" className="signup">
//             <button class="btn btn-md btn-secondary m-2">
//               Create New Account
//             </button>
//           </Link>
//         </label>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  let history = useHistory();

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
