import "./navigation.scss";
import { Link} from "react-router-dom";


const NavLogin = () => {
  return (
    <>
      <div className="header-option">
        <Link to="/records" className="nav">
          <span>
            <img src="images/records.png" alt="" className="home" /> Records
          </span>
        </Link>
      </div>
      <img src="images/profile.png" alt="" className="services" />
      <div className="header-option">
          <span className="LineOne">Hello Guest</span>
          <a href="#" className="dropdown" data-toggle="dropdown">
            <span className="LineTwo">Account</span>
          </a>
          <div class="dropdown-menu">
            <Link to="/profile" className="dropdown-item">
                Profile
            </Link>
            <Link to="/logout" className="dropdown-item">
              Logout
            </Link>
          </div>
        </div>
    </>
  );
};

export default NavLogin;
