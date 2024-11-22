import React, { useEffect, useState } from 'react'
import './header.css'
import imagemenu from '../../assets/menu-line (1).svg';
import imagemore from '../../assets/more-2-line.svg';
import './../navber/navber.css'
import Navber from '../navber/Navber';
const Header = ({click,setClick}) => {



  useEffect(()=>{
    const  navbar =document.getElementById("Main-contaner");
    const  Menu =document.getElementById("imageMenu");
    const  h1 =document.getElementById("h1");
    
console.log(navbar);
    navbar.style.right=click? '-1%':
   '-100%';
   Menu.style.display=click?'none':
   'block';
   h1.style.color=click?'black':'white'

   
    
  },[click])
  
  return (
    <>

     <header>
   

      <h1 id='h1'>Welcome to CV</h1>
      <div className="image-menu" id="imageMenu">
        <img src={imagemenu} onClick={setClick}  alt="not found thid image" className='menu' />
      </div>

     </header>
    </>

  )
  

}

export default Header
