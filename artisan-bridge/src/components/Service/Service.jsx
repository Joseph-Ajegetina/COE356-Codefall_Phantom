import React from "react";
import "./Service.scss";
import PopularServices from "../popularServices/PopularServices";
import { Link } from "react-router-dom";

export default function Service(props) {
  console.log(props.image9)
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
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image1}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service1}</h3>
              <p className="text">
              {props.description1} </p>
            </div>
          </div>
        </a>
          </div>
          <div className="col">
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image2}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service2}</h3>
              <p className="text">
              {props.description2} </p>
            </div>
          </div>
        </a>
            
          </div>
          <div className="col">
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image3}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service3}</h3>
              <p className="text">
              {props.description3} </p>
            </div>
          </div>
        </a>
          </div>
          <div className="col">
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image4}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service4}</h3>
              <p className="text">
              {props.description4} </p>
            </div>
          </div>
        </a>
          </div>
          <div className="col">
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image5}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service5}</h3>
              <p className="text">
              {props.description5} </p>
            </div>
          </div>
        </a>
          </div>
          <div className="col">
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image6}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service6}</h3>
              <p className="text">
              {props.description6} </p>
            </div>
          </div>
        </a>
          </div>
          <div className="col">
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image7}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service7}</h3>
              <p className="text">
              {props.description7} </p>
            </div>
          </div>
        </a>
          </div>
          <div className="col">
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image8}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service8}</h3>
              <p className="text">
              {props.description8} </p>
            </div>
          </div>
        </a>
          </div>
          <div className="col">
          <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src={props.image9}
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>{props.service9}</h3>
              <p className="text">
              {props.description9} </p>
            </div>
          </div>
        </a>
          </div>
        
        </div>
        <a href="#top" className="service-link">
          Back to top
        </a>
      </div>
    </div>
  );
}
