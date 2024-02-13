import axiosClient from '../helper/axiosClient';

const bookingDataApi = async()=>{
    const token = sessionStorage.getItem('token')
    return await axiosClient.get('mysalon/bookings',{
        headers:{
            'Content-Type':'application/json',
             Authorization:`Bearer ${token}`
        }
    }).then(res=>res.data)
}

export default bookingDataApi;