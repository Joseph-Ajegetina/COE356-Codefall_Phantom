import "./home.scss";
import PopularServices from "../popularServices/PopularServices";
import TopRatedArtisan from "../topRatedArtisan/TopRatedArtisan";
import { Link, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import Message from "../navigationBar/Message";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [alertMessage, setAlertMessage] = useState({});
  const [showAlert, setShowAlert] = useState(null);



  const location = useLocation();
  const history = useHistory();
  const {url, path} = useRouteMatch();
  

  useEffect(() =>{


  if (location.state) {
    const messageLocation = location.state.messageParams;
    const alertLocation = location.state.alertParams;

    if (messageLocation && alertLocation) {
      setAlertMessage({ message: messageLocation, alert: alertLocation });
      setShowAlert(true);
      setTimeout(()=>{
        setShowAlert(false);
      }, 3000);
      history.replace(url)
      
    }
  }
  },[])
 
  console.log(showAlert, "show alert");
  console.log(alertMessage, "alert message");
  return (
    <>
      {showAlert ? <Message alertMessage={alertMessage} /> : ""}
      <div className="imageSlider" id="imageSlider">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="images/slide1.jpg" class="sliderimg" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="images/slide2.jpg" class="sliderimg" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="images/slide3.jpg" class="sliderimg" alt="..." />
            </div>
          </div>
          {/*  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
        </div>
        <h4>Popular Services</h4>
        <div className="service-home">
          <PopularServices serv1={props.servs1} dess1={props.des1}
           serv2={props.servs2} dess2={props.des2} serv3={props.servs3} 
           dess3={props.des3} image1={props.ima1} image2={props.ima2} image3={props.ima3}/>

        </div>
        <Link to="/service" className="service-link">
          All Services
        </Link>
        <h4>Top Rated Artisans</h4>
        <div className="artisan-home">
          <TopRatedArtisan
            image="images/artisan1.jpg"
            skillimage="images/artisan.png"
            skillType="Electrician"
            skill="Skill"
          />
          <TopRatedArtisan
            image="images/artisan2.jpg"
            skillType="Plumber"
            skill="Skill"
            skillimage="images/artisan.png"
          />
          <TopRatedArtisan
            image="images/artisan3.jpg"
            skillType="Electrician"
            skill="Skill"
            skillimage="images/artisan.png"
          />
        </div>
        <Link to="artisan" className="service-link">
          All Artisans
        </Link>
      </div>
    </>
  );
}
