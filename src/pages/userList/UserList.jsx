import "./userList.css"
import * as React from 'react';
// import { DataGrid } from "@mui/x-data-grid";
import DataTable from 'react-data-table-component';


export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
  ];

  const rows = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    // Add more rows as needed
  ];
return (
<div>
      <h1>Data Table Example</h1>
      <DataTable rows={rows} columns={columns} />
    </div>

  )
}
