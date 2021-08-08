import Navigation from "./components/navigationBar/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.scss";
import Home from "./components/Home/home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Sign up/Sign up.jsx";
import Service from "./components/Service/Service";
import Artisan from "./components/Artisan/Artisan.jsx";
import Records from "./components/Records/Records.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import {  useEffect, useState } from "react";
import ArtisanSelect from "./components/ArtisanSelect/ArtisanSelect.jsx";
import Logout from "./components/Logout/Logout";
import RecordRoute from "./components/PrivateRoute/RecordRoute.jsx";
import AdminRoute from "./components/PrivateRoute/AdminRoute"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Admin_register from "./components/admin_register/Admin_register.jsx";
import axios from "axios";

function App() {
  const [user, setUser] = useState({ customer_username: "", password: "" });
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user_signup, setSign] = useState({
    first_name: "",
    last_name: "",
    email: "",
    city: "",
    phone: "",
    customer_username: "",
    password: "",
  });

  const [admin_reg, setAdminSign] = useState({
    username: "",
    email: "",
    password: "",
  });

  const log_in = (details) => {
    console.log(details.customer_username);
  };
  const Sign_up = (Signup_details) => {
    console.log(Signup_details);
  };
  const admin_Register = (Admin_details) => {
    console.log(Admin_details);
  };

  const [servs1, getservs1] =useState(" ");
  const [des1, getdes1] =useState(" ");
  const [ima1,getima1]= useState(" ")
  const [servs2, getservs2] =useState(" ");
  const [des2, getdes2] =useState(" ");
  const [ima2,getima2]= useState(" ")
  const [servs3, getservs3] =useState(" ");
  const [des3, getdes3] =useState(" ");
  const [ima3,getima3]= useState(" ")


  useEffect(() => {
    getPopular_services();
  }, []);
  
  const getPopular_services = () =>{
  axios.get("http://127.0.0.1:5000/popular_service")
   .then((response) => {
    const sev1 = response.data[0].service
    getservs1(sev1)
    const dess1 = response.data[0].Description
    getdes1(dess1)
    const image1=response.data[0].image
    getima1(image1)
    const sev2 = response.data[1].service
   getservs2(sev2)
   const dess2 = response.data[1].Description
    getdes2(dess2)
    const image2=response.data[1].image
    getima2(image2)
    const sev3 = response.data[2].service
  getservs3(sev3)
  const dess3 = response.data[2].Description
    getdes3(dess3)
    const image3=response.data[2].image
    getima3(image3)
  } )
}


 
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login log_in={log_in} />
          </Route>
          <Route path="/logout">
            <Logout
              setIsAuthenticated={setIsAuthenticated}
              setIsLoggedIn={setIsloggedIn}
            />
          </Route>
          <Route path="/signup">
            <Signup Sign_up={Sign_up} />
          </Route>
          <Route path="/signup">
            <Signup Sign_up={Sign_up} />
          </Route>
          <Route path="/AdminRegister">
            <Admin_register admin_Register={admin_Register} />
          </Route>
          <Route path="/service">
            <Navigation />
            <div className="sections">
              <Service />
              <Footer />
            </div>
          </Route>
          <Route exact path="/artisan">
            <Navigation />
            <div className="sections">
              <Artisan />
              <Footer />
            </div>
          </Route>
          <Route path="/artisan/:id" component={ArtisanSelect}>
            <Navigation />
            <div className="sections">
              <ArtisanSelect />
              <Footer />
            </div>
          </Route>
          {/* <Route path="/admin">
            <AdminPanel />
            <div className="side">
              <SideBar />
              <AdminHome />
            </div>
          </Route> */}
          <PrivateRoute path="/records" component={RecordRoute} />
          <PrivateRoute path="/admin" component={AdminRoute}/>
          <Route path="/signup">
            <Signup Sign_up={Sign_up} />
          </Route>
          <Route path="/service">
            <Navigation />
            <div className="sections">
              <Service />
              <Footer />
            </div>
          </Route>
          <Route path="/artisan">
            <Navigation />
            <div className="sections">
              <Artisan />
              <Footer />
            </div>
          </Route>
          <Route path="/records">
            <Navigation />
            <div className="sections">
              <Records />
              <Footer />
            </div>
          </Route>
          <Route path="/Home">
            <Navigation />
            <div className="sections">
              <Home servs1={servs1} des1={des1} 
              servs2={servs2} des2={des2}
              servs3={servs3} des3={des3}
              ima1={ima1} ima2={ima2} ima3={ima3} />
              <Footer />
            </div>
          </Route>
          <Route path="/">
            <Navigation />
            <div className="sections">
              <Home servs1={servs1} des1={des1} 
              servs2={servs2} des2={des2}
              servs3={servs3} des3={des3}
              ima1={ima1} ima2={ima2} ima3={ima3}/>
              <Footer />
            </div>
          </Route>
          <Route path="/Dashboard">
            <Navigation />
            <div className="sections">
              <Dashboard />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
