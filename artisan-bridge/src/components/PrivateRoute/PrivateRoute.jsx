import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Route>
      {isLoggedIn ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: location,
              messageParams: "You need to login first",
              alertParams: "danger",
            },
          }}
        />
      )}
    </Route>
  );
};

export default PrivateRoute;
