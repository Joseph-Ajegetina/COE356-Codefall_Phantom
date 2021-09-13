import "./Widgetsm.scss";
import { useState, useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function Widgetsm() {
  const [users, setUsers] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchUsersData = () => {
    fetch("http://127.0.0.1:5000/admin/customer_table")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Server returned status code other than 200");
        }
      })
      .then((data) => {
        const dataList = Object.entries(data);
        setUsers(dataList);
      });
  };

  useEffect(() => {
    fetchUsersData();
  }, [refreshKey]);
  console.log(users);

  return (
    <div className="Widgetsm">
      <h5 className="widgetsmTitle">Users</h5>
      <ul className="widgetsmList">
        {users.map((user) => {
          const userNum = user[0];
          const userData = user[1];

          return (
            <li className="widgetsmListItem">
              <img src="images/artisan1.jpg" alt="" className="widgetsmImg" />
              <div className="widgetsmUser">
                <span className="widgetsmUsername">
                  {userData.customer_username}
                </span>
                <span className="widgetsmUserJob">{userData.address}</span>
              </div>
              <button className="widgetsmbutton">
                <VisibilityIcon className="widgetsmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
