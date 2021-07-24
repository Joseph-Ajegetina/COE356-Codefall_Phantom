import Navigation from "./components/navigationBar/Navigation.jsx"
import Footer from "./components/footer/Footer.jsx"
import "./App.scss"
import Home from "./components/Home/home.jsx"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/Login/Login.jsx"
import Signup from "./components/Sign up/Sign up.jsx"
import Service from "./components/Service/Service"
import Artisan from "./components/Artisan/Artisan.jsx"
import Records from "./components/Records/Records.jsx"



function App() {
  return (
   <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
     <Login />
    </Route>
    <Route path="/signup">
    <Signup />
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
    <Route path="/home">
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
    </Switch>
    </div>
    </Router>
  );
}

export default App;
