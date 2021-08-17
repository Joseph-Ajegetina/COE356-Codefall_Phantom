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
<<<<<<< HEAD
  const [refreshKey, setRefreshKey] = useState(0);
=======
>>>>>>> database

  const fetchArtisansData = () => {
    fetch("http://127.0.0.1:5000/find_artisan")
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
<<<<<<< HEAD
  }, [refreshKey]);
=======
  });
>>>>>>> database

  return (
    <>
      <Slider />
      {artisans.map((artisan) => {
        const skillList = artisan[1];
        const skill = artisan[0];
        if (skillList.length != 0) {
          return <FindPageComponent skill={skill} data={skillList} />;
        }
      })}
    </>
  );
};

export default FindPage;
