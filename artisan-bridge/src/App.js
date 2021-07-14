import Navigation from "./components/navigationBar/Navigation.jsx"
import Footer from "./components/footer/Footer.jsx"
import ImageSlider from "./components/imageSlider/ImageSlider.jsx"
import PopularServices from "./components/popularServices/PopularServices.jsx"
import TopRatedArtisan from "./components/topRatedArtisan/TopRatedArtisan.jsx"
import "./App.scss"
function App() {
  return (
    <div className="app">
    <Navigation/>
    
    <div className="sections">
      <ImageSlider/>
      <PopularServices/>
      <TopRatedArtisan/>
      <Footer/>
    </div>
    
    </div>
  );
}

export default App;
