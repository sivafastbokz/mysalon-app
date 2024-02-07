import React from 'react';
import { TextField,Paper,Grid,Button } from '@mui/material';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import Header from './Header';
import Footer from './Footer';
import '../style/bookingpage.css';


const cancellationLabel = [
    {label:'Salon understands that sometimes schedules change and therefore requests at least 24 hours notice when canceling or rescheduling your appointment.'},
    {label:'Credit card information is required to hold your appointment.'},
    {label:'Appointments canceled within the same day or for which clients are a “No-Show” will incur a charge of 100% of the service amount.'},
    {label:'Please note that if you are over 15 minutes late for your appointment we may have to reschedule your service if it cannot be completed in the remaining time frame.'},
    {label:'If we do not hear from you 15 or more minutes into your scheduled appointment time it is considered a “No-Show” and your card will be charged for 100% of the service scheduled.'},
    {label:'Please give a gratuity to the technician in cash. 15% or more is recommended.'},
]


function BookingPage(){
    return(
        <>
        <Header/>
        <HeadingTagReUse className='booking-heading' label='SERIVCE RESERVATION'/>
        <div className='booking-details'>
            <h4 className='details'>
            Appointments may be made through either the form below, or over the phone. Please feel free to call with any questions you may have. For next-day or last-minute appointments, we may not be able to confirm your reservation in time, please call us directly at 646-649-5324 (Mon-Sat 11:00-20:00, Sun 11:00-19:00)
            </h4>
        </div>
        <div className='cancelling-policies'>
         <h2 className='cancelling-policies-title'>Modifying or cancelling a reservation</h2>
         <p className='cancelling-policies-subtitle'>Our salon is by appointment only. In order to accommodate all clients comfortably, we have the following rules in place. Due to seat and staff limitations, please try to avoid cancellations as much as possible.</p>
         <ul>
            {cancellationLabel.map((content)=>(
                <li>{content.label}</li>
            ))}
         </ul>
         <h3 className='cancelling-policies-endtitle'>If you do not understand this policy, we will not be able to accept your reservation in the future.</h3>
        </div>
        <div className='booking-container'>
         <HeadingTagReUse className='booking-container-title' label='Online Booking'/>
         <Paper elevation={3} className='booking-input'>
           <Grid alignItems='center'>
             <TextField
              variant='outlined'
              type='text'
              label='What would you like to have'
              placeholder='Haircut'
              size='normal'
              margin='normal'
              required
              fullWidth
             />
             <TextField
              variant='outlined'
              type='date'
              label='Prefered Date'
              size='normal'
              margin='normal'
              required
              fullWidth
             />
             <TextField
              variant='outlined'
              type='time'
              label='Prefered Time'
              size='normal'
              margin='normal'
              required
              fullWidth
             />
             <Button
             type='submit' 
             variant='contained' 
             style={{marginTop:'20px',backgroundColor:'#f59f7e'}}
             fullWidth
             >BOOK NOW</Button>
           </Grid>
         </Paper>
        </div>
        <Footer/>
        </>
    )
}

export default BookingPage;