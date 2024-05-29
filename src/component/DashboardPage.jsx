import React, { useEffect, useState } from 'react';
import { DataGrid,GridRowModes,GridActionsCellItem, } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import bookingDataApi from '../service/BookingDataApi';
import HeadingTagReuse from '../reusecomponent/HeadingTagReUse';
import DeleteBookingApi from '../service/DeleteBookingApi';
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
    setEditRows((prev) => ({ ...prev, [id]: { mode: GridRowModes.Edit } }));
  };
  
  const handleSaveClick = (id) => () => {
    setEditRows((prev) => ({ ...prev, [id]: { mode: GridRowModes.View } }));
  };
  
  const handleDeleteClick = async (id) => {
    try {
      const deleteBooking = await DeleteBookingApi(id);
      if (deleteBooking === 200) {
        setServiceData((prev) => prev.filter((data) => data.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleCancelClick = (id) => () => {
    setEditRows((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    }));
  };
  const handleRowModesModelChange = (newRowModesModel) => {
    setEditRows(newRowModesModel);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 130,editable:false },
    { field: 'bookingName', headerName: 'Service Name', width: 130,editable: true },
    { field: 'bookingDate', headerName: 'Service Date', width: 130,editable: true,type: 'date', 
      valueGetter: (params) => new Date(params.row.bookingDate),},
    { field: 'bookingTime', headerName: 'Service Time',type:'time', width: 130,editable: true},
    { field: 'bookedDate', headerName: 'Booked Date', width: 130,editable: false},
    { field: 'Action', headerName: 'Actions', type:'Action',cellClassName: 'Action',width: 130,
    renderCell: ({id}) => {
      const isInEditMode = editRows[id]?.mode === GridRowModes.Edit;
      if (isInEditMode) {
        return (
          <>
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: 'primary.main' }}
              onClick={()=>handleSaveClick(id)}
            />
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              sx={{ color: 'inherit' }}
              onClick={handleCancelClick(id)}
            />
          </>
        );
      } else {
        return (
          <>
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  onClick={handleEditClick(id)}
                  color='inherit'
                />
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  color='inherit'
                  onClick={()=>handleDeleteClick(id)}
                />
          </>
        );
      }
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
      />
    </div>
    <Footer/>
        </>
    )
}

export default DashboardPage;