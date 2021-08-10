export const fetchTopRatedArtisans = async () => {
  const fetchfunc =async () => {
    fetch("http://127.0.0.1:5000/top_rated_artisans")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Could not fetch data");
        }
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
  };

  const topArtisans = await fetchfunc();
  console.log(topArtisans)
  return topArtisans;
};
