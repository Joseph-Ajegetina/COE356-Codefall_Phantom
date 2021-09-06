import "./topRatedArtisan.scss";
import { Link } from "react-router-dom";

export default function topRatedArtisan( { artisan, skillimage } )
{
  return (
    <div className="topRatedArtisan">
      <div className="artisan-wrapper-center">
        <Link
          to={{
            pathname: `/artisan/${ artisan.artisan_id }`,
            state: { artisan: artisan },
          }}
          className="wrapper-link"
        >
          <div className="artisan-wrapper">
            <div>
              <img
                src={`/images/${ artisan.profile_image_path }`}
                alt=""
                className="artisan-img "
              />
            </div>
            <div className="description">
              <div className="artisan-elipse">
                <img
                  src={`/images/${ artisan.skill }.png`}
                  alt=""
                  className="rating-img"
                />
              </div>
              <span className="skill">
                Service: {artisan.skill}
              </span>
            </div>
            <div className="artisan-elipse">
              <div className="description">
                <img src="images/rating.png" alt="" className="rating-img" />
                <span className="skill">
                  Rating:{artisan.rating}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
