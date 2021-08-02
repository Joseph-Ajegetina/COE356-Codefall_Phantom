import "./topRatedArtisan.scss"
import { Link } from 'react-router-dom'


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
                
             
            </div>
          

         </div>
    )
}
