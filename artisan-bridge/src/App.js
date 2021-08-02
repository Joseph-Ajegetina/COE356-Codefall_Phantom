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
import ArtisanSelect from "./components/ArtisanSelect/ArtisanSelect.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { useState } from "react";
import Admin_register from "./components/admin_register/Admin_register.jsx";

function App() {
  const [user, setUser] = useState({ customer_username: "", password: "" });

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

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login log_in={log_in} />
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
              <Home />
              <Footer />
            </div>
          </Route>
          <Route path="/">
            <Navigation />
            <div className="sections">
              <Home />
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
