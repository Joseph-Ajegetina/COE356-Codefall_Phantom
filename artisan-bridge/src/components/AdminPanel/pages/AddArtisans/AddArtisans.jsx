import "./AddArtisans.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import Message from "../../../navigationBar/Message";
import { Link, useLocation, useHistory, useRouteMatch } from "react-router-dom";

export default function AddArtisans() {
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);
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

  const fetchArtisans = () => {
    fetch("http://127.0.0.1:5000/admin/artisan_table")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Server issues");
        }
      })
      .then((data) => {
        const dataList = Object.values(data);
        setTableData(dataList);
      });
  };

  useEffect(() => {
    fetchArtisans();
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
      field: "Name",
      headerName: "First name",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="artisanListartisan">{params.row.first_name}</div>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return <div className="artisanListartisan">{params.row.last_name}</div>;
      },
    },
    {
      field: "jobDescription",
      headerName: "Job Title",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="artisanListartisan">{params.row.service_id}</div>
        );
      },
    },
    {
      field: "Rating",
      headerName: "Status",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return <div className="artisanListartisan">{params.row.rating}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/artisanEdit/${params.row.id}`}>
              <EditIcon className="artisanEditList" />
            </Link>
            <DeleteOutlineIcon
              key={params.row.id}
              className="artisanListDelete"
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="adminHome">
      {showAlert ? <Message alertMessage={alertMessage} /> : ""}
      <div>
        <Link to="/newArtisan">
          <button className="addArtisanButton">New</button>
        </Link>
      </div>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={9}
        disableSelectionOnClick
      />
    </div>
  );
}
