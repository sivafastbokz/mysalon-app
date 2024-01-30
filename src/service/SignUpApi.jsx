import axiosClient from '../helper/AxiosClient';

const SignUpApi = async(name,email,phoneNumber,password)=>{
        const postData = await axiosClient.post('mysalon/signup',{name,email,phoneNumber,password}).then(res=>res.data)
        return postData;
}

export default SignUpApi;