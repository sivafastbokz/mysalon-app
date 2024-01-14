import React from 'react';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import ServiceCard from '../reusecomponent/ServiceCardReUse';
import ButtonReUse from '../reusecomponent/ButtonReUse';
import '../style/service.css'

function Service(){
    return(
        <>
        <div className='service-section'>
        <HeadingTagReUse className='service-heading' label=' The Services We Provide'/>
        {/* <div className='salon-underline'></div> */}
        <ServiceCard/>
        <ButtonReUse label='View More' className='viewmoreservice-btn'/>
        </div>
        </>
    )
}

export default Service;