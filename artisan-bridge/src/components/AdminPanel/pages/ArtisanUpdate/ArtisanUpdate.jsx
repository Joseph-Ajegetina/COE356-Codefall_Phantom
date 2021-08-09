import "./ArtisanUpdate.scss"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from "react-router-dom";

export default function ArtisanUpdate() {
    return (
        <div className="artisanUpdate">
            <div className="artisanEditContainer">
                <h1 className="artisanEditContainer">Edit Artisan</h1>
                <Link to="/newArtisan"> 
                <button className="addArtisanButton">Create</button>   
                </Link>
            </div>
            <div className="artisanContainer">
                    <div className="artisanShow">
                        <div className="artisanShowTop">
                        <img src="../images/artisan1.jpg" alt="" className="artisanShowImg"/>
                        <div className="artisanshowTopTItle">
                            <span className="artisanShowName"> Atompoya Evans</span>
                            <span className="artisanShowartisanTitle">Electrician</span>
                        </div>
                        </div>
                        
                        <div className="artisanShowBottom">
                            <span className="artisanShowTitle">
                                Account Details
                            </span>
                            <div className="artisanShowInfo">
                            <PermIdentityIcon className="artisanShowIcon"/>
                            <span className="artisanShowInfoTitle">
                                AtompoyaEvans
                            </span>
                            </div>
                            <div className="artisanShowInfo">
                            <CalendarTodayIcon className="artisanShowIcon"/>
                            <span className="artisanShowInfoTitle">
                                28/09/2000
                            </span>
                            </div>
                            <div className="artisanShowInfo">
                            <PhoneAndroidIcon className="artisanShowIcon"/>
                            <span className="artisanShowInfoTitle">
                                0554221525
                            </span>
                            </div>
                            <div className="artisanShowInfo">
                            <LocationSearchingIcon className="artisanShowIcon"/>
                            <span className="artisanShowInfoTitle">
                                Kotei
                            </span>
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
                                    <input type="text" placeholder="Atompoya Evans" className="artisanUpdateInput"/>
                                </div>
                                <div className="artisanEditItem">
                                    <label htmlFor="">BirthDate</label>
                                    <input type="text" placeholder="28/09/2000" className="artisanUpdateInput"/>
                                </div>
                                <div className="artisanEditItem">
                                    <label htmlFor="">Phone Number</label>
                                    <input type="text" placeholder="0554221525" className="artisanUpdateInput"/>
                                </div>
                                <div className="artisanEditItem">
                                    <label htmlFor="">Location</label>
                                    <input type="text" placeholder="Kotei" className="artisanUpdateInput"/>
                                </div>
                               
                            </div>
                            </form>
                            </div>
                            <div className="artisanEditRight">
                            <div className="artisanEditUpload">
                                     <img src="../images/artisan1.jpg" alt="" className="artisanEditImg"/>
                                     <label htmlFor="file"><PublishIcon className="publishButton"/> </label>
                                     <input type="file" style={{display: "none"}} id="file"/>
                                 </div>
                                 <button className="artisanUpdateButton">Update</button>
                            </div>
                        </div>
                        </div>
                </div>
        </div>
    )
}
