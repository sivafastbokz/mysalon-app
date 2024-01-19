import React from 'react';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import ButtonReUse from '../reusecomponent/ButtonReUse';
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
         <div className='contact-input-group'>
         <input className='contact-name-input' placeholder='Name'type='text'/>
         <input className='contact-name-input' placeholder='Phone Number'type='number'/>
         <input className='contact-name-input' placeholder='email'type='email'/>
         <textarea placeholder='Leave us a message...' spellCheck='false'className='contact-name-input'></textarea>
         <ButtonReUse label='Get started' className='contact-btn'/>
         </div>
         </div>
         <div className='contact-experience'>
         <ul>
            <li>
                <h1>5+<span>Years</span></h1>
                <p>field experience</p>
            </li>
            <hr/>
            <li>
                <h1>50+<span>Branchs</span></h1>
                <p>Around the globe</p>
            </li>
            <hr/>
            <li>
                <h1>5K+<span>Customres</span></h1>
                <p>Trust Us</p>
            </li>
         </ul>
         </div>
        </div>
        </>
    )
}

export default ContactUsSection;