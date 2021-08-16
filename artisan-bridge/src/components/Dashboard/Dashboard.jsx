import "./dash.scss";
import PopularServices from "../popularServices/PopularServices";
import TopRatedArtisan from "../topRatedArtisan/TopRatedArtisan";

export default function Dashboard() {
  return (
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
      <PopularServices />
      <TopRatedArtisan />
    </div>
  );
}
