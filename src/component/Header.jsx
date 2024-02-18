import React, { useEffect, useState }  from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import ButtonReUse from '../reusecomponent/ButtonReUse';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import '../style/homepage.css'

function Header(){
    const [data,setData] = useState('');
    const [showNavBar,setShowNavBar]= useState(false);
    
    const loction = useLocation();
    const navigate = useNavigate();

    const homePage = (event)=>{
        event.preventDefault();
        navigate('/mysalon')
    }

    const servicePage = (event)=>{
        event.preventDefault();
        navigate('/mysalon/service')
    }

    const aboutPage = (event)=>{
        event.preventDefault();
        navigate('/mysalon/about')
    } 

    const contactSection = (event)=>{
        event.preventDefault();
        navigate('/mysalon#contactus')
    }
  
    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        setData(!token)
    },[])

    return(
        <>
        <div className='header'>
        <ImageTagReUse src={MySalonLogo} alt='MySalon-logo' className='logo'/>
         <h2 className='brand-name'>MySalon</h2>
         <nav className={showNavBar ? 'nav-bar expand': 'nav-bar'}>
           <ul>
            <li><a href='/mysalon' className={`header-nav ${loction.pathname === '/mysalon' ? 'active':''}`} onClick={homePage}>HOME</a></li>
            <li><a href='/mysalon/service' className={`header-nav ${loction.pathname === '/mysalon/service' ? 'active':''}`} onClick={servicePage}>SERVICE</a></li>
            <li><a href='/mysalon/about' className={`header-nav ${loction.pathname === '/mysalon/about' ? 'active':''}`} onClick={aboutPage}>ABOUT</a></li>
            <li><a href='/mysalon#contactus' className={`header-nav ${loction.pathname === '/mysalon#contactus' ? 'active':''}`} onClick={contactSection}>CONTACT</a></li>
           <li>{data ? <ButtonReUse className='header-signup-btn' label='Sign Up' onClick={()=>navigate('/mysalon/signup')}/> 
            : <ButtonReUse className='myaccount-btn' label='dashboard' onClick={()=>navigate('/mysalon/dashboard')}/>}</li>
           </ul>
         </nav>
         <ButtonReUse label={<i class="fa-solid fa-bars fa-2xl"></i>} className='header-menu' onClick={()=>{setShowNavBar(!showNavBar)}}/>
       </div>
        </>
    )
}

export default Header;