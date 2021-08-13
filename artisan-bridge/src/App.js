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
import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import {  useEffect, useState } from "react";
import ArtisanSelect from "./components/ArtisanSelect/ArtisanSelect.jsx";
import AddArtisans from "./components/AdminPanel/pages/AddArtisans/AddArtisans.jsx"
import Services from "./components/AdminPanel/pages/services/services"
import Logout from "./components/Logout/Logout";
import RecordRoute from "./components/PrivateRoute/RecordRoute.jsx";
import SideBar from "./components/AdminPanelSideBar/sideBar.jsx";
import AdminRoute from "./components/PrivateRoute/AdminRoute"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Admin_register from "./components/admin_register/Admin_register.jsx";
import ArtisanUpdate from "./components/AdminPanel/pages/ArtisanUpdate/ArtisanUpdate.jsx"
import NewArtisan from "./components/AdminPanel/pages/NewArtisan/NewArtisan.jsx"
import ServiceUpdate from "./components/AdminPanel/pages/ServiceUpdate/ServiceUpdate.jsx"
import NewService from "./components/AdminPanel/pages/NewService/NewService.jsx"
import axios from "axios";
import FindArtisan from "./components/FindArtisans/FindArtisan.jsx";

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

const [service1, getservice1] =useState(" ");
const [description1, getdescription1] =useState(" ");
const [image1, getimage1]= useState(" ")
const [service2,  getservice2] =useState(" ");
const [description2, getdescription2] =useState(" ");
const [image2, getimage2]= useState(" ")
const [service3, getservice3] =useState(" ");
const [description3, getdescription3] =useState(" ");
const [image3, getimage3]= useState(" ")
const [service4, getservice4] =useState(" ");
const [description4, getdescription4] =useState(" ");
const [image4, getimage4]= useState(" ")
const [service5, getservice5] =useState(" ");
const [description5, getdescription5] =useState(" ");
const [image5, getimage5]= useState(" ")
const [service6, getservice6] =useState(" ");
const [description6, getdescription6] =useState(" ");
const [image6, getimage6]= useState(" ")
const [service7, getservice7] =useState(" ");
const [description7, getdescription7] =useState(" ");
const [image7, getimage7]= useState(" ")
const [service8, getservice8] =useState(" ");
const [description8, getdescription8] =useState(" ");
const [image8, getimage8]= useState(" ")
const [service9, getservice9] =useState(" ");
const [description9, getdescription9] =useState(" ");
const [image9, getimage9]= useState(" ")

useEffect(() => {
  getservices();
}, []);

const getservices = () =>{
axios.get("http://127.0.0.1:5000/service")
 .then((response) => {
  const sev1 = response.data[0].service
  getservice1(sev1)
  const dess1 = response.data[0].Description
  getdescription1(dess1)
  const image1=response.data[0].image
  getimage1(image1)
  const sev2 = response.data[1].service
  getservice2(sev2)
 const dess2 = response.data[1].Description
 getdescription2(dess2)
  const image2=response.data[1].image
  getimage2(image2)
  const sev3 = response.data[2].service
  getservice3(sev3)
const dess3 = response.data[2].Description
getdescription3(dess3)
  const image3=response.data[2].image
  getimage3(image3)
  const sev4 = response.data[3].service
  getservice4(sev4)
const dess4 = response.data[3].Description
getdescription4(dess4)
  const image4=response.data[3].image
  getimage4(image4)
  const sev5 = response.data[4].service
  getservice5(sev5)
const dess5 = response.data[4].Description
getdescription5(dess5)
  const image5=response.data[4].image
  getimage5(image5)
  const sev6 = response.data[5].service
  getservice6(sev6)
const dess6 = response.data[5].Description
getdescription6(dess6)
  const image6=response.data[5].image
  getimage6(image6)
  const sev7 = response.data[6].service
  getservice7(sev7)
const dess7 = response.data[6].Description
getdescription7(dess7)
  const image7=response.data[6].image
  getimage7(image7)
  const sev8 = response.data[7].service
  getservice8(sev8)
const dess8 = response.data[7].Description
getdescription8(dess8)
  const image8=response.data[7].image
  getimage8(image8)
  const sev9 = response.data[8].service
  getservice9(sev9)
const dess9 = response.data[8].Description
getdescription9(dess9)
  const image9=response.data[8].image
  getimage9(image9)
 
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
          <Route path="/find">
            <FindArtisan/>
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
              <Service service1={service1} service2={service2} service3={service3}
              service4={service4}service5={service5}service6={service6}
              service7={service7}service8={service8} service9={service9} 
              description1={description1} description2={description2} description3={description3}
              description4={description4} description5={description5} description6={description6}
              description7={description7} description8={description8} description9={description9}
              image1={image1} image2={image2} image3={image3} image4={image4} image5={image5}
              image6={image6} image7={image7} image8={image8} image9={image9}
              />
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
          <PrivateRoute path="/records" component={RecordRoute} />
          <PrivateRoute path="/admin" component={AdminRoute}/>
          <Route path="/artisans">
            <AdminPanel/>
            <div className="side">
            <SideBar/>
           <AddArtisans/>
            </div>
          </Route>
          <Route path="/services">
            <AdminPanel/>
            <div className="side">
            <SideBar/>
           <Services/>
            </div>
          </Route>
          <Route path="/newArtisan">
            <AdminPanel/>
            <div className="side">
            <SideBar/>
           <NewArtisan/>
            </div>
          </Route>
          <Route path="/newService">
            <AdminPanel/>
            <div className="side">
            <SideBar/>
           <NewService/>
            </div>
          </Route>
          <Route path="/artisanEdit/:artisanId">
            <AdminPanel/>
            <div className="side">
            <SideBar/>
           <ArtisanUpdate/>
            </div>
          </Route>
          <Route path="/serviceEdit/:serviceId">
            <AdminPanel/>
            <div className="side">
            <SideBar/>
           <ServiceUpdate/>
            </div>
          </Route>
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
  )
  
}



export default App;
