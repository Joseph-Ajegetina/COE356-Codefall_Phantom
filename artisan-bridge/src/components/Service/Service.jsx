import React from "react";
import "./Service.scss";
import PopularServices from "../popularServices/PopularServices";
import { useState, useEffect } from "react";

export default function Service() {
  const [service, setService] = useState([]);
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
      <img src="images/slide2.jpg" alt="" className="service_image" />
      <div className="service-home">
        {service.map((service) => {
          return <PopularServices service={service} />;
        })}
      </div>
    </div>
  );
}
