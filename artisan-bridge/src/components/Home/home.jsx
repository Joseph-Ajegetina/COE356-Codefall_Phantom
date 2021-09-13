import "./home.scss";
import PopularServices from "../popularServices/PopularServices";
import TopRatedArtisan from "../topRatedArtisan/TopRatedArtisan";
import { Link, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import Message from "../navigationBar/Message";
import { useState, useEffect } from "react";
import Slider from "../UI/Slider";

export default function Home() {
  const [alertMessage, setAlertMessage] = useState({});
  const [showAlert, setShowAlert] = useState(null);
  const [topArtisans, setTopArtisans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [popularService, setpopularService] = useState([]);

  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();

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
      });
  };

  const fetchPopularservice = () => {
    fetch("http://127.0.0.1:5000/popular_service")
      .then((response) => response.json())
      .then((data) => {
        setpopularService(data);
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
    fetchPopularservice();
  }, [refreshKey]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showAlert ? <Message alertMessage={alertMessage} /> : ""}
      <div className="imageSlider" id="imageSlider">
        <Slider />
        <h4>Popular Services</h4>
        <div className="service-home">
          {popularService.map((service) => {
            return <PopularServices service={service} />;
          })}
        </div>
        <Link to="/service" className="service-link">
          All Services
        </Link>
        <h4>Top Rated Artisans</h4>
        <div className="artisan-home">
          {topArtisans.map((artisan) => {
            return (
              <TopRatedArtisan
                skillimage="images/artisan.png"
                artisan={artisan}
              />
            );
          })}
        </div>
        <Link to="/find" className="service-link">
          All Artisans
        </Link>
      </div>
    </>
  );
}
