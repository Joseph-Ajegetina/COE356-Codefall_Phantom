import "./navigation.scss"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from "prop-types"

export default function navigation() {
    return (
        <div className="navBar" id="navBar">
            <div className="left ">
            <h1><a href="" className="logo"> ARTISAN<span className="text-warning">BRIDGE</span></a></h1>
            </div>
            <div className="right">
            <ul class="nav nav-pills">
    <li class="nav-item">
        <a href="" class="nav"><img src="images/home.png" alt="" className="home"/> <span>Home</span></a>

    </li>
    <li class="nav-item">
        <a href="#" class="nav"><img src="images/services.png" alt="" className="services"/> Services</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav"><img src="images/find an artisan.png" alt="" className="services"/> Find an Artisan</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav "><img src="images/records.png" alt="" className="home"/> Records</a>
    </li>
    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="images/profile.png" alt="" className="services"/> Profile</a>
                <div class="dropdown-menu">
                    <a href="log in.html" class="dropdown-item">Login</a>
                    <a href="sign up.html" class="dropdown-item">Sign up</a>
                    </div>
</ul>

            </div>
        </div>
    )
}
