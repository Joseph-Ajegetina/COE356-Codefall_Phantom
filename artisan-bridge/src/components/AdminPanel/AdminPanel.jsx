import React from "react";
import "./AdminPanel.scss";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="adminPanel">
      <div className="topbarWrapper">
        <div className="topbarleft">
          {" "}
          <h1>
            ARTISAN<span className="text-warning">BRIDGE</span>
          </h1>
        </div>
        <div className="topbarRight">
          <div className="topbarIcons">
            <NotificationsIcon />
            <span className="notificationNumber">2</span>
          </div>
          <div className="topbarIcons">
            <SettingsIcon />
            <span className="notificationNumber">2</span>
          </div>
          <span className="topAvatar">A</span>
          <div className="header-option">
            <span className="LineOne">@Adminuser</span>
            <Link to="/logout">
              <a href="">
                <span className="LineTwo">Sign out</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
