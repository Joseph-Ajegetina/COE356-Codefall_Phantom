import React from "react";
import AdminPanel from "../AdminPanel/AdminPanel";
import SideBar from "../AdminPanelSideBar/sideBar";
import AdminHome from "../AdminPanel/pages/Adminhome/Adminhome";

const RecordRoute = () => {
  return (
    <>
      <AdminPanel />
      <div className="side">
        <SideBar />
        <AdminHome />
      </div>
    </>
  );
};

export default RecordRoute;
