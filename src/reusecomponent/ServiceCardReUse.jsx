import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getServiceDetails from '../service/ServiceDetails';
import ButttonReuse from './ButtonReUse'
import '../style/homepage.css';

function ServiceCard(){
  const[serviceData,setServiceData]=useState([]);
  const navigate = useNavigate();
 
  const serviceDetails = async()=>{
   try {
    const response = await getServiceDetails()
    setServiceData(response.fetchService)
   } catch (error) {
    console.log(error)
   }
  }

  useEffect(()=>{
   serviceDetails();
  },[])

  const appointmentPage = (event)=>{
    event.preventDefault();
    const token = sessionStorage.getItem('token')
    if(token === null){
       navigate('/mysalon/signup')
    }else{
       navigate('/mysalon/bookings')
    }
  }

    return(
        <>
       <div className='container'>
        {serviceData.map((data)=>(
           <div className='card' key={data._id}>
           <img src={data.serviceImage} alt='service-img' className='service-image'></img>
           <p className='service-name'>{data.serviceName}</p>
           <p className='service-price'>&#8377;{data.servicePrice}</p>
            <ButttonReuse label='Get a session' className='serviceBooking-btn' onClick={appointmentPage}/>
           </div>
        ))}
       </div>
        </>
    )
}

export default ServiceCard;