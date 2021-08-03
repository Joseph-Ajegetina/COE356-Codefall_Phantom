import "./popularServices.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function popularServices() {
  
   var Description_str = axios.get("http://127.0.0.1:5000/popular_services")
   .then((response) => {
    return response.data.Description
  } )
  console.log(Description_str);

  return (
    <div className="popularServices">
      <div className="wrapper-center">
        <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img
                src="images/elipseimage1.png"
                alt=""
                className="elipseimage"
              />
            </div>
            <div className="wrapper-text">
              <h3>Electronics</h3>
              <p className="text">
                Get your blenders, rice cookers, hot plate, fridges etc. fix by

              </p>
            </div>
          </div>
        </a>

        {/*  <a href="" className="wrapper-link">
                 <div className="wrapper">
                    <div className="elipse">
                    <img src="images/elipseimage2.png" alt="" className="elipseimage2" />
                    </div>
                    <div className="wrapper-text">
                   <h3>Phones and Watches</h3>
                    <p className="text">
                    Get a quick fix on your broken phone screen,  or watch battery replacement 
                    </p>
                    </div>
                 </div>
                 </a>
                 <a href="" className="wrapper-link">
                 <div className="wrapper">
                    <div className="elipse">
                    <img src="images/elipseimage3.png" alt="" className="elipseimage3" />
                    </div>
                    <div className="wrapper-text">
                    <h3>Footwear Repair</h3>
                    <p className="text">
                    Mend your shoes, sandals, sneakers, slippers etc.
                    </p>
                 </div>
                    </div>
                    </a> */}
      </div>
    </div>
  );
}
