import Navigation from "./components/navigationBar/Navigation.jsx"
import Footer from "./components/footer/Footer.jsx"
import "./App.scss"
import Home from "./components/Home/home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/Login/Login.jsx"
import Signup from "./components/Sign up/Sign up.jsx"
import Service from "./components/Service/Service"
import Artisan from "./components/Artisan/Artisan.jsx"
import Records from "./components/Records/Records.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import AdminPanel from "./components/AdminPanel/AdminPanel.jsx"
import SideBar from './components/AdminPanelSideBar/sideBar';
import Adminhome from "./components/AdminPanel/pages/Adminhome/Adminhome"
import { useState } from "react"
import ArtisanSelect from "./components/ArtisanSelect/ArtisanSelect.jsx";
import Artisans from "./components/AdminPanel/pages/artisans/artisans.jsx"
import Services from "./components/AdminPanel/pages/services/services"


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

  const log_in = (details) => {
    console.log(details.customer_username);
  };
  const Sign_up = (Signup_details) => {
    console.log(Signup_details);
  };

  return (
   <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
     <Login  log_in={log_in} />
    </Route>
    <Route path="/artisan/:id" component={ArtisanSelect}>
            <Navigation />
            <div className="sections">
              <ArtisanSelect />
              <Footer />
            </div>
          </Route>
    <Route path="/admin">
      <AdminPanel/>
      <div className="side">
        <SideBar/>
        <Adminhome/>
      </div>
    </Route>
    <Route path="/artisans">
    <AdminPanel/>
    <div className="side">
        <SideBar/>
        <Artisans/>
      </div>
    </Route>
    <Route path="/services">
    <AdminPanel/>
    <div className="side">
        <SideBar/>
        <Services/>
      </div>
    </Route>
    <Route path="/signup">
    <Signup Sign_up={Sign_up} />
    </Route>
    <Route path="/service">
    <Navigation/>
    <div className="sections"> 
<Service />
<Footer/>
    </div>
    </Route>
    <Route path="/artisan">
     <Navigation/>
     <div className="sections"> 
<Artisan />
<Footer/>
    </div>
    </Route>
    <Route path="/records">
    <Navigation/>
    <div className="sections"> 
<Records/>
<Footer/>
    </div>
    </Route>
    <Route path="/Home">
      <Navigation/>
    <div className="sections">
      <Home/>
      <Footer/>
    </div>
    </Route>
    <Route path="/">
      <Navigation/>
    <div className="sections">
      <Home/>
      <Footer/>
    </div>
    </Route>
    <Route path="/Dashboard">
      <Navigation/>
    <div className="sections">
      <Dashboard/>
      <Footer/>
    </div>
    </Route>
    
    </Switch>
    </div>
    </Router>
  );
}

export default App;
