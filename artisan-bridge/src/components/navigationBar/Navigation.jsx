import "./navigation.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import NavPublic from "./NavPublic";
import NavLogin from "./NavLogin";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedUserIsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/home" className="logo">
          <h1>
            ARTISAN<span className="text-warning">BRIDGE</span>
          </h1>
        </Link>
      </div>
      <div className="header-search">
        {/* <input
          type="text"
          placeholder="Search for Artisans and Services..."
          className="header-input"
        /> */}
        {/* <button className="header-searchicon">
          <SearchIcon />
        </button> */}
      </div>
      <div className="header-nav">
        <div className="header-option">
          <Link to="/home" className="nav">
            <span>
              <img src="images/home.png" alt="" className="home" /> Home
            </span>
          </Link>
        </div>
        <div className="header-option">
          <Link to="service" className="nav">
            {" "}
            <span>
              <img src="images/services.png" alt="" className="services" />
              Services
            </span>
          </Link>
        </div>
        <div className="header-option">
          <Link to="/find" className="nav">
            <span>
              <img
                src="images/find an artisan.png"
                alt=""
                className="services"
              />
              Find an artisan
            </span>
          </Link>
        </div>
        {isLoggedIn ? <NavLogin /> : <NavPublic />}
      </div>
    </div>
  );
};
export default Navigation;
