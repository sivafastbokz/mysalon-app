import React  from 'react';
import NavMenuReUse from '../reusecomponent/NavMenuReUse';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import '../style/homepage.css'


const preventReload = (event)=>{
    event.preventDefault();
}

const links = [
    {href:'/mysalon',label:'HOME',nav:{preventReload}},
    {href:'/mysalon/service',label:'SERVICE',nav:{preventReload}},
    {href:'Team',label:'TEAM',nav:{preventReload}},
    {href:'About',label:'ABOUT',nav:{preventReload}},
    {href:'Contact',label:'CONTACT',nav:{preventReload}}
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
                   <NavMenuReUse href={link.href} label={link.label} onClick={link.nav.preventReload}/>
                )
            })}
           </ul>
         </nav>
       </div>
        </>
    )
}

export default Header;