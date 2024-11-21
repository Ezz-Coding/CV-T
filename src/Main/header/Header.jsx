import React, { useEffect } from 'react'
import './header.css'
import imagemenu from '../../assets/menu-line (1).svg';

import './../navber/navber.css'

const Header = ({click,setClick}) => {



  useEffect(()=>{
    const  navbar =document.getElementById("Main-contaner");
    const  Menu =document.getElementById("imageMenu");
    const  h1 =document.getElementById("h1");
    

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
