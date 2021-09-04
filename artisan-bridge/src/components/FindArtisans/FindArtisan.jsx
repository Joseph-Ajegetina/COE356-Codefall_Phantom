import React from "react";
import Navigation from "../navigationBar/Navigation";
import Footer from "../footer/Footer";
import FindPage from "./FindPage";

const FindArtisan = () => {
  return (
    <>
      <Navigation />
      <div className="sections">
        <FindPage />
        <Footer />
      </div>
    </>
  );
};

export default FindArtisan;
