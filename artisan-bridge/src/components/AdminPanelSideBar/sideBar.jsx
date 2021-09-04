import React from "react";
import "./sideBar.scss";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import { Link } from "react-router-dom";

export default function sideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h5 className="sideBarTitle">DashBoard</h5>
          <ul className="sideBarList">
            <Link to="/admin">
              <li className="sideBarListItem">
                <LineStyleIcon className="sideBarIcon" /> <a href="">Home</a>
              </li>
            </Link>
            <Link to="/artisans">
              <li className="sideBarListItem">
                <PersonOutlineOutlinedIcon className="sideBarIcon" />{" "}
                <a href="">Artisans</a>
              </li>
            </Link>
            <Link to="/services">
              <li className="sideBarListItem">
                <ShoppingBasketOutlinedIcon className="sideBarIcon" />{" "}
                <a href="">Services</a>
              </li>
            </Link>
            <Link to="/transactions">
              <li className="sideBarListItem">
                <AssessmentOutlinedIcon className="sideBarIcon" />{" "}
                <a href="">Transactions</a>
              </li>
            </Link>

            <li className="sideBarListItem">
              <ReportOutlinedIcon className="sideBarIcon" />{" "}
              <a href="">Reports</a>
            </li>
          </ul>
          <h5 className="sideBarTitle">Notifications</h5>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutlineOutlinedIcon className="sideBarIcon" />{" "}
              <a href="https://mail.google.com/mail/u/0/#inbox">Mail</a>
            </li>
            <li className="sideBarListItem">
              <FeedbackOutlinedIcon className="sideBarIcon" />{" "}
              <a href="">FeedBack</a>
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutlineOutlinedIcon className="sideBarIcon" />{" "}
              <a href="">Messsages</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
