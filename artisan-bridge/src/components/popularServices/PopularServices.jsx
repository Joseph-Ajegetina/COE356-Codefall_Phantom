import "./popularServices.scss"
import { Link } from 'react-router-dom'

export default function popularServices({title, image, description}) {
    return (
        <div className="popularServices">
            <div className="wrapper-center">
                <a href="" className="wrapper-link">
                <div className="wrapper">
                    <div className="elipse">
                        <img src={image} alt="" className="elipseimage" />
                    </div>
                    <div className="wrapper-text">
                      <h3>{title}</h3>
                       <p className="text">
                      {description}  
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
    )
}
