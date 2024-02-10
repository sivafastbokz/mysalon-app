import React from 'react';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import '../style/myaccountpage.css';

function MyAccountPage(){
    return(
        <>
         <div className='sidebar'>
           <ImageTagReUse src={MySalonLogo} alt='mySalon-logo' className='mysalon-logo'/>
           <HeadingTagReUse label='MySalon' className='mysalon-title'/>
           <hr className='sidebar-line'/>
         </div>
        </>
    )
}

export default MyAccountPage;