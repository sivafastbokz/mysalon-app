import React, { useState } from 'react';
import { Button, Grid,Paper,TextField,Typography,Link,IconButton,Input,InputLabel,InputAdornment,FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
// import SignUpApi from '../service/SignUpApi';
import '../style/signuppage.css';

function SignUpPage(){
    const [showPassword, setShowPassword] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [password,setPassword] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const CreateAccount = (event)=>{
        event.preventDefault();
        console.log(name,email,phoneNumber,password)
    }
    return(
        <>
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
              onChange={(event)=>setPhoneNumber(event.target.value)}
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
                Already have an account? <Link href='/mysalon/signin' style={{textDecoration:'none'}}>Sign In</Link>
              </Typography>
            </Paper>
         </Grid> 
        </>
    )
}

export default SignUpPage;