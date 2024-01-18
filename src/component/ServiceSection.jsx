import React from 'react';
import Marquee from 'react-fast-marquee';
import HeadingTagReUse from '../reusecomponent/HeadingTagReUse';
import ServiceCard from '../reusecomponent/ServiceCardReUse';
import ButtonReUse from '../reusecomponent/ButtonReUse';
import ImageTagReUse from '../reusecomponent/ImageTagReUse';
import CustomerStyle from '../assets/customerstyle.jpg';
import CustomerStyle2 from '../assets/customerstyle2.jpg';
import CustomerStyle3 from '../assets/customerstyle3.jpg';
import CustomerStyle4 from '../assets/portfolio-6.jpg';
import CustomerStyle5 from '../assets/portfolio-8.jpg';
import CustomerStyle6 from '../assets/customerstyle4.jpeg';
import CustomerStyle7 from '../assets/customerstyle5.jpg';
import CustomerStyle8 from '../assets/customerstyle6.jpg';
import CustomerStyle9 from '../assets/customerstyle7.jpg';
import CustomerStyle10 from '../assets/modern-hairstyles-for-women.jpg';
import CustomerStyle11 from '../assets/images.jpeg';
import CustomerStyle12 from '../assets/images (2).jpeg';
import CustomerStyle13 from '../assets/images (1).jpeg';
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
    {url:CustomerStyle6,className:'marquee-image'},
    {url:CustomerStyle7,className:'marquee-image'},
    {url:CustomerStyle8,className:'marquee-image'},
    {url:CustomerStyle9,className:'marquee-image'},
    {url:CustomerStyle10,className:'marquee-image'},
    {url:CustomerStyle11,className:'marquee-image'},
    {url:CustomerStyle12,className:'marquee-image'},
    {url:CustomerStyle13,className:'marquee-image'},
    {url:CustomerStyle14,className:'marquee-image'},
    {url:CustomerStyle15,className:'marquee-image'},
    {url:CustomerStyle16,className:'marquee-image'},
]

const customerReviews = [
    {image:CustomerStyle4,depreciation:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ex tempore sunt repellendus commodi! Quis libero et nobis veritatis. Praesentium non corrupti architecto voluptatibus provident, reiciendis animi quisquam distinctio facere.',personalDetails:'Jackie Chan-china'},
    //{image:CustomerStyle9,depreciation:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ex tempore sunt repellendus commodi! Quis libero et nobis veritatis. Praesentium non corrupti architecto voluptatibus provident, reiciendis animi quisquam distinctio facere.',personalDetails:'Megan Fox-USA'},
    // {image:CustomerStyle8,depreciation:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ex tempore sunt repellendus commodi! Quis libero et nobis veritatis. Praesentium non corrupti architecto voluptatibus provident, reiciendis animi quisquam distinctio facere.',personalDetails:'leo-UK'}
]

function ServiceSection(){
    return(
        <>
        <div className='service-section'>
        <HeadingTagReUse className='service-heading' label=' The Services We Provide'/>
        {/* <div className='salon-underline'></div> */}
        <ServiceCard/>
        <ButtonReUse label='View More' className='viewmoreservice-btn'/>
        <div className='customer-section'>
        <HeadingTagReUse className='customer-heading' label='Chic Creations Gallery'/>
        <Marquee 
        autoFill={true}
        speed={50}
        >
        <div className='customerimage-slider'>
            {cutomerImages.map((image)=>(
                <div className='marquee-items'>
                <ImageTagReUse src={image.url} alt='customer-images' className={image.className}/>
        </div>
            ))}
        </div>
        </Marquee>
        </div>
        <div className='testimonial-container'>
        <HeadingTagReUse className='testimonial-heading' label='Our happy customers say about us'/>
        {/* <Marquee autoFill={true} play={false}> */}
           {customerReviews.map((data)=>(
            <div className='testimonial-item'>
            <ImageTagReUse src={data.image} className='testimonial-img'/>
            <p className='testimonial-dep'>{data.depreciation}</p>
            <p className='testimonial-details'>{data.personalDetails}</p>
            </div>
           ))}
        {/* </Marquee> */}
        </div>
        </div>
        </>
    )
}

export default ServiceSection;