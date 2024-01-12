import React from 'react';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import '../style/service.css'

function Service(){
    return(
        <>
        <div className='service-section'>
        <HeadingTagReUse className='service-heading' label=' The Services We Provide'/>
        {/* <div className='salon-underline'></div> */}
        </div>
        </>
    )
}

export default Service;