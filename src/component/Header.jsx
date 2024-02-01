import React  from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import NavMenuReUse from '../reusecomponent/NavMenuReUse';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import ButtonReUse from '../reusecomponent/ButtonReUse';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import '../style/homepage.css'

function Header(){
    const preventReload = (event)=>{
        event.preventDefault();
    }
    
    const loction = useLocation();
    const navigate = useNavigate();

    const signUpPage = (event)=>{
        event.preventDefault();
        navigate('/mysalon/signup')
    }
    
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
            <ButtonReUse className='header-signup-btn' label='Sign Up' onClick={signUpPage}/>
           </ul>
         </nav>
       </div>
        </>
    )
}

export default Header;