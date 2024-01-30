import React, { useState } from 'react';
import { Button, Grid,Paper,TextField,Typography,Link,IconButton,Input,InputLabel,InputAdornment,FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import '../style/signinpage.css';

function SignInPage(){
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
         event.preventDefault();
  };

    return(
        <>
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
              fullWidth 
              required 
              />
              <FormControl sx={{  width: '100%' }} variant="standard" margin='normal' required>
                     <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                       <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter Your password'
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
              </Grid>
              <Button 
              type='submit' 
              variant='contained' 
              className='signin-btn' 
              style={{marginTop:'20px',backgroundColor:'#f59f7e'}}
              fullWidth 
              startIcon={<LoginIcon/>}>Sign Up</Button>
              <Typography style={{marginTop:'10px'}}>
                Don't have an account? <Link href='/mysalon/signup' style={{textDecoration:'none'}}>Sign Up</Link>
              </Typography>
            </Paper>
         </Grid>
        </>
    )
}

export default SignInPage;