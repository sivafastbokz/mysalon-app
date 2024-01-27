import React from 'react';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import Header from './Header';
import '../style/servicepage.css';

function ServicePage(){
    return(
        <>
        <Header/>
        <div className='service-cover-img'>
            <div className='service-cover-text'>
               <h3 className='service-image-text'>Because It Has To Be Perfect</h3>
               <p className='service-image-subtext'>Discover Your Own Style</p>
            </div>
        </div>
        <div className='service-intro'>
            <HeadingTagReUse label='Salon Services' className='service-intro-title'/>
            <h2 className='service-intro-content'>
               We all deserve to look and feel our best. Why not get pampered while doing it? From the moment you enter our salon, you will be met with an experience built to tantalize the senses. Sip on a crisp glass of champagne or a steaming hot tea while you and your Lifestylist craft a styling plan based on your unique wants and needs.
            </h2>
            <HeadingTagReUse label='More Than a Salon. An Experience.' className='service-intro-endtitle'/>
        </div>
        </>
    )
}

export default ServicePage;