import React  from 'react';
import HeaderReUse from '../reusecomponent/HeaderReUse';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import '../style/header.css'

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
        <img src={MySalonLogo} alt='MySalon-logo' className='logo'></img>
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
      <div className='image'>
       <h3 className='image-text'>
           Fascinating than any <br/>
             fashion salon
        </h3>
        <button className='btn-booknow'>Book Now</button>
      </div>
        </>
    )
}
export default Header;