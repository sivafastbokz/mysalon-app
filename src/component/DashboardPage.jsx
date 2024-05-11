import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import bookingDataApi from '../service/BookingDataApi';
import HeadingTagReuse from '../reusecomponent/HeadingTagReUse';
import Header from './Header';
import Footer from './Footer';
import '../style/dashboardpage.css';

const columns = [
    { field: '_id', headerName: 'ID', width: 130,editable: true },
    { field: 'bookingName', headerName: 'Service Name', width: 130,editable: true },
    { field: 'bookingDate', headerName: 'Service Date', width: 130,editable: true,type: 'date', 
      valueGetter: (params) => new Date(params.row.bookingDate),
    },
    { field: 'bookingTime', headerName: 'Service Time', width: 130,editable: true},
    { field: 'bookedDate', headerName: 'Booked Date', width: 130,editable: true},
    { field: 'Action', headerName: 'Action', type:'action',width: 130,editable: true},
  ];
   
function DashboardPage(){
  const [serviceData,setServiceData] = useState([]);

  const userBookingData = async()=>{
     try {
       const response = await bookingDataApi()
       setServiceData(response.fetchBookings)
     } catch (error) {
      console.log(error)
     }
  }

  useEffect(()=>{
    userBookingData()
  },[])

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