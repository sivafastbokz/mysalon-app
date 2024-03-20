import axiosClient from '../helper/AxiosClient';

const getServiceDetails = async()=>{
    const serviceRes = await axiosClient.get('service/getService').then(res => res.data);
    return serviceRes
}

export default getServiceDetails;