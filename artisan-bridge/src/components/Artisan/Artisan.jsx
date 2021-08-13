import React from "react";
import "./Artisan.scss";
import TopRatedArtisan from "../topRatedArtisan/TopRatedArtisan";

export default function Artisan() {
  return (
    <div className="artisan">
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
      <div className="title">
        <h3>All Artisans</h3>
      </div>
      <div>
        <div className="row">
          <h4 className="job-title">Electricians</h4>
          <div className="col-4">
            <TopRatedArtisan
              image="images/artisan1.jpg"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
          <div className="col-4">
            <TopRatedArtisan
              image="images/artisan4.jpg"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
          <div className="col-2">
            <TopRatedArtisan
              image="images/artisan3.jpg"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
        </div>
        <div className="row">
          <h4 className="job-title">Plumbers</h4>
          <div className="col-4">
            <TopRatedArtisan
              image="images/artisan5.jfif"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
          <div className="col-4">
            <TopRatedArtisan
              image="images/artisan2.jpg"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
          <div className="col-2">
            <TopRatedArtisan
              image="images/artisan6.jfif"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
        </div>{" "}
        <div className="row">
          <h4 className="job-title">Footwear Repair</h4>
          <div className="col-4">
            <TopRatedArtisan
              image="images/artisan7.jfif"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
          <div className="col-4">
            <TopRatedArtisan
              image="images/artisan8.jfif"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
          <div className="col-2">
            <TopRatedArtisan
              image="images/artisan9.jpg"
              skillimage="images/location.png"
              skillType="Kotei"
              skill="Location"
            />
          </div>
        </div>
        <a href="#top" className="service-link">
          Back to top
        </a>
      </div>
    </div>
  );
}
