import axiosClient from '../helper/AxiosClient';

const BookingApi = async(bookingName,bookingDate,bookingTime)=>{
    const token = sessionStorage.getItem('token')
    const BookingData = await axiosClient.post('mysalon/booking',{bookingName,bookingDate,bookingTime},{
        headers:{
            'Content-Type':'application/json',
             Authorization:`Bearer ${token}`
        }
    }).then(res=>res.data)
    return BookingData;
    
}

export default BookingApi;