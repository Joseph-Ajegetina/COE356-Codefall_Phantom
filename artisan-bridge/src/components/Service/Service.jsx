import React from "react";
import "./Service.scss";
import PopularServices from "../popularServices/PopularServices";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider from "../UI/Slider";

export default function Service() {
  const [Service, setService] = useState([]);
  const fetchService = () => {
    fetch("http://127.0.0.1:5000/services")
      .then((response) => response.json())
      .then((data) => {
        const dataList = Object.values(data);
        setService(dataList);
      });
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <div className="imageSlider" id="imageSlider">
      <Slider />
      <h4>Services</h4>
      <div className="service-home">
        {Service.map((service) => {
          return <PopularServices service={service} />;
        })}
      </div>
    </div>
  );
}
