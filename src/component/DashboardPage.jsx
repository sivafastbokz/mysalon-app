import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import bookingDataApi from '../service/BookingDataApi';
import HeadingTagReuse from '../reusecomponent/HeadingTagReUse';
import Header from './Header';
import Footer from './Footer';
import '../style/dashboardpage.css';

const columns = [
    { field: '_id', headerName: 'ID', width: 130 },
    { field: 'bookingName', headerName: 'Service Name', width: 130 },
    { field: 'bookingDate', headerName: 'Service Date', width: 130 },
    { field: 'bookingTime', headerName: 'Service Time', width: 130},
    { field: 'bookedDate', headerName: 'Booked Date', width: 130},
    { field: 'Action', headerName: 'Action', width: 130},
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