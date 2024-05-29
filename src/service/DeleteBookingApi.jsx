import axiosClient from '../helper/AxiosClient';

const DeleteBookingApi = async(id)=>{
    try {
        const token = sessionStorage.getItem('token');
        const response = await axiosClient.delete(`mysalon/delete/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        // console.log(response.data,'res')
        const deleteBooking = response.data.deleteBooking;
        // console.log(deleteBooking, 'api');
        return deleteBooking; 
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default DeleteBookingApi;