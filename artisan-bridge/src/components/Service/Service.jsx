import React from "react";
import "./Service.scss";
import PopularServices from "../popularServices/PopularServices";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function Service({title, image, description}) {
    return (
        <div className="service" id="service">
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
          </div>
          <div className="title" >
          <h3 >All Serivces</h3>
          </div>
         
         <div className="container">
           <div className="row">
             <div className="col" ><PopularServices title="Electronics" image="images/elipseimage1.png" description="Get your blenders, rice cookers, hot plates fixed by a trusted Artisan"/></div>
             <div className="col"><PopularServices title="Phones and Watches" image="images/elipseimage2.png" description="Get a quick fix on your broken phone screen, or watch battery replacement"/></div>
             <div className="col"><PopularServices title="Footwear Repair" image="images/elipseimage3.png" description="Mend your shoes, sandals, sneakers, slippers etc."/></div>
             <div className="col"><PopularServices title="Plumbering" image="images/elipseimage4.png" description="Do you have a faulty tap, broken pipe? contact our plumbering services"/></div>
             <div className="col"><PopularServices title="Carpentery" image="images/elipseimage5.png" description="All sorts of furniture services are available here"/></div>
             <div className="col"><PopularServices title="Mechanic" image="images/elipseimage6.png" description="Our Mechanics work on all brands of cars and all types of faults"/></div>
             <div className="col"><PopularServices title="Metal Works" image="images/elipseimage7.png" description="Welding services, metal art works and more"/></div>
             <div className="col"><PopularServices title="Electric and Fridges" image="images/elipseimage8.png" description="Fault meter, lights, fans, fridges and all electrical problems"/></div>
           </div>
           <a href="#top" className="service-link">Back to top</a>
         </div>
          </div>
    )
=======
export default function Service() {
  return (
    <div className="service" id="service">
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
        <h3>All Serivces</h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
          <div className="col">
            <PopularServices />
          </div>
        </div>
        <a href="#top" className="service-link">
          Back to top
        </a>
      </div>
    </div>
  );
>>>>>>> 4d6bde08b2398833c1441807a5c497ee01892978
}
