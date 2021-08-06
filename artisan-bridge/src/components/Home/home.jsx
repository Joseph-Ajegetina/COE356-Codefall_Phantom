import "./home.scss";
import PopularServices from "../popularServices/PopularServices";
import TopRatedArtisan from "../topRatedArtisan/TopRatedArtisan";
import { Link, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import Message from "../navigationBar/Message";
import { useState, useEffect } from "react";

export default function Home() {
  const [alertMessage, setAlertMessage] = useState({});
  const [showAlert, setShowAlert] = useState(null);
  const [topArtisans, setTopArtisans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const { url, path } = useRouteMatch();
  console.log("url :", url,  "path: ", path)

  const fetchTopRatedArtisansData = () => {
    fetch("http://127.0.0.1:5000/top_rated_artisans")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setTopArtisans(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    if (location.state) {
      const messageLocation = location.state.messageParams;
      const alertLocation = location.state.alertParams;

      if (messageLocation && alertLocation) {
        setAlertMessage({ message: messageLocation, alert: alertLocation });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        history.replace(url);
      }
    }

    fetchTopRatedArtisansData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        </div>
        <h4>Popular Services</h4>
        <div className="service-home">
          <PopularServices
            title="Electronics"
            image="images/elipseimage1.png"
            description="Get your blenders, rice cookers, hot plates,fridges fixed by a trusted Artisan"
          />
          <PopularServices
            title="Phones and Watches"
            image="images/elipseimage2.png"
            description="Get a quick fix on your broken phone screen, or watch battery replacement"
          />
          <PopularServices
            title="Footwear Repair"
            image="images/elipseimage3.png"
            description="Mend your shoes, sandals, sneakers, slippers etc."
          />
        </div>
        <Link to="/service" className="service-link">
          All Services
        </Link>
        <h4>Top Rated Artisans</h4>
        <div className="artisan-home">
          {topArtisans.map((artisan) => {
            return (
              // <link to={`${url}/${1}`}>
                <TopRatedArtisan
                  image="images/artisan1.jpg"
                  skillimage="images/artisan.png"
                  skillType="Electrician"
                  skill={artisan.skill}
                  urlPath={`${url}/artisans/${artisan.id}`}
                />
          // </link>
            );
          }) }

          
        </div>
        <Link to="artisan" className="service-link">
          All Artisans
        </Link>
      </div>
    </>
  );
}
