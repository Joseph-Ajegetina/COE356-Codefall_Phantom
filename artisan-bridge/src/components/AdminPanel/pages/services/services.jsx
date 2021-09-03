import "./services.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import Message from "../../../navigationBar/Message";
import { Link, useLocation, useHistory, useRouteMatch } from "react-router-dom";

export default function AddArtisans() {
  const [tableData, setTableData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [showAlert, setShowAlert] = useState();
  const [alertMessage, setAlertMessage] = useState({});
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (location.state) {
      const messageLocation = location.state.messageParams;
      const alertLocation = location.state.alertParams;

      if (messageLocation && alertLocation) {
        setAlertMessage({ message: messageLocation, alert: alertLocation });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        history.replace(url);
      }
    }
  }, []);

  const fetchServices = () => {
    fetch("http://127.0.0.1:5000/services")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Server issues fetching services from the database ");
        }
      })
      .then((data) => {
        const dataList = Object.values(data);
        setTableData(dataList);
      });
  };

  useEffect(() => {
    fetchServices();
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:5000/admin/artisans/edit/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("server return something");
        }
      })
      .then((data) => {
        deleteItemHandler(id);
      });
  };

  const deleteItemHandler = (id) => {
    const updatedTableData = tableData.filter((artisan) => artisan.id !== id);
    setTableData(updatedTableData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "Service",
      headerName: "Service",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="artisanListartisan">
            <img
              src={`/images/${params.row.image}`}
              alt=""
              className="artisanListImg"
            />
            {params.row.service}
          </div>
        );
      },
    },
    {
      field: "Description",
      headerName: "Description",
      width: 500,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={"/serviceEdit/" + params.row.id}>
              <EditIcon className="artisanEditList" />
            </Link>
            <DeleteOutlineIcon
              className="artisanListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="adminHome">
      {showAlert ? <Message alertMessage={alertMessage} /> : ""}
      <Link to="/newService">
        <button className="addArtisanButton px-4 display-block">New</button>
      </Link>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={9}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
