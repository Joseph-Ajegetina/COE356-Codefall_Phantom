import "./navigation.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavPublic from "./NavPublic";
import NavLogin from "./NavLogin";
import MenuIcon from "@material-ui/icons/Menu";

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

      <input type="checkbox" id="menu-bar" className="menu-bar" />
      <label htmlFor="menu-bar" className="menu">
        <MenuIcon />
      </label>

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
              <img src="images/artisan.png" alt="" className="services" />
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
