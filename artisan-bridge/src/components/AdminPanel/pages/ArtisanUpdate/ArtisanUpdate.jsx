import "./ArtisanUpdate.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import PublishIcon from "@material-ui/icons/Publish";
import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Message from "../../../navigationBar/Message";

export default function ArtisanUpdate() {

    const[artisan, setArtisan] = useState({});
    const[refreshKey, setRefreshKey] = useState(0);
    const {artisanID} = useParams();
    const [showAlert, setShowAlert] = useState();
    const [alertMessage, setAlertMessage] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
      //Fetching the artisan details using the id
  const fetchArtisanData = () => {
    fetch(`http://127.0.0.1:5000/find_artisan/${artisanID}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);

        setArtisan(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  //useEffect to run once
  useEffect(() => {
    fetchArtisanData();
  
  }, [refreshKey]);
  const updateHandler = () =>{
      
  }
  return (
    <>
    {showAlert ? <Message alertMessage={alertMessage} /> : ""}
    {isError ? <Message alertMessage={{message:"An Error occured while fetching artisan data", alert:"danger"}}/> : ""}
    <div className="artisanUpdate">
      <div className="artisanEditContainer">
        <h1 className="artisanEditContainer">Edit Artisan</h1>
      </div>
      <div className="artisanContainer">
        <div className="artisanShow">
          <div className="artisanShowTop">
            <img
              src={artisan.Path}
              alt=""
              className="artisanShowImg"
            />
            <div className="artisanshowTopTItle">
              <span className="artisanShowName"> {artisan.Name}</span>
              <span className="artisanShowartisanTitle">{artisan.Expertise}</span>
            </div>
          </div>

          <div className="artisanShowBottom">
            <span className="artisanShowTitle">Account Details</span>
            <div className="artisanShowInfo">
              <PermIdentityIcon className="artisanShowIcon" />
              <span className="artisanShowInfoTitle">{artisan.Name}</span>
            </div>
            <div className="artisanShowInfo">
              <CalendarTodayIcon className="artisanShowIcon" />
              <span className="artisanShowInfoTitle">28/09/2000</span>
            </div>
            <div className="artisanShowInfo">
              <PhoneAndroidIcon className="artisanShowIcon" />
              <span className="artisanShowInfoTitle">{artisan.contact}</span>
            </div>
            <div className="artisanShowInfo">
              <LocationSearchingIcon className="artisanShowIcon" />
              <span className="artisanShowInfoTitle">{artisan.Address}</span>
            </div>
          </div>
        </div>
        <div className="artisanEdit">
          <span className="artisanEditTitle">Edit</span>
          <div className="leftRight">
            <div className="artisanEditLeft">
              <form action="" className="artisanEditForm">
                <div className="artisanEditLeft">
                  <div className="artisanEditItem">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder={artisan.Name}
                      className="artisanUpdateInput"
                    />
                  </div>
                  <div className="artisanEditItem">
                    <label htmlFor="">BirthDate</label>
                    <input
                      type="text"
                      placeholder="28/09/2000"
                      className="artisanUpdateInput"
                    />
                  </div>
                  <div className="artisanEditItem">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      placeholder={artisan.contact}
                      className="artisanUpdateInput"
                    />
                  </div>
                  <div className="artisanEditItem">
                    <label htmlFor="">Location</label>
                    <input
                      type="text"
                      placeholder={artisan.Address}
                      className="artisanUpdateInput"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="artisanEditRight">
              <div className="artisanEditUpload">
                <img
                  src={artisan.Path}
                  alt=""
                  className="artisanEditImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="publishButton" />{" "}
                </label>
                <input type="file" style={{ display: "none" }} id="file" />
              </div>
              <button className="artisanUpdateButton" onClick={updateHandler}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
