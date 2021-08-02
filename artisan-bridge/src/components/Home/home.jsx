import "./home.scss"
import PopularServices from "../popularServices/PopularServices"
import TopRatedArtisan from "../topRatedArtisan/TopRatedArtisan"
import { Link } from 'react-router-dom'


export default function home() {
    return (
        <div className="imageSlider" id="imageSlider">
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/slide1.jpg" class="sliderimg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/slide2.jpg" class="sliderimg" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/slide3.jpg" class="sliderimg" alt="..."/>
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
<PopularServices title="Electronics" image="images/elipseimage1.png" description="Get your blenders, rice cookers, hot plates,fridges fixed by a trusted Artisan"/>
<PopularServices title="Phones and Watches" image="images/elipseimage2.png" description="Get a quick fix on your broken phone screen, or watch battery replacement"/>
<PopularServices title="Footwear Repair" image="images/elipseimage3.png" description="Mend your shoes, sandals, sneakers, slippers etc."/>
</div>
<Link to="/service" className="service-link">
            All Services
            </Link>     
<h4>Top Rated Artisans</h4>
<div className="artisan-home">
<TopRatedArtisan image="images/artisan1.jpg" skillimage="images/artisan.png" skillType="Electrician" skill="Skill"/>
<TopRatedArtisan image="images/artisan2.jpg" skillType="Plumber" skill="Skill"  skillimage="images/artisan.png"/>
<TopRatedArtisan image="images/artisan3.jpg" skillType="Electrician" skill="Skill"  skillimage="images/artisan.png"/>
</div>
<Link to="artisan" className="service-link">
            All Artisans
            </Link>
       </div>
    )
}
