import React from 'react';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import NavMenuReUse from '../reusecomponent/NavMenuReUse';
import '../style/homepage.css';

const services = [
    {href:'Haircut',label:'Hair Cut'},
    {href:'Hairtrimming',label:'Hair Trimming'},
    {href:'Haircolouring',label:'Hair colouring'},
    {href:'Faical',label:'Facial'},
    {href:'BeardShaving',label:'Beard Shaving'},
    {href:'BeardTrimming',label:'Beard Trimming'},
]

const footerColThreeContent = [
    {label:'Monday&Saturday:9am-5pm'},
    {label:'Tuesday to Friday:9am-8pm'},
    {label:'sunday:Closed'},
    {label:'Email:mysalon@gmail.com'},
    {label:'Phone Number:7896541368'}
]

const socialMediaIcons = [
    {href:'instagram/mysalon',label:<i class="fa-brands fa-square-instagram fa-xl"></i>},
    {href:'youtube/mysalon',label:<i class="fa-brands fa-youtube fa-xl"></i>},
]

function Footer(){
    return(
        <>
         <footer className='footer'>
          <div className='footer-container'>
            <ImageTagReUse src={MySalonLogo} alt='MySalon-logo' className='footer-logo'/>
            <h2 className='footer-myslaon-name'>MySalon</h2>
            <h3 className='social-media-heading'>Follow our work on</h3>
            <ul>
                {socialMediaIcons.map((content)=>(
                    <NavMenuReUse href={content.href} label={content.label}/>
                ))}
            </ul>
          </div>
          <div className='footer-col-two'>
           <h2 className='footer-col-heading'>Our Services</h2>
           <ul>
            {services.map((content)=>(
                <NavMenuReUse href={content.href} label={content.label}/>
            ))}
           </ul>
          </div>
          <div className='footer-col-three'>
           <h2 className='footer-col-three-heading'>Contact</h2>
           <h4 className='footer-col-three-subheading'>By apponitment only</h4>
           {footerColThreeContent.map((content)=>(
            <p className='footer-col-three-content'>{content.label}</p>
           ))}
          </div>
          <div className='footer-address'>
           <h2 className='footer-address-heading'>Where to find us</h2>
           <address className='footer-address-content'>123 Elegant Street,Chicville, <br/>CA 90210,United States.</address>
          </div>
         </footer>
         <div class='copyright'>
           <span> MySalon &copy; Copyright <span>2024</span> | All rights reserved.</span>
        </div>
        </>
    )
}

export default Footer;