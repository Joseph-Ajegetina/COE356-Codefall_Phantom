import "./popularServices.scss";
import { Link } from "react-router-dom";

export default function popularServices({ service }) {
  return (
    <div className="popularServices">
      <div className="wrapper-center">
        <Link
          to={{
            pathname: `/service/${service.service_id}`,
            state: { service: service },
          }}
          className="wrapper-link"
        >
          <a href="" className="wrapper-link">
            <div className="wrapper">
              <div className="elipse">
                <img src={service.image_path} alt="" className="elipseimage" />
              </div>
              <div className="wrapper-text">
                <h3>{service.skill}</h3>
                <p className="text">{service.description} </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
