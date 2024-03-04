import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid,Paper,TextField,Typography,Link,IconButton,Input,InputLabel,InputAdornment,FormControl } from '@mui/material';
import Alert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import SignInApi from '../service/SignInApi';
import '../style/signinpage.css';

function SignInPage(){
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [invalid,setInvalid] = useState('');
    const [successMsg,setSuccessMsg]= useState(false);
    
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
         event.preventDefault();
  };

    const signUpPage = (event)=>{
    event.preventDefault();
    navigate('/mysalon/signup')
}
  const SignIn = async(event)=>{
       event.preventDefault();
       if(!email || !password){
        setError('Fill The Required Fields');
        return;
    }
       try {
        const response = await SignInApi(email,password);
        const { message,data } = response
        if(message === 'signIn successfull'){
          sessionStorage.setItem('token',data)
          setSuccessMsg(!successMsg)
          setTimeout(()=>{
            navigate('/mysalon/service')
          },1000)
        }else{
          setInvalid('Invalid Email or Password')
        }
       } catch (error) {
         console.log(error)
         setInvalid('Invalid Email or Password')
       }
  }

    return(
        <>
        {successMsg ? 
        <Alert variant='filled' severity='success' style={{width:'100%',maxWidth:'360px',margin:'auto',marginTop:'20px'}}>
         Login Successfull</Alert>
        : ''}
         <Grid>
            <Paper elevation={3}  className='signin-container'>
              <Grid align='center'>
                <ImageTagReUse src={MySalonLogo} className='signin-logo'/>
                <Typography variant='h5' className='signin-title'>SignIn</Typography>
              </Grid>
              <Grid className='input-field'>
              <TextField 
              label='Email' 
              placeholder='Enter Your Email' 
              variant='standard' 
              type='email' 
              margin='normal'
              onChange={(event)=>setEmail(event.target.value)}
              fullWidth 
              required 
              />
              <FormControl sx={{  width: '100%' }} variant="standard" margin='normal' required>
                     <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                       <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter Your password'
                            onChange={(event)=>setPassword(event.target.value)}
                            endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                   </IconButton>
                </InputAdornment>
                     }
                  />
                </FormControl>
                {error && <p className='error-msg-signin'>{error}</p>}
                {invalid &&  <p className='invalid'>{invalid}</p>}
              </Grid>
              <Button 
              type='submit' 
              variant='contained' 
              className='signin-btn' 
              style={{marginTop:'20px',backgroundColor:'#f59f7e'}}
              fullWidth 
              startIcon={<LoginIcon/>}
              onClick={SignIn}>Sign Up</Button>
              <Typography style={{marginTop:'10px'}}>
                Don't have an account? <Link href='/mysalon/signup' onClick={signUpPage} style={{textDecoration:'none'}}>Sign Up</Link>
              </Typography>
            </Paper>
         </Grid>
        </>
    )
}

export default SignInPage;