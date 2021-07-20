import Navigation from "./components/navigationBar/Navigation.jsx"
import Footer from "./components/footer/Footer.jsx"
import "./App.scss"
import Home from "./components/Home/home.jsx"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/Login/Login.jsx"
import Signup from "./components/Sign up/Sign up.jsx"



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
    </Route>
    <Route path="/artisan">
     <h1>Artisan Page</h1>
    </Route>
    <Route path="/records">
     <h1>Records Page</h1>
    </Route>
    <Route path="/home">
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
