import axios from 'axios';
import serverConfigs from '../configs/ServerConfigs';

const axiosClient = axios.create({
    baseURL:serverConfigs,
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
})
export default axiosClient;