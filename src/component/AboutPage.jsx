import React from 'react';
import Header from './Header';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import '../style/aboutpage.css'

function AboutUsPage(){
    return(
        <>
        <Header/>
        <div className='about-cover-img'>
            <div className='about-cover-text'>
               <h3 className='about-image-text'>Dedicated to Crafting Beauty with Precision</h3>
               <p className='about-image-subtext'>Where Passionate Stylists Deliver Perfect Results</p>
            </div>
        </div>
        <div className='about-intro'>
            <HeadingTagReUse label='About Us' className='about-intro-title'/>
            <h2 className='about-intro-content'>Embark on a journey of beauty and self-discovery at Mysalon. Our dedicated team of passionate stylists is committed to crafting a unique vision tailored to your desires. Immerse yourself in an ambiance designed to awaken the senses, where personalized styling sessions are elevated to an art form. Indulge in the luxury of our salon experience, complemented by delightful refreshments. At Mysalon, it's more than just a hairstyle; it's an immersive experience that leaves you looking and feeling your absolute best.</h2>
        </div>
        </>
    )
}

export default AboutUsPage;