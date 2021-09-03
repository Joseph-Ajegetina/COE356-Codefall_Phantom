import React from "react";
import Navigation from "../navigationBar/Navigation";
import Records from "../Records/Records";
import Footer from "../footer/Footer";

const RecordRoute = () => {
  return (
    <>
      <Navigation />
      <div className="sections">
        <Records />
        <Footer />
      </div>
    </>
  );
};

export default RecordRoute;
