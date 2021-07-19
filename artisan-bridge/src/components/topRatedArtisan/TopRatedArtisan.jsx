import "./topRatedArtisan.scss"

export default function topRatedArtisan() {
    return (
        <div className="topRatedArtisan">
            <h4>Top Rated Artisans</h4>
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
                
                <a href="" className="wrapper-link">
                    <div className="artisan-wrapper">
                    <div>
                         <img src="images/artisan2.jpg" alt="" className="artisan-img"/>
                      </div>
                    </div>
                </a>
                <a href="" className="wrapper-link">
                    <div className="artisan-wrapper">
                    <div>
                         <img src="images/artisan3.jpg" alt="" className="artisan-img"/>
                      </div>
                    </div>
                </a>
            </div>
            <a href="" className="service-link">All Artisans</a>

         </div>
    )
}
