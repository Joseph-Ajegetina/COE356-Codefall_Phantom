import "./topRatedArtisan.scss";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function topRatedArtisan({image, skillType,skillimage,skill}) {
    return (
        <div className="topRatedArtisan">
            <div className="artisan-wrapper-center">
                <a href="" className="wrapper-link">
                    <div className="artisan-wrapper">
                      <div>
                        <img src={image} alt="" className="artisan-img"/>
                      </div>
                      <div className="artisan-elipse">
                      <div className="description">
                      <img src={skillimage} alt="" className="rating-img"/>
                      <span className="skill">
                        {skill}:</span><span className="skill">{skillType}</span>  
                      
                      </div>
                     </div>
                      <div className="artisan-elipse">
                      <div className="description">
                      <img src="images/rating.png" alt="" className="rating-img"/>
                      <span className="skill">
                        Rating:</span><span className="skill"></span>  
                      </div>
                    </div>
                    </div>
                </a>
                
             
=======
export default function topRatedArtisan() {
  return (
    <div className="topRatedArtisan">
      <div className="artisan-wrapper-center">
        <a href="" className="wrapper-link">
          <div className="artisan-wrapper">
            <div>
              <img src="images/artisan1.jpg" alt="" className="artisan-img" />
>>>>>>> 4d6bde08b2398833c1441807a5c497ee01892978
            </div>
            <div className="artisan-elipse">
              <div className="description">
                <img
                  src="images/find an artisan.png"
                  alt=""
                  className="ratingimg"
                />
                <span className="skill">Skills:</span>
                <span className="skill">Electrician</span>
              </div>
            </div>
            <div className="artisan-elipse">
              <div className="description">
                <img src="images/rating.png" alt="" className="ratingimg" />
                <span className="skill">Rating:</span>
                <span className="skill"></span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
