import React  from 'react';
import HeaderReUse from '../reusecomponent/HeaderReUse';
// import getHeaderImg from '../service/HeaderImg';
import HeaderCover from '../assets/header-background-2.jpg';
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
      <div >
        <img src={HeaderCover} alt='Header-cover' className='header-cover'></img>
      </div>
        </>
    )
}
export default Header;