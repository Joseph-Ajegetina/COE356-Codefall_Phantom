import "./topRatedArtisan.scss"
import { Link } from 'react-router-dom'


export default function topRatedArtisan() {
    return (
        <div className="topRatedArtisan">
            <div className="artisan-wrapper-center">
                <a href="" className="wrapper-link">
                    <div className="artisan-wrapper">
                      <div>
                        <img src="images/artisan1.jpg" alt="" className="artisan-img"/>
                      </div>
                      <div className="artisan-elipse">
                      <div className="description">
                      <img src="images/find an artisan.png" alt="" className="ratingimg"/>
                      <span className="skill">
                        Skills:</span><span className="skill">Electrician</span>  
                      
                      </div>
                     </div>
                      <div className="artisan-elipse">
                      <div className="description">
                      <img src="images/rating.png" alt="" className="ratingimg"/>
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
