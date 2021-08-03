import React from "react";
import "./admin_register.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Admin_register({ admin_Register }) {
  const [Admin_details, setAdmin_details] = useState({
    username: "",
    email: "",
    password: "",
  });

  let history = useHistory();

  const submithand = (e) => {
    e.preventDefault();
    admin_Register(Admin_details);

    axios.defaults.headers.post["Access-Control-Allow-Origin"] =
      "http://127.0.0.1:5000/register/admin";

    axios
      .post("http://127.0.0.1:5000/register/admin", Admin_details)
      .then((response) => {
        console.log(response.data);
        if (response.data.Registration == "Registered, Administrator") {
          history.push("/login");
        }
      })
      .catch((error) => {
        console.log(error);
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
        </div>
        <div class="login-box">
         <form onSubmit={submithand}>
          <label for="">
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
                id="username"
                onChange={(e) =>
                  setAdmin_details({
                    ...Admin_details,
                    username: e.target.value,
                  })
                }
                value={Admin_details.username}
              />
            </label>
            
            <label for="">
              <input
                type="email"
                placeholder="Email Address"
                required
                name="email"
                id="email"
                onChange={(e) =>
                  setAdmin_details({
                    ...Admin_details,
                    email: e.target.value,
                  })
                }
                value={Admin_details.email}
              />
            </label>
           
            
            <label for="">
              <input
                type="password"
                placeholder="Password"
                minlength="8"
                required
                name="password"
                id="password"
                onChange={(e) =>
                  setAdmin_details({
                    ...Admin_details,
                    password: e.target.value,
                  })
                }
                value={Admin_details.password}
              />
            
            <label for="">
              <input type="submit" value="Register" />
            </label>
            </label>
          </form>
        </div>
      </div>
  );
}
