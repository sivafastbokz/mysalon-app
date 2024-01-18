import React  from 'react';
import HeaderReUse from '../reusecomponent/HeaderReUse';
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
                   <HeaderReUse href={link.href} label={link.label}/>
                )
            })}
           </ul>
         </nav>
       </div>
        </>
    )
}

export default Header;