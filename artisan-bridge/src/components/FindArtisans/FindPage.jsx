import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "../UI/Slider";
import FindPageComponent from "./FindPageComponent";

const FindPage = () => {
  const [artisans, setArtisans] = useState([]);
  const [showAlert, setShowAlert] = useState(null);
  const [topArtisans, setTopArtisans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchArtisansData = () => {
    fetch("http://127.0.0.1:5000/find")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        const artisanData = Object.entries(data);
        setArtisans(artisanData);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchArtisansData();
  },[]);
 
  return (
    <>
      <Slider />
      {artisans.map(artisan =>{
          return <FindPageComponent skill={artisan[0]} data={artisan[1]} />
      })}
      
    </>
  );
};

export default FindPage;
