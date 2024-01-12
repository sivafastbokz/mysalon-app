import React  from 'react';
import HeaderReUse from '../reusecomponent/HeaderReUse';
import ButtonReUse from '../reusecomponent/ButtonReUse';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import Service from './Service';
import '../style/header.css'

const links = [
    {href:'Home',label:'HOME'},
    {href:'Service',label:'SERVICE'},
    {href:'Team',label:'TEAM'},
    {href:'About',label:'ABOUT'},
    {href:'Contact',label:'CONTACT'}
]

const headingTagLabel = [
  { className:'salom-intro-heading', label:'A Few Words About Us'},
  { className:'salon-intro-h1' ,label:'Welcome to MySalon, where beauty meets elegance! Step into a world of pampering and rejuvenation as we redefine the art of hairstyling and beauty services since 2015.'} 
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
        <ButtonReUse className='btn-booknow' label='Book Now'/>
      </div>
      <div className='salon-intro'>
       {headingTagLabel.map((tag)=>{
        return(
          <HeadingTagReUse className={tag.className} label={tag.label} />
        )
       })}
       <ButtonReUse className='knowmore-btn' label='Know More'/>
      </div>
      <Service/>
        </>
    )
}
export default Header;