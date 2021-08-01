import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login({ log_in }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  let history = useHistory();

  const submithand = (e) => {
    e.preventDefault();
    log_in(details);

    axios.defaults.headers.post["Access-Control-Allow-Origin"] =
      "http://127.0.0.1:5000/login";

    axios
      .post("http://127.0.0.1:5000/login", details)
      .then((response) => {
        console.log(response);
        if (response.data.Info == "logged in") {
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="left ">
        <h2>
          ARTISAN<span class="text-warning">BRIDGE</span>
        </h2>
      </div>
      <div class="login-box">
        <form onSubmit={submithand}>
          <div>
            <label>
              <input
                type="text"
                placeholder="username"
                name="customer_username"
                id="username"
                required
                onChange={(e) =>
                  setDetails({ ...details, customer_username: e.target.value })
                }
                value={details.customer_username}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                required
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </label>
          </div>
          <div>
            <label for="">
              <input type="submit" value="Login" />
            </label>
          </div>
        </form>
        <label for="">
          <Link to="/signup" className="signup">
            <button class="btn btn-md btn-secondary m-2">
              Create New Account
            </button>
          </Link>
        </label>
      </div>
    </div>
  );
}
