
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Slider from "../UI/Slider";
import FindPageComponent from "../FindArtisans/FindPageComponent";

export default function ServiceSelect() {    

    const [ServiceSelect, SetserviceSelect] = useState([]);
   
    const {service_id} = useParams();
    
    const fetchserviceSelect = () => {
    fetch(`http://127.0.0.1:5000/service/${service_id}`)
      .then((response) => response.json())
      .then((data) => {
        SetserviceSelect(data);})}
     
        useEffect(() => {
          fetchserviceSelect();
        }, []);

        console.log(ServiceSelect)
    

        return (
            /*<div>
              <Slider />
              {ServiceSelect.map((artisan) => {
                const skillList = artisan[1];
                const skill = artisan[0];
                if (skillList.length != 0) {
                  return <FindPageComponent skill={skill} data={skillList} />;
                }
              })}
            </div>*/
            <h1>allow</h1>
          );
}
  