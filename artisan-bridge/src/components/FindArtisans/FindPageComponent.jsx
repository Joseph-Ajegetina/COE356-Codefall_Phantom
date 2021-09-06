import React from "react";
import { Link } from "react-router-dom";
import "./FindArtisan.scss"

const FindPageComponent = ( { skill, data } ) =>
{
  return (
    <div className="findPageComponent">
      <h3>{skill}</h3>
      <div className="artisan-home">
        {data.map( ( artisan ) =>
        {
          return (

            <div className="artisan-wrapper-center">
              <Link
                to={{
                  pathname: `/artisan/${ artisan.id }`,
                  state: { artisan: artisan },
                }}
                className="wrapper-link"
              >
                <div className="artisan-wrapper">
                  <div>
                    <img
                      src={`/images/${ artisan.Path }`}
                      alt=""
                      className="artisan-img"
                    />
                  </div>
                  <div className="description">
                    <div className="artisan-elipse">

                      <img
                        src="/images/location.png"
                        alt=""
                        className="rating-img"
                      />

                    </div>
                    <span className="skill">
                      Location: {artisan.Address}
                    </span>
                  </div>
                  <div className="artisan-elipse">
                    <div className="description">
                      <img
                        src="/images/rating.png"
                        alt=""
                        className="rating-img"
                      />
                      <span className="skill">
                        Rating:{artisan.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          );
        } )}

      </div>
    </div>
  );
};

export default FindPageComponent;
