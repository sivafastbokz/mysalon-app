import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import ButtonReUse from '../reusecomponent/ButtonReUse';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import CustomerStyle from '../assets/customerstyle.jpg';
import CustomerStyle2 from '../assets/customerstyle2.jpg';
import CustomerStyle3 from '../assets/customerstyle3.jpg';
import CustomerStyle4 from '../assets/portfolio-6.jpg';
import CustomerStyle5 from '../assets/portfolio-8.jpg';
import CustomerStyle7 from '../assets/customerstyle5.jpg';
import CustomerStyle8 from '../assets/customerstyle6.jpg';
import CustomerStyle9 from '../assets/customerstyle7.jpg';
import CustomerStyle10 from '../assets/modern-hairstyles-for-women.jpg';
import CustomerStyle11 from '../assets/images.jpeg';
import CustomerStyle12 from '../assets/images (2).jpeg';
import CustomerStyle14 from '../assets/images (3).jpeg';
import CustomerStyle15 from '../assets/trendingstyle.jpg';
import CustomerStyle16 from '../assets/images (4).jpeg';
import '../style/homepage.css';

const cutomerImages = [
    {url:CustomerStyle,className:'marquee-image'},
    {url:CustomerStyle2,className:'marquee-image'},
    {url:CustomerStyle3,className:'marquee-image'},
    {url:CustomerStyle4,className:'marquee-image'},
    {url:CustomerStyle5,className:'marquee-image'},
    {url:CustomerStyle7,className:'marquee-image'},
    {url:CustomerStyle9,className:'marquee-image'},
    {url:CustomerStyle11,className:'marquee-image'},
    {url:CustomerStyle12,className:'marquee-image'},
    {url:CustomerStyle14,className:'marquee-image'},
    {url:CustomerStyle15,className:'marquee-image'},
    {url:CustomerStyle16,className:'marquee-image'},
]

const customerReviews = [
    {image:CustomerStyle4,depreciation:'I absolutely love the transformation I received at this salon! The stylists are incredibly talented and attentive. My new look has given me a boost of confidence. Can’t recommend them enough!',personalDetails:'Jackie Chan-china'},
    {image:CustomerStyle9,depreciation:'Incredible experience! The staff is friendly, and the attention to detail is outstanding. I’m thrilled with my new hairstyle. Scarlett did an amazing job!',personalDetails:'Megan Fox-USA'},
    {image:CustomerStyle8,depreciation:'Bruce and the team at this salon are fantastic! The atmosphere is relaxing, and the service is top-notch. I’m  beyond satisfied with my haircut and styling.',personalDetails:'Leonal Andre-UK'},
    {image:CustomerStyle10,depreciation:'This salon exceeded my expectations. The stylist, Scarlett, understood exactly what I wanted, and the result is phenomenal. I’m  so happy with my new look!',personalDetails:'jennifer-UK'}
]

const serviceDep = [
    {serviceTitle:'HAIR COLOUR', depreciation:'Hair color is a true expression of your individuality. Our expert stylists know how to bring your color to life like never before. Whether it’s a bold new look or a natural balayage you’re after, our colorists have the knowledge and experience to create your dream look.'},
    {serviceTitle:'HAIRCUTS & STYLING', depreciation:'Your haircut should be a reflection of your personality, and should cater to your lifestyle. Our professional hair stylists in Brooklyn will design a look and styling routine that best suits your needs. Their recommendations will always be with your hair’s best interest in mind.'},
    {serviceTitle:'SPECIALTY SERVICES', depreciation:'Sometimes you need a change, and we get that. Looking for something outside the scope of cuts, color and styling? Our hair specialists are certified in unique smoothing systems and hair extensions that can dramatically alter your look.'},
    {serviceTitle:'BODY CARE', depreciation:'Your body is a canvas, and we’re here to pamper it. Experience the epitome of relaxation and rejuvenation with our luxurious body care services. From soothing massages to invigorating treatments, our skilled therapists will elevate your well-being to new heights. Let us sculpt and care for your body with the utmost precision and dedication.'},
    {serviceTitle:'SKIN CARE', depreciation:'Unveil the beauty of your skin with our expert skincare services. Our skilled professionals are dedicated to enhancing your natural radiance through personalized treatments. Whether it’s a refreshing facial or a specialized regimen, we tailor our approach to meet your unique skincare needs. Step into a world of glowing skin and renewed confidence with our skincare expertise.'},
    {serviceTitle:'BRIDAL', depreciation:'Your wedding day is a celebration of love and beauty, and we’re here to make it unforgettable. Our bridal services go beyond hairstyling – they capture the essence of your unique style and personality. Trust our skilled team to create timeless bridal elegance that reflects your vision. From pre-wedding preparations to the big day, let us be a part of your journey to bridal perfection.'},
]

function ServiceSection(){
    const navigate = useNavigate();

    const servicePage = (event)=>{
       event.preventDefault();
       navigate('/mysalon/service')
    }

    return(
        <>
        <div className='service-section'>
        <HeadingTagReUse className='service-heading' label='Services'/>
        <h3 className='service-section-subheading'>We Pride Ourselves On Quality</h3>
        <div className='service-col-container'>
        {serviceDep.map((content)=>(
            <div className='service-col'>
            <h3 className='service-col-title'>{content.serviceTitle}</h3>
            <p className='service-col-dep'>{content.depreciation}</p>
            </div>
         ))}
        </div>
        <ButtonReUse label='Book Now' className='viewmoreservice-btn' onClick={servicePage}/>
        <div className='customer-section'>
        <HeadingTagReUse className='customer-heading' label='Check Out Our Clients'/>
        <div className='customerimage-slider'>
            {cutomerImages.map((image)=>(
                <div className='marquee-items'>
                <ImageTagReUse src={image.url} alt='customer-images' className={image.className}/>
        </div>
            ))}
        </div>
        </div>
        <div className='testimonial-section'>
        <HeadingTagReUse className='testimonial-heading' label='Our happy customers say about us'/>
        <div className='testimonial-container'>
           {customerReviews.map((data)=>(
            <div className='testimonial-item'>
            <ImageTagReUse src={data.image} className='testimonial-img'/>
            <p className='testimonial-dep'>{data.depreciation}</p>
            <p className='testimonial-details'>{data.personalDetails}</p>
            </div>
           ))}
        </div>
        </div>
        </div>
        </>
    )
}

export default ServiceSection;