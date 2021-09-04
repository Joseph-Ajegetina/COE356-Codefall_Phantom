import "./navigation.scss";
import { Link } from "react-router-dom";

const NavPublic = () => {
  return (
    <>
      <div className="header-option">
        <span className="LineOne">Hello Guest</span>
        <a href="#" className="dropdown" data-toggle="dropdown">
          <span className="LineTwo">Account</span>
        </a>
        <div class="dropdown-menu">
          <Link to="/login" className="dropdown-item">
            Sign in
          </Link>
          <Link to="/signup" className="dropdown-item">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavPublic;
