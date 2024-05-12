import React, { useEffect, useState } from 'react';
import { DataGrid,GridRowModes,GridActionsCellItem, } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import bookingDataApi from '../service/BookingDataApi';
import HeadingTagReuse from '../reusecomponent/HeadingTagReUse';
import Header from './Header';
import Footer from './Footer';
import '../style/dashboardpage.css';
   
function DashboardPage(){
  const [serviceData,setServiceData] = useState([]);
  const [editRows, setEditRows] = useState({});

  const userBookingData = async()=>{
     try {
       const response = await bookingDataApi()
       const dataRows = response.fetchBookings
       setServiceData(dataRows)
     } catch (error) {
      console.log(error)
     }
  }

  useEffect(()=>{
    userBookingData()
  },[])
   
  const handleEditClick = (id) => () => {
    setEditRows({ ...editRows, [id]: { mode: GridRowModes.Edit } });
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setEditRows(newRowModesModel);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 130,editable: true },
    { field: 'bookingName', headerName: 'Service Name', width: 130,editable: true },
    { field: 'bookingDate', headerName: 'Service Date', width: 130,editable: true,type: 'date', 
      valueGetter: (params) => new Date(params.row.bookingDate),},
    { field: 'bookingTime', headerName: 'Service Time', width: 130,editable: true},
    { field: 'bookedDate', headerName: 'Booked Date', width: 130,editable: true},
    { field: 'Action', headerName: 'Action', type:'action',width: 130,editable: true,
    renderCell: (params) => {
      const id = params.row._id;
      const isInEditMode = editRows[id]?.mode === GridRowModes.Edit;
      if (isInEditMode) {
        return (
          <>
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: 'primary.main' }}
              // onClick={() => handleSaveClick(id)}
            />
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              sx={{ color: 'error.main' }}
              // onClick={() => handleCancelClick(id)}
            />
          </>
        );
      }

      return (
        <>
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => handleEditClick(id)}
          />
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={() => handleDeleteClick(id)}
          />
        </>
      );
    },
  },
  ];

    return(
        <>
        <Header/>
        <div className='dashboard-title'>
          <HeadingTagReuse label='Appointment History' className='dashboard-title-h1'/>
        </div>
        <div className='data-table'>
      <DataGrid
        rows={serviceData}
        columns={columns}
        editMode='row'
        rowModesModel={editRows}
        onRowModesModelChange={handleRowModesModelChange}
        getRowId={(row)=>row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    <Footer/>
        </>
    )
}

export default DashboardPage;