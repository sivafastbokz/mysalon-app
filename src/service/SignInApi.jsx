import axiosClient from '../helper/AxiosClient';

const SignInApi = async(email,password)=>{
    const signInData = await axiosClient.post('mysalon/signin',{email,password}).then(res=>res.data)
    return signInData;
}

export default SignInApi;