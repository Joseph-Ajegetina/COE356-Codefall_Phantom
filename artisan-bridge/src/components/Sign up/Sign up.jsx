// import React from "react";
// import "./Sign up.scss";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { useState } from "react";

// export default function Signup({ Sign_up }) {
//   const [Signup_details, setSignup_details] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     city: "",
//     phone: "",
//     customer_username: "",
//     password: "",
//   });

//   let history = useHistory();

//   const submithand = (e) => {
//     e.preventDefault();
//     Sign_up(Signup_details);

//     axios.defaults.headers.post["Access-Control-Allow-Origin"] =
//       "http://127.0.0.1:5000/login";

//     axios
//       .post("http://127.0.0.1:5000/register", Signup_details)
//       .then((response) => {
//         console.log(response);
//         if (response.data.Registration == "Registered") {
//           history.push("/login");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="signup">
//       <div class="signup-box">
//         <div className="left ">
//           <h1>
//             ARTISAN<span class="text-warning">BRIDGE</span>
//           </h1>
//         </div>
//         <div class="login-box">
//           <form onSubmit={submithand}>
//             <label for="">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 maxlength="50"
//                 required
//                 name="first_name"
//                 id="first_name"
//                 onChange={(e) =>
//                   setSignup_details({
//                     ...Signup_details,
//                     first_name: e.target.value,
//                   })
//                 }
//                 value={Signup_details.first_name}
//               />
//             </label>
//             <label for="">
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 maxlength="50"
//                 required
//                 name="last_name"
//                 id="last_name"
//                 onChange={(e) =>
//                   setSignup_details({
//                     ...Signup_details,
//                     last_name: e.target.value,
//                   })
//                 }
//                 value={Signup_details.last_name}
//               />
//             </label>
//             <label for="">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 required
//                 name="email"
//                 id="email"
//                 onChange={(e) =>
//                   setSignup_details({
//                     ...Signup_details,
//                     email: e.target.value,
//                   })
//                 }
//                 value={Signup_details.email}
//               />
//             </label>
//             <label for="">
//               <input
//                 type="text"
//                 placeholder="City"
//                 required
//                 name="city"
//                 id="city"
//                 onChange={(e) =>
//                   setSignup_details({ ...Signup_details, city: e.target.value })
//                 }
//                 value={Signup_details.city}
//               />
//             </label>
//             <label for="">
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 required
//                 name="phone"
//                 id="phone"
//                 onChange={(e) =>
//                   setSignup_details({
//                     ...Signup_details,
//                     phone: e.target.value,
//                   })
//                 }
//                 value={Signup_details.phone}
//               />
//             </label>
//             <label for="">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 required
//                 name="customer_username"
//                 id="customer_username"
//                 onChange={(e) =>
//                   setSignup_details({
//                     ...Signup_details,
//                     customer_username: e.target.value,
//                   })
//                 }
//                 value={Signup_details.customer_username}
//               />
//             </label>
//             <label for="">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 minlength="8"
//                 required
//                 name="password"
//                 id="password"
//                 onChange={(e) =>
//                   setSignup_details({
//                     ...Signup_details,
//                     password: e.target.value,
//                   })
//                 }
//                 value={Signup_details.password}
//               />
//             </label>
//             <label for="">
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 minlength="8"
//                 required
//               />
//             </label>
//             <label for="">
//               <input type="submit" value="Sign Up" />
//             </label>
//           </form>
//           <p>
//             By clicking the Sign Up button,you agree to our <br />
//             <a href="#">Terms and Condition</a> and{" "}
//             <a href="#">Policy Privacy</a>
//           </p>
//           <p>
//             Already have an account?
//             <Link to="/login">Login</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }










import React from "react";
import "./Sign up.scss";
import { Link } from "react-router-dom";
import axios from "axios";
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
    firstName: Yup.string().required("lastName is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    birthdate: Yup.string().required("Birthdate is required"),

    address: Yup.string().required("Location is required"),

    phone: Yup.string()
      .required("Location is required")
      .matches(phoneRegex, "Invalid Phone"),

    email: Yup.string().required("Email is required").email("Email is invalid"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
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
      birth_date: formData.birthdate,
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
          setAlert({ message: info.message, alert: info.alert });
          setShowAlert(true);
          history.push("/login");
          console.log(info);
        } else {
          setAlert({ message: info.message, alert: info.alert });
          setShowAlert(true);
          console.log(info);
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
              <div className="invalid-feedback">{errors.fisrtName?.message}</div>
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
              <div className="invalid-feedback">{errors.fisrtName?.message}</div>
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
              <label>Date of Birth</label>
              <input
                name="birthdate"
                type="date"
                {...register("birthdate")}
                className={`form-control ${
                  errors.birthdate ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.birthdate?.message}
              </div>
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
