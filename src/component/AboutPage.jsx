import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import '../style/aboutpage.css';

const salonStory = [
    {className:'about-section-content',label:'At MySalon, we believe that beauty is an art, and every individual is a canvas waiting to be transformed. Our journey began with a passion for creating exceptional experiences that go beyond the ordinary salon visit.'},
    {className:'about-section-content',label:'Founded by John Wick, our salon is a manifestation of creativity, expertise, and a commitment to our clients. With a team of skilled stylists, aestheticians, and professionals, we’ve curated a space where beauty meets luxury and innovation.'},
    {className:'about-section-content',label:'What sets us apart is our dedication to personalized service. We understand that each client is unique, and our approach reflects this understanding. Whether you’re seeking a bold hair transformation, indulging in rejuvenating spa treatments, or preparing for your special day, our team is here to make your vision a reality.'},
    {className:'about-section-content',label:'Beyond the scissors and brushes, MySalon is committed to sustainability and ethical practices. We strive to create a positive impact on both our clients and the environment. Our products are carefully chosen for their quality and eco-friendly attributes.'},
    {className:'about-section-content',label:'Step into MySalon and experience a blend of skill, passion, and hospitality. Join us on a journey where beauty knows no bounds, and each visit is a celebration of your unique style and individuality.'},
]

const salonPolicie = [
    {h2ClassName:'content-title',pTagClassName:'policies-dep',h2Label:'Cancellation Policy',pTagLabel:'MySalon requires at least 24 hours’ notice for canceling, rescheduling, or changing an appointment. Missed appointments and cancellations or requests to reschedule made less than 24 hours in advance will invoke a cancellation fee equal to 50% of the booked services.'},
    {h2ClassName:'content-title',pTagClassName:'policies-dep',h2Label:'Punctuality',pTagLabel:'Our salon is in the heart of the busy Old Port neighborhood. Please allow extra time for parking and other travel delays. We understand that situations outside your control occur, so please let our team know as soon as possible if you cannot arrive on time. If you arrive late, we may need to reschedule your appointment. You will be considered to have missed your appointment if you are running late to your appointment start time and have yet to contact us.'},
    {h2ClassName:'content-title',pTagClassName:'policies-dep',h2Label:'Adjustments to Services Already Performed',pTagLabel:'Our team’s goal is to have every client feel we exceeded their expectations. If you are unsatisfied after leaving your appointment, we are happy to make adjustments based on the initial consultation. Adjustments to the original service are complimentary.We cannot provide complementary adjustments if you make adjustments yourself or have the service adjusted by another salon. Please get in touch with us within 14 days of your original service to schedule a complimentary adjustment appointment.'},
    {h2ClassName:'content-title',pTagClassName:'policies-dep',h2Label:'Salon Etiquette',pTagLabel:'Please silence cell phones and other devices before your arrival. We ask that clients not arrive accompanied by small children or babies for safety reasons.'}

]

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
        <div className='story-container'>
            <HeadingTagReUse className='story-title'label='Welcome to MySalon'/>
            <div className='about-section'>
                {salonStory.map((content)=>(
                   <p className={content.className}>{content.label}</p>
                ))}
            </div>
        </div>
        <div className='salon-policie-container'>
            <HeadingTagReUse className='policie-title' label='Salon Policies'/>
                   {salonPolicie.map((content)=>(
                    <div className='police-content'>
                    <h2 className={content.h2ClassName}>{content.h2Label}</h2>
                    <p className={content.pTagClassName}>{content.pTagLabel}</p>
                    </div>
                   ))}
        </div>
        <Footer/>
        </>
    )
}

export default AboutUsPage;