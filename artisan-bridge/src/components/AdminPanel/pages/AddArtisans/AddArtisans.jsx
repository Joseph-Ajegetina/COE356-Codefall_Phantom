import "./AddArtisans.scss";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

export default function AddArtisans() {
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });
  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
    console.log(1);
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
          <div className="artisanListartisan">
            <img src={params.row.avatar} alt="" className="artisanListImg" />
            {params.row.firstName}
          </div>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 200,
      editable: true,
    },
    {
      field: "jobDescription",
      headerName: "Job Title",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={"/artisanEdit/" + params.row.id}>
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
