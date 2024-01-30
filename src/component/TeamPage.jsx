import React from 'react';
import Header from '../component/Header';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import '../style/teampage.css'

function TeamPage(){
    return(
        <>
       <Header/>
       <div className='team-cover-img'>
            <div className='team-cover-text'>
               <h3 className='team-image-text'>Crafting Beauty with Precision and Dedication</h3>
               <p className='team-image-subtext'>Passionate Stylists, Perfect Results</p>
            </div>
        </div>
        <div className='team-intro'>
            <HeadingTagReUse label='Our Team' className='team-intro-title'/>
            <h2 className='team-intro-content'>
            Elevate Your Style with Our Dedicated Team
            Embark on a journey of beauty and self-discovery at our salon. Indulge in the luxury of personalized styling sessions where you and our talented team collaboratively create a vision tailored to your unique desires. Immerse yourself in an ambiance designed to awaken the senses, complemented by delightful refreshments. Because, at MySalon, it's not just about a hairstyle; it's about crafting an experience that leaves you looking and feeling your absolute best.            </h2>
        </div>
        </>
    )
}

export default TeamPage;