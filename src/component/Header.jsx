import React, { useEffect, useState }  from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import NavMenuReUse from '../reusecomponent/NavMenuReUse';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import ButtonReUse from '../reusecomponent/ButtonReUse';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import '../style/homepage.css'

function Header(){
    const [data,setData] = useState('');
    const preventReload = (event)=>{
        event.preventDefault();
    }
    
    const loction = useLocation();
    const navigate = useNavigate();
  
    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        setData(!token)
    },[])
    
    
    const links = [
        {href:'/mysalon',label:'HOME',nav:{preventReload},className:`header-nav ${loction.pathname === '/mysalon' ? 'active':''}`},
        {href:'/mysalon/service',label:'SERVICE',nav:{preventReload},className:`header-nav ${loction.pathname === '/mysalon/service' ? 'active':''}`},
        {href:'/mysalon/about',label:'ABOUT',nav:{preventReload},className:`header-nav ${loction.pathname === '/mysalon/about' ? 'active':''}`},
        {href:'/mysalon#contactus',label:'CONTACT',nav:{preventReload},className:`header-nav ${loction.pathname === '/mysalon#contactus' ? 'active':''}`},
    ]

    return(
        <>
        <div className='header'>
        <ImageTagReUse src={MySalonLogo} alt='MySalon-logo' className='logo'/>
         <h2 className='brand-name'>MySalon</h2>
         <nav className='nav-bar'>
           <ul>
            {links.map((link)=>{
                return(
                   <NavMenuReUse href={link.href} label={link.label} className={link.className}/>
                )
            })}
            {data ? <ButtonReUse className='header-signup-btn' label='Sign Up' onClick={()=>navigate('/mysalon/signup')}/> 
            : <ButtonReUse className='myaccount-btn' label='My Account' onClick={()=>navigate('/mysalon/myaccount')}/> }
           </ul>
         </nav>
       </div>
        </>
    )
}

export default Header;