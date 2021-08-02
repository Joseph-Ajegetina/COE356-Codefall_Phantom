import {React, useEffect} from "react";
import { Redirect, useHistory } from "react-router";

const Logout = ({ setIsAuthenticated, setIsLoggedIn }) => {
        localStorage.clear("isLoggedIn");
        setIsAuthenticated(false);
        setIsLoggedIn(false);  
  return <Redirect to="/home"/>;
};

export default Logout;
