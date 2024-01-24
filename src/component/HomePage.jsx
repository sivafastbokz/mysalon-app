import React  from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonReUse from '../reusecomponent/ButtonReUse';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import Header from './Header';
import ServiceSection from './ServiceSection';
import ContactUsSection from './ContactUsSection';
import Footer from './Footer';
import '../style/homepage.css';

const headingTagLabel = [
  { className:'salon-intro-heading', label:'A Few Words About Us'},
  { className:'salon-intro-h1' ,label:'Welcome to MySalon, where beauty meets elegance! Step into a world of pampering and rejuvenation as we redefine the art of hairstyling and beauty services since 2015.'} 
]

function HomePage(){
  const navigate = useNavigate();

    const servicePage = (event)=>{
       event.preventDefault();
       navigate('/mysalon/service')
    }

    return(
        <>
      <Header/>
      <div className='image'>
       <h3 className='image-text'>
           Fascinating than any <br/>
             fashion salon
        </h3>
        <ButtonReUse className='btn-booknow' label='Book Now' onClick={servicePage}/>
      </div>
      <div className='salon-intro'>
       {headingTagLabel.map((tag)=>{
        return(
          <HeadingTagReUse className={tag.className} label={tag.label} />
        )
       })}
       <ButtonReUse className='knowmore-btn' label='Know More'/>
      </div>
      <ServiceSection/>
      <ContactUsSection/>
      <Footer/>
        </>
    )
}

export default HomePage;