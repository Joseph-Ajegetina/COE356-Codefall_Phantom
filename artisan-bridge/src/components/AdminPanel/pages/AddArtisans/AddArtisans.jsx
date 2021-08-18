import "./AddArtisans.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

export default function AddArtisans() {
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

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
     method:"DELETE"
   }).then(response => {
     if(response.ok){
       return response.json()
     }else{
       console.log("server return something")
     }
   }).then(data =>{
     if (data.deleted){
      setRefresh(refresh + 1);
     }
   })
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
