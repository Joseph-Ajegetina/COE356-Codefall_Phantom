import "./ServiceUpdate.scss";
import TitleIcon from "@material-ui/icons/Title";
import DescriptionIcon from "@material-ui/icons/Description";
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";

export default function ServiceUpdate() {
  return (
    <div className="serviceUpdate">
      <div className="artisanEditContainer">
        <h1 className="artisanEditContainer">Edit Service</h1>
      </div>
      <div className="artisanContainer">
        <div className="artisanShow">
          <div className="artisanShowTop">
            <img
              src="../images/elipseimage1.png"
              alt=""
              className="artisanShowImg"
            />
            <div className="artisanshowTopTItle">
              <span className="artisanShowName"> Electronics</span>
            </div>
          </div>

          <div className="artisanShowBottom">
            <span className="artisanShowTitle">Service Details</span>
            <div className="artisanShowInfo">
              <TitleIcon className="artisanShowIcon" />
              <span className="artisanShowInfoTitle">Electronics</span>
            </div>
            <div className="artisanShowInfo">
              <DescriptionIcon className="artisanShowIcon" />
              <span className="artisanShowInfoTitle">Some Text</span>
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
                    <label>Name of Service</label>
                    <input
                      type="text"
                      placeholder="Electronics"
                      className="artisanUpdateInput"
                    />
                  </div>
                  <div className="artisanEditItem">
                    <label htmlFor="">Description</label>
                    <input
                      type="text"
                      placeholder="Some Text"
                      className="artisanUpdateInput"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="artisanEditRight">
              <div className="artisanEditUpload">
                <img
                  src="../images/elipseimage1.png"
                  alt=""
                  className="artisanEditImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="publishButton" />{" "}
                </label>
                <input type="file" style={{ display: "none" }} id="file" />
              </div>
              <button className="artisanUpdateButton">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
