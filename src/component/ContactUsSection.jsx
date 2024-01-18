import React from 'react';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import '../style/homepage.css';

function ContactUsSection(){
    return(
        <>
        <div className='contact-section'>
         <div className='contactus-container'>
         <h5 className='contact-title'>CONTACT</h5>
         <HeadingTagReUse className='contact-subtitle' label='Have a question or need assistance?'/>
         <p className='contact-subtitle2'>Fill out the form below, and we'll get back to you shortly!</p>
         <hr className='contact-line'/>
         </div>
        </div>
        </>
    )
}

export default ContactUsSection;