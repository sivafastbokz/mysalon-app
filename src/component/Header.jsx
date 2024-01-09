import React  from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderReUse from '../reusecomponent/HeaderReUse';
// import getHeaderImg from '../service/HeaderImg';
import HeaderCover from '../assets/header-background-2.jpg';
import HeaderCover2 from '../assets/header-background-1.jpg';
import MySalonLogo from '../assets/beauty-salon_logo_96dp.png';
import '../style/header.css'


const links = [
    {href:'Home',label:'HOME'},
    {href:'Service',label:'SERVICE'},
    {href:'Team',label:'TEAM'},
    {href:'About',label:'ABOUT'},
    {href:'Contact',label:'CONTACT'}
]

function Header(){
  // const[image,setImage] =useState([]);
  // console.log(image,'img')
  // const getImg = async()=>{
  //   try {
  //     const response = await getHeaderImg();
  //     console.log(response,'res')
  //     setImage(response);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(()=>{
  //   getImg();
  // },[])

    return(
        <>
       <div className='header'>
        <img src={MySalonLogo} alt='MySalon-logo' className='logo'></img>
         <h2 className='brand-name'>MySolan</h2>
         <nav className='nav-bar'>
           <ul>
            {links.map((link)=>{
                return(
                   <HeaderReUse href={link.href} label={link.label}/>
                )
            })}
           </ul>
         </nav>
       </div>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div >
        <img src={HeaderCover} alt='Header-cover' className='header-cover'></img>
      </div>
      <div>
        <img src={HeaderCover2} alt='Header-cover' className='header-cover' />
      </div>
      </Carousel>
        </>
    )
}
export default Header;