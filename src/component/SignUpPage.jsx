import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid,Paper,TextField,Typography,Link,IconButton,Input,InputLabel,InputAdornment,FormControl } from '@mui/material';
import Alert from '@mui/material/Alert';
// import Collapse from '@mui/material/Collapse';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import SignUpApi from '../service/SignUpApi';
import '../style/signuppage.css';

function SignUpPage(){
    const [showPassword, setShowPassword] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [successMsg,setSuccessMsg]= useState(false);
    
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const signInPage = (event)=>{
      event.preventDefault();
      navigate('/mysalon/signin')
  }

    const CreateAccount = async(event)=>{
        event.preventDefault();
        if(!name || !email || !phoneNumber || !password){
          setError('Fill The Required Fields')
          return;
      }
       if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        setEmailError('Enter a valid email');
        return;
      }
      try {
        await SignUpApi(name,email,phoneNumber,password)
        setSuccessMsg(!successMsg)
        setTimeout(()=>{
          navigate('/mysalon/signin')
        },1000)
      } catch (error) {
        console.log(error)
      }
        
    }
    return(
        <>
        {successMsg ? 
           <Alert variant='filled' severity='success' style={{width:'100%',maxWidth:'360px',margin:'auto',marginTop:'20px'}}>
            Account Created</Alert>
         : ''}
         <Grid>
            <Paper elevation={3}  className='signup-container'>
              <Grid align='center'>
                <ImageTagReUse src={MySalonLogo} className='signup-logo' />
                <Typography variant='h5' className='signup-title'>SignUp</Typography>
              </Grid>
                  <Grid className='input-field'> 
              <TextField
              label='Name' 
              placeholder='Enter Your Name' 
              variant='standard' 
              type='text'
              margin='normal'
              name='name'
              onChange={(event)=>setName(event.target.value)}
              fullWidth 
              required 
              />
              <TextField
              label='Email' 
              placeholder='Enter Your Email' 
              variant='standard' 
              type='email' 
              margin='normal'
              name='email'
              onChange={(event)=>setEmail(event.target.value)}
              error={emailError}
              helperText={emailError}
              fullWidth 
              required 
              />
              <TextField
              label='Phone Number' 
              placeholder='Enter Your Phone Number' 
              variant='standard' 
              type='number' 
              margin='normal'
              name='phoneNumber'
              onChange={(event)=>setPhoneNumber(parseInt(event.target.value,10))}
              fullWidth 
              required 
              />
                <FormControl sx={{  width: '100%' }} variant="standard" margin='normal' required>
                     <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                       <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter Your password'
                            name='password'
                            onChange={(event)=>setPassword(event.target.value)}
                            endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                   </IconButton>
                </InputAdornment>
                     }
                  />
                </FormControl>
                {error &&<p className='error-msg'>{error}</p>}
              </Grid>
              <Button 
              type='submit' 
              variant='contained' 
              className='signup-btn' 
              style={{marginTop:'20px',backgroundColor:'#f59f7e'}}
              fullWidth
              startIcon={<LoginIcon/>}
              onClick={CreateAccount}>Sign Up</Button>
              <Typography style={{marginTop:'10px'}}>
                Already have an account? <Link href='/mysalon/signin' onClick={signInPage} style={{textDecoration:'none'}}>Sign In</Link>
              </Typography>
            </Paper>
         </Grid> 
        </>
    )
}

export default SignUpPage;