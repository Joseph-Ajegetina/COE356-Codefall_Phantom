import "./home.scss";
import PopularServices from "../popularServices/PopularServices";
import TopRatedArtisan from "../topRatedArtisan/TopRatedArtisan";
import { Link, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import Message from "../navigationBar/Message";
import { useState, useEffect } from "react";
import Slider from "../UI/Slider";

<<<<<<< HEAD
export default function Home(props) {
=======
export default function Home() {
>>>>>>> database
  const [alertMessage, setAlertMessage] = useState({});
  const [showAlert, setShowAlert] = useState(null);
  const [topArtisans, setTopArtisans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
<<<<<<< HEAD
  const [refreshKey, setRefreshKey] = useState(0);
=======
  const [popularService, setpopularService] = useState([]);
>>>>>>> database

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
<<<<<<< HEAD
=======
  
  const fetchPopularservice = () => {
    fetch("http://127.0.0.1:5000/popular_service")
      .then((response) => response.json())
      .then((data) => {
        setpopularService(data);})}
>>>>>>> database

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
<<<<<<< HEAD
  }, [refreshKey]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
=======
    fetchPopularservice();
  }, [])
  if (isLoading) {
    return <div>Loading...</div>;
  }
   
  
  
        

>>>>>>> database

  return (
    <>
      {showAlert ? <Message alertMessage={alertMessage} /> : ""}
      <div className="imageSlider" id="imageSlider">
        <Slider />
        <h4>Popular Services</h4>
        <div className="service-home">
<<<<<<< HEAD
          <PopularServices
            serv1={props.servs1}
            dess1={props.des1}
            serv2={props.servs2}
            dess2={props.des2}
            serv3={props.servs3}
            dess3={props.des3}
            image1={props.ima1}
            image2={props.ima2}
            image3={props.ima3}
          />
=======
        {popularService.map((service) => {
            return (
              <PopularServices service={service}
              />);
            })}

>>>>>>> database
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
        <Link to="artisan" className="service-link">
          All Artisans
        </Link>
      </div>
    </>
  );
}
