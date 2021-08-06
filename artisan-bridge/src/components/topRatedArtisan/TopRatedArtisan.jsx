import "./topRatedArtisan.scss";
import { Link, Route, useRouteMatch } from "react-router-dom";
import ArtisanSelect from "../ArtisanSelect/ArtisanSelect"

export default function topRatedArtisan({
  image,
  rating,
  skillimage,
  artisanID,
  skill,
  urlPath
}) {
  return (
    <div className="topRatedArtisan">
      <div className="artisan-wrapper-center">
          <Link to={urlPath} className="wrapper-link">
            <div className="artisan-wrapper">
              <div>
                <img src={image} alt="" className="artisan-img img-fluid" />
              </div>
              <div className="artisan-elipse">
                <div className="description">
                  <img src={skillimage} alt="" className="rating-img" />
                  <span className="skill display-12">Service:electrician</span>
             
                  
                 
                </div>
              </div>
              <div className="artisan-elipse">
                <div className="description">
                  <img src="images/rating.png" alt="" className="rating-img" />
                  <span className="skill display-12">Rating:{rating}</span>
                  
                </div>
              </div>
            </div>
          </Link>
      </div>
    </div>
  );
}
