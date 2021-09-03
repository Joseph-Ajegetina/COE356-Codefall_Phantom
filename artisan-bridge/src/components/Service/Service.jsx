import React from "react";
import "./Service.scss";
import PopularServices from "../popularServices/PopularServices";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider from "../UI/Slider";


export default function Service()
{

  const [Service, setService] = useState( [] );
  const fetchService = () =>
  {
    fetch( "http://127.0.0.1:5000/service" )
      .then( ( response ) => response.json() )
      .then( ( data ) =>
      {
        setService( data );
      } )
  }

  useEffect( () =>
  {
    fetchService();
  }, [] );


  return (
    <div className="imageSlider" id="imageSlider">
      <img src="images/slide2.jpg" alt="" className="service_image" />
      <div className="service-home">
        {Service.map( ( service ) =>
        {
          return (
            <PopularServices service={service}
            /> );
        } )}
      </div>
    </div>

  );
}
