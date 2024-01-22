import React  from 'react';
import NavMenuReUse from '../reusecomponent/NavMenuReUse';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import '../style/homepage.css'

const links = [
    {href:'Home',label:'HOME'},
    {href:'Service',label:'SERVICE'},
    {href:'Team',label:'TEAM'},
    {href:'About',label:'ABOUT'},
    {href:'Contact',label:'CONTACT'}
]

function Header(){
    return(
        <>
        <div className='header'>
        <ImageTagReUse src={MySalonLogo} alt='MySalon-logo' className='logo'/>
         <h2 className='brand-name'>MySolan</h2>
         <nav className='nav-bar'>
           <ul>
            {links.map((link)=>{
                return(
                   <NavMenuReUse href={link.href} label={link.label}/>
                )
            })}
           </ul>
         </nav>
       </div>
        </>
    )
}

export default Header;