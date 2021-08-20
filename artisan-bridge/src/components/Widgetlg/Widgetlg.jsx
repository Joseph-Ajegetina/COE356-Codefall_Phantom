import "./Widgetlg.scss";
import { useState, useEffect } from "react";
export default function Widgetsm() {
  const [records, setRecords] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchRecordsData = () => {
    fetch("http://127.0.0.1:5000/admin/report/0")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Server returned status code other than 200");
        }
      })
      .then((data) => {
        const dataList = Object.entries(data);
        setRecords(dataList);
      });
  };

  useEffect(() => {
    fetchRecordsData();
  }, [refreshKey]);
  console.log(records);

  const Button = ({ type }) => {
    return (
      <button className={"widgetlgButton " + type} type>
        {type}
      </button>
    );
  };
  return (
    <div className="Widgetlg">
      <h5 className="widgetsmTitle">Latest Transactions</h5>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">User</th>
          <th className="widgetlgTh">Artisan</th>
          <th className="widgetlgTh">Service</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        {records.map((record) => {
          const recordNum = record[0];
          const recordData = record[1];

          return (
            <tr className="widgetlgTr">
              <td className="widgetlgUser">
                <img src="images/artisan1.jpg" alt="" className="widgetlgImg" />
                <span className="widgetlgName">{recordData.customer}</span>
              </td>
              <td className="widgetlgName">{recordData.artisan}</td>
              <td className="widgetlgName">{recordData.skill}</td>
              <td className="widgetlgDate">{recordData.date}</td>
              <td className="widgetlgStatus">
                <Button type="Approved" />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
