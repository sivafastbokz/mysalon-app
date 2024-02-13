import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header';
import '../style/myaccountpage.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Service Name', headerName: 'Service Name', width: 130 },
    { field: 'Service Date', headerName: 'Service Date', width: 130 },
    { field: 'Service Time', headerName: 'Service Time', width: 130},
    { field: 'Action', headerName: 'Action', width: 130},
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
function DashboardPage(){
    return(
        <>
        <Header/>
        <div className='data-table'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
        </>
    )
}

export default DashboardPage;