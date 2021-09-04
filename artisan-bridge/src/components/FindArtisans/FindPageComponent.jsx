import React from "react";
import { Link } from "react-router-dom";

const FindPageComponent = ({ skill, data }) => {
  return (
    <>
      <h3>{skill}</h3>
      <div classNam="container">
        <div className="row ">
          {data.map((artisan) => {
            return (
              <div className="col">
                <div className="artisan-wrapper-center">
                  <Link
                    to={{
                      pathname: `/artisan/${artisan.id}`,
                      state: { artisan: artisan },
                    }}
                    className="wrapper-link"
                  >
                    <div className="artisan-wrapper">
                      <div>
                        <img
                          src={`/images/${artisan.Path}`}
                          alt=""
                          className="artisan-img img-fluid"
                        />
                      </div>
                      <div className="artisan-elipse">
                        <div className="description">
                          <img
                            src="/images/location.png"
                            alt=""
                            className="rating-img"
                          />
                          <span className="skill display-12">
                            Location:{artisan.Address}
                          </span>
                        </div>
                      </div>
                      <div className="artisan-elipse">
                        <div className="description">
                          <img
                            src="/images/rating.png"
                            alt=""
                            className="rating-img"
                          />
                          <span className="skill display-12">
                            Rating:{artisan.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FindPageComponent;
