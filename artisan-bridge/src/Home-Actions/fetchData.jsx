import {React, useState} from "react";





const FetchData = ({route, state}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  fetch(`http://127.0.0.1:5000/${route}`)
    .then((response) => response.json())
    .then((data) => {
      setIsLoading(false);
      state(data);
    })
    .catch((error) => {
      setIsLoading(false);
      setIsError(true);
    });
};

export default FetchData;