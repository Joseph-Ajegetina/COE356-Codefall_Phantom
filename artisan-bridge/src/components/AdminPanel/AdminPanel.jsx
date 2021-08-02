import React from 'react'
import "./AdminPanel.scss"
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';




export default function AdminPanel() {
    return (
        <div className="adminPanel">
           <div className="topbarWrapper">
               <div className="topbarleft"> <h1>
                 ARTISAN<span className="text-warning">BRIDGE</span></h1></div>
               <div className="topbarRight">
                   <div className="topbarIcons">
                       <NotificationsIcon/><span className="notificationNumber">2</span>
                   </div>
                   <div className="topbarIcons">
                      <SettingsIcon/><span className="notificationNumber">2</span>
                   </div>
                       <img src="images/artisan1.jpg" alt="" className="topAvatar"/>
                   <div className="header-option">
                    <span className="LineOne">@Adminuser</span>
                    <a href="">
                         <span className="LineTwo">Sign out</span>
                         </a>
                         
                   </div>
               </div>
           </div>
        </div>
    )
}
 