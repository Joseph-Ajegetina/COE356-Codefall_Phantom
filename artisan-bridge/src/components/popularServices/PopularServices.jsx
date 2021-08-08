import "./popularServices.scss";

export default function popularServices(props) {
  return (
    <div className="popularServices">
      <div className="wrapper-center">
        <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img src={props.image1} alt="" className="elipseimage" />
            </div>
            <div className="wrapper-text">
              <h3>{props.serv1}</h3>
              <p className="text">{props.dess1} </p>
            </div>
          </div>
        </a>

        <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img src={props.image2} alt="" className="elipseimage" />
            </div>
            <div className="wrapper-text">
              <h3>{props.serv2}</h3>
              <p className="text">{props.dess2}</p>
            </div>
          </div>
        </a>

        <a href="" className="wrapper-link">
          <div className="wrapper">
            <div className="elipse">
              <img src={props.image3} alt="" className="elipseimage" />
            </div>
            <div className="wrapper-text">
              <h3>{props.serv3}</h3>
              <p className="text">{props.dess3}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
