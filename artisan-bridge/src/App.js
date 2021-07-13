import Navigation from "./components/navigationBar/Navigation.jsx"
import Footer from "./components/footer/Footer.jsx"
import ImageSlider from "./components/imageSlider/ImageSlider.jsx"
import PopularServices from "./components/popularServices/PopularServices.jsx"
import TopRatedArtisan from "./components/topRatedArtisan/TopRatedArtisan.jsx"
import ControlledForm from "./components/ControlledForm"
import "./App.scss"
function App() {
  return (
    <div className="app">
    <Navigation/>
    
    <div className="sections">
      <ImageSlider/>
      <PopularServices/>
      <TopRatedArtisan/>
      <ControlledForm/>
      <Footer/>
    </div>
    
    </div>
  );
}

export default App;
