import "./navigation.scss"
import { Link } from 'react-router-dom'


export default function navigation() {
    return (
        <div className="navBar" id="navBar">
            <div className="left ">
                <Link to="/home" className="logo">
                <h1>
                 ARTISAN<span className="text-warning">BRIDGE</span></h1>
                </Link>
            </div>
            <div className="right">
            <ul class="nav nav-pills">
    <li class="nav-item">
      <Link to="/home" className="nav">
     <img src="images/home.png" alt="" className="home"/> <span>Home</span>
      </Link>  
    </li>
    <li class="nav-item">
        <Link to="service" className="nav"> 
        <img src="images/services.png" alt="" className="services"/> Services
        </Link>
    </li>
    <li class="nav-item">
        <Link to="artisan" className="nav">
        <img src="images/find an artisan.png" alt="" className="services"/> Find an Artisan
        </Link>
    </li>
    <li class="nav-item">
        <Link to="/records" className="nav">
        <img src="images/records.png" alt="" className="home"/> Records
        </Link>
    </li>
    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="images/profile.png" alt="" className="services"/> Profile</a>
                <div class="dropdown-menu">
                    <Link to="/login" className="dropdown-item"> 
                   Login
                    </Link>
                    <Link to="/signup" className="dropdown-item">
                    Sign up
                    </Link>
                    
                    </div>
</ul>

            </div>
        </div>
    )
}
